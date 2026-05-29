import { useEffect, useMemo, useState } from "react";
import { Bell, ChevronRight, FileText, Settings, X } from "lucide-react";
import { type WorkflowNotification } from "../workflow/workflowState";

type Screen = "list" | "form" | "re-edit" | "signing-progress" | "database" | "permissions";

const TYPE_LABEL: Record<WorkflowNotification["type"], string> = {
  manager_approval_pending: "待主管簽核",
  docadmin_approval_pending: "待文管簽核",
  rejected: "已退回",
  published: "上架",
  voided: "已作廢",
};

interface Props {
  activeScreen: Screen;
  onNavigate: (s: Screen) => void;
  onLogoClick: () => void;
  notifications: WorkflowNotification[];
  onNotificationClick: (notification: WorkflowNotification) => void;
  notificationPulse: number;
}

export function Header({ onNavigate, onLogoClick, notifications, onNotificationClick, notificationPulse }: Props) {
  const [panelOpen, setPanelOpen] = useState(false);
  const unreadCount = useMemo(
    () => notifications.filter((notification) => notification.unread).length,
    [notifications],
  );
  const orderedNotifications = useMemo(
    () =>
      [...notifications].sort((a, b) => {
        const timeCompare = b.createdAt.localeCompare(a.createdAt);
        if (timeCompare !== 0) return timeCompare;
        return b.id - a.id;
      }),
    [notifications],
  );

  useEffect(() => {
    if (notificationPulse > 0) {
      setPanelOpen(true);
    }
  }, [notificationPulse]);

  function handleNotificationClick(item: WorkflowNotification) {
    setPanelOpen(false);
    onNotificationClick(item);
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
                文件管理系統
              </div>
              <div className="text-[15px] text-slate-400">文件簽核與知識管理平台</div>
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
              aria-label="系統管理"
            >
              <Settings size={16} />
            </button>

            <div className="ml-1 flex items-center gap-2 border-l border-slate-200 pl-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white">
                系
              </div>
                <div className="hidden sm:block">
                  <div className="text-sm font-semibold text-slate-800">系統管理者</div>
                  <div className="text-[11px] text-slate-400">系統帳號</div>
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
                <div className="text-sm font-semibold text-white">待辦通知</div>
              </div>
              <button
                type="button"
                onClick={() => setPanelOpen(false)}
                className="text-white/70 transition hover:text-white"
                aria-label="關閉通知面板"
              >
                <X size={15} />
              </button>
            </div>

            <div className="max-h-[420px] overflow-y-auto">
              {orderedNotifications.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-slate-50 px-4 py-3"
                  style={{ backgroundColor: item.unread ? "#F0FDFA" : "#FFFFFF" }}
                >
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">
                      {item.createdAt.slice(5, 16).replace("T", " ")}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                      {TYPE_LABEL[item.type]}
                    </span>
                  </div>
                  <p className="mb-1.5 text-sm text-slate-600">{item.title}</p>
                  <div className="flex items-center justify-between gap-3">
                    <span className="min-w-0 flex-1 truncate text-sm text-slate-500">
                      簽核號：{item.signingNo}
                    </span>
                    {item.type !== "voided" && (
                      <button
                        type="button"
                        onClick={() => handleNotificationClick(item)}
                        className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-red-600 transition hover:text-red-500"
                      >
                        前往
                        <ChevronRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 bg-slate-50 px-4 py-2.5 text-center text-xs text-slate-400">
              共 {notifications.length} 筆通知
            </div>
          </div>
        </>
      )}
    </>
  );
}
