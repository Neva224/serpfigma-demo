import { useState, type FormEvent } from "react";
import { Eye, EyeOff, Globe, Lock, User } from "lucide-react";
import lionGroupLogo from "@/assets/lion-group-logo.png";
import { DEMO_ACCOUNTS } from "../data/demoAccounts";

interface Props {
  /** 回傳登入是否成功。（登入邏輯不在此檔，此元件只負責 UI 與呼叫 onLogin） */
  onLogin: (user: string, pass: string) => boolean;
}

const LANGUAGES = [
  { value: "zh-TW", label: "繁體中文" },
  { value: "zh-CN", label: "简体中文" },
  { value: "en", label: "English" },
  { value: "ja", label: "日本語" },
];

// 沿用專案品牌色（theme.css --color-primary / --color-primary-hover）
const BRAND = "#3A867B";
const BRAND_HOVER = "#2F766D";
const LION_RED = "#C8102E";
const TEXT_MAIN = "#203040";
const TEXT_SUB = "#718096";
const BORDER = "#DCE5EA";
const ERROR = "#D64545";

export function LoginPage({ onLogin }: Props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [lang, setLang] = useState("zh-TW");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  // ── 登入邏輯（未更動）────────────────────────────
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
  // ────────────────────────────────────────────────

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: "#F5F8FA", color: TEXT_MAIN }}>
      {/* 頂部細色帶 */}
      <div style={{ height: 8, background: `linear-gradient(90deg, ${BRAND}, ${BRAND_HOVER})` }} />

      {/* 主容器：垂直置中、最大寬 1200px、上下留白 */}
      <div className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6">
        <div className="grid w-full max-w-[1200px] items-center gap-10 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:gap-16">
          {/* 左：品牌視覺區（桌機） */}
          <section className="relative hidden overflow-hidden rounded-3xl px-12 py-16 lg:block"
            style={{ background: "linear-gradient(135deg, #EEF4F3 0%, #F5F8FA 60%)", border: `1px solid ${BORDER}` }}>
            <WorldBackdrop />
            <div className="relative">
              <LogoLockup />
              <p className="mt-8 text-[18px] font-medium" style={{ color: TEXT_SUB }}>
                企業文件管理平台
              </p>
              <p className="mt-1 text-[14px]" style={{ color: "#9AA7B2" }}>
                Enterprise Document Management
              </p>
            </div>
          </section>

          {/* 品牌（手機／平板：置於卡片上方，精簡） */}
          <div className="text-center lg:hidden">
            <LogoLockup compact />
          </div>

          {/* 右：登入卡片 */}
          <section className="mx-auto w-full max-w-[480px] lg:mx-0">
            <form
              onSubmit={handleSubmit}
              className="rounded-[18px] bg-white p-8 shadow-[0_14px_44px_rgba(31,64,80,0.10)] sm:p-11"
              style={{ border: `1px solid ${BORDER}` }}
              noValidate
            >
              <h1 className="text-[30px] font-bold leading-tight" style={{ color: TEXT_MAIN }}>
                系統登入
              </h1>
              <p className="mt-1.5 text-[16px]" style={{ color: TEXT_SUB }}>
                請輸入您的帳號與通行碼
              </p>

              {/* 多國語系 */}
              <Field label="多國語系">
                <div className="relative">
                  <Globe size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: BRAND }} />
                  <select
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                    className="h-[50px] w-full appearance-none rounded-xl bg-white pl-11 pr-10 text-[16px] outline-none transition focus:ring-2 focus:ring-[#3a867b]/35"
                    style={{ border: `1px solid ${BORDER}`, color: TEXT_MAIN }}
                  >
                    {LANGUAGES.map((l) => (
                      <option key={l.value} value={l.value}>
                        {l.label}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">▾</span>
                </div>
              </Field>

              {/* 使用者代碼 */}
              <Field label="使用者代碼">
                <InputWrap icon={<User size={18} style={{ color: BRAND }} />}>
                  <input
                    type="text"
                    value={user}
                    onChange={(e) => {
                      setUser(e.target.value);
                      setError("");
                    }}
                    autoFocus
                    placeholder="請輸入使用者代碼"
                    className="h-[50px] w-full rounded-xl bg-white pl-11 pr-4 text-[16px] outline-none transition focus:ring-2 focus:ring-[#3a867b]/35"
                    style={{ border: `1px solid ${BORDER}`, color: TEXT_MAIN }}
                  />
                </InputWrap>
              </Field>

              {/* 通行碼（含顯示／隱藏） */}
              <Field label="通行碼">
                <InputWrap icon={<Lock size={18} style={{ color: BRAND }} />}>
                  <input
                    type={showPass ? "text" : "password"}
                    value={pass}
                    onChange={(e) => {
                      setPass(e.target.value);
                      setError("");
                    }}
                    placeholder="請輸入通行碼"
                    className="h-[50px] w-full rounded-xl bg-white pl-11 pr-12 text-[16px] outline-none transition focus:ring-2 focus:ring-[#3a867b]/35"
                    style={{ border: `1px solid ${BORDER}`, color: TEXT_MAIN }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    aria-label={showPass ? "隱藏通行碼" : "顯示通行碼"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 transition hover:text-slate-600"
                  >
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </InputWrap>
              </Field>

              {/* 錯誤訊息（保留高度，避免版面跳動） */}
              <div className="mt-2 min-h-[22px] text-[14px] font-medium" style={{ color: ERROR }}>
                {error}
              </div>

              {/* 登入按鈕 */}
              <button
                type="submit"
                className="mt-1 h-[52px] w-full rounded-xl text-[17px] font-bold text-white shadow-sm transition-all hover:brightness-95 active:scale-[0.99]"
                style={{ backgroundColor: BRAND }}
              >
                登入
              </button>

              {/* 快速選擇身分（示範用；直接以該角色登入） */}
              <div className="mt-5 border-t pt-4" style={{ borderColor: BORDER }}>
                <label className="mb-2 block text-[13px] font-medium" style={{ color: TEXT_SUB }}>
                  快速選擇身分（示範）
                </label>
                <div className="relative">
                  <select
                    defaultValue=""
                    onChange={(e) => {
                      const acc = DEMO_ACCOUNTS.find((a) => a.role === e.target.value);
                      if (acc) onLogin(acc.user, acc.pass);
                    }}
                    className="h-[46px] w-full appearance-none rounded-xl bg-white px-4 pr-10 text-[15px] outline-none transition focus:ring-2 focus:ring-[#3a867b]/35"
                    style={{ border: `1px solid ${BORDER}`, color: TEXT_MAIN }}
                  >
                    <option value="" disabled>
                      請選擇角色直接登入…
                    </option>
                    {DEMO_ACCOUNTS.map((a) => (
                      <option key={a.role} value={a.role}>
                        {a.roleLabel}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">▾</span>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>

      {/* 頁尾 */}
      <footer className="pb-9 text-center text-[13px]" style={{ color: TEXT_SUB }}>
        © 雄獅集團　文件管理系統
      </footer>
    </div>
  );
}

/** 品牌文字標誌（placeholder，不含卡通獅子；待換官方 LION GROUP logo 圖檔） */
function LogoLockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "inline-flex flex-col items-center" : ""}>
      <img
        src={lionGroupLogo}
        alt="雄獅集團 LION GROUP"
        style={{ objectFit: "contain", width: compact ? 132 : 176, height: "auto" }}
      />
      <div
        className={compact ? "mt-3 text-[26px]" : "mt-4 text-[40px]"}
        style={{ color: LION_RED, fontWeight: 900, letterSpacing: "0.06em", lineHeight: 1 }}
      >
        LION GROUP
      </div>
      <div
        className={compact ? "mt-1 text-[20px]" : "mt-2 text-[30px]"}
        style={{ color: TEXT_MAIN, fontWeight: 700, letterSpacing: "0.14em" }}
      >
        雄獅集團
      </div>
    </div>
  );
}

/** 淡化的全球連線節點裝飾（無外部圖片；待換世界地圖圖檔可替換此背景） */
function WorldBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity: 0.12 }}
      aria-hidden="true"
    >
      <g stroke="#3A867B" strokeWidth="1" fill="none">
        <path d="M60 300 Q200 120 340 210 T560 120" />
        <path d="M90 90 Q260 260 470 200" />
        <path d="M40 200 Q220 200 300 60" />
      </g>
      <g fill="#2F766D">
        {[
          [60, 300], [340, 210], [560, 120], [90, 90], [470, 200],
          [40, 200], [300, 60], [200, 160], [420, 320], [520, 300], [150, 250],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 5 : 3} />
        ))}
      </g>
    </svg>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <label className="mb-2 block text-[16px] font-semibold" style={{ color: TEXT_MAIN }}>
        {label}
      </label>
      {children}
    </div>
  );
}

function InputWrap({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2">{icon}</span>
      {children}
    </div>
  );
}
