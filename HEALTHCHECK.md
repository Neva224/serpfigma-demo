# 系統健檢報告 HEALTHCHECK

> 掃描範圍：`E:\Data\nevahsieh\Desktop\figma`（Figma 匯出 → Codex 修改 → 部署 https://serpfigma-demo-ijzx.vercel.app/）
> 診斷模式：**唯讀健檢**，未修改／新增／刪除任何原始碼。本檔為唯一新增檔案。
> 診斷日期：2026-07-13

---

## 0. 摘要與系統實況

### 技術棧（實際掃描結果）
| 項目 | 你在需求單填的 | 實際掃描到的 |
|---|---|---|
| 前端 | （空白） | **Vite 6.3.5 + React 18.3 + TypeScript**，UI 用 Radix UI / shadcn / MUI 7 / Tailwind 4 |
| 後端 | Node.js | **不存在後端**。整包只有一個 Node **build script**（`scripts/generateKnowledgeTree.js`），沒有任何 server / API |
| 資料庫 | 測試 | **不存在資料庫**。全部資料是 build 時由 Excel 產生的靜態 TS 陣列 ＋ 瀏覽器記憶體 `useState` |
| 部署 | 本機、雲端 | 本機 `vite dev`；雲端 Vercel（框架自動偵測，無設定檔） |

### 架構一句話
> 這是一個**純前端 Figma 原型（prototype）**：沒有 router、沒有全域狀態庫、沒有後端、沒有資料庫、沒有任何網路請求（`fetch`/`axios`/`XHR` 全域 0 次）。所有畫面切換靠 `App.tsx` 裡的 `useState`，所有文件／通知資料存在記憶體裡，**重新整理頁面就全部消失**。

### 與需求規格書的落差總結
需求規格書（`文件管理系統需求規格書 (1).xlsx`）描述的是一套**完整的企業文件簽核系統**：多角色（系統管理員／會簽主管／文管審核者／文件上傳者）、四層知識樹分類、SERP Q 通知、200MB 檔案上傳、版本控管、稽核追蹤、自動上架⋯⋯。

目前這包程式碼是該系統的**視覺與流程原型**：畫面與狀態機邏輯做得相當完整（`workflowState.ts` 的簽核狀態轉移是這份程式碼最紮實的部分），但**背後完全沒有資料持久化、沒有身分驗證、沒有權限強制**。它可以「示範流程長什麼樣」，但**還不能當正式系統上線**——尤其是它目前公開部署且內含真實員工資料（見嚴重問題 1）。

---

## 1. 🔴 嚴重 (Critical)

> 以下三項建議**立即處理**；每項附 3 個修復方向（僅建議，未動手）。

### 🔴-1　真實人資 PII 被打包進前端 bundle 並公開部署

**問題**
- 產生檔 `src/app/data/generated/domainCatalog.ts`（**249,423 行 / 約 6.3MB**）內含 **8,268 筆真實員工資料**：員編、中文姓名、英文別名、群／處／部／組完整組織架構、職稱，甚至含高階主管（如董事長 王文傑 "Jason"）。每筆都標了 `"sourceFile": "人資資料.xlsx"`。
- 已用 Grep 驗證：**同樣的真實姓名／員編也出現在被 git 追蹤的 `dist/assets/index-CdXxBrAM.js`**——這正是 Vercel 對外提供的 JS 檔。**任何人打開公開網址就能下載到全公司 8 千多名員工的名冊。**
- 來源檔 `人資資料.xlsx`（554KB）本身也被 git 追蹤（`git ls-files` 確認）。

**影響**：個資外洩（違反個資法風險）、公司組織全貌外流。這是整份報告風險最高的一項。

