import { ArrowLeft, FileText, Bell } from "lucide-react";
import { useState } from "react";
import { NotificationInbox } from "./NotificationInbox";
import { DocumentViewer } from "./DocumentViewer";
import { ActionPanel } from "./ActionPanel";

interface Props {
  onBack: () => void;
}

const DOC_DATA: Record<number, {
  title: string;
  uploader: string;
  category: string;
  uploadDate: string;
  department: string;
  version: string;
  status: string;
}> = {
  1: {
    title: "2024年度財務報告書",
    uploader: "王大明",
    category: "財務文件",
    uploadDate: "2024-05-20",
    department: "財務法務處 › 財務會計部",
    version: "v3.2",
    status: "待主管簽核",
  },
  2: {
    title: "產品開發規格書 Q2",
    uploader: "李小華",
    category: "技術文件",
    uploadDate: "2024-05-19",
    department: "軟體開發處 › 後端開發部",
    version: "v1.0",
    status: "待主管簽核",
  },
  3: {
    title: "人力資源管理辦法 v2.1",
    uploader: "陳美玲",
    category: "人事文件",
    uploadDate: "2024-05-18",
    department: "人力資源處 › 教育訓練部",
    version: "v2.1",
    status: "待主管簽核",
  },
  4: {
    title: "供應商合約範本 v4.0",
    uploader: "張志遠",
    category: "法務文件",
    uploadDate: "2024-05-17",
    department: "財務法務處 › 法務合規部",
    version: "v4.0",
    status: "已退回",
  },
  5: {
    title: "資訊安全政策文件 v5.0",
    uploader: "林建宏",
    category: "技術文件",
    uploadDate: "2024-05-16",
    department: "資訊安全處 › 安全架構部",
    version: "v5.0",
    status: "待主管簽核",
  },
  6: {
    title: "系統架構設計文件",
    uploader: "吳俊傑",
    category: "技術文件",
    uploadDate: "2024-05-15",
    department: "軟體開發處 › 前端開發部",
    version: "v2.3",
    status: "已退回",
  },
};

export function ApprovalPage({ onBack }: Props) {
  const [selectedId, setSelectedId] = useState(1);
  const doc = DOC_DATA[selectedId] ?? DOC_DATA[1];

  return (
    <div className="flex flex-col h-screen" style={{ backgroundColor: "#F3F4F6" }}>
      {/* Top header */}
      <header className="bg-white border-b border-gray-200 shadow-sm flex-shrink-0 z-20">
        <div className="flex items-center justify-between px-6 h-14">
          {/* Left */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 transition-colors text-sm group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
              返回文件管理
            </button>
            <div className="w-px h-5 bg-gray-200" />
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#3A867B" }}
              >
                <FileText size={14} className="text-white" />
              </div>
              <div>
                <span className="text-gray-800" style={{ fontSize: "14px", fontWeight: 700 }}>
                  審核決策介面
                </span>
                <span
                  className="ml-2 px-2 py-0.5 rounded text-white"
                  style={{ fontSize: "10px", fontWeight: 700, backgroundColor: "#3A867B" }}
                >
                  文件審核
                </span>
              </div>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="hidden md:flex items-center gap-1.5 text-xs text-gray-400">
            <span>首頁</span>
            <span>/</span>
            <button onClick={onBack} className="hover:underline" style={{ color: "#3A867B" }}>文件管理</button>
            <span>/</span>
            <span className="text-gray-600">審核決策</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-all relative">
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-red-500" />
            </button>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold"
              style={{ backgroundColor: "#3A867B" }}
            >
              管
            </div>
          </div>
        </div>
      </header>

      {/* 3-column body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Column 1: Inbox (25%) */}
        <div className="flex-shrink-0 overflow-hidden" style={{ width: "25%" }}>
          <NotificationInbox selectedId={selectedId} onSelect={setSelectedId} />
        </div>

        {/* Column 2: Viewer (50%) */}
        <div className="flex-1 overflow-hidden">
          <DocumentViewer title={doc.title} uploader={doc.uploader} />
        </div>

        {/* Column 3: Action panel (25%) */}
        <div className="flex-shrink-0 overflow-hidden" style={{ width: "25%" }}>
          <ActionPanel
            key={selectedId}
            meta={{
              category: doc.category,
              uploadDate: doc.uploadDate,
              department: doc.department,
              version: doc.version,
              uploader: doc.uploader,
              status: doc.status,
            }}
          />
        </div>
      </div>
    </div>
  );
}
