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

const REJECT_REASONS = ["\u5167\u5bb9\u4e0d\u7b26", "\u683c\u5f0f\u4e0d\u6b63\u78ba", "\u8cc7\u6599\u7f3a\u6f0f", "\u6b0a\u8cac\u4e0d\u660e", "\u9644\u4ef6\u4e0d\u8db3", "\u5176\u4ed6"];

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
  const isOtherReason = rejectType === "?嗡?";
  const canTransfer = role === "manager";
  const rejectReady = rejectType.length > 0 && (!isOtherReason || rejectReason.trim().length > 0);
  const transferReady =
    categoryPayload.categoryPath.length > 0 && departmentPayload.scopePath.length > 0 && rejectReason.trim().length > 0;
  const showReasonTextarea = rejectMode === "return" ? isOtherReason : rejectMode === "transfer" && canTransfer;

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
    const reason = rejectType || "?批捆銝泵";
    const comment = isOtherReason ? rejectReason.trim() : undefined;
    onReject(reason, comment);
  }

  function submitTransfer() {
    const reason = rejectReason.trim() || "蝘餉??桐?";
    onReject(reason, undefined, {
      categoryId: categoryPayload.categoryId,
      categoryPath: categoryPayload.categoryPath,
      ownershipDepartmentPath: departmentPayload.scopePath,
    });
  }

  const previewSummary = doc.summary ?? doc.subject ?? "撠??";
  const actionLabel = rejectMode === "transfer" ? "\u79fb\u8f49" : rejectMode === "return" ? "\u9000\u56de" : role === "manager" ? "\u4e3b\u7ba1\u7c3d\u6838\u901a\u904e" : "\u6587\u7ba1\u5be9\u6838\u901a\u904e";

  return (
    <DrawerShell onClose={onClose}>
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3" style={{ backgroundColor: "#0D9488" }}>
        <div>
          <h2 className="text-white" style={{ fontSize: "14px", fontWeight: 700 }}>
            {role === "manager" ? "銝餌恣蝪賣" : "?恣撖拇"}
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
          <AccordionSection id="basic" label="?箸鞈?" expanded={expanded} onToggle={toggle}>
            <InfoRow label="?辣?迂" value={doc.name} />
            <InfoRow label="?辣蝺刻?" value={doc.docNo} />
            <InfoRow label="?" value={doc.version} />
            <InfoRow label={"Uploaded by"} value={`${doc.uploaderName} (${doc.uploaderCode})`} />
            <InfoRow label="銝?交?" value={doc.uploadDate} />
            <InfoRow label={"Status"} value={doc.status} />
            <InfoRow label="?撅祇?" value={doc.department} />
            <InfoRow label="?辣??" value={LEVEL_META[doc.level].label} />
            <InfoRow label="?? / 隤芣?" value={previewSummary} />
            <InfoRow label={"Valid from"} value={doc.validFrom || "-"} />
            <InfoRow label={"Valid to"} value={doc.validTo || "-"} />
          </AccordionSection>

          <AccordionSection id="decision" label="???/ 蝘餉?" expanded={expanded} onToggle={toggle}>
            <div className="space-y-3 p-1">
              <div className="flex gap-1">
                <ModeBtn active={rejectMode === "return"} onClick={() => setRejectMode("return")} label={"Reject"} />
                {canTransfer && <ModeBtn active={rejectMode === "transfer"} onClick={() => setRejectMode("transfer")} label="蝘餉?" />}
              </div>

              {rejectMode !== "none" && (
                <>
                  <div>
                    <label className="mb-1 block text-amber-700" style={{ fontSize: "11px", fontWeight: 600 }}>
                      {rejectMode === "transfer" ? "Transfer reason" : "Reject reason"}
                      {rejectMode === "transfer" || rejectMode === "return" ? <span className="text-red-500"> *</span> : null}
                    </label>
                    {rejectMode === "return" ? (
                      <div className="relative">
                        <select
                          value={rejectType}
                          onChange={(e) => setRejectType(e.target.value)}
                          className="w-full appearance-none rounded-lg border border-amber-200 bg-white px-3 py-2 pr-9 text-gray-700 focus:border-amber-400 focus:outline-none"
                          style={{ fontSize: "12px" }}
                        >
                          <option value="">Please select</option>
                          {REJECT_REASONS.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={13}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-amber-400"
                        />
                      </div>
                    ) : null}
                  </div>

                  {showReasonTextarea && rejectMode === "return" && (
                    <div>
                      <label className="mb-1 block text-amber-700" style={{ fontSize: "11px", fontWeight: 600 }}>
                        {rejectMode === "return" ? "?嗡?隤芣?" : "蝘餉?隤芣?嚗憛恬?"}
                        {rejectMode === "return" && isOtherReason && <span className="text-red-500"> *</span>}
                      </label>
                      <textarea
                        value={rejectReason}
                        onChange={(e) => setRejectReason(e.target.value)}
                        rows={3}
                        placeholder={rejectMode === "return" ? "Enter reject reason" : "Enter transfer reason"}
                        className="w-full resize-none rounded-lg border border-amber-200 px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:border-amber-400 focus:outline-none"
                        style={{ fontSize: "12px" }}
                      />
                    </div>
                  )}

                  {rejectMode === "transfer" && canTransfer && (
                    <div className="space-y-4 rounded-xl border border-teal-100 bg-teal-50/60 p-3">
                      <div>
                        <label className="mb-1 block text-teal-700" style={{ fontSize: "11px", fontWeight: 600 }}>
                          蝘餉???隤芣? <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          value={rejectReason}
                          onChange={(e) => setRejectReason(e.target.value)}
                          rows={3}
                          placeholder="隢撓?亦宏頧???鋆?隤芣?"
                          className="w-full resize-none rounded-lg border border-teal-200 bg-white px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:border-teal-400 focus:outline-none"
                          style={{ fontSize: "12px" }}
                        />
                      </div>

                      <SelectorGroup
                        title="Category path"
                        rows={[
                          {
                            label: "Level 1",
                            options: getCategoryLevelOptions(CATEGORY_NODES, []),
                            value: transferCategory.l1,
                            placeholder: "Select level 1",
                            onChange: (l1) =>
                              setTransferCategory({
                                l1,
                                l2: "",
                                l3: "",
                                l4: "",
                              }),
                          },
                          {
                            label: "Level 2",
                            options: transferCategory.l1 ? getCategoryLevelOptions(CATEGORY_NODES, [transferCategory.l1]) : [],
                            value: transferCategory.l2,
                            placeholder: transferCategory.l1 ? "Select level 2" : "Select level 1 first",
                            onChange: (l2) =>
                              setTransferCategory({
                                ...transferCategory,
                                l2,
                                l3: "",
                                l4: "",
                              }),
                          },
                          {
                            label: "Level 3",
                            options: transferCategory.l2
                              ? getCategoryLevelOptions(CATEGORY_NODES, [transferCategory.l1, transferCategory.l2])
                              : [],
                            value: transferCategory.l3,
                            placeholder: transferCategory.l2 ? "Select level 3" : "Select level 2 first",
                            onChange: (l3) =>
                              setTransferCategory({
                                ...transferCategory,
                                l3,
                                l4: "",
                              }),
                          },
                          {
                            label: "Level 4",
                            options: transferCategory.l3
                              ? getCategoryLevelOptions(CATEGORY_NODES, [transferCategory.l1, transferCategory.l2, transferCategory.l3])
                              : [],
                            value: transferCategory.l4,
                            placeholder: transferCategory.l3 ? "Select level 4" : "Select level 3 first",
                            onChange: (l4) => setTransferCategory({ ...transferCategory, l4 }),
                          },
                        ]}
                      />

                      <SelectorGroup
                        title="?撅祇?"
                        rows={[
                          {
                            label: "?砍",
                            options: getHrScopeLevelOptions(HR_SCOPE_ROWS, transferDepartment, 0),
                            value: transferDepartment.companyName,
                            placeholder: "Select company",
                            onChange: (companyName) =>
                              setTransferDepartment({
                                ...createEmptyHrScopeSelection(),
                                companyName,
                              }),
                          },
                          {
                            label: "Group",
                            options: transferDepartment.companyName ? getHrScopeLevelOptions(HR_SCOPE_ROWS, transferDepartment, 1) : [],
                            value: transferDepartment.groupName,
                            placeholder: transferDepartment.companyName ? "隢?黎" : "隢??豢??砍",
                            onChange: (groupName) =>
                              setTransferDepartment({
                                ...transferDepartment,
                                groupName,
                                divisionName: "",
                                departmentName: "",
                              }),
                          },
                          {
                            label: "Division",
                            options: transferDepartment.groupName ? getHrScopeLevelOptions(HR_SCOPE_ROWS, transferDepartment, 2) : [],
                            value: transferDepartment.divisionName,
                            placeholder: transferDepartment.groupName ? "Select division" : "Select group first",
                            onChange: (divisionName) =>
                              setTransferDepartment({
                                ...transferDepartment,
                                divisionName,
                                departmentName: "",
                              }),
                          },
                          {
                            label: "Department",
                            options: transferDepartment.divisionName
                              ? getHrScopeLevelOptions(HR_SCOPE_ROWS, transferDepartment, 3)
                              : [],
                            value: transferDepartment.departmentName,
                            placeholder: transferDepartment.divisionName ? "Select department" : "Select division first",
                            onChange: (departmentName) =>
                              setTransferDepartment({
                                ...transferDepartment,
                                departmentName,
                              }),
                          },
                        ]}
                      />

                      <div className="rounded-lg border border-teal-100 bg-white p-3 text-xs text-teal-700">
                        <div className="mb-1 font-semibold text-teal-700">Transfer targets</div>
                        <p>{categoryPayload.categoryPath.length > 0 ? categoryPayload.categoryPath.join(" / ") : "No category selected"}</p>
                        <p>{departmentPayload.scopePath.length > 0 ? departmentPayload.scopePath.join(" / ") : "撠?豢??撅祇?"}</p>
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
            <p className="truncate text-xs text-slate-300">?辣?批捆?汗</p>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">{attachments.length} attachments</span>
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
          {rejectMode === "return" ? "Cancel reject" : rejectMode === "transfer" ? "Cancel transfer" : "Reject"}
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
              餈?
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
            {role === "manager" ? "銝餌恣蝪賣??" : "?恣撖拇??"}
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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">?辣?批捆?汗</p>
        <h3 className="mt-2 text-2xl font-semibold text-slate-900">{doc.name}</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">Real uploaded file preview based on the actual attachment source.</p>
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
                <button
                  type="button"
                  onClick={() => triggerAttachmentDownload(primary)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-teal-200 bg-white px-3 py-1.5 text-xs font-semibold text-teal-700 transition hover:bg-teal-50"
                >
                  <Download size={13} />
                  銝?
                </button>
              )}
              {primary.downloadUrl && (
                <a
                  href={primary.downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  <ExternalLink size={13} />
                  ??
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
                  <p className="text-sm font-semibold text-slate-700">Attachment preview</p>
                  <p className="mt-1 text-xs text-slate-400">Use the real uploaded file or attachment source for preview and download.</p>
                </div>
              </div>
            )}
          </div>

          {attachments.length > 1 && (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Attached files</p>
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
          No preview available for this file.
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

function triggerAttachmentDownload(attachment: WorkflowAttachment) {
  if (!attachment.downloadUrl) return;

  const link = document.createElement("a");
  link.href = attachment.downloadUrl;
  link.download = attachment.name;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
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
