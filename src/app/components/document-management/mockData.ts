export type DocumentLevel = "level1" | "level2" | "level3" | "level4" | "level5" | "level6";

export type DocumentStatus =
  | "上架"
  | "待主管審核"
  | "待文管審核"
  | "草稿"
  | "退回"
  | "下架"
  | "作廢";

export type LeftRailPreset =
  | "all"
  | "query"
  | "upload"
  | "signing"
  | "history"
  | "admin";

export type { KnowledgeNode, KnowledgeTreeNode } from "../../../mocks/knowledgeTreeData";

export interface LevelOption {
  value: DocumentLevel;
  label: string;
  short: string;
  description: string;
}

export const LEVEL_OPTIONS: LevelOption[] = [
  { value: "level1", label: "一階-政策、手冊", short: "一階", description: "政策、手冊" },
  { value: "level2", label: "二階-管理辦法、程序書", short: "二階", description: "管理辦法、程序書" },
  {
    value: "level3",
    label: "三階-規範、說明書、須知、標準",
    short: "三階",
    description: "規範、說明書、須知、標準",
  },
  { value: "level4", label: "四階-表、單", short: "四階", description: "表、單" },
  { value: "level5", label: "五階-教育訓練", short: "五階", description: "教育訓練" },
  { value: "level6", label: "六階-外來文件", short: "六階", description: "外來文件" },
];

export const LEVEL_META: Record<DocumentLevel, LevelOption> = Object.fromEntries(
  LEVEL_OPTIONS.map((option) => [option.value, option]),
) as Record<DocumentLevel, LevelOption>;

export interface DocumentRecord {
  id: number;
  docNo: string;
  name: string;
  level: DocumentLevel;
  version: string;
  status: DocumentStatus;
  uploaderCode: string;
  uploaderName: string;
  uploadDate: string;
  department: string;
  tags: string[];
  knowledgePath: string[];
  categoryId?: string;
  categoryPath?: string[];
}

export const SAMPLE_DOCS: DocumentRecord[] = [
  {
    id: 1,
    docNo: "DOC-2026-001",
    name: "內部公版契約管理辦法",
    level: "level1",
    version: "v3.0",
    status: "上架",
    uploaderCode: "250341",
    uploaderName: "月靈",
    uploadDate: "2026-04-08",
    department: "法務",
    tags: ["契約", "管理辦法"],
    knowledgePath: ["雄獅旅遊-管理本部", "法務", "內部公版契約"],
  },
  {
    id: 2,
    docNo: "DOC-2026-002",
    name: "雄獅旅行社獎金辦法",
    level: "level2",
    version: "v2.1",
    status: "待主管審核",
    uploaderCode: "250342",
    uploaderName: "Nancy",
    uploadDate: "2026-04-11",
    department: "人資資源管理",
    tags: ["獎金", "薪酬"],
    knowledgePath: ["雄獅旅遊-管理本部", "人資資源管理", "薪酬"],
  },
  {
    id: 3,
    docNo: "DOC-2026-003",
    name: "GIT鐵道產品知識手冊",
    level: "level2",
    version: "v1.5",
    status: "待文管審核",
    uploaderCode: "250343",
    uploaderName: "Linda",
    uploadDate: "2026-04-16",
    department: "產品群",
    tags: ["產品知識", "鐵道"],
    knowledgePath: ["雄獅旅遊-產品群", "GIT團產_泛國旅入境鐵道", "產品知識"],
  },
  {
    id: 4,
    docNo: "DOC-2026-004",
    name: "團產OUTB_產二系統流程標準",
    level: "level3",
    version: "v0.9",
    status: "草稿",
    uploaderCode: "250344",
    uploaderName: "Rita",
    uploadDate: "2026-04-18",
    department: "產品群",
    tags: ["系統", "流程"],
    knowledgePath: ["雄獅旅遊-產品群", "團產OUTB_產二", "系統流程標準"],
  },
  {
    id: 5,
    docNo: "DOC-2026-005",
    name: "南高屏產品國旅操作手冊",
    level: "level3",
    version: "v4.0",
    status: "上架",
    uploaderCode: "250345",
    uploaderName: "Ken",
    uploadDate: "2026-04-19",
    department: "台灣塊狀",
    tags: ["國旅", "操作"],
    knowledgePath: ["雄獅旅遊-台灣塊狀", "南高屏塊狀", "產品國旅"],
  },
  {
    id: 6,
    docNo: "DOC-2026-006",
    name: "南高屏鐵道專案紀錄",
    level: "level3",
    version: "v2.3",
    status: "退回",
    uploaderCode: "250346",
    uploaderName: "Jerry",
    uploadDate: "2026-04-20",
    department: "台灣塊狀",
    tags: ["鐵道", "專案"],
    knowledgePath: ["雄獅旅遊-台灣塊狀", "南高屏塊狀", "鐵道"],
  },
  {
    id: 7,
    docNo: "DOC-2026-007",
    name: "車隊管理標準作業程序",
    level: "level4",
    version: "v1.5",
    status: "待主管審核",
    uploaderCode: "250347",
    uploaderName: "Amy",
    uploadDate: "2026-04-22",
    department: "雄獅通運",
    tags: ["SOP", "車隊"],
    knowledgePath: ["雄獅通運", "車隊管理"],
  },
  {
    id: 8,
    docNo: "DOC-2026-008",
    name: "品牌行銷素材彙整",
    level: "level1",
    version: "v3.0",
    status: "下架",
    uploaderCode: "250348",
    uploaderName: "Susan",
    uploadDate: "2026-04-23",
    department: "行銷群",
    tags: ["品牌", "素材"],
    knowledgePath: ["雄獅旅遊-行銷群"],
  },
  {
    id: 9,
    docNo: "DOC-2026-009",
    name: "0800早會簡報模板",
    level: "level5",
    version: "v1.1",
    status: "草稿",
    uploaderCode: "250349",
    uploaderName: "Kevin",
    uploadDate: "2026-04-24",
    department: "企劃本部",
    tags: ["簡報", "模板"],
    knowledgePath: ["雄獅旅遊-企劃本部", "專案管理", "0800早會簡報"],
  },
  {
    id: 10,
    docNo: "DOC-2026-010",
    name: "OTP綁定與資訊安全手冊",
    level: "level2",
    version: "v5.0",
    status: "上架",
    uploaderCode: "250350",
    uploaderName: "May",
    uploadDate: "2026-04-26",
    department: "資訊",
    tags: ["OTP", "資安"],
    knowledgePath: ["雄獅資訊"],
  },
  {
    id: 11,
    docNo: "DOC-2026-011",
    name: "供應商稽核文件",
    level: "level6",
    version: "v2.0",
    status: "作廢",
    uploaderCode: "250351",
    uploaderName: "Steven",
    uploadDate: "2026-05-02",
    department: "機密文件",
    tags: ["稽核", "機密"],
    knowledgePath: ["機密文件"],
  },
  {
    id: 12,
    docNo: "DOC-2026-012",
    name: "集團新人訓旅遊業基礎知識",
    level: "level3",
    version: "v1.3",
    status: "待文管審核",
    uploaderCode: "250352",
    uploaderName: "Grace",
    uploadDate: "2026-05-06",
    department: "雄獅大學",
    tags: ["新人訓", "教材"],
    knowledgePath: ["雄獅旅遊-管理本部", "雄獅大學", "集團新人訓", "旅遊業基礎知識"],
  },
];

