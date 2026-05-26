import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, Field } from "./BasicInfoCard";
import { LEVEL_OPTIONS, type DocumentLevel } from "../document-management/mockData";

const L1 = ["", "法務", "人資資源管理", "雄獅大學", "資安暨個資管理室", "其他"];
const L2: Record<string, string[]> = {
  法務: ["", "契約管理", "法規遵循", "簽核流程"],
  人資資源管理: ["", "組織與人員", "考勤與出勤", "薪酬福利"],
  雄獅大學: ["", "新人訓練", "教材與指南", "資安教材"],
  資安暨個資管理室: ["", "資訊安全", "個資管理", "權限控管"],
  其他: ["", "部門共用", "表單範本", "流程標準"],
};
const L3: Record<string, string[]> = {
  契約管理: ["", "內部公版契約", "外部合約", "版本歷程"],
  法規遵循: ["", "稽核文件", "法遵清單", "對應表單"],
  簽核流程: ["", "主管簽核", "文管審核", "送審檢核"],
  組織與人員: ["", "部門異動", "名冊維護", "職務表單"],
  考勤與出勤: ["", "請假", "加班", "出勤規範"],
  薪酬福利: ["", "薪資", "獎金", "福利制度"],
  新人訓練: ["", "課程簡介", "新人手冊", "FAQ"],
  教材與指南: ["", "操作手冊", "流程圖", "教學簡報"],
  資安教材: ["", "OTP", "密碼規範", "資安宣導"],
  資訊安全: ["", "弱點管理", "資安政策", "事件通報"],
  個資管理: ["", "個資盤點", "保存年限", "使用授權"],
  權限控管: ["", "角色權限", "申請流程", "帳號管理"],
  部門共用: ["", "共用文件", "公告", "規範"],
  表單範本: ["", "申請單", "簽核單", "範本庫"],
  流程標準: ["", "SOP", "作業說明", "流程檢核"],
};
const L4 = ["", "流程文件", "細分類", "表單附件", "其他"];
export interface ClassificationSelection {
  l1: string;
  l2: string;
  l3: string;
  l4: string;
}

export function buildCategoryPayload(selection: ClassificationSelection) {
  const categoryPath = [selection.l1, selection.l2, selection.l3, selection.l4].filter(Boolean);
  return {
    categoryPath,
    categoryId: categoryPath.join(" / "),
  };
}

interface Props {
  value: ClassificationSelection;
  onChange: (next: ClassificationSelection) => void;
}

export function ClassificationCard({ value, onChange }: Props) {
  const [hierarchy, setHierarchy] = useState<DocumentLevel | "">("");

  const l2Options = value.l1 ? (L2[value.l1] ?? [""]) : [""];
  const l3Options = value.l2 ? (L3[value.l2] ?? [""]) : [""];
  const payload = buildCategoryPayload(value);

  return (
    <Card title="文件分類與歸屬" icon="🧭">
      <div className="space-y-5">
        <div>
          <p className="mb-3 flex items-center gap-1 text-xs text-gray-400">
            <span>依照資料夾層級選擇歸屬分類，建立文件時會一起寫入 categoryId / categoryPath。</span>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Field label="第一層分類" required>
              <Select
                options={L1}
                placeholder="請選擇第一層分類"
                value={value.l1}
                onChange={(l1) => onChange({ l1, l2: "", l3: "", l4: "" })}
              />
            </Field>
            <Field label="第二層分類" required>
              <Select
                options={l2Options}
                placeholder={value.l1 ? "請選擇第二層分類" : "請先選擇第一層分類"}
                disabled={!value.l1}
                value={value.l2}
                onChange={(l2) => onChange({ ...value, l2, l3: "", l4: "" })}
              />
            </Field>
            <Field label="第三層分類" required>
              <Select
                options={l3Options}
                placeholder={value.l2 ? "請選擇第三層分類" : "請先選擇第二層分類"}
                disabled={!value.l2}
                value={value.l3}
                onChange={(l3) => onChange({ ...value, l3, l4: "" })}
              />
            </Field>
            <Field label="第四層分類" required>
              <Select
                options={L4}
                placeholder={value.l3 ? "請選擇第四層分類" : "請先選擇第三層分類"}
                disabled={!value.l3}
                value={value.l4}
                onChange={(l4) => onChange({ ...value, l4 })}
              />
            </Field>
          </div>
        </div>

        {payload.categoryPath.length > 0 && (
          <div className="rounded-lg border border-teal-100 bg-teal-50 px-3 py-2">
            <p className="mb-1 text-xs font-medium text-teal-600">目前歸屬</p>
            <div className="flex flex-wrap items-center gap-1.5">
              {payload.categoryPath.map((segment, index) => (
                <span key={segment} className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-teal-800">{segment}</span>
                  {index < payload.categoryPath.length - 1 && <span className="text-xs text-teal-300">/</span>}
                </span>
              ))}
            </div>
            <p className="mt-1 text-[11px] text-teal-700/80">
              categoryId: <span className="font-mono">{payload.categoryId || "未選擇"}</span>
            </p>
          </div>
        )}

        <div className="border-t border-gray-100 pt-5">
          <Field label="文件階級" required>
            <Select
              options={LEVEL_OPTIONS.map((option) => ({ value: option.value, label: option.label }))}
              placeholder="請選擇文件階級"
              value={hierarchy}
              onChange={setHierarchy}
            />
          </Field>
          <p className="mt-1.5 text-xs text-gray-400">
            文件階級與分類歸屬分開保存，分類會寫入 categoryId / categoryPath，階級則作為文件層級欄位。
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
  options: Array<string | { value: string; label: string }>;
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
        className="w-full appearance-none rounded-lg border border-gray-200 px-4 py-2.5 pr-9 text-sm transition-all focus:border-teal-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        style={{
          backgroundColor: disabled ? "#F9FAFB" : "#F9FAFB",
          color: value ? "#1F2937" : "#9CA3AF",
        }}
      >
        <option value="">{placeholder}</option>
        {options.filter(Boolean).map((option) => {
          const value = typeof option === "string" ? option : option.value;
          const label = typeof option === "string" ? option : option.label;
          return (
          <option key={value} value={value}>
            {label}
          </option>
          );
        })}
      </select>
      <ChevronDown
        size={14}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  );
}
