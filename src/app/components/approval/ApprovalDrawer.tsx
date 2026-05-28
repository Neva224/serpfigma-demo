import { useMemo, useState, type ReactNode } from "react";
import { CheckCircle2, ChevronDown, ChevronRight, Download, ExternalLink, FileImage, FileText, MoveRight, RotateCcw, X } from "lucide-react";
import {
  CATEGORY_NODES,
  buildCategoryPayload as resolveCategoryPayload,
  getCategoryLevelOptions,
  type CategorySelectionPath,
} from "../../data/catalogModels";
import {
  buildHrScopePayload,
  createEmptyHrScopeSelection,
  getHrScopeLevelOptions,
  HR_SCOPE_ROWS,
  type HrScopeSelection,
} from "../../data/hrScopeModel";
import { LEVEL_META } from "../document-management/mockData";
import type { WorkflowAttachment, WorkflowDocument } from "../../workflow/workflowState";

type RejectMode = "none" | "return" | "transfer";

export interface ApprovalTransferTarget {
  categoryId: string;
  categoryPath: string[];
  ownershipDepartmentPath: string[];
}

interface Props {
  doc: WorkflowDocument;
  role: "manager" | "docadmin";
  onClose: () => void;
  onApprove: () => void;
  onReject: (reason: string, comment?: string, transfer?: ApprovalTransferTarget) => void;
}

const REJECT_REASONS = ["內容不符", "格式不正確", "資料缺漏", "權責不明", "附件不足", "其他"];

