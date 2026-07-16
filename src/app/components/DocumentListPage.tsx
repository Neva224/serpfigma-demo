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
import { DocumentFormPage, type DocumentFormSubmitPayload } from "./form/DocumentFormPage";
import { SigningProgressPage } from "./signing/SigningProgressPage";
import { FaqSearchPage } from "./query/FaqSearchPage";
import { DraftSectionPage } from "./query/DraftSectionPage";
import { TransferUnitPage, type DirectTransferInput } from "./query/TransferUnitPage";
import { DatabasePage } from "./database/DatabasePage";
import { PermissionsPage } from "./settings/PermissionsPage";
import { TestDataImportPage } from "./settings/TestDataImportPage";
import { KnowledgeTree } from "./knowledge/KnowledgeTree";
import { buildLegacyKnowledgeTreeFromGenerated, type LegacyKnowledgeTreeNode } from "../data/catalogModels";
import type { WorkflowDocument } from "../workflow/workflowState";
import { getDocumentStatusLabel } from "../workflow/statusCatalog";
import {
  LEVEL_OPTIONS,
  includesPathPrefix,
  type DocumentLevel,
  type DocumentRecord,
  type DocumentStatus,
} from "./document-management/mockData";

export type ViewMode =
  | { kind: "overview" }
  | { kind: "category"; path: string[]; label: string }
  | { kind: "query"; variant: "general" | "faq" }
  | { kind: "drafts" }
  | { kind: "signing"; variant: "manager" | "docadmin" | "void" | "transfer" }
  | { kind: "documentUpload" }
  | { kind: "signingProgress" }
  | { kind: "database" }
  | { kind: "systemAdmin" }
  | { kind: "testDataImport" };

interface Props {
  documents: DocumentRecord[];
  onAdd: () => void;
  onApprove: (doc: DocumentRecord) => void;
  onReEdit: (doc: DocumentRecord) => void;
  onVoidPublished: (doc: DocumentRecord) => void;
  onDeletePublished: (doc: DocumentRecord) => void;
  onRestoreVoided: (doc: DocumentRecord) => void;
  onSaveDraft: (payload: DocumentFormSubmitPayload) => void;
  canVoidPublishedDocs: boolean;
  canDeletePublishedDocs: boolean;
  canApproveManager: boolean;
  canApproveDocAdmin: boolean;
  currentUserEmpId: string | null;
  managerIdentityBypass: boolean;
  onSubmitDocument: (payload: DocumentFormSubmitPayload) => void;
  formDoc: WorkflowDocument | null;
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onImportTestDocuments: (count: number) => void;
  onClearTestData: () => void;
  canTransferDocuments: boolean;
  onTransferDocument: (input: DirectTransferInput) => void;
}

export const OVERVIEW_VIEW: ViewMode = { kind: "overview" };

const KNOWLEDGE_TREE = buildLegacyKnowledgeTreeFromGenerated();

const QUERY_ITEMS = [
  { label: "一般文件查詢", variant: "general" as const },
  { label: "FAQ常見問題專區", variant: "faq" as const },
];

const LIST_STATUS_OPTIONS = [
  { value: "all", label: "全部狀態" },
  { value: "上架", label: getDocumentStatusLabel("上架") },
  { value: "已退回", label: getDocumentStatusLabel("已退回") },
  { value: "已作廢", label: getDocumentStatusLabel("已作廢") },
  { value: "已刪除", label: getDocumentStatusLabel("已刪除") },
];

