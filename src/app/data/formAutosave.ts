import type { ClassificationSelection } from "../components/form/ClassificationCard";
import type { DepartmentSelection } from "../components/form/DepartmentCard";
import type { DocumentLevel } from "../components/document-management/mockData";
import type { WorkflowAttachment } from "../workflow/workflowState";

/**
 * 新增/編修文件表單的「暫存」層：填表過程中定期把目前輸入的內容存進 localStorage，
 * 這樣瀏覽器當機或不小心切走頁面時，重新打開表單還能選擇還原，而不是整份重填。
 * 跟正式的「儲存草稿」（saveDraftDocument）不同——那個會在草稿專區建立一筆真正的文件紀錄，
 * 這裡純粹是還沒送出前的輸入暫存。
 */

export interface FormAutosavePayload {
  savedAt: string;
  title: string;
  ownerName: string;
  validFrom: string;
  validTo: string;
  summary: string;
  tags: string;
  classification: ClassificationSelection;
  level: DocumentLevel | "";
  department: DepartmentSelection;
  attachments: WorkflowAttachment[];
}

const PREFIX = "serp-dms/form-autosave/";

function getStorage(): Storage | null {
  try {
    if (typeof window === "undefined" || !window.localStorage) return null;
    return window.localStorage;
  } catch {
    return null;
  }
}

export function loadFormAutosave(key: string): FormAutosavePayload | null {
  const storage = getStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(PREFIX + key);
    if (!raw) return null;
    return JSON.parse(raw) as FormAutosavePayload;
  } catch {
    return null;
  }
}

export function saveFormAutosave(key: string, payload: FormAutosavePayload): void {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.setItem(PREFIX + key, JSON.stringify(payload));
  } catch (error) {
    console.warn("[formAutosave] 寫入暫存內容失敗", error);
  }
}

export function clearFormAutosave(key: string): void {
  const storage = getStorage();
  if (!storage) return;
  try {
    storage.removeItem(PREFIX + key);
  } catch (error) {
    console.warn("[formAutosave] 清除暫存內容失敗", error);
  }
}

export function isFormAutosaveEmpty(payload: FormAutosavePayload): boolean {
  return (
    !payload.title.trim() &&
    !payload.ownerName.trim() &&
    !payload.summary.trim() &&
    !payload.classification.l1 &&
    !payload.department.companyName &&
    payload.attachments.length === 0
  );
}
