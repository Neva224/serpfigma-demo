import { FolderOpen } from "lucide-react";
import { buildLegacyKnowledgeTreeFromGenerated, type LegacyKnowledgeTreeNode } from "../../data/catalogModels";

const KNOWLEDGE_TREE = buildLegacyKnowledgeTreeFromGenerated();

interface Props {
  totalCount: number;
  selectedPathKey: string | null;
  onSelectPath: (path: string[], label: string) => void;
  countForPath: (path: string[]) => number;
}

export function KnowledgeTree({ totalCount, selectedPathKey, onSelectPath, countForPath }: Props) {
  return (
    <div className="flex h-full flex-col bg-transparent">
      <div className="scrollbar-brand flex-1 overflow-y-auto py-2">
        <div className="space-y-1 pb-2">
          {KNOWLEDGE_TREE.map((node) => (
            <TreeNodeRow
              key={`${node.id}-${getNodePath(node).join("|")}`}
              node={node}
              selectedPathKey={selectedPathKey}
              onSelectPath={onSelectPath}
              countForPath={countForPath}
            />
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 bg-white/5 px-4 py-3">
        <p className="text-center text-xs text-white/75">
          共 {totalCount} 筆文件，{KNOWLEDGE_TREE.length} 個第一層分類
        </p>
      </div>
    </div>
  );
}

function TreeNodeRow({
  node,
  selectedPathKey,
  onSelectPath,
  countForPath,
}: {
  node: LegacyKnowledgeTreeNode;
  selectedPathKey: string | null;
  onSelectPath: (path: string[], label: string) => void;
  countForPath: (path: string[]) => number;
}) {
  const path = getNodePath(node);
  const isSelected = selectedPathKey === path.join(" / ");
  const count = countForPath(path);

  return (
    <button
      type="button"
      onClick={() => onSelectPath(path, node.label)}
      className={`mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-xl border-l-2 px-3 py-2 text-left transition ${
        isSelected ? "border-white bg-white/15" : "border-transparent hover:bg-white/10"
      }`}
      title={node.label}
    >
      <FolderOpen
        size={14}
        className="flex-shrink-0 text-white"
      />
      <span className={`min-w-0 flex-1 truncate text-sm ${isSelected ? "font-bold text-white" : "font-semibold text-white/90"}`}>
        {node.label}
      </span>
      <span
        className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
          isSelected ? "bg-white/20 text-white" : "bg-white/10 text-white/80"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function getNodePath(node: LegacyKnowledgeTreeNode): string[] {
  return node.pathLabels ?? node.pathNames ?? [];
}
