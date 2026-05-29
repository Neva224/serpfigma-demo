import { getDocumentStatusProgress, getDocumentStatusLabel, getStatusToneClasses } from "../../workflow/statusCatalog";

interface Props {
  status: string;
  label?: string;
  compact?: boolean;
  className?: string;
}

export function StatusRail({ status, label, compact = false, className = "" }: Props) {
  const stages = getDocumentStatusProgress(status);
  const currentLabel = getDocumentStatusLabel(status);
  const isExceptionStatus = ["已退回", "草稿"].includes(currentLabel);

  return (
    <div className={`rounded-2xl border border-slate-200 bg-white ${className}`}>
      <div className={`flex items-center justify-between gap-3 border-b border-slate-100 px-4 ${compact ? "py-3" : "py-4"}`}>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">文件狀態流程</p>
          <h3 className={`font-semibold text-slate-900 ${compact ? "mt-1 text-sm" : "mt-1 text-base"}`}>
            {label ?? currentLabel}
          </h3>
        </div>
        <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">{currentLabel}</span>
      </div>

      {isExceptionStatus && (
        <div className="border-b border-slate-100 bg-slate-50 px-4 py-2 text-xs text-slate-500">
          {currentLabel === "已退回"
            ? "文件已退回，將回到上傳者並從主管簽核重新開始。"
            : "草稿尚未進入簽核流程。"}
        </div>
      )}

      <div className="overflow-x-auto px-4 py-4">
        <div className="min-w-[760px]">
          <div className="relative flex items-start justify-between gap-3">
            <div className="absolute left-5 right-5 top-4 h-px bg-slate-200" />
            {stages.map((stage, index) => {
              const tone = getStatusToneClasses(stage.tone);
              const isDone = stage.state === "done";
              const isCurrent = stage.state === "current";

              return (
                <div key={stage.key} className="relative z-10 flex w-full flex-1 flex-col items-center text-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                      isCurrent ? `${tone.bg} ${tone.border}` : isDone ? `${tone.bg} ${tone.border}` : "border-slate-200 bg-white"
                    }`}
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${isCurrent ? tone.dot : isDone ? tone.dot : "bg-slate-300"}`} />
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className={`text-sm font-semibold ${isCurrent ? tone.text : isDone ? "text-slate-800" : "text-slate-400"}`}>
                      {stage.label}
                    </div>
                    <div className={`text-[11px] ${isCurrent ? tone.text : "text-slate-400"}`}>
                      {isCurrent ? "目前狀態" : isDone ? "已完成" : "待進行"}
                    </div>
                  </div>
                  {index < stages.length - 1 && <div className="hidden xl:block" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
