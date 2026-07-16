import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, ChevronDown, ArrowRight, X } from "lucide-react";
import { CascadeSelectGroup } from "../ui/CascadeSelectGroup";
import { ConfirmDialog } from "../ui/ConfirmDialog";
import {
  CATEGORY_NODES,
  buildCategoryPayload as resolveCategoryPayload,
  getCategoryLevelOptions,
  type CategorySelectionPath,
} from "../../data/catalogModels";
import { searchPathNodes, type PathSearchable } from "../../data/pathSearch";
import { createEmptyHrScopeSelection, type HrScopeSelection } from "../../data/hrScopeModel";
import { useOrgDirectory } from "../../hooks/useOrgDirectory";
import { getDocumentStatusLabel } from "../../workflow/statusCatalog";
import type { WorkflowDocument, WorkflowHistoryEntry } from "../../workflow/workflowState";

export interface DirectTransferInput {
  doc: WorkflowDocument;
  reason: string;
  transferCategoryId: string;
  transferCategoryPath: string[];
  transferOwnershipDepartmentPath: string[];
}

interface Props {
  onBack: () => void;
  embedded?: boolean;
  documents: WorkflowDocument[];
  canTransferDocuments: boolean;
  onTransferDocument: (input: DirectTransferInput) => void;
}

type TransferRow = {
  doc: WorkflowDocument;
  transfer: WorkflowHistoryEntry;
};

type Tab = "create" | "history";

export function TransferUnitPage({
  onBack,
  embedded = false,
  documents,
  canTransferDocuments,
  onTransferDocument,
}: Props) {
  const [tab, setTab] = useState<Tab>(canTransferDocuments ? "create" : "history");

  return (
    <div className={embedded ? "h-full overflow-y-auto bg-transparent px-6 py-5" : "flex-1 overflow-y-auto bg-transparent px-6 py-5"}>
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="mb-1 flex items-center gap-1.5 text-xs text-slate-400">
            <button type="button" onClick={onBack} className="hover:text-slate-600">
              返回
            </button>
            <span>/</span>
            <button type="button" onClick={onBack} className="hover:text-slate-600">
              文件簽核專區
            </button>
            <span>/</span>
            <span>移轉單位</span>
          </div>
          <h2 className="text-lg font-bold text-slate-800">移轉單位</h2>
          <p className="mt-1 text-sm text-slate-500">
            {tab === "create" ? "搜尋文件並移轉到新的知識樹分類與所屬部門" : "查詢文件移轉紀錄與轉移資訊"}
          </p>
        </div>
      </div>

      {canTransferDocuments && (
        <div className="mb-4 inline-flex rounded-lg border border-slate-200 bg-white p-1">
          <button
            type="button"
            onClick={() => setTab("create")}
            className={`rounded-md px-4 py-1.5 text-sm font-semibold transition ${
              tab === "create" ? "text-white" : "text-slate-500 hover:bg-slate-50"
            }`}
            style={tab === "create" ? { backgroundColor: "var(--color-primary)" } : undefined}
          >
            新增移轉
          </button>
          <button
            type="button"
            onClick={() => setTab("history")}
            className={`rounded-md px-4 py-1.5 text-sm font-semibold transition ${
              tab === "history" ? "text-white" : "text-slate-500 hover:bg-slate-50"
            }`}
            style={tab === "history" ? { backgroundColor: "var(--color-primary)" } : undefined}
          >
            移轉紀錄
          </button>
        </div>
      )}

      {tab === "create" && canTransferDocuments ? (
        <CreateTransferPanel documents={documents} onTransferDocument={onTransferDocument} />
      ) : (
        <TransferHistoryPanel documents={documents} />
      )}
    </div>
  );
}

