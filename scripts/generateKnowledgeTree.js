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

const inputPath = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve(projectRoot, "知識樹分類.xlsx");
const outputPath = process.argv[3]
  ? path.resolve(process.argv[3])
  : path.resolve(projectRoot, "src/mocks/knowledgeTreeData.ts");

if (!fs.existsSync(inputPath)) {
  throw new Error(`Knowledge tree source file not found: ${inputPath}`);
}

const workbook = XLSX.read(fs.readFileSync(inputPath), { type: "buffer" });
const firstSheetName = workbook.SheetNames[0];
if (!firstSheetName) {
  throw new Error("The workbook does not contain any sheets.");
}

const sheet = workbook.Sheets[firstSheetName];
const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: "" });

const uniqueNodes = new Map();
const childOrder = new Map();
const EXCLUDED_ROOT_LABELS = new Set([
  "自動貼標(雄獅版)",
  "組織架構",
  "回饋機制",
  "風險管理",
  "監控機制",
]);

function normalize(value) {
  return String(value ?? "").trim();
}

function makeId(parentId, level, label, code) {
  const segments = [`L${level}`, label];
  if (code) segments.push(code);
  const current = segments.map((segment) => segment.replace(/\s+/g, " ").trim()).join("::");
  return parentId ? `${parentId}>${current}` : current;
}

function recordNode({ parentId, level, label, code, owner, note }) {
  const id = makeId(parentId, level, label, code);
  if (!uniqueNodes.has(id)) {
    const sortOrder = (childOrder.get(parentId) ?? 0) + 1;
    childOrder.set(parentId, sortOrder);
    uniqueNodes.set(id, {
      id,
      parentId,
      label,
      level,
      sortOrder,
      isSelectable: true,
      ...(code ? { code } : {}),
      ...(owner ? { owner } : {}),
      ...(note ? { note } : {}),
    });
  }
  return id;
}

for (const row of rows.slice(1)) {
  const rawSegments = [
    { label: normalize(row[0]), code: "" },
    { label: normalize(row[1]), code: normalize(row[2]) },
    { label: normalize(row[3]), code: normalize(row[4]) },
    { label: normalize(row[5]), code: normalize(row[6]) },
  ].filter((segment) => segment.label);

  if (rawSegments[0] && EXCLUDED_ROOT_LABELS.has(rawSegments[0].label)) {
    continue;
  }

  let parentId = null;
  rawSegments.forEach((segment, index) => {
    const level = index + 1;
    parentId = recordNode({
      parentId,
      level,
      label: segment.label,
      code: segment.code || undefined,
      owner: normalize(row[7]) || undefined,
      note: normalize(row[9]) || undefined,
    });
  });
}

const flatNodes = Array.from(uniqueNodes.values()).sort((a, b) => {
  if (a.level !== b.level) return a.level - b.level;
  if (a.parentId !== b.parentId) return String(a.parentId).localeCompare(String(b.parentId));
  return a.sortOrder - b.sortOrder;
});

const content = `/* eslint-disable */
export interface KnowledgeNode {
  id: string;
  parentId: string | null;
  label: string;
  level: number;
  sortOrder: number;
  isSelectable: boolean;
  code?: string;
  owner?: string;
  note?: string;
}

export interface KnowledgeTreeNode extends KnowledgeNode {
  children: KnowledgeTreeNode[];
  pathIds: string[];
  pathLabels: string[];
}

export const KNOWLEDGE_NODES: KnowledgeNode[] = ${JSON.stringify(flatNodes, null, 2)};

export function buildTreeFromNodes(nodes: KnowledgeNode[]): KnowledgeTreeNode[] {
  const nodeMap = new Map<string, KnowledgeTreeNode>();

  for (const node of nodes) {
    nodeMap.set(node.id, {
      ...node,
      children: [],
      pathIds: [],
      pathLabels: [],
    });
  }

  const roots: KnowledgeTreeNode[] = [];
  for (const node of nodeMap.values()) {
    if (node.parentId && nodeMap.has(node.parentId)) {
      nodeMap.get(node.parentId)!.children.push(node);
    } else {
      roots.push(node);
    }
  }

  const sortChildren = (nodes: KnowledgeTreeNode[]) => {
    nodes.sort((a, b) => {
      if (a.level !== b.level) return a.level - b.level;
      return a.sortOrder - b.sortOrder;
    });
    for (const node of nodes) {
      const parent = node.parentId ? nodeMap.get(node.parentId) : undefined;
      node.pathIds = parent ? [...parent.pathIds, node.id] : [node.id];
      node.pathLabels = parent ? [...parent.pathLabels, node.label] : [node.label];
      sortChildren(node.children);
    }
  };

  sortChildren(roots);
  roots.sort((a, b) => a.sortOrder - b.sortOrder);
  return roots;
}

export const KNOWLEDGE_TREE = buildTreeFromNodes(KNOWLEDGE_NODES);
`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, content, "utf8");

console.log(
  `Generated ${flatNodes.length} knowledge nodes and wrote ${path.relative(projectRoot, outputPath)}`,
);

