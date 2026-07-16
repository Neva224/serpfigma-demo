import { useEffect, useMemo, useState } from "react";
import { Toaster, toast } from "sonner";
import { Header } from "./components/Header";
import { LoginPage } from "./components/LoginPage";
import { DocumentListPage, OVERVIEW_VIEW, type ViewMode } from "./components/DocumentListPage";
import { ApprovalDrawer } from "./components/approval/ApprovalDrawer";
import {
  applyWorkflowDecision,
  applyWorkflowTransfer,
  buildExpiryWarningNotifications,
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
import { rehydrateAttachmentUrl } from "./data/attachmentStore";
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

  // 附件的 downloadUrl 是 blob: 網址，只在建立當次的分頁存活期間有效；重新整理或
  // 關閉分頁後會失效。載入時用 IndexedDB 裡實際存的檔案內容重新產生一次，
  // 這樣附件才不會「看得到檔名、點下去卻打不開」。
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const rehydrated = await Promise.all(
        documents.map(async (doc) => {
          if (!doc.attachments || doc.attachments.length === 0) return doc;
          const attachments = await Promise.all(
            doc.attachments.map(async (attachment) => {
              const freshUrl = await rehydrateAttachmentUrl(attachment.id);
              return freshUrl ? { ...attachment, downloadUrl: freshUrl } : attachment;
            }),
          );
          return { ...doc, attachments };
        }),
      );
      if (!cancelled) setDocuments(rehydrated);
    })();
    return () => {
      cancelled = true;
    };
    // 只需要在應用程式啟動、載入完初始資料時做一次；之後的附件異動已經是活的 blob 網址。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // 文件到期前 7 天主動提醒一次（見 buildExpiryWarningNotifications），
  // 不用等使用者自己想到要去篩選「含過期」才發現。
  useEffect(() => {
    const additions = buildExpiryWarningNotifications(visibleDocuments, notifications);
    if (additions.length > 0) {
      setNotifications((current) => [...current, ...additions]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleDocuments]);

  const approvalDoc = approval ? visibleDocuments.find((item) => item.id === approval.docId) ?? null : null;

  // 角色權限：
  // 系統管理員＝全部審核＋文件異動；會簽主管＝僅主管審核；文管審核者＝僅文管審核；
  // 一般上傳者＝無審核（上傳/查詢/追蹤不受限，各角色皆可）。
  const isSystemAdmin = currentUser.roles.includes("system_admin");
  const canApproveManager = currentUser.roles.includes("signing_manager") || isSystemAdmin;
  const canApproveDocAdmin = currentUser.roles.includes("doc_admin") || isSystemAdmin;

  function openApproval(docId: number, stage: ApprovalStage) {
    if (stage === "manager") {
      if (!canApproveManager) {
        toast.error("僅「會簽主管」可執行主管簽核");
        return;
      }
      // 指定主管才可簽：文件若有指定簽核主管，需登入身分（員編）相符；系統管理員可覆核。
      const doc = documents.find((item) => item.id === docId);
      if (!isSystemAdmin && doc?.signingManagerEmpId && currentUser.empId !== doc.signingManagerEmpId) {
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

    if (
      notification.type === "published" ||
      notification.type === "voided" ||
      notification.type === "expiring_soon"
    ) {
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

  // 已上架文件的異動（作廢/還原/刪除）僅系統管理員（後台直接操作）。
  const canVoidPublishedDocs = isSystemAdmin;
  const canDeletePublishedDocs = isSystemAdmin;

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
          managerIdentityBypass={isSystemAdmin}
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
