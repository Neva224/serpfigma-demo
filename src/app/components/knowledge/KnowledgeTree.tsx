import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight, Folder, FolderOpen, LayoutGrid } from "lucide-react";
import {
  KNOWLEDGE_NODES,
  buildTreeFromNodes,
  type KnowledgeTreeNode,
} from "../../../mocks/knowledgeTreeData";

interface Props {
  totalCount: number;
  selectedPathKey: string | null;
  onSelectAll: () => void;
  onSelectPath: (path: string[], label: string) => void;
  countForPath: (path: string[]) => number;
}

export function KnowledgeTree({
  totalCount,
  selectedPathKey,
  onSelectAll,
  onSelectPath,
  countForPath,
}: Props) {
  const treeData = useMemo(() => buildTreeFromNodes(KNOWLEDGE_NODES), []);
  const defaultExpandedIds = useMemo(() => {
    return new Set(treeData.filter((node) => (node.children?.length ?? 0) > 0).map((node) => node.id));
  }, [treeData]);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(defaultExpandedIds);

  function toggle(id: string) {
    setExpandedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="flex h-full flex-col border-r border-slate-200 bg-white">
      <div className="border-b border-slate-100 px-4 py-3">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-teal-600">
            <LayoutGrid size={13} className="text-white" />
          </div>
          <h3 className="text-sm font-semibold text-slate-800">知識樹分類</h3>
        </div>
        <p className="text-xs leading-5 text-slate-400">
          由 Excel 轉換而來的正規化分類樹，點選節點可同步篩選右側文件列表。
        </p>
      </div>

      <div className="flex-1 overflow-y-auto py-2">
        <TreeRow
          label="全部文件"
          count={totalCount}
          selected={selectedPathKey === null}
          depth={0}
          hasChildren={false}
          expanded={false}
          onSelect={onSelectAll}
          onToggle={() => {}}
        />
        <div className="mt-1 space-y-1 pb-2">
          {treeData.map((node) => (
            <KnowledgeTreeNodeRow
              key={node.id}
              node={node}
              depth={0}
              expandedIds={expandedIds}
              selectedPathKey={selectedPathKey}
              onToggle={toggle}
              onSelectPath={onSelectPath}
              countForPath={countForPath}
            />
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50 px-4 py-3">
        <p className="text-center text-xs text-slate-400">
          共 {totalCount} 筆文件，{treeData.length} 個第一層分類
        </p>
      </div>
    </div>
  );
}

function KnowledgeTreeNodeRow({
  node,
  depth,
  expandedIds,
  selectedPathKey,
  onToggle,
  onSelectPath,
  countForPath,
}: {
  node: KnowledgeTreeNode;
  depth: number;
  expandedIds: Set<string>;
  selectedPathKey: string | null;
  onToggle: (id: string) => void;
  onSelectPath: (path: string[], label: string) => void;
  countForPath: (path: string[]) => number;
}) {
  const children = node.children ?? [];
  const hasChildren = children.length > 0;
  const isExpanded = expandedIds.has(node.id);
  const isSelected = selectedPathKey === node.pathLabels.join(" / ");
  const count = countForPath(node.pathLabels);

  return (
    <div>
      <TreeRow
        label={node.label}
        count={count}
        selected={isSelected}
        depth={depth}
        hasChildren={hasChildren}
        expanded={isExpanded}
        onSelect={() => onSelectPath(node.pathLabels, node.label)}
        onToggle={() => onToggle(node.id)}
      />

      {hasChildren && isExpanded && (
        <div className="mt-1 space-y-1">
          {children.map((child) => (
            <KnowledgeTreeNodeRow
              key={child.id}
              node={child}
              depth={depth + 1}
              expandedIds={expandedIds}
              selectedPathKey={selectedPathKey}
              onToggle={onToggle}
              onSelectPath={onSelectPath}
              countForPath={countForPath}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function TreeRow({
  label,
  count,
  selected,
  depth,
  hasChildren,
  expanded,
  onSelect,
  onToggle,
}: {
  label: string;
  count: number;
  selected: boolean;
  depth: number;
  hasChildren: boolean;
  expanded: boolean;
  onSelect: () => void;
  onToggle: () => void;
}) {
  return (
    <div
      className={`mx-2 flex items-center gap-1.5 rounded-xl px-3 py-2 text-left transition ${
        selected ? "border-l-2 border-teal-600 bg-teal-50" : "border-l-2 border-transparent hover:bg-slate-50"
      }`}
      style={{ paddingLeft: `${12 + depth * 14}px` }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex h-4 w-4 items-center justify-center text-slate-400"
        aria-label={expanded ? "收合" : "展開"}
        disabled={!hasChildren}
      >
        {hasChildren ? (expanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />) : null}
      </button>

      <button
        type="button"
        onClick={onSelect}
        className="flex min-w-0 flex-1 items-center gap-2 text-left"
      >
        {hasChildren ? (
          expanded ? (
            <FolderOpen size={14} className="flex-shrink-0 text-teal-600" />
          ) : (
            <Folder size={14} className="flex-shrink-0 text-teal-600" />
          )
        ) : (
          <Folder size={14} className="flex-shrink-0 text-slate-400" />
        )}
        <span
          className={`min-w-0 flex-1 truncate text-sm ${
            selected ? "font-semibold text-teal-800" : "text-slate-700"
          }`}
        >
          {label}
        </span>
      </button>

      <span
        className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
          selected ? "bg-teal-100 text-teal-700" : "bg-slate-100 text-slate-500"
        }`}
      >
        {count}
      </span>
    </div>
  );
}
