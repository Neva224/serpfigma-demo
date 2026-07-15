import type {
  WorkflowDocument,
  WorkflowNotification,
  WorkflowRole,
} from "../workflow/workflowState";

/**
 * 資料存取層（Repository）。
 *
 * 目前以瀏覽器 localStorage 作為持久化後端：使用者上傳／簽核的文件在重新整理後
 * 仍會保留。這一層刻意把「怎麼存」與 UI／workflow 純函式隔開——未來要接真正的
 * 後端 REST API / server actions 時，只需替換此檔的實作，App 與 workflowState 不必更動。
 */

const WORKFLOW_STORAGE_KEY = "serp-dms/workflow-state/v1";
const ROLES_STORAGE_KEY = "serp-dms/roles/v1";
const EMP_ID_STORAGE_KEY = "serp-dms/emp-id/v1";
const SESSION_STORAGE_KEY = "serp-dms/session/v1";

export interface WorkflowSnapshot {
  documents: WorkflowDocument[];
  notifications: WorkflowNotification[];
}

function emptySnapshot(): WorkflowSnapshot {
  return { documents: [], notifications: [] };
}

function getStorage(): Storage | null {
  try {
    if (typeof window === "undefined" || !window.localStorage) return null;
    return window.localStorage;
  } catch {
    // 例如隱私模式下存取 localStorage 會拋錯
    return null;
  }
}

export function loadWorkflowSnapshot(): WorkflowSnapshot {
  const storage = getStorage();
  if (!storage) return emptySnapshot();
  try {
    const raw = storage.getItem(WORKFLOW_STORAGE_KEY);
    if (!raw) return emptySnapshot();
    const parsed = JSON.parse(raw) as Partial<WorkflowSnapshot> | null;
    return {
      documents: Array.isArray(parsed?.documents) ? (parsed!.documents as WorkflowDocument[]) : [],
      notifications: Array.isArray(parsed?.notifications)
        ? (parsed!.notifications as WorkflowNotification[])
        : [],
    };
  } catch (error) {
    console.warn("[documentRepository] 讀取本機文件資料失敗，改用空白狀態", error);
    return emptySnapshot();
  }
}

export function saveWorkflowSnapshot(snapshot: WorkflowSnapshot): void {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.setItem(WORKFLOW_STORAGE_KEY, JSON.stringify(snapshot));
  } catch (error) {
    console.warn("[documentRepository] 寫入本機文件資料失敗", error);
  }
}

export function loadRoles(): WorkflowRole[] | null {
  const storage = getStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(ROLES_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? (parsed as WorkflowRole[]) : null;
  } catch {
    return null;
  }
}

export function saveRoles(roles: WorkflowRole[]): void {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.setItem(ROLES_STORAGE_KEY, JSON.stringify(roles));
  } catch (error) {
    console.warn("[documentRepository] 寫入角色設定失敗", error);
  }
}

/** 模擬登入身分（員編）；未來由真正的登入/SSO 提供。 */
export function loadEmpId(): string {
  const storage = getStorage();
  if (!storage) return "";
  try {
    return storage.getItem(EMP_ID_STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

export function saveEmpId(empId: string): void {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.setItem(EMP_ID_STORAGE_KEY, empId);
  } catch (error) {
    console.warn("[documentRepository] 寫入登入員編失敗", error);
  }
}

/** 登入 session：儲存登入者的使用者代碼（未來由真正的登入/SSO 取代）。 */
export function loadSessionUser(): string | null {
  const storage = getStorage();
  if (!storage) return null;
  try {
    return storage.getItem(SESSION_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function saveSessionUser(user: string): void {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.setItem(SESSION_STORAGE_KEY, user);
  } catch (error) {
    console.warn("[documentRepository] 寫入登入 session 失敗", error);
  }
}

export function clearSession(): void {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.removeItem(SESSION_STORAGE_KEY);
  } catch (error) {
    console.warn("[documentRepository] 清除登入 session 失敗", error);
  }
}