export function toCategoryId(path: string[]) {
  return path.join(" / ");
}

export const DOCUMENTS: DocumentRecord[] = SAMPLE_DOCS.map((doc) => ({
  ...doc,
  categoryId: toCategoryId(doc.knowledgePath),
  categoryPath: [...doc.knowledgePath],
}));

export const LEFT_RAIL_PRESETS: {
  id: LeftRailPreset;
  label: string;
  description: string;
}[] = [
  { id: "all", label: "文件查詢", description: "一般文件搜尋與篩選入口" },
  { id: "query", label: "一般文件查詢", description: "關鍵字、進階篩選與下載" },
  { id: "upload", label: "文件上傳", description: "資料填寫、草稿與送出" },
  { id: "signing", label: "簽核專區", description: "主管與文管審核流程" },
  { id: "history", label: "文件簽核單進度查詢", description: "個人文件簽核進度查詢" },
  { id: "admin", label: "系統後台管理", description: "權限與系統設定" },
];

export const STATUS_OPTIONS: DocumentStatus[] = [
  "上架",
  "待主管審核",
  "待文管審核",
  "草稿",
  "退回",
  "下架",
  "作廢",
];

export function includesPathPrefix(doc: DocumentRecord, path: string[]) {
  if (path.length === 0) return true;
  const categoryPath = doc.categoryPath ?? doc.knowledgePath;
  return path.every((segment, index) => categoryPath[index] === segment);
}

export function matchesPreset(doc: DocumentRecord, preset: LeftRailPreset) {
  switch (preset) {
    case "all":
      return true;
    case "query":
      return true;
    case "upload":
      return doc.status === "草稿" || doc.status === "待主管審核" || doc.status === "待文管審核";
    case "signing":
      return doc.status === "待主管審核" || doc.status === "待文管審核";
    case "history":
      return doc.status === "上架" || doc.status === "退回" || doc.status === "下架";
    case "admin":
      return doc.knowledgePath[0] === "雄獅旅遊-管理本部" || doc.knowledgePath[0] === "機密文件";
    default:
      return true;
  }
}
