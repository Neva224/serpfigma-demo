import type { DocumentLevel, DocumentRecord, DocumentStatus } from "../components/document-management/mockData";
import { buildCategoryCode, CATEGORY_NODES } from "../data/catalogModels";

export type ApprovalStage = "manager" | "docadmin";
export type WorkflowAction = "create" | "resubmit" | "manager_approve" | "manager_reject" | "manager_void" | "docadmin_approve" | "docadmin_reject" | "docadmin_void";
export type WorkflowNotificationType =
  | "manager_approval_pending"
  | "docadmin_approval_pending"
  | "rejected"
  | "published"
  | "voided";

export interface WorkflowHistoryEntry {
  action: string;
  actor: string;
  timestamp: string;
  statusFrom: DocumentStatus;
  statusTo: DocumentStatus;
  reason?: string;
  comment?: string;
  categoryPathBefore?: string[];
  categoryPathAfter?: string[];
  ownershipDepartmentPathBefore?: string[];
  ownershipDepartmentPathAfter?: string[];
}

export interface WorkflowAttachment {
  id: string;
  name: string;
  size: string;
  type: string;
  uploadedAt: string;
  downloadUrl?: string;
}

export interface WorkflowDocument extends DocumentRecord {
  ownerName?: string;
  summary?: string;
  validFrom?: string;
  validTo?: string;
  createdAt?: string;
  updatedAt?: string;
  approvalNo?: string;
  categoryId?: string;
  categoryCode?: string;
  signingManagerName?: string | null;
  signingManagerEmpId?: string | null;
  ownershipDepartmentPath?: string[];
  sourceDepartmentPath?: string[];
  attachments?: WorkflowAttachment[];
  isPublished?: boolean;
  voidedFromStatus?: DocumentStatus;
  history: WorkflowHistoryEntry[];
}

export interface WorkflowNotification {
  id: number;
  type: WorkflowNotificationType;
  title: string;
  message?: string;
  docId: number;
  signingNo: string;
  targetStage: ApprovalStage;
  unread: boolean;
  createdAt: string;
}

export type WorkflowRole = "uploader" | "system_admin" | "signing_manager" | "doc_admin";

/** 可切換的角色清單（顯示順序即權限由小到大）。 */
export const WORKFLOW_ROLES: ReadonlyArray<{ value: WorkflowRole; label: string }> = [
  { value: "uploader", label: "文件上傳者" },
  { value: "signing_manager", label: "會簽主管" },
  { value: "doc_admin", label: "文管審核者" },
  { value: "system_admin", label: "系統管理員" },
];

export interface WorkflowUser {
  id: string;
  name: string;
  code: string;
  roles: WorkflowRole[];
}

export interface DocumentSubmissionInput {
  title: string;
  ownerName: string;
  validFrom: string;
  validTo: string;
  summary: string;
  tags: string[];
  categoryId: string;
  categoryCode?: string;
  categoryPath: string[];
  signingManagerName?: string | null;
  signingManagerEmpId?: string | null;
  ownershipDepartmentPath: string[];
  attachments: WorkflowAttachment[];
  level: DocumentLevel;
  uploaderName: string;
  uploaderCode: string;
  editingDocId?: number | null;
  existingDoc?: WorkflowDocument | null;
}

export interface WorkflowSubmissionResult {
  document: WorkflowDocument;
  notification: WorkflowNotification;
}

export interface WorkflowDecisionInput {
  doc: WorkflowDocument;
  stage: ApprovalStage;
  action: "approve" | "reject" | "void";
  actor: WorkflowUser;
  reason?: string;
  comment?: string;
}

export interface WorkflowTransferInput {
  doc: WorkflowDocument;
  actor: WorkflowUser;
  reason?: string;
  comment?: string;
  transferCategoryId: string;
  transferCategoryPath: string[];
  transferOwnershipDepartmentPath: string[];
}

function nowIso() {
  return new Date().toISOString();
}

function pad(value: number) {
  return String(value).padStart(3, "0");
}

function parseSequence(value: string, prefix: string) {
  const match = value.match(new RegExp(`^${prefix}-(?:\\d{4})-(\\d{3})$`));
  return match ? Number(match[1]) : 0;
}

