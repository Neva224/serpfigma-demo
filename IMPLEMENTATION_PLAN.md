# IMPLEMENTATION_PLAN

## 0. 來源與範圍

- Figma Make source 已透過 Figma MCP 的 `get_design_context` 讀到。
- 這個 Make 檔不是傳統的 Figma design node tree；根節點 `0:1` 會先回傳 source files 與 image assets 的資源索引。
- 目前最接近 `SERP 文件管理系統 / 文件管理 / 全部文件` 的視覺參考，主要來自 Make bundle 內的截圖資產，特別是 `src/imports/image-8.png`。

## 1. 目前專案技術棧

| 類別 | 目前使用 |
|---|---|
| 框架 | React 18 |
| 建置工具 | Vite 6 |
| 語言 | TypeScript |
| 樣式 | Tailwind CSS v4 + 自訂 CSS（`src/styles/*.css`） |
| UI primitives | Radix UI 多個套件（dialog, drawer, select, tabs, tooltip, 等） |
| 圖示 | `lucide-react` + `@mui/icons-material` |
| 其他常用依賴 | `@mui/material`, `date-fns`, `sonner`, `react-router`, `react-hook-form` |

補充：

- 專案沒有使用 CSS Modules。
- `src/styles/theme.css` 目前是全域 token 與 base styles 的核心來源。
- `src/styles/index.css` 只負責串接 `fonts.css`、`tailwind.css`、`theme.css`。
- `vite.config.ts` 顯示這是單頁 React 應用，不是 Next.js。

## 2. 目前頁面的主要檔案位置

### App shell / screen switching

- `src/app/App.tsx:18-104`

### 文件列表頁主組裝

- `src/app/components/DocumentListPage.tsx:13-80`

### Global header

- `src/app/components/Header.tsx:46-187`

### 左側知識樹

- `src/app/components/knowledge/KnowledgeTree.tsx:85-291`

### 搜尋 / 篩選列

- `src/app/components/SearchFilterBar.tsx:18-191`

### 表格與分頁

- `src/app/components/DocumentTable.tsx:65-325`

### 審核抽屜

- `src/app/components/approval/ApprovalDrawer.tsx:23-336`

### 登入/權限/其他頁面

- `src/app/components/form/DocumentFormPage.tsx`
- `src/app/components/approval/ApprovalPage.tsx`
- `src/app/components/database/DatabasePage.tsx`
- `src/app/components/settings/PermissionsPage.tsx`
- `src/app/components/signing/SigningProgressPage.tsx`

## 3. 需要拆出的元件

| 目標元件 | 建議來源 | 備註 |
|---|---|---|
| `AppShell / Layout` | `src/app/App.tsx`, `src/app/components/DocumentListPage.tsx` | 把整體頁框、header height、內容區 scroll 容器抽出，避免 list page 自己再包一層大框。 |
| `Header` | `src/app/components/Header.tsx` | 保留導航、通知、使用者區塊；把目前頁面切換責任維持在外層。 |
| `LeftKnowledgeTree` | `src/app/components/knowledge/KnowledgeTree.tsx` | 現有 `KnowledgeTree` 直接搬成獨立可重用元件，並保留 collapse / tab 切換。 |
| `FilterBar` | `src/app/components/SearchFilterBar.tsx` | 改成更純粹的搜尋與條件輸入容器，避免和知識樹條件、advanced panel 全纏在一起。 |
| `DocumentTable` | `src/app/components/DocumentTable.tsx` | 只保留表格主體、空狀態、資料列渲染。 |
| `StatusBadge` | `src/app/components/DocumentTable.tsx` 內聯狀態 config | 把狀態色票與文字統一抽出，讓表格與其他流程頁都能共用。 |
| `StageBadge` | `src/app/components/DocumentTable.tsx` 內聯 level config | 與 status 分離，避免一個 badge 同時承擔兩種語意。 |
| `RowActions` | `src/app/components/DocumentTable.tsx` 內聯 `TinyBtn` 區塊 | 把下載、版本、審核、退回等操作統一抽掉。 |
| `Pagination` | `src/app/components/DocumentTable.tsx` 底部區塊 | 做成獨立 footer 元件，後續清單/搜尋結果頁可共用。 |
| `ApprovalModal` | `src/app/components/approval/ApprovalDrawer.tsx` | 目前是整個 full-screen drawer + confirmation 狀態，需拆成更單純的 modal。 |
| `VersionHistoryDrawer` | `src/app/components/approval/ApprovalDrawer.tsx` | 目前沒有獨立版本歷程元件，建議從 approval 流程中分出。 |
| `AuditLogDrawer` | 新增 | 目前沒有獨立審計紀錄抽屜，應以新元件補齊。 |

