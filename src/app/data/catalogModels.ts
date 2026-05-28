import {
  CATEGORY_IMPORT_ERRORS,
  CATEGORY_NODES,
  CATEGORY_RULES,
  HR_SCOPE_IMPORT_ERRORS,
  HR_SCOPE_NODES,
  HR_SCOPE_RULES,
} from "./generated/domainCatalog";

export interface ImportRules {
  dataset: string;
  maxLevel: number;
  allowSelectWhenNoChild: boolean;
  replaceMode: string;
  errorPolicy: string;
}

export interface ImportError {
  sourceType: string;
  rowNumber: number;
  rawRow: unknown[];
  errorType: string;
  errorMessage: string;
}

export interface CategoryNode {
  id: string;
  nodeName: string;
  nodeCode: string;
  parentId: string | null;
  level: number;
  pathNames: string[];
  pathIds: string[];
  isSelectable: boolean;
  isLeaf: boolean;
  ownerWindowName: string | null;
  ownerWindowId: string | null;
  sortOrder: number;
  isActive: boolean;
  sourceFile: string;
  rawRowRef: string;
}

export interface CategoryTreeNode extends CategoryNode {
  children: CategoryTreeNode[];
}

export interface LegacyKnowledgeNode {
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

export interface LegacyKnowledgeTreeNode extends LegacyKnowledgeNode {
  children: LegacyKnowledgeTreeNode[];
  pathIds: string[];
  pathLabels: string[];
}

export interface HrScopeNode {
  id: string;
  empId: string | null;
  name: string | null;
  englishAlias: string | null;
  regionName: string | null;
  companyName: string | null;
  businessGroupName: string | null;
  divisionName: string | null;
  departmentName: string | null;
  teamName: string | null;
  titleName: string | null;
  pathNames: string[];
  level: number;
  isSelectable: boolean;
  signingManagerName: string | null;
  signingManagerEmpId: string | null;
  windowOwnerName: string | null;
  windowOwnerEmpId: string | null;
  isActive: boolean;
  sourceFile: string;
  rawRowRef: string;
}

export const KNOWLEDGE_TREE_RULES = CATEGORY_RULES;
export const HR_SCOPE_TREE_RULES = HR_SCOPE_RULES;

export const KNOWLEDGE_TREE_IMPORT_ERRORS = CATEGORY_IMPORT_ERRORS;
export const HR_SCOPE_TREE_IMPORT_ERRORS = HR_SCOPE_IMPORT_ERRORS;

function normalizeText(value: unknown): string {
  return String(value ?? "").trim();
}

function normalizeSegments(values: string[]): string[] {
  return values.map((value) => normalizeText(value)).filter(Boolean);
}

function startsWithPath(fullPath: string[], prefix: string[]): boolean {
  if (prefix.length > fullPath.length) return false;
  return prefix.every((segment, index) => segment === fullPath[index]);
}

function pathKey(segments: string[]): string {
  return normalizeSegments(segments).join("\u0001");
}

function hashSeed(seed: string): string {
  let hash = 0x811c9dc5;
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(36);
}

function createStableId(prefix: string, seed: string): string {
  return `${prefix}-${hashSeed(seed)}`;
}

function toBoolean(value: unknown): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  const normalized = normalizeText(value).toLowerCase();
  return normalized === "true" || normalized === "1" || normalized === "yes" || normalized === "y";
}

