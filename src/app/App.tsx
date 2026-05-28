import { useMemo, useState } from "react";
import { Toaster, toast } from "sonner";
import { Header } from "./components/Header";
import { DocumentListPage, OVERVIEW_VIEW, type ViewMode } from "./components/DocumentListPage";
import { ApprovalDrawer } from "./components/approval/ApprovalDrawer";
import {
  applyWorkflowDecision,
  applyWorkflowTransfer,
  createDemoUser,
  markNotificationRead,
  submitDocument,
  type ApprovalStage,
  type WorkflowDocument,
  type WorkflowNotification,
  type WorkflowUser,
} from "./workflow/workflowState";
import type { DocumentFormSubmitPayload } from "./components/form/DocumentFormPage";

const INITIAL_DOCUMENTS: WorkflowDocument[] = [];
const INITIAL_NOTIFICATIONS: WorkflowNotification[] = [];

interface ApprovalTarget {
  docId: number;
  stage: ApprovalStage;
}

export default function App() {
  const demoMode = true;
  const currentUser = useMemo<WorkflowUser>(() => createDemoUser(demoMode), [demoMode]);
  const [view, setView] = useState<ViewMode>(OVERVIEW_VIEW);
  const [documents, setDocuments] = useState<WorkflowDocument[]>(() => INITIAL_DOCUMENTS);
  const [notifications, setNotifications] = useState<WorkflowNotification[]>(() => INITIAL_NOTIFICATIONS);
  const [notificationPulse, setNotificationPulse] = useState(0);
  const [approval, setApproval] = useState<ApprovalTarget | null>(null);
  const [formDoc, setFormDoc] = useState<WorkflowDocument | null>(null);

  const approvalDoc = approval ? documents.find((item) => item.id === approval.docId) ?? null : null;

  function openApproval(docId: number, stage: ApprovalStage) {
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
      const doc = documents.find((item) => item.id === notification.docId);
      if (doc) openReEdit(doc);
      return;
    }

    if (notification.type === "published" || notification.type === "voided") {
      setView(OVERVIEW_VIEW);
    }
  }

  function handleFormSubmit(payload: DocumentFormSubmitPayload) {
    const result = submitDocument(documents, notifications, currentUser, {
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
    setNotifications((current) => [...current, result.notification]);
    setNotificationPulse((current) => current + 1);
    setFormDoc(null);
    setView(OVERVIEW_VIEW);
    toast.success(formDoc ? "文件已更新並送出簽核" : "文件已送出簽核");
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
    } else if (result.document.status === "待新主管簽核") {
      toast.success("文件已移轉，等待新主管簽核");
    } else {
      toast.success("簽核處理完成");
    }
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-100">
      <Toaster position="top-right" richColors closeButton />
      <Header
        activeScreen={view.kind === "systemAdmin" ? "permissions" : "list"}
        onNavigate={navigateTo}
        onLogoClick={goHome}
        notifications={notifications}
        onNotificationClick={handleNotificationClick}
        notificationPulse={notificationPulse}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <DocumentListPage
          documents={documents}
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
