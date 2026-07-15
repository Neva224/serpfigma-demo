import { X, Upload } from "lucide-react";

interface AddDocumentModalProps {
  onClose: () => void;
}

export function AddDocumentModal({ onClose }: AddDocumentModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="enterprise-panel relative w-full max-w-lg rounded-2xl bg-white">
        {/* Header */}
        <div
          className="flex items-center justify-between rounded-t-2xl px-6 py-4"
          style={{ background: "linear-gradient(180deg, #3A867B 0%, #2F766D 100%)" }}
        >
          <h2 className="text-white" style={{ fontSize: "16px", fontWeight: 600 }}>新增文件</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <Field label="文件名稱" required>
            <input
              type="text"
              placeholder="請輸入文件名稱"
              className="enterprise-focus-ring w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-700 placeholder:text-slate-400 transition-colors text-sm focus:outline-none"
            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="類別" required>
              <select className="enterprise-focus-ring w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-700 transition-colors text-sm focus:outline-none">
                <option value="">請選擇類別</option>
                {["財務文件", "技術文件", "人事文件", "行銷文件", "法務文件", "營運文件"].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </Field>
            <Field label="版本號">
              <input
                type="text"
                placeholder="例如：v1.0"
                className="enterprise-focus-ring w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-700 placeholder:text-slate-400 transition-colors text-sm focus:outline-none"
              />
            </Field>
          </div>

          <Field label="說明">
            <textarea
              rows={3}
              placeholder="請輸入文件說明..."
              className="enterprise-focus-ring w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-700 placeholder:text-slate-400 transition-colors text-sm resize-none focus:outline-none"
            />
          </Field>

          {/* File upload */}
          <Field label="上傳檔案">
            <div className="rounded-lg border border-dashed border-slate-300 bg-[rgba(255,255,255,0.6)] p-6 text-center transition-all hover:border-teal-300 hover:bg-[rgba(234,246,243,0.8)]">
              <Upload size={24} className="mx-auto mb-2 text-slate-400" />
              <p className="text-sm text-slate-500">拖曳檔案至此，或</p>
              <button
                className="text-sm font-medium mt-1 transition-colors"
                style={{ color: "var(--color-primary-hover)" }}
              >
                點擊瀏覽檔案
              </button>
              <p className="text-xs text-slate-400 mt-1">支援 PDF、Word、Excel，最大 50MB</p>
            </div>
          </Field>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-slate-200 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg border border-slate-300 px-5 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50"
          >
            取消
          </button>
          <button
            className="enterprise-query-button rounded-lg px-5 py-2 text-sm font-medium text-white transition-all"
          >
            儲存文件
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
