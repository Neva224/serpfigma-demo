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
  文管人員:   { bg: "#0D9488", text: "#ffffff" },
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
  { action: "文件下架",    category: "流程操作", roles: { 系統管理員: true,  文管人員: true,  部門主管: false, 一般使用者: false, 唯讀使用者: false } },
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
    <div className={embedded ? "h-full overflow-y-auto px-6 py-5" : "flex-1 overflow-y-auto px-6 py-5"} style={{ backgroundColor: "#F3F4F6" }}>
      <div className="mb-5 overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-teal-50 to-white px-5 py-5 shadow-sm flex items-start justify-between gap-4">
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
          <h2 className="text-gray-800" style={{ fontSize: "18px", fontWeight: 700 }}>系統設定 — 人員權限管理</h2>
          <p className="text-gray-500 text-sm mt-0.5">設定各角色對文件相關操作的執行權限</p>
        </div>
      </div>

      {/* Role cards */}
      <div className="grid grid-cols-5 gap-3 mb-5">
        {ROLES.map((role) => {
          const rc = ROLE_COLORS[role];
          const count = perms.filter((p) => p.roles[role]).length;
          return (
            <div key={role} className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: rc.bg }}>
                {role === "系統管理員" ? <Shield size={18} className="text-white" /> : <User size={18} style={{ color: rc.text }} />}
              </div>
              <p className="text-gray-800 text-center leading-tight" style={{ fontSize: "12px", fontWeight: 700 }}>{role}</p>
              <p className="text-gray-400 text-center" style={{ fontSize: "11px" }}>
                {count} / {perms.length} 項權限
              </p>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="h-1.5 rounded-full" style={{ width: `${(count / perms.length) * 100}%`, backgroundColor: rc.bg }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Permission matrix */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50/60">
          <h3 className="text-gray-700 font-semibold" style={{ fontSize: "13px" }}>權限設定矩陣</h3>
          <button
            onClick={() => setEditing((v) => !v)}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg border transition-all"
            style={{
              fontSize: "12px", fontWeight: 600,
              borderColor: editing ? "#0D9488" : "#E5E7EB",
              backgroundColor: editing ? "#F0FDFA" : "transparent",
              color: editing ? "#0D9488" : "#6B7280",
            }}
          >
            <Edit2 size={12} />
            {editing ? "儲存變更" : "編輯權限"}
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full" style={{ fontSize: "12px" }}>
            <thead>
              <tr style={{ backgroundColor: "#0D9488" }}>
                <th className="text-left px-5 py-2.5 text-white font-semibold whitespace-nowrap" style={{ width: "100px" }}>分類</th>
                <th className="text-left px-5 py-2.5 text-white font-semibold">操作項目</th>
                {ROLES.map((role) => (
                  <th key={role} className="px-4 py-2.5 text-white font-semibold text-center whitespace-nowrap" style={{ fontSize: "11px" }}>{role}</th>
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
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                      style={{ backgroundColor: globalIdx % 2 === 1 ? "#FAFAFA" : "#FFFFFF" }}
                    >
                      {ci === 0 && (
                        <td className="px-5 py-2.5 font-semibold text-gray-500 align-top" rowSpan={catPerms.length} style={{ fontSize: "11px", borderRight: "1px solid #F0F0F0" }}>
                          {cat}
                        </td>
                      )}
                      <td className="px-5 py-2.5 text-gray-700">{perm.action}</td>
                      {ROLES.map((role) => (
                        <td key={role} className="px-4 py-2.5 text-center">
                          <button
                            onClick={() => toggle(globalIdx, role)}
                            disabled={!editing}
                            className="mx-auto flex items-center justify-center w-6 h-6 rounded-full transition-all"
                            style={{
                              backgroundColor: perm.roles[role] ? "#0D9488" : "#F3F4F6",
                              cursor: editing ? "pointer" : "default",
                            }}
                          >
                            {perm.roles[role]
                              ? <Check size={13} className="text-white" strokeWidth={2.5} />
                              : <X size={13} className="text-gray-300" strokeWidth={2} />
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
        <div className="px-5 py-3 border-t border-gray-100 bg-gray-50/40 text-gray-400" style={{ fontSize: "11px" }}>
          共 {PERMISSIONS.length} 項操作權限 · {editing ? "⚡ 編輯模式：點擊方格切換權限" : "點擊「編輯權限」以修改設定"}
        </div>
      </div>
    </div>
  );
}
