import { useState } from "react";
import { Download, History, FileText, ChevronLeft, ChevronRight, Plus, ChevronsLeft, ChevronsRight } from "lucide-react";

export type DocStatus = "草稿" | "待主管審核" | "待文管審核" | "已上架" | "退回" | "下架" | "作廢";
export type DocLevel = "一階" | "二階" | "三階" | "四階" | "五階" | "六階";

export interface DocRecord {
  id: number;
  docNo: string;
  signingNo: string;
  name: string;
  level: DocLevel;
  version: string;
  status: DocStatus;
  uploaderCode: string;
  uploaderName: string;
  uploadDate: string;
  department: string;
  tags: string[];
}

const LEVEL_CONFIG: Record<DocLevel, { short: string; desc: string; bg: string; text: string }> = {
  一階: { short: "一階", desc: "政策、手冊",         bg: "#EDE9FE", text: "#7C3AED" },
  二階: { short: "二階", desc: "管理辦法、程序書",   bg: "#DBEAFE", text: "#1D4ED8" },
  三階: { short: "三階", desc: "規範、說明書、須知、標準", bg: "#CCFBF1", text: "#0F766E" },
  四階: { short: "四階", desc: "表、單",             bg: "#DCFCE7", text: "#15803D" },
  五階: { short: "五階", desc: "教育訓練",           bg: "#FEF3C7", text: "#B45309" },
  六階: { short: "六階", desc: "外來文件",           bg: "#F3F4F6", text: "#4B5563" },
};

const STATUS_CONFIG: Record<DocStatus, { bg: string; text: string; dot: string }> = {
  草稿:     { bg: "bg-gray-100",    text: "text-gray-600",   dot: "bg-gray-400" },
  待主管審核: { bg: "bg-amber-50",  text: "text-amber-700",  dot: "bg-amber-400" },
  待文管審核: { bg: "bg-blue-50",   text: "text-blue-700",   dot: "bg-blue-500" },
  已上架:   { bg: "bg-emerald-50",  text: "text-emerald-700",dot: "bg-emerald-500" },
  退回:     { bg: "bg-red-50",      text: "text-red-700",    dot: "bg-red-500" },
  下架:     { bg: "bg-orange-50",   text: "text-orange-700", dot: "bg-orange-500" },
  作廢:     { bg: "bg-gray-100",    text: "text-gray-400",   dot: "bg-gray-300" },
};

