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

/** 現階段：使用打包進來的靜態資料。 */
export const staticOrgRepository: OrgRepository = {
  async getDepartmentRows() {
    return HR_SCOPE_ROWS;
  },
  async getSigningManager() {
    // 靜態資料尚無「部門→主管」對應；BFF/HCM 上線後由後端回傳實際主管。
    return null;
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
