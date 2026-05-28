export interface HrScopeSourceRow {
  empId: string;
  name: string;
  englishAlias: string;
  region: string;
  company: string;
  group: string;
  division: string;
  department: string;
  team: string;
  title: string;
}

export interface HrScopeSelection {
  companyName: string;
  groupName: string;
  divisionName: string;
  departmentName: string;
  teamName: string;
}

export interface HrScopePayload {
  scopeId: string;
  scopePath: string[];
  companyName: string | null;
  groupName: string | null;
  divisionName: string | null;
  departmentName: string | null;
  teamName: string | null;
  matchedRow: HrScopeSourceRow | null;
}

const HIERARCHY_KEYS = ["companyName", "groupName", "divisionName", "departmentName", "teamName"] as const;

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

export const HR_SCOPE_ROWS: HrScopeSourceRow[] = [
  {
    empId: "250341",
    name: "王小明",
    englishAlias: "Ming Wang",
    region: "北區",
    company: "台北總公司",
    group: "營運群",
    division: "行政處",
    department: "人資部",
    team: "招募組",
    title: "招募專員",
  },
  {
    empId: "250343",
    name: "陳怡君",
    englishAlias: "Yijun Chen",
    region: "北區",
    company: "台北總公司",
    group: "營運群",
    division: "行政處",
    department: "總務部",
    team: "庶務組",
    title: "總務管理師",
  },
  {
    empId: "250345",
    name: "林建宏",
    englishAlias: "JH Lin",
    region: "北區",
    company: "台北總公司",
    group: "資訊群",
    division: "平台處",
    department: "系統部",
    team: "開發組",
    title: "系統分析師",
  },
  {
    empId: "250347",
    name: "張雅婷",
    englishAlias: "Yating Chang",
    region: "中區",
    company: "台中分公司",
    group: "業務群",
    division: "銷售處",
    department: "北區部",
    team: "業務組",
    title: "業務主任",
  },
  {
    empId: "250350",
    name: "劉志豪",
    englishAlias: "CH Liu",
    region: "南區",
    company: "高雄分公司",
    group: "客服群",
    division: "服務處",
    department: "客服部",
    team: "客服組",
    title: "客服主管",
  },
  {
    empId: "250352",
    name: "吳佩珊",
    englishAlias: "Pei Shan Wu",
    region: "北區",
    company: "台北總公司",
    group: "法務群",
    division: "合規處",
    department: "法務部",
    team: "",
    title: "法務專員",
  },
];

function normalize(value: string | null | undefined) {
  return String(value ?? "").trim();
}

function prefixMatches(row: HrScopeSourceRow, selection: HrScopeSelection, keyIndex: number) {
  for (let index = 0; index < keyIndex; index += 1) {
    const key = HIERARCHY_KEYS[index];
    const rowValue = normalize(row[keyToRowField(key)]);
    const selectionValue = normalize(selection[key]);
    if (!selectionValue || rowValue !== selectionValue) return false;
  }
  return true;
}

function keyToRowField(key: (typeof HIERARCHY_KEYS)[number]): keyof HrScopeSourceRow {
  switch (key) {
    case "companyName":
      return "company";
    case "groupName":
      return "group";
    case "divisionName":
      return "division";
    case "departmentName":
      return "department";
    case "teamName":
      return "team";
  }
}

export function getHrScopeLevelOptions(rows: HrScopeSourceRow[], selection: HrScopeSelection, levelIndex: number) {
  const field = keyToRowField(HIERARCHY_KEYS[levelIndex]);
  const seen = new Set<string>();
  const options: string[] = [];

  for (const row of rows) {
    if (!prefixMatches(row, selection, levelIndex)) continue;
    const nextValue = normalize(row[field]);
    if (!nextValue || seen.has(nextValue)) continue;
    seen.add(nextValue);
    options.push(nextValue);
  }

  return options;
}

export function buildHrScopePayload(rows: HrScopeSourceRow[], selection: HrScopeSelection): HrScopePayload {
  const resolvedPath = HIERARCHY_KEYS.map((key) => normalize(selection[key])).filter(Boolean);
  const exactRow = rows.find((row) =>
    HIERARCHY_KEYS.every((key) => normalize(row[keyToRowField(key)]) === normalize(selection[key])),
  );

  return {
    scopeId: exactRow ? `${exactRow.empId}:${exactRow.title}` : resolvedPath.join(" / "),
    scopePath: resolvedPath,
    companyName: normalize(selection.companyName) || null,
    groupName: normalize(selection.groupName) || null,
    divisionName: normalize(selection.divisionName) || null,
    departmentName: normalize(selection.departmentName) || null,
    teamName: normalize(selection.teamName) || null,
    matchedRow: exactRow ?? null,
  };
}

export function hasLowerLevelOptions(rows: HrScopeSourceRow[], selection: HrScopeSelection, levelIndex: number) {
  const nextIndex = levelIndex + 1;
  if (nextIndex >= HIERARCHY_KEYS.length) return false;
  return getHrScopeLevelOptions(rows, selection, nextIndex).length > 0;
}

export function createEmptyHrScopeSelection(): HrScopeSelection {
  return {
    companyName: "",
    groupName: "",
    divisionName: "",
    departmentName: "",
    teamName: "",
  };
}
