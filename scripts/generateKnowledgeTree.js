import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

let XLSX;
try {
  const xlsxModule = await import("xlsx");
  XLSX = xlsxModule.default ?? xlsxModule;
  if (typeof XLSX.read !== "function" || typeof XLSX.utils?.sheet_to_json !== "function") {
    throw new Error("Unexpected xlsx module shape.");
  }
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Failed to load xlsx module: ${message}`);
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const knowledgeWorkbookPath = path.resolve(projectRoot, "知識樹分類.xlsx");
const hrWorkbookPath = path.resolve(projectRoot, "人資資料.xlsx");
const outputPath = path.resolve(projectRoot, "src/app/data/generated/domainCatalog.ts");

// 來源 xlsx（含真實人資資料）刻意不進版控。若本機缺檔（例如 CI/Vercel），
// 就略過重新產生、沿用已提交且已去識別化的 domainCatalog.ts，避免建置失敗。
if (!fs.existsSync(knowledgeWorkbookPath) || !fs.existsSync(hrWorkbookPath)) {
  const missing = [
    fs.existsSync(knowledgeWorkbookPath) ? null : path.basename(knowledgeWorkbookPath),
    fs.existsSync(hrWorkbookPath) ? null : path.basename(hrWorkbookPath),
  ].filter(Boolean);
  console.warn(
    `[generateKnowledgeTree] 找不到來源檔 (${missing.join(", ")})，略過重新產生，` +
      `沿用既有 ${path.relative(projectRoot, outputPath)}`,
  );
  process.exit(0);
}

function normalizeText(value) {
  return String(value ?? "").trim();
}

// 去識別化：只遮罩中文姓名，保留姓氏，其餘改成 oo（例：王曉明 → 王oo）。
// 英文別名與員編依需求保留原值，不在此處理。
const COMPOUND_SURNAMES = [
  "歐陽", "司馬", "諸葛", "上官", "司徒", "夏侯", "皇甫", "尉遲",
  "端木", "公孫", "令狐", "慕容", "長孫", "宇文", "赫連", "澹台",
  "濮陽", "東方", "獨孤", "南宮",
];

function maskPersonName(value) {
  const name = normalizeText(value);
  if (!name) return name;
  // 含空白的西方/羅馬拼音姓名：保留第一段（姓），其餘以 oo 取代
  if (/\s/.test(name)) {
    const [first] = name.split(/\s+/);
    return `${first} oo`;
  }
  const surnameLength = COMPOUND_SURNAMES.some((surname) => name.startsWith(surname)) ? 2 : 1;
  return `${name.slice(0, surnameLength)}oo`;
}

function toBoolean(value) {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  const normalized = normalizeText(value).toLowerCase();
  return normalized === "true" || normalized === "1" || normalized === "yes" || normalized === "y";
}

function toNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function hashSeed(seed) {
  let hash = 0x811c9dc5;
  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(36);
}

function createStableId(prefix, seed) {
  return `${prefix}-${hashSeed(seed)}`;
}

function parseRules(workbook, datasetName) {
  const sheet = workbook.Sheets.rules;
  if (!sheet) {
    throw new Error(`rules sheet not found for ${datasetName}`);
  }
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: "" });
  const row = rows[1] ?? [];
  return {
    dataset: normalizeText(row[0]),
    maxLevel: toNumber(row[1], 0),
    allowSelectWhenNoChild: toBoolean(row[2]),
    replaceMode: normalizeText(row[3]),
    errorPolicy: normalizeText(row[4]),
  };
}

function buildKnowledgeCatalog(workbook) {
  const sheet = workbook.Sheets.knowledge_tree_nodes;
  if (!sheet) {
    throw new Error("knowledge_tree_nodes sheet not found.");
  }

  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: "" });
  const nodes = [];
  const errors = [];
  const nodeByKey = new Map();
  const pathSet = new Set();
  const sourceFile = path.basename(knowledgeWorkbookPath);
  const maxLevel = 4;

  for (const [index, row] of rows.slice(2).entries()) {
    const rowNumber = index + 3;
    const level = toNumber(row[0], 0);
    const nodeName = normalizeText(row[1]);
    const nodeCode = normalizeText(row[2]);
    const parentNodeName = normalizeText(row[3]);
    const parentNodeCode = normalizeText(row[4]);
    const ownerWindowName = normalizeText(row[5]);
    const isActive = toBoolean(row[6]);
    const sortOrder = toNumber(row[7], rowNumber);
    const sourceRowNo = toNumber(row[8], rowNumber);

    if (!nodeName) {
      errors.push({
        sourceType: "knowledge_tree",
        rowNumber,
        rawRow: row,
        errorType: "missing_node_name",
        errorMessage: "缺少節點名稱",
      });
      continue;
    }

    if (level < 1 || level > maxLevel) {
      errors.push({
        sourceType: "knowledge_tree",
        rowNumber,
        rawRow: row,
        errorType: "invalid_level",
        errorMessage: `節點層級 ${level} 超出允許範圍 1-${maxLevel}`,
      });
      continue;
    }

    if (level > 1 && !parentNodeName) {
      errors.push({
        sourceType: "knowledge_tree",
        rowNumber,
        rawRow: row,
        errorType: "missing_parent",
        errorMessage: "非第一層節點缺少父節點名稱",
      });
      continue;
    }

    const parentKey = level === 1 ? null : `L${level - 1}::${parentNodeName}::${parentNodeCode}`;
    const parent = parentKey ? nodeByKey.get(parentKey) : null;

    if (level > 1 && !parent) {
      errors.push({
        sourceType: "knowledge_tree",
        rowNumber,
        rawRow: row,
        errorType: "missing_parent_match",
        errorMessage: `找不到父節點 ${parentNodeName || "(空白)"}`,
      });
      continue;
    }

    const pathNames = parent ? [...parent.pathNames, nodeName] : [nodeName];
    const pathKey = pathNames.join("\u0001");
    if (pathSet.has(pathKey)) {
      errors.push({
        sourceType: "knowledge_tree",
        rowNumber,
        rawRow: row,
        errorType: "duplicate_path",
        errorMessage: `重複路徑：${pathNames.join(" / ")}`,
      });
      continue;
    }

    const id = createStableId(
      "cat",
      [level, parent?.id ?? "root", nodeName, nodeCode, sourceRowNo].join("|"),
    );

    const node = {
      id,
      nodeName,
      nodeCode,
      parentId: parent?.id ?? null,
      level,
      pathNames,
      pathIds: parent ? [...parent.pathIds, id] : [id],
      isSelectable: true,
      isLeaf: true,
      ownerWindowName: ownerWindowName || null,
      ownerWindowId: ownerWindowName ? createStableId("win", ownerWindowName) : null,
      sortOrder,
      isActive,
      sourceFile,
      rawRowRef: `knowledge_tree_nodes#row${sourceRowNo}`,
    };

    nodes.push(node);
    nodeByKey.set(`L${level}::${nodeName}::${nodeCode}`, node);
    pathSet.add(pathKey);
  }

  const parentIds = new Set(nodes.filter((node) => node.parentId).map((node) => node.parentId));
  const leafCount = nodes.filter((node) => !parentIds.has(node.id)).length;
  for (const node of nodes) {
    node.isLeaf = !parentIds.has(node.id);
    node.isSelectable = node.isLeaf;
  }

  return {
    nodes,
    errors,
    rules: parseRules(workbook, "knowledge_tree"),
    leafCount,
  };
}

