import { useEffect, useMemo, useState, type MouseEvent, type ReactNode } from "react";
import {
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  History,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import {
  SAMPLE_DOCS,
  type DocumentLevel,
  type DocumentRecord,
  type DocumentStatus,
} from "./document-management/mockData";

export type DocRecord = DocumentRecord;

interface Props {
  docs: DocumentRecord[];
  onAdd: () => void;
  onApprove: (doc: DocumentRecord) => void;
  onReEdit: (doc: DocumentRecord) => void;
}

type TablePanel =
  | { kind: "version"; doc: DocumentRecord }
  | { kind: "audit"; doc: DocumentRecord }
  | null;

const STATUS_STYLES: Record<
  DocumentStatus,
  { bg: string; text: string; dot: string; label: string }
> = {
  已上架: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
    label: "已上架",
  },
  待主管審核: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    dot: "bg-orange-500",
    label: "待主管審核",
  },
  待文管審核: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    dot: "bg-blue-500",
    label: "待文管審核",
  },
  草稿: {
    bg: "bg-gray-100",
    text: "text-gray-600",
    dot: "bg-gray-400",
    label: "草稿",
  },
  退回: {
    bg: "bg-red-50",
    text: "text-red-700",
    dot: "bg-red-500",
    label: "退回",
  },
  下架: {
    bg: "bg-orange-100",
    text: "text-orange-800",
    dot: "bg-orange-600",
    label: "下架",
  },
};

const LEVEL_LABELS: Record<DocumentLevel, { short: string; desc: string }> = {
  第一級: { short: "第一級", desc: "文件最外層分類" },
  第二級: { short: "第二級", desc: "部門或主題分類" },
  第三級: { short: "第三級", desc: "細分類或流程" },
  第四級: { short: "第四級", desc: "操作細節與表單" },
  第五級: { short: "第五級", desc: "版本與附屬文件" },
  第六級: { short: "第六級", desc: "機密或歸檔資料" },
};