export function ApprovalDrawer({ doc, role, onClose, onApprove, onReject }: Props) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(["basic"]));
  const [rejectMode, setRejectMode] = useState<RejectMode>("none");
  const [rejectType, setRejectType] = useState("");
  const [rejectReason, setRejectReason] = useState("");
  const [transferCategory, setTransferCategory] = useState<CategorySelectionPath>({
    l1: "",
    l2: "",
    l3: "",
    l4: "",
  });
  const [transferDepartment, setTransferDepartment] = useState<HrScopeSelection>(createEmptyHrScopeSelection());

  const attachments = doc.attachments ?? [];
  const categoryPayload = useMemo(() => resolveCategoryPayload(CATEGORY_NODES, transferCategory), [transferCategory]);
  const departmentPayload = useMemo(() => buildHrScopePayload(HR_SCOPE_ROWS, transferDepartment), [transferDepartment]);
  const isOtherReason = rejectType === "其他";
  const rejectReady = rejectType.length > 0 && (!isOtherReason || rejectReason.trim().length > 0);
  const transferReady = categoryPayload.categoryPath.length > 0 && departmentPayload.scopePath.length > 0;
  const showReasonTextarea = rejectMode === "return" ? isOtherReason : rejectMode === "transfer";

  function toggle(id: string) {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function resetRejectForm() {
    setRejectType("");
    setRejectReason("");
  }

  function resetTransferForm() {
    setTransferCategory({ l1: "", l2: "", l3: "", l4: "" });
    setTransferDepartment(createEmptyHrScopeSelection());
    resetRejectForm();
  }

  function submitReject() {
    const reason = rejectType || "內容不符";
    const comment = isOtherReason ? rejectReason.trim() : undefined;
    onReject(reason, comment);
  }

  function submitTransfer() {
    const reason = rejectType || "移轉單位";
    const comment = rejectReason.trim() || undefined;
    onReject(reason, comment, {
      categoryId: categoryPayload.categoryId,
      categoryPath: categoryPayload.categoryPath,
      ownershipDepartmentPath: departmentPayload.scopePath,
    });
  }

  const previewSummary = doc.summary ?? doc.subject ?? "尚無摘要";
  const actionLabel =
    rejectMode === "transfer" ? "移轉" : rejectMode === "return" ? "退回" : role === "manager" ? "主管簽核通過" : "文管審核通過";

  return (
    <DrawerShell onClose={onClose}>
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3" style={{ backgroundColor: "#0D9488" }}>
        <div>
          <h2 className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
            {role === "manager" ? "主管簽核" : "文管審核"}
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
          <AccordionSection id="basic" label="基本資料" expanded={expanded} onToggle={toggle}>
            <InfoRow label="文件名稱" value={doc.name} />
            <InfoRow label="文件編號" value={doc.docNo} />
            <InfoRow label="版本" value={doc.version} />
            <InfoRow label="上傳者" value={`${doc.uploaderName} (${doc.uploaderCode})`} />
            <InfoRow label="上傳日期" value={doc.uploadDate} />
            <InfoRow label="目前狀態" value={doc.status} />
            <InfoRow label="所屬部門" value={doc.department} />
            <InfoRow label="文件階級" value={LEVEL_META[doc.level].label} />
            <InfoRow label="摘要 / 說明" value={previewSummary} />
            <InfoRow label="有效起日" value={doc.validFrom || "未設定"} />
            <InfoRow label="有效迄日" value={doc.validTo || "未設定"} />
          </AccordionSection>

          <AccordionSection id="decision" label="退回 / 移轉" expanded={expanded} onToggle={toggle}>
            <div className="space-y-3 p-1">
              <div className="flex gap-1">
                <ModeBtn active={rejectMode === "return"} onClick={() => setRejectMode("return")} label="退回" />
                <ModeBtn active={rejectMode === "transfer"} onClick={() => setRejectMode("transfer")} label="移轉" />
              </div>

              {rejectMode !== "none" && (
                <>
                  <div>
                    <label className="mb-1 block text-amber-700" style={{ fontSize: "11px", fontWeight: 600 }}>
                      原因
                      {rejectMode === "return" && <span className="text-red-500"> *</span>}
                    </label>
                    <select
                      value={rejectType}
                      onChange={(e) => setRejectType(e.target.value)}
                      className="w-full rounded-lg border border-amber-200 bg-white px-3 py-2 text-gray-700 focus:border-amber-400 focus:outline-none"
                      style={{ fontSize: "12px" }}
                    >
                      <option value="">請選擇原因</option>
                      {REJECT_REASONS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  {showReasonTextarea && (
                    <div>
                      <label className="mb-1 block text-amber-700" style={{ fontSize: "11px", fontWeight: 600 }}>
                        {rejectMode === "return" ? "其他說明" : "移轉說明（選填）"}
                        {rejectMode === "return" && isOtherReason && <span className="text-red-500"> *</span>}
                      </label>
                      <textarea
                        value={rejectReason}
                        onChange={(e) => setRejectReason(e.target.value)}
                        rows={3}
                        placeholder={rejectMode === "return" ? "請輸入補充說明" : "可輸入移轉補充說明"}
                        className="w-full resize-none rounded-lg border border-amber-200 px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:border-amber-400 focus:outline-none"
                        style={{ fontSize: "12px" }}
                      />
                    </div>
                  )}

                  {rejectMode === "transfer" && (
                    <div className="space-y-4 rounded-xl border border-teal-100 bg-teal-50/60 p-3">
                      <SelectorGroup
                        title="知識樹分類"
                        rows={[
                          {
                            label: "第一層",
                            options: getCategoryLevelOptions(CATEGORY_NODES, []),
                            value: transferCategory.l1,
                            placeholder: "請選擇第一層",
                            onChange: (l1) =>
                              setTransferCategory({
                                l1,
                                l2: "",
                                l3: "",
                                l4: "",
                              }),
                          },
                          {
                            label: "第二層",
                            options: transferCategory.l1 ? getCategoryLevelOptions(CATEGORY_NODES, [transferCategory.l1]) : [],
                            value: transferCategory.l2,
                            placeholder: transferCategory.l1 ? "請選擇第二層" : "請先選擇第一層",
                            onChange: (l2) =>
                              setTransferCategory({
                                ...transferCategory,
                                l2,
                                l3: "",
                                l4: "",
                              }),
                          },
                          {
                            label: "第三層",
                            options: transferCategory.l2
                              ? getCategoryLevelOptions(CATEGORY_NODES, [transferCategory.l1, transferCategory.l2])
                              : [],
                            value: transferCategory.l3,
                            placeholder: transferCategory.l2 ? "請選擇第三層" : "請先選擇第二層",
                            onChange: (l3) =>
                              setTransferCategory({
                                ...transferCategory,
                                l3,
                                l4: "",
                              }),
                          },
                          {
                            label: "第四層",
                            options: transferCategory.l3
                              ? getCategoryLevelOptions(CATEGORY_NODES, [transferCategory.l1, transferCategory.l2, transferCategory.l3])
                              : [],
                            value: transferCategory.l4,
                            placeholder: transferCategory.l3 ? "請選擇第四層" : "請先選擇第三層",
                            onChange: (l4) => setTransferCategory({ ...transferCategory, l4 }),
                          },
                        ]}
                      />

                      <SelectorGroup
                        title="所屬部門"
                        rows={[
                          {
                            label: "公司",
                            options: getHrScopeLevelOptions(HR_SCOPE_ROWS, transferDepartment, 0),
                            value: transferDepartment.companyName,
                            placeholder: "請選擇公司",
                            onChange: (companyName) =>
                              setTransferDepartment({
                                ...createEmptyHrScopeSelection(),
                                companyName,
                              }),
                          },
                          {
                            label: "群",
                            options: transferDepartment.companyName ? getHrScopeLevelOptions(HR_SCOPE_ROWS, transferDepartment, 1) : [],
                            value: transferDepartment.groupName,
                            placeholder: transferDepartment.companyName ? "請選擇群" : "請先選擇公司",
                            onChange: (groupName) =>
                              setTransferDepartment({
                                ...transferDepartment,
                                groupName,
                                divisionName: "",
                                departmentName: "",
                              }),
                          },
                          {
                            label: "處",
                            options: transferDepartment.groupName ? getHrScopeLevelOptions(HR_SCOPE_ROWS, transferDepartment, 2) : [],
                            value: transferDepartment.divisionName,
                            placeholder: transferDepartment.groupName ? "請選擇處" : "請先選擇群",
                            onChange: (divisionName) =>
                              setTransferDepartment({
                                ...transferDepartment,
                                divisionName,
                                departmentName: "",
                              }),
                          },
                          {
                            label: "部",
                            options: transferDepartment.divisionName
                              ? getHrScopeLevelOptions(HR_SCOPE_ROWS, transferDepartment, 3)
                              : [],
                            value: transferDepartment.departmentName,
                            placeholder: transferDepartment.divisionName ? "請選擇部" : "請先選擇處",
                            onChange: (departmentName) =>
                              setTransferDepartment({
                                ...transferDepartment,
                                departmentName,
                              }),
                          },
                        ]}
                      />

                      <div className="rounded-lg border border-teal-100 bg-white p-3 text-xs text-teal-700">
                        <div className="mb-1 font-semibold text-teal-700">已選擇路徑</div>
                        <p>{categoryPayload.categoryPath.length > 0 ? categoryPayload.categoryPath.join(" / ") : "尚未選擇知識樹分類"}</p>
                        <p>{departmentPayload.scopePath.length > 0 ? departmentPayload.scopePath.join(" / ") : "尚未選擇所屬部門"}</p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </AccordionSection>
        </div>

        <div className="flex flex-1 flex-col bg-slate-800">
          <div className="flex items-center justify-between border-b border-slate-600 bg-slate-900 px-4 py-2">
            <p className="truncate text-xs text-slate-300">文件內容預覽</p>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">{attachments.length} 個附件</span>
            </div>
          </div>

          <div className="flex flex-1 items-start justify-center overflow-auto px-4 py-6">
            <div className="rounded bg-white p-6 shadow-2xl" style={{ width: "min(100%, 720px)", minWidth: "360px" }}>
                            <DocumentPreviewPane doc={doc} attachments={attachments} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-5 py-3">
        <button
          type="button"
          onClick={() => {
            if (rejectMode === "none") {
              setRejectMode("return");
              return;
            }
            setRejectMode("none");
            resetRejectForm();
            resetTransferForm();
          }}
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
          {rejectMode === "return" ? "取消退回" : rejectMode === "transfer" ? "取消移轉" : "退回"}
        </button>

        <div className="flex items-center gap-3">
          {(rejectMode === "return" || rejectMode === "transfer") && (
            <button
              type="button"
              onClick={() => {
                setRejectMode("none");
                resetRejectForm();
                resetTransferForm();
              }}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-50"
            >
              返回
            </button>
          )}

          {(rejectMode === "return" || rejectMode === "transfer") && (
            <button
              type="button"
              disabled={rejectMode === "return" ? !rejectReady : !transferReady}
              onClick={() => {
                if (rejectMode === "transfer") {
                  submitTransfer();
                } else {
                  submitReject();
                }
              }}
              className="flex items-center gap-2 rounded-lg border-2 border-red-500 px-5 py-2 font-semibold text-red-600 transition-all hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
              style={{ fontSize: "13px" }}
            >
              {rejectMode === "transfer" ? <MoveRight size={15} /> : <RotateCcw size={15} />}
              {actionLabel}
            </button>
          )}

          <button
            type="button"
            onClick={onApprove}
            className="flex items-center gap-2 rounded-lg px-6 py-2 font-semibold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#0D9488", fontSize: "13px" }}
          >
            <CheckCircle2 size={15} />
            {role === "manager" ? "主管簽核通過" : "文管審核通過"}
          </button>
        </div>
      </div>
    </DrawerShell>
  );
}

function DocumentPreviewPane({
  doc,
  attachments,
}: {
  doc: WorkflowDocument;
  attachments: WorkflowAttachment[];
}) {
  const primary = attachments[0] ?? null;
  const previewKind = primary ? getPreviewKind(primary.type) : "none";

  return (
    <article className="space-y-5">
      <header className="border-b border-slate-200 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">文件內容預覽</p>
        <h3 className="mt-2 text-2xl font-semibold text-slate-900">{doc.name}</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">此區塊直接顯示實際上傳附件，不再使用假文件內容。</p>
      </header>

      {primary ? (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-800">{primary.name}</p>
              <p className="text-xs text-slate-400">
                {primary.size} / {primary.type.toUpperCase()} / {primary.uploadedAt.slice(0, 10)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {primary.downloadUrl && (
                <a
                  href={primary.downloadUrl}
                  download={primary.name}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-teal-200 bg-white px-3 py-1.5 text-xs font-semibold text-teal-700 transition hover:bg-teal-50"
                >
                  <Download size={13} />
                  下載
                </a>
              )}
              {primary.downloadUrl && (
                <a
                  href={primary.downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  <ExternalLink size={13} />
                  開啟
                </a>
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            {previewKind === "image" && primary.downloadUrl ? (
              <img src={primary.downloadUrl} alt={primary.name} className="max-h-[620px] w-full object-contain bg-slate-100" />
            ) : previewKind === "pdf" && primary.downloadUrl ? (
              <iframe title={primary.name} src={primary.downloadUrl} className="h-[620px] w-full bg-white" />
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center text-slate-500">
                {previewKind === "file" ? <FileText size={40} className="text-slate-400" /> : <FileImage size={40} className="text-slate-400" />}
                <div>
                  <p className="text-sm font-semibold text-slate-700">目前無法內嵌預覽此檔案類型</p>
                  <p className="mt-1 text-xs text-slate-400">請使用「開啟」或「下載」查看實際附件內容</p>
                </div>
              </div>
            )}
          </div>

          {attachments.length > 1 && (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">其他附件</p>
              <div className="space-y-2">
                {attachments.slice(1).map((attachment) => (
                  <div key={attachment.id} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    <p className="truncate font-medium">{attachment.name}</p>
                    <p className="text-xs text-slate-400">{attachment.size} / {attachment.type.toUpperCase()}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center text-sm text-slate-500">
          目前沒有可預覽的實際附件
        </div>
      )}
    </article>
  );
}
function getPreviewKind(ext: string): "image" | "pdf" | "file" {
  const normalized = ext.toLowerCase();
  if (["png", "jpg", "jpeg", "gif", "webp", "bmp", "svg"].includes(normalized)) return "image";
  if (normalized === "pdf") return "pdf";
  return "file";
}
function DrawerShell({ children, onClose }: { children: ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative ml-auto flex h-screen flex-col bg-white shadow-2xl" style={{ width: "min(95vw, 1100px)" }}>
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

function SelectorGroup({
  title,
  rows,
}: {
  title: string;
  rows: Array<{
    label: string;
    options: string[];
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
  }>;
}) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-teal-700">{title}</p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {rows.map((row) => (
          <SelectField key={row.label} {...row} />
        ))}
      </div>
    </div>
  );
}

function SelectField({
  label,
  options,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="space-y-1">
      <span className="block text-[11px] font-semibold text-slate-500">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-teal-500 focus:outline-none"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function ModeBtn({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 rounded-lg border px-3 py-2 text-sm font-semibold transition ${
        active
          ? "border-teal-500 bg-teal-50 text-teal-700"
          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );
}
