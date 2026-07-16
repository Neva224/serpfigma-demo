import { useMemo, useState } from "react";
import { Database, Sparkles, Trash2 } from "lucide-react";
import { ConfirmDialog } from "../ui/ConfirmDialog";
import { countTestDocuments } from "../../workflow/workflowState";
import type { DocumentRecord } from "../document-management/mockData";

const QUICK_COUNTS = [10, 50, 200];

interface Props {
  documents: DocumentRecord[];
  onImport: (count: number) => void;
  onClearTestData: () => void;
  onBack: () => void;
  embedded?: boolean;
}

export function TestDataImportPage({ documents, onImport, onClearTestData, onBack, embedded = false }: Props) {
  const [customCount, setCustomCount] = useState("100");
  const [clearConfirmOpen, setClearConfirmOpen] = useState(false);
  const testCount = useMemo(() => countTestDocuments(documents), [documents]);

  function handleImport(count: number) {
    if (!Number.isFinite(count) || count <= 0) return;
    onImport(Math.min(2000, Math.floor(count)));
  }

  return (
    <div
      className={embedded ? "h-full overflow-y-auto px-6 py-5" : "flex-1 overflow-y-auto px-6 py-5"}
      style={{ background: "linear-gradient(180deg, #F4F8F7 0%, #EEF5F3 100%)" }}
    >
      <div className="enterprise-panel mb-5 flex items-start justify-between gap-4 overflow-hidden rounded-xl px-5 py-4">
        <div>
          <div className="mb-1 flex items-center gap-1.5 text-xs text-slate-400">
            <button type="button" onClick={onBack} className="hover:text-slate-600">
              首頁
            </button>
            <span>/</span>
            <button type="button" onClick={onBack} className="hover:text-slate-600">
              文件管理
            </button>
            <span>/</span>
            <span>系統設定 — 匯入測試資料</span>
          </div>
          <h2 className="text-[17px] font-bold text-slate-800">系統設定 — 匯入測試資料</h2>
          <p className="mt-0.5 text-sm text-slate-500">
            還沒接上真正後端資料庫時，先灌一批貼近真實分類/部門的假文件，方便測分頁、查詢與到期提醒
          </p>
        </div>
      </div>

      <div className="enterprise-panel mb-5 rounded-xl px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: "var(--color-primary)" }}>
            <Database size={18} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700">目前測試資料</p>
            <p className="text-xs text-slate-400">共 {testCount} 筆，帶「測試資料」標籤，可整批清除不影響真實文件</p>
          </div>
        </div>
      </div>

      <div className="enterprise-panel rounded-xl px-5 py-5">
        <div className="mb-4 flex items-center gap-2">
          <Sparkles size={16} style={{ color: "var(--color-primary)" }} />
          <h3 className="text-sm font-semibold text-slate-700">產生測試文件</h3>
        </div>

        <p className="mb-4 text-xs leading-5 text-slate-500">
          會隨機套用系統既有的分類與部門，狀態一律為「上架」；其中約 1/5 筆的到期日會落在 7 天內，方便驗證到期提醒。
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {QUICK_COUNTS.map((count) => (
            <button
              key={count}
              type="button"
              onClick={() => handleImport(count)}
              className="rounded-lg border px-4 py-2 text-sm font-semibold transition hover:bg-teal-50"
              style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
            >
              產生 {count} 筆
            </button>
          ))}

          <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-2 py-1">
            <input
              type="number"
              min={1}
              max={2000}
              value={customCount}
              onChange={(e) => setCustomCount(e.target.value)}
              className="w-20 border-none px-1 py-1 text-sm text-slate-700 outline-none"
            />
            <button
              type="button"
              onClick={() => handleImport(Number(customCount))}
              className="rounded-md px-3 py-1.5 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              自訂筆數
            </button>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={() => setClearConfirmOpen(true)}
            disabled={testCount === 0}
            className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Trash2 size={14} />
            清除所有測試資料（{testCount} 筆）
          </button>
        </div>
      </div>

      <ConfirmDialog
        open={clearConfirmOpen}
        title="清除測試資料確認"
        description={`確定要刪除全部 ${testCount} 筆測試文件嗎？只會刪除帶「測試資料」標籤的文件，不影響其他真實文件。`}
        confirmLabel="確認清除"
        destructive
        onConfirm={() => {
          onClearTestData();
          setClearConfirmOpen(false);
        }}
        onCancel={() => setClearConfirmOpen(false)}
      />
    </div>
  );
}
