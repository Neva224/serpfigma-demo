import { useMemo, useState, type ReactNode } from "react";
import { ChevronDown, ChevronRight, LayoutGrid, Menu, Search } from "lucide-react";
import { DocumentTable } from "./DocumentTable";
import { KnowledgeTree } from "./knowledge/KnowledgeTree";
import {
  LEFT_RAIL_PRESETS,
  DOCUMENTS,
  STATUS_OPTIONS,
  LEVEL_OPTIONS,
  includesPathPrefix,
  matchesPreset,
  type DocumentLevel,
  type DocumentRecord,
  type DocumentStatus,
  type LeftRailPreset,
} from "./document-management/mockData";

interface Props {
  onAdd: () => void;
  onApprove: (doc: DocumentRecord) => void;
  onReEdit: (doc: DocumentRecord) => void;
}

type LeftSelection =
  | { kind: "all"; label: string }
  | { kind: "preset"; preset: LeftRailPreset; label: string }
  | { kind: "status"; status: DocumentStatus; label: string }
  | { kind: "path"; path: string[]; label: string };

const DEFAULT_SELECTION: LeftSelection = { kind: "all", label: "全部文件" };

const IA_QUICK_SECTION_ITEMS: Record<
  LeftRailPreset,
  { label: string; selection: LeftSelection }[]
> = {
  all: [
    { label: "全部文件", selection: { kind: "all", label: "全部文件" } },
    { label: "已上架文件", selection: { kind: "status", status: "上架", label: "已上架文件" } },
    {
      label: "待簽核文件",
      selection: { kind: "preset", preset: "signing", label: "待簽核文件" },
    },
  ],
  query: [
    {
      label: "關鍵字搜尋",
      selection: { kind: "preset", preset: "query", label: "關鍵字搜尋" },
    },
    { label: "進階篩選", selection: { kind: "all", label: "進階篩選" } },
    { label: "文件下載", selection: { kind: "status", status: "上架", label: "文件下載" } },
  ],
  upload: [
    { label: "草稿文件", selection: { kind: "status", status: "草稿", label: "草稿文件" } },
    {
      label: "送出簽核",
      selection: { kind: "preset", preset: "signing", label: "送出簽核" },
    },
    { label: "重新編輯", selection: { kind: "status", status: "退回", label: "重新編輯" } },
  ],
  signing: [
    {
      label: "待主管簽核",
      selection: { kind: "status", status: "待主管審核", label: "待主管簽核" },
    },
    {
      label: "待文管審核",
      selection: { kind: "status", status: "待文管審核", label: "待文管審核" },
    },
    { label: "作廢文件", selection: { kind: "status", status: "下架", label: "作廢文件" } },
  ],
  history: [
    {
      label: "版本歷程",
      selection: { kind: "preset", preset: "history", label: "版本歷程" },
    },
    {
      label: "審核紀錄",
      selection: { kind: "preset", preset: "history", label: "審核紀錄" },
    },
    { label: "退回文件", selection: { kind: "status", status: "退回", label: "退回文件" } },
  ],
  admin: [
    {
      label: "管理本部",
      selection: { kind: "path", path: ["雄獅旅遊-管理本部"], label: "管理本部" },
    },
    {
      label: "機密文件",
      selection: { kind: "path", path: ["機密文件"], label: "機密文件" },
    },
    {
      label: "資料庫",
      selection: {
        kind: "path",
        path: ["雄獅旅遊-管理本部", "資安暨個資管理室"],
        label: "資料庫",
      },
    },
  ],
};

