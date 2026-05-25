import { ChevronDown } from "lucide-react";
import { Card, Field } from "./BasicInfoCard";

const L1 = ["", "行政管理", "財務會計", "技術研發", "人力資源", "業務行銷"];
const L2: Record<string, string[]> = {
  行政管理: ["", "文書管理", "庶務管理", "資產管理"],
  財務會計: ["", "預算規劃", "帳務處理", "稅務申報"],
  技術研發: ["", "系統架構", "產品開發", "資安管理"],
  人力資源: ["", "招募甄選", "教育訓練", "薪酬福利"],
  業務行銷: ["", "市場分析", "客戶關係", "品牌推廣"],
};
const L3: Record<string, string[]> = {
  文書管理: ["", "合約文件", "公文函件", "簽核紀錄"],
  預算規劃: ["", "年度預算", "季度預算", "專案預算"],
  系統架構: ["", "架構設計", "API規格", "資料庫設計"],
  招募甄選: ["", "職缺管理", "面試評核", "錄用作業"],
  市場分析: ["", "競品分析", "用戶調研", "市場趨勢"],
};
const L4: string[] = ["", "第一版", "第二版", "修訂版", "最終版"];

const HIERARCHY = ["", "政策文件", "程序文件", "作業指導書", "表單記錄", "參考資料"];

import { useState } from "react";

export function ClassificationCard() {
  const [l1, setL1] = useState("");
  const [l2, setL2] = useState("");
  const [l3, setL3] = useState("");

  const l2Options = l1 ? (L2[l1] ?? [""]) : [""];
  const l3Options = l2 ? (L3[l2] ?? [""]) : [""];

  return (
    <Card title="文件知識樹與階層選擇" icon="🌿">
      <div className="space-y-5">
        {/* 2x2 cascading grid */}
        <div>
          <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
            <span>依序選擇各層級類別，建立文件的知識樹分類路徑</span>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Field label="第一層類別" required>
              <Select
                options={L1}
                placeholder="請選擇第一層"
                value={l1}
                onChange={(v) => { setL1(v); setL2(""); setL3(""); }}
              />
            </Field>
            <Field label="第二層類別" required>
              <Select
                options={l2Options}
                placeholder={l1 ? "請選擇第二層" : "請先選第一層"}
                disabled={!l1}
                value={l2}
                onChange={(v) => { setL2(v); setL3(""); }}
              />
            </Field>
            <Field label="第三層類別" required>
              <Select
                options={l3Options}
                placeholder={l2 ? "請選擇第三層" : "請先選第二層"}
                disabled={!l2}
                value={l3}
                onChange={setL3}
              />
            </Field>
            <Field label="第四層類別" required>
              <Select
                options={L4}
                placeholder={l3 ? "請選擇第四層" : "請先選第三層"}
                disabled={!l3}
                value=""
                onChange={() => {}}
              />
            </Field>
          </div>
        </div>

        {/* Breadcrumb preview */}
        {l1 && (
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-teal-50 border border-teal-100">
            <span className="text-xs text-teal-600 font-medium">路徑：</span>
            {[l1, l2, l3].filter(Boolean).map((seg, i, arr) => (
              <span key={seg} className="flex items-center gap-1.5">
                <span className="text-xs text-teal-700 font-semibold">{seg}</span>
                {i < arr.length - 1 && <span className="text-teal-300 text-xs">›</span>}
              </span>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-gray-100 pt-5">
          <Field label="文件階層" required>
            <Select options={HIERARCHY} placeholder="請選擇文件階層類型" value="" onChange={() => {}} />
          </Field>
          <p className="text-xs text-gray-400 mt-1.5">
            文件階層決定文件在組織文管體系中的層級定位（如：政策、程序、作業指導書等）
          </p>
        </div>
      </div>
    </Card>
  );
}

function Select({
  options,
  placeholder,
  disabled = false,
  value,
  onChange,
}: {
  options: string[];
  placeholder: string;
  disabled?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full appearance-none px-4 py-2.5 pr-9 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-teal-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          backgroundColor: disabled ? "#F9FAFB" : "#F9FAFB",
          color: value ? "#1F2937" : "#9CA3AF",
        }}
      >
        <option value="">{placeholder}</option>
        {options.filter(Boolean).map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <ChevronDown
        size={14}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />
    </div>
  );
}
