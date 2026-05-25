import { useState } from "react";
import { Users, TrendingUp, Tag } from "lucide-react";

type Tab = "contacts" | "clicks" | "tags";

const CONTACTS = [
  { level: "一階", desc: "政策、手冊",           count: 12, contact: "王大明", dept: "行政管理處", code: "250341" },
  { level: "二階", desc: "管理辦法、程序書",      count: 35, contact: "李小華", dept: "品質保證部", code: "250342" },
  { level: "三階", desc: "規範、說明書、須知、標準", count: 78, contact: "陳美玲", dept: "人力資源處", code: "250343" },
  { level: "四階", desc: "表、單",               count: 56, contact: "林建宏", dept: "財務法務處", code: "250345" },
  { level: "五階", desc: "教育訓練",             count: 22, contact: "趙雅婷", dept: "教育訓練部", code: "250347" },
  { level: "六階", desc: "外來文件",             count: 45, contact: "蔡宛芸", dept: "採購管理處", code: "250350" },
];

const LEVEL_COLORS = ["#7C3AED", "#1D4ED8", "#0F766E", "#15803D", "#B45309", "#4B5563"];

const CLICKS = [
  { name: "資訊安全管理政策",   level: "一階", clicks: 384, trend: "+12%" },
  { name: "軟體開發管理辦法",   level: "二階", clicks: 271, trend: "+5%" },
  { name: "員工教育訓練計畫",   level: "五階", clicks: 248, trend: "+22%" },
  { name: "客戶服務標準作業",   level: "三階", clicks: 196, trend: "-3%" },
  { name: "人力資源管理程序書", level: "二階", clicks: 183, trend: "+8%" },
  { name: "系統架構說明書",     level: "三階", clicks: 142, trend: "-1%" },
  { name: "差旅費申請單",       level: "四階", clicks: 139, trend: "+30%" },
  { name: "供應商評鑑標準",     level: "三階", clicks: 117, trend: "+4%" },
];

const TAGS = [
  { tag: "資安",   count: 42, docs: ["資訊安全管理政策", "弱點掃描規範", "資安稽核表"] },
  { tag: "政策",   count: 38, docs: ["資訊安全管理政策", "人力資源政策", "採購政策"] },
  { tag: "財務",   count: 35, docs: ["年度預算規劃表", "帳務處理辦法", "差旅費申請單"] },
  { tag: "訓練",   count: 29, docs: ["員工教育訓練計畫", "新人訓練手冊"] },
  { tag: "表單",   count: 27, docs: ["差旅費申請單", "請假申請單", "設備借用單"] },
  { tag: "合約",   count: 22, docs: ["供應商合約範本", "服務合約書"] },
  { tag: "開發",   count: 19, docs: ["軟體開發管理辦法", "系統架構說明書"] },
  { tag: "採購",   count: 16, docs: ["供應商評鑑標準", "採購作業程序"] },
  { tag: "人資",   count: 15, docs: ["人力資源管理程序書", "薪酬管理辦法"] },
  { tag: "外來",   count: 12, docs: ["外部法規文件", "國際標準文件"] },
  { tag: "行銷",   count: 10, docs: ["行銷企劃須知", "品牌形象手冊"] },
  { tag: "年度",   count: 9,  docs: ["年度預算規劃表", "年度稽核計畫"] },
];

export function DatabasePage() {
  const [tab, setTab] = useState<Tab>("contacts");
  const [expandedTag, setExpandedTag] = useState<string | null>(null);

  return (
    <div className="flex-1 overflow-y-auto px-6 py-5" style={{ backgroundColor: "#F3F4F6" }}>
      <div className="mb-5">
        <h2 className="text-gray-800" style={{ fontSize: "18px", fontWeight: 700 }}>資料庫</h2>
        <p className="text-gray-500 text-sm mt-0.5">文件知識管理總覽：窗口對應、點擊統計與標籤索引</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 rounded-xl bg-white border border-gray-200 mb-5 w-fit">
        {([
          ["contacts", <Users size={14} />, "各分層文件對應窗口"],
          ["clicks",   <TrendingUp size={14} />, "文件點擊率"],
          ["tags",     <Tag size={14} />, "標籤索引庫"],
        ] as [Tab, React.ReactNode, string][]).map(([key, icon, label]) => (
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
            {icon}{label}
          </button>
        ))}
      </div>

      {/* Content */}
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
          <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/60">
            <h3 className="text-gray-700 font-semibold" style={{ fontSize: "13px" }}>標籤索引庫</h3>
          </div>
          <div className="p-5">
            {/* Tag cloud */}
            <div className="flex flex-wrap gap-2 mb-5">
              {TAGS.map((t, i) => {
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
                    #{t.tag}
                    <span className="px-1.5 py-0.5 rounded-full text-white" style={{ fontSize: "10px", fontWeight: 700, backgroundColor: expandedTag === t.tag ? "#0D9488" : "#9CA3AF" }}>{t.count}</span>
                  </button>
                );
              })}
            </div>

            {/* Expanded tag detail */}
            {expandedTag && (
              <div className="border border-teal-200 rounded-xl p-4 bg-teal-50/30">
                <h4 className="text-teal-700 font-bold mb-3" style={{ fontSize: "13px" }}>#{expandedTag} 相關文件</h4>
                <div className="space-y-2">
                  {TAGS.find((t) => t.tag === expandedTag)?.docs.map((d) => (
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
    </div>
  );
}
