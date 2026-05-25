import { ArrowLeft, FileText, Bell, User } from "lucide-react";
import { BasicInfoCard } from "./BasicInfoCard";
import { ClassificationCard } from "./ClassificationCard";
import { DepartmentCard } from "./DepartmentCard";
import { FileUploadCard } from "./FileUploadCard";

interface DocumentFormPageProps {
  onBack: () => void;
}

export function DocumentFormPage({ onBack }: DocumentFormPageProps) {
  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: "#F3F4F6" }}>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors text-sm group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              返回文件管理
            </button>
            <div className="w-px h-5 bg-gray-200" />
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
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
            <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-all">
              <Bell size={18} />
            </button>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold ml-1"
              style={{ backgroundColor: "#0D9488" }}
            >
              管
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb + page title */}
      <div className="max-w-screen-xl mx-auto px-6 pt-6 pb-4">
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
          <span>首頁</span>
          <span>/</span>
          <button onClick={onBack} className="hover:underline" style={{ color: "#0D9488" }}>文件管理</button>
          <span>/</span>
          <span className="text-gray-600">新增文件</span>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-gray-800" style={{ fontSize: "20px", fontWeight: 700 }}>新增文件</h2>
            <p className="text-gray-500 text-sm mt-0.5">請依序填寫以下資料，完成後點選「送出簽核」</p>
          </div>
          {/* Step indicator */}
          <div className="hidden md:flex items-center gap-2">
            {[
              { n: 1, label: "基本資料" },
              { n: 2, label: "分類設定" },
              { n: 3, label: "簽核部門" },
              { n: 4, label: "附件上傳" },
            ].map(({ n, label }, i, arr) => (
              <div key={n} className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white flex-shrink-0"
                    style={{ fontSize: "11px", fontWeight: 700, backgroundColor: "#0D9488" }}
                  >
                    {n}
                  </div>
                  <span className="text-xs text-gray-600" style={{ fontWeight: 500 }}>{label}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="w-6 h-px bg-gray-300 mx-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form cards */}
      <div className="max-w-screen-xl mx-auto px-6 space-y-5">
        <BasicInfoCard />
        <ClassificationCard />
        <DepartmentCard />
        <FileUploadCard />
      </div>

      {/* Sticky footer action bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left: hint */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            填寫中 — 尚未儲存
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-3 ml-auto">
            {/* 返回 */}
            <button
              onClick={onBack}
              className="px-5 py-2 rounded-lg text-sm text-gray-600 border border-gray-200 hover:bg-gray-50 transition-all"
              style={{ fontWeight: 500 }}
            >
              返回
            </button>

            {/* 暫存草稿 */}
            <button
              className="px-5 py-2 rounded-lg text-sm border transition-all hover:bg-teal-50"
              style={{ borderColor: "#0D9488", color: "#0D9488", fontWeight: 500 }}
            >
              暫存草稿
            </button>

            {/* 送出簽核 */}
            <button
              className="flex items-center gap-2 px-6 py-2 rounded-lg text-white text-sm transition-all hover:opacity-90 active:scale-95 shadow-sm"
              style={{ backgroundColor: "#0D9488", fontWeight: 600 }}
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
