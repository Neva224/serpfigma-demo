import { useState } from "react";
import { Header } from "./components/Header";
import { DocumentListPage } from "./components/DocumentListPage";
import { DocumentFormPage } from "./components/form/DocumentFormPage";
import { ApprovalDrawer } from "./components/approval/ApprovalDrawer";
import { SigningProgressPage } from "./components/signing/SigningProgressPage";
import { DatabasePage } from "./components/database/DatabasePage";
import { PermissionsPage } from "./components/settings/PermissionsPage";
import { SAMPLE_DOCS, DocRecord } from "./components/DocumentTable";

type Screen = "list" | "form" | "re-edit" | "signing-progress" | "database" | "permissions";

interface ApprovalTarget {
  doc: DocRecord;
  role: "manager" | "docadmin";
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("list");
  const [approval, setApproval] = useState<ApprovalTarget | null>(null);
  const [reEditDoc, setReEditDoc] = useState<DocRecord | null>(null);

  function openApproval(docId: number, role: "manager" | "docadmin") {
    const doc = SAMPLE_DOCS.find((d) => d.id === docId);
    if (doc) setApproval({ doc, role });
  }

  function openReEdit(doc: DocRecord) {
    setReEditDoc(doc);
    setScreen("re-edit");
  }

  const navigateTo = (s: string) => setScreen(s as Screen);

  return (
    <div className="flex flex-col h-screen overflow-hidden" style={{ backgroundColor: "#F3F4F6" }}>
      {/* Global header */}
      <Header
        activeScreen={screen === "re-edit" ? "list" : screen}
        onNavigate={navigateTo}
        onOpenApproval={openApproval}
        onReEdit={(docId) => {
          const doc = SAMPLE_DOCS.find((d) => d.id === docId);
          if (doc) openReEdit(doc);
        }}
      />

      {/* Main content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {screen === "list" && (
          <DocumentListPage
            onAdd={() => setScreen("form")}
            onApprove={(doc) => setApproval({ doc, role: doc.status === "待主管審核" ? "manager" : "docadmin" })}
            onReEdit={openReEdit}
          />
        )}

        {screen === "form" && (
          <div className="flex-1 overflow-y-auto">
            <DocumentFormPage onBack={() => setScreen("list")} />
          </div>
        )}

        {screen === "re-edit" && reEditDoc && (
          <div className="flex-1 overflow-y-auto">
            <div className="bg-amber-50 border-b border-amber-200 px-6 py-2.5 flex items-center gap-3">
              <span className="text-amber-600 font-semibold text-sm">重新編輯模式</span>
              <span className="text-amber-500 text-sm">— 正在修改：{reEditDoc.name}</span>
              <span className="text-amber-400 text-xs ml-auto">退回原因已附於文件中，請修改後重新送審</span>
            </div>
            <DocumentFormPage onBack={() => setScreen("list")} />
          </div>
        )}

        {screen === "signing-progress" && (
          <div className="flex-1 overflow-hidden flex">
            <SigningProgressPage />
          </div>
        )}

        {screen === "database" && (
          <div className="flex-1 overflow-hidden flex">
            <DatabasePage />
          </div>
        )}

        {screen === "permissions" && (
          <div className="flex-1 overflow-hidden flex">
            <PermissionsPage />
          </div>
        )}
      </div>

      {/* Approval drawer (global overlay) */}
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
