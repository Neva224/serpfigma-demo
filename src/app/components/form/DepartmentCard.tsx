import { ChevronDown, GitBranch } from "lucide-react";
import { Card } from "./BasicInfoCard";
import {
  buildHrScopePayload,
  createEmptyHrScopeSelection,
  getHrScopeLevelOptions,
  type HrScopeSelection,
} from "../../data/hrScopeModel";
import { HR_SCOPE_ROWS } from "../../data/hrScopeModel";

export interface DepartmentSelection extends HrScopeSelection {}

const LEVEL_LABELS = ["公司", "群", "處", "部", "組"] as const;

interface Props {
  value: DepartmentSelection;
  onChange: (next: DepartmentSelection) => void;
}

export function DepartmentCard({ value, onChange }: Props) {
  const level1Options = getHrScopeLevelOptions(HR_SCOPE_ROWS, value, 0);
  const level2Options = value.companyName ? getHrScopeLevelOptions(HR_SCOPE_ROWS, value, 1) : [];
  const level3Options = value.groupName ? getHrScopeLevelOptions(HR_SCOPE_ROWS, value, 2) : [];
  const level4Options = value.divisionName ? getHrScopeLevelOptions(HR_SCOPE_ROWS, value, 3) : [];
  const level5Options = value.departmentName ? getHrScopeLevelOptions(HR_SCOPE_ROWS, value, 4) : [];

  const payload = buildHrScopePayload(HR_SCOPE_ROWS, value);

  return (
    <Card title="文件所屬部門" icon="🏢">
      <div className="space-y-4">
        <p className="flex items-center gap-1.5 text-xs text-gray-400">
          <GitBranch size={12} />
          這一區使用獨立的 HR scope 資料結構，不使用知識樹分類資料。
        </p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
          <DeptSelect
            label={LEVEL_LABELS[0]}
            options={level1Options}
            placeholder="請選擇公司"
            value={value.companyName}
            onChange={(next) =>
              onChange({
                ...createEmptyHrScopeSelection(),
                companyName: next,
              })
            }
            step={1}
          />
          <DeptSelect
            label={LEVEL_LABELS[1]}
            options={level2Options}
            placeholder={value.companyName ? "請選擇群" : "請先選擇公司"}
            disabled={!value.companyName}
            value={value.groupName}
            onChange={(next) =>
              onChange({
                ...value,
                groupName: next,
                divisionName: "",
                departmentName: "",
                teamName: "",
              })
            }
            step={2}
          />
          <DeptSelect
            label={LEVEL_LABELS[2]}
            options={level3Options}
            placeholder={value.groupName ? "請選擇處" : "請先選擇群"}
            disabled={!value.groupName}
            value={value.divisionName}
            onChange={(next) =>
              onChange({
                ...value,
                divisionName: next,
                departmentName: "",
                teamName: "",
              })
            }
            step={3}
          />
          <DeptSelect
            label={LEVEL_LABELS[3]}
            options={level4Options}
            placeholder={value.divisionName ? "請選擇部" : "請先選擇處"}
            disabled={!value.divisionName}
            value={value.departmentName}
            onChange={(next) =>
              onChange({
                ...value,
                departmentName: next,
                teamName: "",
              })
            }
            step={4}
          />
          <DeptSelect
            label={LEVEL_LABELS[4]}
            options={level5Options}
            placeholder={value.departmentName ? "請選擇組" : "請先選擇部"}
            disabled={!value.departmentName}
            value={value.teamName}
            onChange={(next) =>
              onChange({
                ...value,
                teamName: next,
              })
            }
            step={5}
          />
        </div>

        <div className="mt-1 flex items-center gap-0">
          {LEVEL_LABELS.map((segment, index, arr) => (
            <div key={segment} className="flex flex-1 items-center">
              <div
                className="h-1 flex-1 rounded-l-full"
                style={{
                  backgroundColor:
                    (index === 0 && value.companyName) ||
                    (index === 1 && value.groupName) ||
                    (index === 2 && value.divisionName) ||
                    (index === 3 && value.departmentName) ||
                    (index === 4 && value.teamName)
                      ? "#0D9488"
                      : "#E5E7EB",
                }}
              />
              {index < arr.length - 1 && (
                <div
                  className="z-10 -ml-1 -mr-1 h-2 w-2 rotate-45 border-r-2 border-t-2"
                  style={{
                    borderColor:
                      (index === 0 && value.groupName) ||
                      (index === 1 && value.divisionName) ||
                      (index === 2 && value.departmentName) ||
                      (index === 3 && value.teamName)
                        ? "#0D9488"
                        : "#E5E7EB",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {payload.scopePath.length > 0 && (
          <div
            className="flex flex-wrap items-center gap-2 rounded-lg border px-4 py-2.5 text-sm"
            style={{ backgroundColor: "#F0FDFA", borderColor: "#99F6E4" }}
          >
            <span className="text-xs font-medium text-teal-600">已選部門：</span>
            {payload.scopePath.map((segment, index) => (
              <span key={`${segment}-${index}`} className="flex items-center gap-2">
                <span className="text-xs font-semibold text-teal-800">{segment}</span>
                {index < payload.scopePath.length - 1 && <span className="text-teal-300">/</span>}
              </span>
            ))}
          </div>
        )}

        {payload.matchedRow && (
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500">
            對應員編：{payload.matchedRow.empId}，姓名：{payload.matchedRow.name}，職稱：{payload.matchedRow.title}
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
      <div className="mb-1.5 flex items-center gap-1.5">
        <span
          className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-white"
          style={{ fontSize: "9px", fontWeight: 700, backgroundColor: disabled ? "#D1D5DB" : "#0D9488" }}
        >
          {step}
        </span>
        <label className="text-xs font-semibold text-gray-600">{label}</label>
      </div>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full appearance-none rounded-lg border border-gray-200 px-3 py-2.5 pr-8 text-sm transition-all focus:border-teal-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          style={{
            backgroundColor: disabled ? "#F3F4F6" : "#F9FAFB",
            color: value ? "#1F2937" : "#9CA3AF",
          }}
        >
          <option value="">{placeholder}</option>
          {options.filter(Boolean).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={13}
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>
  );
}
