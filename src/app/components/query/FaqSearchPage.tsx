import { useMemo, useState } from "react";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";
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
  const [department, setDepartment] = useState("");
  const [company, setCompany] = useState("");
  const [group, setGroup] = useState("");
  const [division, setDivision] = useState("");
  const [section, setSection] = useState("");
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const results = useMemo(() => {
    const tokens = submittedKeyword.trim().toLowerCase().split(/\s+/).filter(Boolean);
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
        const parts = doc.ownershipDepartmentPath ?? doc.department.split(" / ").map((item) => item.trim()).filter(Boolean);
        const fullDepartment = doc.department.toLowerCase();
        if (department.trim() && !fullDepartment.includes(department.trim().toLowerCase())) return false;
        if (company.trim() && !(parts[0] ?? "").toLowerCase().includes(company.trim().toLowerCase())) return false;
        if (group.trim() && !(parts[1] ?? "").toLowerCase().includes(group.trim().toLowerCase())) return false;
        if (division.trim() && !(parts[2] ?? "").toLowerCase().includes(division.trim().toLowerCase())) return false;
        if (section.trim() && !(parts[3] ?? "").toLowerCase().includes(section.trim().toLowerCase())) return false;
        return true;
      })
      .sort((a, b) => b.uploadDate.localeCompare(a.uploadDate));
  }, [publishedDocs, submittedKeyword, company, group, division, section]);

  function reset() {
    setKeyword("");
    setSubmittedKeyword("");
    setDepartment("");
    setCompany("");
    setGroup("");
    setDivision("");
    setSection("");
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
              一般文件查詢
            </button>
            <span>/</span>
            <span>常見問題查詢</span>
          </div>
          <h2 className="text-lg font-bold text-slate-800">常見問題查詢</h2>
          <p className="mt-1 text-sm text-slate-500">可依關鍵字與部門層級快速查找常見問題文件</p>
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
              placeholder="請輸入文件關鍵字"
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
          <FilterSelect
            label="所屬部門"
            value={department}
            onChange={setDepartment}
            placeholder="請輸入部門"
          />
          <FilterSelect label="公司" value={company} onChange={setCompany} placeholder="請輸入公司" />
          <FilterSelect label="群" value={group} onChange={setGroup} placeholder="請輸入群" />

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
              <ChevronDown size={14} className={advancedOpen ? "rotate-180 transition-transform" : "transition-transform"} />
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
          <div className="border-t border-slate-100 bg-slate-50/60 px-4 py-4">
            <div className="grid gap-3 lg:grid-cols-3">
              <TextField label="公司" value={company} onChange={setCompany} placeholder="請輸入公司名稱" />
              <TextField label="群" value={group} onChange={setGroup} placeholder="請輸入群名稱" />
              <TextField label="處" value={division} onChange={setDivision} placeholder="請輸入處名稱" />
              <TextField label="部" value={section} onChange={setSection} placeholder="請輸入部名稱" />
            </div>
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
                {["文件編號", "文件名稱", "所屬部門", "狀態", "上傳者", "上傳日期"].map((header) => (
                  <th key={header} className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-slate-600">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((doc) => (
                <tr key={doc.id} className="border-b border-slate-100">
                  <td className="whitespace-nowrap px-4 py-3 text-xs font-mono text-slate-500">{doc.docNo}</td>
                  <td className="px-4 py-3">
                    <div className="text-sm font-semibold text-slate-800">{doc.name}</div>
                    <div className="text-xs text-slate-400">{doc.summary ?? doc.subject ?? "沒有摘要"}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">{doc.department}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-semibold text-teal-700">{getDocumentStatusLabel(doc.status)}</td>
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

function FilterSelect({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="flex min-w-[220px] items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
      <span className="mr-2 text-xs font-semibold text-slate-500">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
      />
    </label>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="space-y-1.5">
      <span className="block text-sm font-semibold text-slate-600">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500"
      />
    </label>
  );
}
