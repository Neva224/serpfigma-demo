import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, Bell, FileText } from "lucide-react";
import { toast } from "sonner";
import { BasicInfoCard, type BasicInfoValue } from "./BasicInfoCard";
import {
  ClassificationCard,
  buildCategoryPayload,
  type ClassificationSelection,
} from "./ClassificationCard";
import { DepartmentCard, type DepartmentSelection } from "./DepartmentCard";
import { FileUploadCard } from "./FileUploadCard";
import { ConfirmDialog } from "../ui/ConfirmDialog";
import type { DocumentLevel } from "../document-management/mockData";
import type { WorkflowAttachment, WorkflowDocument } from "../../workflow/workflowState";

export interface DocumentFormSubmitPayload {
  title: string;
  ownerName: string;
  validFrom: string;
  validTo: string;
  summary: string;
  tags: string[];
  categoryId: string;
  categoryCode: string;
  categoryPath: string[];
  ownershipDepartmentPath: string[];
  attachments: WorkflowAttachment[];
  level: DocumentLevel;
}

interface DocumentFormPageProps {
  onBack: () => void;
  embedded?: boolean;
  showBackButton?: boolean;
  editingDoc?: WorkflowDocument | null;
  onSubmit?: (payload: DocumentFormSubmitPayload) => void;
  onSaveDraft?: (payload: DocumentFormSubmitPayload) => void | Promise<void>;
}

function splitPath(value?: string) {
  return value ? value.split(" / ").map((segment) => segment.trim()).filter(Boolean) : [];
}

