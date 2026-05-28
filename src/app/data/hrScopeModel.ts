import { HR_SCOPE_NODES, type HrScopeNode } from "./catalogModels";

export interface HrScopeSourceRow {
  sourceId: string;
  rawRowRef: string;
  pathNames: string[];
  region: string | null;
  company: string | null;
  group: string | null;
  division: string | null;
  department: string | null;
  team: string | null;
  empId: string | null;
  name: string | null;
  englishAlias: string | null;
  title: string | null;
  isSelectable: boolean;
}

export interface HrScopeSelection {
  companyName: string;
  groupName: string;
  divisionName: string;
  departmentName: string;
}

export interface HrScopePayload {
  scopeId: string;
  scopePath: string[];
  companyName: string | null;
  groupName: string | null;
  divisionName: string | null;
  departmentName: string | null;
  teamName: string | null;
  empId: string | null;
  name: string | null;
  englishAlias: string | null;
  title: string | null;
  region: string | null;
  matchedRow: HrScopeSourceRow | null;
}

export const HR_SCOPE_COLUMNS = {
  empId: "員編",
  name: "姓名",
  englishAlias: "英文別名",
  region: "區域",
  company: "公司",
  group: "群(事業群)",
  division: "處(事業處)",
  department: "部門",
  team: "組別",
  title: "職稱",
} as const;

function normalize(value: string | null | undefined) {
  return String(value ?? "").trim();
}

function mapNode(node: HrScopeNode): HrScopeSourceRow {
  return {
    sourceId: node.id,
    rawRowRef: node.rawRowRef,
    pathNames: [...node.pathNames],
    region: normalize(node.regionName) || null,
    company: normalize(node.companyName) || null,
    group: normalize(node.businessGroupName) || null,
    division: normalize(node.divisionName) || null,
    department: normalize(node.departmentName) || null,
    team: normalize(node.teamName) || null,
    empId: normalize(node.empId) || null,
    name: normalize(node.name) || null,
    englishAlias: normalize(node.englishAlias) || null,
    title: normalize(node.titleName) || null,
    isSelectable: node.isSelectable,
  };
}

export const HR_SCOPE_ROWS: HrScopeSourceRow[] = HR_SCOPE_NODES.map(mapNode);

const LEVEL_KEYS = ["company", "group", "division", "department"] as const;
const LEVEL_SELECTION_KEYS = ["companyName", "groupName", "divisionName", "departmentName"] as const;

export function createEmptyHrScopeSelection(): HrScopeSelection {
  return {
    companyName: "",
    groupName: "",
    divisionName: "",
    departmentName: "",
  };
}

function matchesPrefix(row: HrScopeSourceRow, selection: HrScopeSelection, levelIndex: number) {
  for (let index = 0; index < levelIndex; index += 1) {
    const selectionValue = normalize(selection[LEVEL_SELECTION_KEYS[index]]);
    const rowValue = normalize(row[LEVEL_KEYS[index]]);
    if (!selectionValue || rowValue !== selectionValue) return false;
  }
  return true;
}

export function getHrScopeLevelOptions(rows: HrScopeSourceRow[], selection: HrScopeSelection, levelIndex: number) {
  const seen = new Set<string>();
  const options: string[] = [];
  const field = LEVEL_KEYS[levelIndex];

  for (const row of rows) {
    if (!matchesPrefix(row, selection, levelIndex)) continue;
    const nextValue = normalize(row[field]);
    if (!nextValue || seen.has(nextValue)) continue;
    seen.add(nextValue);
    options.push(nextValue);
  }

  return options;
}

export function buildHrScopePayload(rows: HrScopeSourceRow[], selection: HrScopeSelection): HrScopePayload {
  const companyName = normalize(selection.companyName);
  const groupName = normalize(selection.groupName);
  const divisionName = normalize(selection.divisionName);
  const departmentName = normalize(selection.departmentName);

  const scopePath = [companyName, groupName, divisionName, departmentName].filter(Boolean);
  const matchedRow =
    [...rows]
      .filter((row) => {
        if (companyName && normalize(row.company) !== companyName) return false;
        if (groupName && normalize(row.group) !== groupName) return false;
        if (divisionName && normalize(row.division) !== divisionName) return false;
        if (departmentName && normalize(row.department) !== departmentName) return false;
        return true;
      })
      .sort((left, right) => {
        const leftScore = [left.company, left.group, left.division, left.department, left.team].filter(Boolean).length;
        const rightScore = [right.company, right.group, right.division, right.department, right.team].filter(Boolean).length;
        return rightScore - leftScore;
      })[0] ?? null;

  return {
    scopeId: matchedRow ? `${matchedRow.sourceId}:${matchedRow.rawRowRef}` : scopePath.join(" / "),
    scopePath,
    companyName: companyName || null,
    groupName: groupName || null,
    divisionName: divisionName || null,
    departmentName: departmentName || null,
    teamName: matchedRow?.team ?? null,
    empId: matchedRow?.empId ?? null,
    name: matchedRow?.name ?? null,
    englishAlias: matchedRow?.englishAlias ?? null,
    title: matchedRow?.title ?? null,
    region: matchedRow?.region ?? null,
    matchedRow: matchedRow ?? null,
  };
}
