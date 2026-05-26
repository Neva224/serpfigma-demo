import { useMemo, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import { Plus, Tag, TrendingUp, Users, X } from "lucide-react";
import { LEVEL_OPTIONS } from "../document-management/mockData";

type Tab = "contacts" | "clicks" | "tags";
type UserRole = "系統管理員" | "文管人員" | "部門主管" | "一般使用者" | "唯讀使用者";

interface TagItem {
  tag: string;
  description: string;
  levels: string[];
  owner: string;
  enabled: boolean;
  count: number;
  docs: string[];
}

interface TagFormState {
  name: string;
  description: string;
  levels: string[];
  owner: string;
  enabled: boolean;
}

const CURRENT_USER: { name: string; role: UserRole } = {
  name: "系統管理員",
  role: "文管人員",
};

const ALLOWED_ROLES = new Set<UserRole>(["系統管理員", "文管人員", "部門主管"]);

const CONTACTS = [
  { level: "一階", desc: "政策、手冊", count: 12, contact: "王大明", dept: "行政管理處", code: "250341" },
  { level: "二階", desc: "管理辦法、程序書", count: 35, contact: "李小華", dept: "品質保證部", code: "250342" },
  { level: "三階", desc: "規範、說明書、須知、標準", count: 78, contact: "陳美玲", dept: "人力資源處", code: "250343" },
  { level: "四階", desc: "表、單", count: 56, contact: "林建宏", dept: "財務法務處", code: "250345" },
  { level: "五階", desc: "教育訓練", count: 22, contact: "趙雅婷", dept: "教育訓練部", code: "250347" },
  { level: "六階", desc: "外來文件", count: 45, contact: "蔡宛芸", dept: "採購管理處", code: "250350" },
];

const LEVEL_COLORS = ["#7C3AED", "#1D4ED8", "#0F766E", "#15803D", "#B45309", "#4B5563"];

const CLICKS = [
  { name: "資訊安全管理政策", level: "一階", clicks: 384, trend: "+12%" },
  { name: "軟體開發管理辦法", level: "二階", clicks: 271, trend: "+5%" },
  { name: "員工教育訓練計畫", level: "五階", clicks: 248, trend: "+22%" },
  { name: "客戶服務標準作業", level: "三階", clicks: 196, trend: "-3%" },
  { name: "人力資源管理程序書", level: "二階", clicks: 183, trend: "+8%" },
  { name: "系統架構說明書", level: "三階", clicks: 142, trend: "-1%" },
  { name: "差旅費申請單", level: "四階", clicks: 139, trend: "+30%" },
  { name: "供應商評鑑標準", level: "三階", clicks: 117, trend: "+4%" },
];

const INITIAL_TAGS: TagItem[] = [
  { tag: "#資安", count: 42, description: "資訊安全與權限控管標籤", levels: ["一階", "三階"], owner: "林建宏", enabled: true, docs: ["資訊安全管理政策", "弱點掃描規範", "資安稽核表"] },
  { tag: "#政策", count: 38, description: "政策與制度文件", levels: ["一階", "二階"], owner: "王大明", enabled: true, docs: ["資訊安全管理政策", "人力資源政策", "採購政策"] },
  { tag: "#財務", count: 35, description: "財務與報支類文件", levels: ["四階"], owner: "陳美玲", enabled: true, docs: ["年度預算規劃表", "帳務處理辦法", "差旅費申請單"] },
  { tag: "#訓練", count: 29, description: "教育訓練與教材", levels: ["五階"], owner: "趙雅婷", enabled: true, docs: ["員工教育訓練計畫", "新人訓練手冊"] },
  { tag: "#表單", count: 27, description: "申請單與簽核單", levels: ["四階"], owner: "林建宏", enabled: true, docs: ["差旅費申請單", "請假申請單", "設備借用單"] },
  { tag: "#合約", count: 22, description: "合約與契約文件", levels: ["二階", "三階"], owner: "張志遠", enabled: true, docs: ["供應商合約範本", "服務合約書"] },
  { tag: "#開發", count: 19, description: "開發與系統規格", levels: ["三階"], owner: "吳俊傑", enabled: true, docs: ["軟體開發管理辦法", "系統架構說明書"] },
  { tag: "#採購", count: 16, description: "採購與評鑑流程", levels: ["二階"], owner: "陳美玲", enabled: true, docs: ["供應商評鑑標準", "採購作業程序"] },
  { tag: "#人資", count: 15, description: "人資管理文件", levels: ["二階"], owner: "李小華", enabled: true, docs: ["人力資源管理程序書", "薪酬管理辦法"] },
  { tag: "#外來", count: 12, description: "外來文件與法規", levels: ["六階"], owner: "蔡宛芸", enabled: true, docs: ["外部法規文件", "國際標準文件"] },
  { tag: "#行銷", count: 10, description: "行銷企劃文件", levels: ["一階", "三階"], owner: "林建宏", enabled: true, docs: ["行銷企劃須知", "品牌形象手冊"] },
  { tag: "#年度", count: 9, description: "年度計畫與報表", levels: ["一階", "四階"], owner: "王大明", enabled: true, docs: ["年度預算規劃表", "年度稽核計畫"] },
];

interface Props {
  onBack: () => void;
}

export function DatabasePage({ onBack }: Props) {
  const [tab, setTab] = useState<Tab>("contacts");
  const [expandedTag, setExpandedTag] = useState<string | null>(null);
  const [tags, setTags] = useState<TagItem[]>(INITIAL_TAGS);
  const [showAddTag, setShowAddTag] = useState(false);
  const [form, setForm] = useState<TagFormState>({
    name: "",
    description: "",
    levels: [],
    owner: "",
    enabled: true,
  });
  const [formError, setFormError] = useState("");

  const canAddTag = ALLOWED_ROLES.has(CURRENT_USER.role);
  const tagNames = useMemo(() => new Set(tags.map((item) => item.tag)), [tags]);

  function toggleLevel(value: string) {
    setForm((current) => ({
      ...current,
      levels: current.levels.includes(value)
        ? current.levels.filter((item) => item !== value)
        : [...current.levels, value],
    }));
  }

  function normalizeTagName(raw: string) {
    const trimmed = raw.trim().replace(/^#+/, "");
    return trimmed ? `#${trimmed}` : "";
  }

  function openAddTag() {
    if (!canAddTag) return;
    setForm({
      name: "",
      description: "",
      levels: [],
      owner: CURRENT_USER.name,
      enabled: true,
    });
    setFormError("");
    setShowAddTag(true);
  }

  function saveTag() {
    const normalizedName = normalizeTagName(form.name);
    if (!normalizedName) {
      setFormError("標籤名稱必填");
      return;
    }
    if (tagNames.has(normalizedName)) {
      setFormError("重複標籤不可新增");
      return;
    }

    setTags((current) => [
      {
        tag: normalizedName,
        description: form.description.trim() || "尚未填寫標籤說明",
        levels: form.levels,
        owner: form.owner.trim() || CURRENT_USER.name,
        enabled: form.enabled,
        count: 0,
        docs: [],
      },
      ...current,
    ]);
    setShowAddTag(false);
  }

  return (
    <div className="flex-1 overflow-y-auto px-6 py-5" style={{ backgroundColor: "#F3F4F6" }}>
      <div className="mb-5 flex items-start justify-between gap-4">
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
            <span>資料庫</span>
          </div>
          <h2 className="text-gray-800" style={{ fontSize: "18px", fontWeight: 700 }}>資料庫</h2>
          <p className="text-gray-500 text-sm mt-0.5">文件知識管理總覽：窗口對應、點擊統計與標籤索引</p>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="shrink-0 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
        >
          返回文件管理
        </button>
      </div>

      <div className="flex gap-1 p-1 rounded-xl bg-white border border-gray-200 mb-5 w-fit">
        {([
          ["contacts", <Users size={14} />, "各分層文件對應窗口"],
          ["clicks", <TrendingUp size={14} />, "文件點擊率"],
          ["tags", <Tag size={14} />, "標籤索引庫"],
        ] as [Tab, ReactNode, string][]).map(([key, icon, label]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
            style={{
              backgroundColor: tab === key ? "#0D9488" : "transparent",
              color: tab === key ? "#ffffff" : "#6B7280",
              fontWeight: tab === key ? 700 : 400,
              fontSize: "13px",
            }}
          >
            {icon}
            {label}
          </button>
        ))}
      </div>

      {tab === "contacts" && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/60">
            <h3 className="text-gray-700 font-semibold" style={{ fontSize: "13px" }}>各分層文件對應窗口一覽表</h3>
          </div>
          <table className="w-full" style={{ fontSize: "13px" }}>
            <thead>
              <tr style={{ backgroundColor: "#0D9488" }}>
                {["文件階級", "文件類型說明", "文件數", "負責窗口", "所屬部門", "員工編號", "聯繫"].map((h) => (
                  <th key={h} className="text-left px-5 py-2.5 text-white font-semibold whitespace-nowrap" style={{ fontSize: "12px" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CONTACTS.map((row, i) => (
                <tr key={row.level} className="border-b border-gray-50 hover:bg-teal-50/20 transition-colors" style={{ backgroundColor: i % 2 === 1 ? "#FAFAFA" : "#FFFFFF" }}>
                  <td className="px-5 py-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded font-bold" style={{ fontSize: "12px", backgroundColor: `${LEVEL_COLORS[i]}15`, color: LEVEL_COLORS[i] }}>
                      {row.level}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-gray-600">{row.desc}</td>
                  <td className="px-5 py-3 font-semibold text-gray-800">{row.count}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-white" style={{ fontSize: "10px", fontWeight: 700, backgroundColor: "#0D9488" }}>{row.contact[0]}</div>
                      <span className="text-gray-800 font-medium">{row.contact}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-gray-600">{row.dept}</td>
                  <td className="px-5 py-3 font-mono text-gray-500" style={{ fontSize: "12px" }}>{row.code}</td>
                  <td className="px-5 py-3">
                    <button className="px-3 py-1 rounded border border-gray-200 text-gray-500 hover:border-teal-400 hover:text-teal-600 transition-all" style={{ fontSize: "11px" }}>發送訊息</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "clicks" && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/60">
            <h3 className="text-gray-700 font-semibold" style={{ fontSize: "13px" }}>文件點擊率排行榜（本月）</h3>
          </div>
          <table className="w-full" style={{ fontSize: "13px" }}>
            <thead>
              <tr style={{ backgroundColor: "#0D9488" }}>
                {["排名", "文件名稱", "文件階級", "點擊次數", "趨勢", "熱度"].map((h) => (
                  <th key={h} className="text-left px-5 py-2.5 text-white font-semibold whitespace-nowrap" style={{ fontSize: "12px" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CLICKS.map((row, i) => {
                const pct = Math.round((row.clicks / CLICKS[0].clicks) * 100);
                const isUp = row.trend.startsWith("+");
                return (
                  <tr key={row.name} className="border-b border-gray-50 hover:bg-teal-50/20 transition-colors" style={{ backgroundColor: i % 2 === 1 ? "#FAFAFA" : "#FFFFFF" }}>
                    <td className="px-5 py-3">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center font-bold" style={{
                        fontSize: "11px",
                        backgroundColor: i < 3 ? ["#F59E0B", "#9CA3AF", "#CD7C2F"][i] : "#F3F4F6",
                        color: i < 3 ? "#fff" : "#6B7280",
                        display: "inline-flex",
                      }}>
                        {i + 1}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-gray-800 font-medium">{row.name}</td>
                    <td className="px-5 py-3">
                      <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "#F0FDFA", color: "#0F766E", fontWeight: 600 }}>{row.level}</span>
                    </td>
                    <td className="px-5 py-3 font-semibold text-gray-800">{row.clicks.toLocaleString()}</td>
                    <td className="px-5 py-3">
                      <span style={{ color: isUp ? "#16A34A" : "#DC2626", fontSize: "12px", fontWeight: 600 }}>{row.trend}</span>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-100 rounded-full h-2" style={{ maxWidth: "100px" }}>
                          <div className="h-2 rounded-full" style={{ width: `${pct}%`, backgroundColor: "#0D9488" }} />
                        </div>
                        <span className="text-gray-400" style={{ fontSize: "10px" }}>{pct}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {tab === "tags" && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50/60">
            <div>
              <h3 className="text-gray-700 font-semibold" style={{ fontSize: "13px" }}>標籤索引庫</h3>
              <p className="mt-0.5 text-xs text-gray-400">目前登入角色：{CURRENT_USER.role}</p>
            </div>
            <button
              type="button"
              onClick={openAddTag}
              disabled={!canAddTag}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-50"
              style={{ backgroundColor: canAddTag ? "#0D9488" : "#E5E7EB", color: canAddTag ? "#ffffff" : "#6B7280" }}
              title={canAddTag ? "新增標籤" : "僅文管人員、部門主管或文件窗口負責人員可新增標籤"}
            >
              <Plus size={14} />
              新增標籤
            </button>
          </div>

          <div className="p-5">
            {!canAddTag && (
              <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-700">
                僅文管人員、部門主管或文件窗口負責人員可新增標籤
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-5">
              {tags.map((t, i) => {
                const size = Math.max(11, Math.min(16, 11 + Math.round(t.count / 8)));
                return (
                  <button
                    key={t.tag}
                    onClick={() => setExpandedTag(expandedTag === t.tag ? null : t.tag)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all hover:shadow-sm"
                    style={{
                      fontSize: `${size}px`,
                      fontWeight: expandedTag === t.tag ? 700 : 500,
                      borderColor: expandedTag === t.tag ? "#0D9488" : "#E5E7EB",
                      backgroundColor: expandedTag === t.tag ? "#F0FDFA" : `${LEVEL_COLORS[i % 6]}0A`,
                      color: expandedTag === t.tag ? "#0F766E" : "#374151",
                    }}
                  >
                    {t.tag}
                    <span className="px-1.5 py-0.5 rounded-full text-white" style={{ fontSize: "10px", fontWeight: 700, backgroundColor: expandedTag === t.tag ? "#0D9488" : "#9CA3AF" }}>{t.count}</span>
                  </button>
                );
              })}
            </div>

            {expandedTag && (
              <div className="border border-teal-200 rounded-xl p-4 bg-teal-50/30">
                <h4 className="text-teal-700 font-bold mb-2" style={{ fontSize: "13px" }}>
                  {expandedTag} 相關文件
                </h4>
                <div className="mb-3 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg bg-white px-3 py-2 text-xs text-slate-600 border border-teal-100">
                    <span className="font-semibold text-slate-500">說明：</span>{" "}
                    {tags.find((t) => t.tag === expandedTag)?.description}
                  </div>
                  <div className="rounded-lg bg-white px-3 py-2 text-xs text-slate-600 border border-teal-100">
                    <span className="font-semibold text-slate-500">適用階級：</span>{" "}
                    {tags.find((t) => t.tag === expandedTag)?.levels.join("、")}
                  </div>
                </div>
                <div className="space-y-2">
                  {tags.find((t) => t.tag === expandedTag)?.docs.map((d) => (
                    <div key={d} className="flex items-center gap-2 py-2 px-3 rounded-lg bg-white border border-teal-100 hover:border-teal-300 transition-colors cursor-pointer">
                      <span className="text-gray-400">📄</span>
                      <span className="text-gray-700 text-sm">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {showAddTag && (
        <TagModal
          form={form}
          setForm={setForm}
          error={formError}
          onClose={() => setShowAddTag(false)}
          onSave={saveTag}
          onToggleLevel={toggleLevel}
        />
      )}
    </div>
  );
}

function TagModal({
  form,
  setForm,
  error,
  onClose,
  onSave,
  onToggleLevel,
}: {
  form: TagFormState;
  setForm: Dispatch<SetStateAction<TagFormState>>;
  error: string;
  onClose: () => void;
  onSave: () => void;
  onToggleLevel: (value: string) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div>
            <h3 className="text-base font-bold text-slate-800">新增標籤</h3>
            <p className="mt-0.5 text-sm text-slate-500">標籤名稱會自動補上 #</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700" aria-label="關閉">
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-4 px-5 py-5">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-slate-600">標籤名稱</span>
            <input
              value={form.name}
              onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))}
              placeholder="例如：資安"
              className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-teal-500"
            />
            <span className="text-xs text-slate-400">預覽：{form.name.trim() ? `#${form.name.trim().replace(/^#+/, "")}` : "#標籤名稱"}</span>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-slate-600">標籤說明</span>
            <textarea
              value={form.description}
              onChange={(e) => setForm((current) => ({ ...current, description: e.target.value }))}
              placeholder="說明這個標籤的用途"
              rows={3}
              className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-teal-500"
            />
          </label>

          <div>
            <div className="mb-2 text-sm font-semibold text-slate-600">適用文件階級（可複選）</div>
            <div className="flex flex-wrap gap-2">
              {LEVEL_OPTIONS.map((option) => {
                const active = form.levels.includes(option.short);
                return (
                  <button
                    type="button"
                    key={option.value}
                    onClick={() => onToggleLevel(option.short)}
                    className="rounded-full border px-3 py-1.5 text-sm font-semibold transition"
                    style={{
                      borderColor: active ? "#0D9488" : "#E5E7EB",
                      backgroundColor: active ? "#F0FDFA" : "#FFFFFF",
                      color: active ? "#0F766E" : "#475569",
                    }}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-semibold text-slate-600">負責窗口</span>
            <input
              value={form.owner}
              onChange={(e) => setForm((current) => ({ ...current, owner: e.target.value }))}
              placeholder="輸入姓名 / 員編"
              className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-teal-500"
            />
          </label>

          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={form.enabled}
              onChange={(e) => setForm((current) => ({ ...current, enabled: e.target.checked }))}
            />
            啟用狀態
          </label>

          {error && <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>}
        </div>

        <div className="flex items-center justify-end gap-2 border-t border-slate-100 px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            取消
          </button>
          <button
            type="button"
            onClick={onSave}
            className="rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-500"
          >
            儲存標籤
          </button>
        </div>
      </div>
    </div>
  );
}