function buildDateStamp(isoString = nowIso()) {
  const date = new Date(isoString);
  const year = date.getFullYear();
  return String(year);
}

function normalizePath(values: string[]) {
  return values.map((value) => value.trim()).filter(Boolean);
}

function todayYmd() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isExpiredByValidTo(validTo?: string) {
  if (!validTo) return false;
  return todayYmd() > validTo;
}

export function normalizeWorkflowStatus(status: string, validTo?: string): DocumentStatus {
  if (status === "刪除" || status === "已刪除") return "刪除";
  if (status === "作廢" || status === "已作廢" || status === "下架" || status === "已下架") return "作廢";
  if (isExpiredByValidTo(validTo)) return "作廢";
  if (status === "已上架") return "上架";
  if (status === "待文管審核" || status === "待文管簽核") return "待文管審核";
  if (status === "退回" || status === "已退回") return "退回";
  return status as DocumentStatus;
}

function toWorkflowHistory(action: string, actor: WorkflowUser | "系統", statusFrom: DocumentStatus, statusTo: DocumentStatus, comment?: string): WorkflowHistoryEntry {
  return {
    action,
    actor: typeof actor === "string" ? actor : actor.name,
    timestamp: nowIso(),
    statusFrom,
    statusTo,
    ...(comment ? { comment } : {}),
  };
}

export function buildInitialWorkflowDocuments(docs: DocumentRecord[]): WorkflowDocument[] {
  return docs.map((doc) => ({
    ...doc,
    status: normalizeWorkflowStatus(doc.status, undefined),
    ownerName: doc.requestor ?? doc.uploaderName,
    summary: doc.subject ?? doc.name,
    createdAt: doc.uploadDate,
    updatedAt: doc.uploadDate,
    approvalNo: doc.signingNo,
    attachments: [],
    isPublished: doc.status === "上架",
    ownershipDepartmentPath: normalizePath(doc.department.split(" / ")),
    sourceDepartmentPath: normalizePath(doc.department.split(" / ")),
    history: [],
  }));
}

export function buildInitialNotifications(docs: WorkflowDocument[]): WorkflowNotification[] {
  void docs;
  return [];
}
/**
 * 依實際選定的角色建立當前使用者。
 * 不再寫死全角色；角色由呼叫端（角色切換器 / 未來的登入身分）決定，
 * 空陣列時退回最小權限 uploader。
 */
export function createDemoUser(roles: WorkflowRole[] = ["uploader"]): WorkflowUser {
  return {
    id: "demo-user",
    name: "系統示範帳號",
    code: "示範001",
    roles: roles.length > 0 ? [...roles] : ["uploader"],
  };
}

export function buildInitialHistory(doc: DocumentRecord): WorkflowHistoryEntry[] {
  void doc;
  return [];
}
function levelDigit(level: DocumentLevel): string {
  const match = /(\d)/.exec(level);
  const value = match ? Number(match[1]) : 0;
  return value >= 1 && value <= 6 ? String(value) : "";
}

function twoDigitYear(isoString = nowIso()) {
  return String(new Date(isoString).getFullYear()).slice(-2);
}

/**
 * 文件編號：{階級1-6}-{分類英文代碼}-{YY}{三碼流水號}，例 6-VISA-CN-26003。
 * 流水號依前綴「{階級}-{代碼}-{YY}」分群：同前綴延續遞增，不同前綴各自從 001 起。
 */
function buildDocumentNo(
  docs: WorkflowDocument[],
  level: DocumentLevel,
  categoryCode: string,
  isoString = nowIso(),
) {
  const prefix = `${levelDigit(level)}-${categoryCode}-${twoDigitYear(isoString)}`;
  let maxSerial = 0;
  for (const doc of docs) {
    const no = doc.docNo ?? "";
    if (!no.startsWith(prefix)) continue;
    const match = /^(\d{3})$/.exec(no.slice(prefix.length));
    if (match) maxSerial = Math.max(maxSerial, Number(match[1]));
  }
  return `${prefix}${String(maxSerial + 1).padStart(3, "0")}`;
}

const NEW_DOCNO_PATTERN = /^\d-.*-\d{5}$/;