**修復方向（擇一或組合）**
- **(a) 資料與程式分離**：把 `人資資料.xlsx` 移出 git 追蹤，員工清單改由**受權限保護的後端 API** 供應；前端原型改用假資料（`EmployeeLookupModal.tsx` 已有假資料 王大明／李小華 可參考）。
- **(b) build 產物去識別化**：`generateKnowledgeTree.js` 只輸出「組織節點（群/處/部/組）」等非個資欄位，**移除 empId／姓名／別名**；員工查詢（規格書「問號查詢員工代碼模組」）改成登入後才呼叫的 API。
- **(c) 視為外洩事件處理**：因資料已進 **git 歷史**與**公開 bundle**，僅刪檔不夠——需用 `git filter-repo`／BFG 清歷史、重新部署覆蓋舊 bundle、輪換任何相關憑證、並通知資安／人資評估通報義務。

---

### 🔴-2　存取控制完全未實作（權限頁面純裝飾 ＋ 示範帳號給全角色）

**問題**
- `src/app/components/settings/PermissionsPage.tsx` 是**純 UI mockup**：權限矩陣是寫死的 `const PERMISSIONS` 陣列放進 `useState`，勾選只改本地狀態，「儲存變更」按鈕只是切換一個 `editing` 布林值，**什麼都沒存**。另有一行 `const filteredPerms = activeRole === "all" ? perms : perms;`（第 60 行）兩邊相同，過濾是 no-op。
- `createDemoUser(demoMode = true)`（`workflowState.ts:191-198`）直接把 `uploader / system_admin / signing_manager / doc_admin` **四種角色全給**當前使用者。
- 全域**沒有 auth context、沒有 route guard、沒有任何後端驗證**。任何人載入這個 SPA 就擁有全部功能——包含規格書中僅限系統管理員的「刪除文件」。

**影響**：權限形同虛設，與規格書的角色權限設計（RBAC）完全不符。

**修復方向**
- **(a)** 導入身分驗證（公司 SSO 或 JWT 登入）＋前端 route guard，未登入／無權限者無法進入對應畫面。
- **(b)** 權限判斷**移到後端 API 強制執行**（前端隱藏 UI 只是體驗，不能當安全邊界）；每個異動 API 都要重新驗證角色。
- **(c)** 移除 `demoMode` 全角色寫死，改成依登入者實際角色動態決定；保留 demo 模式時也要限制在非正式環境。

---

### 🔴-3　無資料持久層／後端／資料庫（＝「資料庫串接準備度」的核心落差）

**問題**
- 文件與通知全存在 `App.tsx` 的 `useState`（`INITIAL_DOCUMENTS = []`、`INITIAL_NOTIFICATIONS = []`），**重新整理即遺失**，多人之間也不共享。
- 分類目錄與人資是 **build 時由 xlsx 產生的靜態 TS 陣列**，是唯讀快照，不是可查詢／可寫入的資料源。
- 現況資料存取有兩種混雜模式：目錄類走了薄薄一層 model（`catalogModels.ts` / `hrScopeModel.ts`），但**文件列舉列舉的列舉／enum 由約 7 個元件直接 `import` mock**（如 `DocumentTable.tsx`、`SearchFilterBar.tsx`、`DatabasePage.tsx`⋯），未來要換資料源需逐一改。

**好消息**：`workflowState.ts` 全是**純函式 reducer**（輸入舊 state → 回傳新 state，不含副作用），這是接後端的**最佳接點**。

**修復方向**
- **(a)** 先抽出 **data-access / repository 層**，把散落各元件的直接 mock import 收斂成單一介面（先接 mock、之後換 API 不動 UI）。
- **(b)** 把 `workflowState.ts` 的純函式改為呼叫 **server actions / REST API**（此層設計乾淨，改動集中、風險低）。
- **(c)** 知識樹目錄與人資改成 **DB 資料表或 API**，不要再用 6.3MB 編譯進 bundle 的 TS；現有的 FNV-1a stable id（`cat-*` / `hr-*`）可直接當種子主鍵沿用。
- 補充：`界面設計調整指示.md` 已寫了一份未實作的後端提案（Render + `DATABASE_URL` / `JWT_SECRET` / `CORS_ORIGIN`），可作為串接時的參考起點。

---

## 2. 🟡 中等 (Medium)

