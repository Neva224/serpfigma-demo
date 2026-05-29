import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, FileText } from "lucide-react";
import { CascadeSelectGroup } from "../ui/CascadeSelectGroup";
import { CATEGORY_NODES, getCategoryLevelOptions, type CategorySelectionPath } from "../../data/catalogModels";
import {
  createEmptyHrScopeSelection,
  getHrScopeLevelOptions,
  HR_SCOPE_ROWS,
  type HrScopeSelection,
} from "../../data/hrScopeModel";
import { getDocumentStatusLabel } from "../../workflow/statusCatalog";
import type { WorkflowDocument } from "../../workflow/workflowState";

interface Props {
  onBack: () => void;
  embedded?: boolean;
  documents: WorkflowDocument[];
  onEditDraft: (doc: WorkflowDocument) => void;
}

export function DraftSectionPage({ onBack, embedded = false, documents, onEditDraft }: Props) {
  const drafts = useMemo(() => documents.filter((doc) => doc.status === "草稿"), [documents]);
  const [keyword, setKeyword] = useState("");
  const [submittedKeyword, setSubmittedKeyword] = useState("");
  const [advancedOpen, setAdvancedOpen] = useState(true);
  const [department, setDepartment] = useState<HrScopeSelection>(createEmptyHrScopeSelection());
  const [knowledgeTree, setKnowledgeTree] = useState<CategorySelectionPath>({
    l1: "",
    l2: "",
    l3: "",
    l4: "",
  });

  const departmentOptions = useMemo(() => ({
    company: getHrScopeLevelOptions(HR_SCOPE_ROWS, department, 0),
    group: department.companyName ? getHrScopeLevelOptions(HR_SCOPE_ROWS, department, 1) : [],
    division: department.groupName ? getHrScopeLevelOptions(HR_SCOPE_ROWS, department, 2) : [],
    section: department.divisionName ? getHrScopeLevelOptions(HR_SCOPE_ROWS, department, 3) : [],
  }), [department]);

  const knowledgeOptions = useMemo(() => ({
    l1: getCategoryLevelOptions(CATEGORY_NODES, []),
    l2: knowledgeTree.l1 ? getCategoryLevelOptions(CATEGORY_NODES, [knowledgeTree.l1]) : [],
    l3: knowledgeTree.l2 ? getCategoryLevelOptions(CATEGORY_NODES, [knowledgeTree.l1, knowledgeTree.l2]) : [],
    l4: knowledgeTree.l3
      ? getCategoryLevelOptions(CATEGORY_NODES, [knowledgeTree.l1, knowledgeTree.l2, knowledgeTree.l3])
      : [],
  }), [knowledgeTree]);

  const results = useMemo(() => {
    const tokens = submittedKeyword.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const selectedDepartmentPath = [department.companyName, department.groupName, department.divisionName, department.departmentName].filter(Boolean);
    const selectedKnowledgePath = [knowledgeTree.l1, knowledgeTree.l2, knowledgeTree.l3, knowledgeTree.l4].filter(Boolean);

    return drafts
      .filter((doc) => {
        if (tokens.length === 0) return true;
        const knowledgePath = doc.categoryPath?.join(" / ") ?? doc.knowledgePath?.join(" / ") ?? "";
        const searchable = [
          doc.docNo,
          doc.name,
          doc.summary ?? doc.subject ?? "",
          doc.department,
          knowledgePath,
          doc.tags.join(" "),
        ]
          .join(" ")
          .toLowerCase();
        return tokens.every((token) => searchable.includes(token));
      })
      .filter((doc) => {
        if (selectedDepartmentPath.length === 0) return true;
        const docPath = doc.ownershipDepartmentPath ?? doc.department.split(" / ").map((item) => item.trim()).filter(Boolean);
        return selectedDepartmentPath.every((segment, index) => docPath[index] === segment);
      })
      .filter((doc) => {
        if (selectedKnowledgePath.length === 0) return true;
        const docPath = doc.categoryPath ?? doc.knowledgePath ?? [];
        return selectedKnowledgePath.every((segment, index) => docPath[index] === segment);
      })
      .sort((a, b) => (b.updatedAt ?? b.uploadDate).localeCompare(a.updatedAt ?? a.uploadDate));
  }, [drafts, submittedKeyword, department, knowledgeTree]);

  function reset() {
    setKeyword("");
    setSubmittedKeyword("");
    setDepartment(createEmptyHrScopeSelection());
    setKnowledgeTree({ l1: "", l2: "", l3: "", l4: "" });
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
              文件上傳專區
            </button>
            <span>/</span>
            <span>草稿專區</span>
          </div>
          <h2 className="text-lg font-bold text-slate-800">草稿專區</h2>
          <p className="mt-1 text-sm text-slate-500">管理已儲存的草稿文件，可繼續編輯或重新送出</p>
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
              placeholder="請輸入文件名稱"
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
        </div>

        <div className="flex flex-wrap items-center gap-3 px-4 py-4">
          <div className="text-sm font-semibold text-slate-700">篩選條件</div>
          <div className="ml-auto flex items-center gap-2">
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
            </button>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              重設條件
            </button>
          </div>
        </div>

        {advancedOpen && (
          <div className="border-t border-slate-100 bg-slate-50/60 px-4 py-4 space-y-4">
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

            <CascadeSelectGroup
              title="知識樹分層"
              description="以文件分類樹進行四層級選擇。"
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
          </div>
        )}
      </section>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-slate-800">草稿清單</div>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">{results.length} 筆</span>
          </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                {["文件編號", "文件名稱", "所屬部門", "知識樹分層", "狀態", "建立或更新時間", "操作"].map((header) => (
                  <th key={header} className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-slate-600">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((doc) => {
                const knowledgeLabel = (doc.categoryPath ?? doc.knowledgePath ?? []).join(" / ") || "未設定";
                return (
                  <tr key={doc.id} className="border-b border-slate-100 align-top">
                    <td className="whitespace-nowrap px-4 py-3 text-xs font-mono text-slate-500">{doc.docNo}</td>
                    <td className="px-4 py-3">
                      <div className="text-sm font-semibold text-slate-800">{doc.name}</div>
                      <div className="mt-1 text-xs text-slate-400">{doc.summary ?? doc.subject ?? "尚未填寫摘要"}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      <div>{doc.department || "未選擇部門"}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      <div>{knowledgeLabel}</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                        {getDocumentStatusLabel(doc.status)}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600">
                      {(doc.updatedAt ?? doc.uploadDate).slice(0, 16).replace("T", " ")}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <button
                        type="button"
                        onClick={() => onEditDraft(doc)}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700 transition hover:bg-teal-100"
                      >
                        <FileText size={13} />
                        繼續編輯
                      </button>
                    </td>
                  </tr>
                );
              })}

              {results.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-14 text-center text-sm text-slate-400">
                    目前沒有符合條件的草稿文件
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