function splitHrPath(titleName) {
  return normalizeText(titleName)
    .split(/\s*-\s*/g)
    .map((segment) => segment.trim())
    .filter(Boolean);
}

function buildHrScopeCatalog(workbook) {
  const sheet = workbook.Sheets["員工資料報表"];
  if (!sheet) {
    throw new Error("員工資料報表 sheet not found.");
  }

  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: "" });
  const nodes = [];
  const errors = [];
  const sourceFile = path.basename(hrWorkbookPath);

  const startIndex = rows.findIndex((row) => normalizeText(row[0]) === "員編");
  const dataRows = startIndex >= 0 ? rows.slice(startIndex + 1) : rows.slice(1);

  for (const [index, row] of dataRows.entries()) {
    const rowNumber = index + (startIndex >= 0 ? startIndex + 2 : 2);
    const empId = normalizeText(row[0]);
    const name = normalizeText(row[1]);
    const englishAlias = normalizeText(row[2]);
    const regionName = normalizeText(row[3]);
    const companyName = normalizeText(row[4]);
    const businessGroupName = normalizeText(row[5]);
    const divisionName = normalizeText(row[6]);
    const departmentName = normalizeText(row[7]);
    const teamName = normalizeText(row[8]);
    const titleName = normalizeText(row[9]);

    if (!companyName) {
      errors.push({
        sourceType: "hr_scope",
        rowNumber,
        rawRow: row,
        errorType: "missing_company_name",
        errorMessage: "缺少公司名稱",
      });
      continue;
    }

    const pathNames = [companyName, businessGroupName, divisionName, departmentName, teamName].filter(Boolean);
    const id = createStableId("hr", [empId, name, companyName, businessGroupName, divisionName, departmentName, teamName, rowNumber].join("|"));
    const node = {
      id,
      empId: empId || null,
      name: maskPersonName(name) || null,
      englishAlias: englishAlias || null,
      regionName: regionName || null,
      companyName: companyName || null,
      businessGroupName: businessGroupName || null,
      divisionName: divisionName || null,
      departmentName: departmentName || null,
      teamName: teamName || null,
      titleName,
      pathNames,
      level: pathNames.length,
      isSelectable: true,
      signingManagerName: null,
      signingManagerEmpId: null,
      windowOwnerName: null,
      windowOwnerEmpId: null,
      isActive: true,
      sourceFile,
      rawRowRef: `員工資料報表#row${rowNumber}`,
    };

    nodes.push(node);
  }

  const rules = workbook.SheetNames.includes("rules")
    ? parseRules(workbook, "hr_scope")
    : {
        dataset: "hr_scope",
        maxLevel: 5,
        allowSelectWhenNoChild: true,
        replaceMode: "replace",
        errorPolicy: "skip_invalid_and_collect_errors",
      };

  return {
    nodes,
    errors,
    rules,
  };
}

