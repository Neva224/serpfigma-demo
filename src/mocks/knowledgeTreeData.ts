/* eslint-disable */
export interface KnowledgeNode {
  id: string;
  parentId: string | null;
  label: string;
  level: number;
  sortOrder: number;
  isSelectable: boolean;
  code?: string;
  owner?: string;
  note?: string;
}

export interface KnowledgeTreeNode extends KnowledgeNode {
  children?: KnowledgeTreeNode[];
  pathIds: string[];
  pathLabels: string[];
}

export const KNOWLEDGE_NODES: KnowledgeNode[] = [
  {
    "id": "L1::雄獅旅遊-管理本部",
    "parentId": null,
    "label": "雄獅旅遊-管理本部",
    "level": 1,
    "sortOrder": 1,
    "isSelectable": true,
    "owner": "月靈"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部",
    "parentId": null,
    "label": "雄獅旅遊-企劃本部",
    "level": 1,
    "sortOrder": 2,
    "isSelectable": true,
    "owner": "Kevin"
  },
  {
    "id": "L1::雄獅旅遊-通路群",
    "parentId": null,
    "label": "雄獅旅遊-通路群",
    "level": 1,
    "sortOrder": 3,
    "isSelectable": true,
    "owner": "國煌/俊綱"
  },
  {
    "id": "L1::雄獅旅遊-產品群",
    "parentId": null,
    "label": "雄獅旅遊-產品群",
    "level": 1,
    "sortOrder": 4,
    "isSelectable": true,
    "owner": "維霖",
    "note": "2/9 新增資料層，己torres確認"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀",
    "parentId": null,
    "label": "雄獅旅遊-海外塊狀",
    "level": 1,
    "sortOrder": 5,
    "isSelectable": true,
    "owner": "一登",
    "note": "為利跨部了解海外公司設立情形 (檔案參考：海外公司列表)"
  },
  {
    "id": "L1::雄獅旅遊-行銷群",
    "parentId": null,
    "label": "雄獅旅遊-行銷群",
    "level": 1,
    "sortOrder": 6,
    "isSelectable": true,
    "owner": "永智"
  },
  {
    "id": "L1::雄獅保經",
    "parentId": null,
    "label": "雄獅保經",
    "level": 1,
    "sortOrder": 7,
    "isSelectable": true,
    "owner": "永智"
  },
  {
    "id": "L1::雄獅資訊",
    "parentId": null,
    "label": "雄獅資訊",
    "level": 1,
    "sortOrder": 8,
    "isSelectable": true,
    "owner": "安妮"
  },
  {
    "id": "L1::機密文件",
    "parentId": null,
    "label": "機密文件",
    "level": 1,
    "sortOrder": 9,
    "isSelectable": true,
    "owner": "Eason"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀",
    "parentId": null,
    "label": "雄獅旅遊-台灣塊狀",
    "level": 1,
    "sortOrder": 10,
    "isSelectable": true,
    "owner": "Max"
  },
  {
    "id": "L1::雄獅通運",
    "parentId": null,
    "label": "雄獅通運",
    "level": 1,
    "sortOrder": 11,
    "isSelectable": true,
    "owner": "伯叡",
    "note": "(購車、汰車、硬體設備)"
  },
  {
    "id": "L1::傑森",
    "parentId": null,
    "label": "傑森",
    "level": 1,
    "sortOrder": 12,
    "isSelectable": true
  },
  {
    "id": "L1::欣傳媒",
    "parentId": null,
    "label": "欣傳媒",
    "level": 1,
    "sortOrder": 13,
    "isSelectable": true
  },
  {
    "id": "L1::欣食旅",
    "parentId": null,
    "label": "欣食旅",
    "level": 1,
    "sortOrder": 14,
    "isSelectable": true
  },
  {
    "id": "L1::機密文件>L2::公文文件::OFD",
    "parentId": "L1::機密文件",
    "label": "公文文件",
    "level": 2,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "OFD",
    "owner": "Eason"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::經營分析::BA",
    "parentId": "L1::雄獅旅遊-企劃本部",
    "label": "經營分析",
    "level": 2,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "BA",
    "owner": "Kevin"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::知識管理::KM",
    "parentId": "L1::雄獅旅遊-企劃本部",
    "label": "知識管理",
    "level": 2,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "KM",
    "owner": "Leona"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::專案管理::PMD",
    "parentId": "L1::雄獅旅遊-企劃本部",
    "label": "專案管理",
    "level": 2,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "PMD",
    "owner": "Eason"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::文管中心::DMC",
    "parentId": "L1::雄獅旅遊-企劃本部",
    "label": "文管中心",
    "level": 2,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "DMC"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::共用::COMM",
    "parentId": "L1::雄獅旅遊-企劃本部",
    "label": "共用",
    "level": 2,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "COMM"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO",
    "parentId": "L1::雄獅旅遊-台灣塊狀",
    "label": "桃竹苗塊狀",
    "level": 2,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TAO",
    "owner": "Max"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH",
    "parentId": "L1::雄獅旅遊-台灣塊狀",
    "label": "大台中塊狀",
    "level": 2,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "TCH",
    "owner": "育華"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH",
    "parentId": "L1::雄獅旅遊-台灣塊狀",
    "label": "南高屏塊狀",
    "level": 2,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "KHH",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "parentId": "L1::雄獅旅遊-海外塊狀",
    "label": "公用作業",
    "level": 2,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "SPD",
    "owner": "一登",
    "note": "為利跨部了解海外公司設立情形 (檔案參考：海外公司列表)"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::洛杉磯::LAX",
    "parentId": "L1::雄獅旅遊-海外塊狀",
    "label": "洛杉磯",
    "level": 2,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "LAX",
    "owner": "Rain/Janice/一登",
    "note": "為利跨部了解各站業務對應負責人 (檔案參考：組織圖/ 人員列表)"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::溫哥華::YVR",
    "parentId": "L1::雄獅旅遊-海外塊狀",
    "label": "溫哥華",
    "level": 2,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "YVR",
    "owner": "Rain/Janice/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::雪梨::SYD",
    "parentId": "L1::雄獅旅遊-海外塊狀",
    "label": "雪梨",
    "level": 2,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "SYD",
    "owner": "Vera/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::奧克蘭::AKL",
    "parentId": "L1::雄獅旅遊-海外塊狀",
    "label": "奧克蘭",
    "level": 2,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "AKL",
    "owner": "Vera/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::東京::TYO",
    "parentId": "L1::雄獅旅遊-海外塊狀",
    "label": "東京",
    "level": 2,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "TYO",
    "owner": "Tiffany/市原/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::沖繩::OKA",
    "parentId": "L1::雄獅旅遊-海外塊狀",
    "label": "沖繩",
    "level": 2,
    "sortOrder": 7,
    "isSelectable": true,
    "code": "OKA",
    "owner": "Tiffany/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::熊本::KUM",
    "parentId": "L1::雄獅旅遊-海外塊狀",
    "label": "熊本",
    "level": 2,
    "sortOrder": 8,
    "isSelectable": true,
    "code": "KUM",
    "owner": "市原/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::中國大陸::SHA",
    "parentId": "L1::雄獅旅遊-海外塊狀",
    "label": "中國大陸",
    "level": 2,
    "sortOrder": 9,
    "isSelectable": true,
    "code": "SHA",
    "owner": "Glo/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::曼谷::BKK",
    "parentId": "L1::雄獅旅遊-海外塊狀",
    "label": "曼谷",
    "level": 2,
    "sortOrder": 10,
    "isSelectable": true,
    "code": "BKK",
    "owner": "Bonnie/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::香港::HKG",
    "parentId": "L1::雄獅旅遊-海外塊狀",
    "label": "香港",
    "level": 2,
    "sortOrder": 11,
    "isSelectable": true,
    "code": "HKG",
    "owner": "Glo/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::倫敦::LON",
    "parentId": "L1::雄獅旅遊-海外塊狀",
    "label": "倫敦",
    "level": 2,
    "sortOrder": 12,
    "isSelectable": true,
    "code": "LON",
    "owner": "Vera/一登"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1",
    "parentId": "L1::雄獅旅遊-產品群",
    "label": "團產OUTB_產一",
    "level": 2,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "GIT1",
    "owner": "維霖",
    "note": "2/9 新增資料層，己torres確認"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2",
    "parentId": "L1::雄獅旅遊-產品群",
    "label": "團產OUTB_產二",
    "level": 2,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "GIT2",
    "owner": "維霖",
    "note": "系統操作SOP\n內部系統使用指南"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產三::GIT3",
    "parentId": "L1::雄獅旅遊-產品群",
    "label": "團產OUTB_產三",
    "level": 2,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "GIT3",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_機票::TKT",
    "parentId": "L1::雄獅旅遊-產品群",
    "label": "FIT元件_機票",
    "level": 2,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "TKT",
    "owner": "Shelly"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL",
    "parentId": "L1::雄獅旅遊-產品群",
    "label": "FIT元件_訂房",
    "level": 2,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "HTL",
    "owner": "jeff",
    "note": "2/6與jeff確認，新增資料層"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG",
    "parentId": "L1::雄獅旅遊-產品群",
    "label": "FIT元件_自由行",
    "level": 2,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "PKG",
    "owner": "Winnie"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_票券::ACT",
    "parentId": "L1::雄獅旅遊-產品群",
    "label": "FIT元件_票券",
    "level": 2,
    "sortOrder": 7,
    "isSelectable": true,
    "code": "ACT",
    "owner": "Cini"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA",
    "parentId": "L1::雄獅旅遊-產品群",
    "label": "FIT元件_證照",
    "level": 2,
    "sortOrder": 8,
    "isSelectable": true,
    "code": "VISA",
    "owner": "Cini"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT",
    "parentId": "L1::雄獅旅遊-產品群",
    "label": "GIT團產_泛國旅入境鐵道",
    "level": 2,
    "sortOrder": 9,
    "isSelectable": true,
    "code": "DT",
    "owner": "子傑",
    "note": "川總、岳總，外部演講簡報"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD",
    "parentId": "L1::雄獅旅遊-產品群",
    "label": "導領部",
    "level": 2,
    "sortOrder": 10,
    "isSelectable": true,
    "code": "TLD",
    "owner": "孟儒",
    "note": "委任契約書/自檢表/個資約定書/交班文件"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM",
    "parentId": "L1::雄獅旅遊-管理本部",
    "label": "人資資源管理",
    "level": 2,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "HRM",
    "owner": "月靈"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD",
    "parentId": "L1::雄獅旅遊-管理本部",
    "label": "雄獅大學",
    "level": 2,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "HRD",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::行政總務::AGD",
    "parentId": "L1::雄獅旅遊-管理本部",
    "label": "行政總務",
    "level": 2,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "AGD"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::財務管理::FMD",
    "parentId": "L1::雄獅旅遊-管理本部",
    "label": "財務管理",
    "level": 2,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "FMD",
    "owner": "厚均"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::顧客關係::CRD",
    "parentId": "L1::雄獅旅遊-管理本部",
    "label": "顧客關係",
    "level": 2,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "CRD"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::法務::LAD",
    "parentId": "L1::雄獅旅遊-管理本部",
    "label": "法務",
    "level": 2,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "LAD",
    "owner": "芝吟",
    "note": "發展觀光條例\nhttps://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0110001"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::董事長室::CMO",
    "parentId": "L1::雄獅旅遊-管理本部",
    "label": "董事長室",
    "level": 2,
    "sortOrder": 7,
    "isSelectable": true,
    "code": "CMO"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::稽核室::AUD",
    "parentId": "L1::雄獅旅遊-管理本部",
    "label": "稽核室",
    "level": 2,
    "sortOrder": 8,
    "isSelectable": true,
    "code": "AUD",
    "owner": "得嘉/高瑞"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD",
    "parentId": "L1::雄獅旅遊-管理本部",
    "label": "永續發展室",
    "level": 2,
    "sortOrder": 9,
    "isSelectable": true,
    "code": "SDD",
    "owner": "Yoyo"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::資安暨個資管理室::IPO",
    "parentId": "L1::雄獅旅遊-管理本部",
    "label": "資安暨個資管理室",
    "level": 2,
    "sortOrder": 10,
    "isSelectable": true,
    "code": "IPO",
    "owner": "咸蓁"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::組織與行政管理::IM",
    "parentId": "L1::雄獅旅遊-行銷群",
    "label": "組織與行政管理",
    "level": 2,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "IM",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::策略與績效管理::SP",
    "parentId": "L1::雄獅旅遊-行銷群",
    "label": "策略與績效管理",
    "level": 2,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "SP",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::作業流程規範::WP",
    "parentId": "L1::雄獅旅遊-行銷群",
    "label": "作業流程規範",
    "level": 2,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "WP",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::專案知識資產::KA",
    "parentId": "L1::雄獅旅遊-行銷群",
    "label": "專案知識資產",
    "level": 2,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "KA",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::系統工具管理::DS",
    "parentId": "L1::雄獅旅遊-行銷群",
    "label": "系統工具管理",
    "level": 2,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "DS",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-通路群>L2::直售::B2C",
    "parentId": "L1::雄獅旅遊-通路群",
    "label": "直售",
    "level": 2,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "B2C",
    "owner": "國煌/俊綱"
  },
  {
    "id": "L1::雄獅旅遊-通路群>L2::同業::B2B",
    "parentId": "L1::雄獅旅遊-通路群",
    "label": "同業",
    "level": 2,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "B2B",
    "owner": "國煌/俊綱"
  },
  {
    "id": "L1::雄獅旅遊-通路群>L2::企業戶::B2E",
    "parentId": "L1::雄獅旅遊-通路群",
    "label": "企業戶",
    "level": 2,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "B2E",
    "owner": "國煌/俊綱"
  },
  {
    "id": "L1::雄獅旅遊-通路群>L2::共用::COMM",
    "parentId": "L1::雄獅旅遊-通路群",
    "label": "共用",
    "level": 2,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "COMM",
    "owner": "國煌/俊綱"
  },
  {
    "id": "L1::雄獅資訊>L2::需求規格相關::SPEC",
    "parentId": "L1::雄獅資訊",
    "label": "需求規格相關",
    "level": 2,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "SPEC",
    "owner": "安妮"
  },
  {
    "id": "L1::雄獅資訊>L2::API相關::API",
    "parentId": "L1::雄獅資訊",
    "label": "API相關",
    "level": 2,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "API",
    "owner": "安妮"
  },
  {
    "id": "L1::雄獅資訊>L2::IT內部知識::IT",
    "parentId": "L1::雄獅資訊",
    "label": "IT內部知識",
    "level": 2,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "IT",
    "owner": "安妮"
  },
  {
    "id": "L1::雄獅資訊>L2::其他::OTR",
    "parentId": "L1::雄獅資訊",
    "label": "其他",
    "level": 2,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "OTR",
    "owner": "安妮"
  },
  {
    "id": "L1::雄獅通運>L2::車隊管理::FM",
    "parentId": "L1::雄獅通運",
    "label": "車隊管理",
    "level": 2,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "FM",
    "owner": "伯叡",
    "note": "(購車、汰車、硬體設備)"
  },
  {
    "id": "L1::雄獅通運>L2::業務管理::BM",
    "parentId": "L1::雄獅通運",
    "label": "業務管理",
    "level": 2,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "BM",
    "owner": "伯叡",
    "note": "(供應商資格、租賃條件、合作模式)"
  },
  {
    "id": "L1::雄獅通運>L2::內部管理::IM",
    "parentId": "L1::雄獅通運",
    "label": "內部管理",
    "level": 2,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "IM",
    "owner": "伯叡",
    "note": "(SOP文件、內部作業流程)"
  },
  {
    "id": "L1::雄獅通運>L2::數據與系統管理::DS",
    "parentId": "L1::雄獅通運",
    "label": "數據與系統管理",
    "level": 2,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "DS",
    "owner": "伯叡",
    "note": "(IT系統架構、功能模組)"
  },
  {
    "id": "L1::機密文件>L2::公文文件::OFD>L3::資安及個資::IP",
    "parentId": "L1::機密文件>L2::公文文件::OFD",
    "label": "資安及個資",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "IP",
    "owner": "Eason"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::共用::COMM>L3::FAQ::FAQ",
    "parentId": "L1::雄獅旅遊-企劃本部>L2::共用::COMM",
    "label": "FAQ",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "FAQ"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::專案管理::PMD>L3::0800早會簡報::0800",
    "parentId": "L1::雄獅旅遊-企劃本部>L2::專案管理::PMD",
    "label": "0800早會簡報",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "0800",
    "owner": "Eason"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::專案管理::PMD>L3::知識管理系統::KM",
    "parentId": "L1::雄獅旅遊-企劃本部>L2::專案管理::PMD",
    "label": "知識管理系統",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "KM",
    "owner": "Eason",
    "note": "碩網文件"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::專案管理::PMD>L3::出差報告::BTR",
    "parentId": "L1::雄獅旅遊-企劃本部>L2::專案管理::PMD",
    "label": "出差報告",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "BTR"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::文管中心::DMC>L3::管理辦法::MR",
    "parentId": "L1::雄獅旅遊-企劃本部>L2::文管中心::DMC",
    "label": "管理辦法",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "MR"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::文管中心::DMC>L3::表單::FM",
    "parentId": "L1::雄獅旅遊-企劃本部>L2::文管中心::DMC",
    "label": "表單",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "FM"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::知識管理::KM>L3::雄獅字典::LD",
    "parentId": "L1::雄獅旅遊-企劃本部>L2::知識管理::KM",
    "label": "雄獅字典",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "LD",
    "owner": "Leona"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::知識管理::KM>L3::經營理念::BP",
    "parentId": "L1::雄獅旅遊-企劃本部>L2::知識管理::KM",
    "label": "經營理念",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "BP",
    "owner": "Leona"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品日本線::JP",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH",
    "label": "產品日本線",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "JP",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品韓國線::KR",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH",
    "label": "產品韓國線",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "KR",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品東南亞線::SEA",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH",
    "label": "產品東南亞線",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "SEA",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品歐洲線(高出)::EU",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH",
    "label": "產品歐洲線(高出)",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "EU",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品大陸線::AS",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH",
    "label": "產品大陸線",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "AS",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品自由行::PKG",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH",
    "label": "產品自由行",
    "level": 3,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "PKG",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品國旅::INB",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH",
    "label": "產品國旅",
    "level": 3,
    "sortOrder": 7,
    "isSelectable": true,
    "code": "INB",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::導領部::TLD",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH",
    "label": "導領部",
    "level": 3,
    "sortOrder": 8,
    "isSelectable": true,
    "code": "TLD",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品OP::OP",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH",
    "label": "產品OP",
    "level": 3,
    "sortOrder": 9,
    "isSelectable": true,
    "code": "OP",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::行銷::MK",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH",
    "label": "行銷",
    "level": 3,
    "sortOrder": 10,
    "isSelectable": true,
    "code": "MK",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::通路::SC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH",
    "label": "通路",
    "level": 3,
    "sortOrder": 11,
    "isSelectable": true,
    "code": "SC",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::共用作業::CO",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH",
    "label": "共用作業",
    "level": 3,
    "sortOrder": 12,
    "isSelectable": true,
    "code": "CO",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH>L3::產品::PD",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH",
    "label": "產品",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "PD",
    "owner": "育華"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH>L3::通路::SC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH",
    "label": "通路",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "SC",
    "owner": "育華"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH>L3::管企本共用::COM",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH",
    "label": "管企本共用",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "COM",
    "owner": "育華"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH>L3::雲嘉::CYI",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH",
    "label": "雲嘉",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "CYI",
    "owner": "育華"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO>L3::共用作業::CO",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO",
    "label": "共用作業",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CO",
    "owner": "Max"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO>L3::通路::SC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO",
    "label": "通路",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "SC",
    "owner": "Max"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO>L3::產品::PD",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO",
    "label": "產品",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "PD",
    "owner": "Max"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::中國大陸::SHA>L3::業務窗口::CT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::中國大陸::SHA",
    "label": "業務窗口",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CT",
    "owner": "Glo/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::中國大陸::SHA>L3::特色產品::FP",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::中國大陸::SHA",
    "label": "特色產品",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "FP",
    "owner": "Glo/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::中國大陸::SHA>L3::主力供應商表::TMC",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::中國大陸::SHA",
    "label": "主力供應商表",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "TMC",
    "owner": "Glo/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::倫敦::LON>L3::業務窗口::CT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::倫敦::LON",
    "label": "業務窗口",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CT",
    "owner": "Vera/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::倫敦::LON>L3::主力供應商表::PR",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::倫敦::LON",
    "label": "主力供應商表",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "PR",
    "owner": "Vera/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::海外公司介紹::OS",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "海外公司介紹",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "OS",
    "owner": "一登",
    "note": "為利跨部了解海外公司設立情形 (檔案參考：海外公司列表)"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::年度目標計畫::YP",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "年度目標計畫",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "YP",
    "owner": "一登",
    "note": "為利跨部了解海外公司各區年度目標計畫 (檔案參考：年度計畫總表)\n#2/25己與Janice確認新增資料層"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::教育訓練::PT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "教育訓練",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "PT",
    "owner": "一登",
    "note": "為利跨部了解各海外公司教育訓練文檔 (檔案參考：各式教育訓練文檔)"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::宿舍::HS",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "宿舍",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "HS",
    "owner": "一登",
    "note": "為利跨部了解海外公司宿舍概況 (檔案參考：海外宿舍總表/租賃合約)"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::辦公室::OF",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "辦公室",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "OF",
    "owner": "一登",
    "note": "為利跨部了解海外公司辦公室概況 (檔案參考：海外辦公室總表/租賃合約)"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::出差計畫::BP",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "出差計畫",
    "level": 3,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "BP",
    "owner": "一登",
    "note": "為利跨部了解海外出差概況 (檔案參考：各出差專案執行檔)"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::璽品專案::ST",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "璽品專案",
    "level": 3,
    "sortOrder": 7,
    "isSelectable": true,
    "code": "ST",
    "owner": "一登",
    "note": "說明：未來各站皆有可能推行喜品專案，因此歸檔公用作業"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::脈絡名片::NC",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "脈絡名片",
    "level": 3,
    "sortOrder": 8,
    "isSelectable": true,
    "code": "NC",
    "note": "產/官/學"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::產品::PD",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "產品",
    "level": 3,
    "sortOrder": 9,
    "isSelectable": true,
    "code": "PD"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::通路::PL",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "通路",
    "level": 3,
    "sortOrder": 10,
    "isSelectable": true,
    "code": "PL"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::行銷::MK",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "行銷",
    "level": 3,
    "sortOrder": 11,
    "isSelectable": true,
    "code": "MK"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::系統IT::ST",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "系統IT",
    "level": 3,
    "sortOrder": 12,
    "isSelectable": true,
    "code": "ST"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::區域財務經營::RFM",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "區域財務經營",
    "level": 3,
    "sortOrder": 13,
    "isSelectable": true,
    "code": "RFM",
    "note": "銀行/會計師/核決權限/支單申請規則"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::全球行事曆::GC",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "全球行事曆",
    "level": 3,
    "sortOrder": 14,
    "isSelectable": true,
    "code": "GC"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::供應商管理::SM",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "供應商管理",
    "level": 3,
    "sortOrder": 15,
    "isSelectable": true,
    "code": "SM"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::流程梳理::PR",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "流程梳理",
    "level": 3,
    "sortOrder": 16,
    "isSelectable": true,
    "code": "PR"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::集團-全球化發展::GD",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "集團-全球化發展",
    "level": 3,
    "sortOrder": 17,
    "isSelectable": true,
    "code": "GD"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::台商發展::TC",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD",
    "label": "台商發展",
    "level": 3,
    "sortOrder": 18,
    "isSelectable": true,
    "code": "TC",
    "owner": "一登",
    "note": "為利跨部了解海外公司台商專案與脈絡 (檔案參考：台商專案總表/執行檔)"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::奧克蘭::AKL>L3::業務窗口::CT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::奧克蘭::AKL",
    "label": "業務窗口",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CT",
    "owner": "Vera/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::奧克蘭::AKL>L3::特色產品::FP",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::奧克蘭::AKL",
    "label": "特色產品",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "FP",
    "owner": "Vera/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::奧克蘭::AKL>L3::主力供應商表::PR",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::奧克蘭::AKL",
    "label": "主力供應商表",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "PR",
    "owner": "Vera/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::曼谷::BKK>L3::業務窗口::CT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::曼谷::BKK",
    "label": "業務窗口",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CT",
    "owner": "Bonnie/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::曼谷::BKK>L3::特色產品::FP",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::曼谷::BKK",
    "label": "特色產品",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "FP",
    "owner": "Bonnie/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::曼谷::BKK>L3::主力供應商表::PR",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::曼谷::BKK",
    "label": "主力供應商表",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "PR",
    "owner": "Bonnie/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::東京::TYO>L3::業務窗口::CT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::東京::TYO",
    "label": "業務窗口",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CT",
    "owner": "Tiffany/市原/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::東京::TYO>L3::主力供應商表::PR",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::東京::TYO",
    "label": "主力供應商表",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "PR",
    "owner": "Tiffany/市原/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::沖繩::OKA>L3::業務窗口::CT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::沖繩::OKA",
    "label": "業務窗口",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CT",
    "owner": "Tiffany/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::沖繩::OKA>L3::主力供應商表::PR",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::沖繩::OKA",
    "label": "主力供應商表",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "PR",
    "owner": "Tiffany/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::洛杉磯::LAX>L3::業務窗口::CT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::洛杉磯::LAX",
    "label": "業務窗口",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CT",
    "owner": "Rain/Janice/一登",
    "note": "為利跨部了解各站業務對應負責人 (檔案參考：組織圖/ 人員列表)"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::洛杉磯::LAX>L3::特色產品::FP",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::洛杉磯::LAX",
    "label": "特色產品",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "FP",
    "owner": "Rain/Janice/一登",
    "note": "為利跨部了解各站主推檔案 (檔案參考：Local/ Outb 等產品列表)"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::洛杉磯::LAX>L3::主力供應商表::PR",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::洛杉磯::LAX",
    "label": "主力供應商表",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "PR",
    "owner": "Rain/Janice/一登",
    "note": "為利跨部了解各站主力供應商 / 元件 (檔案參考：元件表/合約)"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::溫哥華::YVR>L3::特色產品::FP",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::溫哥華::YVR",
    "label": "特色產品",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "FP",
    "owner": "Rain/Janice/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::溫哥華::YVR>L3::業務窗口::CT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::溫哥華::YVR",
    "label": "業務窗口",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "CT",
    "owner": "Rain/Janice/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::溫哥華::YVR>L3::主力供應商表::PR",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::溫哥華::YVR",
    "label": "主力供應商表",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "PR",
    "owner": "Rain/Janice/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::熊本::KUM>L3::業務窗口::CT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::熊本::KUM",
    "label": "業務窗口",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CT",
    "owner": "市原/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::熊本::KUM>L3::主力供應商表::PR",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::熊本::KUM",
    "label": "主力供應商表",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "PR",
    "owner": "市原/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::雪梨::SYD>L3::業務窗口::CT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::雪梨::SYD",
    "label": "業務窗口",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CT",
    "owner": "Vera/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::雪梨::SYD>L3::特色產品::FP",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::雪梨::SYD",
    "label": "特色產品",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "FP",
    "owner": "Vera/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::雪梨::SYD>L3::主力供應商表::PR",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::雪梨::SYD",
    "label": "主力供應商表",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "PR",
    "owner": "Vera/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::香港::HKG>L3::業務窗口::CT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::香港::HKG",
    "label": "業務窗口",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CT",
    "owner": "Glo/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::香港::HKG>L3::主力供應商表::PR",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::香港::HKG",
    "label": "主力供應商表",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "PR",
    "owner": "Glo/一登"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_機票::TKT>L3::不當訂位規定::DM",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_機票::TKT",
    "label": "不當訂位規定",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "DM",
    "owner": "Shelly"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_機票::TKT>L3::更名作業辦法::NC",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_機票::TKT",
    "label": "更名作業辦法",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "NC",
    "owner": "Shelly"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_機票::TKT>L3::航班異動處理流程::SC",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_機票::TKT",
    "label": "航班異動處理流程",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "SC",
    "owner": "Shelly"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_機票::TKT>L3::票價及退改票規定::FR",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_機票::TKT",
    "label": "票價及退改票規定",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "FR",
    "owner": "Shelly"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_機票::TKT>L3::特殊票種(學生、敬老、外勞、船員)::SP",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_機票::TKT",
    "label": "特殊票種(學生、敬老、外勞、船員)",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "SP",
    "owner": "Shelly",
    "note": "2/9新增資料層，合併原「學生票」、「外籍人士票」"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_機票::TKT>L3::航空公司聯繫方式::AL",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_機票::TKT",
    "label": "航空公司聯繫方式",
    "level": 3,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "AL",
    "owner": "Shelly"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_機票::TKT>L3::教育訓練::TR",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_機票::TKT",
    "label": "教育訓練",
    "level": 3,
    "sortOrder": 7,
    "isSelectable": true,
    "code": "TR",
    "owner": "Shelly"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_票券::ACT>L3::國內票券::TW",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_票券::ACT",
    "label": "國內票券",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TW",
    "owner": "Cini"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_票券::ACT>L3::國際票券::OS",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_票券::ACT",
    "label": "國際票券",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "OS",
    "owner": "Cini"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_票券::ACT>L3::系統作業::SYOP",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_票券::ACT",
    "label": "系統作業",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "SYOP",
    "owner": "Cini"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG>L3::mini tour::MT",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG",
    "label": "mini tour",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "MT",
    "owner": "Winnie"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG>L3::clubmed::CM",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG",
    "label": "clubmed",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "CM",
    "owner": "Winnie"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG>L3::動態自由行::FN",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG",
    "label": "動態自由行",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "FN",
    "owner": "Winnie"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG>L3::團體自由行::GF",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG",
    "label": "團體自由行",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "GF",
    "owner": "Winnie"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG>L3::國內自由行::TF",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG",
    "label": "國內自由行",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "TF",
    "owner": "Winnie"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL>L3::共用::COM",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL",
    "label": "共用",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "COM",
    "owner": "jeff",
    "note": "2/6與jeff確認，新增資料層"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL>L3::國內訂房::TW",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL",
    "label": "國內訂房",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "TW",
    "owner": "一登"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL>L3::國際訂房::GB",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL",
    "label": "國際訂房",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "GB",
    "owner": "一登"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL>L3::團購::GS",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL",
    "label": "團購",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "GS",
    "owner": "一登"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL>L3::教育訓練::TR",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL",
    "label": "教育訓練",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "TR",
    "owner": "一登"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA>L3::認識各國簽證::GEN",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA",
    "label": "認識各國簽證",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "GEN",
    "owner": "Cini"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA>L3::護照及中華民國簽證::TW",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA",
    "label": "護照及中華民國簽證",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "TW",
    "owner": "Cini"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA>L3::歐洲簽證::EU",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA",
    "label": "歐洲簽證",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "EU",
    "owner": "Cini"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA>L3::亞非簽證::AA",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA",
    "label": "亞非簽證",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "AA",
    "owner": "Cini"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA>L3::美加簽證::USACA",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA",
    "label": "美加簽證",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "USACA",
    "owner": "Cini"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA>L3::紐澳簽證::NZAU",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA",
    "label": "紐澳簽證",
    "level": 3,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "NZAU",
    "owner": "Cini"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA>L3::大陸港澳簽證::CN",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA",
    "label": "大陸港澳簽證",
    "level": 3,
    "sortOrder": 7,
    "isSelectable": true,
    "code": "CN",
    "owner": "Cini"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA>L3::東南北亞簽證::SEA",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA",
    "label": "東南北亞簽證",
    "level": 3,
    "sortOrder": 8,
    "isSelectable": true,
    "code": "SEA",
    "owner": "Cini",
    "note": "原東南亞簽證，20260105調整為東南北亞簽證"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA>L3::證照常見問題Q&A::FAQ",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA",
    "label": "證照常見問題Q&A",
    "level": 3,
    "sortOrder": 9,
    "isSelectable": true,
    "code": "FAQ",
    "owner": "Cini"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA>L3::其他::OTR",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_證照::VISA",
    "label": "其他",
    "level": 3,
    "sortOrder": 10,
    "isSelectable": true,
    "code": "OTR",
    "owner": "Cini"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::國旅發展::CD",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT",
    "label": "國旅發展",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CD",
    "owner": "子傑",
    "note": "川總、岳總，外部演講簡報"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::產品知識::PK",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT",
    "label": "產品知識",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "PK",
    "owner": "子傑",
    "note": "景點知識、產品介紹"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::系列::TW4LS",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT",
    "label": "系列",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "TW4LS",
    "owner": "子傑",
    "note": "成本、費用、毛利、售價計算"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::離島::TW4LT",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT",
    "label": "離島",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "TW4LT",
    "owner": "子傑",
    "note": "成本、費用、毛利、售價計算"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT",
    "label": "獎勵旅遊",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "TW4LC",
    "owner": "子傑",
    "note": "成本、費用、毛利、售價計算"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::入境部::TW07",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT",
    "label": "入境部",
    "level": 3,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "TW07",
    "owner": "子傑",
    "note": "成本、費用、毛利、售價計算"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::供應商::SM",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT",
    "label": "供應商",
    "level": 3,
    "sortOrder": 7,
    "isSelectable": true,
    "code": "SM",
    "owner": "子傑",
    "note": "報價、合約、酒店資訊"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::OP作業::OP",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT",
    "label": "OP作業",
    "level": 3,
    "sortOrder": 8,
    "isSelectable": true,
    "code": "OP",
    "owner": "子傑"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT",
    "label": "鐵道",
    "level": 3,
    "sortOrder": 9,
    "isSelectable": true,
    "code": "TW08",
    "owner": "子傑",
    "note": "火車標案計畫書、合約"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::共用::COMM",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1",
    "label": "共用",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "COMM",
    "owner": "維霖",
    "note": "2/9 新增資料層，己torres確認"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::美洲不含小島::AC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1",
    "label": "美洲不含小島",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "AC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::太平洋小島::PA",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1",
    "label": "太平洋小島",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "PA",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大洋洲::AN",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1",
    "label": "大洋洲",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "AN",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::歐洲::EU",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1",
    "label": "歐洲",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "EU",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::亞非::AA",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1",
    "label": "亞非",
    "level": 3,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "AA",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大陸::AS",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1",
    "label": "大陸",
    "level": 3,
    "sortOrder": 7,
    "isSelectable": true,
    "code": "AS",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::港澳珠圳::HM",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1",
    "label": "港澳珠圳",
    "level": 3,
    "sortOrder": 8,
    "isSelectable": true,
    "code": "HM",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞日本::JP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1",
    "label": "東北亞日本",
    "level": 3,
    "sortOrder": 9,
    "isSelectable": true,
    "code": "JP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞韓國::KR",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1",
    "label": "東北亞韓國",
    "level": 3,
    "sortOrder": 10,
    "isSelectable": true,
    "code": "KR",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東南亞::SEA",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1",
    "label": "東南亞",
    "level": 3,
    "sortOrder": 11,
    "isSelectable": true,
    "code": "SEA",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產三::GIT3>L3::專案::PR",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產三::GIT3",
    "label": "專案",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "PR",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產三::GIT3>L3::Q&A::QA",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產三::GIT3",
    "label": "Q&A",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "QA",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產三::GIT3>L3::機密::SC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產三::GIT3",
    "label": "機密",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "SC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::系統流程標準::SP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2",
    "label": "系統流程標準",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "SP",
    "owner": "維霖",
    "note": "系統操作SOP\n內部系統使用指南"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::產品知識和教材::NH",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2",
    "label": "產品知識和教材",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "NH",
    "owner": "維霖",
    "note": "產品介紹\n競品比較\n培訓教材\n銷售話術\nFAQ"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::品牌經營::BM",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2",
    "label": "品牌經營",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "BM",
    "owner": "維霖",
    "note": "品牌發展\n定位與經營"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::行銷營運::MC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2",
    "label": "行銷營運",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "MC",
    "owner": "維霖",
    "note": "宣傳資源\n行銷方案\n促銷計劃"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::合約文件(機密)::CT",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2",
    "label": "合約文件(機密)",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "CT",
    "owner": "維霖",
    "note": "供應商合約\n聯繫方式\n合作條件"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::紀錄文件(機密)::DC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2",
    "label": "紀錄文件(機密)",
    "level": 3,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "DC",
    "owner": "維霖",
    "note": "會議記錄\n結案報告"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::高球::GF",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2",
    "label": "高球",
    "level": 3,
    "sortOrder": 7,
    "isSelectable": true,
    "code": "GF",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::文件表單::DF",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD",
    "label": "文件表單",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "DF",
    "owner": "孟儒",
    "note": "委任契約書/自檢表/個資約定書/交班文件"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::招募任用::RS",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD",
    "label": "招募任用",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "RS",
    "owner": "孟儒",
    "note": "人事資料表/面談評核表"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::員工領隊::ST",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD",
    "label": "員工領隊",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "ST",
    "owner": "孟儒",
    "note": "員工領隊相關"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::教育訓練::TE",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD",
    "label": "教育訓練",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "TE",
    "owner": "孟儒",
    "note": "各線領隊大會/年度領隊大會"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::管理辦法::MR",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD",
    "label": "管理辦法",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "MR",
    "owner": "孟儒",
    "note": "導領帶團作業規範"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::組織::OR",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM",
    "label": "組織",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "OR",
    "owner": "月靈"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::考勤::AT",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM",
    "label": "考勤",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "AT",
    "owner": "Nancy"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::薪酬::SC",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM",
    "label": "薪酬",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "SC",
    "owner": "Nancy"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::員工關係::ER",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM",
    "label": "員工關係",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "ER",
    "owner": "美婷"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::轉調::TR",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM",
    "label": "轉調",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "TR",
    "owner": "胡勁羽",
    "note": "2026/1/14 新增，1/26更新-刪掉第4層"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::人才培育組::TD",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM",
    "label": "人才培育組",
    "level": 3,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "TD",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD>L3::二階文件::OP",
    "parentId": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD",
    "label": "二階文件",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "OP",
    "owner": "Yoyo"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD>L3::三階文件::WI",
    "parentId": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD",
    "label": "三階文件",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "WI",
    "owner": "Yoyo"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD>L3::教育訓練::TD",
    "parentId": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD",
    "label": "教育訓練",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "TD",
    "owner": "Yoyo"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD>L3::永續發展實績::SA",
    "parentId": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD",
    "label": "永續發展實績",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "SA",
    "owner": "Yoyo"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD>L3::永續報告書::SR",
    "parentId": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD",
    "label": "永續報告書",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "SR",
    "owner": "Yoyo"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD>L3::新聞稿::PR",
    "parentId": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD",
    "label": "新聞稿",
    "level": 3,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "PR",
    "owner": "Yoyo"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::法務::LAD>L3::法規::LR",
    "parentId": "L1::雄獅旅遊-管理本部>L2::法務::LAD",
    "label": "法規",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "LR",
    "owner": "芝吟",
    "note": "發展觀光條例\nhttps://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0110001"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::法務::LAD>L3::定型化契約::LSC",
    "parentId": "L1::雄獅旅遊-管理本部>L2::法務::LAD",
    "label": "定型化契約",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "LSC",
    "owner": "芝吟",
    "note": "國外旅遊定型化契約書"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::法務::LAD>L3::內部公版契約::LC",
    "parentId": "L1::雄獅旅遊-管理本部>L2::法務::LAD",
    "label": "內部公版契約",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "LC",
    "owner": "芝吟",
    "note": "合作同意書-團體旅遊契約前預約"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::法務::LAD>L3::外部客戶用表單::LSF",
    "parentId": "L1::雄獅旅遊-管理本部>L2::法務::LAD",
    "label": "外部客戶用表單",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "LSF",
    "owner": "芝吟",
    "note": "單方-肖像權使用同意書-2731"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::法務::LAD>L3::內部作業表單::LWD",
    "parentId": "L1::雄獅旅遊-管理本部>L2::法務::LAD",
    "label": "內部作業表單",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "LWD",
    "owner": "芝吟",
    "note": "用印申請書(雄獅旅遊2731)"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::法務::LAD>L3::作業流程::LSOP",
    "parentId": "L1::雄獅旅遊-管理本部>L2::法務::LAD",
    "label": "作業流程",
    "level": 3,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "LSOP",
    "owner": "芝吟",
    "note": "公司同仁使用AI人工智慧工具注意事項"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::稽核室::AUD>L3::九大循環::CYC",
    "parentId": "L1::雄獅旅遊-管理本部>L2::稽核室::AUD",
    "label": "九大循環",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CYC",
    "owner": "得嘉/高瑞"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::稽核室::AUD>L3::內部控制管理辦法::ICS",
    "parentId": "L1::雄獅旅遊-管理本部>L2::稽核室::AUD",
    "label": "內部控制管理辦法",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "ICS",
    "owner": "得嘉/高瑞"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::稽核室::AUD>L3::核決權限::AAT",
    "parentId": "L1::雄獅旅遊-管理本部>L2::稽核室::AUD",
    "label": "核決權限",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "AAT",
    "owner": "得嘉/高瑞"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::稽核室::AUD>L3::知識分享::KMS",
    "parentId": "L1::雄獅旅遊-管理本部>L2::稽核室::AUD",
    "label": "知識分享",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "KMS",
    "owner": "得嘉/高瑞"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::財務管理::FMD>L3::會計",
    "parentId": "L1::雄獅旅遊-管理本部>L2::財務管理::FMD",
    "label": "會計",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "owner": "厚均"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::財務管理::FMD>L3::財務",
    "parentId": "L1::雄獅旅遊-管理本部>L2::財務管理::FMD",
    "label": "財務",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "owner": "厚均"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::財務管理::FMD>L3::股務",
    "parentId": "L1::雄獅旅遊-管理本部>L2::財務管理::FMD",
    "label": "股務",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "owner": "厚均"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::財務管理::FMD>L3::投資管理",
    "parentId": "L1::雄獅旅遊-管理本部>L2::財務管理::FMD",
    "label": "投資管理",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "owner": "厚均"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::財務管理::FMD>L3::報表組",
    "parentId": "L1::雄獅旅遊-管理本部>L2::財務管理::FMD",
    "label": "報表組",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "owner": "厚均"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::資安暨個資管理室::IPO>L3::一階文件::SI",
    "parentId": "L1::雄獅旅遊-管理本部>L2::資安暨個資管理室::IPO",
    "label": "一階文件",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "SI",
    "owner": "咸蓁"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::資安暨個資管理室::IPO>L3::二階文件::OP",
    "parentId": "L1::雄獅旅遊-管理本部>L2::資安暨個資管理室::IPO",
    "label": "二階文件",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "OP",
    "owner": "咸蓁"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::資安暨個資管理室::IPO>L3::三階文件::WI",
    "parentId": "L1::雄獅旅遊-管理本部>L2::資安暨個資管理室::IPO",
    "label": "三階文件",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "WI",
    "owner": "咸蓁"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::資安暨個資管理室::IPO>L3::四階表單::FM",
    "parentId": "L1::雄獅旅遊-管理本部>L2::資安暨個資管理室::IPO",
    "label": "四階表單",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "FM",
    "owner": "咸蓁"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::資安暨個資管理室::IPO>L3::其他資料::OD",
    "parentId": "L1::雄獅旅遊-管理本部>L2::資安暨個資管理室::IPO",
    "label": "其他資料",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "OD",
    "owner": "咸蓁"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::資安暨個資管理室::IPO>L3::外來文件::ED",
    "parentId": "L1::雄獅旅遊-管理本部>L2::資安暨個資管理室::IPO",
    "label": "外來文件",
    "level": 3,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "ED",
    "owner": "咸蓁"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::集團新人訓::GN",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD",
    "label": "集團新人訓",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "GN",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::管理學院::MG",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD",
    "label": "管理學院",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "MG",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::食旅學院::RT",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD",
    "label": "食旅學院",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "RT",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::通識學院::GE",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD",
    "label": "通識學院",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "GE",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::管本學院::AD",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD",
    "label": "管本學院",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "AD",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::導領學院::TG",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD",
    "label": "導領學院",
    "level": 3,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "TG",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::行銷學院::MK",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD",
    "label": "行銷學院",
    "level": 3,
    "sortOrder": 7,
    "isSelectable": true,
    "code": "MK",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::產品學院::PD",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD",
    "label": "產品學院",
    "level": 3,
    "sortOrder": 8,
    "isSelectable": true,
    "code": "PD",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::銷售學院::SL",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD",
    "label": "銷售學院",
    "level": 3,
    "sortOrder": 9,
    "isSelectable": true,
    "code": "SL",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::作業流程規範::WP>L3::整合行銷作業::IW",
    "parentId": "L1::雄獅旅遊-行銷群>L2::作業流程規範::WP",
    "label": "整合行銷作業",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "IW",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::作業流程規範::WP>L3::數位營運作業::DO",
    "parentId": "L1::雄獅旅遊-行銷群>L2::作業流程規範::WP",
    "label": "數位營運作業",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "DO",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::作業流程規範::WP>L3::會員經營作業::MM",
    "parentId": "L1::雄獅旅遊-行銷群>L2::作業流程規範::WP",
    "label": "會員經營作業",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "MM",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::作業流程規範::WP>L3::視覺設計作業::VD",
    "parentId": "L1::雄獅旅遊-行銷群>L2::作業流程規範::WP",
    "label": "視覺設計作業",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "VD",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::作業流程規範::WP>L3::媒體公關作業::PR",
    "parentId": "L1::雄獅旅遊-行銷群>L2::作業流程規範::WP",
    "label": "媒體公關作業",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "PR",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::專案知識資產::KA>L3::專案執行佈達::PL",
    "parentId": "L1::雄獅旅遊-行銷群>L2::專案知識資產::KA",
    "label": "專案執行佈達",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "PL",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::專案知識資產::KA>L3::專案結案資訊::PI",
    "parentId": "L1::雄獅旅遊-行銷群>L2::專案知識資產::KA",
    "label": "專案結案資訊",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "PI",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::專案知識資產::KA>L3::市場競爭情報::MI",
    "parentId": "L1::雄獅旅遊-行銷群>L2::專案知識資產::KA",
    "label": "市場競爭情報",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "MI",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::策略與績效管理::SP>L3::年度策略與計畫::AP",
    "parentId": "L1::雄獅旅遊-行銷群>L2::策略與績效管理::SP",
    "label": "年度策略與計畫",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "AP",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::策略與績效管理::SP>L3::資源與預算管理::RB",
    "parentId": "L1::雄獅旅遊-行銷群>L2::策略與績效管理::SP",
    "label": "資源與預算管理",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "RB",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::策略與績效管理::SP>L3::目標與指標定義::TM",
    "parentId": "L1::雄獅旅遊-行銷群>L2::策略與績效管理::SP",
    "label": "目標與指標定義",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "TM",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::系統工具管理::DS>L3::內部系統工具::IT",
    "parentId": "L1::雄獅旅遊-行銷群>L2::系統工具管理::DS",
    "label": "內部系統工具",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "IT",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::系統工具管理::DS>L3::外部平台工具::ET",
    "parentId": "L1::雄獅旅遊-行銷群>L2::系統工具管理::DS",
    "label": "外部平台工具",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "ET",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::組織與行政管理::IM>L3::組織與職責規範::OP",
    "parentId": "L1::雄獅旅遊-行銷群>L2::組織與行政管理::IM",
    "label": "組織與職責規範",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "OP",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::組織與行政管理::IM>L3::人員培訓與發展::HR",
    "parentId": "L1::雄獅旅遊-行銷群>L2::組織與行政管理::IM",
    "label": "人員培訓與發展",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "HR",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::組織與行政管理::IM>L3::行政與資安規範::AS",
    "parentId": "L1::雄獅旅遊-行銷群>L2::組織與行政管理::IM",
    "label": "行政與資安規範",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "AS",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-行銷群>L2::組織與行政管理::IM>L3::品牌視覺規範::BS",
    "parentId": "L1::雄獅旅遊-行銷群>L2::組織與行政管理::IM",
    "label": "品牌視覺規範",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "BS",
    "owner": "永智"
  },
  {
    "id": "L1::雄獅旅遊-通路群>L2::企業戶::B2E>L3::獎勵旅遊::MICE",
    "parentId": "L1::雄獅旅遊-通路群>L2::企業戶::B2E",
    "label": "獎勵旅遊",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "MICE",
    "owner": "國煌/俊綱"
  },
  {
    "id": "L1::雄獅旅遊-通路群>L2::企業戶::B2E>L3::公商差旅::BIZ",
    "parentId": "L1::雄獅旅遊-通路群>L2::企業戶::B2E",
    "label": "公商差旅",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "BIZ",
    "owner": "國煌/俊綱"
  },
  {
    "id": "L1::雄獅旅遊-通路群>L2::企業戶::B2E>L3::高階脈絡::VIP",
    "parentId": "L1::雄獅旅遊-通路群>L2::企業戶::B2E",
    "label": "高階脈絡",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "VIP",
    "owner": "國煌/俊綱"
  },
  {
    "id": "L1::雄獅旅遊-通路群>L2::企業戶::B2E>L3::共用::COM",
    "parentId": "L1::雄獅旅遊-通路群>L2::企業戶::B2E",
    "label": "共用",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "COM",
    "owner": "國煌/俊綱"
  },
  {
    "id": "L1::雄獅旅遊-通路群>L2::共用::COMM>L3::作業流程::SOP",
    "parentId": "L1::雄獅旅遊-通路群>L2::共用::COMM",
    "label": "作業流程",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "SOP",
    "owner": "國煌/俊綱"
  },
  {
    "id": "L1::雄獅旅遊-通路群>L2::共用::COMM>L3::案例分享::STUDY",
    "parentId": "L1::雄獅旅遊-通路群>L2::共用::COMM",
    "label": "案例分享",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "STUDY",
    "owner": "國煌/俊綱"
  },
  {
    "id": "L1::雄獅旅遊-通路群>L2::同業::B2B>L3::共用::COMM",
    "parentId": "L1::雄獅旅遊-通路群>L2::同業::B2B",
    "label": "共用",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "COMM",
    "owner": "國煌/俊綱"
  },
  {
    "id": "L1::雄獅旅遊-通路群>L2::直售::B2C>L3::共用::COMM",
    "parentId": "L1::雄獅旅遊-通路群>L2::直售::B2C",
    "label": "共用",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "COMM",
    "owner": "國煌/俊綱"
  },
  {
    "id": "L1::雄獅資訊>L2::API相關::API>L3::API開發規格::ADS",
    "parentId": "L1::雄獅資訊>L2::API相關::API",
    "label": "API開發規格",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "ADS",
    "owner": "安妮"
  },
  {
    "id": "L1::雄獅資訊>L2::API相關::API>L3::API說明文件::APID",
    "parentId": "L1::雄獅資訊>L2::API相關::API",
    "label": "API說明文件",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "APID",
    "owner": "安妮"
  },
  {
    "id": "L1::雄獅資訊>L2::IT內部知識::IT>L3::技術棧及資料流::TSDF",
    "parentId": "L1::雄獅資訊>L2::IT內部知識::IT",
    "label": "技術棧及資料流",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TSDF",
    "owner": "安妮"
  },
  {
    "id": "L1::雄獅資訊>L2::IT內部知識::IT>L3::通用知識文件::GKD",
    "parentId": "L1::雄獅資訊>L2::IT內部知識::IT",
    "label": "通用知識文件",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "GKD",
    "owner": "安妮"
  },
  {
    "id": "L1::雄獅資訊>L2::IT內部知識::IT>L3::供應商系統說明書::VSM",
    "parentId": "L1::雄獅資訊>L2::IT內部知識::IT",
    "label": "供應商系統說明書",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "VSM",
    "owner": "安妮"
  },
  {
    "id": "L1::雄獅資訊>L2::IT內部知識::IT>L3::佈署說明::DG",
    "parentId": "L1::雄獅資訊>L2::IT內部知識::IT",
    "label": "佈署說明",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "DG",
    "owner": "安妮"
  },
  {
    "id": "L1::雄獅資訊>L2::其他::OTR>L3::報價單::QS",
    "parentId": "L1::雄獅資訊>L2::其他::OTR",
    "label": "報價單",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "QS",
    "owner": "安妮"
  },
  {
    "id": "L1::雄獅資訊>L2::其他::OTR>L3::7885客服::HD",
    "parentId": "L1::雄獅資訊>L2::其他::OTR",
    "label": "7885客服",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "HD",
    "owner": "安妮"
  },
  {
    "id": "L1::雄獅資訊>L2::需求規格相關::SPEC>L3::使用者需求規格::URS",
    "parentId": "L1::雄獅資訊>L2::需求規格相關::SPEC",
    "label": "使用者需求規格",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "URS",
    "owner": "安妮"
  },
  {
    "id": "L1::雄獅資訊>L2::需求規格相關::SPEC>L3::IT需求規格::ITRS",
    "parentId": "L1::雄獅資訊>L2::需求規格相關::SPEC",
    "label": "IT需求規格",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "ITRS",
    "owner": "安妮"
  },
  {
    "id": "L1::雄獅通運>L2::內部管理::IM>L3::工作流程制度::WP",
    "parentId": "L1::雄獅通運>L2::內部管理::IM",
    "label": "工作流程制度",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "WP",
    "owner": "伯叡",
    "note": "(SOP文件、內部作業流程)"
  },
  {
    "id": "L1::雄獅通運>L2::內部管理::IM>L3::員工管理::HR",
    "parentId": "L1::雄獅通運>L2::內部管理::IM",
    "label": "員工管理",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "HR",
    "owner": "伯叡",
    "note": "(人事、薪資、考核、獎懲)"
  },
  {
    "id": "L1::雄獅通運>L2::內部管理::IM>L3::財務與法務管理::FL",
    "parentId": "L1::雄獅通運>L2::內部管理::IM",
    "label": "財務與法務管理",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "FL",
    "owner": "伯叡",
    "note": "(成本費用控制、合約審核)"
  },
  {
    "id": "L1::雄獅通運>L2::數據與系統管理::DS>L3::車隊管理系統::FMS",
    "parentId": "L1::雄獅通運>L2::數據與系統管理::DS",
    "label": "車隊管理系統",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "FMS",
    "owner": "伯叡",
    "note": "(IT系統架構、功能模組)"
  },
  {
    "id": "L1::雄獅通運>L2::數據與系統管理::DS>L3::數據分析與報表::DA",
    "parentId": "L1::雄獅通運>L2::數據與系統管理::DS",
    "label": "數據分析與報表",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "DA",
    "owner": "伯叡",
    "note": "(營運績效、行銷分析、成本分析、車輛利用率、人車比)"
  },
  {
    "id": "L1::雄獅通運>L2::數據與系統管理::DS>L3::調度與排班::DS",
    "parentId": "L1::雄獅通運>L2::數據與系統管理::DS",
    "label": "調度與排班",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "DS",
    "owner": "伯叡",
    "note": "(駕駛員調度、車輛派遣)"
  },
  {
    "id": "L1::雄獅通運>L2::數據與系統管理::DS>L3::行車風險與安全管理::RS",
    "parentId": "L1::雄獅通運>L2::數據與系統管理::DS",
    "label": "行車風險與安全管理",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "RS",
    "owner": "伯叡",
    "note": "(即時監測、異常駕駛行為、事故統計、駕駛員行車數據分析、預防管理措施)"
  },
  {
    "id": "L1::雄獅通運>L2::業務管理::BM>L3::供應商管理::SM",
    "parentId": "L1::雄獅通運>L2::業務管理::BM",
    "label": "供應商管理",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "SM",
    "owner": "伯叡",
    "note": "(供應商資格、租賃條件、合作模式)"
  },
  {
    "id": "L1::雄獅通運>L2::業務管理::BM>L3::集團::IC",
    "parentId": "L1::雄獅通運>L2::業務管理::BM",
    "label": "集團",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "IC",
    "owner": "伯叡",
    "note": "(訂單管理、報價、合約)"
  },
  {
    "id": "L1::雄獅通運>L2::業務管理::BM>L3::外部 C+E::EC",
    "parentId": "L1::雄獅通運>L2::業務管理::BM",
    "label": "外部 C+E",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "EC",
    "owner": "伯叡",
    "note": "(行銷、訂單管理、報價、合約)"
  },
  {
    "id": "L1::雄獅通運>L2::業務管理::BM>L3::客戶回饋與優化::CF",
    "parentId": "L1::雄獅通運>L2::業務管理::BM",
    "label": "客戶回饋與優化",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "CF",
    "owner": "伯叡",
    "note": "(服務評估、投訴處理、滿意度改善)"
  },
  {
    "id": "L1::雄獅通運>L2::業務管理::BM>L3::營收與對帳管理::RR",
    "parentId": "L1::雄獅通運>L2::業務管理::BM",
    "label": "營收與對帳管理",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "RR",
    "owner": "伯叡",
    "note": "(財務結算、發票、對帳流程)"
  },
  {
    "id": "L1::雄獅通運>L2::車隊管理::FM>L3::車輛資產管理::FA",
    "parentId": "L1::雄獅通運>L2::車隊管理::FM",
    "label": "車輛資產管理",
    "level": 3,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "FA",
    "owner": "伯叡",
    "note": "(購車、汰車、硬體設備)"
  },
  {
    "id": "L1::雄獅通運>L2::車隊管理::FM>L3::車輛靜態資料::FS",
    "parentId": "L1::雄獅通運>L2::車隊管理::FM",
    "label": "車輛靜態資料",
    "level": 3,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "FS",
    "owner": "伯叡",
    "note": "(車籍、規格、保險、稅費)"
  },
  {
    "id": "L1::雄獅通運>L2::車隊管理::FM>L3::車輛維修與保養::FM",
    "parentId": "L1::雄獅通運>L2::車隊管理::FM",
    "label": "車輛維修與保養",
    "level": 3,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "FM",
    "owner": "伯叡",
    "note": "(定期保養、維修紀錄、零件年限)"
  },
  {
    "id": "L1::雄獅通運>L2::車隊管理::FM>L3::燃油與成本管理::FC",
    "parentId": "L1::雄獅通運>L2::車隊管理::FM",
    "label": "燃油與成本管理",
    "level": 3,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "FC",
    "owner": "伯叡",
    "note": "(油耗監控、加油制度、成本優化)"
  },
  {
    "id": "L1::雄獅通運>L2::車隊管理::FM>L3::駕駛員管理::DM",
    "parentId": "L1::雄獅通運>L2::車隊管理::FM",
    "label": "駕駛員管理",
    "level": 3,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "DM",
    "owner": "伯叡",
    "note": "(培訓、排班、考核、薪資)"
  },
  {
    "id": "L1::雄獅通運>L2::車隊管理::FM>L3::法規遵循::RC",
    "parentId": "L1::雄獅通運>L2::車隊管理::FM",
    "label": "法規遵循",
    "level": 3,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "RC",
    "owner": "伯叡",
    "note": "(道路法規、勞基法)"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::專案管理::PMD>L3::0800早會簡報::0800>L4::2026年::26Y",
    "parentId": "L1::雄獅旅遊-企劃本部>L2::專案管理::PMD>L3::0800早會簡報::0800",
    "label": "2026年",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "26Y",
    "owner": "Eason"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::專案管理::PMD>L3::0800早會簡報::0800>L4::2025年::25Y",
    "parentId": "L1::雄獅旅遊-企劃本部>L2::專案管理::PMD>L3::0800早會簡報::0800",
    "label": "2025年",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "25Y",
    "owner": "Eason"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::專案管理::PMD>L3::0800早會簡報::0800>L4::2024年::24Y",
    "parentId": "L1::雄獅旅遊-企劃本部>L2::專案管理::PMD>L3::0800早會簡報::0800",
    "label": "2024年",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "24Y",
    "owner": "Eason"
  },
  {
    "id": "L1::雄獅旅遊-企劃本部>L2::專案管理::PMD>L3::0800早會簡報::0800>L4::2023年::23Y",
    "parentId": "L1::雄獅旅遊-企劃本部>L2::專案管理::PMD>L3::0800早會簡報::0800",
    "label": "2023年",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "23Y",
    "owner": "Eason"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::共用作業::CO>L4::總務::AGD",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::共用作業::CO",
    "label": "總務",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "AGD",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::共用作業::CO>L4::企劃共用::BAD",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::共用作業::CO",
    "label": "企劃共用",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "BAD",
    "owner": "圓、疄",
    "note": "戰情早會數據、高產航司月會記錄、教育訓練"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::導領部::TLD>L4::出境導領::TLDO",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::導領部::TLD",
    "label": "出境導領",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TLDO",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::導領部::TLD>L4::國旅導領::TLDI",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::導領部::TLD",
    "label": "國旅導領",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "TLDI",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::導領部::TLD>L4::機密文件::TLDSC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::導領部::TLD",
    "label": "機密文件",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "TLDSC",
    "owner": "圓、疄",
    "note": "獎懲管理、福利金管理"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品OP::OP>L4::出境OP::OOP",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品OP::OP",
    "label": "出境OP",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "OOP",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品OP::OP>L4::國旅OP::IOP",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品OP::OP",
    "label": "國旅OP",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "IOP",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品國旅::INB>L4::系列::TW4LS",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品國旅::INB",
    "label": "系列",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TW4LS",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品國旅::INB>L4::離島::TW4LT",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品國旅::INB",
    "label": "離島",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "TW4LT",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品國旅::INB>L4::獎旅::TW4LC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品國旅::INB",
    "label": "獎旅",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "TW4LC",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品國旅::INB>L4::機密文件::INBSC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品國旅::INB",
    "label": "機密文件",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "INBSC",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品國旅::INB>L4::鐵道::TW08",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品國旅::INB",
    "label": "鐵道",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "TW08",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品大陸線::AS>L4::TP::ASTP",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品大陸線::AS",
    "label": "TP",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "ASTP",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品大陸線::AS>L4::RC::ASRC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品大陸線::AS",
    "label": "RC",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "ASRC",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品大陸線::AS>L4::機密文件::ASSC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品大陸線::AS",
    "label": "機密文件",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "ASSC",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品日本線::JP>L4::TP::JPTP",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品日本線::JP",
    "label": "TP",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "JPTP",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品日本線::JP>L4::RC::JPRC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品日本線::JP",
    "label": "RC",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "JPRC",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品日本線::JP>L4::手配::JPAM",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品日本線::JP",
    "label": "手配",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "JPAM",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品日本線::JP>L4::機密文件::JPSC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品日本線::JP",
    "label": "機密文件",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "JPSC",
    "owner": "圓、疄",
    "note": "經營資料、成本、供應商合約、LOCAL報價"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品東南亞線::SEA>L4::TP::SEATP",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品東南亞線::SEA",
    "label": "TP",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "SEATP",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品東南亞線::SEA>L4::RC::SEARC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品東南亞線::SEA",
    "label": "RC",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "SEARC",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品東南亞線::SEA>L4::機密文件::SEASC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品東南亞線::SEA",
    "label": "機密文件",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "SEASC",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品歐洲線(高出)::EU>L4::TP::EUTP",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品歐洲線(高出)::EU",
    "label": "TP",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "EUTP",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品歐洲線(高出)::EU>L4::RC::EURC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品歐洲線(高出)::EU",
    "label": "RC",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "EURC",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品歐洲線(高出)::EU>L4::機密文件::EUSC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品歐洲線(高出)::EU",
    "label": "機密文件",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "EUSC",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品自由行::PKG>L4::日韓其他::PKG1",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品自由行::PKG",
    "label": "日韓其他",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "PKG1",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品自由行::PKG>L4::港澳珠圳::PKG2",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品自由行::PKG",
    "label": "港澳珠圳",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "PKG2",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品自由行::PKG>L4::機密文件::PKGSC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品自由行::PKG",
    "label": "機密文件",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "PKGSC",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品韓國線::KR>L4::TP::KRTP",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品韓國線::KR",
    "label": "TP",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "KRTP",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品韓國線::KR>L4::RC::KRRC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品韓國線::KR",
    "label": "RC",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "KRRC",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品韓國線::KR>L4::機密文件::KRSC",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::產品韓國線::KR",
    "label": "機密文件",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "KRSC",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::行銷::MK>L4::產品行銷::MKOB",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::行銷::MK",
    "label": "產品行銷",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "MKOB",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::行銷::MK>L4::國旅行銷::MKIN",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::行銷::MK",
    "label": "國旅行銷",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "MKIN",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::通路::SC>L4::直售::B2C",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::通路::SC",
    "label": "直售",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "B2C",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::通路::SC>L4::批售::B2B",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::通路::SC",
    "label": "批售",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "B2B",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::通路::SC>L4::企服::B2E",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::通路::SC",
    "label": "企服",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "B2E",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::通路::SC>L4::公商差旅::BIZ",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::通路::SC",
    "label": "公商差旅",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "BIZ",
    "owner": "圓、疄"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::通路::SC>L4::共用資料::COM",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::南高屏塊狀::KHH>L3::通路::SC",
    "label": "共用資料",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "COM",
    "owner": "圓、疄",
    "note": "旅展數據、教育訓練"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH>L3::產品::PD>L4::中產教育訓練::TR",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH>L3::產品::PD",
    "label": "中產教育訓練",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TR",
    "owner": "育華"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH>L3::產品::PD>L4::中產航線表::AL",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH>L3::產品::PD",
    "label": "中產航線表",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "AL",
    "owner": "育華"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH>L3::產品::PD>L4::中產採線分享::TP",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH>L3::產品::PD",
    "label": "中產採線分享",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "TP",
    "owner": "育華"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH>L3::通路::SC>L4::專案::PR",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::大台中塊狀::TCH>L3::通路::SC",
    "label": "專案",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "PR",
    "owner": "育華"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO>L3::共用作業::CO>L4::企劃共用::PL",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO>L3::共用作業::CO",
    "label": "企劃共用",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "PL",
    "owner": "Max"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO>L3::共用作業::CO>L4::財會/總務資料留存::FI",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO>L3::共用作業::CO",
    "label": "財會/總務資料留存",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "FI",
    "owner": "Max"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO>L3::產品::PD>L4::教育訓練::PTR",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO>L3::產品::PD",
    "label": "教育訓練",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "PTR",
    "owner": "Max"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO>L3::產品::PD>L4::供應商資料::SP",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO>L3::產品::PD",
    "label": "供應商資料",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "SP",
    "owner": "Max"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO>L3::通路::SC>L4::專案::PJ",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO>L3::通路::SC",
    "label": "專案",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "PJ",
    "owner": "Max"
  },
  {
    "id": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO>L3::通路::SC>L4::教育訓練::STR",
    "parentId": "L1::雄獅旅遊-台灣塊狀>L2::桃竹苗塊狀::TAO>L3::通路::SC",
    "label": "教育訓練",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "STR",
    "owner": "Max"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::倫敦::LON>L3::主力供應商表::PR>L4::元件::FIT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::倫敦::LON>L3::主力供應商表::PR",
    "label": "元件",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "FIT",
    "owner": "Vera/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::年度目標計畫::YP>L4::2025目標::25TA",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::年度目標計畫::YP",
    "label": "2025目標",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "25TA",
    "owner": "一登",
    "note": "為利跨部了解海外公司各區年度目標計畫 (檔案參考：年度計畫總表)\n#2/25己與Janice確認新增資料層"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::年度目標計畫::YP>L4::2026目標::26TA",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::年度目標計畫::YP",
    "label": "2026目標",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "26TA",
    "note": "#2/25己與Janice確認新增資料層"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::流程梳理::PR>L4::中國大陸_中國大陸公司四站作業流程圖::CN",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::流程梳理::PR",
    "label": "中國大陸_中國大陸公司四站作業流程圖",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CN"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::流程梳理::PR>L4::日本_Coach tour kk上架流程::CT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::流程梳理::PR",
    "label": "日本_Coach tour kk上架流程",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "CT"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::流程梳理::PR>L4::北美_旅展報名流程::NA",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::流程梳理::PR",
    "label": "北美_旅展報名流程",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "NA"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::流程梳理::PR>L4::全球票產系統生態圖::GL",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::流程梳理::PR",
    "label": "全球票產系統生態圖",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "GL"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::璽品專案::ST>L4::教育訓練::PT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::公用作業::SPD>L3::璽品專案::ST",
    "label": "教育訓練",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "PT",
    "owner": "一登",
    "note": "說明：未來各站皆有可能推行喜品專案，因此歸檔公用作業"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::奧克蘭::AKL>L3::主力供應商表::PR>L4::元件::FIT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::奧克蘭::AKL>L3::主力供應商表::PR",
    "label": "元件",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "FIT",
    "owner": "Vera/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::曼谷::BKK>L3::主力供應商表::PR>L4::元件::FIT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::曼谷::BKK>L3::主力供應商表::PR",
    "label": "元件",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "FIT",
    "owner": "Bonnie/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::東京::TYO>L3::主力供應商表::PR>L4::元件::FIT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::東京::TYO>L3::主力供應商表::PR",
    "label": "元件",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "FIT",
    "owner": "Tiffany/市原/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::沖繩::OKA>L3::主力供應商表::PR>L4::元件::FIT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::沖繩::OKA>L3::主力供應商表::PR",
    "label": "元件",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "FIT",
    "owner": "Tiffany/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::洛杉磯::LAX>L3::主力供應商表::PR>L4::元件::FIT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::洛杉磯::LAX>L3::主力供應商表::PR",
    "label": "元件",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "FIT",
    "owner": "Rain/Janice/一登",
    "note": "為利跨部了解各站主力供應商 / 元件 (檔案參考：元件表/合約)"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::溫哥華::YVR>L3::主力供應商表::PR>L4::元件::FIT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::溫哥華::YVR>L3::主力供應商表::PR",
    "label": "元件",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "FIT",
    "owner": "Rain/Janice/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::熊本::KUM>L3::主力供應商表::PR>L4::元件::FIT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::熊本::KUM>L3::主力供應商表::PR",
    "label": "元件",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "FIT",
    "owner": "市原/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::雪梨::SYD>L3::主力供應商表::PR>L4::元件::FIT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::雪梨::SYD>L3::主力供應商表::PR",
    "label": "元件",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "FIT",
    "owner": "Vera/一登"
  },
  {
    "id": "L1::雄獅旅遊-海外塊狀>L2::香港::HKG>L3::主力供應商表::PR>L4::元件::FIT",
    "parentId": "L1::雄獅旅遊-海外塊狀>L2::香港::HKG>L3::主力供應商表::PR",
    "label": "元件",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "FIT",
    "owner": "Glo/一登"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG>L3::國內自由行::TF>L4::火車::TRA",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG>L3::國內自由行::TF",
    "label": "火車",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TRA",
    "owner": "Winnie",
    "note": "2/10與Winnie確認，新增資料層"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG>L3::國內自由行::TF>L4::租車::CAR",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG>L3::國內自由行::TF",
    "label": "租車",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "CAR",
    "owner": "Winnie",
    "note": "2/10與Winnie確認，新增資料層"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG>L3::國內自由行::TF>L4::航空::AIR",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG>L3::國內自由行::TF",
    "label": "航空",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "AIR",
    "owner": "Winnie",
    "note": "2/10與Winnie確認，新增資料層"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG>L3::國內自由行::TF>L4::高鐵::HSR",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_自由行::PKG>L3::國內自由行::TF",
    "label": "高鐵",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "HSR",
    "owner": "Winnie",
    "note": "2/10與Winnie確認，新增資料層"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL>L3::國內訂房::TW>L4::主力酒店::MF",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL>L3::國內訂房::TW",
    "label": "主力酒店",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "MF",
    "owner": "一登"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL>L3::國內訂房::TW>L4::供應商合約::SR",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL>L3::國內訂房::TW",
    "label": "供應商合約",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "SR",
    "owner": "一登"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL>L3::國際訂房::GB>L4::主力酒店::MF",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL>L3::國際訂房::GB",
    "label": "主力酒店",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "MF",
    "owner": "一登"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL>L3::國際訂房::GB>L4::供應商合約::SR",
    "parentId": "L1::雄獅旅遊-產品群>L2::FIT元件_訂房::HTL>L3::國際訂房::GB",
    "label": "供應商合約",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "SR",
    "owner": "一登"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::OP作業::OP>L4::國旅OP操作流程與注意事項::TR",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::OP作業::OP",
    "label": "國旅OP操作流程與注意事項",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TR",
    "owner": "子傑"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::OP作業::OP>L4::團體支單簽核流程::SOP",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::OP作業::OP",
    "label": "團體支單簽核流程",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "SOP",
    "owner": "子傑",
    "note": "國旅入境團體支單簽核流程"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::供應商::SM>L4::酒店(機密)::HTL",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::供應商::SM",
    "label": "酒店(機密)",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "HTL",
    "owner": "子傑",
    "note": "報價、合約、酒店資訊"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::供應商::SM>L4::稀缺元件::SC",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::供應商::SM",
    "label": "稀缺元件",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "SC",
    "owner": "子傑",
    "note": "關鍵元件"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::供應商::SM>L4::航空資源::AL",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::供應商::SM",
    "label": "航空資源",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "AL",
    "owner": "子傑",
    "note": "票價、航班資訊、機位數使用"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::供應商::SM>L4::其他元件::OTR",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::供應商::SM",
    "label": "其他元件",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "OTR",
    "owner": "子傑",
    "note": "餐車景導元件供應商資訊"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::入境部::TW07>L4::成本結構(機密)::CS",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::入境部::TW07",
    "label": "成本結構(機密)",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CS",
    "owner": "子傑",
    "note": "成本、費用、毛利、售價計算"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::入境部::TW07>L4::產品設計實務::TP",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::入境部::TW07",
    "label": "產品設計實務",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "TP",
    "owner": "子傑",
    "note": "作業流程"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::入境部::TW07>L4::業務開發實務::RC",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::入境部::TW07",
    "label": "業務開發實務",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "RC",
    "owner": "子傑",
    "note": "業務種類、語系分類"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::入境部::TW07>L4::行程表::PR",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::入境部::TW07",
    "label": "行程表",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "PR",
    "owner": "子傑"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::入境部::TW07>L4::教育訓練::TR",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::入境部::TW07",
    "label": "教育訓練",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "TR",
    "owner": "子傑",
    "note": "訓練文件、簡報、檔案"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::入境部::TW07>L4::業務所需文件::BD",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::入境部::TW07",
    "label": "業務所需文件",
    "level": 4,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "BD",
    "owner": "子傑",
    "note": "業務需要的表單"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::入境部::TW07>L4::交通載具::BS",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::入境部::TW07",
    "label": "交通載具",
    "level": 4,
    "sortOrder": 7,
    "isSelectable": true,
    "code": "BS",
    "owner": "子傑",
    "note": "各種交通說明"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::國旅發展::CD>L4::外部資料::OSB",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::國旅發展::CD",
    "label": "外部資料",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "OSB",
    "owner": "子傑",
    "note": "川總、岳總，外部演講簡報"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::國旅發展::CD>L4::內部資料::ISB",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::國旅發展::CD",
    "label": "內部資料",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "ISB",
    "owner": "子傑",
    "note": "川總、岳總，內部演講簡報"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::國旅發展::CD>L4::國旅組織介紹::NO",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::國旅發展::CD",
    "label": "國旅組織介紹",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "NO",
    "owner": "子傑",
    "note": "國旅各部門組織結構"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC>L4::成本結構(機密)::CS",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC",
    "label": "成本結構(機密)",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CS",
    "owner": "子傑",
    "note": "成本、費用、毛利、售價計算"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC>L4::TP實務::TP",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC",
    "label": "TP實務",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "TP",
    "owner": "子傑",
    "note": "作業流程、上架流程"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC>L4::業務實務::RC",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC",
    "label": "業務實務",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "RC",
    "owner": "子傑",
    "note": "作業流程"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC>L4::產銷對接流程::PS",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC",
    "label": "產銷對接流程",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "PS",
    "owner": "子傑",
    "note": "作業流程"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC>L4::行程表_一日遊::PR1",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC",
    "label": "行程表_一日遊",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "PR1",
    "owner": "子傑"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC>L4::行程表_二日遊::PR2",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC",
    "label": "行程表_二日遊",
    "level": 4,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "PR2",
    "owner": "子傑"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC>L4::行程表_三日遊::PR3",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC",
    "label": "行程表_三日遊",
    "level": 4,
    "sortOrder": 7,
    "isSelectable": true,
    "code": "PR3",
    "owner": "子傑"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC>L4::行程表_環島與三日遊以上::PR4",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC",
    "label": "行程表_環島與三日遊以上",
    "level": 4,
    "sortOrder": 8,
    "isSelectable": true,
    "code": "PR4",
    "owner": "子傑"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC>L4::教育訓練::TR",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC",
    "label": "教育訓練",
    "level": 4,
    "sortOrder": 9,
    "isSelectable": true,
    "code": "TR",
    "owner": "子傑",
    "note": "訓練文件、簡報、檔案"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC>L4::業務所需文件::BD",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::獎勵旅遊::TW4LC",
    "label": "業務所需文件",
    "level": 4,
    "sortOrder": 10,
    "isSelectable": true,
    "code": "BD",
    "owner": "子傑",
    "note": "業務需要的表單"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::產品知識::PK>L4::北北基::TNK",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::產品知識::PK",
    "label": "北北基",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TNK",
    "owner": "子傑",
    "note": "景點知識、產品介紹"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::產品知識::PK>L4::桃竹苗::THM",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::產品知識::PK",
    "label": "桃竹苗",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "THM",
    "owner": "子傑",
    "note": "景點知識、產品介紹"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::產品知識::PK>L4::中彰投::TCN",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::產品知識::PK",
    "label": "中彰投",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "TCN",
    "owner": "子傑",
    "note": "景點知識、產品介紹"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::產品知識::PK>L4::雲嘉南::TCT",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::產品知識::PK",
    "label": "雲嘉南",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "TCT",
    "owner": "子傑",
    "note": "景點知識、產品介紹"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::產品知識::PK>L4::高屏::KP",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::產品知識::PK",
    "label": "高屏",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "KP",
    "owner": "子傑",
    "note": "景點知識、產品介紹"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::產品知識::PK>L4::宜花東::YHT",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::產品知識::PK",
    "label": "宜花東",
    "level": 4,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "YHT",
    "owner": "子傑",
    "note": "景點知識、產品介紹"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::產品知識::PK>L4::離島::PKL",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::產品知識::PK",
    "label": "離島",
    "level": 4,
    "sortOrder": 7,
    "isSelectable": true,
    "code": "PKL",
    "owner": "子傑",
    "note": "景點知識、產品介紹"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::系列::TW4LS>L4::成本結構(機密)::CS",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::系列::TW4LS",
    "label": "成本結構(機密)",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CS",
    "owner": "子傑",
    "note": "成本、費用、毛利、售價計算"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::系列::TW4LS>L4::TPRC實務::TP",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::系列::TW4LS",
    "label": "TPRC實務",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "TP",
    "owner": "子傑",
    "note": "作業流程、上架流程\n#2/24調整為TP、RC實務合併。調整為TPRC實務"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::系列::TW4LS>L4::標案專案::JWI",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::系列::TW4LS",
    "label": "標案專案",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "JWI",
    "owner": "子傑",
    "note": "標案/專案資訊、條件、數據\n#2/24調整為標案、專案資料夾合併。調整為標案專案。"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::標案合約::SR",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "標案合約",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "SR",
    "owner": "子傑",
    "note": "火車標案計畫書、合約"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::列車規劃::TO",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "列車規劃",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "TO",
    "owner": "子傑",
    "note": "供應商、票價設定、開行路線與區間"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::火車資料::TR",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "火車資料",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "TR",
    "owner": "子傑",
    "note": "火車介紹、導領教育訓練"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::產品設計::PD",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "產品設計",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "PD",
    "owner": "子傑",
    "note": "產品包裝、包列、策展"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::TP實務::TP",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "TP實務",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "TP",
    "owner": "子傑",
    "note": "作業流程、上架流程、開團規則"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::RC實務::RC",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "RC實務",
    "level": 4,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "RC",
    "owner": "子傑",
    "note": "作業流程"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::專案::PR",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "專案",
    "level": 4,
    "sortOrder": 7,
    "isSelectable": true,
    "code": "PR",
    "owner": "子傑",
    "note": "專案內容/行程資料/數字效益"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::火車位控管理::RS",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "火車位控管理",
    "level": 4,
    "sortOrder": 8,
    "isSelectable": true,
    "code": "RS",
    "owner": "子傑",
    "note": "火車控位、配位、取消、規則"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::鐵道服務體驗::TS",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "鐵道服務體驗",
    "level": 4,
    "sortOrder": 9,
    "isSelectable": true,
    "code": "TS",
    "owner": "子傑",
    "note": "車上服務體驗流程"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::場域::SP",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "場域",
    "level": 4,
    "sortOrder": 10,
    "isSelectable": true,
    "code": "SP",
    "owner": "子傑",
    "note": "門市、禮賓候車室、藍皮意象館"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::台鐵::TWX",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "台鐵",
    "level": 4,
    "sortOrder": 11,
    "isSelectable": true,
    "code": "TWX",
    "owner": "子傑",
    "note": "台鐵收發公文、營運事宜相關"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::台鐵經營資料(機密)::TRC",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "台鐵經營資料(機密)",
    "level": 4,
    "sortOrder": 12,
    "isSelectable": true,
    "code": "TRC",
    "owner": "子傑",
    "note": "每月經營月報、服務品質報告"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::林鐵::FR",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "林鐵",
    "level": 4,
    "sortOrder": 13,
    "isSelectable": true,
    "code": "FR",
    "owner": "子傑",
    "note": "林鐵收發公文、營運事宜相關"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::林鐵經營資料(機密)::FRC",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "林鐵經營資料(機密)",
    "level": 4,
    "sortOrder": 14,
    "isSelectable": true,
    "code": "FRC",
    "owner": "子傑",
    "note": "每月經營月報、服務品質報告"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::成本結構(機密)::CS",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "成本結構(機密)",
    "level": 4,
    "sortOrder": 15,
    "isSelectable": true,
    "code": "CS",
    "owner": "子傑",
    "note": "成本、費用、毛利、售價計算"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::供應商合約(機密)::CT",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "供應商合約(機密)",
    "level": 4,
    "sortOrder": 16,
    "isSelectable": true,
    "code": "CT",
    "owner": "子傑",
    "note": "餐飲供應商、硬體供應商"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08>L4::紀錄文件(機密)::DC",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::鐵道::TW08",
    "label": "紀錄文件(機密)",
    "level": 4,
    "sortOrder": 17,
    "isSelectable": true,
    "code": "DC",
    "owner": "子傑",
    "note": "會議記錄"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::離島::TW4LT>L4::成本結構(機密)::CS",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::離島::TW4LT",
    "label": "成本結構(機密)",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CS",
    "owner": "子傑",
    "note": "成本、費用、毛利、售價計算"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::離島::TW4LT>L4::TP實務::TP",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::離島::TW4LT",
    "label": "TP實務",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "TP",
    "owner": "子傑",
    "note": "作業流程、上架流程"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::離島::TW4LT>L4::RC實務::RC",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::離島::TW4LT",
    "label": "RC實務",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "RC",
    "owner": "子傑",
    "note": "作業流程"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::離島::TW4LT>L4::專案::PR",
    "parentId": "L1::雄獅旅遊-產品群>L2::GIT團產_泛國旅入境鐵道::DT>L3::離島::TW4LT",
    "label": "專案",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "PR",
    "owner": "子傑",
    "note": "專案內容/行程資料/數字效益"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::亞非::AA>L4::TP::TP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::亞非::AA",
    "label": "TP",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::亞非::AA>L4::RC::RC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::亞非::AA",
    "label": "RC",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "RC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::亞非::AA>L4::OP::OP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::亞非::AA",
    "label": "OP",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "OP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::亞非::AA>L4::機密::SC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::亞非::AA",
    "label": "機密",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "SC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大洋洲::AN>L4::TP::TP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大洋洲::AN",
    "label": "TP",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大洋洲::AN>L4::RC::RC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大洋洲::AN",
    "label": "RC",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "RC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大洋洲::AN>L4::OP::OP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大洋洲::AN",
    "label": "OP",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "OP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大洋洲::AN>L4::機密::SC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大洋洲::AN",
    "label": "機密",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "SC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大洋洲::AN>L4::共用::COMM",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大洋洲::AN",
    "label": "共用",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "COMM",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大陸::AS>L4::TP::TP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大陸::AS",
    "label": "TP",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大陸::AS>L4::RC::RC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大陸::AS",
    "label": "RC",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "RC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大陸::AS>L4::OP::OP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大陸::AS",
    "label": "OP",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "OP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大陸::AS>L4::機密::SC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::大陸::AS",
    "label": "機密",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "SC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::太平洋小島::PA>L4::TP::TP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::太平洋小島::PA",
    "label": "TP",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::太平洋小島::PA>L4::RC::RC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::太平洋小島::PA",
    "label": "RC",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "RC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::太平洋小島::PA>L4::OP::OP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::太平洋小島::PA",
    "label": "OP",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "OP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::太平洋小島::PA>L4::機密::SC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::太平洋小島::PA",
    "label": "機密",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "SC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞日本::JP>L4::TP::TP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞日本::JP",
    "label": "TP",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞日本::JP>L4::RC::RC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞日本::JP",
    "label": "RC",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "RC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞日本::JP>L4::OP::OP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞日本::JP",
    "label": "OP",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "OP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞日本::JP>L4::手配::PL",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞日本::JP",
    "label": "手配",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "PL",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞日本::JP>L4::機密::SC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞日本::JP",
    "label": "機密",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "SC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞韓國::KR>L4::TP::TP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞韓國::KR",
    "label": "TP",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞韓國::KR>L4::RC::RC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞韓國::KR",
    "label": "RC",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "RC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞韓國::KR>L4::OP::OP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞韓國::KR",
    "label": "OP",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "OP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞韓國::KR>L4::機密::SC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東北亞韓國::KR",
    "label": "機密",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "SC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東南亞::SEA>L4::TP::TP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東南亞::SEA",
    "label": "TP",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東南亞::SEA>L4::RC::RC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東南亞::SEA",
    "label": "RC",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "RC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東南亞::SEA>L4::OP::OP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東南亞::SEA",
    "label": "OP",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "OP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東南亞::SEA>L4::機密::SC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::東南亞::SEA",
    "label": "機密",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "SC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::歐洲::EU>L4::TP::TP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::歐洲::EU",
    "label": "TP",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::歐洲::EU>L4::RC::RC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::歐洲::EU",
    "label": "RC",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "RC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::歐洲::EU>L4::OP::OP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::歐洲::EU",
    "label": "OP",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "OP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::歐洲::EU>L4::機密::SC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::歐洲::EU",
    "label": "機密",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "SC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::港澳珠圳::HM>L4::TP::TP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::港澳珠圳::HM",
    "label": "TP",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::港澳珠圳::HM>L4::RC::RC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::港澳珠圳::HM",
    "label": "RC",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "RC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::港澳珠圳::HM>L4::OP::OP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::港澳珠圳::HM",
    "label": "OP",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "OP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::港澳珠圳::HM>L4::機密::SC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::港澳珠圳::HM",
    "label": "機密",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "SC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::美洲不含小島::AC>L4::TP::TP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::美洲不含小島::AC",
    "label": "TP",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::美洲不含小島::AC>L4::RC::RC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::美洲不含小島::AC",
    "label": "RC",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "RC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::美洲不含小島::AC>L4::OP::OP",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::美洲不含小島::AC",
    "label": "OP",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "OP",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::美洲不含小島::AC>L4::機密::SC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產一::GIT1>L3::美洲不含小島::AC",
    "label": "機密",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "SC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::合約文件(機密)::CT>L4::璽品::CTS",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::合約文件(機密)::CT",
    "label": "璽品",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "CTS",
    "owner": "維霖",
    "note": "供應商合約\n聯繫方式\n合作條件"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::合約文件(機密)::CT>L4::郵輪::CTC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::合約文件(機密)::CT",
    "label": "郵輪",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "CTC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::合約文件(機密)::CT>L4::運動::CTW",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::合約文件(機密)::CT",
    "label": "運動",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "CTW",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::合約文件(機密)::CT>L4::中南美::CTM",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::合約文件(機密)::CT",
    "label": "中南美",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "CTM",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::合約文件(機密)::CT>L4::主題客製::CTJ",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::合約文件(機密)::CT",
    "label": "主題客製",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "CTJ",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::合約文件(機密)::CT>L4::鐵道::CTR",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::合約文件(機密)::CT",
    "label": "鐵道",
    "level": 4,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "CTR",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::品牌經營::BM>L4::璽品::BMS",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::品牌經營::BM",
    "label": "璽品",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "BMS",
    "owner": "維霖",
    "note": "品牌發展\n定位與經營"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::品牌經營::BM>L4::郵輪::BMC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::品牌經營::BM",
    "label": "郵輪",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "BMC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::品牌經營::BM>L4::運動::BMW",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::品牌經營::BM",
    "label": "運動",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "BMW",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::品牌經營::BM>L4::中南美::BMM",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::品牌經營::BM",
    "label": "中南美",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "BMM",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::品牌經營::BM>L4::鐵道::BMR",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::品牌經營::BM",
    "label": "鐵道",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "BMR",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::產品知識和教材::NH>L4::璽品::NHS",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::產品知識和教材::NH",
    "label": "璽品",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "NHS",
    "owner": "維霖",
    "note": "產品介紹\n競品比較\n培訓教材\n銷售話術\nFAQ"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::產品知識和教材::NH>L4::郵輪::NHC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::產品知識和教材::NH",
    "label": "郵輪",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "NHC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::產品知識和教材::NH>L4::運動::NHW",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::產品知識和教材::NH",
    "label": "運動",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "NHW",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::產品知識和教材::NH>L4::中南美::NHM",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::產品知識和教材::NH",
    "label": "中南美",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "NHM",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::產品知識和教材::NH>L4::主題客製::NHJ",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::產品知識和教材::NH",
    "label": "主題客製",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "NHJ",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::產品知識和教材::NH>L4::鐵道::NHR",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::產品知識和教材::NH",
    "label": "鐵道",
    "level": 4,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "NHR",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::系統流程標準::SP>L4::璽品::SPS",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::系統流程標準::SP",
    "label": "璽品",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "SPS",
    "owner": "維霖",
    "note": "系統操作SOP\n內部系統使用指南"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::系統流程標準::SP>L4::郵輪::SPC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::系統流程標準::SP",
    "label": "郵輪",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "SPC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::系統流程標準::SP>L4::運動::SPW",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::系統流程標準::SP",
    "label": "運動",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "SPW",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::系統流程標準::SP>L4::中南美::SPM",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::系統流程標準::SP",
    "label": "中南美",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "SPM",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::系統流程標準::SP>L4::主題客製::SPJ",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::系統流程標準::SP",
    "label": "主題客製",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "SPJ",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::系統流程標準::SP>L4::主題OP::SPO",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::系統流程標準::SP",
    "label": "主題OP",
    "level": 4,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "SPO",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::系統流程標準::SP>L4::鐵道::SPR",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::系統流程標準::SP",
    "label": "鐵道",
    "level": 4,
    "sortOrder": 7,
    "isSelectable": true,
    "code": "SPR",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::紀錄文件(機密)::DC>L4::璽品::DCS",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::紀錄文件(機密)::DC",
    "label": "璽品",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "DCS",
    "owner": "維霖",
    "note": "會議記錄\n結案報告"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::紀錄文件(機密)::DC>L4::郵輪::DCC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::紀錄文件(機密)::DC",
    "label": "郵輪",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "DCC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::紀錄文件(機密)::DC>L4::運動::DCW",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::紀錄文件(機密)::DC",
    "label": "運動",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "DCW",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::紀錄文件(機密)::DC>L4::中南美::DCM",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::紀錄文件(機密)::DC",
    "label": "中南美",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "DCM",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::紀錄文件(機密)::DC>L4::主題客製::DCJ",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::紀錄文件(機密)::DC",
    "label": "主題客製",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "DCJ",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::紀錄文件(機密)::DC>L4::鐵道::DCR",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::紀錄文件(機密)::DC",
    "label": "鐵道",
    "level": 4,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "DCR",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::行銷營運::MC>L4::璽品::MCS",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::行銷營運::MC",
    "label": "璽品",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "MCS",
    "owner": "維霖",
    "note": "宣傳資源\n行銷方案\n促銷計劃"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::行銷營運::MC>L4::郵輪::MCC",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::行銷營運::MC",
    "label": "郵輪",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "MCC",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::行銷營運::MC>L4::運動::MCW",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::行銷營運::MC",
    "label": "運動",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "MCW",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::行銷營運::MC>L4::中南美::MCM",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::行銷營運::MC",
    "label": "中南美",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "MCM",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::高球::GF>L4::高球產品::GF1",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::高球::GF",
    "label": "高球產品",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "GF1",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::高球::GF>L4::客製產品::GF2",
    "parentId": "L1::雄獅旅遊-產品群>L2::團產OUTB_產二::GIT2>L3::高球::GF",
    "label": "客製產品",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "GF2",
    "owner": "維霖"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::招募任用::RS>L4::ˋ",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::招募任用::RS",
    "label": "ˋ",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "owner": "孟儒",
    "note": "人事資料表/面談評核表"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::教育訓練::TE>L4::領隊會議::TM",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::教育訓練::TE",
    "label": "領隊會議",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TM",
    "owner": "孟儒",
    "note": "各線領隊大會/年度領隊大會"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::教育訓練::TE>L4::基礎課程::BC",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::教育訓練::TE",
    "label": "基礎課程",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "BC",
    "owner": "孟儒",
    "note": "課程教材"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::教育訓練::TE>L4::通識課程::GE",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::教育訓練::TE",
    "label": "通識課程",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "GE",
    "owner": "孟儒"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::教育訓練::TE>L4::職能精進::SE",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::教育訓練::TE",
    "label": "職能精進",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "SE",
    "owner": "孟儒"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::教育訓練::TE>L4::職能發展::CD",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::教育訓練::TE",
    "label": "職能發展",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "CD",
    "owner": "孟儒"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::管理辦法::MR>L4::帶團作業規範::TG",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::管理辦法::MR",
    "label": "帶團作業規範",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TG",
    "owner": "孟儒",
    "note": "導領帶團作業規範"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::管理辦法::MR>L4::招募任用管理::RM",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::管理辦法::MR",
    "label": "招募任用管理",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "RM",
    "owner": "孟儒",
    "note": "導領人員之招募、任用之管理標準"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::管理辦法::MR>L4::福利金管理::WF",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::管理辦法::MR",
    "label": "福利金管理",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "WF",
    "owner": "孟儒",
    "note": "專任導領福利金收取與應用"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::管理辦法::MR>L4::獎懲管理::RD",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::管理辦法::MR",
    "label": "獎懲管理",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "RD",
    "owner": "孟儒",
    "note": "表揚優秀導領人員及規範須改善的導領人員"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::管理辦法::MR>L4::導領人員跨線管理辦法::CL",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::管理辦法::MR",
    "label": "導領人員跨線管理辦法",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "CL",
    "owner": "孟儒",
    "note": "使領隊更多元化發展，並提升人力調度彈性"
  },
  {
    "id": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::管理辦法::MR>L4::導領人員分級辦法::LV",
    "parentId": "L1::雄獅旅遊-產品群>L2::導領部::TLD>L3::管理辦法::MR",
    "label": "導領人員分級辦法",
    "level": 4,
    "sortOrder": 6,
    "isSelectable": true,
    "code": "LV",
    "owner": "孟儒",
    "note": "規範導領分級與團型服務門檻的標準"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::人才培育組::TD>L4::辦法::RU",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::人才培育組::TD",
    "label": "辦法",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "RU",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::人才培育組::TD>L4::表單::FM",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::人才培育組::TD",
    "label": "表單",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "FM",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::員工關係::ER>L4::管理辦法::MR",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::員工關係::ER",
    "label": "管理辦法",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "MR",
    "owner": "美婷"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::員工關係::ER>L4::勞工健康服務四大計畫::LHS",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::員工關係::ER",
    "label": "勞工健康服務四大計畫",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "LHS",
    "owner": "美婷"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::員工關係::ER>L4::職福會::OWA",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::員工關係::ER",
    "label": "職福會",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "OWA",
    "owner": "美婷"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::組織::OR>L4::管理辦法::MR",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::組織::OR",
    "label": "管理辦法",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "MR",
    "owner": "月靈"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::組織::OR>L4::申請表單::AF",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::組織::OR",
    "label": "申請表單",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "AF",
    "owner": "月靈"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::考勤::AT>L4::管理辦法::MR",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::考勤::AT",
    "label": "管理辦法",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "MR",
    "owner": "Nancy"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::薪酬::SC>L4::雄獅旅行社獎金辦法::LBM",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::薪酬::SC",
    "label": "雄獅旅行社獎金辦法",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "LBM",
    "owner": "Nancy"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::薪酬::SC>L4::雄獅旅行社獎金申請表::LBA",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::薪酬::SC",
    "label": "雄獅旅行社獎金申請表",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "LBA",
    "owner": "Nancy"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::薪酬::SC>L4::其他獎酬辦法::ORM",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::薪酬::SC",
    "label": "其他獎酬辦法",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "ORM",
    "owner": "Nancy"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::薪酬::SC>L4::薪酬管理辦法::SMM",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::薪酬::SC",
    "label": "薪酬管理辦法",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "SMM",
    "owner": "Nancy"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::薪酬::SC>L4::保險福利::IB",
    "parentId": "L1::雄獅旅遊-管理本部>L2::人資資源管理::HRM>L3::薪酬::SC",
    "label": "保險福利",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "IB",
    "owner": "Nancy"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD>L3::教育訓練::TD>L4::取證作業-永續旅遊::ST",
    "parentId": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD>L3::教育訓練::TD",
    "label": "取證作業-永續旅遊",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "ST",
    "owner": "Yoyo"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD>L3::教育訓練::TD>L4::取證作業-ISO14064-1::GH",
    "parentId": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD>L3::教育訓練::TD",
    "label": "取證作業-ISO14064-1",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "GH",
    "owner": "Yoyo"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD>L3::教育訓練::TD>L4::其他::EX",
    "parentId": "L1::雄獅旅遊-管理本部>L2::永續發展室::SDD>L3::教育訓練::TD",
    "label": "其他",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "EX",
    "owner": "Yoyo"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::財務管理::FMD>L3::會計>L4::銷退單簽核流程",
    "parentId": "L1::雄獅旅遊-管理本部>L2::財務管理::FMD>L3::會計",
    "label": "銷退單簽核流程",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "owner": "厚均"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::產品學院::PD>L4::國外::OT",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::產品學院::PD",
    "label": "國外",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "OT",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::產品學院::PD>L4::國內::IN",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::產品學院::PD",
    "label": "國內",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "IN",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::產品學院::PD>L4::主題::TT",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::產品學院::PD",
    "label": "主題",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "TT",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::產品學院::PD>L4::元件::FI",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::產品學院::PD",
    "label": "元件",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "FI",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::銷售學院::SL>L4::產品知識::PD",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::銷售學院::SL",
    "label": "產品知識",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "PD",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::銷售學院::SL>L4::技能::SK",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::銷售學院::SL",
    "label": "技能",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "SK",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::集團新人訓::GN>L4::旅遊業基礎知識::TB",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::集團新人訓::GN",
    "label": "旅遊業基礎知識",
    "level": 4,
    "sortOrder": 1,
    "isSelectable": true,
    "code": "TB",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::集團新人訓::GN>L4::集團相關知識::GK",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::集團新人訓::GN",
    "label": "集團相關知識",
    "level": 4,
    "sortOrder": 2,
    "isSelectable": true,
    "code": "GK",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::集團新人訓::GN>L4::資訊安全與OTP綁定::OTP",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::集團新人訓::GN",
    "label": "資訊安全與OTP綁定",
    "level": 4,
    "sortOrder": 3,
    "isSelectable": true,
    "code": "OTP",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::集團新人訓::GN>L4::通路基礎知識::SK",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::集團新人訓::GN",
    "label": "通路基礎知識",
    "level": 4,
    "sortOrder": 4,
    "isSelectable": true,
    "code": "SK",
    "owner": "Linda"
  },
  {
    "id": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::集團新人訓::GN>L4::產品基礎知識::PK",
    "parentId": "L1::雄獅旅遊-管理本部>L2::雄獅大學::HRD>L3::集團新人訓::GN",
    "label": "產品基礎知識",
    "level": 4,
    "sortOrder": 5,
    "isSelectable": true,
    "code": "PK",
    "owner": "Linda"
  }
];