function toNumber(value: unknown, fallback = 0): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function buildCategoryTree(nodes: CategoryNode[]): CategoryTreeNode[] {
  const nodeMap = new Map<string, CategoryTreeNode>();
  const ordered = [...nodes].sort((a, b) => {
    if (a.level !== b.level) return a.level - b.level;
    if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
    return a.nodeName.localeCompare(b.nodeName, "zh-Hant");
  });

  for (const node of ordered) {
    nodeMap.set(node.id, {
      ...node,
      pathNames: [...node.pathNames],
      pathIds: [...node.pathIds],
      children: [],
    });
  }

  const roots: CategoryTreeNode[] = [];
  for (const node of nodeMap.values()) {
    if (node.parentId && nodeMap.has(node.parentId)) {
      nodeMap.get(node.parentId)!.children.push(node);
    } else {
      roots.push(node);
    }
  }

  const sortChildren = (items: CategoryTreeNode[]) => {
    items.sort((a, b) => {
      if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
      if (a.level !== b.level) return a.level - b.level;
      return a.nodeName.localeCompare(b.nodeName, "zh-Hant");
    });

    for (const item of items) {
      const parent = item.parentId ? nodeMap.get(item.parentId) : undefined;
      item.pathNames = parent ? [...parent.pathNames, item.nodeName] : [item.nodeName];
      item.pathIds = parent ? [...parent.pathIds, item.id] : [item.id];
      item.isLeaf = item.children.length === 0;
      item.isSelectable = item.isLeaf ? true : item.isSelectable;
      sortChildren(item.children);
    }
  };

  sortChildren(roots);
  roots.sort((a, b) => a.sortOrder - b.sortOrder);
  return roots;
}

export function buildLegacyKnowledgeTree(nodes: CategoryNode[]): LegacyKnowledgeTreeNode[] {
  const tree = buildCategoryTree(nodes);
  const mapNode = (node: CategoryTreeNode): LegacyKnowledgeTreeNode => ({
    id: node.id,
    parentId: node.parentId,
    label: node.nodeName,
    level: node.level,
    sortOrder: node.sortOrder,
    isSelectable: node.isSelectable,
    ...(node.nodeCode ? { code: node.nodeCode } : {}),
    ...(node.ownerWindowName ? { owner: node.ownerWindowName } : {}),
    children: node.children.map(mapNode),
    pathIds: [...node.pathIds],
    pathLabels: [...node.pathNames],
  });

  return tree.map(mapNode);
}

export function getCategoryLevelOptions(nodes: CategoryNode[], prefix: string[]): string[] {
  const normalizedPrefix = normalizeSegments(prefix);
  const seen = new Set<string>();
  const options: string[] = [];
  for (const node of nodes) {
    if (!startsWithPath(node.pathNames, normalizedPrefix)) continue;
    const nextValue = node.pathNames[normalizedPrefix.length];
    if (!nextValue || seen.has(nextValue)) continue;
    seen.add(nextValue);
    options.push(nextValue);
  }
  return options;
}

export function resolveCategoryNode(nodes: CategoryNode[], pathNames: string[]): CategoryNode | null {
  const target = pathKey(pathNames);
  if (!target) return null;
  return nodes.find((node) => pathKey(node.pathNames) === target) ?? null;
}

export interface CategorySelectionPath {
  l1: string;
  l2: string;
  l3: string;
  l4: string;
}

export function buildCategoryPayload(nodes: CategoryNode[], selection: CategorySelectionPath) {
  const path = normalizeSegments([selection.l1, selection.l2, selection.l3, selection.l4]);
  const node = resolveCategoryNode(nodes, path);
  const resolvedPath = node?.pathNames ?? path;
  return {
    categoryId: node?.id ?? (resolvedPath.length > 0 ? pathKey(resolvedPath) : ""),
    categoryPath: resolvedPath,
    categoryPathNames: resolvedPath,
    selectableLevel: node?.level ?? resolvedPath.length,
    isSelectable: node?.isSelectable ?? resolvedPath.length > 0,
    selectedNode: node,
  };
}

export function getHrScopeLevelOptions(nodes: HrScopeNode[], prefix: string[]): string[] {
  const normalizedPrefix = normalizeSegments(prefix);
  const seen = new Set<string>();
  const options: string[] = [];
  for (const node of nodes) {
    if (!startsWithPath(node.pathNames, normalizedPrefix)) continue;
    const nextValue = node.pathNames[normalizedPrefix.length];
    if (!nextValue || seen.has(nextValue)) continue;
    seen.add(nextValue);
    options.push(nextValue);
  }
  return options;
}

export function resolveHrScopeNode(nodes: HrScopeNode[], pathNames: string[]): HrScopeNode | null {
  const target = pathKey(pathNames);
  if (!target) return null;
  return nodes.find((node) => pathKey(node.pathNames) === target) ?? null;
}

