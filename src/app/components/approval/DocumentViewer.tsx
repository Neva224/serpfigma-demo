import { useState } from "react";
import { ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize2, Download, Printer } from "lucide-react";

interface Props {
  title: string;
  uploader: string;
}

export function DocumentViewer({ title, uploader }: Props) {
  const [zoom, setZoom] = useState(100);
  const [page, setPage] = useState(1);
  const TOTAL = 5;

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: "#2D3748" }}>
      {/* Viewer header */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b flex-shrink-0"
        style={{ backgroundColor: "#1A202C", borderColor: "#4A5568" }}
      >
        <div className="flex-1 min-w-0">
          <p className="text-white truncate" style={{ fontSize: "13px", fontWeight: 600 }}>
            {title}
          </p>
          <p className="text-gray-400" style={{ fontSize: "11px" }}>
            提交者：{uploader}
          </p>
        </div>
        <div className="flex items-center gap-1 ml-4">
          <ViewerIconBtn icon={<Download size={14} />} title="下載" />
          <ViewerIconBtn icon={<Printer size={14} />} title="列印" />
          <ViewerIconBtn icon={<Maximize2 size={14} />} title="全螢幕" />
        </div>
      </div>

      {/* PDF canvas area */}
      <div className="flex-1 overflow-auto flex items-start justify-center py-8 px-4">
        <div
          className="relative bg-white rounded shadow-2xl transition-all"
          style={{
            width: `${Math.min(zoom, 130) * 4.8}px`,
            minWidth: "360px",
            maxWidth: "680px",
          }}
        >
          {/* Page content wireframe */}
          <div className="p-8 space-y-5">
            {/* Document header block */}
            <div className="flex items-start justify-between pb-5 border-b-2" style={{ borderColor: "#3A867B" }}>
              <div>
                <div className="h-4 w-48 rounded mb-2" style={{ backgroundColor: "#1A202C" }} />
                <div className="h-2.5 w-32 rounded" style={{ backgroundColor: "#A0AEC0" }} />
              </div>
              <div className="text-right space-y-1">
                <div className="h-2.5 w-24 rounded ml-auto" style={{ backgroundColor: "#CBD5E0" }} />
                <div className="h-2.5 w-20 rounded ml-auto" style={{ backgroundColor: "#CBD5E0" }} />
                <div className="h-2.5 w-28 rounded ml-auto" style={{ backgroundColor: "#CBD5E0" }} />
              </div>
            </div>

            {/* Section title */}
            <div>
              <div className="h-3 w-36 rounded mb-3" style={{ backgroundColor: "#4A5568" }} />
              <LineBlock widths={["full", "full", "4/5", "full", "3/4"]} />
            </div>

            {/* Table wireframe */}
            <div className="border border-gray-200 rounded overflow-hidden">
              <div className="grid grid-cols-4 gap-px" style={{ backgroundColor: "#E2E8F0" }}>
                {["項目", "說明", "金額", "備註"].map((h) => (
                  <div key={h} className="px-3 py-2 text-xs font-semibold text-white" style={{ backgroundColor: "#3A867B" }}>
                    {h}
                  </div>
                ))}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="px-3 py-2.5"
                    style={{ backgroundColor: Math.floor(i / 4) % 2 === 0 ? "#F7FAFC" : "#FFFFFF" }}
                  >
                    <div
                      className="h-2 rounded"
                      style={{
                        backgroundColor: "#E2E8F0",
                        width: `${50 + Math.random() * 40}%`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Second section */}
            <div>
              <div className="h-3 w-28 rounded mb-3" style={{ backgroundColor: "#4A5568" }} />
              <LineBlock widths={["full", "full", "5/6", "full", "2/3", "full", "4/5"]} />
            </div>

            {/* Chart placeholder */}
            <div
              className="rounded-lg p-4 flex items-end justify-center gap-2"
              style={{ backgroundColor: "#F7FAFC", height: "100px" }}
            >
              {[60, 85, 45, 95, 70, 55, 80].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i === 4 ? "#3A867B" : "#CBD5E0",
                    opacity: 0.7,
                  }}
                />
              ))}
            </div>

            {/* Third section */}
            <div>
              <div className="h-3 w-40 rounded mb-3" style={{ backgroundColor: "#4A5568" }} />
              <LineBlock widths={["full", "3/4", "full", "5/6"]} />
            </div>

            {/* Signature row */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              {["擬稿", "審核", "核准"].map((label) => (
                <div key={label} className="flex-1 border border-dashed border-gray-300 rounded p-3 text-center">
                  <p className="text-xs text-gray-500 mb-4">{label}</p>
                  <div className="h-6" />
                  <div className="h-px bg-gray-200 mt-3" />
                  <p className="text-xs text-gray-400 mt-1">簽名 / 日期</p>
                </div>
              ))}
            </div>

            {/* Page number */}
            <p className="text-center text-gray-400" style={{ fontSize: "10px" }}>
              第 {page} 頁，共 {TOTAL} 頁
            </p>
          </div>
        </div>
      </div>

      {/* Bottom floating toolbar */}
      <div className="flex-shrink-0 flex justify-center pb-5 pointer-events-none">
        <div
          className="inline-flex items-center gap-1 px-3 py-2 rounded-full shadow-xl pointer-events-auto"
          style={{ backgroundColor: "#1A202C", border: "1px solid #4A5568" }}
        >
          {/* Page nav */}
          <ToolbarBtn
            icon={<ChevronLeft size={14} />}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          />
          <span className="text-white px-2" style={{ fontSize: "12px", fontWeight: 500 }}>
            {page} / {TOTAL}
          </span>
          <ToolbarBtn
            icon={<ChevronRight size={14} />}
            onClick={() => setPage((p) => Math.min(TOTAL, p + 1))}
            disabled={page === TOTAL}
          />

          <div className="w-px h-5 mx-1" style={{ backgroundColor: "#4A5568" }} />

          {/* Zoom */}
          <ToolbarBtn icon={<ZoomOut size={14} />} onClick={() => setZoom((z) => Math.max(50, z - 10))} />
          <span className="text-gray-400 w-12 text-center" style={{ fontSize: "11px" }}>
            {zoom}%
          </span>
          <ToolbarBtn icon={<ZoomIn size={14} />} onClick={() => setZoom((z) => Math.min(150, z + 10))} />
        </div>
      </div>
    </div>
  );
}

function LineBlock({ widths }: { widths: string[] }) {
  const wMap: Record<string, string> = {
    full: "100%", "4/5": "80%", "3/4": "75%", "5/6": "83%", "2/3": "66%",
  };
  return (
    <div className="space-y-2">
      {widths.map((w, i) => (
        <div
          key={i}
          className="h-2 rounded"
          style={{ width: wMap[w] ?? w, backgroundColor: "#E2E8F0" }}
        />
      ))}
    </div>
  );
}

function ViewerIconBtn({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <button
      title={title}
      className="w-7 h-7 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
    >
      {icon}
    </button>
  );
}

function ToolbarBtn({
  icon,
  onClick,
  disabled = false,
}: {
  icon: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-7 h-7 rounded flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
    >
      {icon}
    </button>
  );
}
