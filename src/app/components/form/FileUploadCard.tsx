import { useState, useRef, DragEvent } from "react";
import { CloudUpload, FileText, FileSpreadsheet, File, Trash2, CheckCircle2 } from "lucide-react";
import { Card } from "./BasicInfoCard";

interface UploadedFile {
  id: number;
  name: string;
  size: string;
  type: string;
  progress: number;
}

const SAMPLE_FILES: UploadedFile[] = [
  { id: 1, name: "2024年度財務報告書_最終版.pdf", size: "3.2 MB", type: "pdf", progress: 100 },
];

export function FileUploadCard() {
  const [files, setFiles] = useState<UploadedFile[]>(SAMPLE_FILES);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const MAX_FILES = 10;

  function handleDrag(e: DragEvent<HTMLDivElement>, active: boolean) {
    e.preventDefault();
    e.stopPropagation();
    setDragging(active);
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(false);
    const dropped = Array.from(e.dataTransfer.files);
    addFiles(dropped);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? []);
    addFiles(selected);
    if (inputRef.current) inputRef.current.value = "";
  }

  function addFiles(raw: File[]) {
    if (files.length >= MAX_FILES) return;
    const newEntries: UploadedFile[] = raw.slice(0, MAX_FILES - files.length).map((f, i) => ({
      id: Date.now() + i,
      name: f.name,
      size: formatSize(f.size),
      type: extension(f.name),
      progress: 100,
    }));
    setFiles((prev) => [...prev, ...newEntries]);
  }

  function removeFile(id: number) {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  }

  return (
    <Card title="附件上傳" icon="📎">
      <div className="space-y-4">
        {/* Drop zone */}
        <div
          onDragEnter={(e) => handleDrag(e, true)}
          onDragOver={(e) => handleDrag(e, true)}
          onDragLeave={(e) => handleDrag(e, false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className="relative rounded-xl border-2 border-dashed transition-all cursor-pointer select-none"
          style={{
            borderColor: dragging ? "#0D9488" : "#D1D5DB",
            backgroundColor: dragging ? "#F0FDFA" : "#FAFAFA",
          }}
        >
          <input
            ref={inputRef}
            type="file"
            multiple
            className="hidden"
            onChange={handleInput}
          />

          <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors"
              style={{ backgroundColor: dragging ? "#CCFBF1" : "#F0FDFA" }}
            >
              <CloudUpload
                size={32}
                strokeWidth={1.5}
                style={{ color: dragging ? "#0D9488" : "#5EEAD4" }}
              />
            </div>
            <p className="text-gray-700 mb-1" style={{ fontSize: "14px", fontWeight: 600 }}>
              拖曳檔案至此，或{" "}
              <span style={{ color: "#0D9488" }}>點擊從本機上傳</span>
            </p>
            <p className="text-gray-400 text-xs">
              單檔上限 200MB，最多 {MAX_FILES} 筆 · 支援 PDF、Word、Excel、PPT、ZIP
            </p>
          </div>

          {dragging && (
            <div
              className="absolute inset-0 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#0D948810", borderColor: "#0D9488" }}
            >
              <p className="text-teal-700 font-semibold">放開以上傳檔案</p>
            </div>
          )}
        </div>

        {/* File counter */}
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>已上傳 {files.length} / {MAX_FILES} 筆</span>
          {files.length > 0 && (
            <button
              onClick={() => setFiles([])}
              className="text-red-400 hover:text-red-600 transition-colors"
            >
              清除全部
            </button>
          )}
        </div>

        {/* File list */}
        {files.length > 0 && (
          <div className="space-y-2">
            {files.map((file) => (
              <FileRow key={file.id} file={file} onRemove={() => removeFile(file.id)} />
            ))}
          </div>
        )}

        {/* Empty state hint */}
        {files.length === 0 && (
          <div className="text-center py-4 text-gray-400 text-xs">
            尚未上傳任何附件
          </div>
        )}
      </div>
    </Card>
  );
}

function FileRow({ file, onRemove }: { file: UploadedFile; onRemove: () => void }) {
  const Icon = fileIcon(file.type);
  const color = fileColor(file.type);

  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-sm transition-all group">
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon size={20} style={{ color }} strokeWidth={1.5} />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-gray-800 text-sm truncate" style={{ fontWeight: 500 }}>
          {file.name}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-gray-400 text-xs">{file.size}</span>
          {file.progress === 100 && (
            <span className="flex items-center gap-0.5 text-xs" style={{ color: "#10B981" }}>
              <CheckCircle2 size={11} />
              上傳完成
            </span>
          )}
        </div>
      </div>

      {/* Type badge */}
      <span
        className="text-xs px-2 py-0.5 rounded font-mono uppercase flex-shrink-0"
        style={{ backgroundColor: `${color}15`, color }}
      >
        {file.type}
      </span>

      {/* Delete */}
      <button
        onClick={onRemove}
        className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
      >
        <Trash2 size={15} />
      </button>
    </div>
  );
}

function fileIcon(ext: string) {
  if (["xlsx", "csv", "xls"].includes(ext)) return FileSpreadsheet;
  if (["pdf", "doc", "docx", "txt"].includes(ext)) return FileText;
  return File;
}

function fileColor(ext: string) {
  if (ext === "pdf") return "#EF4444";
  if (["xlsx", "xls", "csv"].includes(ext)) return "#10B981";
  if (["doc", "docx"].includes(ext)) return "#3B82F6";
  return "#8B5CF6";
}

function extension(filename: string) {
  return filename.split(".").pop()?.toLowerCase() ?? "file";
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
