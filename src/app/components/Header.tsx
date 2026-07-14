import { useEffect, useMemo, useState } from "react";
import { Bell, ChevronDown, ChevronRight, FileText, Settings, UserCog, X } from "lucide-react";
import {
  WORKFLOW_ROLES,
  type WorkflowNotification,
  type WorkflowRole,
} from "../workflow/workflowState";

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
  roles: WorkflowRole[];
  onRolesChange: (roles: WorkflowRole[]) => void;
  empId: string;
  onEmpIdChange: (empId: string) => void;
}

export function Header({
  onNavigate,
  onLogoClick,
  notifications,
  onNotificationClick,
  notificationPulse,
  roles,
  onRolesChange,
  empId,
  onEmpIdChange,
}: Props) {
  const [panelOpen, setPanelOpen] = useState(false);
  const [rolePanelOpen, setRolePanelOpen] = useState(false);
  const activeRoleLabel = useMemo(() => {
    const labels = WORKFLOW_ROLES.filter((role) => roles.includes(role.value)).map((role) => role.label);
    if (labels.length === 0) return "未設定角色";
    if (labels.length === WORKFLOW_ROLES.length) return "全部角色";
    if (labels.length <= 2) return labels.join("、");
    return `${labels[0]} 等 ${labels.length} 種角色`;
  }, [roles]);

  function toggleRole(role: WorkflowRole) {
    const next = roles.includes(role) ? roles.filter((item) => item !== role) : [...roles, role];
    // 至少保留一個角色，避免整個系統無任何可用功能
    if (next.length === 0) return;
    onRolesChange(next);
  }
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
                onClick={() => setRolePanelOpen((current) => !current)}
                className="flex items-center gap-2 rounded-md py-1 pl-1 pr-2 transition hover:bg-white/10"
                aria-label="切換角色"
                aria-expanded={rolePanelOpen}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/12 text-xs font-bold text-white ring-1 ring-white/10">
                  <UserCog size={16} />
                </div>
                <div className="hidden text-left sm:block">
                  <div className="text-sm font-bold text-white">系統示範帳號</div>
                  <div className="text-[11px] font-semibold text-white/80">{activeRoleLabel}</div>
                </div>
                <ChevronDown size={15} className="text-white/80" />
              </button>

              {rolePanelOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setRolePanelOpen(false)} />
                  <div className="absolute right-0 top-12 z-50 w-[248px] overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/10">
                    <div className="border-b border-slate-100 px-4 py-2.5">
                      <div className="text-sm font-bold text-slate-700">切換角色（示範用）</div>
                      <div className="mt-0.5 text-[11px] text-slate-400">
                        正式環境無登入系統，暫以手動切換模擬權限
                      </div>
                    </div>
                    <div className="py-1">
                      {WORKFLOW_ROLES.map((role) => {
                        const checked = roles.includes(role.value);
                        return (
                          <label
                            key={role.value}
                            className="flex cursor-pointer items-center gap-3 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleRole(role.value)}
                              className="h-4 w-4 accent-teal-600"
                            />
                            <span className="font-medium">{role.label}</span>
                          </label>
                        );
                      })}
                    </div>
                    <div className="border-t border-slate-100 px-4 py-3">
                      <div className="text-sm font-bold text-slate-700">模擬登入身分（員編）</div>
                      <div className="mb-2 mt-0.5 text-[11px] text-slate-400">
                        主管簽核時，只有員編＝文件「指定簽核主管」者才可簽
                      </div>
                      <input
                        type="text"
                        value={empId}
                        onChange={(e) => onEmpIdChange(e.target.value.trim())}
                        placeholder="例如 000001（留空＝未登入）"
                        className="w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm text-slate-700 focus:border-teal-500 focus:outline-none"
                      />
                    </div>
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