function docYearIso(doc: WorkflowDocument) {
  if (doc.createdAt) return doc.createdAt;
  if (doc.uploadDate) return `${doc.uploadDate}T00:00:00`;
  return nowIso();
}

/**
 * 將舊有資料的文件編號更新為最新規則（載入時執行一次，具冪等性）：
 * - 草稿一律清為未編號（不佔號）
 * - 非草稿且非新格式者，依 階級 + 分類代碼 + 年份 重新編號；流水號依前綴、按建立順序遞增
 * - 已是新格式者維持不變，其流水號會被納入計算避免撞號
 */
export function migrateWorkflowDocuments(docs: WorkflowDocument[]): WorkflowDocument[] {
  if (docs.length === 0) return docs;
  const serialByPrefix = new Map<string, number>();

  // pass 1：先記錄已是新格式者的流水號，避免重新編號時撞號
  for (const doc of docs) {
    if (doc.status === "草稿") continue;
    const no = doc.docNo ?? "";
    if (NEW_DOCNO_PATTERN.test(no)) {
      const prefix = no.slice(0, no.length - 3);
      serialByPrefix.set(prefix, Math.max(serialByPrefix.get(prefix) ?? 0, Number(no.slice(-3))));
    }
  }

  // pass 2：依建立順序決定新編號
  const nextDocNo = new Map<number, string>();
  const nextCode = new Map<number, string | undefined>();
  const ordered = [...docs].sort(
    (a, b) => (a.createdAt ?? "").localeCompare(b.createdAt ?? "") || a.id - b.id,
  );
  for (const doc of ordered) {
    if (doc.status === "草稿") {
      nextDocNo.set(doc.id, "");
      nextCode.set(doc.id, doc.categoryCode);
      continue;
    }
    const categoryCode = doc.categoryCode ?? buildCategoryCode(CATEGORY_NODES, doc.categoryPath ?? []);
    nextCode.set(doc.id, categoryCode);
    const no = doc.docNo ?? "";
    if (NEW_DOCNO_PATTERN.test(no)) {
      nextDocNo.set(doc.id, no);
      continue;
    }
    const prefix = `${levelDigit(doc.level)}-${categoryCode}-${twoDigitYear(docYearIso(doc))}`;
    const next = (serialByPrefix.get(prefix) ?? 0) + 1;
    serialByPrefix.set(prefix, next);
    nextDocNo.set(doc.id, `${prefix}${String(next).padStart(3, "0")}`);
  }

  let changed = false;
  const result = docs.map((doc) => {
    const docNo = nextDocNo.get(doc.id) ?? doc.docNo;
    const categoryCode = nextCode.has(doc.id) ? nextCode.get(doc.id) : doc.categoryCode;
    if (docNo !== doc.docNo || categoryCode !== doc.categoryCode) changed = true;
    return { ...doc, docNo, categoryCode };
  });
  return changed ? result : docs;
}

function createSigningNo(nextSequence: number) {
  return `SGN-${buildDateStamp()}-${pad(nextSequence)}`;
}

function nextSequenceFromDocs(docs: WorkflowDocument[]) {
  const docSequences = docs.map((doc) => parseSequence(doc.docNo, "DOC"));
  const signingSequences = docs.map((doc) => parseSequence(doc.signingNo ?? "", "SGN"));
  return Math.max(0, ...docSequences, ...signingSequences) + 1;
}

function toOwnerDepartmentLabel(path: string[]) {
  return path.join(" / ");
}

function baseNotificationId(notifications: WorkflowNotification[]) {
  return Math.max(0, ...notifications.map((item) => item.id)) + 1;
}

function cloneDoc(doc: WorkflowDocument): WorkflowDocument {
  return {
    ...doc,
    tags: [...doc.tags],
    categoryPath: [...doc.categoryPath],
    knowledgePath: doc.knowledgePath ? [...doc.knowledgePath] : undefined,
    history: [...doc.history],
    ownershipDepartmentPath: doc.ownershipDepartmentPath ? [...doc.ownershipDepartmentPath] : undefined,
    sourceDepartmentPath: doc.sourceDepartmentPath ? [...doc.sourceDepartmentPath] : undefined,
    attachments: doc.attachments ? [...doc.attachments] : undefined,
  };
}