## 4. 目前設計與截圖目標的落差

### 版面結構

- 目前實作是「全域 header + 左側知識樹 + 中間列表」的單一列表容器。
- 目標截圖更像企業級 dashboard：頂部有更乾淨的 app shell、breadcrumb / page title、摘要卡片，再進入搜尋與表格。
- 目前頁面一進來就把知識樹與表格並排擺出來；目標更偏向先建立頁面脈絡，再呈現篩選與結果。

### 視覺語言

- 目前 header 走較重的 teal brand bar；目標截圖是白底、淺灰分隔、品牌色只用在重點按鈕與 active state。
- 目前區塊圓角、陰影、內距比較一致但偏簡化；目標視覺層次更細，卡片與工具列的邊界感更清楚。
- 目前表格與工具列是「可用但偏原型」的狀態；目標更像正式上線介面，對齊、留白與 icon/button 密度更一致。

### 資訊架構

- 目前把 status / stage / action 幾個概念混在 `DocumentTable.tsx` 的 inline config 和按鈕群裡。
- 目標明顯需要獨立的 `StatusBadge`、`StageBadge`、`RowActions`，讓語意與樣式都可重用。
- 目前 `ApprovalDrawer` 把審核、退回、文件預覽與確認完成狀態綁在同一個大元件裡。
- 目標需要把 `ApprovalModal`、`VersionHistoryDrawer`、`AuditLogDrawer` 拆開，避免後續流程擴充時繼續肥大。

### 與 Figma / Make 參考的落差

- Figma Make bundle 內的 list 頁參考圖顯示的是更正式的 enterprise shell。
- 目前本地實作保留了舊版結構與較多 debug/原型味的資料與元件組織。
- 這一輪不碰路由、不碰登入、不碰後端，所以差異會先收斂在列表頁與相關 overlay。

## 5. 建議修改順序

### Step 1. 先做頁面骨架重整

目標：先把 shell 和 list page 的責任切乾淨，讓後面拆元件不會一直回頭改父層。

會動到：

- `src/app/App.tsx`
- `src/app/components/DocumentListPage.tsx`
- `src/app/components/Header.tsx`
- 新增 `src/app/components/document-management/AppShell.tsx`

### Step 2. 把左側導覽與篩選列抽乾淨

目標：把 `KnowledgeTree` 與 `SearchFilterBar` 變成可獨立維護的內容塊，並補上頁面標題 / breadcrumb / summary 區段。

會動到：

- `src/app/components/knowledge/KnowledgeTree.tsx`
- `src/app/components/SearchFilterBar.tsx`
- 新增 `src/app/components/document-management/LeftKnowledgeTree.tsx`
- 新增 `src/app/components/document-management/FilterBar.tsx`
- 新增 `src/app/components/document-management/PageSummaryCards.tsx`

### Step 3. 把表格原子拆出來

目標：把 badge、actions、pagination 都變成獨立元件，讓表格主體只管資料列與欄位結構。

會動到：

- `src/app/components/DocumentTable.tsx`
- 新增 `src/app/components/document-management/StatusBadge.tsx`
- 新增 `src/app/components/document-management/StageBadge.tsx`
- 新增 `src/app/components/document-management/RowActions.tsx`
- 新增 `src/app/components/document-management/Pagination.tsx`

