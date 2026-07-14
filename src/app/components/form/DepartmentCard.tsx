import { ChevronDown, GitBranch } from "lucide-react";
import { Card } from "./BasicInfoCard";
import {
  createEmptyHrScopeSelection,
  type HrScopeSelection,
} from "../../data/hrScopeModel";
import { useOrgDirectory } from "../../hooks/useOrgDirectory";

export interface DepartmentSelection extends HrScopeSelection {}

const LEVEL_LABELS = ["公司", "群", "處", "部"] as const;

interface Props {
  value: DepartmentSelection;
  onChange: (next: DepartmentSelection) => void;
}

export function DepartmentCard({ value, onChange }: Props) {
  // 部門資料改由 orgRepository（目前靜態、未來 BFF/HCM API）供應
  const { getLevelOptions, buildPayload } = useOrgDirectory();
  const companyOptions = getLevelOptions(value, 0);
  const groupOptions = value.companyName ? getLevelOptions(value, 1) : [];
  const divisionOptions = value.groupName ? getLevelOptions(value, 2) : [];
  const departmentOptions = value.divisionName ? getLevelOptions(value, 3) : [];
  const payload = buildPayload(value);

  return (
    <Card title="文件所屬部門" icon="🏢">
      <div className="space-y-4">
        <p className="flex items-center gap-1.5 text-xs text-slate-500">
          <GitBranch size={12} className="text-teal-500" />
          以 HR Excel 的公司 / 群 / 處 / 部 結構進行選擇
        </p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          <DeptSelect
            label={LEVEL_LABELS[0]}
            options={companyOptions}
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
            options={groupOptions}
            placeholder={value.companyName ? "請選擇群" : "請先選擇公司"}
            disabled={!value.companyName}
            value={value.groupName}
            onChange={(next) =>
              onChange({
                ...value,
                groupName: next,
                divisionName: "",
                departmentName: "",
              })
            }
            step={2}
          />
          <DeptSelect
            label={LEVEL_LABELS[2]}
            options={divisionOptions}
            placeholder={value.groupName ? "請選擇處" : "請先選擇群"}
            disabled={!value.groupName}
            value={value.divisionName}
            onChange={(next) =>
              onChange({
                ...value,
                divisionName: next,
                departmentName: "",
              })
            }
            step={3}
          />
          <DeptSelect
            label={LEVEL_LABELS[3]}
            options={departmentOptions}
            placeholder={value.divisionName ? "請選擇部" : "請先選擇處"}
            disabled={!value.divisionName}
            value={value.departmentName}
            onChange={(next) =>
              onChange({
                ...value,
                departmentName: next,
              })
            }
            step={4}
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
                    (index === 3 && value.departmentName)
                      ? "#3A867B"
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
                      (index === 2 && value.departmentName)
                        ? "#3A867B"
                        : "#E5E7EB",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {payload.scopePath.length > 0 && (
          <div
            className="flex flex-wrap items-center gap-2 rounded-xl border px-4 py-2.5 text-sm shadow-sm"
            style={{ backgroundColor: "#F0FDFA", borderColor: "#99F6E4" }}
          >
            <span className="text-xs font-semibold text-teal-600">目前部門路徑：</span>
            {payload.scopePath.map((segment, index) => (
              <span key={`${segment}-${index}`} className="flex items-center gap-2">
                <span className="text-xs font-semibold text-teal-800">{segment}</span>
                {index < payload.scopePath.length - 1 && <span className="text-teal-300">/</span>}
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
      <div className="mb-1.5 flex items-center gap-1.5">
        <span
          className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-white"
          style={{ fontSize: "9px", fontWeight: 700, backgroundColor: disabled ? "#D1D5DB" : "#3A867B" }}
        >
          {step}
        </span>
        <label className="text-xs font-semibold text-slate-600">{label}</label>
      </div>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full appearance-none rounded-xl border border-slate-200 px-3.5 py-3 pr-10 text-sm transition-all focus:border-teal-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
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
        <ChevronDown size={13} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  );
}