| # | 問題 | 位置 / 證據 | 建議 |
|---|---|---|---|
| M1 | **無 React ErrorBoundary** | 全 `src/` 找不到 `ErrorBoundary`/`componentDidCatch` | 任一元件 render 例外會讓**整頁白屏**。加一層 ErrorBoundary 包住 App，顯示友善錯誤頁 |
| M2 | **分類編號與規格書不符**（你問的 `cat-9pp4za`） | `generateKnowledgeTree.js` `createStableId()`；`domainCatalog.ts` | 見下方專節說明 |
| M3 | **`.gitignore` 只忽略 `node_modules/`** | `.gitignore`（僅 1 行） | 導致 `dist/`、`vite-dev*.log`(共 165KB)、6.3MB 生成檔、xlsx 全進版控。補上 `dist/`、`*.log`、`*.xlsx`、生成檔 |
| M4 | **`xlsx@0.18.5` 有未修補 CVE** | `package.json` | 原型污染 CVE-2023-30533 + ReDoS CVE-2024-22363，npm 上無修補版。此處僅 build 時讀信任檔案，風險可控；建議改用 SheetJS 官方 CDN 版或以 `exceljs` 取代 |
| M5 | **249k 行 `domainCatalog.ts` 以 TS 進模組圖** | `src/app/data/generated/domainCatalog.ts` | 拖累 `tsc`/IDE 記憶體與 bundle 體積。改成 lazy-load 的 `.json` asset，或改由 API 取得 |
| M6 | **god-component（單檔過大）** | `DocumentListPage.tsx` **1074 行**（同時掌管導覽型別、view 分派、標題與各畫面渲染） | 拆分導覽邏輯與各子畫面 |
| M7 | **無 CI／無部署設定／無 monitoring** | 無 `.github/`、無 `vercel.json`、無 Sentry/analytics | 部署全靠 Vercel 自動偵測；production 錯誤無法追蹤。建議加最小 CI（build + typecheck）與錯誤監控 |

### M2 專節：`cat-9pp4za` 編號邏輯說明（你特別關注的項目）

**它是什麼**：`cat-9pp4za` 是 build script 用 **FNV-1a 雜湊**（`hashSeed()` → base36）對 `層級|節點名|節點代碼|父節點id|來源列號` 計算出的**不透明內部 ID**（`createStableId("cat", …)`）。它只是給程式內部連結節點用的，**不是給人看的文件編號**。

**為什麼算問題**：需求規格書 **UP-02**「文件知識樹分層選擇」明確要求——
> 「分為四層，每一層的每一個選項皆有**獨立的代碼，作為文件編碼的來源**」

也就是說，對外的文件分類編號**應該由各層的英文代碼組成**（如 人資資源管理=`HRM`、組織=`OR`、管理辦法=`MR`）。這些 `nodeCode` 目前**有被保留在每個節點上**，但程式**沒有把它們組成一個對外的文件分類編碼**，畫面上／id 上看到的是 `cat-9pp4za` 這種雜湊值。→ 與規格書預期行為不一致。

**額外提醒**：build 實際讀的是 **`知識樹分類.xlsx`**（內含正規化後的 `knowledge_tree_nodes` / `rules` 分頁），**不是**你在需求裡提到的 `知識樹.xlsx`（那份是原始「總表」）。兩份要小心別搞混；真正餵給程式的是「分類」那份。

**建議**：若要符合規格書，應新增一個「文件分類編碼」欄位，由四層 `nodeCode` 依序組合（例：`HRM-OR-MR`）作為對外編號，`cat-*` 雜湊僅留作內部 primary key。

---

## 3. 🟢 輕微 (Minor)

