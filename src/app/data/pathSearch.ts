/**
 * 通用的「分層路徑」關鍵字搜尋：只要節點有 pathNames（分層名稱陣列）與
 * isSelectable，就能用同一套邏輯搜尋——目前用於文件分類（CategoryNode）與
 * HR 部門（HrScopeSourceRow）兩種資料，避免重複實作同一段比對/排序邏輯。
 */

export interface PathSearchable {
  pathNames: string[];
  isSelectable: boolean;
}

const DEFAULT_MAX_RESULTS = 20;

export function searchPathNodes<T extends PathSearchable>(
  nodes: T[],
  query: string,
  maxResults: number = DEFAULT_MAX_RESULTS,
): T[] {
  const keyword = query.trim().toLowerCase();
  if (!keyword) return [];
  const seen = new Set<string>();
  const matches: T[] = [];
  for (const node of nodes) {
    if (!node.isSelectable) continue;
    const pathKey = node.pathNames.join(" / ");
    if (seen.has(pathKey)) continue;
    if (!node.pathNames.some((segment) => segment.toLowerCase().includes(keyword))) continue;
    seen.add(pathKey);
    matches.push(node);
  }
  matches.sort(
    (a, b) =>
      a.pathNames.length - b.pathNames.length ||
      a.pathNames.join(" / ").localeCompare(b.pathNames.join(" / "), "zh-Hant"),
  );
  return matches.slice(0, maxResults);
}
