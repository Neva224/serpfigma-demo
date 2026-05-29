import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  History,
  RotateCcw,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { LEVEL_META, STATUS_OPTIONS, type DocumentRecord, type DocumentStatus } from "./document-management/mockData";
import type { WorkflowAttachment } from "../workflow/workflowState";
import { ConfirmDialog } from "./ui/ConfirmDialog";
import { StatusRail } from "./ui/StatusRail";
import { getDocumentStatusLabel } from "../workflow/statusCatalog";

export type DocRecord = DocumentRecord;

interface Props {
  docs: DocumentRecord[];
  onAdd: () => void;
  onApprove: (doc: DocumentRecord) => void;
  onReEdit: (doc: DocumentRecord) => void;
  onVoidPublished: (doc: DocumentRecord) => void;
  onDeletePublished: (doc: DocumentRecord) => void;
  onRestoreVoided: (doc: DocumentRecord) => void;
  canVoidPublishedDocs: boolean;
  canDeletePublishedDocs: boolean;
}

type TablePanel =
  | { kind: "version"; doc: DocumentRecord }
  | { kind: "audit"; doc: DocumentRecord }
  | null;

type WorkflowAuditEntry = {
  action: string;
  actor: string;
  timestamp: string;
  statusFrom: string;
  statusTo: string;
  reason?: string;
  comment?: string;
  categoryPathBefore?: string[];
  categoryPathAfter?: string[];
  ownershipDepartmentPathBefore?: string[];
  ownershipDepartmentPathAfter?: string[];
};

type WorkflowDocLike = DocumentRecord & {
  updatedAt?: string;
  summary?: string;
  subject?: string;
  attachments?: WorkflowAttachment[];
  history?: WorkflowAuditEntry[];
};

const [
  STATUS_DRAFT,
  STATUS_MANAGER_PENDING,
  STATUS_DOCADMIN_PENDING,
  STATUS_PUBLISHED,
  STATUS_RETURNED,
  STATUS_VOIDED,
  STATUS_ARCHIVED,
] = STATUS_OPTIONS;

const STATUS_STYLES: Record<DocumentStatus, { bg: string; text: string; dot: string; label: string }> = {
  [STATUS_DRAFT]: { bg: "bg-slate-100", text: "text-slate-600", dot: "bg-slate-400", label: getDocumentStatusLabel(STATUS_DRAFT) },
  [STATUS_MANAGER_PENDING]: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500", label: getDocumentStatusLabel(STATUS_MANAGER_PENDING) },
  [STATUS_DOCADMIN_PENDING]: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500", label: getDocumentStatusLabel(STATUS_DOCADMIN_PENDING) },
  [STATUS_PUBLISHED]: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500", label: getDocumentStatusLabel(STATUS_PUBLISHED) },
  [STATUS_RETURNED]: { bg: "bg-orange-50", text: "text-orange-700", dot: "bg-orange-500", label: getDocumentStatusLabel(STATUS_RETURNED) },
  [STATUS_VOIDED]: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500", label: getDocumentStatusLabel(STATUS_VOIDED) },
  [STATUS_ARCHIVED]: { bg: "bg-slate-100", text: "text-slate-600", dot: "bg-slate-500", label: getDocumentStatusLabel(STATUS_ARCHIVED) },
};

