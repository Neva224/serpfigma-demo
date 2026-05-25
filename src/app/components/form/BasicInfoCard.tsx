import { useState } from "react";
import { User, CalendarDays, Tag, AlignLeft } from "lucide-react";

export function BasicInfoCard() {
  const [name, setName] = useState("");
  const MAX = 30;

  return (
    <Card title="文件基本資料" icon="📄">
      <div className="space-y-5">
        {/* 文件名稱 */}
        <Field label="文件名稱" required>
          <div className="relative">
            <input
              type="text"
              maxLength={MAX}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="請輸入文件名稱"
              className="w-full px-4 py-2.5 pr-16 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">
              {name.length}/{MAX}
            </span>
          </div>
        </Field>

        {/* 文件擁有者 */}
        <Field label="文件擁有者" required>
          <div className="relative">
            <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="請輸入姓名或員工編號搜尋"
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
            />
          </div>
        </Field>

        {/* 有效區間 */}
        <Field label="有效區間" required>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <CalendarDays size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="date"
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
              />
            </div>
            <div className="relative">
              <CalendarDays size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="date"
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
              />
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
            <CalendarDays size={11} />
            請選擇文件生效的起始與截止日期
          </p>
        </Field>

        {/* 摘要 */}
        <Field label="摘要">
          <div className="relative">
            <AlignLeft size={14} className="absolute left-3.5 top-3 text-gray-400 pointer-events-none" />
            <textarea
              rows={3}
              placeholder="請輸入文件摘要說明（選填）"
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-all resize-none"
            />
          </div>
        </Field>

        {/* 標籤 */}
        <Field label="標籤">
          <div className="relative">
            <Tag size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="輸入標籤後按 Enter 新增，例如：財務、年度報告"
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {["財務", "年度報告", "2024"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium"
                style={{ backgroundColor: "#0D948818", color: "#0D9488" }}
              >
                {tag}
                <button className="hover:text-red-400 transition-colors leading-none">×</button>
              </span>
            ))}
          </div>
        </Field>
      </div>
    </Card>
  );
}

export function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
        {icon && <span className="text-lg leading-none">{icon}</span>}
        <h2 className="text-gray-800" style={{ fontSize: "15px", fontWeight: 700 }}>
          {title}
        </h2>
        <div className="flex-1 h-px bg-gray-100 ml-2" />
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}

export function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-0.5 text-sm text-gray-600 mb-1.5" style={{ fontWeight: 600 }}>
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