function CreateTransferPanel({
  documents,
  onTransferDocument,
}: {
  documents: WorkflowDocument[];
  onTransferDocument: (input: DirectTransferInput) => void;
}) {
  const [docQuery, setDocQuery] = useState("");
  const [selectedDoc, setSelectedDoc] = useState<WorkflowDocument | null>(null);
  const [targetCategory, setTargetCategory] = useState<CategorySelectionPath>({ l1: "", l2: "", l3: "", l4: "" });
  const [targetDepartment, setTargetDepartment] = useState<HrScopeSelection>(createEmptyHrScopeSelection());
  const [reason, setReason] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);

  const { rows: departmentRows, buildPayload } = useOrgDirectory();
  const categoryPayload = useMemo(() => resolveCategoryPayload(CATEGORY_NODES, targetCategory), [targetCategory]);
  const departmentPayload = useMemo(() => buildPayload(targetDepartment), [targetDepartment, buildPayload]);

  const publishedDocs = useMemo(() => documents.filter((doc) => doc.status === "上架"), [documents]);
  const docResults = useMemo(() => {
    const keyword = docQuery.trim().toLowerCase();
    if (!keyword) return [];
    return publishedDocs
      .filter((doc) => doc.docNo.toLowerCase().includes(keyword) || doc.name.toLowerCase().includes(keyword))
      .slice(0, 20);
  }, [publishedDocs, docQuery]);

  const ready =
    !!selectedDoc && categoryPayload.categoryPath.length > 0 && departmentPayload.scopePath.length > 0 && reason.trim().length > 0;

  function reset() {
    setSelectedDoc(null);
    setDocQuery("");
    setTargetCategory({ l1: "", l2: "", l3: "", l4: "" });
    setTargetDepartment(createEmptyHrScopeSelection());
    setReason("");
  }

  function submit() {
    if (!selectedDoc || !ready) return;
    onTransferDocument({
      doc: selectedDoc,
      reason: reason.trim(),
      transferCategoryId: categoryPayload.categoryId,
      transferCategoryPath: categoryPayload.categoryPath,
      transferOwnershipDepartmentPath: departmentPayload.scopePath,
    });
    setConfirmOpen(false);
    reset();
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <section className="enterprise-panel rounded-xl p-5">
        <h3 className="mb-1 text-sm font-semibold text-slate-800">1. 搜尋要移轉的文件</h3>
        <p className="mb-3 text-xs text-slate-400">僅可搜尋已上架的文件；送出移轉後將重新進入文管審核。</p>

        {selectedDoc ? (
          <div className="rounded-xl border border-teal-200 bg-teal-50 px-4 py-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-slate-500">{selectedDoc.docNo}</span>
                  <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-teal-700">
                    {getDocumentStatusLabel(selectedDoc.status)}
                  </span>
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-800">{selectedDoc.name}</div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDoc(null)}
                className="text-slate-400 hover:text-slate-600"
                aria-label="重新選擇文件"
              >
                <X size={15} />
              </button>
            </div>
            <div className="mt-3 space-y-1 text-xs text-slate-500">
              <div>目前分類：{selectedDoc.categoryPath.join(" / ") || "無"}</div>
              <div>目前部門：{(selectedDoc.ownershipDepartmentPath ?? []).join(" / ") || selectedDoc.department || "無"}</div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="relative">
              <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={docQuery}
                onChange={(e) => setDocQuery(e.target.value)}
                placeholder="輸入文件名稱或文件編號搜尋"
                className="w-full rounded-lg border border-slate-300 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-700 outline-none transition focus:border-teal-700 focus:bg-white"
              />
            </div>
            {docQuery.trim() && (
              <div className="mt-2 max-h-72 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                {docResults.length === 0 ? (
                  <p className="px-4 py-3 text-xs text-slate-400">找不到符合「{docQuery}」的上架文件</p>
                ) : (
                  docResults.map((doc) => (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => {
                        setSelectedDoc(doc);
                        setDocQuery("");
                      }}
                      className="flex w-full flex-col items-start gap-0.5 border-b border-slate-50 px-4 py-2.5 text-left transition last:border-b-0 hover:bg-teal-50"
                    >
                      <span className="flex items-center gap-2">
                        <span className="font-mono text-xs text-slate-400">{doc.docNo}</span>
                        <span className="text-sm font-medium text-slate-700">{doc.name}</span>
                      </span>
                      <span className="text-[11px] text-slate-400">{doc.categoryPath.join(" / ")}</span>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        )}
      </section>

      <section className="enterprise-panel rounded-xl p-5">
        <h3 className="mb-1 text-sm font-semibold text-slate-800">2. 選擇移轉後的新位置</h3>
        <p className="mb-3 text-xs text-slate-400">輸入關鍵字即可快速定位，不用逐層點選。</p>

        <div className="space-y-4">
          <PathSearchPicker
            label="新知識樹分類"
            placeholder="輸入關鍵字搜尋分類（例如：財務、合約）"
            nodes={CATEGORY_NODES}
            selectedPath={categoryPayload.categoryPath}
            onSelect={(node) =>
              setTargetCategory({
                l1: node.pathNames[0] ?? "",
                l2: node.pathNames[1] ?? "",
                l3: node.pathNames[2] ?? "",
                l4: node.pathNames[3] ?? "",
              })
            }
            onClear={() => setTargetCategory({ l1: "", l2: "", l3: "", l4: "" })}
          />

          <PathSearchPicker
            label="新所屬部門"
            placeholder="輸入關鍵字搜尋部門（例如：行銷、資訊）"
            nodes={departmentRows}
            selectedPath={departmentPayload.scopePath}
            onSelect={(row) =>
              setTargetDepartment({
                companyName: row.company ?? "",
                groupName: row.group ?? "",
                divisionName: row.division ?? "",
                departmentName: row.department ?? "",
              })
            }
            onClear={() => setTargetDepartment(createEmptyHrScopeSelection())}
          />

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-600">
              移轉原因 <span className="text-red-500">*</span>
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={2}
              placeholder="請說明為何要移轉此文件的分類/部門"
              className="w-full resize-none rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-teal-700 focus:bg-white"
            />
          </div>

          <button
            type="button"
            disabled={!ready}
            onClick={() => setConfirmOpen(true)}
            className="enterprise-query-button inline-flex w-full items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-40"
          >
            送出移轉
            <ArrowRight size={15} />
          </button>
        </div>
      </section>

      <ConfirmDialog
        open={confirmOpen}
        title="移轉確認"
        description={
          selectedDoc
            ? `確定要將「${selectedDoc.name}」移轉到「${categoryPayload.categoryPath.join(" / ")}」（${departmentPayload.scopePath.join(" / ")}）嗎？送出後文件會轉為「待文管審核」，需經文管審核通過才會正式上架。`
            : ""
        }
        confirmLabel="確認送出"
        onConfirm={submit}
        onCancel={() => setConfirmOpen(false)}
      />
    </div>
  );
}

function PathSearchPicker<T extends PathSearchable>({
  label,
  placeholder,
  nodes,
  selectedPath,
  onSelect,
  onClear,
}: {
  label: string;
  placeholder: string;
  nodes: T[];
  selectedPath: string[];
  onSelect: (node: T) => void;
  onClear: () => void;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchPathNodes(nodes, query), [nodes, query]);

  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-slate-600">{label}</label>

      {selectedPath.length > 0 ? (
        <div className="flex items-center justify-between gap-2 rounded-lg border border-teal-200 bg-teal-50 px-3 py-2.5">
          <span className="text-sm font-medium text-teal-800">{selectedPath.join(" / ")}</span>
          <button type="button" onClick={onClear} className="text-teal-400 hover:text-teal-700" aria-label="清除選擇">
            <X size={14} />
          </button>
        </div>
      ) : (
        <div className="relative">
          <div className="relative">
            <Search size={14} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-700 outline-none transition focus:border-teal-700 focus:bg-white"
            />
          </div>
          {query.trim() && (
            <div className="absolute left-0 right-0 top-full z-10 mt-1 max-h-56 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-lg">
              {results.length === 0 ? (
                <p className="px-4 py-3 text-xs text-slate-400">找不到符合「{query}」的選項</p>
              ) : (
                results.map((node, index) => (
                  <button
                    key={`${node.pathNames.join("/")}-${index}`}
                    type="button"
                    onClick={() => {
                      onSelect(node);
                      setQuery("");
                    }}
                    className="flex w-full flex-col items-start gap-0.5 border-b border-slate-50 px-4 py-2.5 text-left transition last:border-b-0 hover:bg-teal-50"
                  >
                    <span className="text-sm font-medium text-slate-700">{node.pathNames[node.pathNames.length - 1]}</span>
                    <span className="text-[11px] text-slate-400">{node.pathNames.join(" / ")}</span>
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function TransferHistoryPanel({ documents }: { documents: WorkflowDocument[] }) {
  const [keyword, setKeyword] = useState("");
  const [submittedKeyword, setSubmittedKeyword] = useState("");
  const [advancedOpen, setAdvancedOpen] = useState(true);
  const [knowledgeTree, setKnowledgeTree] = useState<CategorySelectionPath>({
    l1: "",
    l2: "",
    l3: "",
    l4: "",
  });
  const [department, setDepartment] = useState<HrScopeSelection>(createEmptyHrScopeSelection());

  const rows = useMemo<TransferRow[]>(() => {
    return documents
      .flatMap((doc) => {
        const transfer = [...doc.history].reverse().find((entry) => entry.action === "移轉單位");
        return transfer ? [{ doc, transfer }] : [];
      })
      .sort((a, b) => b.transfer.timestamp.localeCompare(a.transfer.timestamp));
  }, [documents]);

  const knowledgeOptions = useMemo(
    () => ({
      l1: getCategoryLevelOptions(CATEGORY_NODES, []),
      l2: knowledgeTree.l1 ? getCategoryLevelOptions(CATEGORY_NODES, [knowledgeTree.l1]) : [],
      l3: knowledgeTree.l2 ? getCategoryLevelOptions(CATEGORY_NODES, [knowledgeTree.l1, knowledgeTree.l2]) : [],
      l4: knowledgeTree.l3
        ? getCategoryLevelOptions(CATEGORY_NODES, [knowledgeTree.l1, knowledgeTree.l2, knowledgeTree.l3])
        : [],
    }),
    [knowledgeTree],
  );

  const { getLevelOptions } = useOrgDirectory();
  const departmentOptions = useMemo(
    () => ({
      company: getLevelOptions(department, 0),
      group: department.companyName ? getLevelOptions(department, 1) : [],
      division: department.groupName ? getLevelOptions(department, 2) : [],
      section: department.divisionName ? getLevelOptions(department, 3) : [],
    }),
    [department, getLevelOptions],
  );

  const results = useMemo(() => {
    const tokens = submittedKeyword.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const selectedKnowledgePath = [knowledgeTree.l1, knowledgeTree.l2, knowledgeTree.l3, knowledgeTree.l4].filter(Boolean);
    const selectedDepartmentPath = [
      department.companyName,
      department.groupName,
      department.divisionName,
      department.departmentName,
    ].filter(Boolean);

    return rows.filter(({ doc, transfer }) => {
      const knowledgePathAfter = transfer.categoryPathAfter ?? [];
      const departmentPathAfter = transfer.ownershipDepartmentPathAfter ?? [];
      const searchable = [
        doc.docNo,
        doc.name,
        doc.department,
        doc.categoryPath.join(" / "),
        transfer.categoryPathBefore?.join(" / ") ?? "",
        transfer.categoryPathAfter?.join(" / ") ?? "",
        transfer.ownershipDepartmentPathBefore?.join(" / ") ?? "",
        transfer.ownershipDepartmentPathAfter?.join(" / ") ?? "",
        transfer.actor,
      ]
        .join(" ")
        .toLowerCase();
      if (!tokens.every((token) => searchable.includes(token))) return false;
      if (selectedKnowledgePath.length > 0 && !selectedKnowledgePath.every((segment, index) => knowledgePathAfter[index] === segment)) {
        return false;
      }
      if (selectedDepartmentPath.length > 0 && !selectedDepartmentPath.every((segment, index) => departmentPathAfter[index] === segment)) {
        return false;
      }
      return true;
    });
  }, [rows, submittedKeyword, knowledgeTree, department]);

  function reset() {
    setKeyword("");
    setSubmittedKeyword("");
    setKnowledgeTree({ l1: "", l2: "", l3: "", l4: "" });
    setDepartment(createEmptyHrScopeSelection());
    setAdvancedOpen(false);
  }

  return (
    <>
      <section className="enterprise-panel overflow-hidden rounded-xl">
        <div className="flex flex-col gap-3 border-b border-slate-200 px-4 py-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setSubmittedKeyword(keyword);
              }}
              placeholder="請輸入文件名稱、文件編號或移轉人"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-700 outline-none transition focus:border-teal-700 focus:bg-white"
            />
          </div>

          <button
            type="button"
            onClick={() => setSubmittedKeyword(keyword)}
            className="enterprise-query-button inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition"
          >
            <Search size={15} />
            查詢
          </button>

          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            重設條件
          </button>
          <button
            type="button"
            onClick={() => setAdvancedOpen((current) => !current)}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${
              advancedOpen
                ? "border-teal-700 bg-teal-50 text-teal-800"
                : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            <SlidersHorizontal size={14} />
            進階搜尋
            <ChevronDown size={14} className={advancedOpen ? "rotate-180 transition-transform" : "transition-transform"} />
          </button>
        </div>

        {advancedOpen && (
          <div className="enterprise-section-header px-4 py-4 space-y-4">
            <CascadeSelectGroup
              title="知識樹分層"
              description="以文件移轉後的知識樹目標進行四層級篩選。"
              fields={[
                {
                  label: "第一層",
                  value: knowledgeTree.l1,
                  placeholder: "請選擇第一層",
                  options: knowledgeOptions.l1,
                  onChange: (l1) =>
                    setKnowledgeTree({
                      l1,
                      l2: "",
                      l3: "",
                      l4: "",
                    }),
                },
                {
                  label: "第二層",
                  value: knowledgeTree.l2,
                  placeholder: knowledgeTree.l1 ? "請選擇第二層" : "請先選擇第一層",
                  options: knowledgeOptions.l2,
                  disabled: !knowledgeTree.l1,
                  onChange: (l2) =>
                    setKnowledgeTree({
                      ...knowledgeTree,
                      l2,
                      l3: "",
                      l4: "",
                    }),
                },
                {
                  label: "第三層",
                  value: knowledgeTree.l3,
                  placeholder: knowledgeTree.l2 ? "請選擇第三層" : "請先選擇第二層",
                  options: knowledgeOptions.l3,
                  disabled: !knowledgeTree.l2,
                  onChange: (l3) =>
                    setKnowledgeTree({
                      ...knowledgeTree,
                      l3,
                      l4: "",
                    }),
                },
                {
                  label: "第四層",
                  value: knowledgeTree.l4,
                  placeholder: knowledgeTree.l3 ? "請選擇第四層" : "請先選擇第三層",
                  options: knowledgeOptions.l4,
                  disabled: !knowledgeTree.l3,
                  onChange: (l4) => setKnowledgeTree({ ...knowledgeTree, l4 }),
                },
              ]}
            />

            <CascadeSelectGroup
              title="所屬部門"
              description="以 HR 組織資料來源進行四層級選擇。"
              fields={[
                {
                  label: "公司",
                  value: department.companyName,
                  placeholder: "請選擇公司",
                  options: departmentOptions.company,
                  onChange: (companyName) =>
                    setDepartment({
                      ...createEmptyHrScopeSelection(),
                      companyName,
                    }),
                },
                {
                  label: "群",
                  value: department.groupName,
                  placeholder: department.companyName ? "請選擇群" : "請先選擇公司",
                  options: departmentOptions.group,
                  disabled: !department.companyName,
                  onChange: (groupName) =>
                    setDepartment({
                      ...department,
                      groupName,
                      divisionName: "",
                      departmentName: "",
                    }),
                },
                {
                  label: "處",
                  value: department.divisionName,
                  placeholder: department.groupName ? "請選擇處" : "請先選擇群",
                  options: departmentOptions.division,
                  disabled: !department.groupName,
                  onChange: (divisionName) =>
                    setDepartment({
                      ...department,
                      divisionName,
                      departmentName: "",
                    }),
                },
                {
                  label: "部",
                  value: department.departmentName,
                  placeholder: department.divisionName ? "請選擇部" : "請先選擇處",
                  options: departmentOptions.section,
                  disabled: !department.divisionName,
                  onChange: (departmentName) =>
                    setDepartment({
                      ...department,
                      departmentName,
                    }),
                },
              ]}
            />
          </div>
        )}
      </section>

      <div className="enterprise-panel mt-4 rounded-xl p-5">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-800">查詢結果</div>
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">{results.length} 筆</span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="enterprise-table-head">
              <tr>
                {["文件資訊", "原單位 → 新單位", "原知識樹 → 新知識樹", "操作人", "移轉時間"].map((header) => (
                  <th key={header} className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-white">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map(({ doc, transfer }) => {
                const performerLabel = transfer.actor === doc.uploaderName || transfer.actor === doc.requestor ? "上傳者" : "簽核主管";
                return (
                  <tr key={`${doc.id}-${transfer.timestamp}`} className="border-b border-slate-100 align-top hover:bg-slate-50">
                    <td className="px-4 py-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs text-slate-500">{doc.docNo}</span>
                          <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
                            {getDocumentStatusLabel(doc.status)}
                          </span>
                        </div>
                        <div className="text-sm font-semibold text-slate-800">{doc.name}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600">
                      <div>{(transfer.ownershipDepartmentPathBefore ?? []).join(" / ") || "無"}</div>
                      <div className="mt-1 text-slate-400">→ {(transfer.ownershipDepartmentPathAfter ?? []).join(" / ") || "無"}</div>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600">
                      <div>{(transfer.categoryPathBefore ?? []).join(" / ") || "無"}</div>
                      <div className="mt-1 text-slate-400">→ {(transfer.categoryPathAfter ?? []).join(" / ") || "無"}</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-700">
                      <div className="font-semibold">{transfer.actor}</div>
                      <div className="text-xs text-slate-400">（{performerLabel}）</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">
                      {transfer.timestamp.slice(0, 16).replace("T", " ")}
                    </td>
                  </tr>
                );
              })}

              {results.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-14 text-center text-sm text-slate-400">
                    目前沒有符合條件的移轉資料
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
