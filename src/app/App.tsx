import { useState } from "react";
import { Header } from "./components/Header";
import { DocumentListPage, OVERVIEW_VIEW, type ViewMode } from "./components/DocumentListPage";
import { DocumentFormPage } from "./components/form/DocumentFormPage";
import { ApprovalDrawer } from "./components/approval/ApprovalDrawer";
import { SigningProgressPage } from "./components/signing/SigningProgressPage";
import { DatabasePage } from "./components/database/DatabasePage";
import { PermissionsPage } from "./components/settings/PermissionsPage";
import { SAMPLE_DOCS, type DocRecord } from "./components/DocumentTable";
import { Toaster, toast } from "sonner";

type Screen = "list" | "form" | "re-edit" | "signing-progress" | "database" | "permissions";

interface ApprovalTarget {
  doc: DocRecord;
  role: "manager" | "docadmin";
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("list");
  const [listView, setListView] = useState<ViewMode>(OVERVIEW_VIEW);
  const [approval, setApproval] = useState<ApprovalTarget | null>(null);
  const [reEditDoc, setReEditDoc] = useState<DocRecord | null>(null);
  const knownScreens = new Set<Screen>(["list", "form", "re-edit", "signing-progress", "database", "permissions"]);

  function openApproval(docId: number, role: "manager" | "docadmin") {
    const doc = SAMPLE_DOCS.find((item) => item.id === docId);
    if (doc) setApproval({ doc, role });
  }

  function openReEdit(doc: DocRecord) {
    const draftDoc = SAMPLE_DOCS.find((item) => item.id === doc.id);
    if (draftDoc) {
      draftDoc.status = "草稿";
    }
    setReEditDoc({ ...doc, status: "草稿" });
    setScreen("re-edit");
    toast.success(`已將「${doc.name}」切換為草稿，開始重新編輯。`);
  }

  const navigateTo = (nextScreen: string) => {
    setScreen(knownScreens.has(nextScreen as Screen) ? (nextScreen as Screen) : "list");
  };
  function goList() {
    setScreen("list");
  }
  function goHome() {
    setListView(OVERVIEW_VIEW);
    setApproval(null);
    setReEditDoc(null);
    setScreen("list");
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-100">
      <Toaster position="top-right" richColors closeButton />
      <Header
        activeScreen={screen === "re-edit" ? "list" : screen}
        onNavigate={navigateTo}
        onLogoClick={goHome}
        onOpenApproval={openApproval}
        onReEdit={(docId) => {
          const doc = SAMPLE_DOCS.find((item) => item.id === docId);
          if (doc) openReEdit(doc);
        }}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        {screen === "list" && (
          <DocumentListPage
            view={listView}
            onViewChange={setListView}
            onAdd={() => setScreen("form")}
            onNavigate={navigateTo}
            onApprove={(doc) =>
              setApproval({
                doc,
                role: doc.status === "待主管審核" ? "manager" : "docadmin",
              })
            }
            onReEdit={openReEdit}
          />
        )}

        {screen === "form" && (
          <div className="flex-1 overflow-y-auto">
            <DocumentFormPage onBack={goList} />
          </div>
        )}

        {screen === "re-edit" && reEditDoc && (
          <div className="flex-1 overflow-y-auto">
            <div className="flex items-center gap-3 border-b border-amber-200 bg-amber-50 px-6 py-2.5">
              <span className="text-sm font-semibold text-amber-700">重新編輯模式</span>
              <span className="text-sm text-amber-600">正在編輯：{reEditDoc.name}</span>
              <span className="ml-auto text-xs text-amber-500">
                已切換為草稿狀態，完成後可再次送出
              </span>
            </div>
            <DocumentFormPage onBack={goList} />
          </div>
        )}

        {screen === "signing-progress" && (
          <div className="flex-1 overflow-hidden">
            <SigningProgressPage onBack={goHome} />
          </div>
        )}

        {screen === "database" && (
          <div className="flex-1 overflow-hidden">
            <DatabasePage onBack={goHome} />
          </div>
        )}

        {screen === "permissions" && (
          <div className="flex flex-1 overflow-hidden">
            <PermissionsPage onBack={goHome} />
          </div>
        )}
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
