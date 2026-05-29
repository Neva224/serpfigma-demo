import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { CascadeSelectGroup } from "../ui/CascadeSelectGroup";
import {
  CATEGORY_NODES,
  getCategoryLevelOptions,
  type CategorySelectionPath,
} from "../../data/catalogModels";
import {
  createEmptyHrScopeSelection,
  getHrScopeLevelOptions,
  HR_SCOPE_ROWS,
  type HrScopeSelection,
} from "../../data/hrScopeModel";
import { getDocumentStatusLabel } from "../../workflow/statusCatalog";
import type { WorkflowDocument, WorkflowHistoryEntry } from "../../workflow/workflowState";

interface Props {
  onBack: () => void;
  embedded?: boolean;
  documents: WorkflowDocument[];
}

type TransferRow = {
  doc: WorkflowDocument;
  transfer: WorkflowHistoryEntry;
};

export function TransferUnitPage({ onBack, embedded = false, documents }: Props) {
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

  const departmentOptions = useMemo(
    () => ({
      company: getHrScopeLevelOptions(HR_SCOPE_ROWS, department, 0),
      group: department.companyName ? getHrScopeLevelOptions(HR_SCOPE_ROWS, department, 1) : [],
      division: department.groupName ? getHrScopeLevelOptions(HR_SCOPE_ROWS, department, 2) : [],
      section: department.divisionName ? getHrScopeLevelOptions(HR_SCOPE_ROWS, department, 3) : [],
    }),
    [department],
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
    <div className={embedded ? "h-full overflow-y-auto bg-slate-100 px-6 py-5" : "flex-1 overflow-y-auto bg-slate-100 px-6 py-5"}>
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
          <p className="mt-1 text-sm text-slate-500">查詢文件移轉紀錄與轉移資訊</p>
        </div>
      </div>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setSubmittedKeyword(keyword);
              }}
              placeholder="請輸入文件名稱、文件編號或移轉人"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-700 outline-none transition focus:border-teal-500 focus:bg-white"
            />
          </div>

          <button
            type="button"
            onClick={() => setSubmittedKeyword(keyword)}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-500"
          >
            <Search size={15} />
            查詢
          </button>

          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            重設條件
          </button>
          <button
            type="button"
            onClick={() => setAdvancedOpen((current) => !current)}
            className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
              advancedOpen
                ? "border-teal-300 bg-teal-50 text-teal-700"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            <SlidersHorizontal size={14} />
            進階搜尋
            <ChevronDown size={14} className={advancedOpen ? "rotate-180 transition-transform" : "transition-transform"} />
          </button>
        </div>

        {advancedOpen && (
          <div className="border-t border-slate-100 bg-slate-50/60 px-4 py-4 space-y-4">
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

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-800">查詢結果</div>
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">{results.length} 筆</span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                {["文件資訊", "原單位 → 新單位", "原知識樹 → 新知識樹", "操作人", "移轉時間"].map((header) => (
                  <th key={header} className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-slate-600">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map(({ doc, transfer }) => {
                const performerLabel = transfer.actor === doc.uploaderName || transfer.actor === doc.requestor ? "上傳者" : "簽核主管";
                return (
                  <tr key={`${doc.id}-${transfer.timestamp}`} className="border-b border-slate-100 align-top">
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
    </div>
  );
}
