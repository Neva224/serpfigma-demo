import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

export interface CascadeSelectField {
  label: string;
  value: string;
  placeholder: string;
  options: string[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

interface Props {
  title?: string;
  description?: ReactNode;
  fields: CascadeSelectField[];
  className?: string;
}

export function CascadeSelectGroup({ title, description, fields, className = "" }: Props) {
  return (
    <div className={`space-y-3 ${className}`}>
      {(title || description) && (
        <div className="space-y-1">
          {title && <p className="text-sm font-semibold text-slate-700">{title}</p>}
          {description && <div className="text-xs leading-6 text-slate-500">{description}</div>}
        </div>
      )}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        {fields.map((field, index) => (
          <label key={field.label} className="space-y-1.5">
            <div className="flex items-center gap-1.5">
              <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white bg-teal-600">
                {index + 1}
              </span>
              <span className="text-xs font-semibold text-slate-600">{field.label}</span>
            </div>
            <div className="relative">
              <select
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                disabled={field.disabled}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-3 pr-10 text-sm text-slate-700 outline-none transition focus:border-teal-500 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-60"
              >
                <option value="">{field.placeholder}</option>
                {field.options.filter(Boolean).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown size={13} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
