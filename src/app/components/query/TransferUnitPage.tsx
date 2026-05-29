import { useMemo, useState } from "react";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { getDocumentStatusLabel } from "../../workflow/statusCatalog";
import type { WorkflowDocument, WorkflowHistoryEntry } from "../../workflow/workflowState";

interface Props {
  onBack: () => void;
  embedded?: boolean;
  documents: WorkflowDocument[];
}

type TransferRow = {
  doc: WorkflowDocument;
  transfer: WorkflowHistoryEntry;
};

export function TransferUnitPage({ onBack, embedded = false, documents }: Props) {
  const rows = useMemo<TransferRow[]>(() => {
    return documents
      .flatMap((doc) => {
        const transfer = [...doc.history].reverse().find((entry) => entry.action === "移轉單位");
        return transfer ? [{ doc, transfer }] : [];
      })
      .sort((a, b) => b.transfer.timestamp.localeCompare(a.transfer.timestamp));
  }, [documents]);

  const [keyword, setKeyword] = useState("");
  const [submittedKeyword, setSubmittedKeyword] = useState("");
  const [advancedOpen, setAdvancedOpen] = useState(true);
  const [originalTree, setOriginalTree] = useState("");
  const [originalDepartment, setOriginalDepartment] = useState("");
  const [newTree, setNewTree] = useState("");
  const [newDepartment, setNewDepartment] = useState("");

  const results = useMemo(() => {
    const tokens = submittedKeyword.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return rows.filter(({ doc, transfer }) => {
      if (tokens.length === 0) return true;
      const searchable = [
        doc.docNo,
        doc.name,
        doc.department,
        doc.categoryPath.join(" / "),
        transfer.categoryPathAfter?.join(" / ") ?? "",
        transfer.ownershipDepartmentPathAfter?.join(" / ") ?? "",
        transfer.actor,
      ]
        .join(" ")
        .toLowerCase();
      const originalTreePath = (transfer.categoryPathBefore ?? []).join(" / ").toLowerCase();
      const originalDepartmentPath = (transfer.ownershipDepartmentPathBefore ?? []).join(" / ").toLowerCase();
      const newTreePath = (transfer.categoryPathAfter ?? []).join(" / ").toLowerCase();
      const newDepartmentPath = (transfer.ownershipDepartmentPathAfter ?? []).join(" / ").toLowerCase();
      return (
        tokens.every((token) => searchable.includes(token)) &&
        (!originalTree || originalTreePath.includes(originalTree.trim().toLowerCase())) &&
        (!originalDepartment || originalDepartmentPath.includes(originalDepartment.trim().toLowerCase())) &&
        (!newTree || newTreePath.includes(newTree.trim().toLowerCase())) &&
        (!newDepartment || newDepartmentPath.includes(newDepartment.trim().toLowerCase()))
      );
    });
  }, [rows, submittedKeyword, originalTree, originalDepartment, newTree, newDepartment]);

  function reset() {
    setKeyword("");
    setSubmittedKeyword("");
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
              文件簽核專區
            </button>
            <span>/</span>
            <span>移轉單位</span>
          </div>
          <h2 className="text-lg font-bold text-slate-800">移轉單位</h2>
          <p className="mt-1 text-sm text-slate-500">查詢文件移轉紀錄與新舊知識樹、部門層級資訊</p>
        </div>
      </div>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setSubmittedKeyword(keyword);
              }}
              placeholder="請輸入文件名稱、文件編號或移轉人"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-700 outline-none transition focus:border-teal-500 focus:bg-white"
            />
          </div>

          <button
            type="button"
            onClick={() => setSubmittedKeyword(keyword)}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-500"
          >
            <Search size={15} />
            查詢
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3 px-4 py-4">
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => setAdvancedOpen((current) => !current)}
              className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                advancedOpen
                  ? "border-teal-300 bg-teal-50 text-teal-700"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              <SlidersHorizontal size={14} />
              進階搜尋
              <ChevronDown size={14} className={advancedOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </button>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              重設條件
            </button>
          </div>
        </div>

        {advancedOpen && (
          <div className="border-t border-slate-100 bg-slate-50/60 px-4 py-4">
            <div className="grid gap-3 lg:grid-cols-4">
              <TextField label="原單位知識樹分層" value={originalTree} onChange={setOriginalTree} placeholder="請輸入原知識樹層級" />
              <TextField label="原所屬部門分層" value={originalDepartment} onChange={setOriginalDepartment} placeholder="請輸入原部門層級" />
              <TextField label="新知識樹分層" value={newTree} onChange={setNewTree} placeholder="請輸入新知識樹層級" />
              <TextField label="新所屬部門分層" value={newDepartment} onChange={setNewDepartment} placeholder="請輸入新部門層級" />
            </div>
          </div>
        )}
      </section>

      <div className="mt-4 space-y-3">
        {results.map(({ doc, transfer }) => {
          const performerLabel = transfer.actor === doc.uploaderName || transfer.actor === doc.requestor ? "上傳者" : "簽核主管";
          return (
            <article key={`${doc.id}-${transfer.timestamp}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-slate-500">{doc.docNo}</span>
                    <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
                      {getDocumentStatusLabel(doc.status)}
                    </span>
                    <span className="text-sm font-semibold text-slate-800">{doc.name}</span>
                  </div>

                  <TransferField title="原單位知識樹分層" value={(transfer.categoryPathBefore ?? []).join(" / ") || "無"} />
                  <TransferField title="原所屬部門分層" value={(transfer.ownershipDepartmentPathBefore ?? []).join(" / ") || "無"} />
                  <TransferField title="新知識樹分層" value={(transfer.categoryPathAfter ?? []).join(" / ") || "無"} />
                  <TransferField title="新所屬部門分層" value={(transfer.ownershipDepartmentPathAfter ?? []).join(" / ") || "無"} />
                </div>

                <div className="flex min-w-[160px] flex-col items-end gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-right">
                  <div className="text-xs font-semibold tracking-[0.18em] text-slate-400">操作角色</div>
                  <div className="text-sm font-semibold text-slate-800">{performerLabel}</div>
                  <div className="text-xs text-slate-400">{transfer.timestamp.slice(0, 16).replace("T", " ")}</div>
                </div>
              </div>
            </article>
          );
        })}

        {results.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-5 py-12 text-center text-sm text-slate-400">
            目前沒有符合條件的移轉資料
          </div>
        )}
      </div>
    </div>
  );
}

function TextField({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="space-y-1.5">
      <span className="block text-sm font-semibold text-slate-600">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500"
      />
    </label>
  );
}

function TransferField({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
      <div className="text-xs font-semibold tracking-[0.18em] text-slate-400">{title}</div>
      <div className="mt-1 text-sm leading-6 text-slate-700">{value}</div>
    </div>
  );
}
