import { HR_SCOPE_ROWS, type HrScopeSourceRow } from "./hrScopeModel";

/**
 * 組織/人資資料存取層（Repository）。
 *
 * 目的：把「組織部門樹、員工、簽核主管」的資料來源與 UI 隔開。
 * 現階段用打包進來的靜態資料（`staticOrgRepository`）；未來要改成即時打
 * HCM / BFF API 時，只要新增一支 `apiOrgRepository` 並切換 `orgRepository` 匯出即可，
 * 元件（透過 useOrgDirectory）完全不用改。
 *
 * 介面刻意設計為「非同步」（回 Promise），這樣換成 fetch 版本時型別不變。
 */

export interface SigningManager {
  name: string;
  empId: string | null;
}

export interface OrgRepository {
  /** 組織部門節點（供部門串接選單、查詢篩選）。 */
  getDepartmentRows(): Promise<HrScopeSourceRow[]>;
  /** 依部門路徑取對應簽核主管（規格書：依歸屬部門帶入簽核主管）。 */
  getSigningManager(departmentPath: string[]): Promise<SigningManager | null>;
}

// 職稱由高階到低階；用於在部門內推斷「誰是簽核主管」（靜態資料無明確對應時的近似）。
const MANAGER_TITLE_RANK = [
  "董事長", "總經理", "協理", "總監", "處長", "部長", "經理", "課長", "店長", "組長", "主任", "督導",
];

function managerRank(title: string | null): number {
  const value = title ?? "";
  for (let index = 0; index < MANAGER_TITLE_RANK.length; index += 1) {
    if (value.includes(MANAGER_TITLE_RANK[index])) return index;
  }
  return Number.POSITIVE_INFINITY;
}

/** 現階段：使用打包進來的靜態資料。 */
export const staticOrgRepository: OrgRepository = {
  async getDepartmentRows() {
    return HR_SCOPE_ROWS;
  },
  async getSigningManager(departmentPath) {
    // 靜態資料無明確「部門→簽核主管」對應，改以「該歸屬部門內職稱最高者」近似；
    // BFF/HCM 上線後由後端回傳正式簽核主管即可（介面不變）。
    const [company, group, division, department] = departmentPath;
    let best: HrScopeSourceRow | null = null;
    let bestRank = Number.POSITIVE_INFINITY;
    for (const row of HR_SCOPE_ROWS) {
      if (company && row.company !== company) continue;
      if (group && row.group !== group) continue;
      if (division && row.division !== division) continue;
      if (department && row.department !== department) continue;
      const rank = managerRank(row.title);
      if (rank < bestRank) {
        bestRank = rank;
        best = row;
      }
    }
    if (!best || bestRank === Number.POSITIVE_INFINITY) return null;
    return { name: best.name ?? "", empId: best.empId };
  },
};

/*
 * 未來 BFF/HCM 版（範例，尚未啟用）：新增後把下方 orgRepository 指向它即可。
 *
 * export const apiOrgRepository: OrgRepository = {
 *   async getDepartmentRows() {
 *     const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/org/tree`, { credentials: "include" });
 *     if (!res.ok) throw new Error(`org tree ${res.status}`);
 *     return res.json();
 *   },
 *   async getSigningManager(departmentPath) {
 *     const query = encodeURIComponent(departmentPath.join("/"));
 *     const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/org/signing-manager?dept=${query}`, { credentials: "include" });
 *     if (!res.ok) return null;
 *     return res.json();
 *   },
 * };
 */

/** 目前啟用的實作（唯一切換點）。 */
export const orgRepository: OrgRepository = staticOrgRepository;
