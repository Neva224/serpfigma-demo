import { useState } from "react";
import { ArrowLeft, Bell, FileText } from "lucide-react";
import { toast } from "sonner";
import { BasicInfoCard } from "./BasicInfoCard";
import {
  ClassificationCard,
  buildCategoryPayload,
  type ClassificationSelection,
} from "./ClassificationCard";
import { DepartmentCard } from "./DepartmentCard";
import { FileUploadCard } from "./FileUploadCard";

interface DocumentFormPageProps {
  onBack: () => void;
}

export function DocumentFormPage({ onBack }: DocumentFormPageProps) {
  const [classification, setClassification] = useState<ClassificationSelection>({
    l1: "",
    l2: "",
    l3: "",
    l4: "",
  });

  const categoryPayload = buildCategoryPayload(classification);

  function handleSaveDraft() {
    toast.success(
      categoryPayload.categoryId
        ? `草稿已保存，分類已寫入：${categoryPayload.categoryId}`
        : "草稿已保存，但尚未選擇分類",
    );
  }

  function handleSubmit() {
    toast.success(
      categoryPayload.categoryId
        ? `已送出簽核，分類：${categoryPayload.categoryId}`
        : "已送出簽核，請先補齊分類資訊",
    );
  }

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: "#F3F4F6" }}>
      <header className="sticky top-0 z-20 border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="group flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-800"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
              返回文件管理
            </button>
            <div className="h-5 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <div
                className="flex h-7 w-7 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#0D9488" }}
              >
                <FileText size={14} className="text-white" />
              </div>
              <h1 className="text-gray-800" style={{ fontSize: "15px", fontWeight: 700 }}>
                新增文件
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-all hover:bg-gray-50 hover:text-gray-600">
              <Bell size={18} />
            </button>
            <div
              className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-white text-xs font-semibold"
              style={{ backgroundColor: "#0D9488" }}
            >
              管
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-screen-xl px-6 pt-6 pb-4">
        <div className="mb-2 flex items-center gap-1.5 text-xs text-gray-400">
          <span>首頁</span>
          <span>/</span>
          <button onClick={onBack} className="hover:underline" style={{ color: "#0D9488" }}>
            文件管理
          </button>
          <span>/</span>
          <span className="text-gray-600">新增文件</span>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-gray-800" style={{ fontSize: "20px", fontWeight: 700 }}>
              新增文件
            </h2>
            <p className="mt-0.5 text-sm text-gray-500">
              填寫文件基本資料、分類歸屬與附件，送出後會帶入 categoryId / categoryPath。
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {[
              { n: 1, label: "填寫基本資料" },
              { n: 2, label: "選擇分類" },
              { n: 3, label: "上傳附件" },
              { n: 4, label: "送出簽核" },
            ].map(({ n, label }, i, arr) => (
              <div key={n} className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div
                    className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white"
                    style={{ fontSize: "11px", fontWeight: 700, backgroundColor: "#0D9488" }}
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

      <div className="mx-auto max-w-screen-xl space-y-5 px-6">
        <BasicInfoCard />
        <ClassificationCard value={classification} onChange={setClassification} />
        <DepartmentCard />
        <FileUploadCard />
      </div>

      <div className="mx-auto max-w-screen-xl px-6 pt-5">
        <div className="rounded-2xl border border-teal-100 bg-teal-50/80 px-5 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                建立流程歸屬
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-800">
                目前文件分類會一起寫入 payload
              </h3>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-teal-700 shadow-sm">
              categoryId {categoryPayload.categoryId || "尚未選擇"}
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-600">
            {categoryPayload.categoryPath.length > 0
              ? categoryPayload.categoryPath.join(" / ")
              : "請先在文件分類卡片中完成歸屬選擇。"}
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-gray-200 bg-white shadow-lg">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
          <div className="hidden items-center gap-2 text-xs text-gray-400 sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
            儲存草稿前會保留目前選擇的分類歸屬
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button
              onClick={onBack}
              className="rounded-lg border border-gray-200 px-5 py-2 text-sm text-gray-600 transition-all hover:bg-gray-50"
              style={{ fontWeight: 500 }}
            >
              返回
            </button>

            <button
              className="rounded-lg border px-5 py-2 text-sm transition-all hover:bg-teal-50"
              style={{ borderColor: "#0D9488", color: "#0D9488", fontWeight: 500 }}
              onClick={handleSaveDraft}
            >
              儲存草稿
            </button>

            <button
              className="flex items-center gap-2 rounded-lg px-6 py-2 text-sm text-white shadow-sm transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#0D9488", fontWeight: 600 }}
              onClick={handleSubmit}
            >
              <FileText size={14} />
              送出簽核
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
