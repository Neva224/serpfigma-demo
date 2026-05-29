export type DocumentLevel = "level1" | "level2" | "level3" | "level4" | "level5" | "level6";

export type DocumentStatus =
  | "草稿"
  | "待主管簽核"
  | "待文管審核"
  | "上架"
  | "退回"
  | "作廢"
  | "下架";

export interface DocumentRecord {
  id: number;
  docNo: string;
  name: string;
  level: DocumentLevel;
  version: string;
  status: DocumentStatus;
  uploaderName: string;
  uploaderCode: string;
  uploadDate: string;
  department: string;
  tags: string[];
  categoryPath: string[];
  knowledgePath?: string[];
  signingNo?: string;
  subject?: string;
  requestor?: string;
  requestorCode?: string;
  currentHandler?: string;
}

export interface LevelMeta {
  value: DocumentLevel;
  short: string;
  label: string;
  description: string;
}

export const LEVEL_OPTIONS: LevelMeta[] = [
  {
    value: "level1",
    short: "一階",
    label: "一階-政策、手冊",
    description: "政策、手冊類文件",
  },
  {
    value: "level2",
    short: "二階",
    label: "二階-管理辦法、程序書",
    description: "管理辦法與程序書",
  },
  {
    value: "level3",
    short: "三階",
    label: "三階-規範、說明書、須知、標準",
    description: "規範、說明書、須知、標準",
  },
  {
    value: "level4",
    short: "四階",
    label: "四階-表、單",
    description: "各式表單與申請單",
  },
  {
    value: "level5",
    short: "五階",
    label: "五階-教育訓練",
    description: "教育訓練與訓練教材",
  },
  {
    value: "level6",
    short: "六階",
    label: "六階-外來文件",
    description: "外部來源的參考文件",
  },
];

export const LEVEL_META: Record<DocumentLevel, LevelMeta> = Object.fromEntries(
  LEVEL_OPTIONS.map((option) => [option.value, option]),
) as Record<DocumentLevel, LevelMeta>;

export const STATUS_OPTIONS: DocumentStatus[] = ["草稿", "待主管簽核", "待文管審核", "上架", "退回", "作廢", "下架"];

export const LEFT_RAIL_PRESETS = [
  { label: "全部文件", path: [] as string[] },
  { label: "政策手冊", path: ["制度類"] },
  { label: "表單文件", path: ["表單類"] },
];