export interface DraftDocumentInput {
  title: string;
  ownerName: string;
  validFrom: string;
  validTo: string;
  summary: string;
  tags: string[];
  categoryId: string;
  categoryCode?: string;
  categoryPath: string[];
  signingManagerName?: string | null;
  signingManagerEmpId?: string | null;
  ownershipDepartmentPath: string[];
  attachments: WorkflowAttachment[];
  level: DocumentLevel;
  uploaderName: string;
  uploaderCode: string;
  editingDocId?: number | null;
  existingDoc?: WorkflowDocument | null;
}

function deriveCurrentHandlerForStatus(doc: WorkflowDocument, status: DocumentStatus) {
  if (status === "上架") return "上架";
  if (status === "待主管簽核") return "主管審核";
  if (status === "待文管審核") return "文管審核";
  if (status === "退回") return doc.uploaderName || doc.requestor || "上傳者";
  if (status === "作廢") return "文件作廢";
  if (status === "刪除") return "文件刪除";
  return status;
}

export function normalizeWorkflowDocument(doc: WorkflowDocument): WorkflowDocument {
  const effectiveStatus = normalizeWorkflowStatus(doc.status, doc.validTo);
  if (effectiveStatus === doc.status && !isExpiredByValidTo(doc.validTo)) {
    return doc;
  }

  return {
    ...doc,
    status: effectiveStatus,
    currentHandler: deriveCurrentHandlerForStatus(doc, effectiveStatus),
    isPublished: effectiveStatus === "上架",
    voidedFromStatus: effectiveStatus === "作廢" ? doc.voidedFromStatus ?? doc.status : doc.voidedFromStatus,
  };
}

export function normalizeWorkflowDocuments(docs: WorkflowDocument[]) {
  return docs.map((doc) => normalizeWorkflowDocument(doc));
}

