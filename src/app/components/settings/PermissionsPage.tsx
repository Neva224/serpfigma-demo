import { useState } from "react";
import { Check, X, Edit2, Shield, User } from "lucide-react";

type Role = "系統管理員" | "文管人員" | "部門主管" | "一般使用者" | "唯讀使用者";

interface Permission {
  action: string;
  category: string;
  roles: Record<Role, boolean>;
}

const ROLES: Role[] = ["系統管理員", "文管人員", "部門主管", "一般使用者", "唯讀使用者"];

const ROLE_COLORS: Record<Role, { bg: string; text: string }> = {
  系統管理員: { bg: "#7C3AED", text: "#ffffff" },
  文管人員:   { bg: "#3A867B", text: "#ffffff" },
  部門主管:   { bg: "#1D4ED8", text: "#ffffff" },
  一般使用者: { bg: "#6B7280", text: "#ffffff" },
  唯讀使用者: { bg: "#D1D5DB", text: "#374151" },
};

const PERMISSIONS: Permission[] = [
  { action: "新增文件",    category: "文件操作", roles: { 系統管理員: true,  文管人員: true,  部門主管: false, 一般使用者: true,  唯讀使用者: false } },
  { action: "編輯文件",    category: "文件操作", roles: { 系統管理員: true,  文管人員: true,  部門主管: false, 一般使用者: true,  唯讀使用者: false } },
  { action: "刪除文件",    category: "文件操作", roles: { 系統管理員: true,  文管人員: true,  部門主管: false, 一般使用者: false, 唯讀使用者: false } },
  { action: "下載文件",    category: "文件操作", roles: { 系統管理員: true,  文管人員: true,  部門主管: true,  一般使用者: true,  唯讀使用者: true  } },
  { action: "查看文件",    category: "文件操作", roles: { 系統管理員: true,  文管人員: true,  部門主管: true,  一般使用者: true,  唯讀使用者: true  } },
  { action: "文件移轉",    category: "流程操作", roles: { 系統管理員: true,  文管人員: true,  部門主管: false, 一般使用者: false, 唯讀使用者: false } },
  { action: "文件上架",    category: "流程操作", roles: { 系統管理員: true,  文管人員: true,  部門主管: false, 一般使用者: false, 唯讀使用者: false } },
  { action: "文件作廢",    category: "流程操作", roles: { 系統管理員: true,  文管人員: true,  部門主管: false, 一般使用者: false, 唯讀使用者: false } },
  { action: "主管簽核",    category: "簽核操作", roles: { 系統管理員: true,  文管人員: false, 部門主管: true,  一般使用者: false, 唯讀使用者: false } },
  { action: "文管審核",    category: "簽核操作", roles: { 系統管理員: true,  文管人員: true,  部門主管: false, 一般使用者: false, 唯讀使用者: false } },
  { action: "退回文件",    category: "簽核操作", roles: { 系統管理員: true,  文管人員: true,  部門主管: true,  一般使用者: false, 唯讀使用者: false } },
  { action: "查看簽核紀錄", category: "查詢操作", roles: { 系統管理員: true,  文管人員: true,  部門主管: true,  一般使用者: true,  唯讀使用者: true  } },
  { action: "查詢簽核進度", category: "查詢操作", roles: { 系統管理員: true,  文管人員: true,  部門主管: true,  一般使用者: true,  唯讀使用者: true  } },
  { action: "知識樹管理",  category: "系統設定", roles: { 系統管理員: true,  文管人員: true,  部門主管: false, 一般使用者: false, 唯讀使用者: false } },
  { action: "人員權限設定", category: "系統設定", roles: { 系統管理員: true,  文管人員: false, 部門主管: false, 一般使用者: false, 唯讀使用者: false } },
  { action: "系統參數設定", category: "系統設定", roles: { 系統管理員: true,  文管人員: false, 部門主管: false, 一般使用者: false, 唯讀使用者: false } },
];

const CATEGORIES = [...new Set(PERMISSIONS.map((p) => p.category))];

interface Props {
  onBack: () => void;
  embedded?: boolean;
}

