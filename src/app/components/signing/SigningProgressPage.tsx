import { useMemo, useState, type ReactNode } from "react";
import { FileText, RotateCcw, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { type DocumentStatus } from "../document-management/mockData";
import { toApprovalQueryRecord, type WorkflowDocument } from "../../workflow/workflowState";
import { StatusRail } from "../ui/StatusRail";
import { getDocumentStatusLabel } from "../../workflow/statusCatalog";

const APPROVAL_STATUSES = ["待主管簽核", "待文管簽核", "上架"] as const;
type SigningStatus = "" | (typeof APPROVAL_STATUSES)[number];

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
  const [status, setStatus] = useState<SigningStatus>("");
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState<RecordItem[]>([]);

  const records = useMemo<RecordItem[]>(
    () => documents.map((doc) => toApprovalQueryRecord(doc)),
    [documents],
  );

  const statusOptions = useMemo(
    () => APPROVAL_STATUSES.map((value) => ({ value, label: getDocumentStatusLabel(value) })),
    [],
  );

  const approvalRecords = useMemo(
    () => records.filter((record) => APPROVAL_STATUSES.includes(record.status as (typeof APPROVAL_STATUSES)[number])),
    [records],
  );

  const filtered = useMemo(() => {
    let list = approvalRecords;
    if (signingNo) list = list.filter((item) => item.signingNo.includes(signingNo));
    if (docName) list = list.filter((item) => item.docName.includes(docName));
    if (subject) list = list.filter((item) => item.subject.includes(subject));
    if (requestUnitCode) list = list.filter((item) => item.requestUnitCode.includes(requestUnitCode));
    if (processUnitCode) list = list.filter((item) => item.processUnitCode.includes(processUnitCode));
    if (company) list = list.filter((item) => item.company.includes(company));
    if (status) list = list.filter((item) => item.status === status);
    if (startDate) list = list.filter((item) => item.submitDate >= startDate);
    if (endDate) list = list.filter((item) => item.submitDate <= endDate);
    return list;
  }, [
    approvalRecords,
    signingNo,
    docName,
    subject,
    requestUnitCode,
    processUnitCode,
    company,
    status,
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
    setStatus("");
    setResults([]);
    setSearched(false);
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
              文件簽核專區
            </button>
            <span>/</span>
            <span>文件簽核進度查詢</span>
          </div>
          <h2 className="text-lg font-bold text-slate-800">文件簽核進度查詢</h2>
          <p className="mt-1 text-sm text-slate-500">可依簽核號、文件名稱、簽核狀態與日期區間查詢已進入簽核流程的文件</p>
        </div>
      </div>

      <div className="mb-5">
        <StatusRail status={results[0]?.status ?? "待主管簽核"} />
      </div>

      <div className="enterprise-panel mb-5 rounded-xl p-5">
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
            <Select value={status} onValueChange={(value) => setStatus(value as SigningStatus)}>
                <SelectTrigger className="h-11 rounded-lg border-slate-300 bg-slate-50 text-sm text-slate-700">
                <SelectValue placeholder="全部狀態" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={doReset}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              <RotateCcw size={14} />
              重設
            </button>
            <button
              type="button"
              onClick={doSearch}
              className="enterprise-query-button inline-flex items-center gap-1.5 rounded-lg px-5 py-2 text-sm font-semibold text-white transition"
            >
              <Search size={14} />
              查詢
            </button>
          </div>
        </div>
      </div>

      <div className="enterprise-panel rounded-xl p-5">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-teal-700" />
            <h3 className="text-sm font-semibold text-slate-800">查詢結果</h3>
          </div>
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
            {searched ? `${results.length} 筆` : "尚未查詢"}
          </span>
        </div>

        {searched ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="enterprise-table-head">
                <tr>
                  {["簽核號", "文件名稱", "申請人", "申請日期", "狀態", "當前處理者"].map((header) => (
                    <th key={header} className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-white">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {results.map((item) => (
                  <tr key={item.signingNo} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="whitespace-nowrap px-4 py-3 text-xs font-mono text-slate-500">{item.signingNo}</td>
                    <td className="px-4 py-3">
                      <div className="text-sm font-semibold text-slate-800">{item.docName}</div>
                      <div className="text-xs text-slate-400">{item.subject}</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600">
                      {item.requestor} / {item.requestorCode}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600">{item.submitDate}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm font-semibold text-slate-700">{getDocumentStatusLabel(item.status)}</td>
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
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-12 text-center text-sm text-slate-400">
            請先設定查詢條件後按下查詢
          </div>
        )}
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-teal-700 focus:bg-white";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="space-y-1.5">
      <span className="block text-sm font-semibold text-slate-600">{label}</span>
      {children}
    </label>
  );
}
