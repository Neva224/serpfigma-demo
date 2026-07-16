/**
 * 附件實體檔案（Blob）的持久化層。
 *
 * localStorage 只適合存文字，附件的實際檔案內容改用 IndexedDB 儲存，key 為
 * WorkflowAttachment.id。畫面上顯示用的 downloadUrl 一律是當次分頁存活期間才有效的
 * blob: URL（見 rehydrateAttachmentUrl），所以每次重新載入頁面都要用這裡存的 Blob
 * 重新產生一次，而不是把 blob: URL 直接存進 localStorage（那個網址關掉分頁就失效）。
 */

const DB_NAME = "serp-dms-attachments";
const STORE_NAME = "files";
const DB_VERSION = 1;

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      reject(new Error("IndexedDB not available"));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE_NAME)) {
        request.result.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function putAttachmentBlob(id: string, blob: Blob): Promise<void> {
  try {
    const db = await openDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      tx.objectStore(STORE_NAME).put(blob, id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (error) {
    console.warn("[attachmentStore] 寫入附件檔案失敗", error);
  }
}

export async function getAttachmentBlob(id: string): Promise<Blob | undefined> {
  try {
    const db = await openDb();
    return await new Promise<Blob | undefined>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const req = tx.objectStore(STORE_NAME).get(id);
      req.onsuccess = () => resolve(req.result as Blob | undefined);
      req.onerror = () => reject(req.error);
    });
  } catch (error) {
    console.warn("[attachmentStore] 讀取附件檔案失敗", error);
    return undefined;
  }
}

export async function deleteAttachmentBlob(id: string): Promise<void> {
  try {
    const db = await openDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      tx.objectStore(STORE_NAME).delete(id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (error) {
    console.warn("[attachmentStore] 刪除附件檔案失敗", error);
  }
}

/** 用存好的 Blob 重新產生一個當次分頁有效的 downloadUrl；找不到就回傳 undefined。 */
export async function rehydrateAttachmentUrl(id: string): Promise<string | undefined> {
  const blob = await getAttachmentBlob(id);
  if (!blob) return undefined;
  return URL.createObjectURL(blob);
}