export function DocumentFormPage({
  onBack,
  embedded = false,
  showBackButton,
  editingDoc = null,
  onSubmit,
  onSaveDraft,
}: DocumentFormPageProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [classification, setClassification] = useState<ClassificationSelection>({
    l1: "",
    l2: "",
    l3: "",
    l4: "",
  });
  const [department, setDepartment] = useState<DepartmentSelection>({
    companyName: "",
    groupName: "",
    divisionName: "",
    departmentName: "",
  });
  const [attachments, setAttachments] = useState<WorkflowAttachment[]>([]);
  const [submitConfirmOpen, setSubmitConfirmOpen] = useState(false);
  const [submitBusy, setSubmitBusy] = useState(false);
  const [pendingSubmit, setPendingSubmit] = useState<DocumentFormSubmitPayload | null>(null);
  const [backConfirmOpen, setBackConfirmOpen] = useState(false);
  const [draftBusy, setDraftBusy] = useState(false);

  useEffect(() => {
    if (!editingDoc) {
      setClassification({ l1: "", l2: "", l3: "", l4: "" });
      setDepartment({ companyName: "", groupName: "", divisionName: "", departmentName: "" });
      setAttachments([]);
      setPendingSubmit(null);
      setSubmitConfirmOpen(false);
      setSubmitBusy(false);
      setBackConfirmOpen(false);
      setDraftBusy(false);
      return;
    }

    const categoryPath = editingDoc.categoryPath ?? editingDoc.knowledgePath ?? [];
    setClassification({
      l1: categoryPath[0] ?? "",
      l2: categoryPath[1] ?? "",
      l3: categoryPath[2] ?? "",
      l4: categoryPath[3] ?? "",
    });

    const path = splitPath(editingDoc.department);
    setDepartment({
      companyName: path[0] ?? "",
      groupName: path[1] ?? "",
      divisionName: path[2] ?? "",
      departmentName: path[3] ?? "",
    });
    setAttachments(editingDoc.attachments ? [...editingDoc.attachments] : []);
    setPendingSubmit(null);
    setSubmitConfirmOpen(false);
    setSubmitBusy(false);
    setBackConfirmOpen(false);
    setDraftBusy(false);
  }, [editingDoc]);

  const categoryPayload = buildCategoryPayload(classification);
  const canShowBackButton = showBackButton ?? false;
  const showStandaloneHeader = !embedded;
  const workflowNotice = useMemo(() => {
    if (!editingDoc) return null;

    const history = [...(editingDoc.history ?? [])].reverse();
    const rejectEntry = history.find((entry) => entry.statusTo === "退回");
    const transferEntry = history.find((entry) => entry.action === "移轉單位");
    const entry = rejectEntry ?? transferEntry;
    if (!entry) return null;

    const isTransfer = entry.action === "移轉單位";
    const reason = entry.reason?.trim() || entry.comment?.trim() || "未提供";
    const pathLabel = isTransfer
      ? [
          entry.categoryPathAfter?.length ? `分類：${entry.categoryPathAfter.join(" / ")}` : "",
          entry.ownershipDepartmentPathAfter?.length ? `部門：${entry.ownershipDepartmentPathAfter.join(" / ")}` : "",
        ]
          .filter(Boolean)
          .join(" ｜ ")
      : "";

    return {
      tone: isTransfer ? "transfer" : "reject",
      title: isTransfer ? "被移轉提醒" : "被退回提醒",
      reasonLabel: isTransfer ? "被移轉原因" : "被退回原因",
      reason,
      pathLabel,
    };
  }, [editingDoc]);
  const initialBasicInfo: BasicInfoValue = useMemo(
    () => ({
      title: editingDoc?.name ?? "",
      ownerName: editingDoc?.requestor ?? editingDoc?.ownerName ?? editingDoc?.uploaderName ?? "",
      validFrom: editingDoc?.validFrom ?? "",
      validTo: editingDoc?.validTo ?? "",
      summary: editingDoc?.summary ?? editingDoc?.subject ?? "",
      tags: editingDoc?.tags ?? [],
    }),
    [editingDoc],
  );

  function handleSaveDraft() {
    const payload = buildDraftPayload();
    if (!payload || draftBusy) return;
    setDraftBusy(true);
    Promise.resolve()
      .then(() => onSaveDraft?.(payload))
      .then(() => {
        if (!onSaveDraft) {
          toast.success(editingDoc ? `已儲存草稿：${editingDoc.name}` : "已儲存草稿");
        }
      })
      .finally(() => {
        setDraftBusy(false);
      });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = buildSubmitPayload();
    if (!payload) return;
    setPendingSubmit(payload);
    setSubmitConfirmOpen(true);
  }

  function buildSubmitPayload() {
    const form = formRef.current;
    if (!form) return null;

    const formData = new FormData(form);
    const title = String(formData.get("title") ?? "").trim();
    const ownerName = String(formData.get("ownerName") ?? "").trim();
    const validFrom = String(formData.get("validFrom") ?? "").trim();
    const validTo = String(formData.get("validTo") ?? "").trim();
    const summary = String(formData.get("summary") ?? "").trim();
    const tags = String(formData.get("tags") ?? "")
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
    const categoryId = String(formData.get("categoryId") ?? "").trim();
    const categoryCode = String(formData.get("categoryCode") ?? "").trim();
    const categoryPath = String(formData.get("categoryPath") ?? "")
      .split(" / ")
      .map((segment) => segment.trim())
      .filter(Boolean);
    const level = String(formData.get("documentLevel") ?? "") as DocumentLevel;
    const ownershipDepartmentPath = [
      department.companyName,
      department.groupName,
      department.divisionName,
      department.departmentName,
    ].filter(Boolean) as string[];

    if (!title || !ownerName || !categoryId || !level || ownershipDepartmentPath.length === 0) {
      toast.error("請先完成必填欄位再送出");
      return null;
    }

    return {
      title,
      ownerName,
      validFrom,
      validTo,
      summary,
      tags,
      categoryId,
      categoryCode,
      categoryPath,
      ownershipDepartmentPath,
      attachments,
      level,
    } satisfies DocumentFormSubmitPayload;
  }

  function buildDraftPayload() {
    const form = formRef.current;
    if (!form) return null;

    const formData = new FormData(form);
    const title = String(formData.get("title") ?? "").trim();
    const ownerName = String(formData.get("ownerName") ?? "").trim();
    const validFrom = String(formData.get("validFrom") ?? "").trim();
    const validTo = String(formData.get("validTo") ?? "").trim();
    const summary = String(formData.get("summary") ?? "").trim();
    const tags = String(formData.get("tags") ?? "")
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
    const categoryId = String(formData.get("categoryId") ?? "").trim();
    const categoryCode = String(formData.get("categoryCode") ?? "").trim();
    const categoryPath = String(formData.get("categoryPath") ?? "")
      .split(" / ")
      .map((segment) => segment.trim())
      .filter(Boolean);
    const level = (String(formData.get("documentLevel") ?? "") || editingDoc?.level || "level1") as DocumentLevel;
    const ownershipDepartmentPath = [
      department.companyName,
      department.groupName,
      department.divisionName,
      department.departmentName,
    ].filter(Boolean) as string[];

    return {
      title: title || editingDoc?.name || "未命名草稿",
      ownerName: ownerName || editingDoc?.requestor || editingDoc?.uploaderName || "未填負責人",
      validFrom,
      validTo,
      summary,
      tags,
      categoryId,
      categoryCode,
      categoryPath,
      ownershipDepartmentPath,
      attachments,
      level,
    } satisfies DocumentFormSubmitPayload;
  }

  async function confirmSubmit() {
    if (!pendingSubmit || submitBusy) return;
    setSubmitBusy(true);
    try {
      await Promise.resolve(onSubmit?.(pendingSubmit));
      toast.success(editingDoc ? "文件已更新並送出審核" : "文件已送出審核");
      setSubmitConfirmOpen(false);
      setPendingSubmit(null);
      onBack();
    } finally {
      setSubmitBusy(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={embedded ? "pb-8" : "min-h-screen pb-8"}
      style={{ backgroundColor: "#F3F4F6" }}
    >
      {showStandaloneHeader && (
        <header className="sticky top-0 z-20 border-b border-gray-100 bg-white shadow-sm">
          <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6">
            <div className="flex items-center gap-4">
              {canShowBackButton ? (
                <button
                  type="button"
                  onClick={() => setBackConfirmOpen(true)}
                  className="group flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-800"
                >
                  <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
                  返回
                </button>
              ) : null}
              <div className="h-5 w-px bg-gray-200" />
              <div className="flex items-center gap-2">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  <FileText size={14} className="text-white" />
                </div>
                <h1 className="text-gray-800" style={{ fontSize: "15px", fontWeight: 700 }}>
                  文件上傳專區
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-all hover:bg-gray-50 hover:text-gray-600"
              >
                <Bell size={18} />
              </button>
              <div
                className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                系統
              </div>
            </div>
          </div>
        </header>
      )}

      <div className={`mx-auto max-w-screen-xl px-6 ${embedded ? "pt-4 pb-4" : "pt-6 pb-4"}`}>
        {workflowNotice && (
          <div
            className={`mb-4 rounded-2xl border px-4 py-3 ${
              workflowNotice.tone === "transfer"
                ? "border-cyan-200 bg-cyan-50"
                : "border-amber-200 bg-amber-50"
            }`}
          >
            <div className="flex flex-wrap items-start gap-2">
              <span
                className={`text-sm font-semibold ${
                  workflowNotice.tone === "transfer" ? "text-cyan-700" : "text-amber-700"
                }`}
              >
                {workflowNotice.title}
              </span>
              <span className="text-sm text-slate-700">
                {workflowNotice.reasonLabel}：{workflowNotice.reason}
              </span>
              {workflowNotice.pathLabel && <span className="text-sm text-slate-600">{workflowNotice.pathLabel}</span>}
            </div>
          </div>
        )}

        {editingDoc && (
          <div className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-amber-700">編修模式</span>
              <span className="text-sm text-amber-600">目前文件：{editingDoc.name}</span>
              <span className="ml-auto text-xs text-amber-500">送出後會沿用原文件編號與簽核號</span>
            </div>
          </div>
        )}

        <div className="mb-5 overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-teal-50 to-white px-5 py-5 shadow-[0_12px_40px_rgba(13,148,136,0.08)]">
          <div className="mb-2 flex items-center gap-1.5 text-xs text-gray-500">
            <span>首頁</span>
            <span>/</span>
            {canShowBackButton ? (
              <button type="button" onClick={onBack} className="hover:underline" style={{ color: "var(--color-primary)" }}>
                文件上傳專區
              </button>
            ) : (
              <span className="text-gray-600">文件上傳專區</span>
            )}
            <span>/</span>
            <span className="text-gray-600">送出簽核</span>
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-gray-800" style={{ fontSize: "20px", fontWeight: 700 }}>
                文件上傳專區
              </h2>
              <p className="mt-0.5 text-sm text-gray-500">建立新文件、選擇分類與所屬部門後送出簽核</p>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              {[
                { n: 1, label: "基本資料" },
                { n: 2, label: "文件階級" },
                { n: 3, label: "所屬部門" },
                { n: 4, label: "送出簽核" },
              ].map(({ n, label }, i, arr) => (
                <div key={n} className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white"
                      style={{ fontSize: "11px", fontWeight: 700, backgroundColor: "var(--color-primary)" }}
                    >
                      {n}
                    </div>
                    <span className="text-xs text-gray-600" style={{ fontWeight: 500 }}>
                      {label}
                    </span>
                  </div>
                  {i < arr.length - 1 && <div className="mx-1 h-px w-6 bg-gray-300" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl space-y-5 px-0">
          <BasicInfoCard key={editingDoc?.id ?? "new"} initialValue={initialBasicInfo} />
          <ClassificationCard key={`classification-${editingDoc?.id ?? "new"}`} value={classification} onChange={setClassification} initialLevel={editingDoc?.level} />
          <DepartmentCard value={department} onChange={setDepartment} />
          <FileUploadCard files={attachments} onFilesChange={setAttachments} />
        </div>

        <div className="mx-auto max-w-screen-xl px-0 pt-5">
          <div className="rounded-2xl border border-teal-100 bg-teal-50/80 px-5 py-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">分類預覽</p>
                <h3 className="mt-1 text-sm font-semibold text-slate-800">分類結果</h3>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-teal-700 shadow-sm">
                分類代碼 {categoryPayload.categoryCode || "尚未選擇"}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              {categoryPayload.categoryPath.length > 0
                ? categoryPayload.categoryPath.join(" / ")
                : "請先選擇知識樹分類"}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-teal-50 to-white shadow-sm">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
          <div className="hidden items-center gap-2 text-xs text-gray-400 sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
            完成分類與部門選擇後，即可儲存草稿或送出簽核
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button
              type="button"
              onClick={() => setBackConfirmOpen(true)}
              className="rounded-lg border border-gray-200 px-5 py-2 text-sm text-gray-600 transition-all hover:bg-gray-50"
              style={{ fontWeight: 500 }}
            >
              返回
            </button>

            <button
              type="button"
              className="rounded-lg border px-5 py-2 text-sm transition-all hover:bg-teal-50"
              style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)", fontWeight: 500 }}
              onClick={handleSaveDraft}
              disabled={draftBusy}
            >
              儲存草稿
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg px-6 py-2 text-sm text-white shadow-sm transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "var(--color-primary)", fontWeight: 600 }}
            >
              <FileText size={14} />
              送出簽核
            </button>
          </div>
        </div>
      </div>

      <ConfirmDialog
        open={submitConfirmOpen}
        title="送出審核確認"
        description="請確認是否送出審核？送出後將進入簽核流程。"
        confirmLabel="確認送出"
        onConfirm={confirmSubmit}
        onCancel={() => {
          if (submitBusy) return;
          setSubmitConfirmOpen(false);
          setPendingSubmit(null);
        }}
        loading={submitBusy}
      />

      <ConfirmDialog
        open={backConfirmOpen}
        title="返回確認"
        description="請確認是否返回？若尚未儲存，離開後目前編輯內容可能不會保留。"
        warningText="離開前請確認是否已完成儲存草稿或送出簽核。"
        confirmLabel="確認返回"
        cancelLabel="取消"
        onConfirm={() => {
          setBackConfirmOpen(false);
          onBack();
        }}
        onCancel={() => setBackConfirmOpen(false)}
      />
    </form>
  );
}
