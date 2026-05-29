import type { DocumentStatus } from "../components/document-management/mockData";

export type StatusTone = "slate" | "amber" | "blue" | "cyan" | "emerald" | "orange" | "red";

export interface StatusStage {
  key: string;
  label: string;
  statuses: DocumentStatus[];
  tone: StatusTone;
}

export const DOCUMENT_STATUS_LABELS: Record<string, string> = {
  草稿: "草稿",
  待主管簽核: "待主管簽核",
  待文管審核: "待文管簽核",
  待文管簽核: "待文管簽核",
  上架: "上架",
  已上架: "上架",
  下架: "已下架",
  已下架: "已下架",
  退回: "已退回",
  已退回: "已退回",
  作廢: "已作廢",
  已作廢: "已作廢",
  刪除: "已刪除",
  已刪除: "已刪除",
};

export const DOCUMENT_STATUS_STAGES: StatusStage[] = [
  { key: "manager", label: "待主管簽核", statuses: ["待主管簽核"], tone: "amber" },
  { key: "docadmin", label: "待文管簽核", statuses: ["待文管審核", "待文管簽核"], tone: "blue" },
  { key: "published", label: "上架", statuses: ["上架", "已上架"], tone: "emerald" },
  { key: "archived", label: "已下架", statuses: ["下架", "已下架"], tone: "slate" },
  { key: "returned", label: "已退回", statuses: ["退回", "已退回"], tone: "orange" },
  { key: "voided", label: "已作廢", statuses: ["作廢", "已作廢"], tone: "red" },
  { key: "deleted", label: "已刪除", statuses: ["刪除", "已刪除"], tone: "slate" },
];

const TONE_CLASSES: Record<StatusTone, { bg: string; text: string; border: string; dot: string }> = {
  slate: { bg: "bg-slate-100", text: "text-slate-700", border: "border-slate-200", dot: "bg-slate-500" },
  amber: { bg: "bg-amber-50", text: "text-amber-800", border: "border-amber-200", dot: "bg-amber-500" },
  blue: { bg: "bg-blue-50", text: "text-blue-800", border: "border-blue-200", dot: "bg-blue-500" },
  cyan: { bg: "bg-cyan-50", text: "text-cyan-800", border: "border-cyan-200", dot: "bg-cyan-500" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-800", border: "border-emerald-200", dot: "bg-emerald-500" },
  orange: { bg: "bg-orange-50", text: "text-orange-800", border: "border-orange-200", dot: "bg-orange-500" },
  red: { bg: "bg-red-50", text: "text-red-800", border: "border-red-200", dot: "bg-red-500" },
};

export function getDocumentStatusLabel(status: string) {
  return DOCUMENT_STATUS_LABELS[status] ?? status;
}

export function getStatusToneClasses(tone: StatusTone) {
  return TONE_CLASSES[tone];
}

export function getDocumentStatusStageIndex(status: string) {
  return DOCUMENT_STATUS_STAGES.findIndex((stage) => stage.statuses.includes(status as DocumentStatus));
}

export function getDocumentStatusStage(status: string) {
  return DOCUMENT_STATUS_STAGES.find((stage) => stage.statuses.includes(status as DocumentStatus)) ?? DOCUMENT_STATUS_STAGES[0];
}

export function getDocumentStatusProgress(status: string) {
  const currentIndex = getDocumentStatusStageIndex(status);
  return DOCUMENT_STATUS_STAGES.map((stage, index) => ({
    ...stage,
    state:
      currentIndex < 0 ? "pending" : index < currentIndex ? "done" : index === currentIndex ? "current" : "pending",
  }));
}
