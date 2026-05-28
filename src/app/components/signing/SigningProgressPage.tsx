import { useMemo, useState } from "react";
import { FileText, RotateCcw, Search } from "lucide-react";

type SigningStatus = "申請" | "會簽" | "結案";

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
  status: SigningStatus;
  includeVoided: boolean;
  includeReturned: boolean;
  currentHandler: string;
}

const RECORDS: RecordItem[] = [
  {
    signingNo: "SGN-2026-001",
    docName: "文件管理程序書",
    requestor: "王小明",
    requestorCode: "250341",
    submitDate: "2026-05-08",
    subject: "文件管理",
    requestUnitCode: "1001",
    processUnitCode: "2001",
    company: "總管理處",
    status: "申請",
    includeVoided: true,
    includeReturned: false,
    currentHandler: "李文管",
  },
  {
    signingNo: "SGN-2026-002",
    docName: "請假申請單",
    requestor: "陳怡君",
    requestorCode: "250343",
    submitDate: "2026-05-04",
    subject: "請假申請",
    requestUnitCode: "1002",
    processUnitCode: "2001",
    company: "人資部",
    status: "會簽",
    includeVoided: true,
    includeReturned: true,
    currentHandler: "林主管",
  },
  {
    signingNo: "SGN-2026-003",
    docName: "品質管理手冊",
    requestor: "林建宏",
    requestorCode: "250345",
    submitDate: "2026-04-28",
    subject: "品質管理",
    requestUnitCode: "1003",
    processUnitCode: "3001",
    company: "品保處",
    status: "結案",
    includeVoided: false,
    includeReturned: true,
    currentHandler: "系統",
  },
];

interface Props {
  onBack: () => void;
  embedded?: boolean;
}

export function SigningProgressPage({ onBack, embedded = false }: Props) {
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

  const statusOptions: SigningStatus[] = ["申請", "會簽", "結案"];

  const filtered = useMemo(() => {
    let list = RECORDS;
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
              文件簽核
            </button>
            <span>/</span>
            <span>文件簽核進度查詢</span>
          </div>
          <h2 className="text-lg font-bold text-slate-800">文件簽核進度查詢</h2>
          <p className="mt-1 text-sm text-slate-500">查詢簽核單進度、目前處理人與文件處理狀態</p>
        </div>
      </div>

      <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-3">
          <Field label="簽核單號">
            <input
              value={signingNo}
              onChange={(e) => setSigningNo(e.target.value)}
              placeholder="請輸入簽核單號"
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
          <Field label="申請主旨">
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
              placeholder="請輸入公司"
              className={inputClass}
            />
          </Field>
          <Field label="申請日期起">
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className={inputClass} />
          </Field>
          <Field label="申請日期迄">
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className={inputClass} />
          </Field>
          <Field label="簽核狀態">
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
                  {status}
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

      {!searched ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center text-sm text-slate-400">
          請先設定條件後查詢
        </div>
      ) : results.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center text-sm text-slate-400">
          找不到符合條件的簽核資料
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-5 py-3">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <FileText size={15} className="text-teal-600" />
              查詢結果
            </div>
            <div className="text-sm text-slate-500">
              共 <span className="font-semibold text-slate-700">{results.length}</span> 筆
            </div>
          </div>

          <table className="w-full text-left">
            <thead className="bg-teal-600">
              <tr>
                {["簽核單號", "文件名稱", "申請人", "申請日期", "狀態", "目前處理人", "操作"].map((header) => (
                  <th key={header} className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-white">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((item) => (
                <tr key={item.signingNo} className="border-b border-slate-100 hover:bg-teal-50/30">
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600">{item.signingNo}</td>
                  <td className="px-4 py-3 text-sm font-medium text-slate-800">{item.docName}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600">
                    {item.requestor} ({item.requestorCode})
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-500">{item.submitDate}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                      {item.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600">{item.currentHandler}</td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <button className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 transition hover:bg-slate-50">
                      <FileText size={12} />
                      檢視
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-slate-500">{label}</span>
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
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold transition ${
        checked
          ? "border-teal-600 bg-teal-50 text-teal-700"
          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
      }`}
    >
      <span className={`relative h-4 w-8 rounded-full transition ${checked ? "bg-teal-600" : "bg-slate-300"}`}>
        <span
          className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition ${
            checked ? "left-4" : "left-0.5"
          }`}
        />
      </span>
      {label}
    </button>
  );
}

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:bg-white";