export const SAMPLE_DOCS: DocRecord[] = [
  { id:1,  docNo:"DOC-2024-001", signingNo:"SGN-2024-0089", name:"資訊安全管理政策", level:"一階", version:"v3.0", status:"已上架",   uploaderCode:"250341", uploaderName:"王大明", uploadDate:"2024-03-15", department:"資訊安全處", tags:["資安","政策"] },
  { id:2,  docNo:"DOC-2024-002", signingNo:"SGN-2024-0091", name:"軟體開發管理辦法", level:"二階", version:"v2.1", status:"待主管審核", uploaderCode:"250342", uploaderName:"李小華", uploadDate:"2024-04-02", department:"軟體開發處", tags:["開發","程序"] },
  { id:3,  docNo:"DOC-2024-003", signingNo:"SGN-2024-0093", name:"人力資源管理程序書", level:"二階", version:"v1.5", status:"已上架",   uploaderCode:"250343", uploaderName:"陳美玲", uploadDate:"2024-02-28", department:"人力資源處", tags:["人資"] },
  { id:4,  docNo:"DOC-2024-004", signingNo:"",              name:"行銷企劃須知",      level:"三階", version:"v0.9", status:"草稿",     uploaderCode:"250344", uploaderName:"張志遠", uploadDate:"2024-04-10", department:"行銷策略處", tags:["行銷"] },
  { id:5,  docNo:"DOC-2024-005", signingNo:"SGN-2024-0088", name:"供應商評鑑標準",   level:"三階", version:"v4.0", status:"已上架",   uploaderCode:"250345", uploaderName:"林建宏", uploadDate:"2024-01-20", department:"財務法務處", tags:["採購"] },
  { id:6,  docNo:"DOC-2024-006", signingNo:"SGN-2024-0092", name:"系統架構說明書",   level:"三階", version:"v2.3", status:"退回",     uploaderCode:"250346", uploaderName:"吳俊傑", uploadDate:"2024-03-28", department:"軟體開發處", tags:["系統"] },
  { id:7,  docNo:"DOC-2024-007", signingNo:"SGN-2024-0094", name:"員工教育訓練計畫", level:"五階", version:"v1.5", status:"待文管審核", uploaderCode:"250347", uploaderName:"趙雅婷", uploadDate:"2024-04-05", department:"人力資源處", tags:["訓練"] },
  { id:8,  docNo:"DOC-2024-008", signingNo:"SGN-2024-0085", name:"客戶服務標準作業",  level:"三階", version:"v3.0", status:"已上架",   uploaderCode:"250348", uploaderName:"黃淑芬", uploadDate:"2024-02-14", department:"業務拓展處", tags:["服務"] },
  { id:9,  docNo:"DOC-2024-009", signingNo:"",              name:"年度預算規劃表",   level:"四階", version:"v1.1", status:"草稿",     uploaderCode:"250349", uploaderName:"劉志豪", uploadDate:"2024-04-12", department:"財務法務處", tags:["財務","表單"] },
  { id:10, docNo:"DOC-2024-010", signingNo:"SGN-2024-0076", name:"外部供應商合約",   level:"六階", version:"v5.0", status:"下架",     uploaderCode:"250350", uploaderName:"蔡宛芸", uploadDate:"2024-01-08", department:"財務法務處", tags:["合約","外來"] },
  { id:11, docNo:"DOC-2024-011", signingNo:"SGN-2024-0080", name:"專案管理規範",     level:"三階", version:"v2.0", status:"已上架",   uploaderCode:"250351", uploaderName:"許文彬", uploadDate:"2024-03-20", department:"軟體開發處", tags:["專案"] },
  { id:12, docNo:"DOC-2024-012", signingNo:"SGN-2024-0079", name:"差旅費申請單",     level:"四階", version:"v1.3", status:"作廢",     uploaderCode:"250352", uploaderName:"鄭惠君", uploadDate:"2024-04-01", department:"行政總務處", tags:["表單","財務"] },
];

const COLUMNS = ["文件編號", "文件名稱", "文件階級", "版本", "狀態", "上傳者", "上傳日期", "操作"];

interface Props {
  onAdd: () => void;
  onApprove: (doc: DocRecord) => void;
  onReEdit: (doc: DocRecord) => void;
  filterLevel?: string;
}