export interface HrScopeSelectionPath {
  regionName: string;
  companyName: string;
  businessGroupName: string;
  divisionName: string;
  departmentName: string;
  teamName: string;
}

export function buildHrScopePayload(nodes: HrScopeNode[], selection: HrScopeSelectionPath) {
  const path = normalizeSegments([
    selection.regionName,
    selection.companyName,
    selection.businessGroupName,
    selection.divisionName,
    selection.departmentName,
    selection.teamName,
  ]);
  const node = resolveHrScopeNode(nodes, path);
  const resolvedPath = node?.pathNames ?? path;
  return {
    scopeId: node?.id ?? (resolvedPath.length > 0 ? pathKey(resolvedPath) : ""),
    scopePath: resolvedPath,
    scopePathNames: resolvedPath,
    regionName: node?.regionName ?? resolvedPath[0] ?? null,
    companyName: node?.companyName ?? resolvedPath[1] ?? null,
    businessGroupName: node?.businessGroupName ?? resolvedPath[2] ?? null,
    divisionName: node?.divisionName ?? resolvedPath[3] ?? null,
    departmentName: node?.departmentName ?? resolvedPath[4] ?? null,
    teamName: node?.teamName ?? resolvedPath[5] ?? null,
    selectableLevel: node?.level ?? resolvedPath.length,
    isSelectable: node?.isSelectable ?? resolvedPath.length > 0,
    selectedNode: node,
  };
}

export function parseHrScopePath(titleName: string): string[] {
  return normalizeText(titleName)
    .split(/\s*-\s*/g)
    .map((segment) => segment.trim())
    .filter(Boolean);
}

export {
  CATEGORY_IMPORT_ERRORS,
  CATEGORY_NODES,
  CATEGORY_RULES,
  HR_SCOPE_IMPORT_ERRORS,
  HR_SCOPE_NODES,
  HR_SCOPE_RULES,
};

export function buildCategoryTreeFromGenerated() {
  return buildCategoryTree(CATEGORY_NODES);
}

export function buildLegacyKnowledgeTreeFromGenerated() {
  return buildLegacyKnowledgeTree(CATEGORY_NODES);
}

export function getCategoryRootOptions() {
  return getCategoryLevelOptions(CATEGORY_NODES, []);
}

export function getHrScopeRootOptions() {
  return getHrScopeLevelOptions(HR_SCOPE_NODES, []);
}

export function hasCategoryChildren(node: CategoryNode) {
  return CATEGORY_NODES.some((candidate) => candidate.parentId === node.id);
}

export function hasHrScopeChildren(pathNames: string[]) {
  const normalizedPrefix = normalizeSegments(pathNames);
  return HR_SCOPE_NODES.some((node) => startsWithPath(node.pathNames, normalizedPrefix) && node.pathNames.length > normalizedPrefix.length);
}

export function createCategoryIdSeed(node: CategoryNode) {
  return `${node.level}|${node.nodeName}|${node.nodeCode}|${node.parentId ?? ""}|${node.rawRowRef}`;
}

export function createHrScopeIdSeed(titleName: string, rawRowRef: string) {
  return `${titleName}|${rawRowRef}`;
}

export function deriveCategoryId(node: Pick<CategoryNode, "level" | "nodeName" | "nodeCode" | "parentId" | "rawRowRef">) {
  return createStableId("cat", createCategoryIdSeed(node as CategoryNode));
}

export function deriveHrScopeId(titleName: string, rawRowRef: string) {
  return createStableId("hr", createHrScopeIdSeed(titleName, rawRowRef));
}

export function toCategoryImportRules(value: unknown): ImportRules {
  const row = Array.isArray(value) ? value : [];
  return {
    dataset: normalizeText(row[0]),
    maxLevel: toNumber(row[1], 0),
    allowSelectWhenNoChild: toBoolean(row[2]),
    replaceMode: normalizeText(row[3]),
    errorPolicy: normalizeText(row[4]),
  };
}

export function toHrScopeImportRules(value: unknown): ImportRules {
  return toCategoryImportRules(value);
}
