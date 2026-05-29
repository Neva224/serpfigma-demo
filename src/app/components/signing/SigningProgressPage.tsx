import { useMemo, useState, type ReactNode } from "react";
import { FileText, RotateCcw, Search } from "lucide-react";
import { type DocumentStatus } from "../document-management/mockData";
import { toApprovalQueryRecord, type WorkflowDocument } from "../../workflow/workflowState";
import { StatusRail } from "../ui/StatusRail";
import { getDocumentStatusLabel } from "../../workflow/statusCatalog";

type SigningStatus = DocumentStatus | "";

interface RecordItem {
  signingNo: string;
  docName: string;
  requestor: string;
  requestorCode: string;
  submitDate: string;
  subject: string;
  requestUnitCode: string;
  processUnitCode: string;
  company: string;
  status: DocumentStatus;
  includeVoided: boolean;
  includeReturned: boolean;
  currentHandler: string;
}

interface Props {
  onBack: () => void;
  embedded?: boolean;
  documents: WorkflowDocument[];
}

export function SigningProgressPage({ onBack, embedded = false, documents }: Props) {
  const [signingNo, setSigningNo] = useState("");
  const [docName, setDocName] = useState("");
  const [subject, setSubject] = useState("");
  const [requestUnitCode, setRequestUnitCode] = useState("");
  const [processUnitCode, setProcessUnitCode] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [statuses, setStatuses] = useState<SigningStatus[]>([]);
  const [includeVoidedOnly, setIncludeVoidedOnly] = useState(false);
  const [includeReturnedOnly, setIncludeReturnedOnly] = useState(false);
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState<RecordItem[]>([]);

  const records = useMemo<RecordItem[]>(
    () => documents.map((doc) => toApprovalQueryRecord(doc)),
    [documents],
  );

  const statusOptions = useMemo(
    () =>
      Array.from(new Set(records.map((record) => record.status))).filter(Boolean).sort((a, b) =>
        STATUS_ORDER.indexOf(a) - STATUS_ORDER.indexOf(b),
      ),
    [records],
  );

  const filtered = useMemo(() => {
    let list = records;
    if (signingNo) list = list.filter((item) => item.signingNo.includes(signingNo));
    if (docName) list = list.filter((item) => item.docName.includes(docName));
    if (subject) list = list.filter((item) => item.subject.includes(subject));
    if (requestUnitCode) list = list.filter((item) => item.requestUnitCode.includes(requestUnitCode));
    if (processUnitCode) list = list.filter((item) => item.processUnitCode.includes(processUnitCode));
    if (company) list = list.filter((item) => item.company.includes(company));
    if (statuses.length > 0) list = list.filter((item) => statuses.includes(item.status));
    if (includeVoidedOnly) list = list.filter((item) => item.includeVoided);
    if (includeReturnedOnly) list = list.filter((item) => item.includeReturned);
    if (startDate) list = list.filter((item) => item.submitDate >= startDate);
    if (endDate) list = list.filter((item) => item.submitDate <= endDate);
    return list;
  }, [
    records,
    signingNo,
    docName,
    subject,
    requestUnitCode,
    processUnitCode,
    company,
    statuses,
    includeVoidedOnly,
    includeReturnedOnly,
    startDate,
    endDate,
  ]);

  function doSearch() {
    setResults(filtered);
    setSearched(true);
  }

  function doReset() {
    setSigningNo("");
    setDocName("");
    setSubject("");
    setRequestUnitCode("");
    setProcessUnitCode("");
    setCompany("");
    setStartDate("");
    setEndDate("");
    setStatuses([]);
    setIncludeVoidedOnly(false);
    setIncludeReturnedOnly(false);
    setResults([]);
    setSearched(false);
  }

  function toggleStatus(status: SigningStatus) {
    setStatuses((current) =>
      current.includes(status) ? current.filter((item) => item !== status) : [...current, status],
    );
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
            <span>文件簽核進度查詢</span>
          </div>
          <h2 className="text-lg font-bold text-slate-800">文件簽核進度查詢</h2>
          <p className="mt-1 text-sm text-slate-500">可依簽核號、文件名稱、狀態與日期區間查詢簽核進度</p>
        </div>
      </div>

      <div className="mb-5">
        <StatusRail status={results[0]?.status ?? "草稿"} />
      </div>

      <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-3">
          <Field label="簽核號">
            <input
              value={signingNo}
              onChange={(e) => setSigningNo(e.target.value)}
              placeholder="請輸入簽核號"
              className={inputClass}
            />
          </Field>
          <Field label="文件名稱">
            <input
              value={docName}
              onChange={(e) => setDocName(e.target.value)}
              placeholder="請輸入文件名稱"
              className={inputClass}
            />
          </Field>
          <Field label="主旨">
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="請輸入主旨"
              className={inputClass}
            />
          </Field>
          <Field label="申請單位代碼">
            <input
              value={requestUnitCode}
              onChange={(e) => setRequestUnitCode(e.target.value)}
              placeholder="請輸入申請單位代碼"
              className={inputClass}
            />
          </Field>
          <Field label="處理單位代碼">
            <input
              value={processUnitCode}
              onChange={(e) => setProcessUnitCode(e.target.value)}
              placeholder="請輸入處理單位代碼"
              className={inputClass}
            />
          </Field>
          <Field label="公司">
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="請輸入公司名稱"
              className={inputClass}
            />
          </Field>
          <Field label="申請日期起">
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className={inputClass} />
          </Field>
          <Field label="申請日期迄">
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className={inputClass} />
          </Field>
          <Field label="狀態">
            <div className="flex flex-wrap gap-2">
              {statusOptions.map((status) => (
                <button
                  type="button"
                  key={status}
                  onClick={() => toggleStatus(status)}
                  className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                    statuses.includes(status)
                      ? "border-teal-600 bg-teal-50 text-teal-700"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {getDocumentStatusLabel(status)}
                </button>
              ))}
            </div>
          </Field>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Toggle label="含作廢" checked={includeVoidedOnly} onChange={setIncludeVoidedOnly} />
          <Toggle label="含退件" checked={includeReturnedOnly} onChange={setIncludeReturnedOnly} />

          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={doReset}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              <RotateCcw size={14} />
              重設
            </button>
            <button
              type="button"
              onClick={doSearch}
              className="inline-flex items-center gap-1.5 rounded-lg bg-teal-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-500"
            >
              <Search size={14} />
              查詢
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-teal-600" />
            <h3 className="text-sm font-semibold text-slate-800">查詢結果</h3>
          </div>
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
            {searched ? `${results.length} 筆` : "尚未查詢"}
          </span>
        </div>

        {searched ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  {["簽核號", "文件名稱", "申請人", "申請日期", "狀態", "當前處理者"].map((header) => (
                    <th key={header} className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-slate-600">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {results.map((item) => (
                  <tr key={item.signingNo} className="border-b border-slate-100">
                    <td className="whitespace-nowrap px-4 py-3 text-xs font-mono text-slate-500">{item.signingNo}</td>
                    <td className="px-4 py-3">
                      <div className="text-sm font-semibold text-slate-800">{item.docName}</div>
                      <div className="text-xs text-slate-400">{item.subject}</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600">
                      {item.requestor} / {item.requestorCode}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600">{item.submitDate}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm font-semibold text-teal-700">{getDocumentStatusLabel(item.status)}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600">{item.currentHandler}</td>
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
        ) : (
          <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-5 py-12 text-center text-sm text-slate-400">
            請先設定查詢條件後按下查詢
          </div>
        )}
      </div>
    </div>
  );
}

const STATUS_ORDER: DocumentStatus[] = ["草稿", "待主管簽核", "待文管審核", "上架", "退回", "作廢", "刪除"];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-teal-500 focus:bg-white";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="space-y-1.5">
      <span className="block text-sm font-semibold text-slate-600">{label}</span>
      {children}
    </label>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (next: boolean) => void;
}) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-600">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
      />
      {label}
    </label>
  );
}
