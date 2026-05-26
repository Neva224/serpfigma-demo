import { useMemo, useState, type ReactNode } from "react";
import {
  ChevronDown,
  ChevronRight,
  Clock3,
  Database,
  FileText,
  FolderOpen,
  LayoutGrid,
  Search,
  Settings,
} from "lucide-react";
import { DocumentTable } from "./DocumentTable";
import { DocumentFormPage } from "./form/DocumentFormPage";
import { SigningProgressPage } from "./signing/SigningProgressPage";
import { DatabasePage } from "./database/DatabasePage";
import { PermissionsPage } from "./settings/PermissionsPage";
import { KnowledgeTree } from "./knowledge/KnowledgeTree";
import { KNOWLEDGE_TREE, type KnowledgeTreeNode } from "../../mocks/knowledgeTreeData";
import {
  DOCUMENTS,
  LEVEL_OPTIONS,
  STATUS_OPTIONS,
  includesPathPrefix,
  type DocumentLevel,
  type DocumentRecord,
  type DocumentStatus,
} from "./document-management/mockData";

export type ViewMode =
  | { kind: "overview" }
  | { kind: "category"; path: string[]; label: string }
  | { kind: "query"; variant: "general" | "faq" }
  | { kind: "signing"; variant: "manager" | "docadmin" | "void" | "transfer" }
  | { kind: "documentUpload" }
  | { kind: "signingProgress" }
  | { kind: "database" }
  | { kind: "systemAdmin" };

interface Props {
  onAdd: () => void;
  onApprove: (doc: DocumentRecord) => void;
  onReEdit: (doc: DocumentRecord) => void;
  formDoc: DocumentRecord | null;
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export const OVERVIEW_VIEW: ViewMode = { kind: "overview" };

const QUERY_ITEMS = [
  { label: "一般文件查詢", variant: "general" as const },
  { label: "FAQ查詢", variant: "faq" as const },
];

export function DocumentListPage({
  onAdd,
  onApprove,
  onReEdit,
  formDoc,
  view,
  onViewChange,
}: Props) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [knowledgeOpen, setKnowledgeOpen] = useState(true);
  const [queryOpen, setQueryOpen] = useState(true);
  const [uploadOpen, setUploadOpen] = useState(true);
  const [signingOpen, setSigningOpen] = useState(true);
  const [databaseOpen, setDatabaseOpen] = useState(true);
  const [adminOpen, setAdminOpen] = useState(true);

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

  const selectedPathKey = view.kind === "category" ? view.path.join(" / ") : null;

  const currentNode = useMemo(() => {
    if (view.kind !== "category") return null;
    return findNodeByPath(KNOWLEDGE_TREE, view.path);
  }, [view]);

