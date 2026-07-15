import { useEffect, useMemo, useState } from "react";
import { Toaster, toast } from "sonner";
import { Header } from "./components/Header";
import { LoginPage } from "./components/LoginPage";
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
  type WorkflowUser,
} from "./workflow/workflowState";
import {
  clearSession,
  loadSessionUser,
  loadWorkflowSnapshot,
  saveSessionUser,
  saveWorkflowSnapshot,
} from "./data/documentRepository";
import { authenticate, findAccountByUser } from "./data/demoAccounts";
import { orgRepository } from "./data/orgRepository";
import type { DocumentFormSubmitPayload } from "./components/form/DocumentFormPage";

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
  // 登入 session：以帳號決定角色與登入身分（員編）。未登入時顯示登入頁。
  const [sessionUser, setSessionUser] = useState<string | null>(() => loadSessionUser());
  const account = useMemo(() => findAccountByUser(sessionUser), [sessionUser]);
  const currentUser = useMemo<WorkflowUser>(
    () =>
      account
        ? createDemoUser([account.role], account.empId, account.name)
        : createDemoUser(["uploader"]),
    [account],
  );
  const [view, setView] = useState<ViewMode>(OVERVIEW_VIEW);
  const [documents, setDocuments] = useState<WorkflowDocument[]>(() => initialSnapshot.documents);
  const [notifications, setNotifications] = useState<WorkflowNotification[]>(
    () => initialSnapshot.notifications,
  );
  const [notificationPulse, setNotificationPulse] = useState(0);

  // 持久化：文件／通知變動時寫回 localStorage（重整後保留）。
  useEffect(() => {
    saveWorkflowSnapshot({ documents, notifications });
  }, [documents, notifications]);

  function handleLogin(user: string, pass: string): boolean {
    const matched = authenticate(user, pass);
    if (!matched) return false;
    saveSessionUser(matched.user);
    setSessionUser(matched.user);
    return true;
  }

  function handleLogout() {
    clearSession();
    setSessionUser(null);
    setView(OVERVIEW_VIEW);
    setApproval(null);
    setFormDoc(null);
  }
  const [approval, setApproval] = useState<ApprovalTarget | null>(null);
  const [formDoc, setFormDoc] = useState<WorkflowDocument | null>(null);
  const visibleDocuments = useMemo(() => normalizeWorkflowDocuments(documents), [documents]);

  const approvalDoc = approval ? visibleDocuments.find((item) => item.id === approval.docId) ?? null : null;

  // 依角色決定可執行的簽核階段：主管簽核只給會簽主管、文管審核只給文管審核者。
  const canApproveManager = currentUser.roles.includes("signing_manager");
  const canApproveDocAdmin = currentUser.roles.includes("doc_admin");

  function openApproval(docId: number, stage: ApprovalStage) {
    if (stage === "manager") {
      if (!canApproveManager) {
        toast.error("僅「會簽主管」可執行主管簽核");
        return;
      }
      // 指定主管才可簽：文件若有指定簽核主管，需登入身分（員編）相符
      const doc = documents.find((item) => item.id === docId);
      if (doc?.signingManagerEmpId && currentUser.empId !== doc.signingManagerEmpId) {
        toast.error(`此文件指定由簽核主管（員編 ${doc.signingManagerEmpId}）簽核，您目前登入身分無法簽核`);
        return;
      }
    } else if (!canApproveDocAdmin) {
      toast.error("僅「文管審核者」可執行文管審核");
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

  // 未登入 → 顯示登入頁（所有 hooks 已於上方無條件呼叫）
  if (!account) {
    return (
      <>
        <Toaster position="top-right" richColors closeButton />
        <LoginPage onLogin={handleLogin} />
      </>
    );
  }

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
        userName={account.name}
        roleLabel={account.roleLabel}
        onLogout={handleLogout}
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
          currentUserEmpId={currentUser.empId}
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