export function DocumentListPage({ onAdd, onApprove, onReEdit }: Props) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selected, setSelected] = useState<LeftSelection>(DEFAULT_SELECTION);
  const [knowledgeOpen, setKnowledgeOpen] = useState(true);
  const [expandedPresets, setExpandedPresets] = useState<Record<LeftRailPreset, boolean>>({
    all: true,
    query: true,
    upload: true,
    signing: true,
    history: false,
    admin: false,
  });
  const [keywordInput, setKeywordInput] = useState("");
  const [keywordQuery, setKeywordQuery] = useState("");
  const [level, setLevel] = useState<"all" | DocumentLevel>("all");
  const [status, setStatus] = useState<"all" | DocumentStatus>("all");
  const [uploader, setUploader] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [docNo, setDocNo] = useState("");
  const [department, setDepartment] = useState("");
  const [tag, setTag] = useState("");

  const filteredDocs = useMemo(() => {
    const queryTokens = keywordQuery
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);
    const docNoQuery = docNo.trim().toLowerCase();
    const uploaderQuery = uploader.trim().toLowerCase();
    const departmentQuery = department.trim().toLowerCase();
    const tagQuery = tag.trim().toLowerCase();

    return DOCUMENTS
      .filter((doc) => {
        if (selected.kind === "preset") return matchesPreset(doc, selected.preset);
        if (selected.kind === "status") return doc.status === selected.status;
        if (selected.kind === "path") return includesPathPrefix(doc, selected.path);
        return true;
      })
      .filter((doc) => level === "all" || doc.level === level)
      .filter((doc) => status === "all" || doc.status === status)
      .filter((doc) => {
        if (!uploaderQuery) return true;
        return (
          doc.uploaderName.toLowerCase().includes(uploaderQuery) ||
          doc.uploaderCode.toLowerCase().includes(uploaderQuery)
        );
      })
      .filter((doc) => {
        if (queryTokens.length === 0) return true;
        const haystack = [
          doc.docNo,
          doc.name,
          doc.department,
          doc.uploaderName,
          doc.uploaderCode,
          doc.tags.join(" "),
          (doc.categoryPath ?? doc.knowledgePath).join(" / "),
        ]
          .join(" ")
          .toLowerCase();
        return queryTokens.every((token) => haystack.includes(token));
      })
      .filter((doc) => {
        if (!docNoQuery) return true;
        return doc.docNo.toLowerCase().includes(docNoQuery);
      })
      .filter((doc) => {
        if (!departmentQuery) return true;
        return doc.department.toLowerCase().includes(departmentQuery);
      })
      .filter((doc) => {
        if (!tagQuery) return true;
        return doc.tags.some((item) => item.toLowerCase().includes(tagQuery));
      })
      .filter((doc) => {
        if (dateFrom && doc.uploadDate < dateFrom) return false;
        if (dateTo && doc.uploadDate > dateTo) return false;
        return true;
      })
      .sort((a, b) => b.uploadDate.localeCompare(a.uploadDate));
  }, [
    selected,
    level,
    status,
    uploader,
    keywordQuery,
    docNo,
    department,
    tag,
    dateFrom,
    dateTo,
  ]);

  const currentCategory =
    selected.kind === "path"
      ? {
          title: selected.label,
          description: selected.path.join(" / "),
        }
      : undefined;
  const activeLabel = currentCategory?.title ?? selected.label;
  const selectedCount = filteredDocs.length;

  function togglePreset(preset: LeftRailPreset) {
    setExpandedPresets((prev) => ({ ...prev, [preset]: !prev[preset] }));
  }

  function countForPreset(preset: LeftRailPreset) {
    return DOCUMENTS.filter((doc) => matchesPreset(doc, preset)).length;
  }

  function countForPath(path: string[]) {
    return DOCUMENTS.filter((doc) => includesPathPrefix(doc, path)).length;
  }

  function resetFilters() {
    setSelected(DEFAULT_SELECTION);
    setKeywordInput("");
    setKeywordQuery("");
    setLevel("all");
    setStatus("all");
    setUploader("");
    setDateFrom("");
    setDateTo("");
    setDocNo("");
    setDepartment("");
    setTag("");
    setAdvancedOpen(false);
  }

  function applyKeywordSearch() {
    setKeywordQuery(keywordInput.trim());
  }

  return (
    <div className="flex h-full min-h-[calc(100vh-56px)] overflow-hidden bg-slate-100">
      <aside
        className={`flex-shrink-0 overflow-hidden border-r border-slate-200 bg-white transition-all duration-200 ${
          sidebarCollapsed ? "pointer-events-none w-0 opacity-0" : "w-[320px] opacity-100"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-600 text-white">
              <LayoutGrid size={16} />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-800">文件管理清單</div>
              <div className="text-xs text-slate-400">知識樹與快速篩選</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSidebarCollapsed((current) => !current)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
            title={sidebarCollapsed ? "撅??湔?" : "?嗅??湔?"}
          >
            <Menu size={16} />
          </button>
        </div>

        <div className="h-full overflow-y-auto px-3 py-3">
          <SectionCard
            title="知識樹分類"
            badge={String(DOCUMENTS.length)}
            open={knowledgeOpen}
            onToggle={() => setKnowledgeOpen((current) => !current)}
            onHeaderClick={() => setSelected(DEFAULT_SELECTION)}
            subtitle="由 Excel 轉換而來的正規化分類樹"
            >
            <KnowledgeTree
              totalCount={DOCUMENTS.length}
              selectedPathKey={selected.kind === "path" ? selected.path.join(" / ") : null}
              onSelectAll={() => setSelected(DEFAULT_SELECTION)}
              onSelectPath={(path, label) => setSelected({ kind: "path", path, label })}
              countForPath={countForPath}
            />
          </SectionCard>

          {LEFT_RAIL_PRESETS.map((section) => {
            const isOpen = expandedPresets[section.id];
            const count = countForPreset(section.id);
            const items = IA_QUICK_SECTION_ITEMS[section.id];
            const isActiveSection =
              selected.kind === "preset"
                ? selected.preset === section.id
                : selected.kind === "all" && section.id === "all";

            return (
              <SectionCard
                key={section.id}
                title={section.label}
                badge={String(count)}
                open={isOpen}
                active={isActiveSection}
                subtitle={section.description}
                onToggle={() => togglePreset(section.id)}
                onHeaderClick={() =>
                  setSelected({ kind: "preset", preset: section.id, label: section.label })
                }
              >
                <div className="space-y-1.5">
                  {items.map((item) => (
                    <SelectionPill
                      key={item.label}
                      label={item.label}
                      active={isSelectionActive(selected, item.selection)}
                      onClick={() => setSelected(item.selection)}
                    />
                  ))}
                </div>
              </SectionCard>
            );
          })}
        </div>
      </aside>

      {sidebarCollapsed && (
        <button
          type="button"
          onClick={() => setSidebarCollapsed(false)}
          className="fixed left-0 top-28 z-30 inline-flex items-center gap-2 rounded-r-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600 shadow-lg transition hover:bg-slate-50"
          title="撅??湔?"
        >
          <ChevronRight size={15} />
          撅??湔?
        </button>
      )}

      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>擐?</span>
              <span>/</span>
              <span className="font-semibold text-teal-700">?辣蝞∠?</span>
            </div>
            <div className="mt-1.5 text-lg font-bold text-slate-800">{activeLabel}</div>
            <div className="mt-1 text-sm text-slate-500">
              目前篩選條件：
              <span className="font-semibold text-slate-700">
                {currentCategory?.title ?? activeLabel}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            共 {selectedCount} 筆
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          <FilterBar
            keyword={keywordInput}
            setKeyword={setKeywordInput}
            onSearch={applyKeywordSearch}
            level={level}
            setLevel={setLevel}
            status={status}
            setStatus={setStatus}
            uploader={uploader}
            setUploader={setUploader}
            dateFrom={dateFrom}
            setDateFrom={setDateFrom}
            dateTo={dateTo}
            setDateTo={setDateTo}
            advancedOpen={advancedOpen}
            setAdvancedOpen={setAdvancedOpen}
            docNo={docNo}
            setDocNo={setDocNo}
            department={department}
            setDepartment={setDepartment}
            tag={tag}
            setTag={setTag}
            onReset={resetFilters}
            onAdd={onAdd}
          />

          <div className="mt-4">
            <DocumentTable
              docs={filteredDocs}
              onAdd={onAdd}
              onApprove={onApprove}
              onReEdit={onReEdit}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function FilterBar({
  keyword,
  setKeyword,
  onSearch,
  level,
  setLevel,
  status,
  setStatus,
  uploader,
  setUploader,
  dateFrom,
  setDateFrom,
  dateTo,
  setDateTo,
  advancedOpen,
  setAdvancedOpen,
  docNo,
  setDocNo,
  department,
  setDepartment,
  tag,
  setTag,
  onReset,
  onAdd,
}: {
  keyword: string;
  setKeyword: (value: string) => void;
  onSearch: () => void;
  level: "all" | DocumentLevel;
  setLevel: (value: "all" | DocumentLevel) => void;
  status: "all" | DocumentStatus;
  setStatus: (value: "all" | DocumentStatus) => void;
  uploader: string;
  setUploader: (value: string) => void;
  dateFrom: string;
  setDateFrom: (value: string) => void;
  dateTo: string;
  setDateTo: (value: string) => void;
  advancedOpen: boolean;
  setAdvancedOpen: (value: boolean) => void;
  docNo: string;
  setDocNo: (value: string) => void;
  department: string;
  setDepartment: (value: string) => void;
  tag: string;
  setTag: (value: string) => void;
  onReset: () => void;
  onAdd: () => void;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-4 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search
            size={15}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSearch();
            }}
            placeholder="輸入關鍵字、文件編號、標籤或分類"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-700 outline-none transition focus:border-teal-500 focus:bg-white"
          />
        </div>

        <button
          type="button"
          onClick={onSearch}
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-500"
        >
          <Search size={15} />
          搜尋
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3 px-4 py-4">
        <FilterSelect
          label="階級"
          value={level}
          onChange={(value) => setLevel(value as "all" | DocumentLevel)}
          options={["all", ...LEVEL_OPTIONS]}
        />
        <FilterSelect
          label="狀態"
          value={status}
          onChange={(value) => setStatus(value as "all" | DocumentStatus)}
          options={["all", ...STATUS_OPTIONS]}
        />

        <div className="flex min-w-[240px] items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
          <span className="mr-2 text-xs font-semibold text-slate-500">上傳者</span>
          <input
            value={uploader}
            onChange={(e) => setUploader(e.target.value)}
            placeholder="姓名 / 員編"
            className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
          <span className="text-xs font-semibold text-slate-500">上傳日期</span>
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600 outline-none"
          />
          <span className="text-slate-300">~</span>
          <input
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600 outline-none"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => setAdvancedOpen((current) => !current)}
            className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
              advancedOpen
                ? "border-teal-300 bg-teal-50 text-teal-700"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            進階篩選
            <ChevronDown
              size={14}
              className={advancedOpen ? "rotate-180 transition-transform" : "transition-transform"}
            />
          </button>
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            重置條件
          </button>
          <button
            type="button"
            onClick={onAdd}
            className="inline-flex items-center rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-500"
          >
            新增文件
          </button>
        </div>
      </div>

      {advancedOpen && (
        <div className="border-t border-slate-100 bg-slate-50/60 px-4 py-4">
          <div className="grid gap-3 lg:grid-cols-3">
            <TextField label="文件編號" value={docNo} onChange={setDocNo} placeholder="DOC-2026-001" />
            <TextField label="部門" value={department} onChange={setDepartment} placeholder="雄獅旅遊 / 管理本部" />
            <TextField label="標籤" value={tag} onChange={setTag} placeholder="法務 / 合約 / 年度報告" />
          </div>
        </div>
      )}
    </section>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-slate-500">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500"
      />
    </label>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
      <span className="text-xs font-semibold text-slate-500">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-w-[110px] bg-transparent text-sm text-slate-700 outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option === "all" ? "?券" : option}
          </option>
        ))}
      </select>
    </label>
  );
}

function SectionCard({
  title,
  subtitle,
  badge,
  children,
  open,
  onToggle,
  active = false,
  onHeaderClick,
}: {
  title: string;
  subtitle: string;
  badge: string;
  children?: ReactNode;
  open: boolean;
  onToggle: () => void;
  active?: boolean;
  onHeaderClick?: () => void;
}) {
  return (
    <section
      className={`mb-3 overflow-hidden rounded-2xl border transition ${
        active ? "border-teal-300 shadow-sm" : "border-slate-200"
      }`}
    >
      <div
        className={`flex w-full items-start justify-between gap-3 px-3 py-3 text-left transition ${
          active ? "bg-teal-50/70" : "bg-white hover:bg-slate-50"
        }`}
      >
        <button type="button" onClick={onHeaderClick} className="min-w-0 flex-1 text-left">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-800">{title}</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
              {badge}
            </span>
          </div>
          <div className="mt-1 text-xs text-slate-400">{subtitle}</div>
        </button>
        <button
          type="button"
          onClick={onToggle}
          className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          aria-label={open ? "收合區塊" : "展開區塊"}
        >
          <ChevronRight
            size={16}
            className={`transition-transform ${open ? "rotate-90" : ""}`}
          />
        </button>
      </div>
      {open && <div className="border-t border-slate-100 bg-white px-3 py-3">{children}</div>}
    </section>
  );
}

function SelectionPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl border px-3 py-2 text-left text-sm transition ${
        active
          ? "border-teal-300 bg-teal-50 text-teal-800"
          : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
      }`}
    >
      {label}
    </button>
  );
}

function isSelectionActive(selected: LeftSelection, target: LeftSelection) {
  if (selected.kind !== target.kind) return false;
  if (selected.kind === "all") return true;
  if (selected.kind === "preset" && target.kind === "preset") {
    return selected.preset === target.preset;
  }
  if (selected.kind === "status" && target.kind === "status") {
    return selected.status === target.status;
  }
  if (selected.kind === "path" && target.kind === "path") {
    return selected.path.join(" / ") === target.path.join(" / ");
  }
  return false;
}

