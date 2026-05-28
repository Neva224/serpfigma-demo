import { useState, type ReactNode } from "react";
import { CheckCircle2, ChevronDown, ChevronRight, MoveRight, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";
import { type DocRecord } from "../DocumentTable";
import { LEVEL_META } from "../document-management/mockData";

type RejectMode = "none" | "return" | "transfer";

interface Props {
  doc: DocRecord;
  role: "manager" | "docadmin";
  onClose: () => void;
  onApprove: () => void;
  onReject: (reason: string) => void;
}

const REJECT_TYPES = ["格式不符", "內容需修正", "簽核流程不完整", "附件不足", "分類錯誤", "其他原因"];

export function ApprovalDrawer({ doc, role, onClose, onApprove, onReject }: Props) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(["basic"]));
  const [rejectMode, setRejectMode] = useState<RejectMode>("none");
  const [rejectType, setRejectType] = useState("");
  const [rejectReason, setRejectReason] = useState("");
  const [zoom, setZoom] = useState(100);
  const [confirmed, setConfirmed] = useState(false);
  const [completedAction, setCompletedAction] = useState<"approve" | "reject" | null>(null);

  function toggle(id: string) {
    setExpanded((current) => {
      const next = new Set(current);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const canReject = rejectType.length > 0 && rejectReason.trim().length >= 10;
  const canTransfer = rejectReason.trim().length >= 10;

  if (confirmed) {
    return (
      <DrawerShell onClose={onClose}>
        <div className="flex flex-1 items-center justify-center px-8 text-center">
          <div className="space-y-4">
            <div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
              style={{ backgroundColor: "#F0FDFA" }}
            >
              <CheckCircle2 size={36} style={{ color: "#0D9488" }} strokeWidth={1.5} />
            </div>
            <h3 className="text-gray-800" style={{ fontSize: "18px", fontWeight: 700 }}>
              {completedAction === "reject"
                ? role === "manager"
                  ? "主管退回已完成"
                  : "文管退回已完成"
                : role === "manager"
                  ? "主管簽核已完成"
                  : "文管審核已完成"}
            </h3>
            <p className="text-sm text-gray-500">
              此文件的簽核狀態已更新，關閉後可繼續下一步處理。
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 rounded-lg px-6 py-2 font-medium text-white"
              style={{ backgroundColor: "#0D9488" }}
            >
              關閉
            </button>
          </div>
        </div>
      </DrawerShell>
    );
  }

  return (
    <DrawerShell onClose={onClose}>
      <div
        className="flex items-center justify-between border-b border-gray-200 px-5 py-3"
        style={{ backgroundColor: "#0D9488" }}
      >
        <div>
          <h2 className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
            {role === "manager" ? "主管簽核畫面" : "文管審核畫面"}
          </h2>
          <p className="text-teal-100" style={{ fontSize: "11px" }}>
            {doc.signingNo || "SGN-XXXX"} / {doc.name}
          </p>
        </div>
        <button type="button" onClick={onClose} className="text-white/75 transition hover:text-white">
          <X size={18} />
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-[340px] shrink-0 overflow-y-auto border-r border-gray-200 bg-white">
          <AccordionSection id="basic" label="文件基本資料" expanded={expanded} onToggle={toggle}>
            <InfoRow label="文件名稱" value={doc.name} />
            <InfoRow label="文件編號" value={doc.docNo} />
            <InfoRow label="版本" value={doc.version} />
            <InfoRow label="上傳者" value={`${doc.uploaderName} (${doc.uploaderCode})`} />
            <InfoRow label="上傳日期" value={doc.uploadDate} />
            <InfoRow label="部門" value={doc.department} />
          </AccordionSection>

          <AccordionSection id="level" label="文件階級" expanded={expanded} onToggle={toggle}>
            <InfoRow label="階級" value={LEVEL_META[doc.level].label} />
            <InfoRow label="說明" value={LEVEL_META[doc.level].description} />
          </AccordionSection>

          <AccordionSection id="reject" label="退回設定" expanded={expanded} onToggle={toggle}>
            <div className="space-y-3 p-1">
              <div className="flex gap-1">
                <ModeBtn active={rejectMode === "return"} onClick={() => setRejectMode("return")} label="退回" />
                <ModeBtn active={rejectMode === "transfer"} onClick={() => setRejectMode("transfer")} label="移轉" />
              </div>

              {rejectMode !== "none" && (
                <>
                  <div>
                    <label className="mb-1 block text-amber-700" style={{ fontSize: "11px", fontWeight: 600 }}>
                      退回類別 <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={rejectType}
                      onChange={(e) => setRejectType(e.target.value)}
                      className="w-full rounded-lg border border-amber-200 bg-white px-3 py-2 text-gray-700 focus:border-amber-400 focus:outline-none"
                      style={{ fontSize: "12px" }}
                    >
                      <option value="">請選擇退回類別</option>
                      {REJECT_TYPES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-amber-700" style={{ fontSize: "11px", fontWeight: 600 }}>
                      退回原因 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={rejectReason}
                      onChange={(e) => setRejectReason(e.target.value)}
                      rows={3}
                      placeholder="請詳細說明退回原因"
                      className="w-full resize-none rounded-lg border border-amber-200 px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:border-amber-400 focus:outline-none"
                      style={{ fontSize: "12px" }}
                    />
                    <p className="mt-0.5 text-right text-[10px] text-gray-400">{rejectReason.length} 字</p>
                  </div>
                </>
              )}
            </div>
          </AccordionSection>
        </div>

        <div className="flex flex-1 flex-col bg-slate-800">
          <div className="flex items-center justify-between border-b border-slate-600 bg-slate-900 px-4 py-2">
            <p className="truncate text-xs text-slate-300">{doc.name} 預覽</p>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setZoom((value) => Math.max(60, value - 10))} className="text-slate-400 transition hover:text-white">
                <ZoomOut size={14} />
              </button>
              <span className="w-10 text-center text-[11px] text-slate-400">{zoom}%</span>
              <button type="button" onClick={() => setZoom((value) => Math.min(140, value + 10))} className="text-slate-400 transition hover:text-white">
                <ZoomIn size={14} />
              </button>
            </div>
          </div>

          <div className="flex flex-1 items-start justify-center overflow-auto px-4 py-6">
            <div
              className="space-y-4 rounded bg-white p-8 shadow-2xl"
              style={{ width: `${zoom * 4}px`, minWidth: "320px", maxWidth: "560px" }}
            >
              <div className="h-4 w-48 rounded bg-slate-800" />
              <div className="h-1 w-full rounded" style={{ backgroundColor: "#0D9488" }} />
              {[100, 100, 80, 100, 75, 100, 85].map((w, index) => (
                <div key={index} className="h-2 rounded bg-slate-200" style={{ width: `${w}%` }} />
              ))}
              <div className="grid grid-cols-3 gap-2 overflow-hidden rounded border border-slate-200">
                {["欄位", "內容", "備註"].map((label) => (
                  <div key={label} className="bg-teal-600 px-2 py-1.5 text-xs font-semibold text-white">
                    {label}
                  </div>
                ))}
                {[...Array(9)].map((_, index) => (
                  <div key={index} className={`px-2 py-2 ${Math.floor(index / 3) % 2 ? "bg-slate-50" : "bg-white"}`}>
                    <div className="h-1.5 rounded bg-slate-200" style={{ width: `${40 + (index % 3) * 20}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-5 py-3">
        <button
          type="button"
          onClick={() => setRejectMode((current) => (current === "none" ? "return" : "none"))}
          className="flex items-center gap-2 rounded-lg border-2 px-5 py-2 transition-all"
          style={{
            borderColor: rejectMode !== "none" ? "#EF4444" : "#E5E7EB",
            color: rejectMode !== "none" ? "#EF4444" : "#6B7280",
            backgroundColor: rejectMode !== "none" ? "#FEF2F2" : "transparent",
            fontWeight: 600,
            fontSize: "13px",
          }}
        >
          <RotateCcw size={15} />
          {rejectMode !== "none" ? "取消退回" : "退回"}
        </button>

        <div className="flex items-center gap-3">
          {rejectMode !== "none" && (
            <button
              type="button"
              disabled={rejectMode === "return" ? !canReject : !canTransfer}
              onClick={() => {
                onReject(rejectReason);
                setCompletedAction("reject");
                setConfirmed(true);
              }}
              className="flex items-center gap-2 rounded-lg border-2 border-red-500 px-5 py-2 font-semibold text-red-600 transition-all hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
              style={{ fontSize: "13px" }}
            >
              {rejectMode === "transfer" ? <MoveRight size={15} /> : <RotateCcw size={15} />}
              {rejectMode === "transfer" ? "送交文管審" : "確認退回"}
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              onApprove();
              setCompletedAction("approve");
              setConfirmed(true);
            }}
            className="flex items-center gap-2 rounded-lg px-6 py-2 font-semibold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#0D9488", fontSize: "13px" }}
          >
            <CheckCircle2 size={15} />
            {role === "manager" ? "同意 - 送往文管" : "核准上架"}
          </button>
        </div>
      </div>
    </DrawerShell>
  );
}

function DrawerShell({ children, onClose }: { children: ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className="relative ml-auto flex h-screen flex-col bg-white shadow-2xl"
        style={{ width: "min(95vw, 1100px)" }}
      >
        {children}
      </div>
    </div>
  );
}

function AccordionSection({
  id,
  label,
  expanded,
  onToggle,
  children,
}: {
  id: string;
  label: string;
  expanded: Set<string>;
  onToggle: (id: string) => void;
  children: ReactNode;
}) {
  const isOpen = expanded.has(id);
  return (
    <div className="border-b border-gray-100">
      <button
        type="button"
        onClick={() => onToggle(id)}
        className="flex w-full items-center justify-between px-4 py-3 transition-colors hover:bg-gray-50"
      >
        <span className="text-gray-700" style={{ fontSize: "12px", fontWeight: 600 }}>
          {label}
        </span>
        {isOpen ? <ChevronDown size={14} className="text-gray-400" /> : <ChevronRight size={14} className="text-gray-400" />}
      </button>
      {isOpen && <div className="space-y-1.5 px-4 pb-3">{children}</div>}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="flex-shrink-0 text-gray-400" style={{ fontSize: "11px" }}>
        {label}
      </span>
      <span className="text-right text-gray-700" style={{ fontSize: "11px", fontWeight: 500 }}>
        {value}
      </span>
    </div>
  );
}

function ModeBtn({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded px-2 py-0.5 text-xs font-medium transition-all"
      style={{
        backgroundColor: active ? "#0D9488" : "#E5E7EB",
        color: active ? "#ffffff" : "#6B7280",
      }}
    >
      {label}
    </button>
  );
}