export function DocumentListPage({
  documents,
  onAdd,
  onApprove,
  onReEdit,
  onVoidPublished,
  onDeletePublished,
  onRestoreVoided,
  onSaveDraft,
  canVoidPublishedDocs,
  canDeletePublishedDocs,
  canApproveManager,
  canApproveDocAdmin,
  currentUserEmpId,
  managerIdentityBypass,
  onSubmitDocument,
  formDoc,
  view,
  onViewChange,
  onImportTestDocuments,
  onClearTestData,
  canTransferDocuments,
  onTransferDocument,
}: Props) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [knowledgeOpen, setKnowledgeOpen] = useState(true);
  const [queryOpen, setQueryOpen] = useState(true);
  const [uploadOpen, setUploadOpen] = useState(true);
  const [draftOpen, setDraftOpen] = useState(true);
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
  const publishedDocs = useMemo(() => documents.filter((doc) => doc.status === "上架"), [documents]);

  const selectedPathKey = view.kind === "category" ? view.path.join(" / ") : null;

  const currentNode = useMemo(() => {
    if (view.kind !== "category") return null;
    return findNodeByPath(KNOWLEDGE_TREE, view.path);
  }, [view]);

  const docsForView = useMemo(() => {
    if (view.kind === "overview") return [];
    if (view.kind === "query" && view.variant === "faq") return [];
    if (view.kind === "drafts") return [];
    if (view.kind === "documentUpload") return [];
    if (view.kind === "signingProgress") return [];
    if (view.kind === "database") return [];
    if (view.kind === "systemAdmin") return [];
    if (view.kind === "testDataImport") return [];
    if (view.kind === "signing" && view.variant === "transfer") return [];

    let baseDocs = view.kind === "signing" ? documents : publishedDocs;
    if (view.kind === "category") {
      baseDocs = baseDocs.filter((doc) => includesPathPrefix(doc, view.path));
    } else if (view.kind === "signing") {
      const statuses: DocumentStatus[] =
        view.variant === "manager"
          ? ["待主管簽核"]
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
    documents,
    publishedDocs,
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

  // 篩選條件的簽章：只有使用者實際變更篩選/檢視時才需要把分頁跳回第 1 頁。
  // docsForView 的陣列參照會因為 documents 內容變動（例如別處核准了某份文件）而改變，
  // 但那不代表使用者的篩選條件變了，所以分頁重置不能綁在 docsForView 本身上。
  const filterKey = useMemo(
    () =>
      JSON.stringify([view, keywordQuery, level, status, uploader, docNo, department, tag, dateFrom, dateTo]),
    [view, keywordQuery, level, status, uploader, docNo, department, tag, dateFrom, dateTo],
  );

  const docsCount = docsForView.length;
  const categoryChildren = currentNode?.children ?? [];
  const rootSummaries = KNOWLEDGE_TREE.map((node) => ({
    node,
    childPreview: (node.children ?? [])
      .slice(0, 3)
      .map((child) => ({ label: child.label, count: countForPath(getNodePath(child)), id: child.id })),
  }));
  const searchPlaceholder =
    view.kind === "category"
      ? "搜尋分類內文件"
      : "輸入關鍵字搜尋文件";

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

  function activateCategoryBack() {
    if (view.kind !== "category") {
      activateKnowledgeOverview();
      return;
    }

    if (view.path.length > 1) {
      onViewChange({
        kind: "category",
        path: view.path.slice(0, -1),
        label: view.path[view.path.length - 2] ?? view.label,
      });
      return;
    }

    activateKnowledgeOverview();
  }

  function activateSigning(variant: "manager" | "docadmin" | "void" | "transfer") {
    onViewChange({ kind: "signing", variant });
  }

  function activateUpload() {
    onAdd();
  }

  function activateDrafts() {
    onViewChange({ kind: "drafts" });
  }

  function countForPath(path: string[]) {
    return publishedDocs.filter((doc) => includesPathPrefix(doc, path)).length;
  }

  return (
    <div className="flex h-full min-h-0 overflow-hidden bg-transparent">
      <aside
        className={`brand-teal-bar flex h-full min-h-0 flex-col flex-shrink-0 overflow-hidden border-r brand-teal-border transition-all duration-200 ${
          sidebarCollapsed ? "w-[72px]" : "w-[320px]"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
          <div className={`flex items-center gap-2 ${sidebarCollapsed ? "justify-center" : ""}`}>
            <button
              type="button"
              onClick={() => setSidebarCollapsed((current) => !current)}
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/15 text-white transition hover:bg-white/20 ring-1 ring-white/15"
              aria-label={sidebarCollapsed ? "展開側欄" : "收合側欄"}
            >
              <LayoutGrid size={16} />
            </button>
            {!sidebarCollapsed && (
              <div>
                <div className="text-sm font-bold text-white">功能選單總覽</div>
              </div>
            )}
          </div>
        </div>

        <div className="scrollbar-brand min-h-0 flex-1 overflow-y-auto px-3 py-2.5">
          <SectionCard
            collapsed={sidebarCollapsed}
            title="知識樹分類"
            subtitle=""
            icon={<LayoutGrid size={16} />}
            badge={String(publishedDocs.length)}
            open={knowledgeOpen}
            onToggle={() => setKnowledgeOpen((current) => !current)}
            onHeaderClick={activateKnowledgeOverview}
          >
            <KnowledgeTree
              totalCount={publishedDocs.length}
              selectedPathKey={selectedPathKey}
              onSelectPath={activateCategory}
              countForPath={countForPath}
            />
          </SectionCard>

          <SectionCard
            collapsed={sidebarCollapsed}
            title="一般文件查詢"
            subtitle="一般文件與 FAQ常見問題專區"
            icon={<Search size={16} />}
            badge={String(publishedDocs.length)}
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
            subtitle="新增文件、草稿與送出簽核"
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
              <SelectionPill
                label={`草稿專區（${countForDraftSection(documents)}）`}
                active={view.kind === "drafts"}
                onClick={activateDrafts}
              />
            </div>
          </SectionCard>

          <SectionCard
            collapsed={sidebarCollapsed}
            title="文件簽核專區"
            subtitle="查詢簽核進度、處理退件與移轉"
            icon={<Clock3 size={16} />}
            badge={String(countForSigningSection(documents))}
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
            title="系統後台管理"
            subtitle="權限與資料庫"
            icon={<Settings size={16} />}
            open={adminOpen}
            onToggle={() => setAdminOpen((current) => !current)}
            onHeaderClick={() => onViewChange({ kind: "systemAdmin" })}
          >
            <div className="space-y-1.5">
              <SelectionPill
                label="人員權限管理"
                active={view.kind === "systemAdmin"}
                onClick={() => onViewChange({ kind: "systemAdmin" })}
              />
              <SelectionPill
                label="資料庫"
                active={view.kind === "database"}
                onClick={() => onViewChange({ kind: "database" })}
              />
              <SelectionPill
                label="匯入測試資料"
                active={view.kind === "testDataImport"}
                onClick={() => onViewChange({ kind: "testDataImport" })}
              />
            </div>
          </SectionCard>
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col overflow-hidden bg-transparent">
        <div className="enterprise-panel-strong mb-5 overflow-hidden rounded-xl px-5 py-4">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <button type="button" onClick={activateKnowledgeOverview} className="font-semibold hover:text-slate-700">
                  首頁
                </button>
                <span>/</span>
                <button type="button" onClick={activateKnowledgeOverview} className="font-semibold hover:text-slate-700">
                  主功能
                </button>
              </div>
              <div className="mt-1.5 text-[17px] font-bold text-slate-800">{getViewTitle(view)}</div>
              <div className="mt-1 text-sm font-semibold text-slate-500">
                {view.kind === "overview" ? "請選擇第一層分類查看下層資料夾與文件" : getViewDescription(view)}
              </div>
            </div>

            {view.kind === "category" && (
              <button
                type="button"
                onClick={activateCategoryBack}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                <ChevronRight size={12} className="rotate-180" />
                返回上一頁
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {view.kind === "overview" ? (
            <KnowledgeOverview roots={rootSummaries} onOpenCategory={activateCategory} />
          ) : view.kind === "documentUpload" ? (
            <DocumentFormPage
              onBack={activateKnowledgeOverview}
              embedded
              editingDoc={formDoc}
              onSubmit={onSubmitDocument}
              onSaveDraft={onSaveDraft}
            />
          ) : view.kind === "drafts" ? (
            <DraftSectionPage onBack={activateKnowledgeOverview} embedded documents={documents} onEditDraft={onReEdit} />
          ) : view.kind === "signingProgress" ? (
            <SigningProgressPage onBack={activateKnowledgeOverview} embedded documents={documents} />
          ) : view.kind === "database" ? (
            <DatabasePage onBack={activateKnowledgeOverview} embedded />
          ) : view.kind === "systemAdmin" ? (
            <PermissionsPage onBack={activateKnowledgeOverview} embedded />
          ) : view.kind === "testDataImport" ? (
            <TestDataImportPage
              onBack={activateKnowledgeOverview}
              embedded
              documents={documents}
              onImport={onImportTestDocuments}
              onClearTestData={onClearTestData}
            />
          ) : view.kind === "query" && view.variant === "faq" ? (
            <FaqSearchPage onBack={activateKnowledgeOverview} embedded documents={documents} />
          ) : view.kind === "signing" && view.variant === "transfer" ? (
            <TransferUnitPage
              onBack={activateKnowledgeOverview}
              embedded
              documents={documents}
              canTransferDocuments={canTransferDocuments}
              onTransferDocument={onTransferDocument}
            />
          ) : (
            <>
              {view.kind === "category" && categoryChildren.length > 0 && (
                <div className="mb-4">
                  <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                    <span className="font-semibold text-slate-700">分類路徑</span>
                    <span>/</span>
                    <span>{view.label}</span>
                  </div>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {categoryChildren.map((child) => (
                      <FolderCard
                        key={child.id}
                        node={child}
                        onClick={() => activateCategory(getNodePath(child), child.label)}
                        count={countForPath(getNodePath(child))}
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
        statusOptions={LIST_STATUS_OPTIONS}
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
                  filterKey={filterKey}
                  onAdd={onAdd}
                  onApprove={onApprove}
                  onReEdit={onReEdit}
                  onVoidPublished={onVoidPublished}
                  onDeletePublished={onDeletePublished}
                  onRestoreVoided={onRestoreVoided}
                  canVoidPublishedDocs={canVoidPublishedDocs}
                  canDeletePublishedDocs={canDeletePublishedDocs}
                  canApproveManager={canApproveManager}
                  canApproveDocAdmin={canApproveDocAdmin}
                  currentUserEmpId={currentUserEmpId}
                  managerIdentityBypass={managerIdentityBypass}
                />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

  function countForSigningSection(docs: DocumentRecord[]) {
  return docs.filter(
    (doc) =>
      doc.status === "待主管簽核" ||
      doc.status === "待文管審核" ||
      doc.status === "上架" ||
      doc.status === "作廢",
  ).length;
}

function countForDraftSection(docs: DocumentRecord[]) {
  return docs.filter((doc) => doc.status === "草稿").length;
}

function findNodeByPath(nodes: LegacyKnowledgeTreeNode[], path: string[]): LegacyKnowledgeTreeNode | null {
  for (const node of nodes) {
    if (getNodePath(node).join(" / ") === path.join(" / ")) return node;
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
      return view.variant === "general" ? "一般文件查詢" : "FAQ常見問題專區";
    case "drafts":
      return "草稿專區";
    case "documentUpload":
      return "文件上傳專區";
    case "signingProgress":
      return "文件簽核進度查詢";
    case "database":
      return "資料庫";
    case "systemAdmin":
      return "系統後台管理";
    case "testDataImport":
      return "匯入測試資料";
    case "signing":
      switch (view.variant) {
        case "manager":
          return "主管簽核";
        case "docadmin":
          return "文管審核";
        case "void":
          return "作廢文件";
        case "transfer":
          return "移轉單位";
      }
    default:
      return "文件管理";
  }
}

function getViewDescription(view: ViewMode) {
  switch (view.kind) {
    case "overview":
      return "請選擇第一層分類查看下層資料夾與文件";
    case "category":
      return `分類路徑 > ${view.path.join(" > ")}`;
    case "query":
      return view.variant === "general" ? "一般文件條件查詢" : "FAQ常見問題條件查詢";
    case "drafts":
      return "查詢與管理已儲存的草稿文件";
    case "documentUpload":
      return "新增文件、選擇分類與送出簽核";
    case "signingProgress":
      return "查詢簽核進度與文件處理狀態";
    case "database":
      return "資料查詢與彙整";
    case "systemAdmin":
      return "權限與系統設定";
    case "testDataImport":
      return "產生/清除開發測試用的假文件";
    case "signing":
      return "文件簽核專區";
    default:
      return "請選擇左側功能";
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
  statusOptions,
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
  statusOptions: Array<{ value: "all" | DocumentStatus; label: string }>;
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
    <section className="enterprise-panel overflow-hidden rounded-xl">
      <div className="flex flex-col gap-3 border-b border-slate-200 px-4 py-4 lg:flex-row lg:items-center">
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
            className="w-full rounded-lg border border-slate-300 bg-slate-50 py-2.5 pl-9 pr-4 text-sm text-slate-700 outline-none transition focus:border-teal-700 focus:bg-white"
          />
        </div>

        <button
          type="button"
          onClick={onSearch}
          className="enterprise-query-button inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition"
        >
          <Search size={15} />
          搜尋
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3 px-4 py-4">
        <FilterSelect
          label="文件類別"
            value={level}
            onChange={(value) => setLevel(value as "all" | DocumentLevel)}
            options={[
            { value: "all", label: "全部類別" },
              ...LEVEL_OPTIONS.map((option) => ({ value: option.value, label: option.label })),
            ]}
          />
        <FilterSelect
          label="文件狀態"
          value={status}
          onChange={(value) => setStatus(value as "all" | DocumentStatus)}
          options={statusOptions}
        />

        <div className="flex min-w-[240px] items-center rounded-lg border border-slate-300 bg-slate-50 px-3 py-2">
          <span className="mr-2 text-xs font-semibold text-slate-500">上傳者</span>
          <input
            value={uploader}
            onChange={(e) => setUploader(e.target.value)}
            placeholder="姓名 / 部門"
            className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-50 px-3 py-2">
          <span className="text-xs font-semibold text-slate-500">日期區間</span>
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
            className={`inline-flex items-center gap-1.5 rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${
              advancedOpen
                ? "border-teal-700 bg-teal-50 text-teal-800"
                : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            進階搜尋
            <ChevronDown
              size={14}
              className={advancedOpen ? "rotate-180 transition-transform" : "transition-transform"}
            />
          </button>
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            重設條件
          </button>
          <button
            type="button"
            onClick={onAdd}
            className="enterprise-query-button inline-flex items-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition"
          >
            新增文件
          </button>
        </div>
      </div>

      {advancedOpen && (
        <div className="enterprise-section-header px-4 py-4">
          <div className="grid gap-3 lg:grid-cols-3">
            <TextField
              label="文件編號"
              value={docNo}
              onChange={setDocNo}
              placeholder="DOC-2026-001"
            />
            <TextField
              label="所屬部門"
              value={department}
              onChange={setDepartment}
              placeholder="一級部門 / 二級部門"
            />
            <TextField label="標籤" value={tag} onChange={setTag} placeholder="年度 / 版本 / 關鍵詞" />
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
        className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-700"
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
        <label className="flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-50 px-3 py-2">
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
      className={`mb-2.5 overflow-hidden rounded-xl border transition ${
        active ? "border-white/18" : "border-white/10"
      }`}
    >
      <div
        className={`flex w-full items-start justify-between gap-3 px-3 py-2.5 text-left transition ${
          active ? "bg-white/8" : "bg-transparent hover:bg-white/8"
        } ${collapsed ? "px-2 py-2" : ""}`}
      >
        <button type="button" onClick={onHeaderClick} className="min-w-0 flex-1 text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10 text-white ring-1 ring-white/10">
              {icon}
            </span>
            {!collapsed && (
              <>
                <span className="text-sm font-bold text-white">{title}</span>
                {badge && (
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-semibold text-white">
                    {badge}
                  </span>
                )}
              </>
            )}
          </div>
          {!collapsed && subtitle.trim() && <div className="mt-1 text-xs leading-5 text-white/72">{subtitle}</div>}
        </button>
        {!collapsed && (
          <button
            type="button"
            onClick={onToggle}
            className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label={open ? "收合區塊" : "展開區塊"}
          >
            <ChevronRight size={16} className={`transition-transform ${open ? "rotate-90" : ""}`} />
          </button>
        )}
      </div>
      {open && !collapsed && <div className="border-t border-white/8 px-3 py-2.5">{children}</div>}
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
          ? "border-white/30 bg-white/15 text-white"
          : "border-white/15 bg-white/5 text-white/90 hover:bg-white/10 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function FolderCard({
  node,
  onClick,
}: {
  node: LegacyKnowledgeTreeNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="knowledge-card flex items-start gap-3 rounded-xl px-4 py-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-md"
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 ring-1 ring-slate-200">
        <FolderOpen size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="truncate text-base font-bold text-slate-800">{node.label}</h4>

        {node.children && node.children.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {node.children.slice(0, 4).map((child) => (
              <span
                key={`${node.id}-${child.id}`}
                className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
              >
                {child.label}
              </span>
            ))}
          </div>
        ) : (
          <div className="mt-3 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
            無子分類
          </div>
        )}
      </div>
    </button>
  );
}

function KnowledgeOverview({
  roots,
  onOpenCategory,
}: {
  roots: Array<{
    node: LegacyKnowledgeTreeNode;
    childPreview: Array<{ label: string; count: number; id: string }>;
  }>;
  onOpenCategory: (path: string[], label: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {roots.map(({ node, childPreview }) => (
        <button
          key={`${node.id}-${getNodePath(node).join("|")}`}
          type="button"
          onClick={() => onOpenCategory(getNodePath(node), node.label)}
          className="knowledge-card rounded-xl p-4 text-left text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <FolderOpen size={18} className="text-slate-700" />
                <h4 className="truncate text-base font-bold text-slate-800">{node.label}</h4>
              </div>
            </div>
          </div>

          <div className="mt-4">
            {childPreview.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {childPreview.map((child) => (
                  <span
                    key={`${node.id}-${child.id}`}
                    className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
                  >
                    {child.label}
                  </span>
                ))}
              </div>
            ) : (
              <div className="text-sm text-slate-500">無子分類</div>
            )}
          </div>
        </button>
      ))}
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

function getNodePath(node: LegacyKnowledgeTreeNode): string[] {
  return node.pathLabels ?? node.pathNames ?? [];
}
