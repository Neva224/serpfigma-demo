export type DocumentLevel = "level1" | "level2" | "level3" | "level4" | "level5" | "level6";

export type DocumentStatus =
  | "草稿"
  | "待主管簽核"
  | "待文管審核"
  | "上架"
  | "退回"
  | "作廢"
  | "刪除";

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

export const STATUS_OPTIONS: DocumentStatus[] = ["草稿", "待主管簽核", "待文管審核", "上架", "退回", "作廢", "刪除"];

export const LEFT_RAIL_PRESETS = [
  { label: "全部文件", path: [] as string[] },
  { label: "政策手冊", path: ["制度類"] },
  { label: "表單文件", path: ["表單類"] },
];

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
