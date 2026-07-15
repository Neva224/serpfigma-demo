import { useState, type ReactNode } from "react";
import { User, CalendarDays, Tag, AlignLeft } from "lucide-react";
import { MAX_TAGS, TAG_SUGGESTIONS } from "../../data/tagVocabulary";

export interface BasicInfoValue {
  title: string;
  ownerName: string;
  validFrom: string;
  validTo: string;
  summary: string;
  tags: string[];
}

interface BasicInfoCardProps {
  initialValue?: BasicInfoValue;
}

export function BasicInfoCard({ initialValue }: BasicInfoCardProps) {
  const [title, setTitle] = useState(initialValue?.title ?? "");
  const [ownerName, setOwnerName] = useState(initialValue?.ownerName ?? "");
  const [validFrom, setValidFrom] = useState(initialValue?.validFrom ?? "");
  const [validTo, setValidTo] = useState(initialValue?.validTo ?? "");
  const [summary, setSummary] = useState(initialValue?.summary ?? "");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState(initialValue?.tags?.length ? initialValue.tags : ["制度", "流程", "2024"]);
  const maxLength = 30;

  const tagLimitReached = tags.length >= MAX_TAGS;

  function addTag(raw: string) {
    const next = raw.trim();
    if (!next) return;
    setTags((current) => {
      if (current.includes(next)) return current;
      if (current.length >= MAX_TAGS) return current; // 規格書 UP-01：最多 10 筆
      return [...current, next];
    });
  }

  return (
    <Card title="文件基本資料" icon="📄">
      <div className="space-y-5">
        <Field label="文件名稱" required>
          <div className="relative">
            <input
              type="text"
              name="title"
              maxLength={maxLength}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="請輸入文件名稱"
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 pr-16 text-sm text-gray-800 transition-all placeholder:text-gray-400 focus:border-teal-500 focus:bg-white focus:outline-none"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
              {title.length}/{maxLength}
            </span>
          </div>
        </Field>

        <Field label="文件負責人" required>
          <div className="relative">
            <User size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="ownerName"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              placeholder="請輸入負責人姓名或代碼"
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-4 text-sm text-gray-800 transition-all placeholder:text-gray-400 focus:border-teal-500 focus:bg-white focus:outline-none"
            />
          </div>
        </Field>

        <Field label="生效日期" required>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <CalendarDays
                size={15}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="date"
                name="validFrom"
                value={validFrom}
                onChange={(e) => setValidFrom(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-gray-700 transition-all focus:border-teal-500 focus:bg-white focus:outline-none"
              />
            </div>
            <div className="relative">
              <CalendarDays
                size={15}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="date"
                name="validTo"
                value={validTo}
                onChange={(e) => setValidTo(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-gray-700 transition-all focus:border-teal-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>
          <p className="mt-1.5 flex items-center gap-1 text-xs text-gray-400">
            <CalendarDays size={11} />
            可輸入文件的起訖生效期間
          </p>
        </Field>

        <Field label="摘要說明">
          <div className="relative">
            <AlignLeft
              size={14}
              className="pointer-events-none absolute left-3.5 top-3 text-gray-400"
            />
            <textarea
              rows={3}
              name="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="請輸入文件用途、適用範圍或補充說明"
              className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 pl-9 text-sm text-gray-800 transition-all placeholder:text-gray-400 focus:border-teal-500 focus:bg-white focus:outline-none"
            />
          </div>
        </Field>

        <Field label="關鍵字">
          <div className="relative">
            <Tag
              size={14}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              list="tag-vocabulary"
              value={tagInput}
              disabled={tagLimitReached}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTag(tagInput);
                  setTagInput("");
                }
              }}
              placeholder={tagLimitReached ? `已達上限 ${MAX_TAGS} 個標籤` : "輸入或選擇關鍵字後按 Enter 新增"}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-4 text-sm text-gray-800 transition-all placeholder:text-gray-400 focus:border-teal-500 focus:bg-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
            />
            <datalist id="tag-vocabulary">
              {TAG_SUGGESTIONS.map((suggestion) => (
                <option key={suggestion} value={suggestion} />
              ))}
            </datalist>
          </div>
          <p className="mt-1.5 text-xs text-gray-400">
            來自標籤資料庫，可自由輸入；最多 {MAX_TAGS} 個（
            <span className={tagLimitReached ? "font-semibold text-red-500" : "text-gray-500"}>
              {tags.length}/{MAX_TAGS}
            </span>
            ）
          </p>
          <input type="hidden" name="tags" value={tags.join(",")} />
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{ backgroundColor: "#3A867B18", color: "var(--color-primary)" }}
              >
                {tag}
                <button
                  type="button"
                  className="leading-none hover:text-red-400"
                  onClick={() => setTags((current) => current.filter((item) => item !== tag))}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          {!tagLimitReached && (
            <div className="mt-3">
              <div className="mb-1.5 text-xs font-medium text-gray-500">建議標籤（來自標籤資料庫，點擊加入）</div>
              <div className="flex flex-wrap gap-1.5">
                {TAG_SUGGESTIONS.filter((suggestion) => !tags.includes(suggestion)).map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => addTag(suggestion)}
                    className="inline-flex items-center gap-0.5 rounded-full border border-teal-200 bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700 transition hover:bg-teal-100"
                  >
                    <span className="leading-none">＋</span>
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </Field>
      </div>
    </Card>
  );
}

export function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4">
        {icon && <span className="text-lg leading-none">{icon}</span>}
        <h2 className="text-gray-800" style={{ fontSize: "15px", fontWeight: 700 }}>
          {title}
        </h2>
        <div className="ml-2 h-px flex-1 bg-gray-100" />
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}

export function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-0.5 text-sm text-slate-600" style={{ fontWeight: 600 }}>
        {label}
        {required && <span className="ml-0.5 font-semibold text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}
