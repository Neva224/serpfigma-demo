import { useState } from "react";
import { ChevronRight, ChevronDown, FolderOpen, Folder, Tag, LayoutGrid } from "lucide-react";

interface TreeNode {
  id: string;
  label: string;
  count: number;
  children?: TreeNode[];
  type: "root" | "group" | "division" | "dept" | "level";
}

const TREE_DATA: TreeNode[] = [
  {
    id: "all", label: "全部文件", count: 248, type: "root",
  },
  {
    id: "org", label: "依組織分類", count: 248, type: "group",
    children: [
      {
        id: "tech", label: "技術事業群", count: 45, type: "group",
        children: [
          {
            id: "sw", label: "軟體開發處", count: 20, type: "division",
            children: [
              { id: "fe", label: "前端開發部", count: 8, type: "dept" },
              { id: "be", label: "後端開發部", count: 9, type: "dept" },
              { id: "qa", label: "品質保證部", count: 3, type: "dept" },
            ],
          },
          {
            id: "sec", label: "資訊安全處", count: 15, type: "division",
            children: [
              { id: "arch", label: "安全架構部", count: 7, type: "dept" },
              { id: "vuln", label: "弱點管理部", count: 8, type: "dept" },
            ],
          },
          { id: "cloud", label: "雲端平台處", count: 10, type: "division" },
        ],
      },
      {
        id: "biz", label: "商業事業群", count: 62, type: "group",
        children: [
          { id: "sales", label: "業務拓展處", count: 25, type: "division" },
          { id: "mktg", label: "行銷策略處", count: 37, type: "division" },
        ],
      },
      {
        id: "mgmt", label: "管理事業群", count: 89, type: "group",
        children: [
          { id: "hr", label: "人力資源處", count: 42, type: "division" },
          { id: "fin", label: "財務法務處", count: 30, type: "division" },
          { id: "adm", label: "行政總務處", count: 17, type: "division" },
        ],
      },
      {
        id: "intl", label: "國際事業群", count: 52, type: "group",
        children: [
          { id: "apac", label: "亞太業務處", count: 28, type: "division" },
          { id: "eu", label: "歐美業務處", count: 24, type: "division" },
        ],
      },
    ],
  },
];

const LEVEL_TREE: TreeNode[] = [
  { id: "L1", label: "一階 — 政策、手冊",          count: 12,  type: "level" },
  { id: "L2", label: "二階 — 管理辦法、程序書",     count: 35,  type: "level" },
  { id: "L3", label: "三階 — 規範、說明書、須知、標準", count: 78, type: "level" },
  { id: "L4", label: "四階 — 表、單",              count: 56,  type: "level" },
  { id: "L5", label: "五階 — 教育訓練",            count: 22,  type: "level" },
  { id: "L6", label: "六階 — 外來文件",            count: 45,  type: "level" },
];

const LEVEL_COLORS: Record<string, string> = {
  L1: "#7C3AED", L2: "#1D4ED8", L3: "#0F766E",
  L4: "#15803D", L5: "#B45309", L6: "#4B5563",
};

interface Props {
  selectedId: string;
  onSelect: (id: string, label: string) => void;
}

