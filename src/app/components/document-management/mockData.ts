export type DocumentLevel = "第一級" | "第二級" | "第三級" | "第四級" | "第五級" | "第六級";

export type DocumentStatus =
  | "已上架"
  | "待主管審核"
  | "待文管審核"
  | "草稿"
  | "退回"
  | "下架";

export type LeftRailPreset =
  | "all"
  | "query"
  | "upload"
  | "signing"
  | "history"
  | "admin";

export interface KnowledgeNode {
  id: string;
  label: string;
  path: string[];
  children?: KnowledgeNode[];
}

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
}

export const KNOWLEDGE_TREE: KnowledgeNode[] = [
  {
    id: "management",
    label: "雄獅旅遊-管理本部",
    path: ["雄獅旅遊-管理本部"],
    children: [
      {
        id: "management-law",
        label: "法務",
        path: ["雄獅旅遊-管理本部", "法務"],
        children: [
          {
            id: "management-law-contract",
            label: "內部公版契約",
            path: ["雄獅旅遊-管理本部", "法務", "內部公版契約"],
          },
          {
            id: "management-law-standard",
            label: "定型化契約",
            path: ["雄獅旅遊-管理本部", "法務", "定型化契約"],
          },
          {
            id: "management-law-workflow",
            label: "作業流程",
            path: ["雄獅旅遊-管理本部", "法務", "作業流程"],
          },
          {
            id: "management-law-form",
            label: "外部客戶用表單",
            path: ["雄獅旅遊-管理本部", "法務", "外部客戶用表單"],
          },
        ],
      },
      {
        id: "management-hrm",
        label: "人資資源管理",
        path: ["雄獅旅遊-管理本部", "人資資源管理"],
        children: [
          {
            id: "management-hrm-organize",
            label: "組織",
            path: ["雄獅旅遊-管理本部", "人資資源管理", "組織"],
          },
          {
            id: "management-hrm-attendance",
            label: "考勤",
            path: ["雄獅旅遊-管理本部", "人資資源管理", "考勤"],
          },
          {
            id: "management-hrm-salary",
            label: "薪酬",
            path: ["雄獅旅遊-管理本部", "人資資源管理", "薪酬"],
          },
          {
            id: "management-hrm-er",
            label: "員工關係",
            path: ["雄獅旅遊-管理本部", "人資資源管理", "員工關係"],
          },
        ],
      },
      {
        id: "management-university",
        label: "雄獅大學",
        path: ["雄獅旅遊-管理本部", "雄獅大學"],
        children: [
          {
            id: "management-university-newhire",
            label: "集團新人訓",
            path: ["雄獅旅遊-管理本部", "雄獅大學", "集團新人訓"],
          },
          {
            id: "management-university-guide",
            label: "旅遊業基礎知識",
            path: ["雄獅旅遊-管理本部", "雄獅大學", "旅遊業基礎知識"],
          },
          {
            id: "management-university-security",
            label: "資訊安全與OTP綁定",
            path: ["雄獅旅遊-管理本部", "雄獅大學", "資訊安全與OTP綁定"],
          },
        ],
      },
      {
        id: "management-security",
        label: "資安暨個資管理室",
        path: ["雄獅旅遊-管理本部", "資安暨個資管理室"],
      },
    ],
  },
  {
    id: "product",
    label: "雄獅旅遊-產品群",
    path: ["雄獅旅遊-產品群"],
    children: [
      {
        id: "product-git",
        label: "GIT團產_泛國旅入境鐵道",
        path: ["雄獅旅遊-產品群", "GIT團產_泛國旅入境鐵道"],
        children: [
          {
            id: "product-git-rail",
            label: "鐵道",
            path: ["雄獅旅遊-產品群", "GIT團產_泛國旅入境鐵道", "鐵道"],
          },
          {
            id: "product-git-inbound",
            label: "入境部",
            path: ["雄獅旅遊-產品群", "GIT團產_泛國旅入境鐵道", "入境部"],
          },
          {
            id: "product-git-km",
            label: "產品知識",
            path: ["雄獅旅遊-產品群", "GIT團產_泛國旅入境鐵道", "產品知識"],
          },
        ],
      },
      {
        id: "product-outb1",
        label: "團產OUTB_產一",
        path: ["雄獅旅遊-產品群", "團產OUTB_產一"],
        children: [
          {
            id: "product-outb1-oceania",
            label: "大洋洲",
            path: ["雄獅旅遊-產品群", "團產OUTB_產一", "大洋洲"],
          },
          {
            id: "product-outb1-japan",
            label: "東北亞日本",
            path: ["雄獅旅遊-產品群", "團產OUTB_產一", "東北亞日本"],
          },
        ],
      },
      {
        id: "product-outb2",
        label: "團產OUTB_產二",
        path: ["雄獅旅遊-產品群", "團產OUTB_產二"],
        children: [
          {
            id: "product-outb2-process",
            label: "系統流程標準",
            path: ["雄獅旅遊-產品群", "團產OUTB_產二", "系統流程標準"],
          },
          {
            id: "product-outb2-confidential",
            label: "合約文件(機密)",
            path: ["雄獅旅遊-產品群", "團產OUTB_產二", "合約文件(機密)"],
          },
          {
            id: "product-outb2-material",
            label: "產品知識和教材",
            path: ["雄獅旅遊-產品群", "團產OUTB_產二", "產品知識和教材"],
          },
        ],
      },
      {
        id: "product-fit",
        label: "FIT元件",
        path: ["雄獅旅遊-產品群", "FIT元件"],
        children: [
          {
            id: "product-fit-ticket",
            label: "機票",
            path: ["雄獅旅遊-產品群", "FIT元件", "機票"],
          },
          {
            id: "product-fit-travel",
            label: "自由行",
            path: ["雄獅旅遊-產品群", "FIT元件", "自由行"],
          },
          {
            id: "product-fit-room",
            label: "訂房",
            path: ["雄獅旅遊-產品群", "FIT元件", "訂房"],
          },
        ],
      },
    ],
  },
  {
    id: "taiwan",
    label: "雄獅旅遊-台灣塊狀",
    path: ["雄獅旅遊-台灣塊狀"],
    children: [
      {
        id: "taiwan-south",
        label: "南高屏塊狀",
        path: ["雄獅旅遊-台灣塊狀", "南高屏塊狀"],
        children: [
          {
            id: "taiwan-south-northtrip",
            label: "產品國旅",
            path: ["雄獅旅遊-台灣塊狀", "南高屏塊狀", "產品國旅"],
          },
          {
            id: "taiwan-south-rail",
            label: "鐵道",
            path: ["雄獅旅遊-台灣塊狀", "南高屏塊狀", "鐵道"],
          },
          {
            id: "taiwan-south-daily",
            label: "共用作業",
            path: ["雄獅旅遊-台灣塊狀", "南高屏塊狀", "共用作業"],
          },
        ],
      },
      {
        id: "taiwan-taichung",
        label: "大台中塊狀",
        path: ["雄獅旅遊-台灣塊狀", "大台中塊狀"],
      },
      {
        id: "taiwan-taoyuan",
        label: "桃竹苗塊狀",
        path: ["雄獅旅遊-台灣塊狀", "桃竹苗塊狀"],
      },
    ],
  },
  {
    id: "overseas",
    label: "雄獅旅遊-海外塊狀",
    path: ["雄獅旅遊-海外塊狀"],
    children: [
      {
        id: "overseas-common",
        label: "公用作業",
        path: ["雄獅旅遊-海外塊狀", "公用作業"],
      },
    ],
  },
  {
    id: "transit",
    label: "雄獅通運",
    path: ["雄獅通運"],
    children: [
      {
        id: "transit-fleet",
        label: "車隊管理",
        path: ["雄獅通運", "車隊管理"],
      },
    ],
  },
  {
    id: "marketing",
    label: "雄獅旅遊-行銷群",
    path: ["雄獅旅遊-行銷群"],
  },
  {
    id: "planning",
    label: "雄獅旅遊-企劃本部",
    path: ["雄獅旅遊-企劃本部"],
    children: [
      {
        id: "planning-project",
        label: "專案管理",
        path: ["雄獅旅遊-企劃本部", "專案管理"],
        children: [
          {
            id: "planning-project-brief",
            label: "0800早會簡報",
            path: ["雄獅旅遊-企劃本部", "專案管理", "0800早會簡報"],
          },
        ],
      },
    ],
  },
  {
    id: "info",
    label: "雄獅資訊",
    path: ["雄獅資訊"],
  },
  {
    id: "channel",
    label: "雄獅旅遊-通路群",
    path: ["雄獅旅遊-通路群"],
  },
  {
    id: "confidential",
    label: "機密文件",
    path: ["機密文件"],
  },
];

