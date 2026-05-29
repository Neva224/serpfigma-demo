import { useMemo, useState } from "react";
import { Search } from "lucide-react";
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
      return tokens.every((token) => searchable.includes(token));
    });
  }, [rows, submittedKeyword]);

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
          <p className="mt-1 text-sm text-slate-500">查詢文件移轉紀錄與移轉摘要資訊</p>
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

          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            重設條件
          </button>
        </div>
      </section>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-800">查詢結果</div>
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">{results.length} 筆</span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                {["文件資訊", "原單位 → 新單位", "原知識樹 → 新知識樹", "操作人", "移轉時間"].map((header) => (
                  <th key={header} className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-slate-600">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map(({ doc, transfer }) => {
                const performerLabel = transfer.actor === doc.uploaderName || transfer.actor === doc.requestor ? "上傳者" : "簽核主管";
                return (
                  <tr key={`${doc.id}-${transfer.timestamp}`} className="border-b border-slate-100 align-top">
                    <td className="px-4 py-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs text-slate-500">{doc.docNo}</span>
                          <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
                            {getDocumentStatusLabel(doc.status)}
                          </span>
                        </div>
                        <div className="text-sm font-semibold text-slate-800">{doc.name}</div>
                        <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-xs text-slate-600">
                          <div className="font-semibold text-slate-500">移轉摘要</div>
                          <div className="mt-1 leading-6">
                            原單位：{(transfer.ownershipDepartmentPathBefore ?? []).join(" / ") || "無"}<br />
                            新單位：{(transfer.ownershipDepartmentPathAfter ?? []).join(" / ") || "無"}
                          </div>
                          <div className="mt-1 leading-6">
                            原知識樹分層：{(transfer.categoryPathBefore ?? []).join(" / ") || "無"}<br />
                            新知識樹分層：{(transfer.categoryPathAfter ?? []).join(" / ") || "無"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600">
                      <div>{(transfer.ownershipDepartmentPathBefore ?? []).join(" / ") || "無"}</div>
                      <div className="mt-1 text-slate-400">→ {(transfer.ownershipDepartmentPathAfter ?? []).join(" / ") || "無"}</div>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600">
                      <div>{(transfer.categoryPathBefore ?? []).join(" / ") || "無"}</div>
                      <div className="mt-1 text-slate-400">→ {(transfer.categoryPathAfter ?? []).join(" / ") || "無"}</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-700">
                      <div className="font-semibold">{transfer.actor}</div>
                      <div className="text-xs text-slate-400">（{performerLabel}）</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-slate-600">
                      {transfer.timestamp.slice(0, 16).replace("T", " ")}
                    </td>
                  </tr>
                );
              })}

              {results.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-14 text-center text-sm text-slate-400">
                    目前沒有符合條件的移轉資料
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
