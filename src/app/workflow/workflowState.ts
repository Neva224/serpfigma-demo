import type { DocumentLevel, DocumentRecord, DocumentStatus } from "../components/document-management/mockData";

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
  comment?: string;
}

export interface WorkflowAttachment {
  id: string;
  name: string;
  size: string;
  type: string;
  uploadedAt: string;
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
  ownershipDepartmentPath?: string[];
  attachments?: WorkflowAttachment[];
  isPublished?: boolean;
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

export interface WorkflowUser {
  id: string;
  name: string;
  code: string;
  roles: Array<"uploader" | "system_admin" | "signing_manager" | "doc_admin">;
}

export interface DocumentSubmissionInput {
  title: string;
  ownerName: string;
  validFrom: string;
  validTo: string;
  summary: string;
  tags: string[];
  categoryId: string;
  categoryPath: string[];
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
  comment?: string;
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
  return docs.map((doc) => {
    const history = buildInitialHistory(doc);
    return {
      ...doc,
      ownerName: doc.requestor ?? doc.uploaderName,
      summary: doc.subject ?? doc.name,
      createdAt: doc.uploadDate,
      updatedAt: doc.uploadDate,
      approvalNo: doc.signingNo,
      attachments: [],
      isPublished: doc.status === "上架",
      ownershipDepartmentPath: normalizePath(doc.department.split(" / ")),
      history,
    };
  });
}

export function buildInitialNotifications(docs: WorkflowDocument[]): WorkflowNotification[] {
  const notifications: WorkflowNotification[] = [];
  let nextId = 1;

  for (const doc of docs) {
    if (doc.status === "待主管簽核" && doc.signingNo) {
      notifications.push({
        id: nextId++,
        type: "manager_approval_pending",
        title: "有一筆文件待主管簽核，請盡快處理",
        message: `${doc.name} 等待主管簽核`,
        docId: doc.id,
        signingNo: doc.signingNo,
        targetStage: "manager",
        unread: true,
        createdAt: doc.createdAt ?? nowIso(),
      });
    }
    if (doc.status === "待文管審核" && doc.signingNo) {
      notifications.push({
        id: nextId++,
        type: "docadmin_approval_pending",
        title: "有一筆文件待文管審核，請盡快處理",
        message: `${doc.name} 等待文管審核`,
        docId: doc.id,
        signingNo: doc.signingNo,
        targetStage: "docadmin",
        unread: true,
        createdAt: doc.createdAt ?? nowIso(),
      });
    }
    if (doc.status === "退回" && doc.signingNo) {
      notifications.push({
        id: nextId++,
        type: "rejected",
        title: "文件已被退回，請重新編輯後送出",
        message: `${doc.name} 已退回`,
        docId: doc.id,
        signingNo: doc.signingNo,
        targetStage: "manager",
        unread: true,
        createdAt: doc.updatedAt ?? doc.createdAt ?? nowIso(),
      });
    }
  }

  return notifications;
}

export function createDemoUser(demoMode = true): WorkflowUser {
  return {
    id: "demo-user",
    name: "SERP Demo",
    code: "SERP-001",
    roles: demoMode ? ["uploader", "system_admin", "signing_manager", "doc_admin"] : ["uploader"],
  };
}

export function buildInitialHistory(doc: DocumentRecord): WorkflowHistoryEntry[] {
  const initialSubmitted = toWorkflowHistory("送出簽核", "系統", "草稿", doc.status);
  if (doc.status === "待主管簽核") return [initialSubmitted];
  if (doc.status === "待文管審核") {
    return [
      initialSubmitted,
      toWorkflowHistory("主管簽核通過", "系統", "待主管簽核", "待文管審核"),
    ];
  }
  if (doc.status === "上架") {
    return [
      initialSubmitted,
      toWorkflowHistory("主管簽核通過", "系統", "待主管簽核", "待文管審核"),
      toWorkflowHistory("文管審核通過", "系統", "待文管審核", "上架"),
      toWorkflowHistory("上架", "系統", "待文管審核", "上架"),
    ];
  }
  if (doc.status === "退回") {
    return [
      initialSubmitted,
      toWorkflowHistory("退回", "系統", "待主管簽核", "退回"),
    ];
  }
  if (doc.status === "作廢") {
    return [
      initialSubmitted,
      toWorkflowHistory("作廢", "系統", "待主管簽核", "作廢"),
    ];
  }
  if (doc.status === "下架") {
    return [
      initialSubmitted,
      toWorkflowHistory("下架", "系統", "上架", "下架"),
    ];
  }
  return [initialSubmitted];
}

function createDocumentNo(nextSequence: number) {
  return `DOC-${buildDateStamp()}-${pad(nextSequence)}`;
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
    attachments: doc.attachments ? [...doc.attachments] : undefined,
  };
}

export function submitDocument(
  docs: WorkflowDocument[],
  notifications: WorkflowNotification[],
  actor: WorkflowUser,
  input: DocumentSubmissionInput,
): WorkflowSubmissionResult {
  const existing = input.existingDoc ?? (input.editingDocId != null ? docs.find((doc) => doc.id === input.editingDocId) ?? null : null);
  const sequence = nextSequenceFromDocs(docs);
  const docNo = existing?.docNo ?? createDocumentNo(sequence);
  const signingNo = existing?.signingNo ?? createSigningNo(sequence);
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
        currentHandler: "待主管簽核",
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
    currentHandler: "待主管簽核",
    requestor: input.ownerName || input.uploaderName,
    requestorCode: input.uploaderCode,
    uploaderName: input.uploaderName,
    uploaderCode: input.uploaderCode,
    uploadDate: baseDoc.uploadDate || timestamp.slice(0, 10),
  };

  const nextDocuments = existing
    ? docs.map((doc) => (doc.id === existing.id ? updatedDoc : doc))
    : [...docs, updatedDoc];

  const notification: WorkflowNotification = {
    id: baseNotificationId(notifications),
    type: "manager_approval_pending",
    title: "有一筆文件待主管簽核，請盡快處理",
    message: `${updatedDoc.name} 等待主管簽核`,
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
        message: `${doc.name} 已被主管退回`,
        docId: doc.id,
        signingNo: doc.signingNo ?? "",
        targetStage: "manager",
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
        targetStage: "manager",
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
        message: `${doc.name} 已上架`,
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
        message: `${doc.name} 已被文管退回`,
        docId: doc.id,
        signingNo: doc.signingNo ?? "",
        targetStage: "docadmin",
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
        targetStage: "docadmin",
        unread: true,
        createdAt: timestamp,
      };
    }
  }

  const historyAction =
    actionLabel ||
    (input.action === "approve" ? "核准" : input.action === "reject" ? "退回" : "作廢");

  const updatedDoc: WorkflowDocument = {
    ...doc,
    status: after,
    currentHandler:
      after === "待文管審核"
        ? "待文管審核"
        : after === "上架"
          ? "已上架"
          : after === "退回"
            ? "退回編修"
            : after === "作廢"
              ? "文件作廢"
              : doc.currentHandler,
    isPublished: after === "上架",
    updatedAt: timestamp,
    history: [
      ...doc.history,
      {
        action: historyAction,
        actor: input.actor.name,
        timestamp,
        statusFrom: before,
        statusTo: after,
        ...(input.comment ? { comment: input.comment } : {}),
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
    currentHandler: doc.currentHandler ?? (doc.status === "上架" ? "已上架" : doc.status),
  };
}