export const SAMPLE_DOCS: DocumentRecord[] = [
  {
    id: 1,
    docNo: "DOC-2026-001",
    name: "文件管理作業程序書",
    level: "level2",
    version: "v2.1",
    status: "待主管簽核",
    uploaderName: "王明",
    uploaderCode: "250341",
    uploadDate: "2026-05-08",
    department: "台灣營運公司 / 營運群 / 營運處 / 營運部",
    tags: ["程序書", "文件管理", "制度"],
    categoryPath: ["制度類", "文件管理", "程序書"],
    signingNo: "SGN-2026-001",
    subject: "文件管理程序修訂",
    requestor: "王明",
    requestorCode: "250341",
    currentHandler: "主管審核",
  },
  {
    id: 2,
    docNo: "DOC-2026-002",
    name: "設備點檢表",
    level: "level4",
    version: "v1.3",
    status: "上架",
    uploaderName: "陳怡君",
    uploaderCode: "250343",
    uploadDate: "2026-05-04",
    department: "台灣營運公司 / 營運群 / 營運處 / 文件部",
    tags: ["表單", "點檢", "設備"],
    categoryPath: ["表單類", "點檢表", "設備"],
    signingNo: "SGN-2026-002",
    subject: "設備點檢表更新",
    requestor: "陳怡君",
    requestorCode: "250343",
    currentHandler: "文件管理",
  },
  {
    id: 3,
    docNo: "DOC-2026-003",
    name: "新進人員教育訓練教材",
    level: "level5",
    version: "v3.0",
    status: "待文管審核",
    uploaderName: "林佳宏",
    uploaderCode: "250345",
    uploadDate: "2026-05-02",
    department: "台灣營運公司 / 行政群 / 行政處 / 行政部",
    tags: ["教育訓練", "新人", "教材"],
    categoryPath: ["教育訓練", "新人教材"],
    signingNo: "SGN-2026-003",
    subject: "教育訓練教材審核",
    requestor: "林佳宏",
    requestorCode: "250345",
    currentHandler: "文管審核",
  },
  {
    id: 4,
    docNo: "DOC-2026-004",
    name: "客訴處理標準書",
    level: "level3",
    version: "v1.0",
    status: "退回",
    uploaderName: "張雅婷",
    uploaderCode: "250347",
    uploadDate: "2026-04-28",
    department: "台灣服務公司 / 客服群 / 客服處 / 客服部",
    tags: ["標準書", "客訴", "服務"],
    categoryPath: ["規範類", "標準書", "客訴"],
    signingNo: "SGN-2026-004",
    subject: "客訴處理標準更新",
    requestor: "張雅婷",
    requestorCode: "250347",
    currentHandler: "退回編修",
  },
  {
    id: 5,
    docNo: "DOC-2026-005",
    name: "外來法規清單",
    level: "level6",
    version: "v1.6",
    status: "作廢",
    uploaderName: "劉建宏",
    uploaderCode: "250350",
    uploadDate: "2026-04-21",
    department: "台灣研發公司 / 研發群 / 研發處 / 研發部",
    tags: ["外來文件", "法規", "清單"],
    categoryPath: ["外來文件", "法規清單"],
    signingNo: "SGN-2026-005",
    subject: "外來法規定期更新",
    requestor: "劉建宏",
    requestorCode: "250350",
    currentHandler: "文件作廢",
  },
  {
    id: 6,
    docNo: "DOC-2026-006",
    name: "管理辦法修訂單",
    level: "level4",
    version: "v2.0",
    status: "待主管簽核",
    uploaderName: "王明",
    uploaderCode: "250341",
    uploadDate: "2026-04-16",
    department: "台灣營運公司 / 營運群 / 營運處 / 文件部",
    tags: ["管理辦法", "修訂", "表單"],
    categoryPath: ["表單類", "修訂單", "管理辦法"],
    signingNo: "SGN-2026-006",
    subject: "管理辦法修訂申請",
    requestor: "王明",
    requestorCode: "250341",
    currentHandler: "主管審核",
  },
  {
    id: 7,
    docNo: "DOC-2026-007",
    name: "風險評估程序書",
    level: "level2",
    version: "v1.1",
    status: "上架",
    uploaderName: "陳怡君",
    uploaderCode: "250343",
    uploadDate: "2026-04-10",
    department: "台灣營運公司 / 行政群 / 行政處 / 行政部",
    tags: ["程序書", "風險", "評估"],
    categoryPath: ["制度類", "程序書", "風險評估"],
    signingNo: "SGN-2026-007",
    subject: "風險評估程序更新",
    requestor: "陳怡君",
    requestorCode: "250343",
    currentHandler: "文件管理",
  },
  {
    id: 8,
    docNo: "DOC-2026-008",
    name: "品保說明書",
    level: "level3",
    version: "v1.2",
    status: "下架",
    uploaderName: "林佳宏",
    uploaderCode: "250345",
    uploadDate: "2026-04-02",
    department: "台灣服務公司 / 客服群 / 客服處 / 客服部",
    tags: ["說明書", "品保", "外部"],
    categoryPath: ["規範類", "說明書", "品保"],
    signingNo: "SGN-2026-008",
    subject: "品保說明書修訂",
    requestor: "林佳宏",
    requestorCode: "250345",
    currentHandler: "文件下架",
  },
];

export const DOCUMENTS = SAMPLE_DOCS;

export function includesPathPrefix(doc: DocumentRecord, prefix: string[]) {
  if (prefix.length === 0) return true;
  const candidates = [doc.categoryPath ?? [], doc.knowledgePath ?? []];
  return candidates.some((path) => prefix.every((segment, index) => path[index] === segment));
}

export function matchesPreset(doc: DocumentRecord, presetLabel: string) {
  const preset = LEFT_RAIL_PRESETS.find((item) => item.label === presetLabel);
  if (!preset) return false;
  return includesPathPrefix(doc, preset.path);
}
