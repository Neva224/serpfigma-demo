import { useState } from "react";
import { X, Search } from "lucide-react";

const EMPLOYEES = [
  { code: "250341", name: "王大明", nameEn: "David Wang", company: "雄獅集團", dept: "技術事業群" },
  { code: "250342", name: "李小華", nameEn: "Alice Lee",  company: "雄獅集團", dept: "軟體開發處" },
  { code: "250343", name: "陳美玲", nameEn: "Mei Chen",   company: "雄獅集團", dept: "人力資源處" },
  { code: "250344", name: "張志遠", nameEn: "Jimmy Chang", company: "雄獅集團", dept: "行銷策略處" },
  { code: "250345", name: "林建宏", nameEn: "Ken Lin",    company: "雄獅集團", dept: "財務法務處" },
  { code: "250346", name: "吳俊傑", nameEn: "Jerry Wu",   company: "雄獅集團", dept: "軟體開發處" },
  { code: "250347", name: "趙雅婷", nameEn: "Amy Chao",   company: "雄獅集團", dept: "人力資源處" },
  { code: "250348", name: "黃淑芬", nameEn: "Susan Huang", company: "雄獅集團", dept: "業務拓展處" },
];

interface Props {
  onClose: () => void;
  onSelect: (code: string, name: string) => void;
}

export function EmployeeLookupModal({ onClose, onSelect }: Props) {
  const [codeQ, setCodeQ] = useState("");
  const [nameQ, setNameQ] = useState("");
  const [results, setResults] = useState(EMPLOYEES);

  function doSearch() {
    setResults(EMPLOYEES.filter((e) =>
      (!codeQ || e.code.includes(codeQ)) &&
      (!nameQ || e.name.includes(nameQ) || e.nameEn.toLowerCase().includes(nameQ.toLowerCase()))
    ));
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100" style={{ backgroundColor: "#0D9488" }}>
          <h3 className="text-white font-semibold" style={{ fontSize: "14px" }}>查詢員工代號</h3>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Search form */}
        <div className="flex items-end gap-3 px-5 py-4 border-b border-gray-100 bg-gray-50">
          <div>
            <label className="block text-gray-600 mb-1" style={{ fontSize: "11px", fontWeight: 600 }}>員工編號</label>
            <input value={codeQ} onChange={(e) => setCodeQ(e.target.value)} placeholder="輸入員編" className={iCls} />
          </div>
          <div>
            <label className="block text-gray-600 mb-1" style={{ fontSize: "11px", fontWeight: 600 }}>姓名 %</label>
            <input value={nameQ} onChange={(e) => setNameQ(e.target.value)} placeholder="輸入姓名" className={iCls} onKeyDown={(e) => e.key === "Enter" && doSearch()} />
          </div>
          <button
            onClick={doSearch}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-white font-medium transition-all hover:opacity-90"
            style={{ backgroundColor: "#0D9488", fontSize: "12px" }}
          >
            <Search size={13} />查詢
          </button>
          <button onClick={onClose} className="px-4 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 transition-all" style={{ fontSize: "12px" }}>
            關閉
          </button>
        </div>

        {/* Results table */}
        <div className="overflow-auto" style={{ maxHeight: "320px" }}>
          <table className="w-full" style={{ fontSize: "12px" }}>
            <thead className="sticky top-0">
              <tr style={{ backgroundColor: "#0D9488" }}>
                {["編號", "姓名", "英文名", "公司", "單位", ""].map((h) => (
                  <th key={h} className="text-left px-4 py-2 text-white font-semibold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((e, i) => (
                <tr key={e.code} className={`border-b border-gray-50 ${i % 2 === 1 ? "bg-gray-50" : "bg-white"} hover:bg-teal-50 transition-colors`}>
                  <td className="px-4 py-2 font-mono text-gray-600">{e.code}</td>
                  <td className="px-4 py-2 font-medium text-gray-800">{e.name}</td>
                  <td className="px-4 py-2 text-gray-500">{e.nameEn}</td>
                  <td className="px-4 py-2 text-gray-500">{e.company}</td>
                  <td className="px-4 py-2 text-gray-500">{e.dept}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => { onSelect(e.code, e.name); onClose(); }}
                      className="px-3 py-1 rounded text-white text-xs font-medium hover:opacity-90 transition-all"
                      style={{ backgroundColor: "#0D9488" }}
                    >
                      選取
                    </button>
                  </td>
                </tr>
              ))}
              {results.length === 0 && (
                <tr><td colSpan={6} className="text-center py-8 text-gray-400 text-sm">查無符合資料，請至少輸入員工姓名或編號</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-2.5 bg-gray-50 border-t border-gray-100 text-gray-400" style={{ fontSize: "11px" }}>
          共 {results.length} 筆員工資料
        </div>
      </div>
    </div>
  );
}

const iCls = "px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-teal-500 transition-all" as const;