export function DocumentTable({ docs, onAdd, onApprove, onReEdit }: Props) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [notice, setNotice] = useState<string | null>(null);
  const [panel, setPanel] = useState<TablePanel>(null);

  useEffect(() => {
    setPage(1);
  }, [docs]);

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

  function handleTableClickCapture(event: MouseEvent<HTMLTableElement>) {
    const target = event.target as HTMLElement | null;
    const button = target?.closest("button");
    const actionLabel = button?.textContent?.trim() ?? "";
    if (actionLabel !== "版本歷程" && actionLabel !== "審核紀錄") return;

    const row = button?.closest("tr");
    if (!row) return;

    const docNo = row.querySelector("td span")?.textContent?.trim() ?? "";
    const name = row.querySelector("td:nth-child(2) button")?.textContent?.trim() ?? "";
    const doc = docs.find((item) => item.docNo === docNo || item.name === name);
    if (!doc) return;

    event.preventDefault();
    event.stopPropagation();
    setNotice(null);
    setPanel({ kind: actionLabel === "版本歷程" ? "version" : "audit", doc });
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-5 py-3">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-700">文件表格</p>
            <p className="text-xs text-slate-400">
              目前顯示 {docs.length} 筆，分頁每頁 10 筆
            </p>
          </div>
          <span className="rounded-full border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
            共 {docs.length} 筆
          </span>
        </div>
        <button
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
                  {panel.kind === "version" ? "版本歷程" : "審核紀錄"}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{panel.doc.name}</h3>
                <p className="mt-1 text-sm text-slate-500">
                  {panel.doc.docNo} ・ 版本 {panel.doc.version} ・ {panel.doc.status}
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
              {panel.kind === "version" ? (
                <VersionHistoryPanel doc={panel.doc} />
              ) : (
                <AuditHistoryPanel doc={panel.doc} />
              )}
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full text-left" onClickCapture={handleTableClickCapture}>
          <thead className="bg-teal-600">
            <tr>
              <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-white">
                文件編號
              </th>
              <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-white">
                文件名稱
              </th>
              <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-white">
                文件階級
              </th>
              <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-white">
                版本
              </th>
              <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-white">
                狀態
              </th>
              <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-white">
                上傳者
              </th>
              <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-white">
                上傳日期
              </th>
              <th className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-white">
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            {pagedDocs.map((doc, index) => {
              const level = LEVEL_LABELS[doc.level];
              const status = STATUS_STYLES[doc.status];
              const needsApproval =
                doc.status === "待主管審核" || doc.status === "待文管審核";
              const canReEdit = doc.status === "退回";
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
                        {level.short}
                      </span>
                      <span className="text-xs text-slate-400">{level.desc}</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-600">
                      {doc.version}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${status.bg} ${status.text}`}
                    >
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
                        <div className="text-sm font-medium text-slate-700">
                          {doc.uploaderName}
                        </div>
                        <div className="text-xs text-slate-400">{doc.uploaderCode}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-500">
                    {doc.uploadDate}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <ActionButton
                        icon={<Download size={13} />}
                        label="下載"
                        onClick={() => setNotice(`已觸發「${doc.name}」的下載（mock）。`)}
                      />
                      <ActionButton
                        icon={<History size={13} />}
                        label="版本歷程"
                        onClick={() => setNotice(`已開啟「${doc.name}」的版本歷程（mock）。`)}
                      />
                      <ActionButton
                        icon={<Clock3 size={13} />}
                        label="審核紀錄"
                        onClick={() => setNotice(`已開啟「${doc.name}」的審核紀錄（mock）。`)}
                      />
                      {needsApproval && (
                        <ActionButton
                          icon={<CheckCircle2 size={13} />}
                          label="審核"
                          primary
                          onClick={() => onApprove(doc)}
                        />
                      )}
                      {canReEdit && (
                        <ActionButton
                          icon={<FileText size={13} />}
                          label="重新編輯"
                          warn
                          onClick={() => onReEdit(doc)}
                        />
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
          <span>每頁顯示</span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm text-slate-700 outline-none transition focus:border-teal-500"
          >
            {[10].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span>筆</span>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <div className="text-sm text-slate-500">
            目前第 <span className="font-semibold text-slate-700">{safePage}</span> 頁 / 共{" "}
            <span className="font-semibold text-slate-700">{totalPages}</span> 頁
          </div>
          <div className="flex items-center gap-1">
            <PagerButton
              icon={<ChevronsLeft size={14} />}
              disabled={safePage === 1}
              onClick={() => gotoPage(1)}
            />
            <PagerButton
              icon={<ChevronLeft size={14} />}
              disabled={safePage === 1}
              onClick={() => gotoPage(safePage - 1)}
            />
            <div className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600">
              第 {safePage} 頁
            </div>
            <PagerButton
              icon={<ChevronRight size={14} />}
              disabled={safePage === totalPages}
              onClick={() => gotoPage(safePage + 1)}
            />
            <PagerButton
              icon={<ChevronsRight size={14} />}
              disabled={safePage === totalPages}
              onClick={() => gotoPage(totalPages)}
            />
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 px-5 py-3 text-xs text-slate-400">
        顯示範圍 {start} - {end}，共 {docs.length} 筆資料
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
  const items = [
    {
      version: doc.version,
      date: doc.uploadDate,
      title: "目前版本",
      note: "當前顯示於文件表格的版本。",
      active: true,
    },
    {
      version: "v1.2",
      date: "2026-04-18",
      title: "流程修訂",
      note: "補充簽核條件與附件說明。",
    },
    {
      version: "v1.1",
      date: "2026-03-09",
      title: "格式調整",
      note: "調整章節順序與標題格式。",
    },
    {
      version: "v1.0",
      date: "2026-02-12",
      title: "初版建立",
      note: "建立文件初稿並送審。",
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
  const items = [
    {
      time: `${doc.uploadDate} 09:18`,
      actor: doc.uploaderName,
      action: "建立草稿",
      note: "文件完成上傳並進入編輯流程。",
    },
    {
      time: `${doc.uploadDate} 11:05`,
      actor: "系統",
      action: "送出審核",
      note: "文件已送出至主管審核。",
    },
    {
      time: "2026-05-06 15:42",
      actor: "主管",
      action: "審核中",
      note: "已完成初步確認，等待下一步簽核。",
    },
    {
      time: "2026-05-07 10:10",
      actor: "文管",
      action: "紀錄更新",
      note: "補充審核意見與版本備註。",
    },
  ];

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={`${item.time}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-900">{item.action}</p>
              <p className="mt-1 text-sm text-slate-500">{item.note}</p>
              <p className="mt-3 text-xs text-slate-400">
                {item.actor} ・ {item.time}
              </p>
            </div>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
              {index + 1}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export { SAMPLE_DOCS };
