import {
  HR_SCOPE_IMPORT_ERRORS,
  HR_SCOPE_NODES,
  HR_SCOPE_RULES,
  type HrScopeNode,
} from "../app/data/catalogModels";

export type { HrScopeNode };

export const HR_SCOPE_DATA: HrScopeNode[] = HR_SCOPE_NODES;
export const HR_SCOPE_TREE = HR_SCOPE_NODES;
export const HR_SCOPE_ERRORS = HR_SCOPE_IMPORT_ERRORS;
export const HR_SCOPE_RULESET = HR_SCOPE_RULES;
