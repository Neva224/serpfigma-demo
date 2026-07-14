import { useEffect, useMemo, useState } from "react";
import { Toaster, toast } from "sonner";
import { Header } from "./components/Header";
import { DocumentListPage, OVERVIEW_VIEW, type ViewMode } from "./components/DocumentListPage";
import { ApprovalDrawer } from "./components/approval/ApprovalDrawer";
import {
  applyWorkflowDecision,
  applyWorkflowTransfer,
  createDemoUser,
  deleteWorkflowDocument,
  markNotificationRead,
  migrateWorkflowDocuments,
  normalizeWorkflowDocuments,
  restoreWorkflowDocument,
  saveDraftDocument,
  submitDocument,
  type ApprovalStage,
  type WorkflowDocument,
  type WorkflowNotification,
  type WorkflowRole,
  type WorkflowUser,
} from "./workflow/workflowState";
import {
  loadRoles,
  loadWorkflowSnapshot,
  saveRoles,
  saveWorkflowSnapshot,
} from "./data/documentRepository";
import { orgRepository } from "./data/orgRepository";
import type { DocumentFormSubmitPayload } from "./components/form/DocumentFormPage";

// 無登入系統時的預設角色：開發環境給全角色方便 demo；正式環境給最小權限 uploader，
// 使用者可再用 Header 的角色切換器手動調整（選擇會保存在 localStorage）。
const DEFAULT_ROLES: WorkflowRole[] = import.meta.env.DEV
  ? ["uploader", "signing_manager", "doc_admin", "system_admin"]
  : ["uploader"];

interface ApprovalTarget {
  docId: number;
  stage: ApprovalStage;
}

