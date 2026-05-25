import { useState } from "react";
import { Search, RotateCcw, ChevronLeft, ChevronRight, FileText } from "lucide-react";

const RECORDS = [
  { signingNo: "SGN-2024-0094", docName: "員工教育訓練計畫", requester: "趙雅婷", requesterCode: "250347", submitDate: "2024-04-05", status: "會簽", currentHandler: "文管簽核組" },
  { signingNo: "SGN-2024-0093", docName: "人力資源管理程序書", requester: "陳美玲", requesterCode: "250343", submitDate: "2024-03-28", status: "結案", currentHandler: "—" },
  { signingNo: "SGN-2024-0092", docName: "系統架構說明書", requester: "吳俊傑", requesterCode: "250346", submitDate: "2024-03-28", status: "退件", currentHandler: "吳俊傑" },
  { signingNo: "SGN-2024-0091", docName: "軟體開發管理辦法", requester: "李小華", requesterCode: "250342", submitDate: "2024-04-02", status: "申請", currentHandler: "部門主管" },
  { signingNo: "SGN-2024-0090", docName: "資訊安全年度計畫", requester: "蔡宛芸", requesterCode: "250350", submitDate: "2024-03-15", status: "結案", currentHandler: "—" },
  { signingNo: "SGN-2024-0089", docName: "資訊安全管理政策", requester: "王大明", requesterCode: "250341", submitDate: "2024-03-10", status: "結案", currentHandler: "—" },
  { signingNo: "SGN-2024-0088", docName: "供應商評鑑標準", requester: "林建宏", requesterCode: "250345", submitDate: "2024-01-20", status: "結案", currentHandler: "—" },
];

const STATUS_STYLE: Record<string, { bg: string; text: string }> = {
  申請: { bg: "#FEF3C7", text: "#B45309" },
  會簽: { bg: "#DBEAFE", text: "#1D4ED8" },
  結案: { bg: "#DCFCE7", text: "#15803D" },
  退件: { bg: "#FEE2E2", text: "#DC2626" },
};