export function KnowledgeTree({ selectedId, onSelect }: Props) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(["org", "tech"]));
  const [tab, setTab] = useState<"org" | "level">("org");

  function toggle(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: "#0D9488" }}>
            <LayoutGrid size={13} className="text-white" />
          </div>
          <h3 className="text-gray-800" style={{ fontSize: "13px", fontWeight: 700 }}>知識樹分類</h3>
        </div>
        {/* Tabs */}
        <div className="flex gap-1 p-0.5 rounded-lg bg-gray-100">
          {([["org", "組織架構"], ["level", "文件階級"]] as [typeof tab, string][]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className="flex-1 py-1 rounded-md transition-all"
              style={{
                fontSize: "11px",
                fontWeight: tab === key ? 700 : 400,
                backgroundColor: tab === key ? "#0D9488" : "transparent",
                color: tab === key ? "#ffffff" : "#6B7280",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Tree body */}
      <div className="flex-1 overflow-y-auto py-2">
        {tab === "org" ? (
          <>
            {/* All docs */}
            <TreeRow
              node={{ id: "all", label: "全部文件", count: 248, type: "root" }}
              selected={selectedId === "all"}
              expanded={false}
              hasChildren={false}
              depth={0}
              onSelect={() => onSelect("all", "全部文件")}
              onToggle={() => {}}
            />
            {/* Org tree */}
            {TREE_DATA[1].children!.map((node) => (
              <TreeNodeRow
                key={node.id}
                node={node}
                selectedId={selectedId}
                expanded={expanded}
                depth={0}
                onSelect={onSelect}
                onToggle={toggle}
              />
            ))}
          </>
        ) : (
          <div className="px-3 py-1 space-y-0.5">
            {LEVEL_TREE.map((node) => (
              <button
                key={node.id}
                onClick={() => onSelect(node.id, node.label)}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-left"
                style={{
                  backgroundColor: selectedId === node.id ? "#F0FDFA" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (selectedId !== node.id) (e.currentTarget as HTMLElement).style.backgroundColor = "#F9FAFB";
                }}
                onMouseLeave={(e) => {
                  if (selectedId !== node.id) (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                <Tag size={12} style={{ color: LEVEL_COLORS[node.id] ?? "#6B7280", flexShrink: 0 }} />
                <span className="flex-1 text-gray-700 leading-tight" style={{ fontSize: "12px", fontWeight: selectedId === node.id ? 700 : 400 }}>
                  {node.label}
                </span>
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: selectedId === node.id ? "#0D948820" : "#F3F4F6",
                    color: selectedId === node.id ? "#0D9488" : "#6B7280",
                    fontSize: "10px",
                    fontWeight: 600,
                  }}
                >
                  {node.count}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
        <p className="text-gray-400 text-center" style={{ fontSize: "10px" }}>
          共 248 份文件 · 6 個階級
        </p>
      </div>
    </div>
  );
}

function TreeNodeRow({
  node, selectedId, expanded, depth, onSelect, onToggle,
}: {
  node: TreeNode;
  selectedId: string;
  expanded: Set<string>;
  depth: number;
  onSelect: (id: string, label: string) => void;
  onToggle: (id: string) => void;
}) {
  const isExpanded = expanded.has(node.id);
  const hasChildren = !!node.children?.length;
  return (
    <>
      <TreeRow
        node={node}
        selected={selectedId === node.id}
        expanded={isExpanded}
        hasChildren={hasChildren}
        depth={depth}
        onSelect={() => onSelect(node.id, node.label)}
        onToggle={() => hasChildren && onToggle(node.id)}
      />
      {isExpanded && hasChildren && node.children!.map((child) => (
        <TreeNodeRow
          key={child.id}
          node={child}
          selectedId={selectedId}
          expanded={expanded}
          depth={depth + 1}
          onSelect={onSelect}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

function TreeRow({
  node, selected, expanded, hasChildren, depth, onSelect, onToggle,
}: {
  node: TreeNode; selected: boolean; expanded: boolean; hasChildren: boolean;
  depth: number; onSelect: () => void; onToggle: () => void;
}) {
  return (
    <div
      className="flex items-center gap-1.5 mx-2 px-2 py-1.5 rounded-lg cursor-pointer transition-all select-none"
      style={{
        paddingLeft: `${8 + depth * 14}px`,
        backgroundColor: selected ? "#F0FDFA" : "transparent",
        borderLeft: selected ? "2px solid #0D9488" : "2px solid transparent",
      }}
      onClick={() => { onSelect(); if (hasChildren) onToggle(); }}
      onMouseEnter={(e) => {
        if (!selected) (e.currentTarget as HTMLElement).style.backgroundColor = "#F9FAFB";
      }}
      onMouseLeave={(e) => {
        if (!selected) (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
      }}
    >
      {/* Expand icon */}
      <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 text-gray-400">
        {hasChildren ? (expanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />) : null}
      </span>
      {/* Folder icon */}
      {hasChildren
        ? (expanded ? <FolderOpen size={13} style={{ color: "#0D9488", flexShrink: 0 }} /> : <Folder size={13} style={{ color: "#0D9488", flexShrink: 0 }} />)
        : <Folder size={13} style={{ color: "#9CA3AF", flexShrink: 0 }} />
      }
      {/* Label */}
      <span
        className="flex-1 text-gray-700 truncate"
        style={{ fontSize: "12px", fontWeight: selected ? 700 : 400, color: selected ? "#0F766E" : "#374151" }}
      >
        {node.label}
      </span>
      {/* Count */}
      <span
        className="flex-shrink-0 px-1.5 py-0.5 rounded-full"
        style={{
          fontSize: "10px",
          fontWeight: 600,
          backgroundColor: selected ? "#CCFBF1" : "#F3F4F6",
          color: selected ? "#0F766E" : "#6B7280",
        }}
      >
        {node.count}
      </span>
    </div>
  );
}
