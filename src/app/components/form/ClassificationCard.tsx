import { useMemo, useRef, useState } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import {
  buildCategoryPayload as resolveCategoryPayload,
  CATEGORY_NODES,
  getCategoryLevelOptions,
  type CategoryNode,
  type CategorySelectionPath,
} from "../../data/catalogModels";
import { searchPathNodes } from "../../data/pathSearch";
import { LEVEL_OPTIONS, type DocumentLevel } from "../document-management/mockData";
import { Card, Field } from "./BasicInfoCard";

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
  initialLevel?: DocumentLevel;
}

export function ClassificationCard({ value, onChange, initialLevel }: Props) {
  const [selectedLevel, setSelectedLevel] = useState(initialLevel ?? "");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  const l1Options = getCategoryLevelOptions(CATEGORY_NODES, []);
  const l2Options = value.l1 ? getCategoryLevelOptions(CATEGORY_NODES, [value.l1]) : [];
  const l3Options = value.l2 ? getCategoryLevelOptions(CATEGORY_NODES, [value.l1, value.l2]) : [];
  const l4Options = value.l3 ? getCategoryLevelOptions(CATEGORY_NODES, [value.l1, value.l2, value.l3]) : [];
  const payload = buildCategoryPayload(value);
  const searchResults = useMemo(() => searchPathNodes(CATEGORY_NODES, searchQuery), [searchQuery]);

  function applySearchResult(node: CategoryNode) {
    onChange({
      l1: node.pathNames[0] ?? "",
      l2: node.pathNames[1] ?? "",
      l3: node.pathNames[2] ?? "",
      l4: node.pathNames[3] ?? "",
    });
    setSearchQuery("");
    setSearchFocused(false);
  }

  return (
    <Card title="文件階級與分類" icon="🗂">
      <div className="space-y-5">
        <div>
          <p className="mb-3 text-xs text-slate-500">
            系統會依 <span className="font-semibold text-teal-700">categoryId / categoryPath</span> 自動帶出對應分類。
          </p>

          <div ref={searchBoxRef} className="relative mb-4">
            <div className="relative">
              <Search size={14} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => window.setTimeout(() => setSearchFocused(false), 120)}
                placeholder="輸入關鍵字快速定位分類（例如：人資、合約、財務）"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-8 text-sm text-slate-700 transition-all placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500"
                  aria-label="清除搜尋"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {searchFocused && searchQuery.trim() && (
              <div className="absolute left-0 right-0 top-full z-10 mt-1 max-h-64 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-lg">
                {searchResults.length === 0 ? (
                  <p className="px-4 py-3 text-xs text-slate-400">找不到符合「{searchQuery}」的分類</p>
                ) : (
                  searchResults.map((node) => (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => applySearchResult(node)}
                      className="flex w-full flex-col items-start gap-0.5 px-4 py-2.5 text-left transition hover:bg-teal-50"
                    >
                      <span className="text-sm font-medium text-slate-700">
                        {node.pathNames[node.pathNames.length - 1]}
                      </span>
                      <span className="text-[11px] text-slate-400">{node.pathNames.join(" / ")}</span>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="第一層分類" required>
              <Select
                options={l1Options}
                placeholder="請選擇第一層"
                value={value.l1}
                onChange={(l1) => onChange({ l1, l2: "", l3: "", l4: "" })}
              />
            </Field>
            <Field label="第二層分類" required>
              <Select
                options={l2Options}
                placeholder={value.l1 ? "請選擇第二層" : "請先選擇第一層"}
                disabled={!value.l1}
                value={value.l2}
                onChange={(l2) => onChange({ ...value, l2, l3: "", l4: "" })}
              />
            </Field>
            <Field label="第三層分類" required>
              <Select
                options={l3Options}
                placeholder={value.l2 ? "請選擇第三層" : "請先選擇第二層"}
                disabled={!value.l2}
                value={value.l3}
                onChange={(l3) => onChange({ ...value, l3, l4: "" })}
              />
            </Field>
            <Field label="第四層分類" required>
              <Select
                options={l4Options}
                placeholder={value.l3 ? "請選擇第四層" : "請先選擇第三層"}
                disabled={!value.l3}
                value={value.l4}
                onChange={(l4) => onChange({ ...value, l4 })}
              />
            </Field>
          </div>
        </div>

        {payload.categoryPath.length > 0 && (
          <div className="rounded-xl border border-teal-100 bg-teal-50 px-4 py-3 shadow-sm">
            <p className="mb-1 text-xs font-semibold text-teal-600">目前分類路徑</p>
            <div className="flex flex-wrap items-center gap-1.5">
              {payload.categoryPath.map((segment, index) => (
                <span key={`${segment}-${index}`} className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-teal-800">{segment}</span>
                  {index < payload.categoryPath.length - 1 && <span className="text-xs text-teal-300">/</span>}
                </span>
              ))}
            </div>
            <p className="mt-1 text-[11px] text-teal-700/80">
              分類代碼：<span className="font-mono font-semibold">{payload.categoryCode || "—"}</span>
              <span className="ml-2 text-teal-500/70">內部 id：{payload.categoryId || "未選擇"}</span>
            </p>
          </div>
        )}

        <div className="border-t border-slate-100 pt-5">
          <Field label="文件階級" required>
            <Select
              options={LEVEL_OPTIONS.map((option) => ({ value: option.value, label: option.label }))}
              placeholder="請選擇文件階級"
              value={selectedLevel}
              onChange={setSelectedLevel}
            />
          </Field>
          <input type="hidden" name="documentLevel" value={selectedLevel} />
          <input type="hidden" name="categoryId" value={payload.categoryId} />
          <input type="hidden" name="categoryCode" value={payload.categoryCode} />
          <input type="hidden" name="categoryPath" value={payload.categoryPath.join(" / ")} />
          <p className="mt-1.5 text-xs text-slate-400">
            文件階級只用於 UI 顯示，分類識別仍以 categoryId / categoryPath 為準。
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
        className="w-full appearance-none rounded-xl border border-slate-200 px-4 py-3 pr-10 text-sm text-slate-700 transition-all focus:border-teal-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        style={{
          backgroundColor: disabled ? "#F3F4F6" : "#F9FAFB",
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
      <ChevronDown size={13} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
    </div>
  );
}
