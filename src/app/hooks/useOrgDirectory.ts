import { useEffect, useState } from "react";
import { orgRepository } from "../data/orgRepository";
import {
  buildHrScopePayload,
  getHrScopeLevelOptions,
  type HrScopePayload,
  type HrScopeSelection,
  type HrScopeSourceRow,
} from "../data/hrScopeModel";

/**
 * 載入組織/部門資料並提供串接選單所需的 helper。
 *
 * 資料來源一律透過 orgRepository 取得（目前靜態、未來 API），元件不再直接引用
 * HR_SCOPE_ROWS。介面為非同步，因此提供 loading/error 狀態；API 版上線後行為一致。
 */
export function useOrgDirectory() {
  const [rows, setRows] = useState<HrScopeSourceRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    orgRepository
      .getDepartmentRows()
      .then((result) => {
        if (!active) return;
        setRows(result);
        setError(null);
      })
      .catch((err) => {
        if (!active) return;
        setError(err instanceof Error ? err.message : String(err));
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return {
    loading,
    error,
    rows,
    getLevelOptions: (selection: HrScopeSelection, levelIndex: number) =>
      getHrScopeLevelOptions(rows, selection, levelIndex),
    buildPayload: (selection: HrScopeSelection): HrScopePayload =>
      buildHrScopePayload(rows, selection),
  };
}
