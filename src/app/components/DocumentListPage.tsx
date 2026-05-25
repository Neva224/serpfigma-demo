import { useState } from "react";
import { KnowledgeTree } from "./knowledge/KnowledgeTree";
import { SearchFilterBar } from "./SearchFilterBar";
import { DocumentTable, DocRecord } from "./DocumentTable";
import { EmployeeLookupModal } from "./EmployeeLookupModal";

interface Props {
  onAdd: () => void;
  onApprove: (doc: DocRecord) => void;
  onReEdit: (doc: DocRecord) => void;
}

export function DocumentListPage({ onAdd, onApprove, onReEdit }: Props) {
  const [selectedNode, setSelectedNode] = useState({ id: "all", label: "全部文件" });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showLookup, setShowLookup] = useState(false);

  const filterLevel =
    selectedNode.id.startsWith("L")
      ? (["一階", "二階", "三階", "四階", "五階", "六階"][parseInt(selectedNode.id[1]) - 1] as string | undefined)
      : undefined;

  return (
    <div className="flex h-full" style={{ minHeight: "calc(100vh - 56px)" }}>
      {/* Knowledge tree sidebar */}
      <div
        className="flex-shrink-0 transition-all duration-200 overflow-hidden"
        style={{ width: sidebarCollapsed ? "0px" : "220px" }}
      >
        <KnowledgeTree
          selectedId={selectedNode.id}
          onSelect={(id, label) => setSelectedNode({ id, label })}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Sub-header: breadcrumb + collapse toggle */}
        <div
          className="flex items-center justify-between px-5 py-2.5 border-b border-gray-200 bg-white"
          style={{ flexShrink: 0 }}
        >
          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => setSidebarCollapsed((v) => !v)}
              className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all"
              title={sidebarCollapsed ? "展開知識樹" : "收合知識樹"}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="2" y="3" width="12" height="1.5" rx="1" />
                <rect x="2" y="7.25" width="8" height="1.5" rx="1" />
                <rect x="2" y="11.5" width="10" height="1.5" rx="1" />
              </svg>
            </button>
            <span className="text-gray-400" style={{ fontSize: "12px" }}>知識樹</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-600" style={{ fontSize: "12px", fontWeight: 600 }}>
              {selectedNode.label}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-400" style={{ fontSize: "11px" }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            系統正常運行中
          </div>
        </div>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto px-5 py-4" style={{ backgroundColor: "#F3F4F6" }}>
          <SearchFilterBar onOpenEmployeeLookup={() => setShowLookup(true)} />
          <DocumentTable
            onAdd={onAdd}
            onApprove={onApprove}
            onReEdit={onReEdit}
            filterLevel={filterLevel}
          />
        </div>
      </div>

      {/* Employee lookup modal */}
      {showLookup && <EmployeeLookupModal onClose={() => setShowLookup(false)} onSelect={() => setShowLookup(false)} />}
    </div>
  );
}
