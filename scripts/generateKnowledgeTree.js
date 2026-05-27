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

if (!fs.existsSync(knowledgeWorkbookPath)) {
  throw new Error(`Knowledge tree source file not found: ${knowledgeWorkbookPath}`);
}

if (!fs.existsSync(hrWorkbookPath)) {
  throw new Error(`HR scope source file not found: ${hrWorkbookPath}`);
}

function normalizeText(value) {
  return String(value ?? "").trim();
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

  for (const [index, row] of rows.slice(1).entries()) {
    const rowNumber = index + 2;
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
  const sheet = workbook.Sheets.hr_scope_nodes;
  if (!sheet) {
    throw new Error("hr_scope_nodes sheet not found.");
  }

  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: "" });
  const nodes = [];
  const errors = [];
  const pathSet = new Set();
  const sourceFile = path.basename(hrWorkbookPath);
  const maxLevel = 6;

  for (const [index, row] of rows.slice(1).entries()) {
    const rowNumber = index + 2;
    const titleName = normalizeText(row[0]);
    if (!titleName) {
      errors.push({
        sourceType: "hr_scope",
        rowNumber,
        rawRow: row,
        errorType: "missing_title_name",
        errorMessage: "缺少部門名稱",
      });
      continue;
    }

    const pathNames = splitHrPath(titleName);
    if (pathNames.length === 0) {
      errors.push({
        sourceType: "hr_scope",
        rowNumber,
        rawRow: row,
        errorType: "invalid_path",
        errorMessage: "無法從部門名稱解析路徑",
      });
      continue;
    }

    if (pathNames.length > maxLevel) {
      errors.push({
        sourceType: "hr_scope",
        rowNumber,
        rawRow: row,
        errorType: "invalid_level",
        errorMessage: `路徑層級 ${pathNames.length} 超出允許範圍 1-${maxLevel}`,
      });
      continue;
    }

    const pathKey = pathNames.join("\u0001");
    if (pathSet.has(pathKey)) {
      errors.push({
        sourceType: "hr_scope",
        rowNumber,
        rawRow: row,
        errorType: "duplicate_path",
        errorMessage: `重複路徑：${pathNames.join(" / ")}`,
      });
      continue;
    }

    const id = createStableId("hr", [titleName, rowNumber].join("|"));
    const node = {
      id,
      regionName: pathNames[0] ?? null,
      companyName: pathNames[1] ?? null,
      businessGroupName: pathNames[2] ?? null,
      divisionName: pathNames[3] ?? null,
      departmentName: pathNames[4] ?? null,
      teamName: pathNames[5] ?? null,
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
      rawRowRef: `hr_scope_nodes#row${rowNumber}`,
    };

    nodes.push(node);
    pathSet.add(pathKey);
  }

  return {
    nodes,
    errors,
    rules: parseRules(workbook, "hr_scope"),
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

if (!hrWorkbook.SheetNames.includes("hr_scope_nodes")) {
  throw new Error("hr_scope_nodes sheet is missing from 人資資料.xlsx");
}

if (!hrWorkbook.SheetNames.includes("rules")) {
  throw new Error("rules sheet is missing from 人資資料.xlsx");
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
