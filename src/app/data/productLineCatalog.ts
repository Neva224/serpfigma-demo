/**
 * 產品線分類（轉錄自內部產品線心智圖「雄旅網內部」）。
 *
 * 重要：**只收錄產品線與大區/類別的分類文字，不含任何負責人姓名或照片**
 * （原圖每個節點掛有真實主管姓名與大頭照，屬 PII，一律不進前端）。
 * `ownerRef` 是保留的「負責人插槽」，目前一律為 null，未來由受權限保護的
 * 後端 / 權限層依產品線解析出對應窗口，再回填顯示——與員工查詢延後到後端的決策一致。
 *
 * 目前做兩層：level 1 = 產品線、level 2 = 大區 / 類別。
 */

export interface ProductLineNode {
  id: string;
  name: string;
  level: 1 | 2;
  parentId: string | null;
  /** 負責人插槽；前端不存真名，保留給未來後端/權限層填入。 */
  ownerRef: string | null;
}

export const PRODUCT_LINE_NODES: ProductLineNode[] = [
  // 產一系列（國外/國內團體旅遊）
  { id: "pl-1", name: "產一系列", level: 1, parentId: null, ownerRef: null },
  { id: "pl-1-1", name: "東北亞", level: 2, parentId: "pl-1", ownerRef: null },
  { id: "pl-1-2", name: "東南亞", level: 2, parentId: "pl-1", ownerRef: null },
  { id: "pl-1-3", name: "大中華", level: 2, parentId: "pl-1", ownerRef: null },
  { id: "pl-1-4", name: "大洋洲", level: 2, parentId: "pl-1", ownerRef: null },
  { id: "pl-1-5", name: "歐洲", level: 2, parentId: "pl-1", ownerRef: null },
  { id: "pl-1-6", name: "亞洲（中亞/中東）", level: 2, parentId: "pl-1", ownerRef: null },
  { id: "pl-1-7", name: "北美洲", level: 2, parentId: "pl-1", ownerRef: null },
  { id: "pl-1-8", name: "中南美洲/南極", level: 2, parentId: "pl-1", ownerRef: null },
  { id: "pl-1-9", name: "太平洋小島", level: 2, parentId: "pl-1", ownerRef: null },
  { id: "pl-1-10", name: "國內團體旅遊", level: 2, parentId: "pl-1", ownerRef: null },

  // 產二主題（主題團/精選行程）
  { id: "pl-2", name: "產二主題", level: 1, parentId: null, ownerRef: null },
  { id: "pl-2-1", name: "國外主題", level: 2, parentId: "pl-2", ownerRef: null },
  { id: "pl-2-2", name: "國內主題", level: 2, parentId: "pl-2", ownerRef: null },
  { id: "pl-2-3", name: "郵輪", level: 2, parentId: "pl-2", ownerRef: null },
  { id: "pl-2-4", name: "運動休閒主題", level: 2, parentId: "pl-2", ownerRef: null },

  // 產三 MICE（會展獎旅）
  { id: "pl-3", name: "產三 MICE", level: 1, parentId: null, ownerRef: null },
  { id: "pl-3-1", name: "團體", level: 2, parentId: "pl-3", ownerRef: null },
  { id: "pl-3-2", name: "個人", level: 2, parentId: "pl-3", ownerRef: null },

  // 產四 元件
  { id: "pl-4", name: "產四元件", level: 1, parentId: null, ownerRef: null },
  { id: "pl-4-1", name: "票券/簽證/體驗活動/門票", level: 2, parentId: "pl-4", ownerRef: null },
  { id: "pl-4-2", name: "保險", level: 2, parentId: "pl-4", ownerRef: null },
  { id: "pl-4-3", name: "證照/簽證", level: 2, parentId: "pl-4", ownerRef: null },
  { id: "pl-4-4", name: "訂房/住宿", level: 2, parentId: "pl-4", ownerRef: null },

  // 產五 自由行元件（元件自由 MATCH）
  { id: "pl-5", name: "產五自由行元件", level: 1, parentId: null, ownerRef: null },
  { id: "pl-5-1", name: "機票加住宿", level: 2, parentId: "pl-5", ownerRef: null },
  { id: "pl-5-2", name: "機票＋其他元件混合", level: 2, parentId: "pl-5", ownerRef: null },
  { id: "pl-5-3", name: "郵輪", level: 2, parentId: "pl-5", ownerRef: null },
  { id: "pl-5-4", name: "國外自由行", level: 2, parentId: "pl-5", ownerRef: null },
  { id: "pl-5-5", name: "中國大陸", level: 2, parentId: "pl-5", ownerRef: null },
  { id: "pl-5-6", name: "團體自由行", level: 2, parentId: "pl-5", ownerRef: null },
  { id: "pl-5-7", name: "台灣自由行", level: 2, parentId: "pl-5", ownerRef: null },
  { id: "pl-5-8", name: "高鐵假期", level: 2, parentId: "pl-5", ownerRef: null },
  { id: "pl-5-9", name: "個人自由行", level: 2, parentId: "pl-5", ownerRef: null },

  // 產六 入境
  { id: "pl-6", name: "產六入境", level: 1, parentId: null, ownerRef: null },
  { id: "pl-6-1", name: "產一到產五皆有可能", level: 2, parentId: "pl-6", ownerRef: null },
  { id: "pl-6-2", name: "日本組", level: 2, parentId: "pl-6", ownerRef: null },
  { id: "pl-6-3", name: "其他類別", level: 2, parentId: "pl-6", ownerRef: null },

  // 產七 國旅
  { id: "pl-7", name: "產七國旅", level: 1, parentId: null, ownerRef: null },
  { id: "pl-7-1", name: "台灣", level: 2, parentId: "pl-7", ownerRef: null },
  { id: "pl-7-2", name: "鐵道", level: 2, parentId: "pl-7", ownerRef: null },
  { id: "pl-7-3", name: "大人囝仔", level: 2, parentId: "pl-7", ownerRef: null },
  { id: "pl-7-4", name: "天天出發", level: 2, parentId: "pl-7", ownerRef: null },
  { id: "pl-7-5", name: "山林原遊", level: 2, parentId: "pl-7", ownerRef: null },
  { id: "pl-7-6", name: "週邊商品", level: 2, parentId: "pl-7", ownerRef: null },
];

/** 第一層產品線。 */
export function getProductLines(): ProductLineNode[] {
  return PRODUCT_LINE_NODES.filter((node) => node.level === 1);
}

/** 指定產品線下的第二層（大區/類別）。 */
export function getProductLineChildren(parentId: string): ProductLineNode[] {
  return PRODUCT_LINE_NODES.filter((node) => node.parentId === parentId);
}

/**
 * 適合當關鍵字建議的產品線字眼（挑乾淨、有辨識度的地區/類型詞，
 * 排除「產一系列」「產一到產五皆有可能」這類不適合當標籤的節點）。
 */
export const PRODUCT_LINE_KEYWORDS: string[] = [
  "東北亞", "東南亞", "大中華", "大洋洲", "歐洲", "北美洲", "太平洋小島",
  "郵輪", "自由行", "MICE", "國旅", "入境", "鐵道", "主題旅遊", "訂房", "簽證", "保險",
];
