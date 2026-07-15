import type { WorkflowRole } from "../workflow/workflowState";

/**
 * 示範用登入帳號：每組帳密對應一種角色。
 *
 * 這是「模擬登入」——未來接公司 SSO / 後端驗證後，改由後端回傳身分與角色即可，
 * 前端登入畫面與 gating 邏輯不需更動。帳密僅供 demo，勿當正式憑證。
 */
export interface DemoAccount {
  user: string;
  pass: string;
  role: WorkflowRole;
  roleLabel: string;
  name: string;
  /** 對應員編（模擬登入身分）；會簽主管給 000001 以配合「指定主管才可簽」示範。 */
  empId: string | null;
}

export const DEMO_ACCOUNTS: DemoAccount[] = [
  { user: "up-lxjo", pass: "nKZvgwmvtO", role: "uploader", roleLabel: "文件上傳者", name: "示範－文件上傳者", empId: "260094" },
  { user: "mgr-au0q", pass: "uUdhNyMwrn", role: "signing_manager", roleLabel: "會簽主管", name: "示範－會簽主管", empId: "000001" },
  { user: "dca-lxtw", pass: "jtfEdivwVi", role: "doc_admin", roleLabel: "文管審核者", name: "示範－文管審核者", empId: null },
  { user: "sys-grrw", pass: "KMnZUFFrHQ", role: "system_admin", roleLabel: "系統管理員", name: "示範－系統管理員", empId: null },
];

/** 驗證帳密，成功回傳帳號、失敗回 null。 */
export function authenticate(user: string, pass: string): DemoAccount | null {
  const account = DEMO_ACCOUNTS.find((item) => item.user === user.trim());
  return account && account.pass === pass ? account : null;
}

export function findAccountByUser(user: string | null): DemoAccount | null {
  if (!user) return null;
  return DEMO_ACCOUNTS.find((item) => item.user === user) ?? null;
}
