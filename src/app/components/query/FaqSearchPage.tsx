import { useMemo, useState } from "react";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { CascadeSelectGroup } from "../ui/CascadeSelectGroup";
import { createEmptyHrScopeSelection, type HrScopeSelection } from "../../data/hrScopeModel";
import { useOrgDirectory } from "../../hooks/useOrgDirectory";
import { getDocumentStatusLabel } from "../../workflow/statusCatalog";
import type { WorkflowDocument } from "../../workflow/workflowState";

interface Props {
  onBack: () => void;
  embedded?: boolean;
  documents: WorkflowDocument[];
}

export function FaqSearchPage({ onBack, embedded = false, documents }: Props) {
  const publishedDocs = useMemo(() => documents.filter((doc) => doc.status === "上架"), [documents]);
  const [keyword, setKeyword] = useState("");
  const [submittedKeyword, setSubmittedKeyword] = useState("");
  const [advancedOpen, setAdvancedOpen] = useState(true);
  const [department, setDepartment] = useState<HrScopeSelection>(createEmptyHrScopeSelection());

  const { getLevelOptions } = useOrgDirectory();
  const companyOptions = useMemo(() => getLevelOptions(department, 0), [department, getLevelOptions]);
  const groupOptions = useMemo(() => (department.companyName ? getLevelOptions(department, 1) : []), [department, getLevelOptions]);
  const divisionOptions = useMemo(() => (department.groupName ? getLevelOptions(department, 2) : []), [department, getLevelOptions]);
  const sectionOptions = useMemo(() => (department.divisionName ? getLevelOptions(department, 3) : []), [department, getLevelOptions]);

  const results = useMemo(() => {
    const tokens = submittedKeyword.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const selectedPath = [department.companyName, department.groupName, department.divisionName, department.departmentName].filter(Boolean);

    return publishedDocs
      .filter((doc) => {
        if (tokens.length === 0) return true;
        const path = doc.ownershipDepartmentPath?.join(" / ") ?? doc.department;
        const searchable = [
          doc.docNo,
          doc.name,
          doc.subject ?? "",
          doc.summary ?? "",
          doc.department,
          path,
          doc.tags.join(" "),
        ]
          .join(" ")
          .toLowerCase();
        return tokens.every((token) => searchable.includes(token));
      })
      .filter((doc) => {
        if (selectedPath.length === 0) return true;
        const docPath = doc.ownershipDepartmentPath ?? doc.department.split(" / ").map((item) => item.trim()).filter(Boolean);
        return selectedPath.every((segment, index) => docPath[index] === segment);
      })
      .sort((a, b) => b.uploadDate.localeCompare(a.uploadDate));
  }, [publishedDocs, submittedKeyword, department]);

  function reset() {
    setKeyword("");
    setSubmittedKeyword("");
    setDepartment(createEmptyHrScopeSelection());
    setAdvancedOpen(false);
  }

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
              一般文件查詢
            </button>
            <span>/</span>
            <span>FAQ常見問題專區</span>
          </div>
          <h2 className="text-lg font-bold text-slate-800">FAQ常見問題專區</h2>
          <p className="mt-1 text-sm text-slate-500">可依關鍵字與組織層級快速查找常見問題文件</p>
        </div>
      </div>

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
              placeholder="請輸入文件關鍵字"
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
        </div>

        <div className="flex flex-wrap items-center gap-3 px-4 py-4">
          <div className="text-sm font-semibold text-slate-700">組織篩選</div>
          <div className="ml-auto flex items-center gap-2">
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
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              重設條件
            </button>
          </div>
        </div>

        {advancedOpen && (
          <div className="enterprise-section-header px-4 py-4">
            <CascadeSelectGroup
              title="組織篩選"
              description="以 HR 組織資料來源進行四層級選擇。"
              fields={[
                {
                  label: "公司",
                  value: department.companyName,
                  placeholder: "請選擇公司",
                  options: companyOptions,
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
                  options: groupOptions,
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
                  options: divisionOptions,
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
                  options: sectionOptions,
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
                {["文件編號", "文件名稱", "所屬部門", "狀態", "上傳者", "上傳日期"].map((header) => (
                  <th key={header} className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-white">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((doc) => (
                <tr key={doc.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="whitespace-nowrap px-4 py-3 text-xs font-mono text-slate-500">{doc.docNo}</td>
                  <td className="px-4 py-3">
                    <div className="text-sm font-semibold text-slate-800">{doc.name}</div>
                    <div className="text-xs text-slate-400">{doc.summary ?? doc.subject ?? "沒有摘要"}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">{doc.department}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-semibold text-slate-700">{getDocumentStatusLabel(doc.status)}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600">{doc.uploaderName}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600">{doc.uploadDate}</td>
                </tr>
              ))}
              {results.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-14 text-center text-sm text-slate-400">
                    目前沒有符合條件的資料
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
