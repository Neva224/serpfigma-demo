import { useState } from "react";
import { X, ChevronDown, ChevronRight, CheckCircle2, RotateCcw, MoveRight, ZoomIn, ZoomOut } from "lucide-react";
import { DocRecord } from "../DocumentTable";

type RejectMode = "none" | "return" | "transfer";

interface Props {
  doc: DocRecord;
  role: "manager" | "docadmin";
  onClose: () => void;
  onApprove: () => void;
  onReject: () => void;
}

const REJECT_TYPES = ["格式不符規範", "內容有誤需修正", "簽核流程不完整", "附件資料不足", "分類設定錯誤", "其他原因"];
const L1 = ["", "行政管理", "財務會計", "技術研發", "人力資源", "業務行銷"];
const L2: Record<string, string[]> = {
  行政管理: ["", "文書管理", "庶務管理", "資產管理"],
  技術研發: ["", "系統架構", "產品開發", "資安管理"],
  人力資源: ["", "招募甄選", "教育訓練", "薪酬福利"],
};

export function ApprovalDrawer({ doc, role, onClose, onApprove, onReject }: Props) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(["basic"]));
  const [rejectMode, setRejectMode] = useState<RejectMode>("none");
  const [rejectType, setRejectType] = useState("");
  const [rejectReason, setRejectReason] = useState("");
  const [transferL1, setTransferL1] = useState("");
  const [zoom, setZoom] = useState(100);
  const [confirmed, setConfirmed] = useState(false);

  function toggle(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const canReject = rejectType && rejectReason.length >= 10;
  const canTransfer = transferL1 !== "";

  if (confirmed) {
    return (
      <DrawerShell onClose={onClose}>
        <div className="flex-1 flex items-center justify-center flex-col gap-4 text-center px-8">
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F0FDFA" }}>
            <CheckCircle2 size={36} style={{ color: "#0D9488" }} strokeWidth={1.5} />
          </div>
          <h3 className="text-gray-800" style={{ fontSize: "18px", fontWeight: 700 }}>
            {role === "manager" ? "已核准，已通知文管審核" : "文件已核准上架"}
          </h3>
          <p className="text-gray-500 text-sm">SERP Q 系統已自動發送通知給下一關審核人員。</p>
          <button onClick={onClose} className="mt-2 px-6 py-2 rounded-lg text-white font-medium" style={{ backgroundColor: "#0D9488" }}>
            返回列表
          </button>
        </div>
      </DrawerShell>
    );
  }

  return (
    <DrawerShell onClose={onClose}>
      {/* Drawer header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 flex-shrink-0" style={{ backgroundColor: "#0D9488" }}>
        <div>
          <h2 className="text-white font-bold" style={{ fontSize: "14px" }}>
            {role === "manager" ? "主管簽核畫面" : "文管審核畫面"}
          </h2>
          <p className="text-teal-100" style={{ fontSize: "11px" }}>
            {doc.signingNo || "SGN-2024-XXXX"} · {doc.name}
          </p>
        </div>
        <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
          <X size={18} />
        </button>
      </div>

      {/* Body: left accordion + right preview */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: accordion sections */}
        <div className="overflow-y-auto border-r border-gray-200 bg-white" style={{ width: "340px", flexShrink: 0 }}>
          {/* Sections */}
          <AccordionSection id="basic" label="文件基本資料預覽" expanded={expanded} onToggle={toggle}>
            <InfoRow label="文件名稱" value={doc.name} />
            <InfoRow label="文件編號" value={doc.docNo} />
            <InfoRow label="版本" value={doc.version} />
            <InfoRow label="上傳者" value={`${doc.uploaderName} (${doc.uploaderCode})`} />
            <InfoRow label="上傳日期" value={doc.uploadDate} />
            <InfoRow label="歸屬部門" value={doc.department} />
          </AccordionSection>

          <AccordionSection id="files" label="檔案預覽" expanded={expanded} onToggle={toggle}>
            <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50">
              <div className="w-8 h-8 rounded flex items-center justify-center bg-red-100 text-red-600 font-bold" style={{ fontSize: "10px" }}>PDF</div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-700 truncate" style={{ fontSize: "12px", fontWeight: 500 }}>{doc.name}.pdf</p>
                <p className="text-gray-400" style={{ fontSize: "10px" }}>3.2 MB · 已上傳</p>
              </div>
            </div>
          </AccordionSection>

          <AccordionSection id="tree" label="文件知識樹分層預覽" expanded={expanded} onToggle={toggle}>
            {["第一層", "第二層", "第三層", "第四層"].map((l, i) => (
              <InfoRow key={l} label={l} value={["技術研發", "系統架構", "架構設計", "v3.0"][i]} />
            ))}
          </AccordionSection>

          <AccordionSection id="dept" label="文件所屬部門預覽" expanded={expanded} onToggle={toggle}>
            {["群", "處", "部門", "組別"].map((l, i) => (
              <InfoRow key={l} label={l} value={["技術事業群", "軟體開發處", "前端開發部", "UI/UX組"][i]} />
            ))}
          </AccordionSection>

          <AccordionSection id="level" label="文件階層預覽" expanded={expanded} onToggle={toggle}>
            <InfoRow label="文件階級" value={doc.level} />
            <InfoRow label="分類說明" value={{ 一階: "政策、手冊", 二階: "管理辦法、程序書", 三階: "規範、說明書、須知、標準", 四階: "表、單", 五階: "教育訓練", 六階: "外來文件" }[doc.level] ?? ""} />
          </AccordionSection>

          {/* Rejection form (conditional) */}
          {rejectMode !== "none" && (
            <div className="border-t-2 border-amber-200 bg-amber-50 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-amber-700 font-semibold" style={{ fontSize: "13px" }}>
                  {rejectMode === "transfer" ? "移轉單位設定" : "退回原因填寫"}
                </p>
                <div className="flex gap-1">
                  <ModeBtn active={rejectMode === "return"} onClick={() => setRejectMode("return")} label="退回" />
                  <ModeBtn active={rejectMode === "transfer"} onClick={() => setRejectMode("transfer")} label="移轉" />
                </div>
              </div>

              {rejectMode === "return" && (
                <>
                  <div>
                    <label className="block text-amber-700 mb-1" style={{ fontSize: "11px", fontWeight: 600 }}>退回類別 <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select
                        value={rejectType}
                        onChange={(e) => setRejectType(e.target.value)}
                        className="w-full appearance-none px-3 py-2 pr-7 rounded-lg border border-amber-200 bg-white text-gray-700 focus:outline-none focus:border-amber-400 transition-all"
                        style={{ fontSize: "12px" }}
                      >
                        <option value="">請選擇退回類別</option>
                        {REJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
                      </select>
                      <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-amber-700 mb-1" style={{ fontSize: "11px", fontWeight: 600 }}>
                      備域說明（最少10字）<span className="text-red-500"> *</span>
                    </label>
                    <textarea
                      value={rejectReason}
                      onChange={(e) => setRejectReason(e.target.value)}
                      rows={3}
                      placeholder="請詳細說明退回原因..."
                      className="w-full px-3 py-2 rounded-lg border text-gray-700 placeholder:text-gray-400 focus:outline-none resize-none transition-all"
                      style={{ fontSize: "12px", borderColor: rejectReason.length > 0 && rejectReason.length < 10 ? "#EF4444" : "#FCD34D" }}
                    />
                    <p className="text-right text-gray-400 mt-0.5" style={{ fontSize: "10px" }}>{rejectReason.length} 字</p>
                  </div>
                </>
              )}

              {rejectMode === "transfer" && (
                <>
                  <p className="text-amber-700" style={{ fontSize: "11px" }}>文件知識樹分層選擇</p>
                  {["第一層*", "第二層*", "第三層*", "第四層*"].map((label, i) => (
                    <div key={label}>
                      <label className="block text-gray-600 mb-1" style={{ fontSize: "11px", fontWeight: 600 }}>{label}</label>
                      <div className="relative">
                        <select
                          className="w-full appearance-none px-3 py-1.5 pr-7 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:border-teal-500 transition-all"
                          style={{ fontSize: "12px" }}
                          onChange={i === 0 ? (e) => setTransferL1(e.target.value) : undefined}
                        >
                          <option value="">請選擇 Item {i + 1}</option>
                          {(i === 0 ? L1 : i === 1 ? (L2[transferL1] ?? []) : []).filter(Boolean).map((o) => <option key={o}>{o}</option>)}
                        </select>
                        <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  ))}
                  <p className="text-amber-700 mt-2" style={{ fontSize: "11px" }}>文件所屬部門填寫</p>
                  {["第一層*", "第二層*", "第三層*", "第四層*"].map((label, i) => (
                    <div key={`dept-${label}`}>
                      <label className="block text-gray-600 mb-1" style={{ fontSize: "11px", fontWeight: 600 }}>{label}</label>
                      <div className="relative">
                        <select className="w-full appearance-none px-3 py-1.5 pr-7 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:border-teal-500" style={{ fontSize: "12px" }}>
                          <option>Item 0{i + 1}</option>
                        </select>
                        <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>

        {/* Right: document preview */}
        <div className="flex-1 flex flex-col" style={{ backgroundColor: "#2D3748" }}>
          {/* Preview toolbar */}
          <div className="flex items-center justify-between px-4 py-2 border-b flex-shrink-0" style={{ backgroundColor: "#1A202C", borderColor: "#4A5568" }}>
            <p className="text-gray-300 text-xs truncate">{doc.name} — 文件預覽</p>
            <div className="flex items-center gap-2">
              <button onClick={() => setZoom(z => Math.max(60, z - 10))} className="text-gray-400 hover:text-white transition-colors"><ZoomOut size={14} /></button>
              <span className="text-gray-400 w-10 text-center" style={{ fontSize: "11px" }}>{zoom}%</span>
              <button onClick={() => setZoom(z => Math.min(140, z + 10))} className="text-gray-400 hover:text-white transition-colors"><ZoomIn size={14} /></button>
            </div>
          </div>
          {/* Page */}
          <div className="flex-1 overflow-auto flex justify-center py-6 px-4">
            <div className="bg-white rounded shadow-2xl p-8 space-y-4" style={{ width: `${zoom * 4}px`, minWidth: "320px", maxWidth: "560px" }}>
              <div className="h-4 w-48 rounded bg-gray-800 mb-2" />
              <div className="h-1 w-full rounded" style={{ backgroundColor: "#0D9488" }} />
              {[100, 100, 80, 100, 75, 100, 85].map((w, i) => (
                <div key={i} className="h-2 rounded bg-gray-200" style={{ width: `${w}%` }} />
              ))}
              <div className="grid grid-cols-3 gap-2 border border-gray-200 rounded overflow-hidden">
                {["項目", "說明", "狀態"].map((h) => (
                  <div key={h} className="px-2 py-1.5 text-xs font-semibold text-white" style={{ backgroundColor: "#0D9488" }}>{h}</div>
                ))}
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`px-2 py-2 ${Math.floor(i / 3) % 2 ? "bg-gray-50" : "bg-white"}`}>
                    <div className="h-1.5 rounded bg-gray-200" style={{ width: `${40 + (i % 3) * 20}%` }} />
                  </div>
                ))}
              </div>
              {[100, 83, 100, 66].map((w, i) => (
                <div key={i} className="h-2 rounded bg-gray-200" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer action bar */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 bg-white flex-shrink-0">
        <button
          onClick={() => setRejectMode(rejectMode === "none" ? "return" : "none")}
          className="flex items-center gap-2 px-5 py-2 rounded-lg border-2 transition-all"
          style={{
            borderColor: rejectMode !== "none" ? "#EF4444" : "#E5E7EB",
            color: rejectMode !== "none" ? "#EF4444" : "#6B7280",
            backgroundColor: rejectMode !== "none" ? "#FEF2F2" : "transparent",
            fontWeight: 600, fontSize: "13px",
          }}
        >
          <RotateCcw size={15} />
          {rejectMode !== "none" ? "取消退回" : "退回"}
        </button>

        <div className="flex items-center gap-3">
          {rejectMode !== "none" && (
            <button
              disabled={rejectMode === "return" ? !canReject : !canTransfer}
              onClick={onReject}
              className="flex items-center gap-2 px-5 py-2 rounded-lg border-2 border-red-500 text-red-600 font-semibold transition-all hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ fontSize: "13px" }}
            >
              {rejectMode === "transfer" ? <MoveRight size={15} /> : <RotateCcw size={15} />}
              {rejectMode === "transfer" ? "送交文管審先行移轉" : "確認退回"}
            </button>
          )}
          <button
            onClick={() => setConfirmed(true)}
            className="flex items-center gap-2 px-6 py-2 rounded-lg text-white font-semibold transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#0D9488", fontSize: "13px" }}
          >
            <CheckCircle2 size={15} />
            {role === "manager" ? "同意 — 送往文管" : "核准上架"}
          </button>
        </div>
      </div>
    </DrawerShell>
  );
}

function DrawerShell({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/* Drawer panel */}
      <div className="relative ml-auto flex flex-col bg-white shadow-2xl" style={{ width: "min(95vw, 1100px)", height: "100vh" }}>
        {children}
      </div>
    </div>
  );
}

function AccordionSection({ id, label, expanded, onToggle, children }: {
  id: string; label: string; expanded: Set<string>; onToggle: (id: string) => void; children: React.ReactNode;
}) {
  const isOpen = expanded.has(id);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
      >
        <span className="text-gray-700" style={{ fontSize: "12px", fontWeight: 600 }}>{label}</span>
        {isOpen ? <ChevronDown size={14} className="text-gray-400" /> : <ChevronRight size={14} className="text-gray-400" />}
      </button>
      {isOpen && <div className="px-4 pb-3 space-y-1.5">{children}</div>}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="text-gray-400 flex-shrink-0" style={{ fontSize: "11px" }}>{label}</span>
      <span className="text-gray-700 text-right" style={{ fontSize: "11px", fontWeight: 500 }}>{value}</span>
    </div>
  );
}

function ModeBtn({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="px-2 py-0.5 rounded text-xs font-medium transition-all"
      style={{
        backgroundColor: active ? "#0D9488" : "#E5E7EB",
        color: active ? "#ffffff" : "#6B7280",
      }}
    >
      {label}
    </button>
  );
}