export function DocumentTable({ onAdd, onApprove, onReEdit, filterLevel }: Props) {
  const [page, setPage] = useState(1);
  const [pageInput, setPageInput] = useState("1");
  const [pageSize, setPageSize] = useState(10);
  const [pageSizeInput, setPageSizeInput] = useState("10");

  const filtered = filterLevel
    ? SAMPLE_DOCS.filter((d) => d.level === filterLevel)
    : SAMPLE_DOCS;

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);
  const start = (safePage - 1) * pageSize + 1;
  const end = Math.min(safePage * pageSize, filtered.length);

  function gotoPage(p: number) {
    const clamped = Math.max(1, Math.min(totalPages, p));
    setPage(clamped);
    setPageInput(String(clamped));
  }

  function commitPageInput() {
    const n = parseInt(pageInput, 10);
    if (!isNaN(n)) gotoPage(n);
    else setPageInput(String(safePage));
  }

  function commitPageSize() {
    const n = parseInt(pageSizeInput, 10);
    if (!isNaN(n) && n > 0) {
      setPageSize(Math.min(100, Math.max(1, n)));
      setPage(1);
      setPageInput("1");
    } else {
      setPageSizeInput(String(pageSize));
    }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50/60">
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-sm">文件清單</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 font-medium border border-teal-200">
            共 {filtered.length} 筆
          </span>
        </div>
        <button
          onClick={onAdd}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90 active:scale-95"
          style={{ backgroundColor: "#0D9488" }}
        >
          <Plus size={15} strokeWidth={2.5} />
          新增文件
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full" style={{ fontSize: "13px" }}>
          <thead>
            <tr style={{ backgroundColor: "#0D9488" }}>
              {COLUMNS.map((col) => (
                <th key={col} className="text-left px-4 py-2.5 text-white font-semibold whitespace-nowrap" style={{ fontSize: "12px" }}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.map((doc, idx) => {
              const sc = STATUS_CONFIG[doc.status];
              const lc = LEVEL_CONFIG[doc.level];
              const needsAction = doc.status === "待主管審核" || doc.status === "待文管審核";
              const isReturned = doc.status === "退回";
              return (
                <tr
                  key={doc.id}
                  className="border-b border-gray-50 hover:bg-teal-50/20 transition-colors"
                  style={{ backgroundColor: idx % 2 === 1 ? "#FAFAFA" : "#FFFFFF" }}
                >
                  {/* 文件編號 */}
                  <td className="px-4 py-2.5 whitespace-nowrap">
                    <span className="font-mono text-gray-500" style={{ fontSize: "11px" }}>{doc.docNo}</span>
                  </td>
                  {/* 文件名稱 */}
                  <td className="px-4 py-2.5">
                    <div className="flex flex-col gap-0.5">
                      <span
                        className="font-medium text-gray-800 hover:text-teal-700 cursor-pointer transition-colors"
                        style={{ fontSize: "13px" }}
                      >
                        {doc.name}
                      </span>
                      {doc.tags.length > 0 && (
                        <div className="flex gap-1">
                          {doc.tags.map((t) => (
                            <span key={t} className="text-gray-400" style={{ fontSize: "10px" }}>#{t}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </td>
                  {/* 文件階級 */}
                  <td className="px-4 py-2.5 whitespace-nowrap">
                    <div className="flex flex-col gap-0.5">
                      <span
                        className="inline-flex items-center px-2 py-0.5 rounded font-semibold"
                        style={{ fontSize: "11px", backgroundColor: lc.bg, color: lc.text }}
                      >
                        {lc.short}
                      </span>
                      <span className="text-gray-400" style={{ fontSize: "10px" }}>{lc.desc}</span>
                    </div>
                  </td>
                  {/* 版本 */}
                  <td className="px-4 py-2.5">
                    <span className="font-mono bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded" style={{ fontSize: "11px" }}>
                      {doc.version}
                    </span>
                  </td>
                  {/* 狀態 */}
                  <td className="px-4 py-2.5 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-medium ${sc.bg} ${sc.text}`} style={{ fontSize: "11px" }}>
                      <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                      {doc.status}
                    </span>
                  </td>
                  {/* 上傳者 */}
                  <td className="px-4 py-2.5 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white flex-shrink-0"
                        style={{ fontSize: "10px", fontWeight: 700, backgroundColor: "#0D9488" }}
                      >
                        {doc.uploaderName[0]}
                      </div>
                      <div>
                        <div className="text-gray-700" style={{ fontSize: "12px", fontWeight: 500 }}>{doc.uploaderName}</div>
                        <div className="text-gray-400" style={{ fontSize: "10px" }}>{doc.uploaderCode}</div>
                      </div>
                    </div>
                  </td>
                  {/* 上傳日期 */}
                  <td className="px-4 py-2.5 text-gray-500 whitespace-nowrap" style={{ fontSize: "12px" }}>
                    {doc.uploadDate}
                  </td>
                  {/* 操作 */}
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-1">
                      <TinyBtn icon={<Download size={12} />} label="下載" />
                      <TinyBtn icon={<History size={12} />} label="版本" />
                      {needsAction && (
                        <TinyBtn
                          icon={<FileText size={12} />}
                          label="審核"
                          onClick={() => onApprove(doc)}
                          primary
                        />
                      )}
                      {isReturned && (
                        <TinyBtn
                          icon={<FileText size={12} />}
                          label="重新編輯"
                          onClick={() => onReEdit(doc)}
                          warn
                        />
                      )}
                      {!needsAction && !isReturned && (
                        <TinyBtn icon={<FileText size={12} />} label="簽核紀錄" />
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
            {paginated.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-12 text-gray-400 text-sm">
                  查無符合條件的文件
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50/40">
        {/* Page size */}
        <div className="flex items-center gap-2 text-gray-500" style={{ fontSize: "12px" }}>
          <span>每頁顯示</span>
          <input
            type="text"
            value={pageSizeInput}
            onChange={(e) => setPageSizeInput(e.target.value)}
            onBlur={commitPageSize}
            onKeyDown={(e) => e.key === "Enter" && commitPageSize()}
            className="w-10 text-center border border-gray-300 rounded px-1 py-0.5 focus:outline-none focus:border-teal-500 text-gray-700"
            style={{ fontSize: "12px" }}
          />
          <span>筆</span>
        </div>

        {/* Record info + page nav */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500" style={{ fontSize: "12px" }}>
            第 <span className="font-semibold text-gray-700">{start}</span>–
            <span className="font-semibold text-gray-700">{end}</span> 筆，共{" "}
            <span className="font-semibold text-gray-700">{filtered.length}</span> 筆
          </span>
          <div className="flex items-center gap-1 ml-2">
            <PageBtn onClick={() => gotoPage(1)} disabled={safePage === 1} icon={<ChevronsLeft size={13} />} />
            <PageBtn onClick={() => gotoPage(safePage - 1)} disabled={safePage === 1} icon={<ChevronLeft size={13} />} />
            <div className="flex items-center gap-1 text-gray-500" style={{ fontSize: "12px" }}>
              <span>第</span>
              <input
                type="text"
                value={pageInput}
                onChange={(e) => setPageInput(e.target.value)}
                onBlur={commitPageInput}
                onKeyDown={(e) => e.key === "Enter" && commitPageInput()}
                className="w-10 text-center border border-gray-300 rounded px-1 py-0.5 focus:outline-none focus:border-teal-500 text-gray-700"
                style={{ fontSize: "12px" }}
              />
              <span>/ {totalPages} 頁</span>
            </div>
            <PageBtn onClick={() => gotoPage(safePage + 1)} disabled={safePage === totalPages} icon={<ChevronRight size={13} />} />
            <PageBtn onClick={() => gotoPage(totalPages)} disabled={safePage === totalPages} icon={<ChevronsRight size={13} />} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TinyBtn({ icon, label, onClick, primary, warn }: {
  icon: React.ReactNode; label: string; onClick?: () => void; primary?: boolean; warn?: boolean;
}) {
  const base = "flex items-center gap-0.5 px-1.5 py-1 rounded border transition-all whitespace-nowrap";
  const style = primary
    ? { borderColor: "#0D9488", color: "#0D9488", backgroundColor: "#F0FDFA" }
    : warn
    ? { borderColor: "#F97316", color: "#EA580C", backgroundColor: "#FFF7ED" }
    : { borderColor: "#E5E7EB", color: "#6B7280" };
  return (
    <button onClick={onClick} className={base} style={{ ...style, fontSize: "11px" }}>
      {icon}<span className="hidden xl:inline">{label}</span>
    </button>
  );
}

function PageBtn({ onClick, disabled, icon }: { onClick: () => void; disabled: boolean; icon: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-6 h-6 rounded flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
    >
      {icon}
    </button>
  );
}
