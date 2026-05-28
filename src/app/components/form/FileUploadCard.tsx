import { useRef, useState, type ChangeEvent, type DragEvent } from "react";
import { CloudUpload, File, FileSpreadsheet, FileText, Trash2, CheckCircle2 } from "lucide-react";
import { Card } from "./BasicInfoCard";
import type { WorkflowAttachment } from "../../workflow/workflowState";

interface Props {
  files: WorkflowAttachment[];
  onFilesChange: (files: WorkflowAttachment[]) => void;
}

export function FileUploadCard({ files, onFilesChange }: Props) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const maxFiles = 10;

  function handleDrag(event: DragEvent<HTMLDivElement>, active: boolean) {
    event.preventDefault();
    event.stopPropagation();
    setDragging(active);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(false);
    addFiles(Array.from(event.dataTransfer.files));
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    addFiles(Array.from(event.target.files ?? []));
    if (inputRef.current) inputRef.current.value = "";
  }

  function addFiles(raw: File[]) {
    if (files.length >= maxFiles) return;

    const newEntries: WorkflowAttachment[] = raw.slice(0, maxFiles - files.length).map((file, index) => ({
      id: `${Date.now()}-${index}`,
      name: file.name,
      size: formatSize(file.size),
      type: extension(file.name),
      uploadedAt: new Date().toISOString(),
    }));

    onFilesChange([...files, ...newEntries]);
  }

  function removeFile(id: string) {
    onFilesChange(files.filter((file) => file.id !== id));
  }

  return (
    <Card title="文件附件上傳" icon="📎">
      <div className="space-y-4">
        <div
          onDragEnter={(event) => handleDrag(event, true)}
          onDragOver={(event) => handleDrag(event, true)}
          onDragLeave={(event) => handleDrag(event, false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className="relative cursor-pointer select-none rounded-xl border-2 border-dashed transition-all"
          style={{
            borderColor: dragging ? "#0D9488" : "#D1D5DB",
            backgroundColor: dragging ? "#F0FDFA" : "#FAFAFA",
          }}
        >
          <input ref={inputRef} type="file" multiple className="hidden" onChange={handleInput} />

          <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
            <div
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors"
              style={{ backgroundColor: dragging ? "#CCFBF1" : "#F0FDFA" }}
            >
              <CloudUpload
                size={32}
                strokeWidth={1.5}
                style={{ color: dragging ? "#0D9488" : "#5EEAD4" }}
              />
            </div>
            <p className="mb-1 text-sm font-semibold text-gray-700">
              拖曳檔案到這裡，或
              <span className="text-teal-600"> 點擊上傳</span>
            </p>
            <p className="text-xs text-gray-400">
              支援單檔 200MB，最多 {maxFiles} 個檔案，格式可為 PDF、Word、Excel、PPT 或 ZIP
            </p>
          </div>

          {dragging && (
            <div
              className="absolute inset-0 flex items-center justify-center rounded-xl"
              style={{ backgroundColor: "#0D948810", borderColor: "#0D9488" }}
            >
              <p className="font-semibold text-teal-700">放開即可上傳</p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>
            已選檔案 {files.length} / {maxFiles}
          </span>
          {files.length > 0 && (
            <button
              type="button"
              onClick={() => onFilesChange([])}
              className="text-red-400 transition-colors hover:text-red-600"
            >
              清除全部
            </button>
          )}
        </div>

        {files.length > 0 && (
          <div className="space-y-2">
            {files.map((file) => (
              <FileRow key={file.id} file={file} onRemove={() => removeFile(file.id)} />
            ))}
          </div>
        )}

        {files.length === 0 && (
          <div className="py-4 text-center text-xs text-gray-400">尚未上傳附件</div>
        )}
      </div>
    </Card>
  );
}

function FileRow({ file, onRemove }: { file: WorkflowAttachment; onRemove: () => void }) {
  const Icon = fileIcon(file.type);
  const color = fileColor(file.type);

  return (
    <div className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 transition-all hover:bg-white hover:shadow-sm">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: `${color}15` }}>
        <Icon size={20} style={{ color }} strokeWidth={1.5} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-800">{file.name}</p>
        <div className="mt-0.5 flex items-center gap-2">
          <span className="text-xs text-gray-400">{file.size}</span>
          <span className="flex items-center gap-0.5 text-xs" style={{ color: "#10B981" }}>
            <CheckCircle2 size={11} />
            已上傳
          </span>
        </div>
      </div>

      <span className="flex-shrink-0 rounded bg-transparent px-2 py-0.5 font-mono text-xs uppercase" style={{ backgroundColor: `${color}15`, color }}>
        {file.type}
      </span>

      <button
        type="button"
        onClick={onRemove}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-300 opacity-0 transition-all hover:bg-red-50 hover:text-red-500 group-hover:opacity-100"
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
