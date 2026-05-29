import { useState } from "react";
import { ChevronDown, CheckCircle2, XCircle, Archive, Info, AlertTriangle, Clock } from "lucide-react";
import { StatusRail } from "../ui/StatusRail";

interface DocMeta {
  category: string;
  uploadDate: string;
  department: string;
  version: string;
  uploader: string;
  status: string;
}

const REJECT_TYPES = [
  "格式不符規範",
  "內容有誤需修正",
  "簽核流程不完整",
  "附件資料不足",
  "分類設定錯誤",
  "其他原因",
];

interface Props {
  meta: DocMeta;
}

export function ActionPanel({ meta }: Props) {
  const [showReject, setShowReject] = useState(false);
  const [rejectType, setRejectType] = useState("");
  const [rejectReason, setRejectReason] = useState("");
  const [decision, setDecision] = useState<"approved" | "rejected" | null>(null);

  const reasonOk = rejectReason.length >= 10;
  const canSubmitReject = rejectType && reasonOk;

  if (decision === "approved") {
    return <DecisionResult type="approved" onReset={() => setDecision(null)} />;
  }
  if (decision === "rejected") {
    return <DecisionResult type="rejected" onReset={() => setDecision(null)} />;
  }

  return (
    <div className="flex flex-col h-full bg-white border-l border-gray-200">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100 flex-shrink-0">
        <h2 className="text-gray-800" style={{ fontSize: "14px", fontWeight: 700 }}>審核決策面板</h2>
        <p className="text-gray-400 mt-0.5" style={{ fontSize: "11px" }}>文件簽核模組</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Metadata section */}
        <div className="px-5 py-4 border-b border-gray-100">
          <SectionTitle icon={<Info size={13} />} label="文件資訊" />
          <div className="space-y-2.5 mt-3">
            <MetaRow label="類別" value={meta.category} />
            <MetaRow label="版本" value={<span className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded">{meta.version}</span>} />
            <MetaRow label="上傳者" value={
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0" style={{ fontSize: "9px", fontWeight: 700, backgroundColor: "#0D9488" }}>
                  {meta.uploader[0]}
                </div>
                <span>{meta.uploader}</span>
              </div>
            } />
            <MetaRow label="上傳日期" value={meta.uploadDate} />
            <MetaRow label="所屬部門" value={meta.department} />
            <MetaRow label="目前狀態" value={
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700" style={{ fontSize: "11px", fontWeight: 600 }}>
                <Clock size={10} />
                {meta.status}
              </span>
            } />
          </div>
        </div>

        <div className="px-5 py-4 border-b border-gray-100">
          <StatusRail status={meta.status} compact />
        </div>

        {/* Rejection form — conditionally shown */}
        {showReject && (
          <div className="px-5 py-4 border-b border-amber-100" style={{ backgroundColor: "#FFFBEB" }}>
            <SectionTitle icon={<AlertTriangle size={13} className="text-amber-500" />} label="退回設定" color="text-amber-700" />
            <div className="mt-3 space-y-3">
              {/* Reject type */}
              <div>
                <label className="block text-xs text-gray-600 mb-1.5" style={{ fontWeight: 600 }}>
                  退回類型 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={rejectType}
                    onChange={(e) => setRejectType(e.target.value)}
                    className="w-full appearance-none px-3 py-2 pr-8 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:border-amber-400 transition-all"
                    style={{ fontSize: "12px" }}
                  >
                    <option value="">請選擇退回類型</option>
                    {REJECT_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Reject reason */}
              <div>
                <label className="block text-xs text-gray-600 mb-1.5" style={{ fontWeight: 600 }}>
                  退回原因說明（最少10字）<span className="text-red-500"> *</span>
                </label>
                <textarea
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  rows={4}
                  placeholder="請詳細說明退回原因，以便提交者了解需修改的內容..."
                  className="w-full px-3 py-2.5 rounded-lg border text-gray-700 placeholder:text-gray-400 focus:outline-none transition-all resize-none"
                  style={{
                    fontSize: "12px",
                    borderColor: rejectReason.length > 0 && !reasonOk ? "#EF4444" : "#E5E7EB",
                    backgroundColor: "#FFFFFF",
                  }}
                />
                <div className="flex items-center justify-between mt-1">
                  {rejectReason.length > 0 && !reasonOk ? (
                    <p className="text-red-500" style={{ fontSize: "10px" }}>
                      至少需輸入 10 個字（目前 {rejectReason.length} 字）
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-gray-400 ml-auto" style={{ fontSize: "10px" }}>
                    {rejectReason.length} 字
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="px-5 py-4 border-t border-gray-100 flex-shrink-0 space-y-2.5">
        {/* Approve */}
        <button
          onClick={() => setDecision("approved")}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-white transition-all hover:opacity-90 active:scale-95"
          style={{ backgroundColor: "#0D9488", fontWeight: 600, fontSize: "13px" }}
        >
          <CheckCircle2 size={16} strokeWidth={2.5} />
          核准 / 上架
        </button>

        {/* Reject toggle + submit */}
        {!showReject ? (
          <button
            onClick={() => setShowReject(true)}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-red-400 text-red-500 transition-all hover:bg-red-50 active:scale-95"
            style={{ fontWeight: 600, fontSize: "13px" }}
          >
            <XCircle size={16} strokeWidth={2.5} />
            退回
          </button>
        ) : (
          <div className="space-y-2">
            <button
              onClick={() => canSubmitReject && setDecision("rejected")}
              disabled={!canSubmitReject}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 text-red-500 transition-all"
              style={{
                fontWeight: 600,
                fontSize: "13px",
                borderColor: canSubmitReject ? "#EF4444" : "#FCA5A5",
                color: canSubmitReject ? "#EF4444" : "#FCA5A5",
                backgroundColor: canSubmitReject ? "#FEF2F2" : "transparent",
                cursor: canSubmitReject ? "pointer" : "not-allowed",
              }}
            >
              <XCircle size={16} strokeWidth={2.5} />
              確認退回
            </button>
            <button
              onClick={() => { setShowReject(false); setRejectType(""); setRejectReason(""); }}
              className="w-full py-1.5 text-gray-400 hover:text-gray-600 transition-colors"
              style={{ fontSize: "11px" }}
            >
              取消退回操作
            </button>
          </div>
        )}

        {/* Scrap/Transfer */}
        <button
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 text-gray-500 transition-all hover:bg-gray-50 active:scale-95"
          style={{ fontWeight: 500, fontSize: "13px" }}
        >
          <Archive size={15} strokeWidth={2} />
          作廢 / 移轉
        </button>
      </div>
    </div>
  );
}

function SectionTitle({
  icon,
  label,
  color = "text-gray-600",
}: {
  icon: React.ReactNode;
  label: string;
  color?: string;
}) {
  return (
    <div className={`flex items-center gap-1.5 ${color}`}>
      {icon}
      <span style={{ fontSize: "12px", fontWeight: 700 }}>{label}</span>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-2">
      <span className="text-gray-400 flex-shrink-0" style={{ fontSize: "11px" }}>{label}</span>
      <span className="text-gray-700 text-right" style={{ fontSize: "11px", fontWeight: 500 }}>
        {value}
      </span>
    </div>
  );
}

function DecisionResult({ type, onReset }: { type: "approved" | "rejected"; onReset: () => void }) {
  const isApproved = type === "approved";
  return (
    <div className="flex flex-col h-full bg-white border-l border-gray-200 items-center justify-center px-6 text-center">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: isApproved ? "#F0FDFA" : "#FEF2F2" }}
      >
        {isApproved ? (
          <CheckCircle2 size={32} style={{ color: "#0D9488" }} strokeWidth={1.5} />
        ) : (
          <XCircle size={32} style={{ color: "#EF4444" }} strokeWidth={1.5} />
        )}
      </div>
      <h3 className="text-gray-800 mb-2" style={{ fontSize: "16px", fontWeight: 700 }}>
        {isApproved ? "文件已核准" : "文件已退回"}
      </h3>
      <p className="text-gray-500 text-sm mb-6">
        {isApproved
          ? "此文件已成功核准並進入上架流程。"
          : "退回通知已發送給文件提交者，請等候修改。"}
      </p>
      <button
        onClick={onReset}
        className="px-5 py-2 rounded-lg text-white text-sm transition-all hover:opacity-90"
        style={{ backgroundColor: "#0D9488", fontWeight: 600 }}
      >
        返回審核列表
      </button>
    </div>
  );
}
