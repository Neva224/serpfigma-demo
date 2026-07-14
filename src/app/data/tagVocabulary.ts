/**
 * 共用標籤資料庫（規格書 UP-01「標籤：資料來源為標籤資料庫，最多10筆」）。
 *
 * 原本這份清單寫死在 DatabasePage.tsx 內、且未匯出，表單無法取用。抽到此處集中管理，
 * 供「文件標籤管理頁」與「文件上傳表單的關鍵字自動建議」共用。
 * 未來要改由後端 API 供應時，只需替換此檔的資料來源。
 */

export interface TagItem {
  tag: string;
  description: string;
  levels: string[];
  owner: string;
  enabled: boolean;
  count: number;
  docs: string[];
}

/** 標籤資料庫（示範資料，人名為佔位假名）。 */
export const TAG_VOCABULARY: TagItem[] = [
  { tag: "#資安", count: 42, description: "資訊安全與權限控管標籤", levels: ["一階", "三階"], owner: "林建宏", enabled: true, docs: ["資訊安全管理政策", "弱點掃描規範", "資安稽核表"] },
  { tag: "#政策", count: 38, description: "政策與制度文件", levels: ["一階", "二階"], owner: "王大明", enabled: true, docs: ["資訊安全管理政策", "人力資源政策", "採購政策"] },
  { tag: "#財務", count: 35, description: "財務與報支類文件", levels: ["四階"], owner: "陳美玲", enabled: true, docs: ["年度預算規劃表", "帳務處理辦法", "差旅費申請單"] },
  { tag: "#訓練", count: 29, description: "教育訓練與教材", levels: ["五階"], owner: "趙雅婷", enabled: true, docs: ["員工教育訓練計畫", "新人訓練手冊"] },
  { tag: "#表單", count: 27, description: "申請單與簽核單", levels: ["四階"], owner: "林建宏", enabled: true, docs: ["差旅費申請單", "請假申請單", "設備借用單"] },
  { tag: "#合約", count: 22, description: "合約與契約文件", levels: ["二階", "三階"], owner: "張志遠", enabled: true, docs: ["供應商合約範本", "服務合約書"] },
  { tag: "#開發", count: 19, description: "開發與系統規格", levels: ["三階"], owner: "吳俊傑", enabled: true, docs: ["軟體開發管理辦法", "系統架構說明書"] },
  { tag: "#採購", count: 16, description: "採購與評鑑流程", levels: ["二階"], owner: "陳美玲", enabled: true, docs: ["供應商評鑑標準", "採購作業程序"] },
  { tag: "#人資", count: 15, description: "人資管理文件", levels: ["二階"], owner: "李小華", enabled: true, docs: ["人力資源管理程序書", "薪酬管理辦法"] },
  { tag: "#外來", count: 12, description: "外來文件與法規", levels: ["六階"], owner: "蔡宛芸", enabled: true, docs: ["外部法規文件", "國際標準文件"] },
  { tag: "#行銷", count: 10, description: "行銷企劃文件", levels: ["一階", "三階"], owner: "林建宏", enabled: true, docs: ["行銷企劃須知", "品牌形象手冊"] },
  { tag: "#年度", count: 9, description: "年度計畫與報表", levels: ["一階", "四階"], owner: "王大明", enabled: true, docs: ["年度預算規劃表", "年度稽核計畫"] },
];

/** 單一文件可掛的標籤數上限（規格書 UP-01）。 */
export const MAX_TAGS = 10;

/** 供表單關鍵字欄位自動建議用的詞庫（僅啟用中的標籤，去掉開頭的 #）。 */
export const TAG_SUGGESTIONS: string[] = TAG_VOCABULARY
  .filter((item) => item.enabled)
  .map((item) => item.tag.replace(/^#/, ""));
