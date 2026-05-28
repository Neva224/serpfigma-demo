import { useState, type ReactNode } from "react";
import { ChevronDown, HelpCircle, Search, SlidersHorizontal, X } from "lucide-react";
import { LEVEL_OPTIONS, STATUS_OPTIONS } from "./document-management/mockData";

const LEVEL_LABELS = ["全部類別", ...LEVEL_OPTIONS.map((option) => option.label)];
const STATUS_LABELS = ["全部狀態", ...STATUS_OPTIONS];

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
    <div className="mb-4 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
        <div className="relative flex-1">
          <Search size={14} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="請輸入關鍵字搜尋"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-gray-700 placeholder:text-gray-400 focus:border-teal-500 focus:bg-white focus:outline-none"
            style={{ fontSize: "13px" }}
          />
        </div>
        <button
          type="button"
          className="flex items-center gap-1.5 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
          style={{ backgroundColor: "#0D9488" }}
        >
          <Search size={14} />
          搜尋
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2 px-4 py-2.5">
        <FilterSelect label="文件階級" options={LEVEL_LABELS} />
        <FilterSelect label="文件狀態" options={STATUS_LABELS} />

        <div className="flex items-center gap-1 overflow-hidden rounded-lg border border-gray-200 bg-gray-50" style={{ height: "34px" }}>
          <input
            type="text"
            value={uploaderCode}
            onChange={(e) => setUploaderCode(e.target.value)}
            placeholder="上傳者代碼"
            className="w-24 bg-transparent py-1 pl-3 pr-1 text-gray-700 placeholder:text-gray-400 focus:outline-none"
            style={{ fontSize: "12px" }}
          />
          {uploaderCode && (
            <span className="px-1 text-gray-600" style={{ fontSize: "11px" }}>
              {uploaderName || "姓名"}
            </span>
          )}
          <button
            type="button"
            onClick={onOpenEmployeeLookup}
            className="flex h-full items-center border-l border-gray-200 px-2 text-gray-400 transition-all hover:bg-teal-50 hover:text-teal-600"
            title="開啟人員查詢"
          >
            <HelpCircle size={13} />
          </button>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5" style={{ fontSize: "12px" }}>
          <span className="text-gray-400" style={{ fontSize: "11px" }}>
            日期
          </span>
          <input type="date" className="bg-transparent text-gray-600 focus:outline-none" style={{ fontSize: "11px" }} />
          <span className="text-gray-300">~</span>
          <input type="date" className="bg-transparent text-gray-600 focus:outline-none" style={{ fontSize: "11px" }} />
        </div>

        <button
          type="button"
          onClick={() => setAdvanced((value) => !value)}
          className="ml-auto flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm transition-all"
          style={{
            borderColor: advanced ? "#0D9488" : "#E5E7EB",
            color: advanced ? "#0D9488" : "#6B7280",
            backgroundColor: advanced ? "#F0FDFA" : "transparent",
          }}
        >
          <SlidersHorizontal size={13} />
          進階搜尋
          <ChevronDown size={12} className={`transition-transform ${advanced ? "rotate-180" : ""}`} />
        </button>
      </div>

      {advanced && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-4 py-4">
          <div className="mb-3 grid grid-cols-3 gap-3">
            <AdvField label="簽核單號">
              <input type="text" placeholder="請輸入簽核單號" className={inputCls} />
            </AdvField>
            <AdvField label="文件名稱">
              <input type="text" placeholder="請輸入文件名稱" className={inputCls} />
            </AdvField>
            <AdvField label="主旨">
              <input type="text" placeholder="請輸入主旨" className={inputCls} />
            </AdvField>
          </div>

          <div className="mb-3 border-t border-gray-200 pt-3">
            <p className="mb-2 text-xs font-semibold text-gray-500">分類條件</p>
            <div className="grid grid-cols-4 gap-3">
              <AdvField label="群">
                <CascadeSelect
                  options={["", "營運群", "行政群", "客服群", "研發群"]}
                  value={group}
                  onChange={setGroup}
                />
              </AdvField>
              <AdvField label="處">
                <CascadeSelect
                  options={group ? ["", "營運處", "行政處", "客服處", "研發處"] : [""]}
                  value=""
                  onChange={() => {}}
                  disabled={!group}
                />
              </AdvField>
              <AdvField label="部門代碼">
                <input type="text" placeholder="請輸入部門代碼" className={inputCls} />
              </AdvField>
              <AdvField label="職稱">
                <input type="text" placeholder="請輸入職稱" className={inputCls} />
              </AdvField>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="rounded-lg border border-gray-200 px-4 py-1.5 text-sm text-gray-500 transition-all hover:bg-gray-100"
            >
              <X size={12} className="mr-1 inline" />
              清除條件
            </button>
            <button
              type="button"
              className="rounded-lg px-4 py-1.5 text-sm font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#0D9488" }}
            >
              <Search size={12} className="mr-1 inline" />
              搜尋
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-gray-700 placeholder:text-gray-400 transition-all focus:border-teal-500 focus:outline-none";

function FilterSelect({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="relative flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5">
      <span className="text-xs font-semibold text-gray-500">{label}</span>
      <select
        className="appearance-none bg-transparent pr-5 text-sm text-gray-600 focus:outline-none"
        style={{ fontSize: "12px" }}
        defaultValue={options[0]}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown size={12} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
    </label>
  );
}

function AdvField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold text-gray-500">{label}</label>
      {children}
    </div>
  );
}

function CascadeSelect({
  options,
  value,
  onChange,
  disabled = false,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-1.5 pr-7 text-gray-700 transition-all focus:border-teal-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-50"
        style={{ fontSize: "12px", color: value ? "#374151" : "#9CA3AF" }}
      >
        <option value="">請選擇</option>
        {options.filter(Boolean).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown size={11} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
}
