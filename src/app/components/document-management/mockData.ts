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
    description: "政策、手冊與最高層級文件",
  },
  {
    value: "level2",
    short: "二階",
    label: "二階-管理辦法、程序書",
    description: "管理辦法與作業程序文件",
  },
  {
    value: "level3",
    short: "三階",
    label: "三階-規範、說明書、須知、標準",
    description: "規範、說明書、須知與標準文件",
  },
  {
    value: "level4",
    short: "四階",
    label: "四階-表、單",
    description: "表單、申請單與紀錄單據",
  },
  {
    value: "level5",
    short: "五階",
    label: "五階-教育訓練",
    description: "教育訓練教材與課程文件",
  },
  {
    value: "level6",
    short: "六階",
    label: "六階-外來文件",
    description: "外來文件、供應商文件與參考資料",
  },
];

export const LEVEL_META: Record<DocumentLevel, LevelMeta> = Object.fromEntries(
  LEVEL_OPTIONS.map((option) => [option.value, option]),
) as Record<DocumentLevel, LevelMeta>;

export const STATUS_OPTIONS: DocumentStatus[] = ["草稿", "待主管簽核", "待文管審核", "上架", "退回", "作廢", "下架"];

export const LEFT_RAIL_PRESETS = [
  { label: "全部文件", path: [] as string[] },
  { label: "一階文件", path: ["政策"] },
  { label: "表單文件", path: ["表單"] },
];

export const SAMPLE_DOCS: DocumentRecord[] = [
  {
    id: 1,
    docNo: "DOC-2026-001",
    name: "文件管理程序書",
    level: "level2",
    version: "v2.1",
    status: "待主管簽核",
    uploaderName: "王小明",
    uploaderCode: "250341",
    uploadDate: "2026-05-08",
    department: "總管理處 / 文件管理組",
    tags: ["程序", "管理", "文件"],
    categoryPath: ["行政管理", "文件管理", "程序書"],
    signingNo: "SGN-2026-001",
    subject: "文件管理程序",
    requestor: "王小明",
    requestorCode: "250341",
    currentHandler: "李文管",
  },
  {
    id: 2,
    docNo: "DOC-2026-002",
    name: "請假申請單",
    level: "level4",
    version: "v1.3",
    status: "上架",
    uploaderName: "陳怡君",
    uploaderCode: "250343",
    uploadDate: "2026-05-04",
    department: "人資部 / 薪酬組",
    tags: ["表單", "請假"],
    categoryPath: ["人資管理", "表單", "請假"],
    signingNo: "SGN-2026-002",
    subject: "請假申請",
    requestor: "陳怡君",
    requestorCode: "250343",
    currentHandler: "系統",
  },
  {
    id: 3,
    docNo: "DOC-2026-003",
    name: "品質管理手冊",
    level: "level1",
    version: "v3.0",
    status: "待文管審核",
    uploaderName: "林建宏",
    uploaderCode: "250345",
    uploadDate: "2026-05-02",
    department: "品保處 / 品質系統組",
    tags: ["品質", "手冊"],
    categoryPath: ["品質管理", "手冊"],
    signingNo: "SGN-2026-003",
    subject: "品質管理",
    requestor: "林建宏",
    requestorCode: "250345",
    currentHandler: "文管中心",
  },
  {
    id: 4,
    docNo: "DOC-2026-004",
    name: "教育訓練計畫",
    level: "level5",
    version: "v1.0",
    status: "退回",
    uploaderName: "張雅婷",
    uploaderCode: "250347",
    uploadDate: "2026-04-28",
    department: "人資部 / 訓練組",
    tags: ["教育訓練", "課程"],
    categoryPath: ["人資管理", "教育訓練", "計畫"],
    signingNo: "SGN-2026-004",
    subject: "年度訓練",
    requestor: "張雅婷",
    requestorCode: "250347",
    currentHandler: "張主管",
  },
  {
    id: 5,
    docNo: "DOC-2026-005",
    name: "設備維護規範",
    level: "level3",
    version: "v1.6",
    status: "草稿",
    uploaderName: "劉志豪",
    uploaderCode: "250350",
    uploadDate: "2026-04-21",
    department: "製造處 / 設備維護組",
    tags: ["規範", "設備"],
    categoryPath: ["製造管理", "設備", "規範"],
    signingNo: "SGN-2026-005",
    subject: "設備維護",
    requestor: "劉志豪",
    requestorCode: "250350",
    currentHandler: "等待送出",
  },
  {
    id: 6,
    docNo: "DOC-2026-006",
    name: "外來法規彙整",
    level: "level6",
    version: "v1.0",
    status: "作廢",
    uploaderName: "吳佩珊",
    uploaderCode: "250352",
    uploadDate: "2026-04-18",
    department: "法務室 / 合規組",
    tags: ["外來文件", "法規"],
    categoryPath: ["法規與合規", "外來文件"],
    signingNo: "SGN-2026-006",
    subject: "外來法規",
    requestor: "吳佩珊",
    requestorCode: "250352",
    currentHandler: "結案",
  },
  {
    id: 7,
    docNo: "DOC-2026-007",
    name: "差旅費申請單",
    level: "level4",
    version: "v2.0",
    status: "待主管簽核",
    uploaderName: "黃柏翰",
    uploaderCode: "250355",
    uploadDate: "2026-04-16",
    department: "總務部 / 行政組",
    tags: ["表單", "差旅"],
    categoryPath: ["總務管理", "表單", "差旅"],
    signingNo: "SGN-2026-007",
    subject: "差旅費申請",
    requestor: "黃柏翰",
    requestorCode: "250355",
    currentHandler: "總務主管",
  },
  {
    id: 8,
    docNo: "DOC-2026-008",
    name: "供應商評鑑說明書",
    level: "level3",
    version: "v1.2",
    status: "下架",
    uploaderName: "郭思妤",
    uploaderCode: "250358",
    uploadDate: "2026-04-10",
    department: "採購處 / 供應商管理組",
    tags: ["說明書", "供應商"],
    categoryPath: ["採購管理", "供應商管理", "說明書"],
    signingNo: "SGN-2026-008",
    subject: "供應商評鑑",
    requestor: "郭思妤",
    requestorCode: "250358",
    currentHandler: "倉庫",
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