export function buildTreeFromNodes(nodes: KnowledgeNode[]): KnowledgeTreeNode[] {
  const nodeMap = new Map<string, KnowledgeTreeNode>();

  for (const node of nodes) {
    nodeMap.set(node.id, {
      ...node,
      children: [],
      pathIds: [],
      pathLabels: [],
    });
  }

  const roots: KnowledgeTreeNode[] = [];
  for (const node of nodeMap.values()) {
    if (node.parentId && nodeMap.has(node.parentId)) {
      const parent = nodeMap.get(node.parentId)!;
      parent.children ??= [];
      parent.children.push(node);
    } else {
      roots.push(node);
    }
  }

  const sortChildren = (nodes: KnowledgeTreeNode[]) => {
    nodes.sort((a, b) => {
      if (a.level !== b.level) return a.level - b.level;
      return a.sortOrder - b.sortOrder;
    });
    for (const node of nodes) {
      const parent = node.parentId ? nodeMap.get(node.parentId) : undefined;
      node.pathIds = parent ? [...parent.pathIds, node.id] : [node.id];
      node.pathLabels = parent ? [...parent.pathLabels, node.label] : [node.label];
      sortChildren(node.children ?? []);
    }
  };

  sortChildren(roots);
  roots.sort((a, b) => a.sortOrder - b.sortOrder);
  return roots;
}

export const KNOWLEDGE_TREE = buildTreeFromNodes(KNOWLEDGE_NODES);