export function submitDocument(
  docs: WorkflowDocument[],
  notifications: WorkflowNotification[],
  actor: WorkflowUser,
  input: DocumentSubmissionInput,
): WorkflowSubmissionResult {
  const existing = input.existingDoc ?? (input.editingDocId != null ? docs.find((doc) => doc.id === input.editingDocId) ?? null : null);
  const sequence = nextSequenceFromDocs(docs);
  // 只有正式送簽才給編號：草稿的 docNo / signingNo 為空字串，視為尚未編號、於此產生。
  const docNo = existing?.docNo?.trim() ? existing.docNo : buildDocumentNo(docs, input.level, input.categoryCode ?? "");
  const signingNo = existing?.signingNo?.trim() ? existing.signingNo : createSigningNo(sequence);
  const timestamp = nowIso();
  const title = input.title.trim();
  const summary = input.summary.trim();
  const tags = input.tags.map((tag) => tag.trim()).filter(Boolean);
  const currentStatus: DocumentStatus = existing?.status ?? "草稿";
  const isResubmit = currentStatus === "退回";
  const nextStatus: DocumentStatus = "待主管簽核";
  const nextHistory: WorkflowHistoryEntry[] = [
    ...(existing?.history ? existing.history : []),
    {
      action: isResubmit ? "再送簽" : "送出簽核",
      actor: actor.name,
      timestamp,
      statusFrom: currentStatus,
      statusTo: nextStatus,
      ...(summary ? { comment: summary } : {}),
    },
  ];

  const baseDoc: WorkflowDocument = existing
    ? cloneDoc(existing)
    : {
        id: Math.max(0, ...docs.map((doc) => doc.id)) + 1,
        docNo,
        name: title,
        level: input.level,
        version: "v1.0",
        status: nextStatus,
        uploaderName: input.uploaderName,
        uploaderCode: input.uploaderCode,
        uploadDate: timestamp.slice(0, 10),
        department: toOwnerDepartmentLabel(input.ownershipDepartmentPath),
        tags,
        categoryPath: [...input.categoryPath],
        knowledgePath: [...input.categoryPath],
        signingNo,
        subject: summary,
        requestor: input.ownerName || input.uploaderName,
        requestorCode: input.uploaderCode,
        currentHandler: "主管審核",
        ownerName: input.ownerName || input.uploaderName,
        summary,
        validFrom: input.validFrom || undefined,
        validTo: input.validTo || undefined,
        createdAt: timestamp,
        updatedAt: timestamp,
        approvalNo: signingNo,
        categoryId: input.categoryId,
        ownershipDepartmentPath: [...input.ownershipDepartmentPath],
        attachments: [...input.attachments],
        isPublished: false,
        history: [],
      };

  const updatedDoc: WorkflowDocument = {
    ...baseDoc,
    docNo,
    signingNo,
    name: title,
    level: input.level,
    status: nextStatus,
    tags,
    categoryPath: [...input.categoryPath],
    knowledgePath: [...input.categoryPath],
    department: toOwnerDepartmentLabel(input.ownershipDepartmentPath),
    ownerName: input.ownerName || input.uploaderName,
    summary,
    validFrom: input.validFrom || undefined,
    validTo: input.validTo || undefined,
    updatedAt: timestamp,
    approvalNo: signingNo,
    categoryId: input.categoryId,
    ownershipDepartmentPath: [...input.ownershipDepartmentPath],
    attachments: [...input.attachments],
    isPublished: false,
    history: nextHistory,
    currentHandler: "主管審核",
    requestor: input.ownerName || input.uploaderName,
    requestorCode: input.uploaderCode,
    uploaderName: input.uploaderName,
    uploaderCode: input.uploaderCode,
    uploadDate: baseDoc.uploadDate || timestamp.slice(0, 10),
  };
  // 分類編號（由知識樹各層英文代碼組成，規格書 UP-02）；編修時若表單未帶則沿用既有值
  updatedDoc.categoryCode = input.categoryCode ?? updatedDoc.categoryCode;
  // 依歸屬部門帶入的簽核主管（規格書：依文件歸屬部門帶入對應簽核主管）
  updatedDoc.signingManagerName = input.signingManagerName ?? updatedDoc.signingManagerName ?? null;
  updatedDoc.signingManagerEmpId = input.signingManagerEmpId ?? updatedDoc.signingManagerEmpId ?? null;

  const nextDocuments = existing
    ? docs.map((doc) => (doc.id === existing.id ? updatedDoc : doc))
    : [...docs, updatedDoc];

  const notification: WorkflowNotification = {
    id: baseNotificationId(notifications),
    type: "manager_approval_pending",
    title: "有一筆文件待主管簽核，請盡快處理",
    message: `${updatedDoc.name} 等待主管簽核${updatedDoc.signingManagerName ? `（簽核主管：${updatedDoc.signingManagerName}）` : ""}`,
    docId: updatedDoc.id,
    signingNo,
    targetStage: "manager",
    unread: true,
    createdAt: timestamp,
  };

  return {
    document: updatedDoc,
    notification,
  };
}

