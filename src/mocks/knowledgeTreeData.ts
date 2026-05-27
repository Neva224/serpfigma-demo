import {
  buildLegacyKnowledgeTree,
  CATEGORY_IMPORT_ERRORS,
  CATEGORY_NODES,
  CATEGORY_RULES,
  type LegacyKnowledgeNode,
  type LegacyKnowledgeTreeNode,
} from "../app/data/catalogModels";

export type KnowledgeNode = LegacyKnowledgeNode;
export type KnowledgeTreeNode = LegacyKnowledgeTreeNode;

export const KNOWLEDGE_NODES: KnowledgeNode[] = CATEGORY_NODES.map((node) => ({
  id: node.id,
  parentId: node.parentId,
  label: node.nodeName,
  level: node.level,
  sortOrder: node.sortOrder,
  isSelectable: node.isSelectable,
  ...(node.nodeCode ? { code: node.nodeCode } : {}),
  ...(node.ownerWindowName ? { owner: node.ownerWindowName } : {}),
}));

export const KNOWLEDGE_TREE: KnowledgeTreeNode[] = buildLegacyKnowledgeTree(CATEGORY_NODES);

export const KNOWLEDGE_RULES = CATEGORY_RULES;
export const KNOWLEDGE_IMPORT_ERRORS = CATEGORY_IMPORT_ERRORS;

export function buildTreeFromNodes(nodes: KnowledgeNode[]): KnowledgeTreeNode[] {
  return buildLegacyKnowledgeTree(
    nodes.map((node) => ({
      id: node.id,
      nodeName: node.label,
      nodeCode: node.code ?? "",
      parentId: node.parentId,
      level: node.level,
      pathNames: [],
      pathIds: [],
      isSelectable: node.isSelectable,
      isLeaf: true,
      ownerWindowName: node.owner ?? null,
      ownerWindowId: null,
      sortOrder: node.sortOrder,
      isActive: true,
      sourceFile: "legacy",
      rawRowRef: node.note ?? "legacy",
    })),
  );
}
