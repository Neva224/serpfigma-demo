import { useState } from "react";
import { Bell, Settings, ChevronRight, X, FileText } from "lucide-react";
import { DocRecord } from "./DocumentTable";

type Screen = "list" | "form" | "re-edit" | "signing-progress" | "database" | "permissions";

interface QNotification {
  id: number;
  date: string;
  sender: string;
  message: string;
  docTitle: string;
  docId: number | null;
  type: "approve-manager" | "approve-docadmin" | "re-edit" | "info";
  unread: boolean;
}

const Q_NOTIFICATIONS: QNotification[] = [
  { id: 1, date: "05/25 08:12", sender: "系統自動", message: "您有一份文件待主管簽核，請盡快處理。", docTitle: "軟體開發管理辦法", docId: 2, type: "approve-manager", unread: true },
  { id: 2, date: "05/25 09:44", sender: "系統自動", message: "員工教育訓練計畫已通過主管審核，請進行文管複審。", docTitle: "員工教育訓練計畫", docId: 7, type: "approve-docadmin", unread: true },
  { id: 3, date: "05/24 14:22", sender: "文管人員", message: "您的系統架構說明書已被退回，請修改後重新提交。", docTitle: "系統架構說明書", docId: 6, type: "re-edit", unread: false },
  { id: 4, date: "05/23 11:08", sender: "系統自動", message: "資訊安全管理政策已成功上架，感謝您的配合。", docTitle: "資訊安全管理政策", docId: 1, type: "info", unread: false },
];

const TYPE_CONFIG: Record<QNotification["type"], { label: string; bg: string; text: string }> = {
  "approve-manager":  { label: "待主管審核", bg: "#FEF3C7", text: "#B45309" },
  "approve-docadmin": { label: "待文管審核", bg: "#DBEAFE", text: "#1D4ED8" },
  "re-edit":          { label: "請修改",     bg: "#FEE2E2", text: "#DC2626" },
  "info":             { label: "通知",        bg: "#F3F4F6", text: "#6B7280" },
};

const NAV_ITEMS: { label: string; screen: Screen }[] = [
  { label: "文件管理",       screen: "list" },
  { label: "文件簽核進度查詢", screen: "signing-progress" },
  { label: "資料庫",         screen: "database" },
  { label: "系統設定",       screen: "permissions" },
];

interface Props {
  activeScreen: Screen;
  onNavigate: (s: Screen) => void;
  onOpenApproval: (docId: number, role: "manager" | "docadmin") => void;
  onReEdit: (docId: number) => void;
}

export function Header({ activeScreen, onNavigate, onOpenApproval, onReEdit }: Props) {
  const [qOpen, setQOpen] = useState(false);
  const unread = Q_NOTIFICATIONS.filter((n) => n.unread).length;

  function handleGo(n: QNotification) {
    setQOpen(false);
    if (n.type === "approve-manager" && n.docId != null) onOpenApproval(n.docId, "manager");
    else if (n.type === "approve-docadmin" && n.docId != null) onOpenApproval(n.docId, "docadmin");
    else if (n.type === "re-edit" && n.docId != null) onReEdit(n.docId);
  }

  return (
    <>
      <header className="bg-white border-b border-gray-200 z-20 flex-shrink-0" style={{ height: "52px" }}>
        <div className="flex items-center h-full px-5 gap-0">
          {/* Logo */}
          <div className="flex items-center gap-2.5 mr-6">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0D9488" }}>
              <FileText size={15} className="text-white" />
            </div>
            <div>
              <div className="text-gray-800 leading-none" style={{ fontSize: "14px", fontWeight: 800, letterSpacing: "-0.3px" }}>
                SERP<span style={{ color: "#0D9488" }}>文件管理系統</span>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-0.5 flex-1">
            {NAV_ITEMS.map(({ label, screen }) => {
              const active = activeScreen === screen;
              return (
                <button
                  key={screen}
                  onClick={() => onNavigate(screen)}
                  className="px-3.5 py-1.5 rounded-lg transition-all whitespace-nowrap"
                  style={{
                    fontSize: "12px",
                    fontWeight: active ? 700 : 400,
                    backgroundColor: active ? "#0D9488" : "transparent",
                    color: active ? "#ffffff" : "#4B5563",
                  }}
                  onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.backgroundColor = "#F3F4F6"; }}
                  onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Right: Q notification + user */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQOpen((v) => !v)}
              className="relative w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-all"
            >
              <Bell size={16} />
              {unread > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full flex items-center justify-center text-white border-2 border-white" style={{ fontSize: "8px", fontWeight: 700, backgroundColor: "#EF4444" }}>
                  {unread}
                </span>
              )}
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-all">
              <Settings size={16} />
            </button>
            <div className="flex items-center gap-2 ml-1 pl-3 border-l border-gray-100">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white" style={{ fontSize: "11px", fontWeight: 700, backgroundColor: "#0D9488" }}>管</div>
              <div className="hidden sm:block">
                <p className="text-gray-800 leading-none" style={{ fontSize: "12px", fontWeight: 600 }}>系統管理員</p>
                <p className="text-gray-400" style={{ fontSize: "10px" }}>Admin</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Q Notification panel */}
      {qOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setQOpen(false)} />
          <div
            className="fixed top-14 right-4 z-50 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
            style={{ width: "360px" }}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100" style={{ backgroundColor: "#0D9488" }}>
              <div className="flex items-center gap-2">
                <Bell size={14} className="text-white" />
                <h3 className="text-white font-bold" style={{ fontSize: "13px" }}>SERP Q 待辦通知</h3>
                {unread > 0 && (
                  <span className="bg-red-500 text-white rounded-full px-1.5 py-0.5" style={{ fontSize: "10px", fontWeight: 700 }}>{unread}</span>
                )}
              </div>
              <button onClick={() => setQOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X size={15} />
              </button>
            </div>

            <div className="overflow-y-auto" style={{ maxHeight: "420px" }}>
              {Q_NOTIFICATIONS.map((n) => {
                const tc = TYPE_CONFIG[n.type];
                const actionable = n.type !== "info";
                return (
                  <div
                    key={n.id}
                    className="border-b border-gray-50 px-4 py-3"
                    style={{ backgroundColor: n.unread ? "#F0FDFA" : "#FFFFFF" }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-400" style={{ fontSize: "10px" }}>{n.date}</span>
                      <span className="px-1.5 py-0.5 rounded font-semibold" style={{ fontSize: "10px", backgroundColor: tc.bg, color: tc.text }}>{tc.label}</span>
                    </div>
                    <p className="text-gray-600 mb-1.5 leading-snug" style={{ fontSize: "11px" }}>{n.message}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 truncate flex-1" style={{ fontSize: "11px" }}>📄 {n.docTitle}</span>
                      {actionable && (
                        <button
                          onClick={() => handleGo(n)}
                          className="flex items-center gap-0.5 ml-3 font-bold transition-colors hover:opacity-70 whitespace-nowrap"
                          style={{ fontSize: "11px", color: "#0D9488" }}
                        >
                          → GO <ChevronRight size={11} />
                        </button>
                      )}
                    </div>
                    {n.unread && (
                      <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#0D9488" }} />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 text-center text-gray-400" style={{ fontSize: "11px" }}>
              共 {Q_NOTIFICATIONS.length} 筆通知
            </div>
          </div>
        </>
      )}
    </>
  );
}
