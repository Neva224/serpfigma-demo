import { useState } from "react";
import { Header } from "./components/Header";
import { DocumentListPage, OVERVIEW_VIEW, type ViewMode } from "./components/DocumentListPage";
import { ApprovalDrawer } from "./components/approval/ApprovalDrawer";
import { SAMPLE_DOCS, type DocRecord } from "./components/DocumentTable";
import { Toaster, toast } from "sonner";

interface ApprovalTarget {
  doc: DocRecord;
  role: "manager" | "docadmin";
}

export default function App() {
  const [view, setView] = useState<ViewMode>(OVERVIEW_VIEW);
  const [approval, setApproval] = useState<ApprovalTarget | null>(null);
  const [formDoc, setFormDoc] = useState<DocRecord | null>(null);

  function openApproval(docId: number, role: "manager" | "docadmin") {
    const doc = SAMPLE_DOCS.find((item) => item.id === docId);
    if (doc) setApproval({ doc, role });
  }

  function openReEdit(doc: DocRecord) {
    const draftDoc = SAMPLE_DOCS.find((item) => item.id === doc.id);
    if (draftDoc) {
      draftDoc.status = "退回";
    }
    setFormDoc({ ...doc, status: "退回" });
    setView({ kind: "documentUpload" });
    toast.success(`已將「${doc.name}」切換為退回狀態，開始重新編輯。`);
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

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-100">
      <Toaster position="top-right" richColors closeButton />
      <Header
        activeScreen={view.kind === "systemAdmin" ? "permissions" : "list"}
        onNavigate={navigateTo}
        onLogoClick={goHome}
        onOpenApproval={openApproval}
        onReEdit={(docId) => {
          const doc = SAMPLE_DOCS.find((item) => item.id === docId);
          if (doc) openReEdit(doc);
        }}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <DocumentListPage
          view={view}
          formDoc={formDoc}
          onViewChange={setView}
          onAdd={() => {
            setFormDoc(null);
            setView({ kind: "documentUpload" });
          }}
          onApprove={(doc) =>
            setApproval({
              doc,
              role: doc.status === "待主管簽核" ? "manager" : "docadmin",
            })
          }
          onReEdit={openReEdit}
        />
      </div>

      {approval && (
        <ApprovalDrawer
          doc={approval.doc}
          role={approval.role}
          onClose={() => setApproval(null)}
          onApprove={() => setApproval(null)}
          onReject={() => setApproval(null)}
        />
      )}
    </div>
  );
}