const knowledgeWorkbook = XLSX.readFile(knowledgeWorkbookPath);
const hrWorkbook = XLSX.readFile(hrWorkbookPath);

if (!knowledgeWorkbook.SheetNames.includes("knowledge_tree_nodes")) {
  throw new Error("knowledge_tree_nodes sheet is missing from 知識樹分類.xlsx");
}

if (!knowledgeWorkbook.SheetNames.includes("rules")) {
  throw new Error("rules sheet is missing from 知識樹分類.xlsx");
}

if (!hrWorkbook.SheetNames.includes("員工資料報表")) {
  throw new Error("員工資料報表 sheet is missing from 人資資料.xlsx");
}

const knowledgeCatalog = buildKnowledgeCatalog(knowledgeWorkbook);
const hrCatalog = buildHrScopeCatalog(hrWorkbook);

const content = `/* eslint-disable */
import type {
  CategoryNode,
  HrScopeNode,
  ImportError,
  ImportRules,
} from "../catalogModels";

export const CATEGORY_RULES: ImportRules = ${JSON.stringify(knowledgeCatalog.rules, null, 2)};
export const CATEGORY_IMPORT_ERRORS: ImportError[] = ${JSON.stringify(knowledgeCatalog.errors, null, 2)};
export const CATEGORY_NODES: CategoryNode[] = ${JSON.stringify(knowledgeCatalog.nodes, null, 2)};

export const HR_SCOPE_RULES: ImportRules = ${JSON.stringify(hrCatalog.rules, null, 2)};
export const HR_SCOPE_IMPORT_ERRORS: ImportError[] = ${JSON.stringify(hrCatalog.errors, null, 2)};
export const HR_SCOPE_NODES: HrScopeNode[] = ${JSON.stringify(hrCatalog.nodes, null, 2)};
`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, content, "utf8");

console.log(
  [
    `Generated ${knowledgeCatalog.nodes.length} knowledge nodes (${knowledgeCatalog.errors.length} errors)`,
    `Generated ${hrCatalog.nodes.length} hr scope nodes (${hrCatalog.errors.length} errors)`,
    `Wrote ${path.relative(projectRoot, outputPath)}`,
  ].join("\n"),
);
