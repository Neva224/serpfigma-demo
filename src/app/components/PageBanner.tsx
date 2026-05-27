import type { ReactNode } from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";

type Breadcrumb = {
  label: string;
};

interface PageBannerProps {
  breadcrumbs: Breadcrumb[];
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  rightSlot?: ReactNode;
}

export function PageBanner({
  breadcrumbs,
  title,
  subtitle,
  showBackButton = false,
  onBack,
  rightSlot,
}: PageBannerProps) {
  return (
    <div className="mb-5 overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-teal-50 to-white px-5 py-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
            {showBackButton && onBack && (
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm transition hover:bg-white"
                aria-label="返回上一頁"
              >
                <ArrowLeft size={13} />
                返回上一頁
              </button>
            )}
            {breadcrumbs.map((crumb, index) => (
              <span key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
                {showBackButton || index > 0 ? <ChevronRight size={12} className="text-slate-400" /> : null}
                <span>{crumb.label}</span>
              </span>
            ))}
          </div>

          <h2 className="mt-2 text-xl font-bold text-slate-800">{title}</h2>
          {subtitle ? <p className="mt-1 text-sm text-slate-600">{subtitle}</p> : null}
        </div>

        {rightSlot ? <div className="shrink-0">{rightSlot}</div> : null}
      </div>
    </div>
  );
}