export function saveDraftDocument(docs: WorkflowDocument[], input: DraftDocumentInput) {
  const existing = input.existingDoc ?? (input.editingDocId != null ? docs.find((doc) => doc.id === input.editingDocId) ?? null : null);
  const sequence = nextSequenceFromDocs(docs);
  const docNo = existing?.docNo ?? ""; // 草稿不佔正式編號，送簽時才產生
  const timestamp = nowIso();
  const title = input.title.trim() || existing?.name || "未命名草稿";
  const summary = input.summary.trim() || existing?.summary || existing?.subject || "";
  const tags = input.tags.map((tag) => tag.trim()).filter(Boolean);
  const sourcePath = [...input.ownershipDepartmentPath];
  const departmentLabel = toOwnerDepartmentLabel(input.ownershipDepartmentPath) || existing?.department || "未選擇部門";
  const currentStatus: DocumentStatus = "草稿";
  const nextHistory: WorkflowHistoryEntry[] = [
    ...(existing?.history ? existing.history : []),
    {
      action: existing ? "儲存草稿" : "建立草稿",
      actor: input.uploaderName,
      timestamp,
      statusFrom: existing?.status ?? "草稿",
      statusTo: currentStatus,
      ...(summary ? { comment: summary } : {}),
    },
  ];

  const baseDoc: WorkflowDocument = existing
    ? cloneDoc(existing)
    : {
        id: Math.max(0, ...docs.map((doc) => doc.id)) + 1,
        docNo,
        name: title,
        level: input.level,
        version: "v1.0",
        status: currentStatus,
        uploaderName: input.uploaderName,
        uploaderCode: input.uploaderCode,
        uploadDate: timestamp.slice(0, 10),
        department: departmentLabel,
        tags,
        categoryPath: [...input.categoryPath],
        knowledgePath: [...input.categoryPath],
        signingNo: "",
        subject: summary || title,
        requestor: input.ownerName || input.uploaderName,
        requestorCode: input.uploaderCode,
        currentHandler: "草稿編輯中",
        ownerName: input.ownerName || input.uploaderName,
        summary: summary || title,
        validFrom: input.validFrom || undefined,
        validTo: input.validTo || undefined,
        createdAt: timestamp,
        updatedAt: timestamp,
        approvalNo: "",
        categoryId: input.categoryId,
        ownershipDepartmentPath: [...input.ownershipDepartmentPath],
        sourceDepartmentPath: sourcePath,
        attachments: [...input.attachments],
        isPublished: false,
        history: [],
      };

  const updatedDoc: WorkflowDocument = {
    ...baseDoc,
    docNo,
    name: title,
    level: input.level,
    status: currentStatus,
    version: baseDoc.version ?? "v1.0",
    uploaderName: input.uploaderName,
    uploaderCode: input.uploaderCode,
    uploadDate: baseDoc.uploadDate || timestamp.slice(0, 10),
    department: departmentLabel,
    tags,
    categoryPath: [...input.categoryPath],
    knowledgePath: [...input.categoryPath],
    signingNo: existing?.signingNo ?? "",
    subject: summary || title,
    requestor: input.ownerName || input.uploaderName,
    requestorCode: input.uploaderCode,
    currentHandler: "草稿編輯中",
    ownerName: input.ownerName || input.uploaderName,
    summary: summary || title,
    validFrom: input.validFrom || undefined,
    validTo: input.validTo || undefined,
    updatedAt: timestamp,
    approvalNo: existing?.approvalNo ?? "",
    categoryId: input.categoryId,
    ownershipDepartmentPath: [...input.ownershipDepartmentPath],
    sourceDepartmentPath: sourcePath,
    attachments: [...input.attachments],
    isPublished: false,
    history: nextHistory,
  };
  // 分類編號（草稿一併保存；編修時若表單未帶則沿用既有值）
  updatedDoc.categoryCode = input.categoryCode ?? updatedDoc.categoryCode;

  const nextDocuments = existing
    ? docs.map((doc) => (doc.id === existing.id ? updatedDoc : doc))
    : [...docs, updatedDoc];

  return {
    documents: nextDocuments,
    document: updatedDoc,
  };
}
export function applyWorkflowDecision(
  docs: WorkflowDocument[],
  notifications: WorkflowNotification[],
  input: WorkflowDecisionInput,
) {
  const timestamp = nowIso();
  const index = docs.findIndex((item) => item.id === input.doc.id);
  if (index < 0) {
    return { documents: docs, notifications };
  }

  const doc = cloneDoc(docs[index]);
  const before = doc.status;
  let after: DocumentStatus = before;
  let actionLabel = "";
  let nextNotification: WorkflowNotification | null = null;

  if (input.stage === "manager") {
    if (input.action === "approve") {
      after = "待文管審核";
      actionLabel = "主管簽核通過";
      nextNotification = {
        id: baseNotificationId(notifications),
        type: "docadmin_approval_pending",
        title: "有一筆文件待文管審核，請盡快處理",
        message: `${doc.name} 等待文管審核`,
        docId: doc.id,
        signingNo: doc.signingNo ?? "",
        targetStage: "docadmin",
        unread: true,
        createdAt: timestamp,
      };
    } else if (input.action === "reject") {
      after = "退回";
      actionLabel = "主管退回";
      nextNotification = {
        id: baseNotificationId(notifications),
        type: "rejected",
        title: "文件已被主管退回，請重新編輯後送出",
        message: `${doc.name} 已退回，請重新編輯`,
        docId: doc.id,
        signingNo: doc.signingNo ?? "",
        targetStage: "uploader",
        unread: true,
        createdAt: timestamp,
      };
    } else if (input.action === "void") {
      after = "作廢";
      actionLabel = "主管作廢";
      nextNotification = {
        id: baseNotificationId(notifications),
        type: "voided",
        title: "文件已作廢",
        message: `${doc.name} 已作廢`,
        docId: doc.id,
        signingNo: doc.signingNo ?? "",
        targetStage: "uploader",
        unread: true,
        createdAt: timestamp,
      };
    }
  } else if (input.stage === "docadmin") {
    if (input.action === "approve") {
      after = "上架";
      actionLabel = "文管審核通過";
      nextNotification = {
        id: baseNotificationId(notifications),
        type: "published",
        title: "文件已審核通過並上架",
        message: `${doc.name} 已完成上架`,
        docId: doc.id,
        signingNo: doc.signingNo ?? "",
        targetStage: "docadmin",
        unread: true,
        createdAt: timestamp,
      };
    } else if (input.action === "reject") {
      after = "退回";
      actionLabel = "文管退回";
      nextNotification = {
        id: baseNotificationId(notifications),
        type: "rejected",
        title: "文件已被文管退回，請重新編輯後送出",
        message: `${doc.name} 已退回，請重新編輯`,
        docId: doc.id,
        signingNo: doc.signingNo ?? "",
        targetStage: "uploader",
        unread: true,
        createdAt: timestamp,
      };
    } else if (input.action === "void") {
      after = "作廢";
      actionLabel = "文管作廢";
      nextNotification = {
        id: baseNotificationId(notifications),
        type: "voided",
        title: "文件已作廢",
        message: `${doc.name} 已作廢`,
        docId: doc.id,
        signingNo: doc.signingNo ?? "",
        targetStage: "uploader",
        unread: true,
        createdAt: timestamp,
      };
    }
  }

  const historyAction = actionLabel || (input.action === "approve" ? "核准" : input.action === "reject" ? "退回" : "作廢");
  const historyComment = [input.reason?.trim(), input.comment?.trim()].filter(Boolean).join(" / ") || undefined;

  const updatedDoc: WorkflowDocument = {
    ...doc,
    status: after,
    currentHandler: deriveCurrentHandlerForStatus(doc, after),
    isPublished: after === "上架",
    voidedFromStatus: after === "作廢" ? before : doc.voidedFromStatus,
    updatedAt: timestamp,
    history: [
      ...doc.history,
      {
        action: historyAction,
        actor: input.actor.name,
        timestamp,
        statusFrom: before,
        statusTo: after,
        ...(input.reason ? { reason: input.reason } : {}),
        ...(historyComment ? { comment: historyComment } : {}),
      },
      ...(after === "上架"
        ? [
            {
              action: "上架",
              actor: "系統",
              timestamp,
              statusFrom: after,
              statusTo: after,
            },
          ]
        : []),
    ],
  };

  const nextDocuments = docs.map((item, currentIndex) => (currentIndex === index ? updatedDoc : item));
  const nextNotifications = nextNotification ? [...notifications, nextNotification] : notifications;

  return {
    documents: nextDocuments,
    notifications: nextNotifications,
    document: updatedDoc,
    notification: nextNotification,
  };
}

