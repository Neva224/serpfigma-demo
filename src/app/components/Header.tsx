import { useMemo, useState } from "react";
import { Bell, ChevronRight, FileText, Settings, X } from "lucide-react";
import { type DocRecord } from "./DocumentTable";

type Screen = "list" | "form" | "re-edit" | "signing-progress" | "database" | "permissions";

interface NotificationItem {
  id: number;
  date: string;
  sender: string;
  message: string;
  docTitle: string;
  docId: number | null;
  type: "approve-manager" | "approve-docadmin" | "re-edit" | "info";
  unread: boolean;
}

const NOTIFICATIONS: NotificationItem[] = [
  {
    id: 1,
    date: "05/25 08:12",
    sender: "系統通知",
    message: "有一筆文件待主管簽核，請盡快處理。",
    docTitle: "內部公版契約彙整",
    docId: 2,
    type: "approve-manager",
    unread: true,
  },
  {
    id: 2,
    date: "05/25 09:44",
    sender: "系統通知",
    message: "有一筆文件待文管審核，請盡快處理。",
    docTitle: "集團新人訓課綱",
    docId: 7,
    type: "approve-docadmin",
    unread: true,
  },
  {
    id: 3,
    date: "05/24 14:22",
    sender: "文件管理",
    message: "文件已退回，請重新編輯後再送出。",
    docTitle: "作業流程修訂版",
    docId: 6,
    type: "re-edit",
    unread: false,
  },
  {
    id: 4,
    date: "05/23 11:08",
    sender: "系統資訊",
    message: "知識樹資料已同步更新。",
    docTitle: "知識樹分類",
    docId: null,
    type: "info",
    unread: false,
  },
];

const TYPE_LABEL: Record<NotificationItem["type"], string> = {
  "approve-manager": "待主管簽核",
  "approve-docadmin": "待文管審核",
  "re-edit": "重新編輯",
  info: "資訊",
};

interface Props {
  activeScreen: Screen;
  onNavigate: (s: Screen) => void;
  onLogoClick: () => void;
  onOpenApproval: (docId: number, role: "manager" | "docadmin") => void;
  onReEdit: (docId: number) => void;
}

export function Header({ onNavigate, onLogoClick, onOpenApproval, onReEdit }: Props) {
  const [panelOpen, setPanelOpen] = useState(false);
  const unreadCount = useMemo(
    () => NOTIFICATIONS.filter((notification) => notification.unread).length,
    [],
  );

  function handleNotificationClick(item: NotificationItem) {
    setPanelOpen(false);
    if (item.type === "approve-manager" && item.docId != null) {
      onOpenApproval(item.docId, "manager");
    } else if (item.type === "approve-docadmin" && item.docId != null) {
      onOpenApproval(item.docId, "docadmin");
    } else if (item.type === "re-edit" && item.docId != null) {
      onReEdit(item.docId);
    }
  }

  return (
    <>
      <header className="z-20 flex h-[80px] flex-shrink-0 border-b border-slate-200 bg-white">
        <div className="flex h-full flex-1 items-center px-6">
          <button
            type="button"
            onClick={onLogoClick}
            aria-label="返回首頁"
            className="flex cursor-pointer items-center gap-4 text-left"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 shadow-sm">
              <FileText size={22} className="text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-[28px] font-extrabold tracking-tight text-slate-900">
                SERP文件管理系統
              </div>
              <div className="text-[15px] text-slate-400">文件管理平台</div>
            </div>
          </button>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPanelOpen((current) => !current)}
              className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100"
              aria-label="通知"
            >
              <Bell size={16} />
              {unreadCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                  {unreadCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => onNavigate("permissions")}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100"
              aria-label="系統設定"
            >
              <Settings size={16} />
            </button>

            <div className="ml-1 flex items-center gap-2 border-l border-slate-200 pl-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white">
                管
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-slate-800">系統管理員</div>
                <div className="text-[11px] text-slate-400">Admin</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {panelOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setPanelOpen(false)} />
          <div className="fixed right-4 top-14 z-50 w-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 bg-teal-600 px-4 py-3">
              <div className="flex items-center gap-2">
                <Bell size={14} className="text-white" />
                <div className="text-sm font-semibold text-white">通知中心</div>
              </div>
              <button
                type="button"
                onClick={() => setPanelOpen(false)}
                className="text-white/70 transition hover:text-white"
                aria-label="關閉通知"
              >
                <X size={15} />
              </button>
            </div>

            <div className="max-h-[420px] overflow-y-auto">
              {NOTIFICATIONS.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-slate-50 px-4 py-3"
                  style={{ backgroundColor: item.unread ? "#F0FDFA" : "#FFFFFF" }}
                >
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">{item.date}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                      {TYPE_LABEL[item.type]}
                    </span>
                  </div>
                  <p className="mb-1.5 text-sm text-slate-600">{item.message}</p>
                  <div className="flex items-center justify-between gap-3">
                    <span className="min-w-0 flex-1 truncate text-sm text-slate-500">
                      相關文件：{item.docTitle}
                    </span>
                    {item.type !== "info" && (
                      <button
                        type="button"
                        onClick={() => handleNotificationClick(item)}
                        className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-teal-600 transition hover:text-teal-500"
                      >
                        前往處理
                        <ChevronRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 bg-slate-50 px-4 py-2.5 text-center text-xs text-slate-400">
              共 {NOTIFICATIONS.length} 筆通知
            </div>
          </div>
        </>
      )}
    </>
  );
}