export function PermissionsPage({ onBack, embedded = false }: Props) {
  const [perms, setPerms] = useState(PERMISSIONS);
  const [editing, setEditing] = useState(false);
  const [activeRole, setActiveRole] = useState<Role | "all">("all");

  function toggle(actionIdx: number, role: Role) {
    if (!editing) return;
    setPerms((prev) => prev.map((p, i) =>
      i === actionIdx ? { ...p, roles: { ...p.roles, [role]: !p.roles[role] } } : p
    ));
  }

  const filteredPerms = activeRole === "all" ? perms : perms;

  return (
    <div
      className={embedded ? "h-full overflow-y-auto px-6 py-5" : "flex-1 overflow-y-auto px-6 py-5"}
      style={{ background: "linear-gradient(180deg, #F4F8F7 0%, #EEF5F3 100%)" }}
    >
      <div className="enterprise-panel mb-5 flex items-start justify-between gap-4 overflow-hidden rounded-xl px-5 py-4">
        <div>
          <div className="mb-1 flex items-center gap-1.5 text-xs text-gray-400">
            <button type="button" onClick={onBack} className="hover:text-gray-600">
              首頁
            </button>
            <span>/</span>
            <button type="button" onClick={onBack} className="hover:text-gray-600">
              文件管理
            </button>
            <span>/</span>
            <span>系統設定 — 人員權限管理</span>
          </div>
          <h2 className="text-[17px] font-bold text-slate-800">系統設定 — 人員權限管理</h2>
          <p className="mt-0.5 text-sm text-slate-500">設定各角色對文件相關操作的權限</p>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            本頁顯示目前角色權限設定。打勾代表可使用該功能，打叉代表不可使用。
          </p>
        </div>
      </div>

      {/* Role cards */}
      <div className="grid grid-cols-5 gap-3 mb-5">
        {ROLES.map((role) => {
          const rc = ROLE_COLORS[role];
          const count = perms.filter((p) => p.roles[role]).length;
          return (
            <div key={role} className="enterprise-panel flex flex-col items-center gap-2 rounded-xl p-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: rc.bg }}>
                {role === "系統管理員" ? <Shield size={18} className="text-white" /> : <User size={18} style={{ color: rc.text }} />}
              </div>
              <p className="text-gray-800 text-center leading-tight" style={{ fontSize: "12px", fontWeight: 700 }}>{role}</p>
              <p className="text-gray-400 text-center" style={{ fontSize: "11px" }}>
                {count} / {perms.length} 項權限
              </p>
              <div className="w-full rounded-full bg-slate-100 h-1.5">
                <div className="h-1.5 rounded-full" style={{ width: `${(count / perms.length) * 100}%`, backgroundColor: rc.bg }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Permission matrix */}
      <div className="enterprise-panel overflow-hidden rounded-xl">
        <div className="enterprise-section-header flex items-center justify-between px-5 py-3">
          <div className="space-y-1.5">
            <h3 className="font-semibold text-slate-700" style={{ fontSize: "13px" }}>權限設定矩陣</h3>
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 font-semibold text-teal-700">
                <Check size={12} aria-hidden="true" />
                可使用
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 font-semibold text-gray-600">
                <X size={12} aria-hidden="true" />
                不可使用
              </span>
              <span className="text-slate-400">打勾代表可使用該功能；打叉代表不可使用。</span>
            </div>
          </div>
          <button
            onClick={() => setEditing((v) => !v)}
            className="flex items-center gap-1.5 rounded-lg border px-4 py-1.5 transition-all"
            style={{
              fontSize: "12px", fontWeight: 600,
              borderColor: editing ? "#0F4F4A" : "#CBD5E1",
              backgroundColor: editing ? "#E6FFFB" : "#FFFFFF",
              color: editing ? "#0F4F4A" : "#64748B",
            }}
          >
            <Edit2 size={12} />
            {editing ? "儲存變更" : "編輯權限"}
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full" style={{ fontSize: "12px" }}>
            <thead>
              <tr style={{ backgroundColor: "#0F4F4A" }}>
                <th className="whitespace-nowrap px-5 py-2.5 text-left font-semibold text-white" style={{ width: "100px" }}>分類</th>
                <th className="px-5 py-2.5 text-left font-semibold text-white">操作項目</th>
                {ROLES.map((role) => (
                  <th key={role} className="whitespace-nowrap px-4 py-2.5 text-center font-semibold text-white" style={{ fontSize: "11px" }}>{role}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CATEGORIES.map((cat) => {
                const catPerms = filteredPerms.filter((p) => p.category === cat);
                return catPerms.map((perm, ci) => {
                  const globalIdx = filteredPerms.indexOf(perm);
                  return (
                    <tr
                      key={perm.action}
                      className="border-b border-slate-100 transition-colors hover:bg-slate-50"
                      style={{ backgroundColor: globalIdx % 2 === 1 ? "#FAFAFA" : "#FFFFFF" }}
                    >
                      {ci === 0 && (
                        <td className="align-top px-5 py-2.5 font-semibold text-slate-500" rowSpan={catPerms.length} style={{ fontSize: "11px", borderRight: "1px solid #E2E8F0" }}>
                          {cat}
                        </td>
                      )}
                      <td className="px-5 py-2.5 text-slate-700">{perm.action}</td>
                      {ROLES.map((role) => (
                        <td key={role} className="px-4 py-2.5 text-center">
                          <button
                            onClick={() => toggle(globalIdx, role)}
                            disabled={!editing}
                            className="mx-auto flex h-6 w-6 items-center justify-center rounded-full transition-all"
                            aria-label={`${role}${perm.roles[role] ? "可使用" : "不可使用"}${perm.action}`}
                            title={`${role}${perm.roles[role] ? "可使用" : "不可使用"}${perm.action}`}
                            style={{
                              backgroundColor: perm.roles[role] ? "#3A867B" : "#E2E8F0",
                              cursor: editing ? "pointer" : "default",
                            }}
                          >
                            {perm.roles[role]
                              ? <Check size={13} className="text-white" strokeWidth={2.5} />
                              : <X size={13} className="text-slate-400" strokeWidth={2} />
                            }
                          </button>
                        </td>
                      ))}
                    </tr>
                  );
                });
              })}
            </tbody>
          </table>
        </div>
        <div className="border-t border-slate-200 bg-slate-50 px-5 py-3 text-slate-500" style={{ fontSize: "11px" }}>
          共 {PERMISSIONS.length} 項功能權限 · {editing ? "編輯模式：點擊方格可切換可使用 / 不可使用" : "點擊「編輯權限」以修改設定"}
        </div>
      </div>
    </div>
  );
}
