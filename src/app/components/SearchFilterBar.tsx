import { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown, X, HelpCircle } from "lucide-react";

const LEVELS = [
  "全部階級",
  "一階-政策、手冊",
  "二階-管理辦法、程序書",
  "三階-規範、說明書、須知、標準",
  "四階-表、單",
  "五階-教育訓練",
  "六階-外來文件",
];
const STATUSES = ["全部狀態", "上架", "草稿", "待主管審核", "待文管審核", "退回", "下架", "作廢"];
const GROUPS = ["", "技術事業群", "商業事業群", "管理事業群", "國際事業群"];
const DIVISIONS: Record<string, string[]> = {
  技術事業群: ["", "軟體開發處", "資訊安全處", "雲端平台處"],
  商業事業群: ["", "業務拓展處", "行銷策略處"],
  管理事業群: ["", "人力資源處", "財務法務處", "行政總務處"],
  國際事業群: ["", "亞太業務處", "歐美業務處"],
};

interface Props {
  onOpenEmployeeLookup: () => void;
}

export function SearchFilterBar({ onOpenEmployeeLookup }: Props) {
  const [advanced, setAdvanced] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [uploaderCode, setUploaderCode] = useState("");
  const [uploaderName, setUploaderName] = useState("");
  const [group, setGroup] = useState("");

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
      {/* Main search row */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="請輸入關鍵字搜尋... (支援文件名稱、文件編號、標籤)"
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
            style={{ fontSize: "13px" }}
          />
        </div>
        <button
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90 whitespace-nowrap"
          style={{ backgroundColor: "#0D9488" }}
        >
          <Search size={14} />搜尋
        </button>
      </div>

      {/* Filter chips row */}
      <div className="flex flex-wrap items-center gap-2 px-4 py-2.5">
        <FilterSelect label="文件階級" options={LEVELS} />
        <FilterSelect label="狀態" options={STATUSES} />

        {/* 上傳者 — employee code input */}
        <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-gray-50 overflow-hidden" style={{ height: "34px" }}>
          <input
            type="text"
            value={uploaderCode}
            onChange={(e) => setUploaderCode(e.target.value)}
            placeholder="上傳者員編"
            className="pl-3 pr-1 py-1 bg-transparent text-gray-700 placeholder:text-gray-400 focus:outline-none w-24"
            style={{ fontSize: "12px" }}
          />
          {uploaderCode && (
            <span className="text-gray-600 px-1" style={{ fontSize: "11px" }}>
              {uploaderName || "查詢中..."}
            </span>
          )}
          <button
            onClick={onOpenEmployeeLookup}
            className="px-2 h-full flex items-center text-gray-400 hover:text-teal-600 hover:bg-teal-50 transition-all border-l border-gray-200"
            title="查詢員工代號"
          >
            <HelpCircle size={13} />
          </button>
        </div>

        {/* Date range */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50" style={{ fontSize: "12px" }}>
          <span className="text-gray-400" style={{ fontSize: "11px" }}>日期</span>
          <input type="date" className="bg-transparent text-gray-600 focus:outline-none" style={{ fontSize: "11px" }} />
          <span className="text-gray-300">—</span>
          <input type="date" className="bg-transparent text-gray-600 focus:outline-none" style={{ fontSize: "11px" }} />
        </div>

        {/* Advanced toggle */}
        <button
          onClick={() => setAdvanced((v) => !v)}
          className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all text-sm"
          style={{
            borderColor: advanced ? "#0D9488" : "#E5E7EB",
            color: advanced ? "#0D9488" : "#6B7280",
            backgroundColor: advanced ? "#F0FDFA" : "transparent",
          }}
        >
          <SlidersHorizontal size={13} />
          進階篩選
          <ChevronDown size={12} className={`transition-transform ${advanced ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Advanced search panel */}
      {advanced && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-4 py-4">
          <div className="grid grid-cols-3 gap-3 mb-3">
            <AdvField label="簽核單號">
              <input type="text" placeholder="輸入簽核單號" className={inputCls} />
            </AdvField>
            <AdvField label="文件編號">
              <input type="text" placeholder="輸入文件編號" className={inputCls} />
            </AdvField>
            <AdvField label="標籤">
              <input type="text" placeholder="輸入標籤關鍵字" className={inputCls} />
            </AdvField>
          </div>
          {/* Knowledge tree filters */}
          <div className="border-t border-gray-200 pt-3 mb-3">
            <p className="text-gray-500 mb-2" style={{ fontSize: "11px", fontWeight: 600 }}>知識樹 / 組織分層篩選</p>
            <div className="grid grid-cols-4 gap-3">
              <AdvField label="群（事業群）">
                <CascadeSelect options={GROUPS} value={group} onChange={(v) => setGroup(v)} />
              </AdvField>
              <AdvField label="處（事業處）">
                <CascadeSelect options={group ? (DIVISIONS[group] ?? [""]) : [""]} value="" onChange={() => {}} disabled={!group} />
              </AdvField>
              <AdvField label="部門">
                <input type="text" placeholder="輸入部門名稱" className={inputCls} />
              </AdvField>
              <AdvField label="組別">
                <input type="text" placeholder="輸入組別名稱" className={inputCls} />
              </AdvField>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button className="px-4 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 transition-all" style={{ fontSize: "12px" }}>
              <X size={12} className="inline mr-1" />清除條件
            </button>
            <button className="px-4 py-1.5 rounded-lg text-white font-medium hover:opacity-90 transition-all" style={{ fontSize: "12px", backgroundColor: "#0D9488" }}>
              <Search size={12} className="inline mr-1" />搜尋
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const inputCls = "w-full px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-teal-500 transition-all" as const;

function FilterSelect({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="relative">
      <select
        className="appearance-none pl-3 pr-7 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 focus:outline-none focus:border-teal-400 transition-colors cursor-pointer"
        style={{ fontSize: "12px" }}
        defaultValue={options[0]}
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
      <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  );
}

function AdvField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block mb-1 text-gray-500" style={{ fontSize: "11px", fontWeight: 600 }}>{label}</label>
      {children}
    </div>
  );
}

function CascadeSelect({ options, value, onChange, disabled = false }: {
  options: string[]; value: string; onChange: (v: string) => void; disabled?: boolean;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full appearance-none px-3 py-1.5 pr-7 rounded-lg border border-gray-200 bg-white text-gray-600 focus:outline-none focus:border-teal-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100"
        style={{ fontSize: "12px", color: value ? "#374151" : "#9CA3AF" }}
      >
        <option value="">請選擇</option>
        {options.filter(Boolean).map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  );
}