export const SAMPLE_DOCS: DocumentRecord[] = [
  {
    id: 1,
    docNo: "DOC-2026-001",
    name: "內部公版契約管理辦法",
    level: "第一級",
    version: "v3.0",
    status: "已上架",
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
    level: "第二級",
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
    level: "第二級",
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
    level: "第三級",
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
    level: "第三級",
    version: "v4.0",
    status: "已上架",
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
    level: "第三級",
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
    level: "第四級",
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
    level: "第一級",
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
    level: "第五級",
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
    level: "第二級",
    version: "v5.0",
    status: "已上架",
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
    level: "第六級",
    version: "v2.0",
    status: "退回",
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
    level: "第三級",
    version: "v1.3",
    status: "待文管審核",
    uploaderCode: "250352",
    uploaderName: "Grace",
    uploadDate: "2026-05-06",
    department: "雄獅大學",
    tags: ["新人訓", "教材"],
    knowledgePath: [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "集團新人訓",
      "旅遊業基礎知識",
    ],
  },
];

export const LEFT_RAIL_PRESETS: {
  id: LeftRailPreset;
  label: string;
  description: string;
}[] = [
  { id: "all", label: "全部文件", description: "文件查詢專區入口" },
  { id: "query", label: "文件查詢專區", description: "關鍵字、進階篩選與下載" },
  { id: "upload", label: "文件上傳專區", description: "資料填寫、草稿與送出" },
  { id: "signing", label: "簽核專區", description: "主管與文管審核流程" },
  { id: "history", label: "文件簽核單專區", description: "個人文件狀態總覽" },
  { id: "admin", label: "系統後台管理", description: "權限與文件管理" },
];

export const LEVEL_OPTIONS: DocumentLevel[] = [
  "第一級",
  "第二級",
  "第三級",
  "第四級",
  "第五級",
  "第六級",
];

export const STATUS_OPTIONS: DocumentStatus[] = [
  "已上架",
  "待主管審核",
  "待文管審核",
  "草稿",
  "退回",
  "下架",
];

export function includesPathPrefix(doc: DocumentRecord, path: string[]) {
  if (path.length === 0) return true;
  return path.every((segment, index) => doc.knowledgePath[index] === segment);
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
      return doc.status === "已上架" || doc.status === "退回" || doc.status === "下架";
    case "admin":
      return doc.knowledgePath[0] === "雄獅旅遊-管理本部" || doc.knowledgePath[0] === "機密文件";
    default:
      return true;
  }
}
