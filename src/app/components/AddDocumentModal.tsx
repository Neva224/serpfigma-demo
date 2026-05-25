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
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg">
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 rounded-t-2xl"
          style={{ backgroundColor: "#0D9488" }}
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
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-teal-500 transition-colors text-sm"
            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="類別" required>
              <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-gray-700 focus:outline-none focus:border-teal-500 transition-colors text-sm">
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
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-teal-500 transition-colors text-sm"
              />
            </Field>
          </div>

          <Field label="說明">
            <textarea
              rows={3}
              placeholder="請輸入文件說明..."
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-teal-500 transition-colors text-sm resize-none"
            />
          </Field>

          {/* File upload */}
          <Field label="上傳檔案">
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center cursor-pointer hover:border-teal-400 hover:bg-teal-50/30 transition-all">
              <Upload size={24} className="mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-500">拖曳檔案至此，或</p>
              <button
                className="text-sm font-medium mt-1 transition-colors"
                style={{ color: "#0D9488" }}
              >
                點擊瀏覽檔案
              </button>
              <p className="text-xs text-gray-400 mt-1">支援 PDF、Word、Excel，最大 50MB</p>
            </div>
          </Field>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm hover:bg-gray-50 transition-colors"
          >
            取消
          </button>
          <button
            className="px-5 py-2 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90"
            style={{ backgroundColor: "#0D9488" }}
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
