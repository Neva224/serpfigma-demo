import { useState } from "react";
import { Search, Bell, ChevronRight } from "lucide-react";

interface Notification {
  id: number;
  date: string;
  sender: string;
  role: string;
  message: string;
  docTitle: string;
  type: "pending" | "returned" | "approved";
  unread: boolean;
}

const NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    date: "05/20 07:49",
    sender: "王大明",
    role: "文件提交者",
    message: "您有一份文件待簽核，請盡快處理。",
    docTitle: "2024年度財務報告書",
    type: "pending",
    unread: true,
  },
  {
    id: 2,
    date: "05/19 14:22",
    sender: "李小華",
    role: "部門主管",
    message: "產品開發規格書 Q2 已送至您的審核佇列。",
    docTitle: "產品開發規格書 Q2",
    type: "pending",
    unread: true,
  },
  {
    id: 3,
    date: "05/18 09:15",
    sender: "陳美玲",
    role: "文管人員",
    message: "人力資源管理辦法修訂版已更新，請確認。",
    docTitle: "人力資源管理辦法 v2.1",
    type: "pending",
    unread: false,
  },
  {
    id: 4,
    date: "05/17 16:40",
    sender: "張志遠",
    role: "文件提交者",
    message: "供應商合約範本第四版已上傳，待您審閱。",
    docTitle: "供應商合約範本 v4.0",
    type: "returned",
    unread: false,
  },
  {
    id: 5,
    date: "05/16 11:08",
    sender: "林建宏",
    role: "部門主管",
    message: "資訊安全政策文件需要您的最終核准。",
    docTitle: "資訊安全政策文件 v5.0",
    type: "approved",
    unread: false,
  },
  {
    id: 6,
    date: "05/15 08:30",
    sender: "吳俊傑",
    role: "文管人員",
    message: "系統架構設計文件已退回，請重新確認後提交。",
    docTitle: "系統架構設計文件",
    type: "returned",
    unread: false,
  },
];

const TYPE_LABEL: Record<Notification["type"], { text: string; color: string; bg: string }> = {
  pending: { text: "待簽核", color: "#0D9488", bg: "#F0FDFA" },
  returned: { text: "已退回", color: "#EF4444", bg: "#FEF2F2" },
  approved: { text: "已核准", color: "#10B981", bg: "#F0FDF4" },
};

interface Props {
  selectedId: number;
  onSelect: (id: number) => void;
}

export function NotificationInbox({ selectedId, onSelect }: Props) {
  const [query, setQuery] = useState("");
  const unreadCount = NOTIFICATIONS.filter((n) => n.unread).length;

  const filtered = NOTIFICATIONS.filter(
    (n) =>
      n.docTitle.includes(query) ||
      n.sender.includes(query) ||
      n.message.includes(query)
  );

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Header */}
      <div className="px-4 pt-5 pb-3 border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Bell size={16} style={{ color: "#0D9488" }} />
            <h2 className="text-gray-800" style={{ fontSize: "14px", fontWeight: 700 }}>
              SERP Q 待辦通知
            </h2>
          </div>
          {unreadCount > 0 && (
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full text-white"
              style={{ fontSize: "10px", fontWeight: 700, backgroundColor: "#EF4444" }}
            >
              {unreadCount}
            </span>
          )}
        </div>
        {/* Search */}
        <div className="relative">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="搜尋通知..."
            className="w-full pl-8 pr-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-teal-400 transition-all"
            style={{ fontSize: "12px" }}
          />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {filtered.map((n) => {
          const isSelected = n.id === selectedId;
          const tc = TYPE_LABEL[n.type];
          return (
            <button
              key={n.id}
              onClick={() => onSelect(n.id)}
              className="w-full text-left px-4 py-3.5 border-b border-gray-50 transition-all relative"
              style={{
                backgroundColor: isSelected ? "#F0FDFA" : "transparent",
              }}
              onMouseEnter={(e) => {
                if (!isSelected) (e.currentTarget as HTMLElement).style.backgroundColor = "#F9FAFB";
              }}
              onMouseLeave={(e) => {
                if (!isSelected) (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              {/* Selected indicator */}
              {isSelected && (
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 rounded-r"
                  style={{ backgroundColor: "#0D9488" }}
                />
              )}

              {/* Top row */}
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-400" style={{ fontSize: "11px" }}>{n.date}</span>
                <span
                  className="px-1.5 py-0.5 rounded"
                  style={{ fontSize: "10px", fontWeight: 600, color: tc.color, backgroundColor: tc.bg }}
                >
                  {tc.text}
                </span>
              </div>

              {/* Sender */}
              <div className="flex items-center gap-1.5 mb-1.5">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ fontSize: "9px", fontWeight: 700, backgroundColor: "#0D9488" }}
                >
                  {n.sender[0]}
                </div>
                <span className="text-gray-700" style={{ fontSize: "12px", fontWeight: 600 }}>{n.sender}</span>
                <span className="text-gray-400" style={{ fontSize: "10px" }}>· {n.role}</span>
                {n.unread && (
                  <span className="ml-auto w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#0D9488" }} />
                )}
              </div>

              {/* Message */}
              <p className="text-gray-500 leading-relaxed mb-2" style={{ fontSize: "11px" }}>
                {n.message}
              </p>

              {/* Doc title + GO */}
              <div className="flex items-center justify-between">
                <span
                  className="text-gray-600 truncate flex-1 mr-2"
                  style={{ fontSize: "11px", fontWeight: 500 }}
                >
                  📄 {n.docTitle}
                </span>
                <span
                  className="flex items-center gap-0.5 flex-shrink-0 transition-colors"
                  style={{ fontSize: "11px", fontWeight: 700, color: "#0D9488" }}
                >
                  GO <ChevronRight size={11} />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer count */}
      <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
        <p className="text-gray-400 text-center" style={{ fontSize: "11px" }}>
          共 {filtered.length} 筆待辦通知
        </p>
      </div>
    </div>
  );
}