export function SigningProgressPage() {
  const [signingNo, setSigningNo] = useState("");
  const [docName, setDocName] = useState("");
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [includeVoid, setIncludeVoid] = useState(false);
  const [includeReturned, setIncludeReturned] = useState(false);
  const [results, setResults] = useState(RECORDS);
  const [searched, setSearched] = useState(false);

  function doSearch() {
    let r = RECORDS;
    if (signingNo) r = r.filter((x) => x.signingNo.includes(signingNo));
    if (docName) r = r.filter((x) => x.docName.includes(docName));
    if (statusFilter.length > 0) r = r.filter((x) => statusFilter.includes(x.status));
    setResults(r);
    setSearched(true);
  }

  function toggleStatus(s: string) {
    setStatusFilter((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  }

  function doReset() {
    setSigningNo(""); setDocName(""); setStatusFilter([]);
    setStartDate(""); setEndDate(""); setIncludeVoid(false); setIncludeReturned(false);
    setResults(RECORDS); setSearched(false);
  }

  return (
    <div className="flex-1 overflow-y-auto px-6 py-5" style={{ backgroundColor: "#F3F4F6" }}>
      <div className="mb-4">
        <h2 className="text-gray-800" style={{ fontSize: "18px", fontWeight: 700 }}>文件簽核進度查詢</h2>
        <p className="text-gray-500 text-sm mt-0.5">查詢各類文件的簽核流程進度、狀態及處理人員</p>
      </div>

      {/* Search form card */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-5">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <Field label="簽核單號">
            <input value={signingNo} onChange={(e) => setSigningNo(e.target.value)} placeholder="輸入單號" className={iCls} />
          </Field>
          <Field label="申請日期（起）">
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className={iCls} />
          </Field>
          <Field label="申請日期（迄）">
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className={iCls} />
          </Field>
          <Field label="文件名稱 %">
            <input value={docName} onChange={(e) => setDocName(e.target.value)} placeholder="輸入文件名稱關鍵字" className={iCls} />
          </Field>
          <Field label="主旨 %">
            <input placeholder="輸入關鍵字" className={iCls} />
          </Field>
          <Field label="（申請單位）代碼">
            <input placeholder="Code" className={iCls} />
          </Field>
          <Field label="（處理單位）代碼">
            <input placeholder="Code" className={iCls} />
          </Field>
          <Field label="公司">
            <div className="relative">
              <select className="w-full appearance-none px-3 py-2 pr-7 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 focus:outline-none focus:border-teal-500 transition-all" style={{ fontSize: "13px" }}>
                <option>（請選擇）</option>
                <option>雄獅集團</option>
              </select>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" style={{ fontSize: "11px" }}>▾</span>
            </div>
          </Field>
        </div>

        {/* Status toggle buttons */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-gray-600" style={{ fontSize: "12px", fontWeight: 600 }}>狀態</span>
          <div className="flex gap-2">
            {["申請", "會簽", "結案"].map((s) => (
              <button
                key={s}
                onClick={() => toggleStatus(s)}
                className="px-4 py-1.5 rounded-lg border transition-all"
                style={{
                  fontSize: "12px",
                  fontWeight: statusFilter.includes(s) ? 700 : 400,
                  backgroundColor: statusFilter.includes(s) ? "#0D9488" : "transparent",
                  borderColor: statusFilter.includes(s) ? "#0D9488" : "#E5E7EB",
                  color: statusFilter.includes(s) ? "#ffffff" : "#6B7280",
                }}
              >
                {s}
              </button>
            ))}
          </div>
          {/* Toggles */}
          <div className="ml-auto flex items-center gap-4">
            <Toggle label="含作廢" checked={includeVoid} onChange={setIncludeVoid} />
            <Toggle label="含退件" checked={includeReturned} onChange={setIncludeReturned} />
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={doReset} className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-all" style={{ fontSize: "13px" }}>
            <RotateCcw size={13} />清除
          </button>
          <button onClick={doSearch} className="flex items-center gap-1.5 px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-all" style={{ backgroundColor: "#0D9488", fontSize: "13px" }}>
            <Search size={14} />搜尋
          </button>
        </div>
      </div>

      {/* Results table */}
      {searched && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50/60">
            <span className="text-gray-600 text-sm">查詢結果：共 <strong>{results.length}</strong> 筆</span>
          </div>
          <table className="w-full" style={{ fontSize: "12px" }}>
            <thead>
              <tr style={{ backgroundColor: "#0D9488" }}>
                {["簽核單號", "文件名稱", "申請人", "申請日期", "目前狀態", "目前處理人", "操作"].map((h) => (
                  <th key={h} className="text-left px-4 py-2.5 text-white font-semibold whitespace-nowrap" style={{ fontSize: "11px" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => {
                const sc = STATUS_STYLE[r.status] ?? { bg: "#F3F4F6", text: "#4B5563" };
                return (
                  <tr key={r.signingNo} className="border-b border-gray-50 hover:bg-teal-50/20 transition-colors" style={{ backgroundColor: i % 2 === 1 ? "#FAFAFA" : "#FFFFFF" }}>
                    <td className="px-4 py-2.5 font-mono text-gray-600" style={{ fontSize: "11px" }}>{r.signingNo}</td>
                    <td className="px-4 py-2.5 text-gray-800 font-medium">{r.docName}</td>
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ fontSize: "9px", fontWeight: 700, backgroundColor: "#0D9488" }}>{r.requester[0]}</div>
                        <span className="text-gray-700">{r.requester}</span>
                        <span className="text-gray-400" style={{ fontSize: "10px" }}>({r.requesterCode})</span>
                      </div>
                    </td>
                    <td className="px-4 py-2.5 text-gray-500 whitespace-nowrap">{r.submitDate}</td>
                    <td className="px-4 py-2.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full font-medium" style={{ fontSize: "11px", backgroundColor: sc.bg, color: sc.text }}>{r.status}</span>
                    </td>
                    <td className="px-4 py-2.5 text-gray-600">{r.currentHandler}</td>
                    <td className="px-4 py-2.5">
                      <button className="flex items-center gap-1 px-2 py-1 rounded border border-gray-200 text-gray-500 hover:border-teal-400 hover:text-teal-600 transition-all" style={{ fontSize: "11px" }}>
                        <FileText size={11} />簽核紀錄
                      </button>
                    </td>
                  </tr>
                );
              })}
              {results.length === 0 && (
                <tr><td colSpan={7} className="text-center py-10 text-gray-400 text-sm">查無符合條件的簽核記錄</td></tr>
              )}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50/40">
            <span className="text-gray-400" style={{ fontSize: "11px" }}>共 {results.length} 筆</span>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 rounded flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-all disabled:opacity-30" disabled>
                <ChevronLeft size={13} />
              </button>
              <span className="px-2 py-1 rounded text-white" style={{ fontSize: "11px", backgroundColor: "#0D9488" }}>1</span>
              <button className="w-7 h-7 rounded flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-all disabled:opacity-30" disabled>
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block mb-1.5 text-gray-600" style={{ fontSize: "11px", fontWeight: 600 }}>{label}</label>
      {children}
    </div>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <div
        onClick={() => onChange(!checked)}
        className="relative w-9 h-5 rounded-full transition-all"
        style={{ backgroundColor: checked ? "#0D9488" : "#D1D5DB" }}
      >
        <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-all" style={{ transform: checked ? "translateX(16px)" : "translateX(0)" }} />
      </div>
      <span className="text-gray-600" style={{ fontSize: "12px" }}>{label}</span>
    </label>
  );
}

const iCls = "w-full px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-teal-500 focus:bg-white transition-all" as const;
