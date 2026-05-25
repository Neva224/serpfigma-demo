import { ChevronDown, GitBranch } from "lucide-react";
import { useState } from "react";
import { Card } from "./BasicInfoCard";

const GROUPS = ["", "技術事業群", "商業事業群", "管理事業群", "國際事業群"];
const DIVISIONS: Record<string, string[]> = {
  技術事業群: ["", "軟體開發處", "資訊安全處", "雲端平台處"],
  商業事業群: ["", "業務拓展處", "行銷策略處", "客戶服務處"],
  管理事業群: ["", "人力資源處", "財務法務處", "行政總務處"],
  國際事業群: ["", "亞太業務處", "歐美業務處", "新興市場處"],
};
const DEPARTMENTS: Record<string, string[]> = {
  軟體開發處: ["", "前端開發部", "後端開發部", "品質保證部"],
  資訊安全處: ["", "安全架構部", "弱點管理部", "合規稽核部"],
  人力資源處: ["", "招募甄選部", "教育訓練部", "薪酬福利部"],
  財務法務處: ["", "財務會計部", "法務合規部", "稅務規劃部"],
};
const TEAMS: Record<string, string[]> = {
  前端開發部: ["", "UI/UX組", "元件開發組", "效能優化組"],
  後端開發部: ["", "API開發組", "資料庫組", "微服務組"],
  招募甄選部: ["", "校園招募組", "社會招募組", "獵才合作組"],
};

export function DepartmentCard() {
  const [group, setGroup] = useState("");
  const [division, setDivision] = useState("");
  const [dept, setDept] = useState("");

  const divisionOpts = group ? (DIVISIONS[group] ?? [""]) : [""];
  const deptOpts = division ? (DEPARTMENTS[division] ?? [""]) : [""];
  const teamOpts = dept ? (TEAMS[dept] ?? [""]) : [""];

  return (
    <Card title="簽核歸屬部門" icon="🏢">
      <div className="space-y-4">
        <p className="text-xs text-gray-400 flex items-center gap-1.5">
          <GitBranch size={12} />
          請依序選擇組織層級，確認文件所屬簽核部門
        </p>

        {/* Four sequential dropdowns */}
        <div className="grid grid-cols-4 gap-3">
          <DeptSelect
            label="群（事業群）"
            options={GROUPS}
            placeholder="選擇事業群"
            value={group}
            onChange={(v) => { setGroup(v); setDivision(""); setDept(""); }}
            step={1}
          />
          <DeptSelect
            label="處（事業處）"
            options={divisionOpts}
            placeholder={group ? "選擇事業處" : "請先選事業群"}
            disabled={!group}
            value={division}
            onChange={(v) => { setDivision(v); setDept(""); }}
            step={2}
          />
          <DeptSelect
            label="部門"
            options={deptOpts}
            placeholder={division ? "選擇部門" : "請先選事業處"}
            disabled={!division}
            value={dept}
            onChange={setDept}
            step={3}
          />
          <DeptSelect
            label="組別"
            options={teamOpts}
            placeholder={dept ? "選擇組別" : "請先選部門"}
            disabled={!dept}
            value=""
            onChange={() => {}}
            step={4}
          />
        </div>

        {/* Visual flow indicator */}
        <div className="flex items-center gap-0 mt-1">
          {["事業群", "事業處", "部門", "組別"].map((s, i) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className="flex-1 h-1 rounded-l-full"
                style={{
                  backgroundColor:
                    (i === 0 && group) || (i === 1 && division) || (i === 2 && dept)
                      ? "#0D9488"
                      : "#E5E7EB",
                }}
              />
              {i < 3 && (
                <div
                  className="w-2 h-2 rotate-45 border-t-2 border-r-2 -ml-1 -mr-1 z-10"
                  style={{
                    borderColor:
                      (i === 0 && division) || (i === 1 && dept)
                        ? "#0D9488"
                        : "#E5E7EB",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Org path display */}
        {group && (
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm"
            style={{ backgroundColor: "#F0FDFA", borderColor: "#99F6E4" }}
          >
            <span className="text-teal-600 font-medium text-xs">簽核路徑：</span>
            {[group, division, dept].filter(Boolean).map((s, i, arr) => (
              <span key={s} className="flex items-center gap-2">
                <span className="text-teal-800 text-xs font-semibold">{s}</span>
                {i < arr.length - 1 && <span className="text-teal-300">›</span>}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}

function DeptSelect({
  label,
  options,
  placeholder,
  disabled = false,
  value,
  onChange,
  step,
}: {
  label: string;
  options: string[];
  placeholder: string;
  disabled?: boolean;
  value: string;
  onChange: (v: string) => void;
  step: number;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-1.5">
        <span
          className="w-4 h-4 rounded-full flex items-center justify-center text-white flex-shrink-0"
          style={{ fontSize: "9px", fontWeight: 700, backgroundColor: disabled ? "#D1D5DB" : "#0D9488" }}
        >
          {step}
        </span>
        <label className="text-xs text-gray-600" style={{ fontWeight: 600 }}>{label}</label>
      </div>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full appearance-none px-3 py-2.5 pr-8 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-teal-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: disabled ? "#F3F4F6" : "#F9FAFB",
            color: value ? "#1F2937" : "#9CA3AF",
          }}
        >
          <option value="">{placeholder}</option>
          {options.filter(Boolean).map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <ChevronDown
          size={13}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>
    </div>
  );
}