### Step 4. 重構審核流程 overlay

目標：把目前的大型 `ApprovalDrawer` 拆成 `ApprovalModal`、`VersionHistoryDrawer`、`AuditLogDrawer`，之後再決定是不是要和 table actions 串起來。

會動到：

- `src/app/components/approval/ApprovalDrawer.tsx`
- 新增 `src/app/components/approval/ApprovalModal.tsx`
- 新增 `src/app/components/approval/VersionHistoryDrawer.tsx`
- 新增 `src/app/components/approval/AuditLogDrawer.tsx`

### Step 5. 最後做樣式收口與一致性調整

目標：統一 padding、圓角、border、hover、空狀態與 dark text hierarchy，並把仍然散落的 inline styles 收斂到可維護的區域。

會動到：

- `src/styles/theme.css`
- `src/styles/index.css`
- `src/app/components/document-management/*`

## 6. 每一步會動到哪些檔案

| 步驟 | 主要檔案 | 預期結果 |
|---|---|---|
| Step 1 | `src/app/App.tsx`, `src/app/components/DocumentListPage.tsx`, `src/app/components/Header.tsx`, `src/app/components/document-management/AppShell.tsx` | shell / list page 的職責切開，頁面結構穩定。 |
| Step 2 | `src/app/components/knowledge/KnowledgeTree.tsx`, `src/app/components/SearchFilterBar.tsx`, `src/app/components/document-management/LeftKnowledgeTree.tsx`, `src/app/components/document-management/FilterBar.tsx`, `src/app/components/document-management/PageSummaryCards.tsx` | 導覽、摘要、篩選的 DOM 結構與責任拆清楚。 |
| Step 3 | `src/app/components/DocumentTable.tsx`, `src/app/components/document-management/StatusBadge.tsx`, `src/app/components/document-management/StageBadge.tsx`, `src/app/components/document-management/RowActions.tsx`, `src/app/components/document-management/Pagination.tsx` | 表格主體變薄，badge / actions / pagination 可重用。 |
| Step 4 | `src/app/components/approval/ApprovalDrawer.tsx`, `src/app/components/approval/ApprovalModal.tsx`, `src/app/components/approval/VersionHistoryDrawer.tsx`, `src/app/components/approval/AuditLogDrawer.tsx` | 審核流程 overlay 拆分完成。 |
| Step 5 | `src/styles/theme.css`, `src/styles/index.css`, `src/app/components/document-management/*` | 視覺與互動細節統一，收斂 inline style。 |

## 7. 驗收標準

### 版面與視覺

- `文件管理 / 全部文件` 首屏與 Figma / Make 參考一致：header、breadcrumb/title、summary cards、search/filter row、table shell 的順序正確。
- 顏色、圓角、陰影、按鈕層級與參考頁一致，不再是原型感很重的 teal-heavy header。
- `StatusBadge` 與 `StageBadge` 在 table 裡有清楚的視覺區隔，不再混成單一內聯文字樣式。

### 功能

- 左側知識樹可展開 / 收合，且選取狀態不會破壞列表區的排版。
- 篩選列可操作，advanced 區塊展開後不會推壞 table 結構。
- 分頁、頁碼輸入、每頁筆數輸入都能正常工作。
- row actions 能正確打開對應的審核 / 歷程 / 記錄元件。
- `ApprovalModal`、`VersionHistoryDrawer`、`AuditLogDrawer` 可獨立開關，且關閉後不殘留遮罩或 body scroll 問題。

### 架構限制

- 不修改路由架構。
- 不碰登入、權限、後端 API。
- 不新增大型 UI library。
- 不重寫整個專案，只針對文件管理列表頁與其相關 overlay 做漸進式拆分。

### 程式品質

- TypeScript 可編譯。
- 現有其他頁面不受影響。
- 新元件命名清楚，且能被 list page 直接組合，不需要額外的全域狀態改造。