export function DocumentTable({
  docs,
  onAdd,
  onApprove,
  onReEdit,
  onVoidPublished,
  onDeletePublished,
  onRestoreVoided,
  canVoidPublishedDocs,
  canDeletePublishedDocs,
}: Props) {
  const DEFAULT_PAGE_SIZE = 10;
  const [page, setPage] = useState(1);
  const [pageSizeInput, setPageSizeInput] = useState(String(DEFAULT_PAGE_SIZE));
  const [notice, setNotice] = useState<string | null>(null);
  const [panel, setPanel] = useState<TablePanel>(null);
  const [confirmState, setConfirmState] = useState<{
    kind: "void" | "delete";
    doc: DocumentRecord;
  } | null>(null);
  const [confirmBusy, setConfirmBusy] = useState(false);

  const pageSize = useMemo(() => {
    const parsed = Number(pageSizeInput);
    if (!Number.isFinite(parsed) || parsed < 1) return DEFAULT_PAGE_SIZE;
    return Math.min(100, Math.floor(parsed));
  }, [pageSizeInput]);

  useEffect(() => {
    setPage(1);
  }, [docs, pageSize]);

  const totalPages = Math.max(1, Math.ceil(docs.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const pagedDocs = useMemo(
    () => docs.slice((safePage - 1) * pageSize, safePage * pageSize),
    [docs, safePage, pageSize],
  );
  const start = docs.length === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const end = Math.min(safePage * pageSize, docs.length);

  function gotoPage(nextPage: number) {
    const clamped = Math.max(1, Math.min(totalPages, nextPage));
    setPage(clamped);
  }

  function handlePageSizeBlur() {
    const parsed = Number(pageSizeInput);
    if (!Number.isFinite(parsed) || parsed < 1) {
      setPageSizeInput(String(DEFAULT_PAGE_SIZE));
      return;
    }
    setPageSizeInput(String(Math.min(100, Math.floor(parsed))));
  }

  function handleDownload(doc: DocumentRecord) {
    const workflowDoc = doc as WorkflowDocLike;
    const attachment = workflowDoc.attachments?.[0];
    if (!attachment?.downloadUrl) {
      setNotice(`目前沒有可下載的實際附件：${doc.name}`);
      return;
    }

    const link = document.createElement("a");
    link.href = attachment.downloadUrl;
    link.download = attachment.name || doc.name;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setNotice(`已開始下載：${attachment.name || doc.name}`);
  }

  async function confirmDestructiveAction() {
    if (!confirmState || confirmBusy) return;
    setConfirmBusy(true);
    try {
      if (confirmState.kind === "void") {
        await Promise.resolve(onVoidPublished(confirmState.doc));
      } else {
        await Promise.resolve(onDeletePublished(confirmState.doc));
      }
      setConfirmState(null);
    } finally {
      setConfirmBusy(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-5 py-3">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-700">文件列表</p>
            <p className="text-xs text-slate-400">
              共 {docs.length} 筆文件，頁面大小 {pageSize} 筆
            </p>
          </div>
          <span className="rounded-full border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
            共 {docs.length} 筆
          </span>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex items-center gap-1.5 rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-500 active:scale-[0.98]"
        >
          <FileText size={15} />
          新增文件
        </button>
      </div>

      {notice && (
        <div className="flex items-center justify-between border-b border-teal-100 bg-teal-50 px-5 py-3 text-sm text-teal-700">
          <span>{notice}</span>
          <button
            type="button"
            onClick={() => setNotice(null)}
            className="rounded-lg px-2 py-1 text-xs font-semibold text-teal-700 transition hover:bg-teal-100"
          >
            關閉
          </button>
        </div>
      )}

      {panel && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-slate-950/50" onClick={() => setPanel(null)} />
          <div className="relative ml-auto flex h-full w-full max-w-3xl flex-col bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-600">
                  {panel.kind === "version" ? "版本歷程" : "審核歷程"}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{panel.doc.name}</h3>
                <p className="mt-1 text-sm text-slate-500">
                  {panel.doc.docNo} / {panel.doc.version} / {STATUS_STYLES[panel.doc.status]?.label ?? panel.doc.status}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPanel(null)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="關閉"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-slate-50 px-6 py-5">
                  <StatusRail status={panel.doc.status} compact className="mb-4" />
                  {panel.kind === "version" ? <VersionHistoryPanel doc={panel.doc} /> : <AuditHistoryPanel doc={panel.doc} />}
            </div>
          </div>
        </div>
      )}

      <ConfirmDialog
        open={confirmState?.kind === "void"}
        title="作廢確認"
        description={confirmState?.doc ? `請確認是否要將「${confirmState.doc.name}」作廢？作廢後將影響文件使用狀態。` : "請確認是否要將此文件作廢？作廢後將影響文件使用狀態。"}
        confirmLabel="確認作廢"
        destructive
        loading={confirmBusy}
        onConfirm={confirmDestructiveAction}
        onCancel={() => {
          if (confirmBusy) return;
          setConfirmState(null);
        }}
      />
      <ConfirmDialog
        open={confirmState?.kind === "delete"}
        title="刪除確認"
        description={confirmState?.doc ? `請確認是否要刪除「${confirmState.doc.name}」？刪除後可能無法恢復。` : "請確認是否要刪除此文件？刪除後可能無法恢復。"}
        confirmLabel="確認刪除"
        destructive
        loading={confirmBusy}
        onConfirm={confirmDestructiveAction}
        onCancel={() => {
          if (confirmBusy) return;
          setConfirmState(null);
        }}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-teal-600">
            <tr>
              {["文件編號", "文件名稱", "文件階級", "版本", "狀態", "上傳者", "上傳日期", "操作"].map((header) => (
                <th key={header} className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-white">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pagedDocs.map((doc, index) => {
              const level = LEVEL_META[doc.level];
              const status = STATUS_STYLES[doc.status];
              const needsApproval = doc.status === STATUS_MANAGER_PENDING || doc.status === STATUS_DOCADMIN_PENDING;
              const canReEdit = doc.status === STATUS_RETURNED;
              const canRestore = doc.status === STATUS_VOIDED && canVoidPublishedDocs;
              const canManagePublished = doc.status === STATUS_PUBLISHED && canVoidPublishedDocs;
              const canDeletePublished = doc.status === STATUS_PUBLISHED && canDeletePublishedDocs;

              return (
                <tr
                  key={doc.id}
                  className="border-b border-slate-100 transition hover:bg-teal-50/40"
                  style={{ backgroundColor: index % 2 === 0 ? "#ffffff" : "#fafafa" }}
                >
                  <td className="whitespace-nowrap px-4 py-3">
                    <span className="font-mono text-xs text-slate-500">{doc.docNo}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col gap-1">
                      <button
                        type="button"
                        className="w-fit text-left text-sm font-semibold text-slate-800 transition hover:text-teal-700"
                        onClick={() => setNotice(`已選取文件：${doc.name}`)}
                      >
                        {doc.name}
                      </button>
                      <div className="flex flex-wrap gap-1.5">
                        {doc.tags.map((tag) => (
                          <span key={tag} className="text-xs text-slate-400">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col gap-1">
                      <span className="inline-flex w-fit items-center rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
                        {level.label}
                      </span>
                      <span className="text-xs text-slate-400">{level.description}</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-600">
                      {doc.version}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${status.bg} ${status.text}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
                      {status.label}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white">
                        {doc.uploaderName.slice(0, 1)}
                      </div>
                      <div className="leading-tight">
                        <div className="text-sm font-medium text-slate-700">{doc.uploaderName}</div>
                        <div className="text-xs text-slate-400">{doc.uploaderCode}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-500">{doc.uploadDate}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <ActionButton icon={<Download size={13} />} label="下載" onClick={() => handleDownload(doc)} />
                      <ActionButton icon={<History size={13} />} label="版本歷程" onClick={() => setPanel({ kind: "version", doc })} />
                      <ActionButton icon={<Clock3 size={13} />} label="審核歷程" onClick={() => setPanel({ kind: "audit", doc })} />
                      {canManagePublished && (
                        <ActionButton
                          icon={<X size={13} />}
                          label="作廢"
                          warn
                          onClick={() => setConfirmState({ kind: "void", doc })}
                        />
                      )}
                      {canRestore && (
                        <ActionButton
                          icon={<RotateCcw size={13} />}
                          label="還原"
                          primary
                          onClick={() => onRestoreVoided(doc)}
                        />
                      )}
                      {canDeletePublished && (
                        <ActionButton
                          icon={<X size={13} />}
                          label="刪除"
                          warn
                          onClick={() => setConfirmState({ kind: "delete", doc })}
                        />
                      )}
                      {needsApproval && (
                        <ActionButton icon={<CheckCircle2 size={13} />} label="審核" primary onClick={() => onApprove(doc)} />
                      )}
                      {canReEdit && (
                        <ActionButton icon={<FileText size={13} />} label="重新編輯" warn onClick={() => onReEdit(doc)} />
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}

            {pagedDocs.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-16 text-center text-sm text-slate-400">
                  目前沒有符合條件的文件
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-100 bg-slate-50/50 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>每頁筆數</span>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            aria-label="每頁筆數"
            value={pageSizeInput}
            onFocus={(e) => e.currentTarget.select()}
            onChange={(e) => setPageSizeInput(e.target.value.replace(/\D/g, ""))}
            onBlur={handlePageSizeBlur}
            className="w-20 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm text-slate-700 outline-none transition focus:border-teal-500"
          />
          <span>筆</span>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <div className="text-sm text-slate-500">
            顯示 <span className="font-semibold text-slate-700">{start}</span> -{" "}
            <span className="font-semibold text-slate-700">{end}</span> /{" "}
            <span className="font-semibold text-slate-700">{docs.length}</span> 筆
          </div>
          <div className="flex items-center gap-1">
            <PagerButton icon={<ChevronsLeft size={14} />} disabled={safePage === 1} onClick={() => gotoPage(1)} />
            <PagerButton icon={<ChevronLeft size={14} />} disabled={safePage === 1} onClick={() => gotoPage(safePage - 1)} />
            <div className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600">
              第 {safePage} / {totalPages} 頁
            </div>
            <PagerButton icon={<ChevronRight size={14} />} disabled={safePage === totalPages} onClick={() => gotoPage(safePage + 1)} />
            <PagerButton icon={<ChevronsRight size={14} />} disabled={safePage === totalPages} onClick={() => gotoPage(totalPages)} />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 px-5 py-3 text-xs text-slate-400">
        顯示 {start} - {end} 筆，共 {docs.length} 筆
      </div>
    </div>
  );
}

function ActionButton({
  icon,
  label,
  primary = false,
  warn = false,
  onClick,
}: {
  icon: ReactNode;
  label: string;
  primary?: boolean;
  warn?: boolean;
  onClick?: () => void;
}) {
  const styles = primary
    ? "border-teal-600 bg-teal-50 text-teal-700 hover:bg-teal-100"
    : warn
      ? "border-orange-300 bg-orange-50 text-orange-700 hover:bg-orange-100"
      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-semibold transition ${styles}`}
    >
      {icon}
      <span className="hidden xl:inline">{label}</span>
    </button>
  );
}

function PagerButton({
  icon,
  disabled,
  onClick,
}: {
  icon: ReactNode;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
    >
      {icon}
    </button>
  );
}

function VersionHistoryPanel({ doc }: { doc: DocumentRecord }) {
  const workflowDoc = doc as WorkflowDocLike;
  const items = [
    {
      version: doc.version,
      date: workflowDoc.updatedAt ?? doc.uploadDate,
      title: doc.name,
      note: workflowDoc.summary ?? workflowDoc.subject ?? "目前版本",
      active: true,
    },
  ];

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={`${item.version}-${index}`}
          className={`rounded-2xl border bg-white p-4 shadow-sm ${
            item.active ? "border-teal-200 ring-1 ring-teal-100" : "border-slate-200"
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-teal-50 px-2 py-0.5 text-xs font-semibold text-teal-700">
                  {item.version}
                </span>
                {item.active && (
                  <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700">
                    目前版本
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-500">{item.note}</p>
            </div>
            <div className="text-right text-xs text-slate-400">{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function AuditHistoryPanel({ doc }: { doc: DocumentRecord }) {
  const workflowDoc = doc as WorkflowDocLike;
  const items =
    workflowDoc.history && workflowDoc.history.length > 0
      ? workflowDoc.history.map((entry) => {
          const transition = `${entry.statusFrom} → ${entry.statusTo}`;
          const detailParts = [entry.reason, entry.comment, transition].filter(Boolean);
          if (entry.categoryPathAfter || entry.ownershipDepartmentPathAfter) {
            const categoryPart = entry.categoryPathAfter ? `分類：${entry.categoryPathAfter.join(" / ")}` : "";
            const deptPart = entry.ownershipDepartmentPathAfter ? `部門：${entry.ownershipDepartmentPathAfter.join(" / ")}` : "";
            detailParts.unshift([categoryPart, deptPart].filter(Boolean).join("；"));
          }
          return {
            time: entry.timestamp.slice(0, 16).replace("T", " "),
            actor: entry.actor,
            action: entry.action,
            note: detailParts.filter(Boolean).join(" ｜ "),
          };
        })
      : [];

  return (
    <div className="space-y-3">
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={`${item.time}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.action}</p>
                <p className="mt-1 text-sm text-slate-500">{item.note}</p>
                <p className="mt-3 text-xs text-slate-400">
                  {item.actor} · {item.time}
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                {index + 1}
              </span>
            </div>
          </div>
        ))
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-center text-sm text-slate-400">
          尚無真實審核歷程
        </div>
      )}
    </div>
  );
}
