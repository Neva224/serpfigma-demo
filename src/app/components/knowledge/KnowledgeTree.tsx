import { Folder, FolderOpen, LayoutGrid } from "lucide-react";
import { KNOWLEDGE_TREE, type KnowledgeTreeNode } from "../../../mocks/knowledgeTreeData";

interface Props {
  totalCount: number;
  selectedPathKey: string | null;
  onSelectPath: (path: string[], label: string) => void;
  countForPath: (path: string[]) => number;
}

export function KnowledgeTree({
  totalCount,
  selectedPathKey,
  onSelectPath,
  countForPath,
}: Props) {
  return (
    <div className="flex h-full flex-col border-r border-slate-200 bg-white">
      <div className="border-b border-slate-100 px-4 py-3">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-teal-600">
            <LayoutGrid size={13} className="text-white" />
          </div>
          <h3 className="text-sm font-semibold text-slate-800">知識樹分類</h3>
        </div>
        <p className="text-xs leading-5 text-slate-400">由 Excel 轉換而來的正規化分類樹</p>
      </div>

      <div className="flex-1 overflow-y-auto py-2">
        <div className="space-y-1 pb-2">
          {KNOWLEDGE_TREE.map((node) => (
            <TreeNodeRow
              key={node.id}
              node={node}
              selectedPathKey={selectedPathKey}
              onSelectPath={onSelectPath}
              countForPath={countForPath}
            />
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50 px-4 py-3">
        <p className="text-center text-xs text-slate-400">
          共 {totalCount} 筆文件，{KNOWLEDGE_TREE.length} 個第一層資料夾
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
  node: KnowledgeTreeNode;
  selectedPathKey: string | null;
  onSelectPath: (path: string[], label: string) => void;
  countForPath: (path: string[]) => number;
}) {
  const isSelected = selectedPathKey === node.pathLabels.join(" / ");
  const count = countForPath(node.pathLabels);

  return (
    <button
      type="button"
      onClick={() => onSelectPath(node.pathLabels, node.label)}
      className={`mx-2 flex w-[calc(100%-1rem)] items-center gap-2 rounded-xl border-l-2 px-3 py-2 text-left transition ${
        isSelected
          ? "border-teal-600 bg-teal-50"
          : "border-transparent hover:bg-slate-50"
      }`}
      title={node.label}
    >
      <FolderOpen
        size={14}
        className={isSelected ? "flex-shrink-0 text-teal-600" : "flex-shrink-0 text-teal-500"}
      />
      <span
        className={`min-w-0 flex-1 truncate text-sm ${
          isSelected ? "font-semibold text-teal-800" : "text-slate-700"
        }`}
      >
        {node.label}
      </span>
      <span
        className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
          isSelected ? "bg-teal-100 text-teal-700" : "bg-slate-100 text-slate-500"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
