import { useState, type FormEvent } from "react";
import { Lock, User } from "lucide-react";
import { DEMO_ACCOUNTS } from "../data/demoAccounts";
import { LionMark } from "./LionMark";

interface Props {
  /** 回傳登入是否成功。 */
  onLogin: (user: string, pass: string) => boolean;
}

export function LoginPage({ onLogin }: Props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [showDemo, setShowDemo] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!user.trim() || !pass) {
      setError("請輸入使用者代碼與通行碼");
      return;
    }
    if (!onLogin(user, pass)) {
      setError("使用者代碼或通行碼錯誤");
    }
  }

  function fillDemo(u: string, p: string) {
    setUser(u);
    setPass(p);
    setError("");
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* 頂部品牌橫條（留空） */}
      <div className="brand-teal-bar h-11" />

      <div className="flex flex-1 items-center justify-center px-6 py-10">
        <div className="w-full max-w-[420px]">
          {/* 品牌標題 */}
          <div className="mb-8 text-center">
            <LionMark className="mx-auto mb-3 h-16 w-16" />
            <h1 className="text-[28px] font-extrabold tracking-tight text-slate-800">雄獅旅遊</h1>
            <p className="mt-1 text-[13px] font-medium tracking-[0.15em] text-slate-400">
              文件管理系統
            </p>
          </div>

          {/* 登入卡片 */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,79,74,0.08)]"
          >
            <label className="mb-1.5 block text-sm font-semibold text-slate-600">使用者代碼</label>
            <div className="relative mb-4">
              <User size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={user}
                onChange={(e) => {
                  setUser(e.target.value);
                  setError("");
                }}
                autoFocus
                placeholder="請輸入使用者代碼"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-800 transition focus:border-teal-500 focus:bg-white focus:outline-none"
              />
            </div>

            <label className="mb-1.5 block text-sm font-semibold text-slate-600">通行碼</label>
            <div className="relative mb-2">
              <Lock size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                  setError("");
                }}
                placeholder="請輸入通行碼"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-800 transition focus:border-teal-500 focus:bg-white focus:outline-none"
              />
            </div>

            <div className="min-h-5 text-[13px] text-red-500">{error}</div>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg py-2.5 text-sm font-bold text-white shadow-sm transition hover:opacity-90 active:scale-[0.99]"
              style={{ backgroundColor: "#3A867B" }}
            >
              登入
            </button>

            {/* 示範帳號（demo 用，點擊帶入） */}
            <button
              type="button"
              onClick={() => setShowDemo((v) => !v)}
              className="mt-4 w-full text-center text-xs font-medium text-slate-400 transition hover:text-teal-600"
            >
              {showDemo ? "▲ 收合示範帳號" : "▼ 顯示示範帳號（各角色一組）"}
            </button>
            {showDemo && (
              <div className="mt-2 space-y-1.5 rounded-lg border border-slate-100 bg-slate-50 p-2.5">
                {DEMO_ACCOUNTS.map((acc) => (
                  <button
                    key={acc.user}
                    type="button"
                    onClick={() => fillDemo(acc.user, acc.pass)}
                    className="flex w-full items-center justify-between rounded-md bg-white px-3 py-1.5 text-left text-xs text-slate-600 shadow-sm transition hover:bg-teal-50"
                  >
                    <span className="font-semibold text-teal-700">{acc.roleLabel}</span>
                    <span className="font-mono text-[11px] text-slate-500">
                      {acc.user} / {acc.pass}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </form>

          <p className="mt-6 text-center text-[11px] text-slate-400">
            © 雄獅集團　文件管理平台（示範環境）
          </p>
        </div>
      </div>
    </div>
  );
}
