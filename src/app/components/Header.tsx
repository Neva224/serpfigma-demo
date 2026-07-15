import { useEffect, useMemo, useState } from "react";
import { Bell, ChevronDown, ChevronRight, FileText, LogOut, Settings, UserCog, X } from "lucide-react";
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
  userName: string;
  roleLabel: string;
  onLogout: () => void;
}

export function Header({
  onNavigate,
  onLogoClick,
  notifications,
  onNotificationClick,
  notificationPulse,
  userName,
  roleLabel,
  onLogout,
}: Props) {
  const [panelOpen, setPanelOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
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
      <header className="brand-teal-bar z-20 flex h-[72px] flex-shrink-0 border-b brand-teal-border shadow-[0_1px_0_rgba(255,255,255,0.06)]">
        <div className="flex h-full flex-1 items-center px-6">
          <button
            type="button"
            onClick={onLogoClick}
            aria-label="返回首頁"
            className="flex cursor-pointer items-center gap-4 text-left"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/12 shadow-sm ring-1 ring-white/10">
              <FileText size={22} className="text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-[24px] font-extrabold tracking-[0.04em] text-white">
                SERP 文件管理系統
              </div>
              <div className="mt-0.5 text-[13px] font-bold leading-5 tracking-[0.03em] text-white/88">
                文件管理系統
              </div>
            </div>
          </button>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPanelOpen((current) => !current)}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:bg-white/10"
              aria-label="通知"
            >
              <Bell size={20} />
              {unreadCount > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                  {unreadCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => onNavigate("permissions")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:bg-white/10"
              aria-label="系統管理"
            >
              <Settings size={20} />
            </button>

            <div className="relative ml-1 border-l border-white/18 pl-3">
              <button
                type="button"
                onClick={() => setUserMenuOpen((current) => !current)}
                className="flex items-center gap-2 rounded-md py-1 pl-1 pr-2 transition hover:bg-white/10"
                aria-label="使用者選單"
                aria-expanded={userMenuOpen}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/12 text-xs font-bold text-white ring-1 ring-white/10">
                  <UserCog size={16} />
                </div>
                <div className="hidden text-left sm:block">
                  <div className="text-sm font-bold text-white">{userName}</div>
                  <div className="text-[11px] font-semibold text-white/80">{roleLabel}</div>
                </div>
                <ChevronDown size={15} className="text-white/80" />
              </button>

              {userMenuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setUserMenuOpen(false)} />
                  <div className="absolute right-0 top-12 z-50 w-[220px] overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/10">
                    <div className="border-b border-slate-100 px-4 py-3">
                      <div className="text-sm font-bold text-slate-700">{userName}</div>
                      <div className="mt-0.5 text-[11px] text-slate-400">目前角色：{roleLabel}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setUserMenuOpen(false);
                        onLogout();
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-slate-700 transition hover:bg-slate-50"
                    >
                      <LogOut size={15} className="text-slate-400" />
                      登出
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {panelOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setPanelOpen(false)} />
          <div className="fixed right-4 top-14 z-50 w-[360px] overflow-hidden rounded-xl enterprise-panel-strong bg-white shadow-2xl">
            <div className="brand-teal-bar flex items-center justify-between border-b brand-teal-border px-4 py-3">
              <div className="flex items-center gap-2">
                <Bell size={16} className="text-white" />
                <div className="text-sm font-bold text-white">Q留言</div>
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
                  className="border-b border-slate-100 px-4 py-3"
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

            <div className="border-t border-slate-100 bg-slate-50 px-4 py-2.5 text-center text-xs text-slate-600">
              共 {notifications.length} 筆通知
            </div>
          </div>
        </>
      )}
    </>
  );
}
