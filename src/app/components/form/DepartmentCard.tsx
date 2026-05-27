import { ChevronDown, GitBranch } from "lucide-react";
import { Card } from "./BasicInfoCard";
import {
  buildHrScopePayload as resolveHrScopePayload,
  getHrScopeLevelOptions,
  HR_SCOPE_NODES,
  type HrScopeSelectionPath,
} from "../../data/catalogModels";

export interface DepartmentSelection extends HrScopeSelectionPath {
  regionName: string;
  companyName: string;
  businessGroupName: string;
  divisionName: string;
  departmentName: string;
  teamName: string;
}

const DEFAULT_SELECTION: DepartmentSelection = {
  regionName: "",
  companyName: "",
  businessGroupName: "",
  divisionName: "",
  departmentName: "",
  teamName: "",
};

interface Props {
  value: DepartmentSelection;
  onChange: (next: DepartmentSelection) => void;
}

export function DepartmentCard({ value, onChange }: Props) {
  const level1Options = getHrScopeLevelOptions(HR_SCOPE_NODES, []);
  const level2Options = value.regionName ? getHrScopeLevelOptions(HR_SCOPE_NODES, [value.regionName]) : [];
  const level3Options = value.companyName
    ? getHrScopeLevelOptions(HR_SCOPE_NODES, [value.regionName, value.companyName])
    : [];
  const level4Options = value.businessGroupName
    ? getHrScopeLevelOptions(HR_SCOPE_NODES, [
        value.regionName,
        value.companyName,
        value.businessGroupName,
      ])
    : [];

  const payload = resolveHrScopePayload(HR_SCOPE_NODES, value);

  return (
    <Card title="文件所屬部門" icon="🏢">
      <div className="space-y-4">
        <p className="flex items-center gap-1.5 text-xs text-gray-400">
          <GitBranch size={12} />
          選擇文件所屬的部門範圍，會自動帶出對應的下層選項。
        </p>

        <div className="grid grid-cols-4 gap-3">
          <DeptSelect
            label="區域"
            options={level1Options}
            placeholder="請選擇區域"
            value={value.regionName}
            onChange={(next) =>
              onChange({
                ...DEFAULT_SELECTION,
                regionName: next,
              })
            }
            step={1}
          />
          <DeptSelect
            label="公司"
            options={level2Options}
            placeholder={value.regionName ? "請選擇公司" : "請先選擇區域"}
            disabled={!value.regionName}
            value={value.companyName}
            onChange={(next) =>
              onChange({
                ...value,
                companyName: next,
                businessGroupName: "",
                divisionName: "",
                departmentName: "",
                teamName: "",
              })
            }
            step={2}
          />
          <DeptSelect
            label="群(事業群)"
            options={level3Options}
            placeholder={value.companyName ? "請選擇群(事業群)" : "請先選擇公司"}
            disabled={!value.companyName}
            value={value.businessGroupName}
            onChange={(next) =>
              onChange({
                ...value,
                businessGroupName: next,
                divisionName: "",
                departmentName: "",
                teamName: "",
              })
            }
            step={3}
          />
          <DeptSelect
            label="處(事業處)"
            options={level4Options}
            placeholder={value.businessGroupName ? "請選擇處(事業處)" : "請先選擇群(事業群)"}
            disabled={!value.businessGroupName}
            value={value.divisionName}
            onChange={(next) =>
              onChange({
                ...value,
                divisionName: next,
                departmentName: "",
                teamName: "",
              })
            }
            step={4}
          />
        </div>

        <div className="mt-1 flex items-center gap-0">
          {["區域", "公司", "群", "處"].map((segment, index, arr) => (
            <div key={segment} className="flex flex-1 items-center">
              <div
                className="h-1 flex-1 rounded-l-full"
                style={{
                  backgroundColor:
                    (index === 0 && value.regionName) ||
                    (index === 1 && value.companyName) ||
                    (index === 2 && value.businessGroupName) ||
                    (index === 3 && value.divisionName)
                      ? "#0D9488"
                      : "#E5E7EB",
                }}
              />
              {index < arr.length - 1 && (
                <div
                  className="z-10 -ml-1 -mr-1 h-2 w-2 rotate-45 border-r-2 border-t-2"
                  style={{
                    borderColor:
                      (index === 0 && value.companyName) ||
                      (index === 1 && value.businessGroupName) ||
                      (index === 2 && value.divisionName)
                        ? "#0D9488"
                        : "#E5E7EB",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {payload.scopePath.length > 0 && (
          <div className="flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm" style={{ backgroundColor: "#F0FDFA", borderColor: "#99F6E4" }}>
            <span className="text-xs font-medium text-teal-600">目前選擇：</span>
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
          style={{ fontSize: "9px", fontWeight: 700, backgroundColor: disabled ? "#D1D5DB" : "#0D9488" }}
        >
          {step}
        </span>
        <label className="text-xs text-gray-600" style={{ fontWeight: 600 }}>
          {label}
        </label>
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
