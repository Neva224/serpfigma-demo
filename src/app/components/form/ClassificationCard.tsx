import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { buildCategoryPayload as resolveCategoryPayload, CATEGORY_NODES, getCategoryLevelOptions, type CategorySelectionPath } from "../../data/catalogModels";
import { Card, Field } from "./BasicInfoCard";

const DOCUMENT_LEVEL_OPTIONS = [
  { value: "level1", label: "第一層文件", short: "一層", description: "第一層文件" },
  { value: "level2", label: "第二層文件", short: "二層", description: "第二層文件" },
  { value: "level3", label: "第三層文件", short: "三層", description: "第三層文件" },
  { value: "level4", label: "第四層文件", short: "四層", description: "第四層文件" },
  { value: "level5", label: "第五層文件", short: "五層", description: "第五層文件" },
  { value: "level6", label: "第六層文件", short: "六層", description: "第六層文件" },
] as const;

export interface ClassificationSelection extends CategorySelectionPath {
  l1: string;
  l2: string;
  l3: string;
  l4: string;
}

export function buildCategoryPayload(selection: ClassificationSelection) {
  return resolveCategoryPayload(CATEGORY_NODES, selection);
}

interface Props {
  value: ClassificationSelection;
  onChange: (next: ClassificationSelection) => void;
}

export function ClassificationCard({ value, onChange }: Props) {
  const [hierarchy, setHierarchy] = useState<string>("");

  const l1Options = getCategoryLevelOptions(CATEGORY_NODES, []);
  const l2Options = value.l1 ? getCategoryLevelOptions(CATEGORY_NODES, [value.l1]) : [];
  const l3Options = value.l2 ? getCategoryLevelOptions(CATEGORY_NODES, [value.l1, value.l2]) : [];
  const l4Options = value.l3 ? getCategoryLevelOptions(CATEGORY_NODES, [value.l1, value.l2, value.l3]) : [];
  const payload = buildCategoryPayload(value);

  return (
    <Card title="知識樹分類" icon="🗂️">
      <div className="space-y-5">
        <div>
          <p className="mb-3 flex items-center gap-1 text-xs text-gray-400">
            <span>選擇對應的知識樹路徑，系統會自動產生 categoryId / categoryPath。</span>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Field label="第一層分類" required>
              <Select
                options={l1Options}
                placeholder="請先選擇第一層分類"
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
                options={l4Options}
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
            <p className="mb-1 text-xs font-medium text-teal-600">已選分類路徑</p>
            <div className="flex flex-wrap items-center gap-1.5">
              {payload.categoryPath.map((segment, index) => (
                <span key={`${segment}-${index}`} className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-teal-800">{segment}</span>
                  {index < payload.categoryPath.length - 1 && <span className="text-xs text-teal-300">/</span>}
                </span>
              ))}
            </div>
            <p className="mt-1 text-[11px] text-teal-700/80">
              categoryId: <span className="font-mono">{payload.categoryId || "尚未選擇"}</span>
            </p>
          </div>
        )}

        <div className="border-t border-gray-100 pt-5">
          <Field label="文件階級" required>
            <Select
              options={DOCUMENT_LEVEL_OPTIONS.map((option) => ({ value: option.value, label: option.label }))}
              placeholder="請選擇文件階級"
              value={hierarchy}
              onChange={setHierarchy}
            />
          </Field>
          <p className="mt-1.5 text-xs text-gray-400">
            文件階級會影響顯示與查詢，並與 categoryId / categoryPath 對應。
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
          const optionValue = typeof option === "string" ? option : option.value;
          const label = typeof option === "string" ? option : option.label;
          return (
            <option key={optionValue} value={optionValue}>
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