| # | 問題 | 位置 |
|---|---|---|
| L1 | `SAMPLE_DOCS`（8 筆種子文件）定義了卻**沒接上 App**，導致 demo 開機是空白清單 | `mockData.ts` vs `App.tsx:23-24` |
| L2 | 文件序號 `pad()` 只補到 3 位，`parseSequence()` 用 `\d{3}` 比對；**序號超過 999 後會 re-parse 失敗並重置**編號 | `workflowState.ts:117,121,204` |
| L3 | 物件出現**重複 key**（`待文管審核` / `待文管簽核`），後者覆蓋前者 | `statusCatalog.ts:15-16` |
| L4 | **重複的搜尋 tokenization 邏輯**貼在 4 個元件，可抽成共用 `useKeywordFilter` | `DocumentListPage.tsx:146`、`query/DraftSectionPage.tsx`、`query/TransferUnitPage.tsx`、`query/FaqSearchPage.tsx` |
| L5 | no-op 三元式死碼 | `PermissionsPage.tsx:60` |
| L6 | 提交進版控的 `dist/` 是**過期建置產物**（drift 風險，且內含 M1 的 PII） | `dist/` |
| L7 | **無 git tag，近 10 個 commit 訊息幾乎相同**（"finish final layout sidebar…"），rollback 只能靠 Vercel dashboard | git log |
| L8 | Fast Refresh 警告：非 component 的 export 放在 component 檔內（dev-only，不影響 production） | `DocumentListPage.tsx`、`ClassificationCard.tsx` |

---

## 4. 五大診斷維度小結

| 維度 | 優點 👍 | 問題 👎 |
|---|---|---|
| **1. 架構與設計** | 狀態機用純函式 reducer（`workflowState.ts`）分層清楚 | 無 router、無全域 store、單一 `App.tsx` 掌控全部 view；`DocumentListPage` 1074 行 god-component（M6） |
| **2. 程式碼品質** | `src/` 內**零** TODO/FIXME、**零** `console.log`；狀態轉移邏輯完整 | 重複 search 邏輯（L4）、重複 key（L3）、序號溢位 bug（L2）、6.3MB 生成檔（M5） |
| **3. 安全性** | 無寫死金鑰、無 `eval`、唯一 `dangerouslySetInnerHTML` 不吃使用者輸入（安全） | **真實 PII 外洩（🔴-1）**、**權限純裝飾（🔴-2）**、`xlsx` CVE（M4）——**這是最需要補強的維度** |
| **4. DB 串接準備度** | `workflowState.ts` 純函式是理想接點；catalog 已有薄 model 層 | **完全無持久化（🔴-3）**；~7 個元件直接 import mock，需先抽 repository 層 |
| **5. 部署／維運** | Vercel 部署可用；有 Instant Rollback | 無 env 管理、無 CI、無 monitoring、無 ErrorBoundary（M1/M7）、rollback 無 git tag 可依（L7） |

---

## 5. 錯誤 Log 分析

- **`vite-dev.err.log`（123KB）**：全部是**開發編輯過程中的暫時性語法／編碼錯誤**，且事後都已修好（目前 `dist/` 能建置成功）。典型內容：`ApprovalDrawer.tsx` 一連串 JSX 未閉合、`DepartmentCard.tsx` 中文字串被**編碼破壞成 mojibake**（如 `["?砍", "蝢?…]`）造成 parse error、`App.tsx`/`ClassificationCard.tsx` Unexpected token。→ 這些是「改到一半」的快照，**非 production 錯誤**。
- **`vite-dev.log`（42KB）**：只有正常 HMR 活動，唯一反覆出現的是**非致命的 React Fast Refresh 警告**（見 L8）。
- **沒有任何 production / Vercel 端的 log**——這也呼應 M7：目前沒有錯誤監控管道，線上真的出問題你不會知道。

> 提醒：這兩個 log 檔目前被 git 追蹤（M3），內含本機絕對路徑，建議加入 `.gitignore`。

---

## 附錄：本次健檢如何驗證（你可自行複查）

- **PII 外洩**：打開公開網址的 `index-*.js`，搜尋任一真實員工姓名／員編即可重現；或 `grep -c '"empId":' src/app/data/generated/domainCatalog.ts` → 8268。
- **檔案追蹤狀態**：`git ls-files -- '*.xlsx' 'dist/*'` 可確認 xlsx 與 dist 皆進版控。
- **權限無效**：進 PermissionsPage 勾選後按儲存、重新整理，設定不會保留。
- **無網路請求**：全 `src/` 搜尋 `fetch(`/`axios`/`XMLHttpRequest` → 0 筆。

*本報告僅為診斷，未對任何原始碼進行修改。所有「修復方向」皆為建議，尚未實作。*