  const docsForView = useMemo(() => {
    if (view.kind === "overview") return [];
    if (view.kind === "query" && view.variant === "faq") return [];
    if (view.kind === "documentUpload") return [];
    if (view.kind === "signingProgress") return [];
    if (view.kind === "database") return [];
    if (view.kind === "systemAdmin") return [];
    if (view.kind === "signing" && view.variant === "transfer") return [];

    let baseDocs = DOCUMENTS;
    if (view.kind === "category") {
      baseDocs = baseDocs.filter((doc) => includesPathPrefix(doc, view.path));
    } else if (view.kind === "signing") {
      const statuses: DocumentStatus[] =
        view.variant === "manager"
          ? ["待主管審核"]
          : view.variant === "docadmin"
            ? ["待文管審核"]
            : ["作廢"];
      baseDocs = baseDocs.filter((doc) => statuses.includes(doc.status));
    }

    const tokens = keywordQuery
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);
    const docNoQuery = docNo.trim().toLowerCase();
    const uploaderQuery = uploader.trim().toLowerCase();
    const departmentQuery = department.trim().toLowerCase();
    const tagQuery = tag.trim().toLowerCase();

    return baseDocs
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
        if (tokens.length === 0) return true;
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
        return tokens.every((token) => haystack.includes(token));
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
    view,
    keywordQuery,
    level,
    status,
    uploader,
    docNo,
    department,
    tag,
    dateFrom,
    dateTo,
  ]);

  const docsCount = docsForView.length;
  const categoryChildren = currentNode?.children ?? [];
  const rootSummaries = KNOWLEDGE_TREE.map((node) => ({
    node,
    childPreview: (node.children ?? [])
      .slice(0, 3)
      .map((child) => ({ label: child.label, count: countForPath(child.pathLabels) })),
  }));
  const searchPlaceholder =
    view.kind === "category"
      ? "搜尋此分類下的文件"
      : "輸入關鍵字、文件編號、標籤或分類";

  function resetFilters() {
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

  function activateCategory(path: string[], label: string) {
    onViewChange({ kind: "category", path, label });
  }

  function activateKnowledgeOverview() {
    onViewChange(OVERVIEW_VIEW);
  }

  function activateQuery(variant: "general" | "faq") {
    onViewChange({ kind: "query", variant });
  }

  function activateSigning(variant: "manager" | "docadmin" | "void" | "transfer") {
    onViewChange({ kind: "signing", variant });
  }

  function activateUpload() {
    onAdd();
  }

  function countForPath(path: string[]) {
    return DOCUMENTS.filter((doc) => includesPathPrefix(doc, path)).length;
  }

  return (
    <div className="flex h-full min-h-[calc(100vh-56px)] overflow-hidden bg-slate-100">
      <aside
        className={`flex-shrink-0 overflow-hidden border-r border-slate-200 bg-white transition-all duration-200 ${
          sidebarCollapsed ? "w-[72px]" : "w-[320px]"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <div className={`flex items-center gap-2 ${sidebarCollapsed ? "justify-center" : ""}`}>
            <button
              type="button"
              onClick={() => setSidebarCollapsed((current) => !current)}
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-600 text-white transition hover:bg-teal-500"
              aria-label={sidebarCollapsed ? "展開選單" : "收合選單"}
            >
              <LayoutGrid size={16} />
            </button>
            {!sidebarCollapsed && (
              <div>
                <div className="text-sm font-semibold text-slate-800">總功能清單操作篩選</div>
                <div className="text-xs text-slate-400">文件管理與簽核功能入口</div>
              </div>
            )}
          </div>
        </div>

        <div className="h-full overflow-y-auto px-3 py-3">
          <SectionCard
            collapsed={sidebarCollapsed}
            title="知識樹分類"
            subtitle="由 Excel 轉換而來的正規化分類樹"
            icon={<LayoutGrid size={16} />}
            badge={String(KNOWLEDGE_TREE.length)}
            open={knowledgeOpen}
            onToggle={() => setKnowledgeOpen((current) => !current)}
            onHeaderClick={activateKnowledgeOverview}
          >
            <KnowledgeTree
              totalCount={DOCUMENTS.length}
              selectedPathKey={selectedPathKey}
              onSelectPath={activateCategory}
              countForPath={countForPath}
            />
          </SectionCard>

          <SectionCard
            collapsed={sidebarCollapsed}
            title="文件查詢"
            subtitle="一般文件搜尋與 FAQ 查詢"
            icon={<Search size={16} />}
            badge={String(DOCUMENTS.length)}
            open={queryOpen}
            onToggle={() => setQueryOpen((current) => !current)}
            onHeaderClick={() => activateQuery("general")}
          >
            <div className="space-y-1.5">
              {QUERY_ITEMS.map((item) => (
                <SelectionPill
                  key={item.variant}
                  label={item.label}
                  active={view.kind === "query" && view.variant === item.variant}
                  onClick={() => activateQuery(item.variant)}
                />
              ))}
            </div>
          </SectionCard>

          <SectionCard
            collapsed={sidebarCollapsed}
            title="文件上傳專區"
            subtitle="新增文件、選擇分類與送出簽核"
            icon={<FileText size={16} />}
            badge="新增"
            open={uploadOpen}
            onToggle={() => setUploadOpen((current) => !current)}
            onHeaderClick={activateUpload}
          >
            <div className="space-y-1.5">
              <SelectionPill
                label="新增文件"
                active={view.kind === "documentUpload"}
                onClick={activateUpload}
              />
            </div>
          </SectionCard>

          <SectionCard
            collapsed={sidebarCollapsed}
            title="文件簽核專區"
            subtitle="查詢簽核進度、處理退件與移轉"
            icon={<Clock3 size={16} />}
            badge={String(countForSigningSection())}
            open={signingOpen}
            onToggle={() => setSigningOpen((current) => !current)}
            onHeaderClick={() => onViewChange({ kind: "signingProgress" })}
          >
            <div className="space-y-1.5">
              <SelectionPill
                label="前往查詢頁"
                active={view.kind === "signingProgress"}
                onClick={() => onViewChange({ kind: "signingProgress" })}
              />
              <SelectionPill
                label="作廢文件"
                active={view.kind === "signing" && view.variant === "void"}
                onClick={() => activateSigning("void")}
              />
              <SelectionPill
                label="移轉單位"
                active={view.kind === "signing" && view.variant === "transfer"}
                onClick={() => activateSigning("transfer")}
              />
            </div>
          </SectionCard>

          <SectionCard
            collapsed={sidebarCollapsed}
            title="資料庫"
            subtitle="文件統計與查詢分析"
            icon={<Database size={16} />}
            open={databaseOpen}
            onToggle={() => setDatabaseOpen((current) => !current)}
            onHeaderClick={() => onViewChange({ kind: "database" })}
          >
            <div className="space-y-1.5">
              <SelectionPill
                label="前往資料庫"
                active={view.kind === "database"}
                onClick={() => onViewChange({ kind: "database" })}
              />
            </div>
          </SectionCard>

          <SectionCard
            collapsed={sidebarCollapsed}
            title="系統後台管理"
            subtitle="權限與系統設定"
            icon={<Settings size={16} />}
            open={adminOpen}
            onToggle={() => setAdminOpen((current) => !current)}
            onHeaderClick={() => onViewChange({ kind: "systemAdmin" })}
          >
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
              此區為系統後台管理功能，不存放文件。
            </div>
          </SectionCard>
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <div
          className={`flex items-center justify-between border-b px-5 py-3 ${
            view.kind === "overview" || view.kind === "category"
              ? "border-emerald-100 bg-gradient-to-r from-emerald-50 via-teal-50 to-white"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <button type="button" onClick={activateKnowledgeOverview} className="hover:text-slate-600">
                首頁
              </button>
              <span>/</span>
              <button type="button" onClick={activateKnowledgeOverview} className="hover:text-slate-600">
                文件管理
              </button>
            </div>
            <div className="mt-1.5 text-lg font-bold text-slate-800">{getViewTitle(view)}</div>
            <div className="mt-1 text-sm text-slate-500">
              {view.kind === "overview" ? "請選擇第一層分類查看下層資料夾與文件" : getViewDescription(view)}
            </div>
          </div>

          {view.kind === "category" && (
            <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              共 {docsCount} 筆
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {view.kind === "overview" ? (
            <KnowledgeOverview roots={rootSummaries} onOpenCategory={activateCategory} />
          ) : view.kind === "documentUpload" ? (
            <DocumentFormPage
              onBack={activateKnowledgeOverview}
              embedded
              editingDoc={formDoc}
            />
          ) : view.kind === "signingProgress" ? (
            <SigningProgressPage onBack={activateKnowledgeOverview} embedded />
          ) : view.kind === "database" ? (
            <DatabasePage onBack={activateKnowledgeOverview} embedded />
          ) : view.kind === "systemAdmin" ? (
            <PermissionsPage onBack={activateKnowledgeOverview} embedded />
          ) : view.kind === "query" && view.variant === "faq" ? (
            <EmptyState
              title="FAQ查詢暫無資料"
              description="目前尚未建立完整 FAQ 資料，請改用一般文件查詢。"
            />
          ) : view.kind === "signing" && view.variant === "transfer" ? (
            <EmptyState
              title="移轉單位功能待接入"
              description="目前先保留入口，不列出文件資料。"
            />
          ) : (
            <>
              {view.kind === "category" && categoryChildren.length > 0 && (
                <div className="mb-4">
                  <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                    <span className="font-semibold text-slate-700">分類總覽</span>
                    <span>/</span>
                    <span>{view.label}</span>
                  </div>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {categoryChildren.map((child) => (
                      <FolderCard
                        key={child.id}
                        node={child}
                        onClick={() => activateCategory(child.pathLabels, child.label)}
                        count={countForPath(child.pathLabels)}
                      />
                    ))}
                  </div>
                </div>
              )}

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
                searchPlaceholder={searchPlaceholder}
              />

              <div className="mt-4">
                <DocumentTable
                  docs={docsForView}
                  onAdd={onAdd}
                  onApprove={onApprove}
                  onReEdit={onReEdit}
                />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

function countForSigningSection() {
  return DOCUMENTS.filter(
    (doc) =>
      doc.status === "待主管審核" ||
      doc.status === "待文管審核" ||
      doc.status === "下架" ||
      doc.status === "作廢",
  ).length;
}

function findNodeByPath(nodes: KnowledgeTreeNode[], path: string[]): KnowledgeTreeNode | null {
  for (const node of nodes) {
    if (node.pathLabels.join(" / ") === path.join(" / ")) return node;
    const children = node.children ?? [];
    const found = findNodeByPath(children, path);
    if (found) return found;
  }
  return null;
}

function getViewTitle(view: ViewMode) {
  switch (view.kind) {
    case "overview":
      return "知識樹分類總覽";
    case "category":
      return view.label;
    case "query":
      return view.variant === "general" ? "一般文件查詢" : "FAQ查詢";
    case "documentUpload":
      return "新增文件";
    case "signingProgress":
      return "文件簽核單進度查詢";
    case "database":
      return "資料庫";
    case "systemAdmin":
      return "系統後台管理";
    case "signing":
      switch (view.variant) {
        case "manager":
          return "待主管簽核";
        case "docadmin":
          return "待文管審核";
        case "void":
          return "作廢文件";
        case "transfer":
          return "移轉單位";
      }
    default:
      return "請選擇分類";
  }
}

function getViewDescription(view: ViewMode) {
  switch (view.kind) {
    case "overview":
      return "請選擇第一層分類查看下層資料夾與文件";
    case "category":
      return `分類總覽 > ${view.path.join(" > ")}`;
    case "query":
      return view.variant === "general"
        ? "一般文件查詢"
        : "FAQ 查詢入口";
    case "documentUpload":
      return "新增文件流程";
    case "signingProgress":
      return "查詢簽核單號、文件名稱與申請日期";
    case "database":
      return "文件知識管理總覽：窗口對應、點擊統計與標籤索引";
    case "systemAdmin":
      return "設定各角色對文件相關操作的執行權限";
    case "signing":
      switch (view.variant) {
        case "manager":
          return "待主管簽核文件清單";
        case "docadmin":
          return "待文管審核文件清單";
        case "void":
          return "作廢文件清單";
        case "transfer":
          return "移轉單位清單";
      }
    default:
      return "";
  }
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
  searchPlaceholder,
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
  searchPlaceholder: string;
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
            placeholder={searchPlaceholder}
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
          label="文件階級"
          value={level}
          onChange={(value) => setLevel(value as "all" | DocumentLevel)}
          options={[
            { value: "all", label: "全部階級" },
            ...LEVEL_OPTIONS.map((option) => ({ value: option.value, label: option.label })),
          ]}
        />
        <FilterSelect
          label="文件狀態"
          value={status}
          onChange={(value) => setStatus(value as "all" | DocumentStatus)}
          options={[
            { value: "all", label: "全部狀態" },
            ...STATUS_OPTIONS.map((option) => ({ value: option, label: option })),
          ]}
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
            清除條件
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
            <TextField
              label="文件編號"
              value={docNo}
              onChange={setDocNo}
              placeholder="DOC-2026-001"
            />
            <TextField
              label="部門"
              value={department}
              onChange={setDepartment}
              placeholder="雄獅旅遊 / 管理本部"
            />
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
  options: Array<{ value: string; label: string }>;
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
          <option key={option.value} value={option.value}>
            {option.label}
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
  icon,
  children,
  open,
  onToggle,
  active = false,
  onHeaderClick,
  collapsed = false,
}: {
  title: string;
  subtitle: string;
  badge?: string;
  icon: ReactNode;
  children?: ReactNode;
  open: boolean;
  onToggle: () => void;
  active?: boolean;
  onHeaderClick?: () => void;
  collapsed?: boolean;
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
        } ${collapsed ? "px-2 py-2" : ""}`}
      >
        <button type="button" onClick={onHeaderClick} className="min-w-0 flex-1 text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
              {icon}
            </span>
            {!collapsed && (
              <>
                <span className="text-sm font-semibold text-slate-800">{title}</span>
                {badge && (
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                    {badge}
                  </span>
                )}
              </>
            )}
          </div>
          {!collapsed && <div className="mt-1 text-xs text-slate-400">{subtitle}</div>}
        </button>
        {!collapsed && (
          <button
            type="button"
            onClick={onToggle}
            className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
            aria-label={open ? "收合區塊" : "展開區塊"}
          >
            <ChevronRight size={16} className={`transition-transform ${open ? "rotate-90" : ""}`} />
          </button>
        )}
      </div>
      {open && !collapsed && <div className="border-t border-slate-100 bg-white px-3 py-3">{children}</div>}
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

function FolderCard({
  node,
  count,
  onClick,
}: {
  node: KnowledgeTreeNode;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left transition hover:border-teal-300 hover:bg-teal-50/40"
    >
      <FolderOpen className="mt-0.5 flex-shrink-0 text-teal-600" size={18} />
      <div className="min-w-0 flex-1">
        <div className="text-sm font-semibold text-slate-800">{node.label}</div>
        <div className="mt-1 text-xs text-slate-400">{node.pathLabels.join(" / ")}</div>
      </div>
      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
        {count}
      </span>
    </button>
  );
}

function KnowledgeOverview({
  roots,
  onOpenCategory,
}: {
  roots: Array<{
    node: KnowledgeTreeNode;
    childPreview: Array<{ label: string; count: number }>;
  }>;
  onOpenCategory: (path: string[], label: string) => void;
}) {
  return (
    <div>
      <div className="mb-5 overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-teal-50 to-white px-5 py-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="mb-2 inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-100">
              知識樹分類
            </div>
            <h3 className="text-xl font-bold text-slate-800">知識樹分類總覽</h3>
            <p className="mt-1 text-sm text-slate-600">請選擇第一層分類查看下層資料夾與文件</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {roots.map(({ node, childPreview }) => (
          <button
            key={node.id}
            type="button"
            onClick={() => onOpenCategory(node.pathLabels, node.label)}
            className="rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md hover:bg-teal-50/30"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <FolderOpen size={18} className="text-teal-600" />
                  <h4 className="truncate text-base font-semibold text-slate-800">{node.label}</h4>
                </div>
                <p className="mt-1 text-xs text-slate-400">{node.pathLabels.join(" / ")}</p>
              </div>
              <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
                查看分類
              </span>
            </div>

            <div className="mt-4">
              <div className="mb-2 text-xs font-semibold text-slate-400">第二層分類分布</div>
              {childPreview.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {childPreview.map((child) => (
                    <span
                      key={child.label}
                      className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {child.label}
                      <span className="text-slate-400">({child.count})</span>
                    </span>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-slate-400">此分類底下暫無子分類</div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-10">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
          <LayoutGrid size={24} />
        </div>
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
      </div>
    </div>
  );
}