export function applyWorkflowTransfer(
  docs: WorkflowDocument[],
  notifications: WorkflowNotification[],
  input: WorkflowTransferInput,
) {
  const timestamp = nowIso();
  const index = docs.findIndex((item) => item.id === input.doc.id);
  if (index < 0) {
    return { documents: docs, notifications };
  }

  const doc = cloneDoc(docs[index]);
  const previousCategoryPath = [...doc.categoryPath];
  const previousDepartmentPath = doc.ownershipDepartmentPath ? [...doc.ownershipDepartmentPath] : [];
  const nextCategoryPath = normalizePath(input.transferCategoryPath);
  const nextDepartmentPath = normalizePath(input.transferOwnershipDepartmentPath);
  const historyComment = [input.reason?.trim(), input.comment?.trim()].filter(Boolean).join(" / ") || undefined;

  const updatedDoc: WorkflowDocument = {
    ...doc,
    status: "待文管審核",
    currentHandler: "文管審核",
    categoryId: input.transferCategoryId,
    categoryPath: [...nextCategoryPath],
    knowledgePath: [...nextCategoryPath],
    department: nextDepartmentPath.join(" / "),
    ownershipDepartmentPath: [...nextDepartmentPath],
    updatedAt: timestamp,
    isPublished: false,
    history: [
      ...doc.history,
      {
        action: "移轉單位",
        actor: input.actor.name,
        timestamp,
        statusFrom: doc.status,
        statusTo: "待文管審核",
        ...(input.reason ? { reason: input.reason } : {}),
        ...(historyComment ? { comment: historyComment } : {}),
        categoryPathBefore: previousCategoryPath,
        categoryPathAfter: [...nextCategoryPath],
        ownershipDepartmentPathBefore: previousDepartmentPath,
        ownershipDepartmentPathAfter: [...nextDepartmentPath],
      },
    ],
  };

  const nextNotification: WorkflowNotification = {
    id: baseNotificationId(notifications),
    type: "docadmin_approval_pending",
    title: "文件已移轉，請文管審核",
    message: `${doc.name} 已移轉，請文管審核`,
    docId: doc.id,
    signingNo: doc.signingNo ?? "",
    targetStage: "docadmin",
    unread: true,
    createdAt: timestamp,
  };

  return {
    documents: docs.map((item, currentIndex) => (currentIndex === index ? updatedDoc : item)),
    notifications: [...notifications, nextNotification],
    document: updatedDoc,
    notification: nextNotification,
  };
}