export default function App() {
  const initialSnapshot = useMemo(() => {
    const snapshot = loadWorkflowSnapshot();
    // 載入時把舊有資料的文件編號更新為最新規則（草稿清空、舊格式重編）
    return { ...snapshot, documents: migrateWorkflowDocuments(snapshot.documents) };
  }, []);
  const [roles, setRoles] = useState<WorkflowRole[]>(() => loadRoles() ?? DEFAULT_ROLES);
  const currentUser = useMemo<WorkflowUser>(() => createDemoUser(roles), [roles]);
  const [view, setView] = useState<ViewMode>(OVERVIEW_VIEW);
  const [documents, setDocuments] = useState<WorkflowDocument[]>(() => initialSnapshot.documents);
  const [notifications, setNotifications] = useState<WorkflowNotification[]>(
    () => initialSnapshot.notifications,
  );
  const [notificationPulse, setNotificationPulse] = useState(0);

  // 持久化：文件／通知與角色選擇變動時寫回 localStorage（重整後保留）。
  useEffect(() => {
    saveWorkflowSnapshot({ documents, notifications });
  }, [documents, notifications]);
  useEffect(() => {
    saveRoles(roles);
  }, [roles]);
  const [approval, setApproval] = useState<ApprovalTarget | null>(null);
  const [formDoc, setFormDoc] = useState<WorkflowDocument | null>(null);
  const visibleDocuments = useMemo(() => normalizeWorkflowDocuments(documents), [documents]);

  const approvalDoc = approval ? visibleDocuments.find((item) => item.id === approval.docId) ?? null : null;

  // 依角色決定可執行的簽核階段：主管簽核只給會簽主管、文管審核只給文管審核者。
  const canApproveManager = currentUser.roles.includes("signing_manager");
  const canApproveDocAdmin = currentUser.roles.includes("doc_admin");

  function openApproval(docId: number, stage: ApprovalStage) {
    const allowed = stage === "manager" ? canApproveManager : canApproveDocAdmin;
    if (!allowed) {
      toast.error(stage === "manager" ? "僅「會簽主管」可執行主管簽核" : "僅「文管審核者」可執行文管審核");
      return;
    }
    setApproval({ docId, stage });
  }

  function openReEdit(doc: WorkflowDocument) {
    setFormDoc(doc);
    setView({ kind: "documentUpload" });
  }

  function navigateTo(nextScreen: string) {
    if (nextScreen === "permissions") {
      setView({ kind: "systemAdmin" });
      return;
    }
    setView(OVERVIEW_VIEW);
  }

  function goHome() {
    setView(OVERVIEW_VIEW);
    setApproval(null);
    setFormDoc(null);
  }

  function handleNotificationClick(notification: WorkflowNotification) {
    setNotifications((current) => markNotificationRead(current, notification.id));

    if (notification.type === "manager_approval_pending" || notification.type === "docadmin_approval_pending") {
      openApproval(notification.docId, notification.targetStage);
      return;
    }

    if (notification.type === "rejected") {
      const doc = visibleDocuments.find((item) => item.id === notification.docId);
      if (doc) openReEdit(doc);
      return;
    }

    if (notification.type === "published" || notification.type === "voided") {
      setView(OVERVIEW_VIEW);
    }
  }

  async function handleFormSubmit(payload: DocumentFormSubmitPayload) {
    // 依歸屬部門帶入對應簽核主管（目前靜態、未來由 BFF/HCM API 提供）
    const signingManager = await orgRepository.getSigningManager(payload.ownershipDepartmentPath);
    const result = submitDocument(documents, notifications, currentUser, {
      ...payload,
      uploaderName: currentUser.name,
      uploaderCode: currentUser.code,
      signingManagerName: signingManager?.name ?? null,
      signingManagerEmpId: signingManager?.empId ?? null,
      editingDocId: formDoc?.id ?? null,
      existingDoc: formDoc,
    });

    setDocuments((current) => {
      const nextDocs = current.some((item) => item.id === result.document.id)
        ? current.map((item) => (item.id === result.document.id ? result.document : item))
        : [...current, result.document];
      return nextDocs;
    });
    setNotifications((current) => [...current, result.notification]);
    setNotificationPulse((current) => current + 1);
    setFormDoc(null);
    setView(OVERVIEW_VIEW);
    toast.success(formDoc ? "文件已更新並送出簽核" : "文件已送出簽核");
  }

  function handleSaveDraft(payload: DocumentFormSubmitPayload) {
    const result = saveDraftDocument(documents, {
      ...payload,
      uploaderName: currentUser.name,
      uploaderCode: currentUser.code,
      editingDocId: formDoc?.id ?? null,
      existingDoc: formDoc,
    });

    setDocuments((current) => {
      const nextDocs = current.some((item) => item.id === result.document.id)
        ? current.map((item) => (item.id === result.document.id ? result.document : item))
        : [...current, result.document];
      return nextDocs;
    });
    setFormDoc(null);
    setView({ kind: "drafts" });
    toast.success("草稿已儲存並移至草稿專區");
  }

  function handleApproveDecision(
    action: "approve" | "reject",
    reason?: string,
    comment?: string,
    transfer?: { categoryId: string; categoryPath: string[]; ownershipDepartmentPath: string[] },
  ) {
    if (!approvalDoc || !approval) return;

    const result = transfer
      ? applyWorkflowTransfer(documents, notifications, {
          doc: approvalDoc,
          actor: currentUser,
          ...(reason ? { reason } : {}),
          comment,
          transferCategoryId: transfer.categoryId,
          transferCategoryPath: transfer.categoryPath,
          transferOwnershipDepartmentPath: transfer.ownershipDepartmentPath,
        })
      : applyWorkflowDecision(documents, notifications, {
          doc: approvalDoc,
          stage: approval.stage,
          action,
          actor: currentUser,
          ...(reason ? { reason } : {}),
          ...(comment ? { comment } : {}),
        });

    setDocuments(result.documents);
    setNotifications(result.notifications);
    if (result.notification) {
      setNotificationPulse((current) => current + 1);
    }
    setApproval(null);
    if (result.document.status === "退回") {
      toast.success("文件已退回，請重新編輯後送出");
    } else if (result.document.status === "上架") {
      toast.success("文件已審核通過並上架");
    } else if (result.document.status === "待文管審核") {
      toast.success("文件已移轉，等待文管審核");
    } else {
      toast.success("簽核處理完成");
    }
  }

  function handleVoidPublished(doc: WorkflowDocument) {
    const result = applyWorkflowDecision(documents, notifications, {
      doc,
      stage: "docadmin",
      action: "void",
      actor: currentUser,
    });

    setDocuments(result.documents);
    setNotifications(result.notifications);
    if (result.notification) {
      setNotificationPulse((current) => current + 1);
    }
    toast.success("文件已作廢");
  }

  function handleDeletePublished(doc: WorkflowDocument) {
    const result = deleteWorkflowDocument(documents, notifications, doc.id);
    setDocuments(result.documents);
    setNotifications(result.notifications);
    setApproval((current) => (current?.docId === doc.id ? null : current));
    toast.success("文件已刪除");
  }

  function handleRestoreVoided(doc: WorkflowDocument) {
    const result = restoreWorkflowDocument(documents, notifications, {
      doc,
      actor: currentUser,
    });

    setDocuments(result.documents);
    setNotifications(result.notifications);
    if (result.document.status === "上架") {
      toast.success("文件已還原並恢復上架");
    } else {
      toast.success("文件已還原");
    }
  }

  const canVoidPublishedDocs =
    currentUser.roles.includes("system_admin") ||
    currentUser.roles.includes("signing_manager") ||
    currentUser.roles.includes("doc_admin");
  const canDeletePublishedDocs = currentUser.roles.includes("system_admin");

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-transparent">
      <Toaster position="top-right" richColors closeButton />
      <Header
        activeScreen={view.kind === "systemAdmin" ? "permissions" : "list"}
        onNavigate={navigateTo}
        onLogoClick={goHome}
        notifications={notifications}
        onNotificationClick={handleNotificationClick}
        notificationPulse={notificationPulse}
        roles={roles}
        onRolesChange={setRoles}
      />

      <div className="flex flex-1 flex-col overflow-hidden bg-transparent">
        <DocumentListPage
          documents={visibleDocuments}
          view={view}
          formDoc={formDoc}
          onViewChange={setView}
          onSubmitDocument={handleFormSubmit}
          onAdd={() => {
            setFormDoc(null);
            setView({ kind: "documentUpload" });
          }}
          onApprove={(doc) => {
            const stage: ApprovalStage = doc.status === "待文管審核" ? "docadmin" : "manager";
            openApproval(doc.id, stage);
          }}
          onReEdit={openReEdit}
          onVoidPublished={handleVoidPublished}
          onDeletePublished={handleDeletePublished}
          onRestoreVoided={handleRestoreVoided}
          onSaveDraft={handleSaveDraft}
          canVoidPublishedDocs={canVoidPublishedDocs}
          canDeletePublishedDocs={canDeletePublishedDocs}
          canApproveManager={canApproveManager}
          canApproveDocAdmin={canApproveDocAdmin}
        />
      </div>

      {approval && approvalDoc && (
        <ApprovalDrawer
          doc={approvalDoc}
          role={approval.stage}
          onClose={() => setApproval(null)}
          onApprove={() => handleApproveDecision("approve")}
          onReject={(reason, comment, transfer) => handleApproveDecision("reject", reason, comment, transfer)}
        />
      )}
    </div>
  );
}