export function restoreWorkflowDocument(
  docs: WorkflowDocument[],
  notifications: WorkflowNotification[],
  input: { doc: WorkflowDocument; actor: WorkflowUser },
) {
  const timestamp = nowIso();
  const index = docs.findIndex((item) => item.id === input.doc.id);
  if (index < 0) {
    return { documents: docs, notifications };
  }

  const doc = cloneDoc(docs[index]);
  if (doc.status !== "作廢") {
    return { documents: docs, notifications };
  }

  const restoredStatus = doc.voidedFromStatus ?? "上架";
  const updatedDoc: WorkflowDocument = {
    ...doc,
    status: restoredStatus,
    currentHandler: deriveCurrentHandlerForStatus(doc, restoredStatus),
    isPublished: restoredStatus === "上架",
    voidedFromStatus: undefined,
    updatedAt: timestamp,
    history: [
      ...doc.history,
      {
        action: "還原文件",
        actor: input.actor.name,
        timestamp,
        statusFrom: "作廢",
        statusTo: restoredStatus,
      },
    ],
  };

  return {
    documents: docs.map((item, currentIndex) => (currentIndex === index ? updatedDoc : item)),
    notifications,
    document: updatedDoc,
  };
}

export function deleteWorkflowDocument(
  docs: WorkflowDocument[],
  notifications: WorkflowNotification[],
  docId: number,
) {
  return {
    documents: docs.filter((doc) => doc.id !== docId),
    notifications: notifications.filter((notification) => notification.docId !== docId),
  };
}

export function markNotificationRead(notifications: WorkflowNotification[], id: number) {
  return notifications.map((item) => (item.id === id ? { ...item, unread: false } : item));
}

export function isPublishedDocument(doc: WorkflowDocument) {
  return doc.status === "上架";
}

export function getPublishedDocuments(docs: WorkflowDocument[]) {
  return docs.filter(isPublishedDocument);
}

export function toApprovalQueryRecord(doc: WorkflowDocument) {
  return {
    signingNo: doc.signingNo ?? doc.approvalNo ?? "",
    docName: doc.name,
    requestor: doc.requestor ?? doc.uploaderName,
    requestorCode: doc.requestorCode ?? doc.uploaderCode,
    submitDate: (doc.createdAt ?? `${doc.uploadDate}T00:00:00Z`).slice(0, 10),
    subject: doc.summary ?? doc.subject ?? doc.name,
    requestUnitCode: doc.ownershipDepartmentPath?.[0] ?? doc.department,
    processUnitCode: doc.ownershipDepartmentPath?.[1] ?? doc.department,
    company: doc.ownershipDepartmentPath?.[0] ?? doc.department,
    status: doc.status,
    includeVoided: true,
    includeReturned: true,
    currentHandler: doc.currentHandler ?? (doc.status === "上架" ? "上架" : doc.status),
  };
}
