/* eslint-disable */
import type {
  CategoryNode,
  HrScopeNode,
  ImportError,
  ImportRules,
} from "../catalogModels";

export const CATEGORY_RULES: ImportRules = {
  "dataset": "knowledge_tree",
  "maxLevel": 4,
  "allowSelectWhenNoChild": true,
  "replaceMode": "replace",
  "errorPolicy": "skip_invalid_and_collect_errors"
};
export const CATEGORY_IMPORT_ERRORS: ImportError[] = [
  {
    "sourceType": "knowledge_tree",
    "rowNumber": 319,
    "rawRow": [
      "4",
      "元件",
      "FIT",
      "主力供應商表",
      "PR",
      "Rain/Janice/一登",
      "true",
      "1",
      "416"
    ],
    "errorType": "duplicate_path",
    "errorMessage": "重複路徑：雄獅旅遊-海外塊狀 / 香港 / 主力供應商表 / 元件"
  },
  {
    "sourceType": "knowledge_tree",
    "rowNumber": 320,
    "rawRow": [
      "4",
      "元件",
      "FIT",
      "主力供應商表",
      "PR",
      "Vera/一登",
      "true",
      "1",
      "419"
    ],
    "errorType": "duplicate_path",
    "errorMessage": "重複路徑：雄獅旅遊-海外塊狀 / 香港 / 主力供應商表 / 元件"
  },
  {
    "sourceType": "knowledge_tree",
    "rowNumber": 321,
    "rawRow": [
      "4",
      "元件",
      "FIT",
      "主力供應商表",
      "PR",
      "Vera/一登",
      "true",
      "1",
      "422"
    ],
    "errorType": "duplicate_path",
    "errorMessage": "重複路徑：雄獅旅遊-海外塊狀 / 香港 / 主力供應商表 / 元件"
  },
  {
    "sourceType": "knowledge_tree",
    "rowNumber": 322,
    "rawRow": [
      "4",
      "元件",
      "FIT",
      "主力供應商表",
      "PR",
      "Tiffany/市原/一登",
      "true",
      "1",
      "424"
    ],
    "errorType": "duplicate_path",
    "errorMessage": "重複路徑：雄獅旅遊-海外塊狀 / 香港 / 主力供應商表 / 元件"
  },
  {
    "sourceType": "knowledge_tree",
    "rowNumber": 323,
    "rawRow": [
      "4",
      "元件",
      "FIT",
      "主力供應商表",
      "PR",
      "Tiffany/一登",
      "true",
      "1",
      "426"
    ],
    "errorType": "duplicate_path",
    "errorMessage": "重複路徑：雄獅旅遊-海外塊狀 / 香港 / 主力供應商表 / 元件"
  },
  {
    "sourceType": "knowledge_tree",
    "rowNumber": 324,
    "rawRow": [
      "4",
      "元件",
      "FIT",
      "主力供應商表",
      "PR",
      "市原/一登",
      "true",
      "1",
      "428"
    ],
    "errorType": "duplicate_path",
    "errorMessage": "重複路徑：雄獅旅遊-海外塊狀 / 香港 / 主力供應商表 / 元件"
  },
  {
    "sourceType": "knowledge_tree",
    "rowNumber": 325,
    "rawRow": [
      "4",
      "元件",
      "FIT",
      "主力供應商表",
      "PR",
      "Bonnie/一登",
      "true",
      "1",
      "434"
    ],
    "errorType": "duplicate_path",
    "errorMessage": "重複路徑：雄獅旅遊-海外塊狀 / 香港 / 主力供應商表 / 元件"
  },
  {
    "sourceType": "knowledge_tree",
    "rowNumber": 326,
    "rawRow": [
      "4",
      "元件",
      "FIT",
      "主力供應商表",
      "PR",
      "Glo/一登",
      "true",
      "1",
      "436"
    ],
    "errorType": "duplicate_path",
    "errorMessage": "重複路徑：雄獅旅遊-海外塊狀 / 香港 / 主力供應商表 / 元件"
  },
  {
    "sourceType": "knowledge_tree",
    "rowNumber": 327,
    "rawRow": [
      "4",
      "元件",
      "FIT",
      "主力供應商表",
      "PR",
      "Vera/一登",
      "true",
      "1",
      "438"
    ],
    "errorType": "duplicate_path",
    "errorMessage": "重複路徑：雄獅旅遊-海外塊狀 / 香港 / 主力供應商表 / 元件"
  },
  {
    "sourceType": "knowledge_tree",
    "rowNumber": 348,
    "rawRow": [
      "4",
      "企劃共用",
      "BAD",
      "共用作業",
      "CO",
      "圓、疄",
      "true",
      "2",
      "551"
    ],
    "errorType": "duplicate_path",
    "errorMessage": "重複路徑：雄獅旅遊-台灣塊狀 / 桃竹苗塊狀 / 共用作業 / 企劃共用"
  },
  {
    "sourceType": "knowledge_tree",
    "rowNumber": 527,
    "rawRow": [
      "4",
      "專案",
      "PR",
      "通路",
      "SC",
      "育華",
      "true",
      "1",
      "510"
    ],
    "errorType": "duplicate_path",
    "errorMessage": "重複路徑：雄獅旅遊-台灣塊狀 / 桃竹苗塊狀 / 通路 / 專案"
  }
];
export const CATEGORY_NODES: CategoryNode[] = [
  {
    "id": "cat-gr99ky",
    "nodeName": "雄獅旅遊-管理本部",
    "nodeCode": "",
    "parentId": null,
    "level": 1,
    "pathNames": [
      "雄獅旅遊-管理本部"
    ],
    "pathIds": [
      "cat-gr99ky"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "月靈",
    "ownerWindowId": "win-uufsz1",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row2"
  },
  {
    "id": "cat-18zgr2i",
    "nodeName": "雄獅旅遊-企劃本部",
    "nodeCode": "",
    "parentId": null,
    "level": 1,
    "pathNames": [
      "雄獅旅遊-企劃本部"
    ],
    "pathIds": [
      "cat-18zgr2i"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Kevin",
    "ownerWindowId": "win-1pxfb3m",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row166"
  },
  {
    "id": "cat-1e0yb87",
    "nodeName": "雄獅旅遊-通路群",
    "nodeCode": "",
    "parentId": null,
    "level": 1,
    "pathNames": [
      "雄獅旅遊-通路群"
    ],
    "pathIds": [
      "cat-1e0yb87"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "國煌/俊綱",
    "ownerWindowId": "win-xlqk9e",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row179"
  },
  {
    "id": "cat-1pxxplx",
    "nodeName": "雄獅旅遊-產品群",
    "nodeCode": "",
    "parentId": null,
    "level": 1,
    "pathNames": [
      "雄獅旅遊-產品群"
    ],
    "pathIds": [
      "cat-1pxxplx"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row188"
  },
  {
    "id": "cat-t7aruy",
    "nodeName": "雄獅旅遊-海外塊狀",
    "nodeCode": "",
    "parentId": null,
    "level": 1,
    "pathNames": [
      "雄獅旅遊-海外塊狀"
    ],
    "pathIds": [
      "cat-t7aruy"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row389"
  },
  {
    "id": "cat-1c2r7c2",
    "nodeName": "雄獅旅遊-行銷群",
    "nodeCode": "",
    "parentId": null,
    "level": 1,
    "pathNames": [
      "雄獅旅遊-行銷群"
    ],
    "pathIds": [
      "cat-1c2r7c2"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row440"
  },
  {
    "id": "cat-1n6n9iu",
    "nodeName": "雄獅保經",
    "nodeCode": "",
    "parentId": null,
    "level": 1,
    "pathNames": [
      "雄獅保經"
    ],
    "pathIds": [
      "cat-1n6n9iu"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row481"
  },
  {
    "id": "cat-1k4xptv",
    "nodeName": "雄獅資訊",
    "nodeCode": "",
    "parentId": null,
    "level": 1,
    "pathNames": [
      "雄獅資訊"
    ],
    "pathIds": [
      "cat-1k4xptv"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "安妮",
    "ownerWindowId": "win-1rwp4n2",
    "sortOrder": 8,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row483"
  },
  {
    "id": "cat-iqd4h",
    "nodeName": "機密文件",
    "nodeCode": "",
    "parentId": null,
    "level": 1,
    "pathNames": [
      "機密文件"
    ],
    "pathIds": [
      "cat-iqd4h"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Eason",
    "ownerWindowId": "win-1az0and",
    "sortOrder": 9,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row494"
  },
  {
    "id": "cat-1urdmjf",
    "nodeName": "雄獅旅遊-台灣塊狀",
    "nodeCode": "",
    "parentId": null,
    "level": 1,
    "pathNames": [
      "雄獅旅遊-台灣塊狀"
    ],
    "pathIds": [
      "cat-1urdmjf"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Max",
    "ownerWindowId": "win-gtvgs9",
    "sortOrder": 10,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row500"
  },
  {
    "id": "cat-13r3s6j",
    "nodeName": "雄獅通運",
    "nodeCode": "",
    "parentId": null,
    "level": 1,
    "pathNames": [
      "雄獅通運"
    ],
    "pathIds": [
      "cat-13r3s6j"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 11,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row553"
  },
  {
    "id": "cat-15z7n2q",
    "nodeName": "傑森",
    "nodeCode": "",
    "parentId": null,
    "level": 1,
    "pathNames": [
      "傑森"
    ],
    "pathIds": [
      "cat-15z7n2q"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 12,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row571"
  },
  {
    "id": "cat-1pqo70u",
    "nodeName": "欣傳媒",
    "nodeCode": "",
    "parentId": null,
    "level": 1,
    "pathNames": [
      "欣傳媒"
    ],
    "pathIds": [
      "cat-1pqo70u"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 13,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row572"
  },
  {
    "id": "cat-1h7twoe",
    "nodeName": "欣食旅",
    "nodeCode": "",
    "parentId": null,
    "level": 1,
    "pathNames": [
      "欣食旅"
    ],
    "pathIds": [
      "cat-1h7twoe"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 14,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row573"
  },
  {
    "id": "cat-1uolook",
    "nodeName": "營業數據",
    "nodeCode": "BDA",
    "parentId": "cat-iqd4h",
    "level": 2,
    "pathNames": [
      "機密文件",
      "營業數據"
    ],
    "pathIds": [
      "cat-iqd4h",
      "cat-1uolook"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Eason",
    "ownerWindowId": "win-1az0and",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row494"
  },
  {
    "id": "cat-4spjuo",
    "nodeName": "投後管理",
    "nodeCode": "PIM",
    "parentId": "cat-iqd4h",
    "level": 2,
    "pathNames": [
      "機密文件",
      "投後管理"
    ],
    "pathIds": [
      "cat-iqd4h",
      "cat-4spjuo"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Eason",
    "ownerWindowId": "win-1az0and",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row495"
  },
  {
    "id": "cat-g4k05y",
    "nodeName": "合約相關",
    "nodeCode": "CTR",
    "parentId": "cat-iqd4h",
    "level": 2,
    "pathNames": [
      "機密文件",
      "合約相關"
    ],
    "pathIds": [
      "cat-iqd4h",
      "cat-g4k05y"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Eason",
    "ownerWindowId": "win-1az0and",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row496"
  },
  {
    "id": "cat-tp158o",
    "nodeName": "年度目標",
    "nodeCode": "ANT",
    "parentId": "cat-iqd4h",
    "level": 2,
    "pathNames": [
      "機密文件",
      "年度目標"
    ],
    "pathIds": [
      "cat-iqd4h",
      "cat-tp158o"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Eason",
    "ownerWindowId": "win-1az0and",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row497"
  },
  {
    "id": "cat-1l0riu4",
    "nodeName": "公文文件",
    "nodeCode": "OFD",
    "parentId": "cat-iqd4h",
    "level": 2,
    "pathNames": [
      "機密文件",
      "公文文件"
    ],
    "pathIds": [
      "cat-iqd4h",
      "cat-1l0riu4"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Eason",
    "ownerWindowId": "win-1az0and",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row498"
  },
  {
    "id": "cat-bwlrw3",
    "nodeName": "經營分析",
    "nodeCode": "BA",
    "parentId": "cat-18zgr2i",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "經營分析"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-bwlrw3"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Kevin",
    "ownerWindowId": "win-1pxfb3m",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row166"
  },
  {
    "id": "cat-zsk1qz",
    "nodeName": "知識管理",
    "nodeCode": "KM",
    "parentId": "cat-18zgr2i",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "知識管理"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-zsk1qz"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Leona",
    "ownerWindowId": "win-u66vuu",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row167"
  },
  {
    "id": "cat-1itltzf",
    "nodeName": "專案管理",
    "nodeCode": "PMD",
    "parentId": "cat-18zgr2i",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "專案管理"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-1itltzf"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Eason",
    "ownerWindowId": "win-1az0and",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row169"
  },
  {
    "id": "cat-uidhzc",
    "nodeName": "文管中心",
    "nodeCode": "DMC",
    "parentId": "cat-18zgr2i",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "文管中心"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-uidhzc"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row175"
  },
  {
    "id": "cat-14levkv",
    "nodeName": "共用",
    "nodeCode": "COMM",
    "parentId": "cat-18zgr2i",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "共用"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-14levkv"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row177"
  },
  {
    "id": "cat-14nzuyz",
    "nodeName": "桃竹苗塊狀",
    "nodeCode": "TAO",
    "parentId": "cat-1urdmjf",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Max",
    "ownerWindowId": "win-gtvgs9",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row500"
  },
  {
    "id": "cat-1yms8re",
    "nodeName": "大台中塊狀",
    "nodeCode": "TCH",
    "parentId": "cat-1urdmjf",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "大台中塊狀"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-1yms8re"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "育華",
    "ownerWindowId": "win-19v00y6",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row507"
  },
  {
    "id": "cat-18rgste",
    "nodeName": "南高屏塊狀",
    "nodeCode": "KHH",
    "parentId": "cat-1urdmjf",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row514"
  },
  {
    "id": "cat-npuymk",
    "nodeName": "公用作業",
    "nodeCode": "SPD",
    "parentId": "cat-t7aruy",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row389"
  },
  {
    "id": "cat-1fd2y6e",
    "nodeName": "洛杉磯",
    "nodeCode": "LAX",
    "parentId": "cat-t7aruy",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "洛杉磯"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1fd2y6e"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Rain/Janice/一登",
    "ownerWindowId": "win-d11flo",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row411"
  },
  {
    "id": "cat-10prkuj",
    "nodeName": "溫哥華",
    "nodeCode": "YVR",
    "parentId": "cat-t7aruy",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "溫哥華"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-10prkuj"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Rain/Janice/一登",
    "ownerWindowId": "win-d11flo",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row414"
  },
  {
    "id": "cat-17ubcca",
    "nodeName": "雪梨",
    "nodeCode": "SYD",
    "parentId": "cat-t7aruy",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "雪梨"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-17ubcca"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Vera/一登",
    "ownerWindowId": "win-2guadj",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row417"
  },
  {
    "id": "cat-1n2r6hj",
    "nodeName": "奧克蘭",
    "nodeCode": "AKL",
    "parentId": "cat-t7aruy",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "奧克蘭"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1n2r6hj"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Vera/一登",
    "ownerWindowId": "win-2guadj",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row420"
  },
  {
    "id": "cat-1y34hre",
    "nodeName": "東京",
    "nodeCode": "TYO",
    "parentId": "cat-t7aruy",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "東京"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1y34hre"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Tiffany/市原/一登",
    "ownerWindowId": "win-5pfciq",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row423"
  },
  {
    "id": "cat-1ghse6d",
    "nodeName": "沖繩",
    "nodeCode": "OKA",
    "parentId": "cat-t7aruy",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "沖繩"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1ghse6d"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Tiffany/一登",
    "ownerWindowId": "win-57qw6o",
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row425"
  },
  {
    "id": "cat-7ubopy",
    "nodeName": "熊本",
    "nodeCode": "KUM",
    "parentId": "cat-t7aruy",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "熊本"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-7ubopy"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "市原/一登",
    "ownerWindowId": "win-n7afkm",
    "sortOrder": 8,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row427"
  },
  {
    "id": "cat-ku8uyg",
    "nodeName": "中國大陸",
    "nodeCode": "SHA",
    "parentId": "cat-t7aruy",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "中國大陸"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-ku8uyg"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Glo/一登",
    "ownerWindowId": "win-11vfwd1",
    "sortOrder": 9,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row429"
  },
  {
    "id": "cat-1mmu564",
    "nodeName": "曼谷",
    "nodeCode": "BKK",
    "parentId": "cat-t7aruy",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "曼谷"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1mmu564"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Bonnie/一登",
    "ownerWindowId": "win-10jnl54",
    "sortOrder": 10,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row432"
  },
  {
    "id": "cat-s943dy",
    "nodeName": "香港",
    "nodeCode": "HKG",
    "parentId": "cat-t7aruy",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "香港"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-s943dy"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Glo/一登",
    "ownerWindowId": "win-11vfwd1",
    "sortOrder": 11,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row435"
  },
  {
    "id": "cat-1gykh2m",
    "nodeName": "倫敦",
    "nodeCode": "LON",
    "parentId": "cat-t7aruy",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "倫敦"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1gykh2m"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Vera/一登",
    "ownerWindowId": "win-2guadj",
    "sortOrder": 12,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row437"
  },
  {
    "id": "cat-1bu0t1w",
    "nodeName": "團產OUTB_產一",
    "nodeCode": "GIT1",
    "parentId": "cat-1pxxplx",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row188"
  },
  {
    "id": "cat-1kp967d",
    "nodeName": "團產OUTB_產二",
    "nodeCode": "GIT2",
    "parentId": "cat-1pxxplx",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row232"
  },
  {
    "id": "cat-1vj5b37",
    "nodeName": "團產OUTB_產三",
    "nodeCode": "GIT3",
    "parentId": "cat-1pxxplx",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產三"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1vj5b37"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row269"
  },
  {
    "id": "cat-1q675vy",
    "nodeName": "FIT元件_機票",
    "nodeCode": "TKT",
    "parentId": "cat-1pxxplx",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_機票"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1q675vy"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Shelly",
    "ownerWindowId": "win-1l5qmtk",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row273"
  },
  {
    "id": "cat-q4dnug",
    "nodeName": "FIT元件_訂房",
    "nodeCode": "HTL",
    "parentId": "cat-1pxxplx",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_訂房"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-q4dnug"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "jeff",
    "ownerWindowId": "win-po2d0k",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row281"
  },
  {
    "id": "cat-n985sj",
    "nodeName": "FIT元件_自由行",
    "nodeCode": "PKG",
    "parentId": "cat-1pxxplx",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_自由行"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-n985sj"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Winnie",
    "ownerWindowId": "win-ogrc4j",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row291"
  },
  {
    "id": "cat-u28k0",
    "nodeName": "FIT元件_票券",
    "nodeCode": "ACT",
    "parentId": "cat-1pxxplx",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_票券"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-u28k0"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Cini",
    "ownerWindowId": "win-17du8cc",
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row301"
  },
  {
    "id": "cat-1mutzm9",
    "nodeName": "FIT元件_證照",
    "nodeCode": "VISA",
    "parentId": "cat-1pxxplx",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_證照"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1mutzm9"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Cini",
    "ownerWindowId": "win-17du8cc",
    "sortOrder": 8,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row305"
  },
  {
    "id": "cat-ynvc67",
    "nodeName": "GIT團產_泛國旅入境鐵道",
    "nodeCode": "DT",
    "parentId": "cat-1pxxplx",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 9,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row316"
  },
  {
    "id": "cat-18px74j",
    "nodeName": "導領部",
    "nodeCode": "TLD",
    "parentId": "cat-1pxxplx",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-產品群",
      "導領部"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-18px74j"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 10,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row374"
  },
  {
    "id": "cat-1bp88y1",
    "nodeName": "人資資源管理",
    "nodeCode": "HRM",
    "parentId": "cat-gr99ky",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "月靈",
    "ownerWindowId": "win-uufsz1",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row2"
  },
  {
    "id": "cat-1ozudl",
    "nodeName": "雄獅大學",
    "nodeCode": "HRD",
    "parentId": "cat-gr99ky",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row17"
  },
  {
    "id": "cat-13z2llz",
    "nodeName": "行政總務",
    "nodeCode": "AGD",
    "parentId": "cat-gr99ky",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "行政總務"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-13z2llz"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row36"
  },
  {
    "id": "cat-79t07e",
    "nodeName": "財務管理",
    "nodeCode": "FMD",
    "parentId": "cat-gr99ky",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "財務管理"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-79t07e"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "厚均",
    "ownerWindowId": "win-191w4xq",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row38"
  },
  {
    "id": "cat-gq3ujn",
    "nodeName": "顧客關係",
    "nodeCode": "CRD",
    "parentId": "cat-gr99ky",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "顧客關係"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-gq3ujn"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row44"
  },
  {
    "id": "cat-g7cfbg",
    "nodeName": "法務",
    "nodeCode": "LAD",
    "parentId": "cat-gr99ky",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "法務"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-g7cfbg"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "芝吟",
    "ownerWindowId": "win-1f8ckhh",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row46"
  },
  {
    "id": "cat-v5bjrv",
    "nodeName": "董事長室",
    "nodeCode": "CMO",
    "parentId": "cat-gr99ky",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "董事長室"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-v5bjrv"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row143"
  },
  {
    "id": "cat-10lwmaq",
    "nodeName": "稽核室",
    "nodeCode": "AUD",
    "parentId": "cat-gr99ky",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "稽核室"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-10lwmaq"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "得嘉/高瑞",
    "ownerWindowId": "win-getxf0",
    "sortOrder": 8,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row145"
  },
  {
    "id": "cat-pucpih",
    "nodeName": "永續發展室",
    "nodeCode": "SDD",
    "parentId": "cat-gr99ky",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "永續發展室"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-pucpih"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Yoyo",
    "ownerWindowId": "win-lbol9h",
    "sortOrder": 9,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row150"
  },
  {
    "id": "cat-s5lpfx",
    "nodeName": "資安暨個資管理室",
    "nodeCode": "IPO",
    "parentId": "cat-gr99ky",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "資安暨個資管理室"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-s5lpfx"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "咸蓁",
    "ownerWindowId": "win-3rhbaq",
    "sortOrder": 10,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row159"
  },
  {
    "id": "cat-17tck1b",
    "nodeName": "組織與行政管理",
    "nodeCode": "IM",
    "parentId": "cat-1c2r7c2",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "組織與行政管理"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-17tck1b"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row440"
  },
  {
    "id": "cat-1228i2q",
    "nodeName": "策略與績效管理",
    "nodeCode": "SP",
    "parentId": "cat-1c2r7c2",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "策略與績效管理"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-1228i2q"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row444"
  },
  {
    "id": "cat-168gfei",
    "nodeName": "作業流程規範",
    "nodeCode": "WP",
    "parentId": "cat-1c2r7c2",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "作業流程規範"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-168gfei"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row447"
  },
  {
    "id": "cat-1ezr84n",
    "nodeName": "專案知識資產",
    "nodeCode": "KA",
    "parentId": "cat-1c2r7c2",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "專案知識資產"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-1ezr84n"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row452"
  },
  {
    "id": "cat-1hq88b6",
    "nodeName": "系統工具管理",
    "nodeCode": "DS",
    "parentId": "cat-1c2r7c2",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "系統工具管理"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-1hq88b6"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row455"
  },
  {
    "id": "cat-hvndt0",
    "nodeName": "直售",
    "nodeCode": "B2C",
    "parentId": "cat-1e0yb87",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-通路群",
      "直售"
    ],
    "pathIds": [
      "cat-1e0yb87",
      "cat-hvndt0"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "國煌/俊綱",
    "ownerWindowId": "win-xlqk9e",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row179"
  },
  {
    "id": "cat-1gisfoi",
    "nodeName": "同業",
    "nodeCode": "B2B",
    "parentId": "cat-1e0yb87",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-通路群",
      "同業"
    ],
    "pathIds": [
      "cat-1e0yb87",
      "cat-1gisfoi"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "國煌/俊綱",
    "ownerWindowId": "win-xlqk9e",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row180"
  },
  {
    "id": "cat-1pg0ckb",
    "nodeName": "企業戶",
    "nodeCode": "B2E",
    "parentId": "cat-1e0yb87",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-通路群",
      "企業戶"
    ],
    "pathIds": [
      "cat-1e0yb87",
      "cat-1pg0ckb"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "國煌/俊綱",
    "ownerWindowId": "win-xlqk9e",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row181"
  },
  {
    "id": "cat-yamit3",
    "nodeName": "共用",
    "nodeCode": "COMM",
    "parentId": "cat-1e0yb87",
    "level": 2,
    "pathNames": [
      "雄獅旅遊-通路群",
      "共用"
    ],
    "pathIds": [
      "cat-1e0yb87",
      "cat-yamit3"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "國煌/俊綱",
    "ownerWindowId": "win-xlqk9e",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row185"
  },
  {
    "id": "cat-fl9bqz",
    "nodeName": "需求規格相關",
    "nodeCode": "SPEC",
    "parentId": "cat-1k4xptv",
    "level": 2,
    "pathNames": [
      "雄獅資訊",
      "需求規格相關"
    ],
    "pathIds": [
      "cat-1k4xptv",
      "cat-fl9bqz"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "安妮",
    "ownerWindowId": "win-1rwp4n2",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row483"
  },
  {
    "id": "cat-j49gwt",
    "nodeName": "API相關",
    "nodeCode": "API",
    "parentId": "cat-1k4xptv",
    "level": 2,
    "pathNames": [
      "雄獅資訊",
      "API相關"
    ],
    "pathIds": [
      "cat-1k4xptv",
      "cat-j49gwt"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "安妮",
    "ownerWindowId": "win-1rwp4n2",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row485"
  },
  {
    "id": "cat-1wqm6tr",
    "nodeName": "IT內部知識",
    "nodeCode": "IT",
    "parentId": "cat-1k4xptv",
    "level": 2,
    "pathNames": [
      "雄獅資訊",
      "IT內部知識"
    ],
    "pathIds": [
      "cat-1k4xptv",
      "cat-1wqm6tr"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "安妮",
    "ownerWindowId": "win-1rwp4n2",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row487"
  },
  {
    "id": "cat-1p1sl5b",
    "nodeName": "其他",
    "nodeCode": "OTR",
    "parentId": "cat-1k4xptv",
    "level": 2,
    "pathNames": [
      "雄獅資訊",
      "其他"
    ],
    "pathIds": [
      "cat-1k4xptv",
      "cat-1p1sl5b"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "安妮",
    "ownerWindowId": "win-1rwp4n2",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row491"
  },
  {
    "id": "cat-xfjis7",
    "nodeName": "車隊管理",
    "nodeCode": "FM",
    "parentId": "cat-13r3s6j",
    "level": 2,
    "pathNames": [
      "雄獅通運",
      "車隊管理"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-xfjis7"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row553"
  },
  {
    "id": "cat-53ualn",
    "nodeName": "業務管理",
    "nodeCode": "BM",
    "parentId": "cat-13r3s6j",
    "level": 2,
    "pathNames": [
      "雄獅通運",
      "業務管理"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-53ualn"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row559"
  },
  {
    "id": "cat-idrh13",
    "nodeName": "內部管理",
    "nodeCode": "IM",
    "parentId": "cat-13r3s6j",
    "level": 2,
    "pathNames": [
      "雄獅通運",
      "內部管理"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-idrh13"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row564"
  },
  {
    "id": "cat-1dphqa5",
    "nodeName": "數據與系統管理",
    "nodeCode": "DS",
    "parentId": "cat-13r3s6j",
    "level": 2,
    "pathNames": [
      "雄獅通運",
      "數據與系統管理"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-1dphqa5"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row567"
  },
  {
    "id": "cat-iwmcx5",
    "nodeName": "API開發規格",
    "nodeCode": "ADS",
    "parentId": "cat-j49gwt",
    "level": 3,
    "pathNames": [
      "雄獅資訊",
      "API相關",
      "API開發規格"
    ],
    "pathIds": [
      "cat-1k4xptv",
      "cat-j49gwt",
      "cat-iwmcx5"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "安妮",
    "ownerWindowId": "win-1rwp4n2",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row485"
  },
  {
    "id": "cat-g4dxp9",
    "nodeName": "API說明文件",
    "nodeCode": "APID",
    "parentId": "cat-j49gwt",
    "level": 3,
    "pathNames": [
      "雄獅資訊",
      "API相關",
      "API說明文件"
    ],
    "pathIds": [
      "cat-1k4xptv",
      "cat-j49gwt",
      "cat-g4dxp9"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "安妮",
    "ownerWindowId": "win-1rwp4n2",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row486"
  },
  {
    "id": "cat-16tpl84",
    "nodeName": "不當訂位規定",
    "nodeCode": "DM",
    "parentId": "cat-1q675vy",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_機票",
      "不當訂位規定"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1q675vy",
      "cat-16tpl84"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Shelly",
    "ownerWindowId": "win-1l5qmtk",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row273"
  },
  {
    "id": "cat-vsnmd7",
    "nodeName": "更名作業辦法",
    "nodeCode": "NC",
    "parentId": "cat-1q675vy",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_機票",
      "更名作業辦法"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1q675vy",
      "cat-vsnmd7"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Shelly",
    "ownerWindowId": "win-1l5qmtk",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row274"
  },
  {
    "id": "cat-3rl4u1",
    "nodeName": "航班異動處理流程",
    "nodeCode": "SC",
    "parentId": "cat-1q675vy",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_機票",
      "航班異動處理流程"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1q675vy",
      "cat-3rl4u1"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Shelly",
    "ownerWindowId": "win-1l5qmtk",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row275"
  },
  {
    "id": "cat-9pp4za",
    "nodeName": "票價及退改票規定",
    "nodeCode": "FR",
    "parentId": "cat-1q675vy",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_機票",
      "票價及退改票規定"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1q675vy",
      "cat-9pp4za"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Shelly",
    "ownerWindowId": "win-1l5qmtk",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row276"
  },
  {
    "id": "cat-jqtr2m",
    "nodeName": "特殊票種(學生、敬老、外勞、船員)",
    "nodeCode": "SP",
    "parentId": "cat-1q675vy",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_機票",
      "特殊票種(學生、敬老、外勞、船員)"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1q675vy",
      "cat-jqtr2m"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Shelly",
    "ownerWindowId": "win-1l5qmtk",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row277"
  },
  {
    "id": "cat-brwxv0",
    "nodeName": "航空公司聯繫方式",
    "nodeCode": "AL",
    "parentId": "cat-1q675vy",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_機票",
      "航空公司聯繫方式"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1q675vy",
      "cat-brwxv0"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Shelly",
    "ownerWindowId": "win-1l5qmtk",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row278"
  },
  {
    "id": "cat-1doyzl6",
    "nodeName": "教育訓練",
    "nodeCode": "TR",
    "parentId": "cat-1q675vy",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_機票",
      "教育訓練"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1q675vy",
      "cat-1doyzl6"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Shelly",
    "ownerWindowId": "win-1l5qmtk",
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row279"
  },
  {
    "id": "cat-uefev8",
    "nodeName": "國內票券",
    "nodeCode": "TW",
    "parentId": "cat-u28k0",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_票券",
      "國內票券"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-u28k0",
      "cat-uefev8"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Cini",
    "ownerWindowId": "win-17du8cc",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row301"
  },
  {
    "id": "cat-1q06k0y",
    "nodeName": "國際票券",
    "nodeCode": "OS",
    "parentId": "cat-u28k0",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_票券",
      "國際票券"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-u28k0",
      "cat-1q06k0y"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Cini",
    "ownerWindowId": "win-17du8cc",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row302"
  },
  {
    "id": "cat-1lwrl3j",
    "nodeName": "系統作業",
    "nodeCode": "SYOP",
    "parentId": "cat-u28k0",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_票券",
      "系統作業"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-u28k0",
      "cat-1lwrl3j"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Cini",
    "ownerWindowId": "win-17du8cc",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row303"
  },
  {
    "id": "cat-1t1xh6a",
    "nodeName": "mini tour",
    "nodeCode": "MT",
    "parentId": "cat-n985sj",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_自由行",
      "mini tour"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-n985sj",
      "cat-1t1xh6a"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Winnie",
    "ownerWindowId": "win-ogrc4j",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row291"
  },
  {
    "id": "cat-12ykks5",
    "nodeName": "clubmed",
    "nodeCode": "CM",
    "parentId": "cat-n985sj",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_自由行",
      "clubmed"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-n985sj",
      "cat-12ykks5"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Winnie",
    "ownerWindowId": "win-ogrc4j",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row292"
  },
  {
    "id": "cat-180av41",
    "nodeName": "動態自由行",
    "nodeCode": "FN",
    "parentId": "cat-n985sj",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_自由行",
      "動態自由行"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-n985sj",
      "cat-180av41"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Winnie",
    "ownerWindowId": "win-ogrc4j",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row293"
  },
  {
    "id": "cat-1kvq4xt",
    "nodeName": "團體自由行",
    "nodeCode": "GF",
    "parentId": "cat-n985sj",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_自由行",
      "團體自由行"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-n985sj",
      "cat-1kvq4xt"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Winnie",
    "ownerWindowId": "win-ogrc4j",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row294"
  },
  {
    "id": "cat-t5b973",
    "nodeName": "國內自由行",
    "nodeCode": "TF",
    "parentId": "cat-n985sj",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_自由行",
      "國內自由行"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-n985sj",
      "cat-t5b973"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Winnie",
    "ownerWindowId": "win-ogrc4j",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row295"
  },
  {
    "id": "cat-v09eb",
    "nodeName": "共用",
    "nodeCode": "COM",
    "parentId": "cat-q4dnug",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_訂房",
      "共用"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-q4dnug",
      "cat-v09eb"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "jeff",
    "ownerWindowId": "win-po2d0k",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row281"
  },
  {
    "id": "cat-1n6cgqg",
    "nodeName": "國內訂房",
    "nodeCode": "TW",
    "parentId": "cat-q4dnug",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_訂房",
      "國內訂房"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-q4dnug",
      "cat-1n6cgqg"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row282"
  },
  {
    "id": "cat-17vj381",
    "nodeName": "國際訂房",
    "nodeCode": "GB",
    "parentId": "cat-q4dnug",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_訂房",
      "國際訂房"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-q4dnug",
      "cat-17vj381"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row285"
  },
  {
    "id": "cat-d3herq",
    "nodeName": "團購",
    "nodeCode": "GS",
    "parentId": "cat-q4dnug",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_訂房",
      "團購"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-q4dnug",
      "cat-d3herq"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row288"
  },
  {
    "id": "cat-ew0x3p",
    "nodeName": "教育訓練",
    "nodeCode": "TR",
    "parentId": "cat-q4dnug",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_訂房",
      "教育訓練"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-q4dnug",
      "cat-ew0x3p"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row289"
  },
  {
    "id": "cat-1cwmaus",
    "nodeName": "認識各國簽證",
    "nodeCode": "GEN",
    "parentId": "cat-1mutzm9",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_證照",
      "認識各國簽證"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1mutzm9",
      "cat-1cwmaus"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Cini",
    "ownerWindowId": "win-17du8cc",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row305"
  },
  {
    "id": "cat-1s9nc4u",
    "nodeName": "護照及中華民國簽證",
    "nodeCode": "TW",
    "parentId": "cat-1mutzm9",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_證照",
      "護照及中華民國簽證"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1mutzm9",
      "cat-1s9nc4u"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Cini",
    "ownerWindowId": "win-17du8cc",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row306"
  },
  {
    "id": "cat-qvs2ag",
    "nodeName": "歐洲簽證",
    "nodeCode": "EU",
    "parentId": "cat-1mutzm9",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_證照",
      "歐洲簽證"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1mutzm9",
      "cat-qvs2ag"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Cini",
    "ownerWindowId": "win-17du8cc",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row307"
  },
  {
    "id": "cat-futp53",
    "nodeName": "亞非簽證",
    "nodeCode": "AA",
    "parentId": "cat-1mutzm9",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_證照",
      "亞非簽證"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1mutzm9",
      "cat-futp53"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Cini",
    "ownerWindowId": "win-17du8cc",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row308"
  },
  {
    "id": "cat-1k7og5f",
    "nodeName": "美加簽證",
    "nodeCode": "USACA",
    "parentId": "cat-1mutzm9",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_證照",
      "美加簽證"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1mutzm9",
      "cat-1k7og5f"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Cini",
    "ownerWindowId": "win-17du8cc",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row309"
  },
  {
    "id": "cat-kznltx",
    "nodeName": "紐澳簽證",
    "nodeCode": "NZAU",
    "parentId": "cat-1mutzm9",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_證照",
      "紐澳簽證"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1mutzm9",
      "cat-kznltx"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Cini",
    "ownerWindowId": "win-17du8cc",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row310"
  },
  {
    "id": "cat-1oziksp",
    "nodeName": "大陸港澳簽證",
    "nodeCode": "CN",
    "parentId": "cat-1mutzm9",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_證照",
      "大陸港澳簽證"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1mutzm9",
      "cat-1oziksp"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Cini",
    "ownerWindowId": "win-17du8cc",
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row311"
  },
  {
    "id": "cat-1hmeqgk",
    "nodeName": "東南北亞簽證",
    "nodeCode": "SEA",
    "parentId": "cat-1mutzm9",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_證照",
      "東南北亞簽證"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1mutzm9",
      "cat-1hmeqgk"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Cini",
    "ownerWindowId": "win-17du8cc",
    "sortOrder": 8,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row312"
  },
  {
    "id": "cat-1rwibiv",
    "nodeName": "證照常見問題Q&A",
    "nodeCode": "FAQ",
    "parentId": "cat-1mutzm9",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_證照",
      "證照常見問題Q&A"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1mutzm9",
      "cat-1rwibiv"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Cini",
    "ownerWindowId": "win-17du8cc",
    "sortOrder": 9,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row313"
  },
  {
    "id": "cat-b5o66p",
    "nodeName": "其他",
    "nodeCode": "OTR",
    "parentId": "cat-1mutzm9",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_證照",
      "其他"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1mutzm9",
      "cat-b5o66p"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Cini",
    "ownerWindowId": "win-17du8cc",
    "sortOrder": 10,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row314"
  },
  {
    "id": "cat-vu170i",
    "nodeName": "國旅發展",
    "nodeCode": "CD",
    "parentId": "cat-ynvc67",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "國旅發展"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-vu170i"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row316"
  },
  {
    "id": "cat-j8hu4w",
    "nodeName": "產品知識",
    "nodeCode": "PK",
    "parentId": "cat-ynvc67",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "產品知識"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-j8hu4w"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row319"
  },
  {
    "id": "cat-18vc87f",
    "nodeName": "系列",
    "nodeCode": "TW4LS",
    "parentId": "cat-ynvc67",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "系列"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-18vc87f"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row326"
  },
  {
    "id": "cat-1l4647t",
    "nodeName": "離島",
    "nodeCode": "TW4LT",
    "parentId": "cat-ynvc67",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "離島"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-1l4647t"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row329"
  },
  {
    "id": "cat-lw5gmp",
    "nodeName": "獎勵旅遊",
    "nodeCode": "TW4LC",
    "parentId": "cat-ynvc67",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "獎勵旅遊"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-lw5gmp"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row333"
  },
  {
    "id": "cat-d6fdpe",
    "nodeName": "入境部",
    "nodeCode": "TW07",
    "parentId": "cat-ynvc67",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "入境部"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-d6fdpe"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row343"
  },
  {
    "id": "cat-1hebro8",
    "nodeName": "供應商",
    "nodeCode": "SM",
    "parentId": "cat-ynvc67",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "供應商"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-1hebro8"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row350"
  },
  {
    "id": "cat-lq1pkh",
    "nodeName": "OP作業",
    "nodeCode": "OP",
    "parentId": "cat-ynvc67",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "OP作業"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-lq1pkh"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 8,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row354"
  },
  {
    "id": "cat-yryxvh",
    "nodeName": "鐵道",
    "nodeCode": "TW08",
    "parentId": "cat-ynvc67",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 9,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row356"
  },
  {
    "id": "cat-1d5hnjk",
    "nodeName": "技術棧及資料流",
    "nodeCode": "TSDF",
    "parentId": "cat-1wqm6tr",
    "level": 3,
    "pathNames": [
      "雄獅資訊",
      "IT內部知識",
      "技術棧及資料流"
    ],
    "pathIds": [
      "cat-1k4xptv",
      "cat-1wqm6tr",
      "cat-1d5hnjk"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "安妮",
    "ownerWindowId": "win-1rwp4n2",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row487"
  },
  {
    "id": "cat-pr6xlj",
    "nodeName": "通用知識文件",
    "nodeCode": "GKD",
    "parentId": "cat-1wqm6tr",
    "level": 3,
    "pathNames": [
      "雄獅資訊",
      "IT內部知識",
      "通用知識文件"
    ],
    "pathIds": [
      "cat-1k4xptv",
      "cat-1wqm6tr",
      "cat-pr6xlj"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "安妮",
    "ownerWindowId": "win-1rwp4n2",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row488"
  },
  {
    "id": "cat-ekli88",
    "nodeName": "供應商系統說明書",
    "nodeCode": "VSM",
    "parentId": "cat-1wqm6tr",
    "level": 3,
    "pathNames": [
      "雄獅資訊",
      "IT內部知識",
      "供應商系統說明書"
    ],
    "pathIds": [
      "cat-1k4xptv",
      "cat-1wqm6tr",
      "cat-ekli88"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "安妮",
    "ownerWindowId": "win-1rwp4n2",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row489"
  },
  {
    "id": "cat-1hokbzn",
    "nodeName": "佈署說明",
    "nodeCode": "DG",
    "parentId": "cat-1wqm6tr",
    "level": 3,
    "pathNames": [
      "雄獅資訊",
      "IT內部知識",
      "佈署說明"
    ],
    "pathIds": [
      "cat-1k4xptv",
      "cat-1wqm6tr",
      "cat-1hokbzn"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "安妮",
    "ownerWindowId": "win-1rwp4n2",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row490"
  },
  {
    "id": "cat-bsq34o",
    "nodeName": "業務窗口",
    "nodeCode": "CT",
    "parentId": "cat-ku8uyg",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "中國大陸",
      "業務窗口"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-ku8uyg",
      "cat-bsq34o"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Glo/一登",
    "ownerWindowId": "win-11vfwd1",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row429"
  },
  {
    "id": "cat-4ah3d",
    "nodeName": "特色產品",
    "nodeCode": "FP",
    "parentId": "cat-ku8uyg",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "中國大陸",
      "特色產品"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-ku8uyg",
      "cat-4ah3d"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Glo/一登",
    "ownerWindowId": "win-11vfwd1",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row430"
  },
  {
    "id": "cat-1p6uizm",
    "nodeName": "主力供應商表",
    "nodeCode": "TMC",
    "parentId": "cat-ku8uyg",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "中國大陸",
      "主力供應商表"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-ku8uyg",
      "cat-1p6uizm"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Glo/一登",
    "ownerWindowId": "win-11vfwd1",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row431"
  },
  {
    "id": "cat-wpqacb",
    "nodeName": "組織",
    "nodeCode": "OR",
    "parentId": "cat-1bp88y1",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "組織"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-wpqacb"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "月靈",
    "ownerWindowId": "win-uufsz1",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row2"
  },
  {
    "id": "cat-1ce5gqg",
    "nodeName": "考勤",
    "nodeCode": "AT",
    "parentId": "cat-1bp88y1",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "考勤"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-1ce5gqg"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Nancy",
    "ownerWindowId": "win-1qs66hy",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row4"
  },
  {
    "id": "cat-4qzzgj",
    "nodeName": "薪酬",
    "nodeCode": "SC",
    "parentId": "cat-1bp88y1",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "薪酬"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-4qzzgj"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Nancy",
    "ownerWindowId": "win-1qs66hy",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row5"
  },
  {
    "id": "cat-m1bb48",
    "nodeName": "員工關係",
    "nodeCode": "ER",
    "parentId": "cat-1bp88y1",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "員工關係"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-m1bb48"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "美婷",
    "ownerWindowId": "win-1vuln6a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row10"
  },
  {
    "id": "cat-ug6vuy",
    "nodeName": "轉調",
    "nodeCode": "TR",
    "parentId": "cat-1bp88y1",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "轉調"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-ug6vuy"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "胡勁羽",
    "ownerWindowId": "win-1lkmkgu",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row13"
  },
  {
    "id": "cat-iqtwdb",
    "nodeName": "人才培育組",
    "nodeCode": "TD",
    "parentId": "cat-1bp88y1",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "人才培育組"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-iqtwdb"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row14"
  },
  {
    "id": "cat-acvmop",
    "nodeName": "獎勵旅遊",
    "nodeCode": "MICE",
    "parentId": "cat-1pg0ckb",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-通路群",
      "企業戶",
      "獎勵旅遊"
    ],
    "pathIds": [
      "cat-1e0yb87",
      "cat-1pg0ckb",
      "cat-acvmop"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "國煌/俊綱",
    "ownerWindowId": "win-xlqk9e",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row181"
  },
  {
    "id": "cat-histac",
    "nodeName": "公商差旅",
    "nodeCode": "BIZ",
    "parentId": "cat-1pg0ckb",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-通路群",
      "企業戶",
      "公商差旅"
    ],
    "pathIds": [
      "cat-1e0yb87",
      "cat-1pg0ckb",
      "cat-histac"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "國煌/俊綱",
    "ownerWindowId": "win-xlqk9e",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row182"
  },
  {
    "id": "cat-1dndin7",
    "nodeName": "高階脈絡",
    "nodeCode": "VIP",
    "parentId": "cat-1pg0ckb",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-通路群",
      "企業戶",
      "高階脈絡"
    ],
    "pathIds": [
      "cat-1e0yb87",
      "cat-1pg0ckb",
      "cat-1dndin7"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "國煌/俊綱",
    "ownerWindowId": "win-xlqk9e",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row183"
  },
  {
    "id": "cat-nzsi0g",
    "nodeName": "共用",
    "nodeCode": "COM",
    "parentId": "cat-1pg0ckb",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-通路群",
      "企業戶",
      "共用"
    ],
    "pathIds": [
      "cat-1e0yb87",
      "cat-1pg0ckb",
      "cat-nzsi0g"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "國煌/俊綱",
    "ownerWindowId": "win-xlqk9e",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row184"
  },
  {
    "id": "cat-16aitpi",
    "nodeName": "整合行銷作業",
    "nodeCode": "IW",
    "parentId": "cat-168gfei",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "作業流程規範",
      "整合行銷作業"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-168gfei",
      "cat-16aitpi"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row447"
  },
  {
    "id": "cat-7k0q66",
    "nodeName": "數位營運作業",
    "nodeCode": "DO",
    "parentId": "cat-168gfei",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "作業流程規範",
      "數位營運作業"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-168gfei",
      "cat-7k0q66"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row448"
  },
  {
    "id": "cat-1ie99jr",
    "nodeName": "會員經營作業",
    "nodeCode": "MM",
    "parentId": "cat-168gfei",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "作業流程規範",
      "會員經營作業"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-168gfei",
      "cat-1ie99jr"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row449"
  },
  {
    "id": "cat-1gnxjyc",
    "nodeName": "視覺設計作業",
    "nodeCode": "VD",
    "parentId": "cat-168gfei",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "作業流程規範",
      "視覺設計作業"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-168gfei",
      "cat-1gnxjyc"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row450"
  },
  {
    "id": "cat-whsuum",
    "nodeName": "媒體公關作業",
    "nodeCode": "PR",
    "parentId": "cat-168gfei",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "作業流程規範",
      "媒體公關作業"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-168gfei",
      "cat-whsuum"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row451"
  },
  {
    "id": "cat-1de928f",
    "nodeName": "業務窗口",
    "nodeCode": "CT",
    "parentId": "cat-1gykh2m",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "倫敦",
      "業務窗口"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1gykh2m",
      "cat-1de928f"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Vera/一登",
    "ownerWindowId": "win-2guadj",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row437"
  },
  {
    "id": "cat-1rfo3pr",
    "nodeName": "主力供應商表",
    "nodeCode": "PR",
    "parentId": "cat-1gykh2m",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "倫敦",
      "主力供應商表"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1gykh2m",
      "cat-1rfo3pr"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Vera/一登",
    "ownerWindowId": "win-2guadj",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row438"
  },
  {
    "id": "cat-1rchggb",
    "nodeName": "工作流程制度",
    "nodeCode": "WP",
    "parentId": "cat-idrh13",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "內部管理",
      "工作流程制度"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-idrh13",
      "cat-1rchggb"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row564"
  },
  {
    "id": "cat-qwobv5",
    "nodeName": "員工管理",
    "nodeCode": "HR",
    "parentId": "cat-idrh13",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "內部管理",
      "員工管理"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-idrh13",
      "cat-qwobv5"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row565"
  },
  {
    "id": "cat-g8xd",
    "nodeName": "財務與法務管理",
    "nodeCode": "FL",
    "parentId": "cat-idrh13",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "內部管理",
      "財務與法務管理"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-idrh13",
      "cat-g8xd"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row566"
  },
  {
    "id": "cat-474jsc",
    "nodeName": "資安及個資",
    "nodeCode": "IP",
    "parentId": "cat-1l0riu4",
    "level": 3,
    "pathNames": [
      "機密文件",
      "公文文件",
      "資安及個資"
    ],
    "pathIds": [
      "cat-iqd4h",
      "cat-1l0riu4",
      "cat-474jsc"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Eason",
    "ownerWindowId": "win-1az0and",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row498"
  },
  {
    "id": "cat-16hwcjq",
    "nodeName": "海外公司介紹",
    "nodeCode": "OS",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "海外公司介紹"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-16hwcjq"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row389"
  },
  {
    "id": "cat-1g4pvbq",
    "nodeName": "年度目標計畫",
    "nodeCode": "YP",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "年度目標計畫"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-1g4pvbq"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row390"
  },
  {
    "id": "cat-nryn9v",
    "nodeName": "教育訓練",
    "nodeCode": "PT",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "教育訓練"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-nryn9v"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row392"
  },
  {
    "id": "cat-m2vm99",
    "nodeName": "宿舍",
    "nodeCode": "HS",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "宿舍"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-m2vm99"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row393"
  },
  {
    "id": "cat-be3n5c",
    "nodeName": "辦公室",
    "nodeCode": "OF",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "辦公室"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-be3n5c"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row394"
  },
  {
    "id": "cat-14gixg7",
    "nodeName": "出差計畫",
    "nodeCode": "BP",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "出差計畫"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-14gixg7"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row395"
  },
  {
    "id": "cat-61mjg2",
    "nodeName": "璽品專案",
    "nodeCode": "ST",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "璽品專案"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-61mjg2"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row396"
  },
  {
    "id": "cat-ox1ehe",
    "nodeName": "脈絡名片",
    "nodeCode": "NC",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "脈絡名片"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-ox1ehe"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 8,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row397"
  },
  {
    "id": "cat-ngxazi",
    "nodeName": "產品",
    "nodeCode": "PD",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "產品"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-ngxazi"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 9,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row398"
  },
  {
    "id": "cat-1ri8jvb",
    "nodeName": "通路",
    "nodeCode": "PL",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "通路"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-1ri8jvb"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 10,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row399"
  },
  {
    "id": "cat-p1qg3e",
    "nodeName": "行銷",
    "nodeCode": "MK",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "行銷"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-p1qg3e"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 11,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row400"
  },
  {
    "id": "cat-1qnw29u",
    "nodeName": "系統IT",
    "nodeCode": "ST",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "系統IT"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-1qnw29u"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 12,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row401"
  },
  {
    "id": "cat-1gs0p5v",
    "nodeName": "區域財務經營",
    "nodeCode": "RFM",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "區域財務經營"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-1gs0p5v"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 13,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row402"
  },
  {
    "id": "cat-13jseum",
    "nodeName": "全球行事曆",
    "nodeCode": "GC",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "全球行事曆"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-13jseum"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 14,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row403"
  },
  {
    "id": "cat-ylqi0s",
    "nodeName": "供應商管理",
    "nodeCode": "SM",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "供應商管理"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-ylqi0s"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 15,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row404"
  },
  {
    "id": "cat-1w3kc97",
    "nodeName": "流程梳理",
    "nodeCode": "PR",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "流程梳理"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-1w3kc97"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 16,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row405"
  },
  {
    "id": "cat-1y3s8xu",
    "nodeName": "集團-全球化發展",
    "nodeCode": "GD",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "集團-全球化發展"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-1y3s8xu"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 17,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row409"
  },
  {
    "id": "cat-esaxse",
    "nodeName": "台商發展",
    "nodeCode": "TC",
    "parentId": "cat-npuymk",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "台商發展"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-esaxse"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 18,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row410"
  },
  {
    "id": "cat-1nsx2q1",
    "nodeName": "FAQ",
    "nodeCode": "FAQ",
    "parentId": "cat-yamit3",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-通路群",
      "共用",
      "FAQ"
    ],
    "pathIds": [
      "cat-1e0yb87",
      "cat-yamit3",
      "cat-1nsx2q1"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row177"
  },
  {
    "id": "cat-19arfmx",
    "nodeName": "作業流程",
    "nodeCode": "SOP",
    "parentId": "cat-yamit3",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-通路群",
      "共用",
      "作業流程"
    ],
    "pathIds": [
      "cat-1e0yb87",
      "cat-yamit3",
      "cat-19arfmx"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "國煌/俊綱",
    "ownerWindowId": "win-xlqk9e",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row185"
  },
  {
    "id": "cat-fsp84q",
    "nodeName": "案例分享",
    "nodeCode": "STUDY",
    "parentId": "cat-yamit3",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-通路群",
      "共用",
      "案例分享"
    ],
    "pathIds": [
      "cat-1e0yb87",
      "cat-yamit3",
      "cat-fsp84q"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "國煌/俊綱",
    "ownerWindowId": "win-xlqk9e",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row186"
  },
  {
    "id": "cat-apbjrb",
    "nodeName": "報價單",
    "nodeCode": "QS",
    "parentId": "cat-1p1sl5b",
    "level": 3,
    "pathNames": [
      "雄獅資訊",
      "其他",
      "報價單"
    ],
    "pathIds": [
      "cat-1k4xptv",
      "cat-1p1sl5b",
      "cat-apbjrb"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "安妮",
    "ownerWindowId": "win-1rwp4n2",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row491"
  },
  {
    "id": "cat-hfoe13",
    "nodeName": "7885客服",
    "nodeCode": "HD",
    "parentId": "cat-1p1sl5b",
    "level": 3,
    "pathNames": [
      "雄獅資訊",
      "其他",
      "7885客服"
    ],
    "pathIds": [
      "cat-1k4xptv",
      "cat-1p1sl5b",
      "cat-hfoe13"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "安妮",
    "ownerWindowId": "win-1rwp4n2",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row492"
  },
  {
    "id": "cat-1a23kur",
    "nodeName": "產品日本線",
    "nodeCode": "JP",
    "parentId": "cat-18rgste",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品日本線"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1a23kur"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row514"
  },
  {
    "id": "cat-1dfsjwb",
    "nodeName": "產品韓國線",
    "nodeCode": "KR",
    "parentId": "cat-18rgste",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品韓國線"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1dfsjwb"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row518"
  },
  {
    "id": "cat-eg4f1",
    "nodeName": "產品東南亞線",
    "nodeCode": "SEA",
    "parentId": "cat-18rgste",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品東南亞線"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-eg4f1"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row521"
  },
  {
    "id": "cat-6ebqs",
    "nodeName": "產品歐洲線(高出)",
    "nodeCode": "EU",
    "parentId": "cat-18rgste",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品歐洲線(高出)"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-6ebqs"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row524"
  },
  {
    "id": "cat-1jsrv65",
    "nodeName": "產品大陸線",
    "nodeCode": "AS",
    "parentId": "cat-18rgste",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品大陸線"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1jsrv65"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row527"
  },
  {
    "id": "cat-1esan2p",
    "nodeName": "產品自由行",
    "nodeCode": "PKG",
    "parentId": "cat-18rgste",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品自由行"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1esan2p"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row530"
  },
  {
    "id": "cat-19xbvge",
    "nodeName": "產品國旅",
    "nodeCode": "INB",
    "parentId": "cat-18rgste",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品國旅"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-19xbvge"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row533"
  },
  {
    "id": "cat-1a7bast",
    "nodeName": "導領部",
    "nodeCode": "TLD",
    "parentId": "cat-18rgste",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "導領部"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1a7bast"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 8,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row538"
  },
  {
    "id": "cat-15tm8me",
    "nodeName": "產品OP",
    "nodeCode": "OP",
    "parentId": "cat-18rgste",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品OP"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-15tm8me"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 9,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row541"
  },
  {
    "id": "cat-1ksol7a",
    "nodeName": "行銷",
    "nodeCode": "MK",
    "parentId": "cat-18rgste",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "行銷"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1ksol7a"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 10,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row543"
  },
  {
    "id": "cat-w7uijg",
    "nodeName": "通路",
    "nodeCode": "SC",
    "parentId": "cat-18rgste",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "通路"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-w7uijg"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 11,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row545"
  },
  {
    "id": "cat-qq0nsd",
    "nodeName": "共用作業",
    "nodeCode": "CO",
    "parentId": "cat-18rgste",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "共用作業"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-qq0nsd"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 12,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row550"
  },
  {
    "id": "cat-fw1j71",
    "nodeName": "共用",
    "nodeCode": "COMM",
    "parentId": "cat-1gisfoi",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-通路群",
      "同業",
      "共用"
    ],
    "pathIds": [
      "cat-1e0yb87",
      "cat-1gisfoi",
      "cat-fw1j71"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "國煌/俊綱",
    "ownerWindowId": "win-xlqk9e",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row180"
  },
  {
    "id": "cat-l62vfh",
    "nodeName": "共用",
    "nodeCode": "COMM",
    "parentId": "cat-1bu0t1w",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "共用"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-l62vfh"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row188"
  },
  {
    "id": "cat-1f2mvfa",
    "nodeName": "美洲不含小島",
    "nodeCode": "AC",
    "parentId": "cat-1bu0t1w",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "美洲不含小島"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1f2mvfa"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row189"
  },
  {
    "id": "cat-185dmxc",
    "nodeName": "太平洋小島",
    "nodeCode": "PA",
    "parentId": "cat-1bu0t1w",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "太平洋小島"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-185dmxc"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row193"
  },
  {
    "id": "cat-1240quz",
    "nodeName": "大洋洲",
    "nodeCode": "AN",
    "parentId": "cat-1bu0t1w",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "大洋洲"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1240quz"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row197"
  },
  {
    "id": "cat-zj22r5",
    "nodeName": "歐洲",
    "nodeCode": "EU",
    "parentId": "cat-1bu0t1w",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "歐洲"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-zj22r5"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row202"
  },
  {
    "id": "cat-1cucfyz",
    "nodeName": "亞非",
    "nodeCode": "AA",
    "parentId": "cat-1bu0t1w",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "亞非"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1cucfyz"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row206"
  },
  {
    "id": "cat-735n7z",
    "nodeName": "大陸",
    "nodeCode": "AS",
    "parentId": "cat-1bu0t1w",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "大陸"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-735n7z"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row210"
  },
  {
    "id": "cat-1vw1f08",
    "nodeName": "港澳珠圳",
    "nodeCode": "HM",
    "parentId": "cat-1bu0t1w",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "港澳珠圳"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1vw1f08"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 8,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row214"
  },
  {
    "id": "cat-1284ud7",
    "nodeName": "東北亞日本",
    "nodeCode": "JP",
    "parentId": "cat-1bu0t1w",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "東北亞日本"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1284ud7"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 9,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row218"
  },
  {
    "id": "cat-2zf51z",
    "nodeName": "東北亞韓國",
    "nodeCode": "KR",
    "parentId": "cat-1bu0t1w",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "東北亞韓國"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-2zf51z"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 10,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row223"
  },
  {
    "id": "cat-o5w7jt",
    "nodeName": "東南亞",
    "nodeCode": "SEA",
    "parentId": "cat-1bu0t1w",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "東南亞"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-o5w7jt"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 11,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row227"
  },
  {
    "id": "cat-52bk1c",
    "nodeName": "專案",
    "nodeCode": "PR",
    "parentId": "cat-1vj5b37",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產三",
      "專案"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1vj5b37",
      "cat-52bk1c"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row269"
  },
  {
    "id": "cat-1ufmv0q",
    "nodeName": "Q&A",
    "nodeCode": "QA",
    "parentId": "cat-1vj5b37",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產三",
      "Q&A"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1vj5b37",
      "cat-1ufmv0q"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row270"
  },
  {
    "id": "cat-m79m",
    "nodeName": "機密",
    "nodeCode": "SC",
    "parentId": "cat-1vj5b37",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產三",
      "機密"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1vj5b37",
      "cat-m79m"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row271"
  },
  {
    "id": "cat-1bd1b5e",
    "nodeName": "系統流程標準",
    "nodeCode": "SP",
    "parentId": "cat-1kp967d",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "系統流程標準"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-1bd1b5e"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row232"
  },
  {
    "id": "cat-152crbi",
    "nodeName": "產品知識和教材",
    "nodeCode": "NH",
    "parentId": "cat-1kp967d",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "產品知識和教材"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-152crbi"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row239"
  },
  {
    "id": "cat-phopyu",
    "nodeName": "品牌經營",
    "nodeCode": "BM",
    "parentId": "cat-1kp967d",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "品牌經營"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-phopyu"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row245"
  },
  {
    "id": "cat-1lawubl",
    "nodeName": "行銷營運",
    "nodeCode": "MC",
    "parentId": "cat-1kp967d",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "行銷營運"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-1lawubl"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row250"
  },
  {
    "id": "cat-10cjwg",
    "nodeName": "合約文件(機密)",
    "nodeCode": "CT",
    "parentId": "cat-1kp967d",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "合約文件(機密)"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-10cjwg"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row254"
  },
  {
    "id": "cat-c5z6xh",
    "nodeName": "紀錄文件(機密)",
    "nodeCode": "DC",
    "parentId": "cat-1kp967d",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "紀錄文件(機密)"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-c5z6xh"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row260"
  },
  {
    "id": "cat-s0c70n",
    "nodeName": "高球",
    "nodeCode": "GF",
    "parentId": "cat-1kp967d",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "高球"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-s0c70n"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row266"
  },
  {
    "id": "cat-lf5w0h",
    "nodeName": "產品",
    "nodeCode": "PD",
    "parentId": "cat-1yms8re",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "大台中塊狀",
      "產品"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-1yms8re",
      "cat-lf5w0h"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "育華",
    "ownerWindowId": "win-19v00y6",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row507"
  },
  {
    "id": "cat-qka88p",
    "nodeName": "通路",
    "nodeCode": "SC",
    "parentId": "cat-1yms8re",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "大台中塊狀",
      "通路"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-1yms8re",
      "cat-qka88p"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "育華",
    "ownerWindowId": "win-19v00y6",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row510"
  },
  {
    "id": "cat-15o11pj",
    "nodeName": "管企本共用",
    "nodeCode": "COM",
    "parentId": "cat-1yms8re",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "大台中塊狀",
      "管企本共用"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-1yms8re",
      "cat-15o11pj"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "育華",
    "ownerWindowId": "win-19v00y6",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row511"
  },
  {
    "id": "cat-bd2a4m",
    "nodeName": "雲嘉",
    "nodeCode": "CYI",
    "parentId": "cat-1yms8re",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "大台中塊狀",
      "雲嘉"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-1yms8re",
      "cat-bd2a4m"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "育華",
    "ownerWindowId": "win-19v00y6",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row512"
  },
  {
    "id": "cat-1wgjnj",
    "nodeName": "業務窗口",
    "nodeCode": "CT",
    "parentId": "cat-1n2r6hj",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "奧克蘭",
      "業務窗口"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1n2r6hj",
      "cat-1wgjnj"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Vera/一登",
    "ownerWindowId": "win-2guadj",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row420"
  },
  {
    "id": "cat-1f7cjhr",
    "nodeName": "特色產品",
    "nodeCode": "FP",
    "parentId": "cat-1n2r6hj",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "奧克蘭",
      "特色產品"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1n2r6hj",
      "cat-1f7cjhr"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Vera/一登",
    "ownerWindowId": "win-2guadj",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row421"
  },
  {
    "id": "cat-1oh3pzs",
    "nodeName": "主力供應商表",
    "nodeCode": "PR",
    "parentId": "cat-1n2r6hj",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "奧克蘭",
      "主力供應商表"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1n2r6hj",
      "cat-1oh3pzs"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Vera/一登",
    "ownerWindowId": "win-2guadj",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row422"
  },
  {
    "id": "cat-xtrmut",
    "nodeName": "專案執行佈達",
    "nodeCode": "PL",
    "parentId": "cat-1ezr84n",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "專案知識資產",
      "專案執行佈達"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-1ezr84n",
      "cat-xtrmut"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row452"
  },
  {
    "id": "cat-ifefmn",
    "nodeName": "專案結案資訊",
    "nodeCode": "PI",
    "parentId": "cat-1ezr84n",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "專案知識資產",
      "專案結案資訊"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-1ezr84n",
      "cat-ifefmn"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row453"
  },
  {
    "id": "cat-y1c1vv",
    "nodeName": "市場競爭情報",
    "nodeCode": "MI",
    "parentId": "cat-1ezr84n",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "專案知識資產",
      "市場競爭情報"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-1ezr84n",
      "cat-y1c1vv"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row454"
  },
  {
    "id": "cat-d6utmt",
    "nodeName": "0800早會簡報",
    "nodeCode": "0800",
    "parentId": "cat-1itltzf",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "專案管理",
      "0800早會簡報"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-1itltzf",
      "cat-d6utmt"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Eason",
    "ownerWindowId": "win-1az0and",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row169"
  },
  {
    "id": "cat-1mx4hzi",
    "nodeName": "知識管理系統",
    "nodeCode": "KM",
    "parentId": "cat-1itltzf",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "專案管理",
      "知識管理系統"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-1itltzf",
      "cat-1mx4hzi"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Eason",
    "ownerWindowId": "win-1az0and",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row173"
  },
  {
    "id": "cat-aw10sg",
    "nodeName": "出差報告",
    "nodeCode": "BTR",
    "parentId": "cat-1itltzf",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "專案管理",
      "出差報告"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-1itltzf",
      "cat-aw10sg"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row174"
  },
  {
    "id": "cat-16bboyy",
    "nodeName": "文件表單",
    "nodeCode": "DF",
    "parentId": "cat-18px74j",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "導領部",
      "文件表單"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-18px74j",
      "cat-16bboyy"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row374"
  },
  {
    "id": "cat-11j0kc2",
    "nodeName": "招募任用",
    "nodeCode": "RS",
    "parentId": "cat-18px74j",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "導領部",
      "招募任用"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-18px74j",
      "cat-11j0kc2"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row375"
  },
  {
    "id": "cat-zvd06w",
    "nodeName": "員工領隊",
    "nodeCode": "ST",
    "parentId": "cat-18px74j",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "導領部",
      "員工領隊"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-18px74j",
      "cat-zvd06w"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row376"
  },
  {
    "id": "cat-1hb71cz",
    "nodeName": "教育訓練",
    "nodeCode": "TE",
    "parentId": "cat-18px74j",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "導領部",
      "教育訓練"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-18px74j",
      "cat-1hb71cz"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row377"
  },
  {
    "id": "cat-ouaip5",
    "nodeName": "管理辦法",
    "nodeCode": "MR",
    "parentId": "cat-18px74j",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-產品群",
      "導領部",
      "管理辦法"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-18px74j",
      "cat-ouaip5"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row382"
  },
  {
    "id": "cat-1tqvu6",
    "nodeName": "車隊管理系統",
    "nodeCode": "FMS",
    "parentId": "cat-1dphqa5",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "數據與系統管理",
      "車隊管理系統"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-1dphqa5",
      "cat-1tqvu6"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row567"
  },
  {
    "id": "cat-11h3n99",
    "nodeName": "數據分析與報表",
    "nodeCode": "DA",
    "parentId": "cat-1dphqa5",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "數據與系統管理",
      "數據分析與報表"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-1dphqa5",
      "cat-11h3n99"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row568"
  },
  {
    "id": "cat-lmojdd",
    "nodeName": "調度與排班",
    "nodeCode": "DS",
    "parentId": "cat-1dphqa5",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "數據與系統管理",
      "調度與排班"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-1dphqa5",
      "cat-lmojdd"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row569"
  },
  {
    "id": "cat-1itswq1",
    "nodeName": "行車風險與安全管理",
    "nodeCode": "RS",
    "parentId": "cat-1dphqa5",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "數據與系統管理",
      "行車風險與安全管理"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-1dphqa5",
      "cat-1itswq1"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row570"
  },
  {
    "id": "cat-9d4hau",
    "nodeName": "管理辦法",
    "nodeCode": "MR",
    "parentId": "cat-uidhzc",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "文管中心",
      "管理辦法"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-uidhzc",
      "cat-9d4hau"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row175"
  },
  {
    "id": "cat-68kim9",
    "nodeName": "表單",
    "nodeCode": "FM",
    "parentId": "cat-uidhzc",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "文管中心",
      "表單"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-uidhzc",
      "cat-68kim9"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row176"
  },
  {
    "id": "cat-y5wu2o",
    "nodeName": "業務窗口",
    "nodeCode": "CT",
    "parentId": "cat-1mmu564",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "曼谷",
      "業務窗口"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1mmu564",
      "cat-y5wu2o"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Bonnie/一登",
    "ownerWindowId": "win-10jnl54",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row432"
  },
  {
    "id": "cat-xz20d8",
    "nodeName": "特色產品",
    "nodeCode": "FP",
    "parentId": "cat-1mmu564",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "曼谷",
      "特色產品"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1mmu564",
      "cat-xz20d8"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Bonnie/一登",
    "ownerWindowId": "win-10jnl54",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row433"
  },
  {
    "id": "cat-6yg963",
    "nodeName": "主力供應商表",
    "nodeCode": "PR",
    "parentId": "cat-1mmu564",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "曼谷",
      "主力供應商表"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1mmu564",
      "cat-6yg963"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Bonnie/一登",
    "ownerWindowId": "win-10jnl54",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row434"
  },
  {
    "id": "cat-1x9jhsx",
    "nodeName": "業務窗口",
    "nodeCode": "CT",
    "parentId": "cat-1y34hre",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "東京",
      "業務窗口"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1y34hre",
      "cat-1x9jhsx"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Tiffany/市原/一登",
    "ownerWindowId": "win-5pfciq",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row423"
  },
  {
    "id": "cat-1mxpdfd",
    "nodeName": "主力供應商表",
    "nodeCode": "PR",
    "parentId": "cat-1y34hre",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "東京",
      "主力供應商表"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1y34hre",
      "cat-1mxpdfd"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Tiffany/市原/一登",
    "ownerWindowId": "win-5pfciq",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row424"
  },
  {
    "id": "cat-1hdaqmr",
    "nodeName": "共用作業",
    "nodeCode": "CO",
    "parentId": "cat-14nzuyz",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "共用作業"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-1hdaqmr"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Max",
    "ownerWindowId": "win-gtvgs9",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row500"
  },
  {
    "id": "cat-17iz0fi",
    "nodeName": "通路",
    "nodeCode": "SC",
    "parentId": "cat-14nzuyz",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "通路"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-17iz0fi"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Max",
    "ownerWindowId": "win-gtvgs9",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row502"
  },
  {
    "id": "cat-1jx01u8",
    "nodeName": "產品",
    "nodeCode": "PD",
    "parentId": "cat-14nzuyz",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "產品"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-1jx01u8"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Max",
    "ownerWindowId": "win-gtvgs9",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row504"
  },
  {
    "id": "cat-1l6tto1",
    "nodeName": "供應商管理",
    "nodeCode": "SM",
    "parentId": "cat-53ualn",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "業務管理",
      "供應商管理"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-53ualn",
      "cat-1l6tto1"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row559"
  },
  {
    "id": "cat-2mttda",
    "nodeName": "集團",
    "nodeCode": "IC",
    "parentId": "cat-53ualn",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "業務管理",
      "集團"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-53ualn",
      "cat-2mttda"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row560"
  },
  {
    "id": "cat-28nolq",
    "nodeName": "外部 C+E",
    "nodeCode": "EC",
    "parentId": "cat-53ualn",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "業務管理",
      "外部 C+E"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-53ualn",
      "cat-28nolq"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row561"
  },
  {
    "id": "cat-s9je15",
    "nodeName": "客戶回饋與優化",
    "nodeCode": "CF",
    "parentId": "cat-53ualn",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "業務管理",
      "客戶回饋與優化"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-53ualn",
      "cat-s9je15"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row562"
  },
  {
    "id": "cat-1395i0g",
    "nodeName": "營收與對帳管理",
    "nodeCode": "RR",
    "parentId": "cat-53ualn",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "業務管理",
      "營收與對帳管理"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-53ualn",
      "cat-1395i0g"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row563"
  },
  {
    "id": "cat-1erysy4",
    "nodeName": "二階文件",
    "nodeCode": "OP",
    "parentId": "cat-pucpih",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "永續發展室",
      "二階文件"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-pucpih",
      "cat-1erysy4"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Yoyo",
    "ownerWindowId": "win-lbol9h",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row150"
  },
  {
    "id": "cat-13j4ipn",
    "nodeName": "三階文件",
    "nodeCode": "WI",
    "parentId": "cat-pucpih",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "永續發展室",
      "三階文件"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-pucpih",
      "cat-13j4ipn"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Yoyo",
    "ownerWindowId": "win-lbol9h",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row151"
  },
  {
    "id": "cat-aaxx2o",
    "nodeName": "教育訓練",
    "nodeCode": "TD",
    "parentId": "cat-pucpih",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "永續發展室",
      "教育訓練"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-pucpih",
      "cat-aaxx2o"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Yoyo",
    "ownerWindowId": "win-lbol9h",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row152"
  },
  {
    "id": "cat-809i94",
    "nodeName": "永續發展實績",
    "nodeCode": "SA",
    "parentId": "cat-pucpih",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "永續發展室",
      "永續發展實績"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-pucpih",
      "cat-809i94"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Yoyo",
    "ownerWindowId": "win-lbol9h",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row155"
  },
  {
    "id": "cat-1apuh6e",
    "nodeName": "永續報告書",
    "nodeCode": "SR",
    "parentId": "cat-pucpih",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "永續發展室",
      "永續報告書"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-pucpih",
      "cat-1apuh6e"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Yoyo",
    "ownerWindowId": "win-lbol9h",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row156"
  },
  {
    "id": "cat-3jn0zs",
    "nodeName": "新聞稿",
    "nodeCode": "PR",
    "parentId": "cat-pucpih",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "永續發展室",
      "新聞稿"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-pucpih",
      "cat-3jn0zs"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Yoyo",
    "ownerWindowId": "win-lbol9h",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row157"
  },
  {
    "id": "cat-1g1eyij",
    "nodeName": "業務窗口",
    "nodeCode": "CT",
    "parentId": "cat-1ghse6d",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "沖繩",
      "業務窗口"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1ghse6d",
      "cat-1g1eyij"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Tiffany/一登",
    "ownerWindowId": "win-57qw6o",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row425"
  },
  {
    "id": "cat-1w1v4n",
    "nodeName": "主力供應商表",
    "nodeCode": "PR",
    "parentId": "cat-1ghse6d",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "沖繩",
      "主力供應商表"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1ghse6d",
      "cat-1w1v4n"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Tiffany/一登",
    "ownerWindowId": "win-57qw6o",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row426"
  },
  {
    "id": "cat-b3ktif",
    "nodeName": "法規",
    "nodeCode": "LR",
    "parentId": "cat-g7cfbg",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "法務",
      "法規"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-g7cfbg",
      "cat-b3ktif"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "芝吟",
    "ownerWindowId": "win-1f8ckhh",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row46"
  },
  {
    "id": "cat-2d91zk",
    "nodeName": "定型化契約",
    "nodeCode": "LSC",
    "parentId": "cat-g7cfbg",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "法務",
      "定型化契約"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-g7cfbg",
      "cat-2d91zk"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "芝吟",
    "ownerWindowId": "win-1f8ckhh",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row56"
  },
  {
    "id": "cat-12hmrnt",
    "nodeName": "內部公版契約",
    "nodeCode": "LC",
    "parentId": "cat-g7cfbg",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "法務",
      "內部公版契約"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-g7cfbg",
      "cat-12hmrnt"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "芝吟",
    "ownerWindowId": "win-1f8ckhh",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row81"
  },
  {
    "id": "cat-gu6xuh",
    "nodeName": "外部客戶用表單",
    "nodeCode": "LSF",
    "parentId": "cat-g7cfbg",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "法務",
      "外部客戶用表單"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-g7cfbg",
      "cat-gu6xuh"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "芝吟",
    "ownerWindowId": "win-1f8ckhh",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row111"
  },
  {
    "id": "cat-11hsyxm",
    "nodeName": "內部作業表單",
    "nodeCode": "LWD",
    "parentId": "cat-g7cfbg",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "法務",
      "內部作業表單"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-g7cfbg",
      "cat-11hsyxm"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "芝吟",
    "ownerWindowId": "win-1f8ckhh",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row123"
  },
  {
    "id": "cat-t82r9v",
    "nodeName": "作業流程",
    "nodeCode": "LSOP",
    "parentId": "cat-g7cfbg",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "法務",
      "作業流程"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-g7cfbg",
      "cat-t82r9v"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "芝吟",
    "ownerWindowId": "win-1f8ckhh",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row128"
  },
  {
    "id": "cat-k56xrj",
    "nodeName": "業務窗口",
    "nodeCode": "CT",
    "parentId": "cat-1fd2y6e",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "洛杉磯",
      "業務窗口"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1fd2y6e",
      "cat-k56xrj"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Rain/Janice/一登",
    "ownerWindowId": "win-d11flo",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row411"
  },
  {
    "id": "cat-7ionb9",
    "nodeName": "特色產品",
    "nodeCode": "FP",
    "parentId": "cat-1fd2y6e",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "洛杉磯",
      "特色產品"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1fd2y6e",
      "cat-7ionb9"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Rain/Janice/一登",
    "ownerWindowId": "win-d11flo",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row412"
  },
  {
    "id": "cat-1c312jo",
    "nodeName": "主力供應商表",
    "nodeCode": "PR",
    "parentId": "cat-1fd2y6e",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "洛杉磯",
      "主力供應商表"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-1fd2y6e",
      "cat-1c312jo"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Rain/Janice/一登",
    "ownerWindowId": "win-d11flo",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row413"
  },
  {
    "id": "cat-awxfh1",
    "nodeName": "特色產品",
    "nodeCode": "FP",
    "parentId": "cat-10prkuj",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "溫哥華",
      "特色產品"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-10prkuj",
      "cat-awxfh1"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Rain/Janice/一登",
    "ownerWindowId": "win-d11flo",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row414"
  },
  {
    "id": "cat-jjeeb1",
    "nodeName": "業務窗口",
    "nodeCode": "CT",
    "parentId": "cat-10prkuj",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "溫哥華",
      "業務窗口"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-10prkuj",
      "cat-jjeeb1"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Rain/Janice/一登",
    "ownerWindowId": "win-d11flo",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row415"
  },
  {
    "id": "cat-1gcrz2p",
    "nodeName": "主力供應商表",
    "nodeCode": "PR",
    "parentId": "cat-10prkuj",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "溫哥華",
      "主力供應商表"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-10prkuj",
      "cat-1gcrz2p"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Rain/Janice/一登",
    "ownerWindowId": "win-d11flo",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row416"
  },
  {
    "id": "cat-1t0rfsh",
    "nodeName": "業務窗口",
    "nodeCode": "CT",
    "parentId": "cat-7ubopy",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "熊本",
      "業務窗口"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-7ubopy",
      "cat-1t0rfsh"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "市原/一登",
    "ownerWindowId": "win-n7afkm",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row427"
  },
  {
    "id": "cat-erdueh",
    "nodeName": "主力供應商表",
    "nodeCode": "PR",
    "parentId": "cat-7ubopy",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "熊本",
      "主力供應商表"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-7ubopy",
      "cat-erdueh"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "市原/一登",
    "ownerWindowId": "win-n7afkm",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row428"
  },
  {
    "id": "cat-1w0k8xx",
    "nodeName": "共用",
    "nodeCode": "COMM",
    "parentId": "cat-hvndt0",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-通路群",
      "直售",
      "共用"
    ],
    "pathIds": [
      "cat-1e0yb87",
      "cat-hvndt0",
      "cat-1w0k8xx"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "國煌/俊綱",
    "ownerWindowId": "win-xlqk9e",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row179"
  },
  {
    "id": "cat-zf0efh",
    "nodeName": "雄獅字典",
    "nodeCode": "LD",
    "parentId": "cat-zsk1qz",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "知識管理",
      "雄獅字典"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-zsk1qz",
      "cat-zf0efh"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Leona",
    "ownerWindowId": "win-u66vuu",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row167"
  },
  {
    "id": "cat-1eusyg3",
    "nodeName": "經營理念",
    "nodeCode": "BP",
    "parentId": "cat-zsk1qz",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "知識管理",
      "經營理念"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-zsk1qz",
      "cat-1eusyg3"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Leona",
    "ownerWindowId": "win-u66vuu",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row168"
  },
  {
    "id": "cat-ggnfgl",
    "nodeName": "九大循環",
    "nodeCode": "CYC",
    "parentId": "cat-10lwmaq",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "稽核室",
      "九大循環"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-10lwmaq",
      "cat-ggnfgl"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "得嘉/高瑞",
    "ownerWindowId": "win-getxf0",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row145"
  },
  {
    "id": "cat-1d43vva",
    "nodeName": "內部控制管理辦法",
    "nodeCode": "ICS",
    "parentId": "cat-10lwmaq",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "稽核室",
      "內部控制管理辦法"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-10lwmaq",
      "cat-1d43vva"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "得嘉/高瑞",
    "ownerWindowId": "win-getxf0",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row146"
  },
  {
    "id": "cat-1ld4k5u",
    "nodeName": "核決權限",
    "nodeCode": "AAT",
    "parentId": "cat-10lwmaq",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "稽核室",
      "核決權限"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-10lwmaq",
      "cat-1ld4k5u"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "得嘉/高瑞",
    "ownerWindowId": "win-getxf0",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row147"
  },
  {
    "id": "cat-10ur0ce",
    "nodeName": "知識分享",
    "nodeCode": "KMS",
    "parentId": "cat-10lwmaq",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "稽核室",
      "知識分享"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-10lwmaq",
      "cat-10ur0ce"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "得嘉/高瑞",
    "ownerWindowId": "win-getxf0",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row148"
  },
  {
    "id": "cat-kf3f4g",
    "nodeName": "年度策略與計畫",
    "nodeCode": "AP",
    "parentId": "cat-1228i2q",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "策略與績效管理",
      "年度策略與計畫"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-1228i2q",
      "cat-kf3f4g"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row444"
  },
  {
    "id": "cat-rva1vb",
    "nodeName": "資源與預算管理",
    "nodeCode": "RB",
    "parentId": "cat-1228i2q",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "策略與績效管理",
      "資源與預算管理"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-1228i2q",
      "cat-rva1vb"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row445"
  },
  {
    "id": "cat-1ksh06a",
    "nodeName": "目標與指標定義",
    "nodeCode": "TM",
    "parentId": "cat-1228i2q",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "策略與績效管理",
      "目標與指標定義"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-1228i2q",
      "cat-1ksh06a"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row446"
  },
  {
    "id": "cat-1pmujo5",
    "nodeName": "內部系統工具",
    "nodeCode": "IT",
    "parentId": "cat-1hq88b6",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "系統工具管理",
      "內部系統工具"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-1hq88b6",
      "cat-1pmujo5"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row455"
  },
  {
    "id": "cat-lggnae",
    "nodeName": "外部平台工具",
    "nodeCode": "ET",
    "parentId": "cat-1hq88b6",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "系統工具管理",
      "外部平台工具"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-1hq88b6",
      "cat-lggnae"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row456"
  },
  {
    "id": "cat-15hqnty",
    "nodeName": "組織與職責規範",
    "nodeCode": "OP",
    "parentId": "cat-17tck1b",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "組織與行政管理",
      "組織與職責規範"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-17tck1b",
      "cat-15hqnty"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row440"
  },
  {
    "id": "cat-1rauzpg",
    "nodeName": "人員培訓與發展",
    "nodeCode": "HR",
    "parentId": "cat-17tck1b",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "組織與行政管理",
      "人員培訓與發展"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-17tck1b",
      "cat-1rauzpg"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row441"
  },
  {
    "id": "cat-1vtf6h7",
    "nodeName": "行政與資安規範",
    "nodeCode": "AS",
    "parentId": "cat-17tck1b",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "組織與行政管理",
      "行政與資安規範"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-17tck1b",
      "cat-1vtf6h7"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row442"
  },
  {
    "id": "cat-adzb86",
    "nodeName": "品牌視覺規範",
    "nodeCode": "BS",
    "parentId": "cat-17tck1b",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-行銷群",
      "組織與行政管理",
      "品牌視覺規範"
    ],
    "pathIds": [
      "cat-1c2r7c2",
      "cat-17tck1b",
      "cat-adzb86"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "永智",
    "ownerWindowId": "win-azq7t3",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row443"
  },
  {
    "id": "cat-13kaanj",
    "nodeName": "會計",
    "nodeCode": "",
    "parentId": "cat-79t07e",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "財務管理",
      "會計"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-79t07e",
      "cat-13kaanj"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "厚均",
    "ownerWindowId": "win-191w4xq",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row38"
  },
  {
    "id": "cat-1etp0qt",
    "nodeName": "財務",
    "nodeCode": "",
    "parentId": "cat-79t07e",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "財務管理",
      "財務"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-79t07e",
      "cat-1etp0qt"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "厚均",
    "ownerWindowId": "win-191w4xq",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row39"
  },
  {
    "id": "cat-fhns5h",
    "nodeName": "股務",
    "nodeCode": "",
    "parentId": "cat-79t07e",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "財務管理",
      "股務"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-79t07e",
      "cat-fhns5h"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "厚均",
    "ownerWindowId": "win-191w4xq",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row40"
  },
  {
    "id": "cat-vwwyfb",
    "nodeName": "投資管理",
    "nodeCode": "",
    "parentId": "cat-79t07e",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "財務管理",
      "投資管理"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-79t07e",
      "cat-vwwyfb"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "厚均",
    "ownerWindowId": "win-191w4xq",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row41"
  },
  {
    "id": "cat-14njz4s",
    "nodeName": "報表組",
    "nodeCode": "",
    "parentId": "cat-79t07e",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "財務管理",
      "報表組"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-79t07e",
      "cat-14njz4s"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "厚均",
    "ownerWindowId": "win-191w4xq",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row42"
  },
  {
    "id": "cat-185zdo7",
    "nodeName": "一階文件",
    "nodeCode": "SI",
    "parentId": "cat-s5lpfx",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "資安暨個資管理室",
      "一階文件"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-s5lpfx",
      "cat-185zdo7"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "咸蓁",
    "ownerWindowId": "win-3rhbaq",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row159"
  },
  {
    "id": "cat-141ieq8",
    "nodeName": "二階文件",
    "nodeCode": "OP",
    "parentId": "cat-s5lpfx",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "資安暨個資管理室",
      "二階文件"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-s5lpfx",
      "cat-141ieq8"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "咸蓁",
    "ownerWindowId": "win-3rhbaq",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row160"
  },
  {
    "id": "cat-15cuuv3",
    "nodeName": "三階文件",
    "nodeCode": "WI",
    "parentId": "cat-s5lpfx",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "資安暨個資管理室",
      "三階文件"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-s5lpfx",
      "cat-15cuuv3"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "咸蓁",
    "ownerWindowId": "win-3rhbaq",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row161"
  },
  {
    "id": "cat-lq9jw0",
    "nodeName": "四階表單",
    "nodeCode": "FM",
    "parentId": "cat-s5lpfx",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "資安暨個資管理室",
      "四階表單"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-s5lpfx",
      "cat-lq9jw0"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "咸蓁",
    "ownerWindowId": "win-3rhbaq",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row162"
  },
  {
    "id": "cat-1kuhxfc",
    "nodeName": "其他資料",
    "nodeCode": "OD",
    "parentId": "cat-s5lpfx",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "資安暨個資管理室",
      "其他資料"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-s5lpfx",
      "cat-1kuhxfc"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "咸蓁",
    "ownerWindowId": "win-3rhbaq",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row163"
  },
  {
    "id": "cat-b8861g",
    "nodeName": "外來文件",
    "nodeCode": "ED",
    "parentId": "cat-s5lpfx",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "資安暨個資管理室",
      "外來文件"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-s5lpfx",
      "cat-b8861g"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "咸蓁",
    "ownerWindowId": "win-3rhbaq",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row164"
  },
  {
    "id": "cat-w6j6v1",
    "nodeName": "車輛資產管理",
    "nodeCode": "FA",
    "parentId": "cat-xfjis7",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "車隊管理",
      "車輛資產管理"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-xfjis7",
      "cat-w6j6v1"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row553"
  },
  {
    "id": "cat-1babmrj",
    "nodeName": "車輛靜態資料",
    "nodeCode": "FS",
    "parentId": "cat-xfjis7",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "車隊管理",
      "車輛靜態資料"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-xfjis7",
      "cat-1babmrj"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row554"
  },
  {
    "id": "cat-14jvodm",
    "nodeName": "車輛維修與保養",
    "nodeCode": "FM",
    "parentId": "cat-xfjis7",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "車隊管理",
      "車輛維修與保養"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-xfjis7",
      "cat-14jvodm"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row555"
  },
  {
    "id": "cat-b10obt",
    "nodeName": "燃油與成本管理",
    "nodeCode": "FC",
    "parentId": "cat-xfjis7",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "車隊管理",
      "燃油與成本管理"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-xfjis7",
      "cat-b10obt"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row556"
  },
  {
    "id": "cat-1ilrev4",
    "nodeName": "駕駛員管理",
    "nodeCode": "DM",
    "parentId": "cat-xfjis7",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "車隊管理",
      "駕駛員管理"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-xfjis7",
      "cat-1ilrev4"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row557"
  },
  {
    "id": "cat-so49ek",
    "nodeName": "法規遵循",
    "nodeCode": "RC",
    "parentId": "cat-xfjis7",
    "level": 3,
    "pathNames": [
      "雄獅通運",
      "車隊管理",
      "法規遵循"
    ],
    "pathIds": [
      "cat-13r3s6j",
      "cat-xfjis7",
      "cat-so49ek"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "伯叡",
    "ownerWindowId": "win-wd7gdp",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row558"
  },
  {
    "id": "cat-i01c5i",
    "nodeName": "集團新人訓",
    "nodeCode": "GN",
    "parentId": "cat-1ozudl",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "集團新人訓"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-i01c5i"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row17"
  },
  {
    "id": "cat-1ejcglm",
    "nodeName": "管理學院",
    "nodeCode": "MG",
    "parentId": "cat-1ozudl",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "管理學院"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-1ejcglm"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row23"
  },
  {
    "id": "cat-v9bwam",
    "nodeName": "食旅學院",
    "nodeCode": "RT",
    "parentId": "cat-1ozudl",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "食旅學院"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-v9bwam"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row24"
  },
  {
    "id": "cat-1o4ft4h",
    "nodeName": "通識學院",
    "nodeCode": "GE",
    "parentId": "cat-1ozudl",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "通識學院"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-1o4ft4h"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row25"
  },
  {
    "id": "cat-1klj13o",
    "nodeName": "管本學院",
    "nodeCode": "AD",
    "parentId": "cat-1ozudl",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "管本學院"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-1klj13o"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row26"
  },
  {
    "id": "cat-1suhv1k",
    "nodeName": "導領學院",
    "nodeCode": "TG",
    "parentId": "cat-1ozudl",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "導領學院"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-1suhv1k"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row27"
  },
  {
    "id": "cat-15gy36h",
    "nodeName": "行銷學院",
    "nodeCode": "MK",
    "parentId": "cat-1ozudl",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "行銷學院"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-15gy36h"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row28"
  },
  {
    "id": "cat-uvzlea",
    "nodeName": "產品學院",
    "nodeCode": "PD",
    "parentId": "cat-1ozudl",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "產品學院"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-uvzlea"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 8,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row29"
  },
  {
    "id": "cat-go5fdg",
    "nodeName": "銷售學院",
    "nodeCode": "SL",
    "parentId": "cat-1ozudl",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "銷售學院"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-go5fdg"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 9,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row33"
  },
  {
    "id": "cat-1kzhydo",
    "nodeName": "業務窗口",
    "nodeCode": "CT",
    "parentId": "cat-17ubcca",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "雪梨",
      "業務窗口"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-17ubcca",
      "cat-1kzhydo"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Vera/一登",
    "ownerWindowId": "win-2guadj",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row417"
  },
  {
    "id": "cat-4rjsrq",
    "nodeName": "特色產品",
    "nodeCode": "FP",
    "parentId": "cat-17ubcca",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "雪梨",
      "特色產品"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-17ubcca",
      "cat-4rjsrq"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Vera/一登",
    "ownerWindowId": "win-2guadj",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row418"
  },
  {
    "id": "cat-p2k8hr",
    "nodeName": "主力供應商表",
    "nodeCode": "PR",
    "parentId": "cat-17ubcca",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "雪梨",
      "主力供應商表"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-17ubcca",
      "cat-p2k8hr"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Vera/一登",
    "ownerWindowId": "win-2guadj",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row419"
  },
  {
    "id": "cat-1u0q6w9",
    "nodeName": "使用者需求規格",
    "nodeCode": "URS",
    "parentId": "cat-fl9bqz",
    "level": 3,
    "pathNames": [
      "雄獅資訊",
      "需求規格相關",
      "使用者需求規格"
    ],
    "pathIds": [
      "cat-1k4xptv",
      "cat-fl9bqz",
      "cat-1u0q6w9"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "安妮",
    "ownerWindowId": "win-1rwp4n2",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row483"
  },
  {
    "id": "cat-p0005",
    "nodeName": "IT需求規格",
    "nodeCode": "ITRS",
    "parentId": "cat-fl9bqz",
    "level": 3,
    "pathNames": [
      "雄獅資訊",
      "需求規格相關",
      "IT需求規格"
    ],
    "pathIds": [
      "cat-1k4xptv",
      "cat-fl9bqz",
      "cat-p0005"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "安妮",
    "ownerWindowId": "win-1rwp4n2",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row484"
  },
  {
    "id": "cat-5gb0",
    "nodeName": "業務窗口",
    "nodeCode": "CT",
    "parentId": "cat-s943dy",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "香港",
      "業務窗口"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-s943dy",
      "cat-5gb0"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Glo/一登",
    "ownerWindowId": "win-11vfwd1",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row435"
  },
  {
    "id": "cat-1d4q47o",
    "nodeName": "主力供應商表",
    "nodeCode": "PR",
    "parentId": "cat-s943dy",
    "level": 3,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "香港",
      "主力供應商表"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-s943dy",
      "cat-1d4q47o"
    ],
    "isSelectable": false,
    "isLeaf": false,
    "ownerWindowName": "Glo/一登",
    "ownerWindowId": "win-11vfwd1",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row436"
  },
  {
    "id": "cat-1cgouoz",
    "nodeName": "2026年",
    "nodeCode": "26Y",
    "parentId": "cat-d6utmt",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "專案管理",
      "0800早會簡報",
      "2026年"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-1itltzf",
      "cat-d6utmt",
      "cat-1cgouoz"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Eason",
    "ownerWindowId": "win-1az0and",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row169"
  },
  {
    "id": "cat-1hg2nbx",
    "nodeName": "2025年",
    "nodeCode": "25Y",
    "parentId": "cat-d6utmt",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "專案管理",
      "0800早會簡報",
      "2025年"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-1itltzf",
      "cat-d6utmt",
      "cat-1hg2nbx"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Eason",
    "ownerWindowId": "win-1az0and",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row170"
  },
  {
    "id": "cat-1yx0pa",
    "nodeName": "2024年",
    "nodeCode": "24Y",
    "parentId": "cat-d6utmt",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "專案管理",
      "0800早會簡報",
      "2024年"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-1itltzf",
      "cat-d6utmt",
      "cat-1yx0pa"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Eason",
    "ownerWindowId": "win-1az0and",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row171"
  },
  {
    "id": "cat-6o311z",
    "nodeName": "2023年",
    "nodeCode": "23Y",
    "parentId": "cat-d6utmt",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "專案管理",
      "0800早會簡報",
      "2023年"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-1itltzf",
      "cat-d6utmt",
      "cat-6o311z"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Eason",
    "ownerWindowId": "win-1az0and",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row172"
  },
  {
    "id": "cat-9huqk5",
    "nodeName": "國旅OP操作流程與注意事項",
    "nodeCode": "TR",
    "parentId": "cat-lq1pkh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "OP作業",
      "國旅OP操作流程與注意事項"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-lq1pkh",
      "cat-9huqk5"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row354"
  },
  {
    "id": "cat-1dn8bjg",
    "nodeName": "團體支單簽核流程",
    "nodeCode": "SOP",
    "parentId": "cat-lq1pkh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "OP作業",
      "團體支單簽核流程"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-lq1pkh",
      "cat-1dn8bjg"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row355"
  },
  {
    "id": "cat-1jwl8b8",
    "nodeName": "元件",
    "nodeCode": "FIT",
    "parentId": "cat-1d4q47o",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "香港",
      "主力供應商表",
      "元件"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-s943dy",
      "cat-1d4q47o",
      "cat-1jwl8b8"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Rain/Janice/一登",
    "ownerWindowId": "win-d11flo",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row413"
  },
  {
    "id": "cat-1wqg1dz",
    "nodeName": "TP",
    "nodeCode": "TP",
    "parentId": "cat-1cucfyz",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "亞非",
      "TP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1cucfyz",
      "cat-1wqg1dz"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row206"
  },
  {
    "id": "cat-zho3qa",
    "nodeName": "RC",
    "nodeCode": "RC",
    "parentId": "cat-1cucfyz",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "亞非",
      "RC"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1cucfyz",
      "cat-zho3qa"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row207"
  },
  {
    "id": "cat-c4p6pj",
    "nodeName": "OP",
    "nodeCode": "OP",
    "parentId": "cat-1cucfyz",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "亞非",
      "OP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1cucfyz",
      "cat-c4p6pj"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row208"
  },
  {
    "id": "cat-119xvc7",
    "nodeName": "機密",
    "nodeCode": "SC",
    "parentId": "cat-1cucfyz",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "亞非",
      "機密"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1cucfyz",
      "cat-119xvc7"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row209"
  },
  {
    "id": "cat-196a2je",
    "nodeName": "辦法",
    "nodeCode": "RU",
    "parentId": "cat-iqtwdb",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "人才培育組",
      "辦法"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-iqtwdb",
      "cat-196a2je"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row14"
  },
  {
    "id": "cat-56jbmy",
    "nodeName": "表單",
    "nodeCode": "FM",
    "parentId": "cat-iqtwdb",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "人才培育組",
      "表單"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-iqtwdb",
      "cat-56jbmy"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row15"
  },
  {
    "id": "cat-ursnkw",
    "nodeName": "酒店(機密)",
    "nodeCode": "HTL",
    "parentId": "cat-1hebro8",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "供應商",
      "酒店(機密)"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-1hebro8",
      "cat-ursnkw"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row350"
  },
  {
    "id": "cat-1i4yne9",
    "nodeName": "稀缺元件",
    "nodeCode": "SC",
    "parentId": "cat-1hebro8",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "供應商",
      "稀缺元件"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-1hebro8",
      "cat-1i4yne9"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row351"
  },
  {
    "id": "cat-24cejr",
    "nodeName": "航空資源",
    "nodeCode": "AL",
    "parentId": "cat-1hebro8",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "供應商",
      "航空資源"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-1hebro8",
      "cat-24cejr"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row352"
  },
  {
    "id": "cat-1ud5xkg",
    "nodeName": "其他元件",
    "nodeCode": "OTR",
    "parentId": "cat-1hebro8",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "供應商",
      "其他元件"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-1hebro8",
      "cat-1ud5xkg"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row353"
  },
  {
    "id": "cat-3hnyak",
    "nodeName": "成本結構(機密)",
    "nodeCode": "CS",
    "parentId": "cat-d6fdpe",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "入境部",
      "成本結構(機密)"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-d6fdpe",
      "cat-3hnyak"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row343"
  },
  {
    "id": "cat-19o0c4z",
    "nodeName": "產品設計實務",
    "nodeCode": "TP",
    "parentId": "cat-d6fdpe",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "入境部",
      "產品設計實務"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-d6fdpe",
      "cat-19o0c4z"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row344"
  },
  {
    "id": "cat-faxmos",
    "nodeName": "業務開發實務",
    "nodeCode": "RC",
    "parentId": "cat-d6fdpe",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "入境部",
      "業務開發實務"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-d6fdpe",
      "cat-faxmos"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row345"
  },
  {
    "id": "cat-7iwisj",
    "nodeName": "行程表",
    "nodeCode": "PR",
    "parentId": "cat-d6fdpe",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "入境部",
      "行程表"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-d6fdpe",
      "cat-7iwisj"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row346"
  },
  {
    "id": "cat-vvbcz7",
    "nodeName": "教育訓練",
    "nodeCode": "TR",
    "parentId": "cat-d6fdpe",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "入境部",
      "教育訓練"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-d6fdpe",
      "cat-vvbcz7"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row347"
  },
  {
    "id": "cat-z1800v",
    "nodeName": "業務所需文件",
    "nodeCode": "BD",
    "parentId": "cat-d6fdpe",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "入境部",
      "業務所需文件"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-d6fdpe",
      "cat-z1800v"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row348"
  },
  {
    "id": "cat-6ixgum",
    "nodeName": "交通載具",
    "nodeCode": "BS",
    "parentId": "cat-d6fdpe",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "入境部",
      "交通載具"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-d6fdpe",
      "cat-6ixgum"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row349"
  },
  {
    "id": "cat-1o6b598",
    "nodeName": "企劃共用",
    "nodeCode": "PL",
    "parentId": "cat-1hdaqmr",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "共用作業",
      "企劃共用"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-1hdaqmr",
      "cat-1o6b598"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Max",
    "ownerWindowId": "win-gtvgs9",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row500"
  },
  {
    "id": "cat-5dkapo",
    "nodeName": "總務",
    "nodeCode": "AGD",
    "parentId": "cat-1hdaqmr",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "共用作業",
      "總務"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-1hdaqmr",
      "cat-5dkapo"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row550"
  },
  {
    "id": "cat-1b4nxbb",
    "nodeName": "財會/總務資料留存",
    "nodeCode": "FI",
    "parentId": "cat-1hdaqmr",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "共用作業",
      "財會/總務資料留存"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-1hdaqmr",
      "cat-1b4nxbb"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Max",
    "ownerWindowId": "win-gtvgs9",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row501"
  },
  {
    "id": "cat-1t5vtvp",
    "nodeName": "璽品",
    "nodeCode": "CTS",
    "parentId": "cat-10cjwg",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "合約文件(機密)",
      "璽品"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-10cjwg",
      "cat-1t5vtvp"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row254"
  },
  {
    "id": "cat-i9au1z",
    "nodeName": "郵輪",
    "nodeCode": "CTC",
    "parentId": "cat-10cjwg",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "合約文件(機密)",
      "郵輪"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-10cjwg",
      "cat-i9au1z"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row255"
  },
  {
    "id": "cat-10xkbkl",
    "nodeName": "運動",
    "nodeCode": "CTW",
    "parentId": "cat-10cjwg",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "合約文件(機密)",
      "運動"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-10cjwg",
      "cat-10xkbkl"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row256"
  },
  {
    "id": "cat-1gnf842",
    "nodeName": "中南美",
    "nodeCode": "CTM",
    "parentId": "cat-10cjwg",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "合約文件(機密)",
      "中南美"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-10cjwg",
      "cat-1gnf842"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row257"
  },
  {
    "id": "cat-oygqce",
    "nodeName": "主題客製",
    "nodeCode": "CTJ",
    "parentId": "cat-10cjwg",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "合約文件(機密)",
      "主題客製"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-10cjwg",
      "cat-oygqce"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row258"
  },
  {
    "id": "cat-110qjir",
    "nodeName": "鐵道",
    "nodeCode": "CTR",
    "parentId": "cat-10cjwg",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "合約文件(機密)",
      "鐵道"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-10cjwg",
      "cat-110qjir"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row259"
  },
  {
    "id": "cat-1dzwaz4",
    "nodeName": "璽品",
    "nodeCode": "BMS",
    "parentId": "cat-phopyu",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "品牌經營",
      "璽品"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-phopyu",
      "cat-1dzwaz4"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row245"
  },
  {
    "id": "cat-1olfzcw",
    "nodeName": "郵輪",
    "nodeCode": "BMC",
    "parentId": "cat-phopyu",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "品牌經營",
      "郵輪"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-phopyu",
      "cat-1olfzcw"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row246"
  },
  {
    "id": "cat-1gfuy98",
    "nodeName": "運動",
    "nodeCode": "BMW",
    "parentId": "cat-phopyu",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "品牌經營",
      "運動"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-phopyu",
      "cat-1gfuy98"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row247"
  },
  {
    "id": "cat-1h9rclr",
    "nodeName": "中南美",
    "nodeCode": "BMM",
    "parentId": "cat-phopyu",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "品牌經營",
      "中南美"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-phopyu",
      "cat-1h9rclr"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row248"
  },
  {
    "id": "cat-1ars3up",
    "nodeName": "鐵道",
    "nodeCode": "BMR",
    "parentId": "cat-phopyu",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "品牌經營",
      "鐵道"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-phopyu",
      "cat-1ars3up"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row249"
  },
  {
    "id": "cat-1pib0ti",
    "nodeName": "管理辦法",
    "nodeCode": "MR",
    "parentId": "cat-m1bb48",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "員工關係",
      "管理辦法"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-m1bb48",
      "cat-1pib0ti"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "美婷",
    "ownerWindowId": "win-1vuln6a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row10"
  },
  {
    "id": "cat-1oxl50p",
    "nodeName": "勞工健康服務四大計畫",
    "nodeCode": "LHS",
    "parentId": "cat-m1bb48",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "員工關係",
      "勞工健康服務四大計畫"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-m1bb48",
      "cat-1oxl50p"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "美婷",
    "ownerWindowId": "win-1vuln6a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row11"
  },
  {
    "id": "cat-fvr8cd",
    "nodeName": "職福會",
    "nodeCode": "OWA",
    "parentId": "cat-m1bb48",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "員工關係",
      "職福會"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-m1bb48",
      "cat-fvr8cd"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "美婷",
    "ownerWindowId": "win-1vuln6a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row12"
  },
  {
    "id": "cat-t6u9rv",
    "nodeName": "火車",
    "nodeCode": "TRA",
    "parentId": "cat-t5b973",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_自由行",
      "國內自由行",
      "火車"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-n985sj",
      "cat-t5b973",
      "cat-t6u9rv"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Winnie",
    "ownerWindowId": "win-ogrc4j",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row296"
  },
  {
    "id": "cat-ezclyr",
    "nodeName": "租車",
    "nodeCode": "CAR",
    "parentId": "cat-t5b973",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_自由行",
      "國內自由行",
      "租車"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-n985sj",
      "cat-t5b973",
      "cat-ezclyr"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Winnie",
    "ownerWindowId": "win-ogrc4j",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row297"
  },
  {
    "id": "cat-1ec0q89",
    "nodeName": "航空",
    "nodeCode": "AIR",
    "parentId": "cat-t5b973",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_自由行",
      "國內自由行",
      "航空"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-n985sj",
      "cat-t5b973",
      "cat-1ec0q89"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Winnie",
    "ownerWindowId": "win-ogrc4j",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row298"
  },
  {
    "id": "cat-134sn74",
    "nodeName": "高鐵",
    "nodeCode": "HSR",
    "parentId": "cat-t5b973",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_自由行",
      "國內自由行",
      "高鐵"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-n985sj",
      "cat-t5b973",
      "cat-134sn74"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Winnie",
    "ownerWindowId": "win-ogrc4j",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row299"
  },
  {
    "id": "cat-x9mm68",
    "nodeName": "主力酒店",
    "nodeCode": "MF",
    "parentId": "cat-1n6cgqg",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_訂房",
      "國內訂房",
      "主力酒店"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-q4dnug",
      "cat-1n6cgqg",
      "cat-x9mm68"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row283"
  },
  {
    "id": "cat-1jeirfs",
    "nodeName": "供應商合約",
    "nodeCode": "SR",
    "parentId": "cat-1n6cgqg",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_訂房",
      "國內訂房",
      "供應商合約"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-q4dnug",
      "cat-1n6cgqg",
      "cat-1jeirfs"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row284"
  },
  {
    "id": "cat-xt4xo4",
    "nodeName": "外部資料",
    "nodeCode": "OSB",
    "parentId": "cat-vu170i",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "國旅發展",
      "外部資料"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-vu170i",
      "cat-xt4xo4"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row316"
  },
  {
    "id": "cat-kujnos",
    "nodeName": "內部資料",
    "nodeCode": "ISB",
    "parentId": "cat-vu170i",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "國旅發展",
      "內部資料"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-vu170i",
      "cat-kujnos"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row317"
  },
  {
    "id": "cat-kyh9tj",
    "nodeName": "國旅組織介紹",
    "nodeCode": "NO",
    "parentId": "cat-vu170i",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "國旅發展",
      "國旅組織介紹"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-vu170i",
      "cat-kyh9tj"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row318"
  },
  {
    "id": "cat-1kqay5c",
    "nodeName": "主力酒店",
    "nodeCode": "MF",
    "parentId": "cat-17vj381",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_訂房",
      "國際訂房",
      "主力酒店"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-q4dnug",
      "cat-17vj381",
      "cat-1kqay5c"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row286"
  },
  {
    "id": "cat-p6kxgc",
    "nodeName": "供應商合約",
    "nodeCode": "SR",
    "parentId": "cat-17vj381",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "FIT元件_訂房",
      "國際訂房",
      "供應商合約"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-q4dnug",
      "cat-17vj381",
      "cat-p6kxgc"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row287"
  },
  {
    "id": "cat-1p5ck58",
    "nodeName": "TP",
    "nodeCode": "TP",
    "parentId": "cat-1240quz",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "大洋洲",
      "TP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1240quz",
      "cat-1p5ck58"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row197"
  },
  {
    "id": "cat-zkkmmn",
    "nodeName": "RC",
    "nodeCode": "RC",
    "parentId": "cat-1240quz",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "大洋洲",
      "RC"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1240quz",
      "cat-zkkmmn"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row198"
  },
  {
    "id": "cat-vwefzc",
    "nodeName": "OP",
    "nodeCode": "OP",
    "parentId": "cat-1240quz",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "大洋洲",
      "OP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1240quz",
      "cat-vwefzc"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row199"
  },
  {
    "id": "cat-17mm5as",
    "nodeName": "機密",
    "nodeCode": "SC",
    "parentId": "cat-1240quz",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "大洋洲",
      "機密"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1240quz",
      "cat-17mm5as"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row200"
  },
  {
    "id": "cat-16f5z9t",
    "nodeName": "共用",
    "nodeCode": "COMM",
    "parentId": "cat-1240quz",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "大洋洲",
      "共用"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1240quz",
      "cat-16f5z9t"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row201"
  },
  {
    "id": "cat-1k10ti9",
    "nodeName": "TP",
    "nodeCode": "TP",
    "parentId": "cat-735n7z",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "大陸",
      "TP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-735n7z",
      "cat-1k10ti9"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row210"
  },
  {
    "id": "cat-1ax908k",
    "nodeName": "RC",
    "nodeCode": "RC",
    "parentId": "cat-735n7z",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "大陸",
      "RC"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-735n7z",
      "cat-1ax908k"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row211"
  },
  {
    "id": "cat-1lxu0ol",
    "nodeName": "OP",
    "nodeCode": "OP",
    "parentId": "cat-735n7z",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "大陸",
      "OP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-735n7z",
      "cat-1lxu0ol"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row212"
  },
  {
    "id": "cat-kagnw5",
    "nodeName": "機密",
    "nodeCode": "SC",
    "parentId": "cat-735n7z",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "大陸",
      "機密"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-735n7z",
      "cat-kagnw5"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row213"
  },
  {
    "id": "cat-7hgcsb",
    "nodeName": "TP",
    "nodeCode": "TP",
    "parentId": "cat-185dmxc",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "太平洋小島",
      "TP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-185dmxc",
      "cat-7hgcsb"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row193"
  },
  {
    "id": "cat-19e79as",
    "nodeName": "RC",
    "nodeCode": "RC",
    "parentId": "cat-185dmxc",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "太平洋小島",
      "RC"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-185dmxc",
      "cat-19e79as"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row194"
  },
  {
    "id": "cat-19s8sdb",
    "nodeName": "OP",
    "nodeCode": "OP",
    "parentId": "cat-185dmxc",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "太平洋小島",
      "OP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-185dmxc",
      "cat-19s8sdb"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row195"
  },
  {
    "id": "cat-vcd0t9",
    "nodeName": "機密",
    "nodeCode": "SC",
    "parentId": "cat-185dmxc",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "太平洋小島",
      "機密"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-185dmxc",
      "cat-vcd0t9"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row196"
  },
  {
    "id": "cat-xc8vk9",
    "nodeName": "出境導領",
    "nodeCode": "TLDO",
    "parentId": "cat-1a7bast",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "導領部",
      "出境導領"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1a7bast",
      "cat-xc8vk9"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row538"
  },
  {
    "id": "cat-cgxhhd",
    "nodeName": "國旅導領",
    "nodeCode": "TLDI",
    "parentId": "cat-1a7bast",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "導領部",
      "國旅導領"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1a7bast",
      "cat-cgxhhd"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row539"
  },
  {
    "id": "cat-1mhmasc",
    "nodeName": "機密文件",
    "nodeCode": "TLDSC",
    "parentId": "cat-1a7bast",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "導領部",
      "機密文件"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1a7bast",
      "cat-1mhmasc"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row540"
  },
  {
    "id": "cat-1hb24kh",
    "nodeName": "2025目標",
    "nodeCode": "25TA",
    "parentId": "cat-1g4pvbq",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "年度目標計畫",
      "2025目標"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-1g4pvbq",
      "cat-1hb24kh"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row390"
  },
  {
    "id": "cat-12up7v8",
    "nodeName": "2026目標",
    "nodeCode": "26TA",
    "parentId": "cat-1g4pvbq",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "年度目標計畫",
      "2026目標"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-1g4pvbq",
      "cat-12up7v8"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row391"
  },
  {
    "id": "cat-1md2bbs",
    "nodeName": "ˋ",
    "nodeCode": "",
    "parentId": "cat-11j0kc2",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "導領部",
      "招募任用",
      "ˋ"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-18px74j",
      "cat-11j0kc2",
      "cat-1md2bbs"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row375"
  },
  {
    "id": "cat-1c8dtko",
    "nodeName": "取證作業-永續旅遊",
    "nodeCode": "ST",
    "parentId": "cat-aaxx2o",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "永續發展室",
      "教育訓練",
      "取證作業-永續旅遊"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-pucpih",
      "cat-aaxx2o",
      "cat-1c8dtko"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Yoyo",
    "ownerWindowId": "win-lbol9h",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row152"
  },
  {
    "id": "cat-kms1bd",
    "nodeName": "領隊會議",
    "nodeCode": "TM",
    "parentId": "cat-1hb71cz",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "導領部",
      "教育訓練",
      "領隊會議"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-18px74j",
      "cat-1hb71cz",
      "cat-kms1bd"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row377"
  },
  {
    "id": "cat-lx88xm",
    "nodeName": "取證作業-ISO14064-1",
    "nodeCode": "GH",
    "parentId": "cat-aaxx2o",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "永續發展室",
      "教育訓練",
      "取證作業-ISO14064-1"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-pucpih",
      "cat-aaxx2o",
      "cat-lx88xm"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Yoyo",
    "ownerWindowId": "win-lbol9h",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row153"
  },
  {
    "id": "cat-fmf1xe",
    "nodeName": "基礎課程",
    "nodeCode": "BC",
    "parentId": "cat-1hb71cz",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "導領部",
      "教育訓練",
      "基礎課程"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-18px74j",
      "cat-1hb71cz",
      "cat-fmf1xe"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row378"
  },
  {
    "id": "cat-1xpmo74",
    "nodeName": "其他",
    "nodeCode": "EX",
    "parentId": "cat-aaxx2o",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "永續發展室",
      "教育訓練",
      "其他"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-pucpih",
      "cat-aaxx2o",
      "cat-1xpmo74"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Yoyo",
    "ownerWindowId": "win-lbol9h",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row154"
  },
  {
    "id": "cat-ionht4",
    "nodeName": "通識課程",
    "nodeCode": "GE",
    "parentId": "cat-1hb71cz",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "導領部",
      "教育訓練",
      "通識課程"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-18px74j",
      "cat-1hb71cz",
      "cat-ionht4"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row379"
  },
  {
    "id": "cat-eyioj",
    "nodeName": "職能精進",
    "nodeCode": "SE",
    "parentId": "cat-1hb71cz",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "導領部",
      "教育訓練",
      "職能精進"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-18px74j",
      "cat-1hb71cz",
      "cat-eyioj"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row380"
  },
  {
    "id": "cat-1rpmo0m",
    "nodeName": "職能發展",
    "nodeCode": "CD",
    "parentId": "cat-1hb71cz",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "導領部",
      "教育訓練",
      "職能發展"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-18px74j",
      "cat-1hb71cz",
      "cat-1rpmo0m"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row381"
  },
  {
    "id": "cat-1mkiars",
    "nodeName": "銷退單簽核流程",
    "nodeCode": "",
    "parentId": "cat-13kaanj",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "財務管理",
      "會計",
      "銷退單簽核流程"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-79t07e",
      "cat-13kaanj",
      "cat-1mkiars"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "厚均",
    "ownerWindowId": "win-191w4xq",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row38"
  },
  {
    "id": "cat-1krs7ey",
    "nodeName": "TP",
    "nodeCode": "TP",
    "parentId": "cat-1284ud7",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "東北亞日本",
      "TP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1284ud7",
      "cat-1krs7ey"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row218"
  },
  {
    "id": "cat-1oimmin",
    "nodeName": "RC",
    "nodeCode": "RC",
    "parentId": "cat-1284ud7",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "東北亞日本",
      "RC"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1284ud7",
      "cat-1oimmin"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row219"
  },
  {
    "id": "cat-2qndt7",
    "nodeName": "OP",
    "nodeCode": "OP",
    "parentId": "cat-1284ud7",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "東北亞日本",
      "OP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1284ud7",
      "cat-2qndt7"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row220"
  },
  {
    "id": "cat-1kw8kd2",
    "nodeName": "手配",
    "nodeCode": "PL",
    "parentId": "cat-1284ud7",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "東北亞日本",
      "手配"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1284ud7",
      "cat-1kw8kd2"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row221"
  },
  {
    "id": "cat-14ogcaq",
    "nodeName": "機密",
    "nodeCode": "SC",
    "parentId": "cat-1284ud7",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "東北亞日本",
      "機密"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1284ud7",
      "cat-14ogcaq"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row222"
  },
  {
    "id": "cat-6tw5yl",
    "nodeName": "TP",
    "nodeCode": "TP",
    "parentId": "cat-2zf51z",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "東北亞韓國",
      "TP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-2zf51z",
      "cat-6tw5yl"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row223"
  },
  {
    "id": "cat-1sbb6si",
    "nodeName": "RC",
    "nodeCode": "RC",
    "parentId": "cat-2zf51z",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "東北亞韓國",
      "RC"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-2zf51z",
      "cat-1sbb6si"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row224"
  },
  {
    "id": "cat-1d8nmot",
    "nodeName": "OP",
    "nodeCode": "OP",
    "parentId": "cat-2zf51z",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "東北亞韓國",
      "OP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-2zf51z",
      "cat-1d8nmot"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row225"
  },
  {
    "id": "cat-169oi27",
    "nodeName": "機密",
    "nodeCode": "SC",
    "parentId": "cat-2zf51z",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "東北亞韓國",
      "機密"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-2zf51z",
      "cat-169oi27"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row226"
  },
  {
    "id": "cat-hkuq6v",
    "nodeName": "TP",
    "nodeCode": "TP",
    "parentId": "cat-o5w7jt",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "東南亞",
      "TP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-o5w7jt",
      "cat-hkuq6v"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row227"
  },
  {
    "id": "cat-ffs9so",
    "nodeName": "RC",
    "nodeCode": "RC",
    "parentId": "cat-o5w7jt",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "東南亞",
      "RC"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-o5w7jt",
      "cat-ffs9so"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row228"
  },
  {
    "id": "cat-1jbuugz",
    "nodeName": "OP",
    "nodeCode": "OP",
    "parentId": "cat-o5w7jt",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "東南亞",
      "OP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-o5w7jt",
      "cat-1jbuugz"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row229"
  },
  {
    "id": "cat-e0fm82",
    "nodeName": "機密",
    "nodeCode": "SC",
    "parentId": "cat-o5w7jt",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "東南亞",
      "機密"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-o5w7jt",
      "cat-e0fm82"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row230"
  },
  {
    "id": "cat-1ihh7cn",
    "nodeName": "TP",
    "nodeCode": "TP",
    "parentId": "cat-zj22r5",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "歐洲",
      "TP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-zj22r5",
      "cat-1ihh7cn"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row202"
  },
  {
    "id": "cat-18whpr6",
    "nodeName": "RC",
    "nodeCode": "RC",
    "parentId": "cat-zj22r5",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "歐洲",
      "RC"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-zj22r5",
      "cat-18whpr6"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row203"
  },
  {
    "id": "cat-aa7rnb",
    "nodeName": "OP",
    "nodeCode": "OP",
    "parentId": "cat-zj22r5",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "歐洲",
      "OP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-zj22r5",
      "cat-aa7rnb"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row204"
  },
  {
    "id": "cat-lr15t3",
    "nodeName": "機密",
    "nodeCode": "SC",
    "parentId": "cat-zj22r5",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "歐洲",
      "機密"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-zj22r5",
      "cat-lr15t3"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row205"
  },
  {
    "id": "cat-iufonl",
    "nodeName": "中國大陸_中國大陸公司四站作業流程圖",
    "nodeCode": "CN",
    "parentId": "cat-1w3kc97",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "流程梳理",
      "中國大陸_中國大陸公司四站作業流程圖"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-1w3kc97",
      "cat-iufonl"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row405"
  },
  {
    "id": "cat-1mvhmvo",
    "nodeName": "日本_Coach tour kk上架流程",
    "nodeCode": "CT",
    "parentId": "cat-1w3kc97",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "流程梳理",
      "日本_Coach tour kk上架流程"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-1w3kc97",
      "cat-1mvhmvo"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row406"
  },
  {
    "id": "cat-1e2kyg5",
    "nodeName": "北美_旅展報名流程",
    "nodeCode": "NA",
    "parentId": "cat-1w3kc97",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "流程梳理",
      "北美_旅展報名流程"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-1w3kc97",
      "cat-1e2kyg5"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row407"
  },
  {
    "id": "cat-1hmo13r",
    "nodeName": "全球票產系統生態圖",
    "nodeCode": "GL",
    "parentId": "cat-1w3kc97",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "流程梳理",
      "全球票產系統生態圖"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-1w3kc97",
      "cat-1hmo13r"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": null,
    "ownerWindowId": null,
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row408"
  },
  {
    "id": "cat-15hilp2",
    "nodeName": "TP",
    "nodeCode": "TP",
    "parentId": "cat-1vw1f08",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "港澳珠圳",
      "TP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1vw1f08",
      "cat-15hilp2"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row214"
  },
  {
    "id": "cat-1omhmyj",
    "nodeName": "RC",
    "nodeCode": "RC",
    "parentId": "cat-1vw1f08",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "港澳珠圳",
      "RC"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1vw1f08",
      "cat-1omhmyj"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row215"
  },
  {
    "id": "cat-1jnd7oy",
    "nodeName": "OP",
    "nodeCode": "OP",
    "parentId": "cat-1vw1f08",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "港澳珠圳",
      "OP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1vw1f08",
      "cat-1jnd7oy"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row216"
  },
  {
    "id": "cat-6nhd4e",
    "nodeName": "機密",
    "nodeCode": "SC",
    "parentId": "cat-1vw1f08",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "港澳珠圳",
      "機密"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1vw1f08",
      "cat-6nhd4e"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row217"
  },
  {
    "id": "cat-bj60n0",
    "nodeName": "成本結構(機密)",
    "nodeCode": "CS",
    "parentId": "cat-lw5gmp",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "獎勵旅遊",
      "成本結構(機密)"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-lw5gmp",
      "cat-bj60n0"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row333"
  },
  {
    "id": "cat-1vehhcz",
    "nodeName": "TP實務",
    "nodeCode": "TP",
    "parentId": "cat-lw5gmp",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "獎勵旅遊",
      "TP實務"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-lw5gmp",
      "cat-1vehhcz"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row334"
  },
  {
    "id": "cat-3bv9fx",
    "nodeName": "業務實務",
    "nodeCode": "RC",
    "parentId": "cat-lw5gmp",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "獎勵旅遊",
      "業務實務"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-lw5gmp",
      "cat-3bv9fx"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row335"
  },
  {
    "id": "cat-1olbn1s",
    "nodeName": "產銷對接流程",
    "nodeCode": "PS",
    "parentId": "cat-lw5gmp",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "獎勵旅遊",
      "產銷對接流程"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-lw5gmp",
      "cat-1olbn1s"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row336"
  },
  {
    "id": "cat-gmqah7",
    "nodeName": "行程表_一日遊",
    "nodeCode": "PR1",
    "parentId": "cat-lw5gmp",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "獎勵旅遊",
      "行程表_一日遊"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-lw5gmp",
      "cat-gmqah7"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row337"
  },
  {
    "id": "cat-1yliamf",
    "nodeName": "行程表_二日遊",
    "nodeCode": "PR2",
    "parentId": "cat-lw5gmp",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "獎勵旅遊",
      "行程表_二日遊"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-lw5gmp",
      "cat-1yliamf"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row338"
  },
  {
    "id": "cat-x1l8pc",
    "nodeName": "行程表_三日遊",
    "nodeCode": "PR3",
    "parentId": "cat-lw5gmp",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "獎勵旅遊",
      "行程表_三日遊"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-lw5gmp",
      "cat-x1l8pc"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row339"
  },
  {
    "id": "cat-cs6qdj",
    "nodeName": "行程表_環島與三日遊以上",
    "nodeCode": "PR4",
    "parentId": "cat-lw5gmp",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "獎勵旅遊",
      "行程表_環島與三日遊以上"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-lw5gmp",
      "cat-cs6qdj"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 8,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row340"
  },
  {
    "id": "cat-cd8a7m",
    "nodeName": "教育訓練",
    "nodeCode": "TR",
    "parentId": "cat-lw5gmp",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "獎勵旅遊",
      "教育訓練"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-lw5gmp",
      "cat-cd8a7m"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 9,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row341"
  },
  {
    "id": "cat-1t6j4yy",
    "nodeName": "業務所需文件",
    "nodeCode": "BD",
    "parentId": "cat-lw5gmp",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "獎勵旅遊",
      "業務所需文件"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-lw5gmp",
      "cat-1t6j4yy"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 10,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row342"
  },
  {
    "id": "cat-t92t9n",
    "nodeName": "教育訓練",
    "nodeCode": "PT",
    "parentId": "cat-61mjg2",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-海外塊狀",
      "公用作業",
      "璽品專案",
      "教育訓練"
    ],
    "pathIds": [
      "cat-t7aruy",
      "cat-npuymk",
      "cat-61mjg2",
      "cat-t92t9n"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "一登",
    "ownerWindowId": "win-1p121d8",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row396"
  },
  {
    "id": "cat-1y9e9dy",
    "nodeName": "教育訓練",
    "nodeCode": "PTR",
    "parentId": "cat-1jx01u8",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "產品",
      "教育訓練"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-1jx01u8",
      "cat-1y9e9dy"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Max",
    "ownerWindowId": "win-gtvgs9",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row504"
  },
  {
    "id": "cat-ru96xo",
    "nodeName": "中產教育訓練",
    "nodeCode": "TR",
    "parentId": "cat-1jx01u8",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "產品",
      "中產教育訓練"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-1jx01u8",
      "cat-ru96xo"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "育華",
    "ownerWindowId": "win-19v00y6",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row507"
  },
  {
    "id": "cat-s325b2",
    "nodeName": "供應商資料",
    "nodeCode": "SP",
    "parentId": "cat-1jx01u8",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "產品",
      "供應商資料"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-1jx01u8",
      "cat-s325b2"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Max",
    "ownerWindowId": "win-gtvgs9",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row505"
  },
  {
    "id": "cat-p9wce",
    "nodeName": "中產航線表",
    "nodeCode": "AL",
    "parentId": "cat-1jx01u8",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "產品",
      "中產航線表"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-1jx01u8",
      "cat-p9wce"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "育華",
    "ownerWindowId": "win-19v00y6",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row508"
  },
  {
    "id": "cat-17kj3w0",
    "nodeName": "中產採線分享",
    "nodeCode": "TP",
    "parentId": "cat-1jx01u8",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "產品",
      "中產採線分享"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-1jx01u8",
      "cat-17kj3w0"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "育華",
    "ownerWindowId": "win-19v00y6",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row509"
  },
  {
    "id": "cat-rgvxfr",
    "nodeName": "出境OP",
    "nodeCode": "OOP",
    "parentId": "cat-15tm8me",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品OP",
      "出境OP"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-15tm8me",
      "cat-rgvxfr"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row541"
  },
  {
    "id": "cat-2azr4v",
    "nodeName": "國旅OP",
    "nodeCode": "IOP",
    "parentId": "cat-15tm8me",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品OP",
      "國旅OP"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-15tm8me",
      "cat-2azr4v"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row542"
  },
  {
    "id": "cat-ul277h",
    "nodeName": "系列",
    "nodeCode": "TW4LS",
    "parentId": "cat-19xbvge",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品國旅",
      "系列"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-19xbvge",
      "cat-ul277h"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row533"
  },
  {
    "id": "cat-1otqig7",
    "nodeName": "離島",
    "nodeCode": "TW4LT",
    "parentId": "cat-19xbvge",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品國旅",
      "離島"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-19xbvge",
      "cat-1otqig7"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row534"
  },
  {
    "id": "cat-nunhiw",
    "nodeName": "獎旅",
    "nodeCode": "TW4LC",
    "parentId": "cat-19xbvge",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品國旅",
      "獎旅"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-19xbvge",
      "cat-nunhiw"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row535"
  },
  {
    "id": "cat-bvmt67",
    "nodeName": "機密文件",
    "nodeCode": "INBSC",
    "parentId": "cat-19xbvge",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品國旅",
      "機密文件"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-19xbvge",
      "cat-bvmt67"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row536"
  },
  {
    "id": "cat-1pjnhz4",
    "nodeName": "鐵道",
    "nodeCode": "TW08",
    "parentId": "cat-19xbvge",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品國旅",
      "鐵道"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-19xbvge",
      "cat-1pjnhz4"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row537"
  },
  {
    "id": "cat-aeibxr",
    "nodeName": "TP",
    "nodeCode": "ASTP",
    "parentId": "cat-1jsrv65",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品大陸線",
      "TP"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1jsrv65",
      "cat-aeibxr"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row527"
  },
  {
    "id": "cat-1xb7lxs",
    "nodeName": "RC",
    "nodeCode": "ASRC",
    "parentId": "cat-1jsrv65",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品大陸線",
      "RC"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1jsrv65",
      "cat-1xb7lxs"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row528"
  },
  {
    "id": "cat-4kjof",
    "nodeName": "機密文件",
    "nodeCode": "ASSC",
    "parentId": "cat-1jsrv65",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品大陸線",
      "機密文件"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1jsrv65",
      "cat-4kjof"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row529"
  },
  {
    "id": "cat-1y4bsty",
    "nodeName": "國外",
    "nodeCode": "OT",
    "parentId": "cat-uvzlea",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "產品學院",
      "國外"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-uvzlea",
      "cat-1y4bsty"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row29"
  },
  {
    "id": "cat-106xq0j",
    "nodeName": "國內",
    "nodeCode": "IN",
    "parentId": "cat-uvzlea",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "產品學院",
      "國內"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-uvzlea",
      "cat-106xq0j"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row30"
  },
  {
    "id": "cat-1dbrem8",
    "nodeName": "主題",
    "nodeCode": "TT",
    "parentId": "cat-uvzlea",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "產品學院",
      "主題"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-uvzlea",
      "cat-1dbrem8"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row31"
  },
  {
    "id": "cat-pplau8",
    "nodeName": "元件",
    "nodeCode": "FI",
    "parentId": "cat-uvzlea",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "產品學院",
      "元件"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-uvzlea",
      "cat-pplau8"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row32"
  },
  {
    "id": "cat-bnp8n",
    "nodeName": "TP",
    "nodeCode": "JPTP",
    "parentId": "cat-1a23kur",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品日本線",
      "TP"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1a23kur",
      "cat-bnp8n"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row514"
  },
  {
    "id": "cat-13b56yq",
    "nodeName": "RC",
    "nodeCode": "JPRC",
    "parentId": "cat-1a23kur",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品日本線",
      "RC"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1a23kur",
      "cat-13b56yq"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row515"
  },
  {
    "id": "cat-13sbdtr",
    "nodeName": "手配",
    "nodeCode": "JPAM",
    "parentId": "cat-1a23kur",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品日本線",
      "手配"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1a23kur",
      "cat-13sbdtr"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row516"
  },
  {
    "id": "cat-y4yf5k",
    "nodeName": "機密文件",
    "nodeCode": "JPSC",
    "parentId": "cat-1a23kur",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品日本線",
      "機密文件"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1a23kur",
      "cat-y4yf5k"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row517"
  },
  {
    "id": "cat-169a2lk",
    "nodeName": "TP",
    "nodeCode": "SEATP",
    "parentId": "cat-eg4f1",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品東南亞線",
      "TP"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-eg4f1",
      "cat-169a2lk"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row521"
  },
  {
    "id": "cat-1xdy219",
    "nodeName": "RC",
    "nodeCode": "SEARC",
    "parentId": "cat-eg4f1",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品東南亞線",
      "RC"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-eg4f1",
      "cat-1xdy219"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row522"
  },
  {
    "id": "cat-115ytnk",
    "nodeName": "機密文件",
    "nodeCode": "SEASC",
    "parentId": "cat-eg4f1",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品東南亞線",
      "機密文件"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-eg4f1",
      "cat-115ytnk"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row523"
  },
  {
    "id": "cat-1rqonx0",
    "nodeName": "TP",
    "nodeCode": "EUTP",
    "parentId": "cat-6ebqs",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品歐洲線(高出)",
      "TP"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-6ebqs",
      "cat-1rqonx0"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row524"
  },
  {
    "id": "cat-y4ibyt",
    "nodeName": "RC",
    "nodeCode": "EURC",
    "parentId": "cat-6ebqs",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品歐洲線(高出)",
      "RC"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-6ebqs",
      "cat-y4ibyt"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row525"
  },
  {
    "id": "cat-12jaq8c",
    "nodeName": "機密文件",
    "nodeCode": "EUSC",
    "parentId": "cat-6ebqs",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品歐洲線(高出)",
      "機密文件"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-6ebqs",
      "cat-12jaq8c"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row526"
  },
  {
    "id": "cat-16i2ise",
    "nodeName": "北北基",
    "nodeCode": "TNK",
    "parentId": "cat-j8hu4w",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "產品知識",
      "北北基"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-j8hu4w",
      "cat-16i2ise"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row319"
  },
  {
    "id": "cat-56odwn",
    "nodeName": "桃竹苗",
    "nodeCode": "THM",
    "parentId": "cat-j8hu4w",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "產品知識",
      "桃竹苗"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-j8hu4w",
      "cat-56odwn"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row320"
  },
  {
    "id": "cat-eat09j",
    "nodeName": "中彰投",
    "nodeCode": "TCN",
    "parentId": "cat-j8hu4w",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "產品知識",
      "中彰投"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-j8hu4w",
      "cat-eat09j"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row321"
  },
  {
    "id": "cat-pt5c6y",
    "nodeName": "雲嘉南",
    "nodeCode": "TCT",
    "parentId": "cat-j8hu4w",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "產品知識",
      "雲嘉南"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-j8hu4w",
      "cat-pt5c6y"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row322"
  },
  {
    "id": "cat-ucmk74",
    "nodeName": "高屏",
    "nodeCode": "KP",
    "parentId": "cat-j8hu4w",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "產品知識",
      "高屏"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-j8hu4w",
      "cat-ucmk74"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row323"
  },
  {
    "id": "cat-1bkmiiw",
    "nodeName": "宜花東",
    "nodeCode": "YHT",
    "parentId": "cat-j8hu4w",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "產品知識",
      "宜花東"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-j8hu4w",
      "cat-1bkmiiw"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row324"
  },
  {
    "id": "cat-ufhemh",
    "nodeName": "離島",
    "nodeCode": "PKL",
    "parentId": "cat-j8hu4w",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "產品知識",
      "離島"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-j8hu4w",
      "cat-ufhemh"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row325"
  },
  {
    "id": "cat-tiun1",
    "nodeName": "璽品",
    "nodeCode": "NHS",
    "parentId": "cat-152crbi",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "產品知識和教材",
      "璽品"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-152crbi",
      "cat-tiun1"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row239"
  },
  {
    "id": "cat-11lluoc",
    "nodeName": "郵輪",
    "nodeCode": "NHC",
    "parentId": "cat-152crbi",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "產品知識和教材",
      "郵輪"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-152crbi",
      "cat-11lluoc"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row240"
  },
  {
    "id": "cat-np166o",
    "nodeName": "運動",
    "nodeCode": "NHW",
    "parentId": "cat-152crbi",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "產品知識和教材",
      "運動"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-152crbi",
      "cat-np166o"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row241"
  },
  {
    "id": "cat-1ycl5nh",
    "nodeName": "中南美",
    "nodeCode": "NHM",
    "parentId": "cat-152crbi",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "產品知識和教材",
      "中南美"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-152crbi",
      "cat-1ycl5nh"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row242"
  },
  {
    "id": "cat-1cawjgb",
    "nodeName": "主題客製",
    "nodeCode": "NHJ",
    "parentId": "cat-152crbi",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "產品知識和教材",
      "主題客製"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-152crbi",
      "cat-1cawjgb"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row243"
  },
  {
    "id": "cat-1t1pgo0",
    "nodeName": "鐵道",
    "nodeCode": "NHR",
    "parentId": "cat-152crbi",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "產品知識和教材",
      "鐵道"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-152crbi",
      "cat-1t1pgo0"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row244"
  },
  {
    "id": "cat-uzfw6t",
    "nodeName": "日韓其他",
    "nodeCode": "PKG1",
    "parentId": "cat-1esan2p",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品自由行",
      "日韓其他"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1esan2p",
      "cat-uzfw6t"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row530"
  },
  {
    "id": "cat-lzv63e",
    "nodeName": "港澳珠圳",
    "nodeCode": "PKG2",
    "parentId": "cat-1esan2p",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品自由行",
      "港澳珠圳"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1esan2p",
      "cat-lzv63e"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row531"
  },
  {
    "id": "cat-1sxvtfu",
    "nodeName": "機密文件",
    "nodeCode": "PKGSC",
    "parentId": "cat-1esan2p",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品自由行",
      "機密文件"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1esan2p",
      "cat-1sxvtfu"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row532"
  },
  {
    "id": "cat-ma0ldg",
    "nodeName": "TP",
    "nodeCode": "KRTP",
    "parentId": "cat-1dfsjwb",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品韓國線",
      "TP"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1dfsjwb",
      "cat-ma0ldg"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row518"
  },
  {
    "id": "cat-e41eb5",
    "nodeName": "RC",
    "nodeCode": "KRRC",
    "parentId": "cat-1dfsjwb",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品韓國線",
      "RC"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1dfsjwb",
      "cat-e41eb5"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row519"
  },
  {
    "id": "cat-1u9me19",
    "nodeName": "機密文件",
    "nodeCode": "KRSC",
    "parentId": "cat-1dfsjwb",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "產品韓國線",
      "機密文件"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1dfsjwb",
      "cat-1u9me19"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row520"
  },
  {
    "id": "cat-1ghe1r5",
    "nodeName": "帶團作業規範",
    "nodeCode": "TG",
    "parentId": "cat-9d4hau",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "文管中心",
      "管理辦法",
      "帶團作業規範"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-uidhzc",
      "cat-9d4hau",
      "cat-1ghe1r5"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row382"
  },
  {
    "id": "cat-17aunc2",
    "nodeName": "招募任用管理",
    "nodeCode": "RM",
    "parentId": "cat-9d4hau",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "文管中心",
      "管理辦法",
      "招募任用管理"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-uidhzc",
      "cat-9d4hau",
      "cat-17aunc2"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row383"
  },
  {
    "id": "cat-mrbl2r",
    "nodeName": "福利金管理",
    "nodeCode": "WF",
    "parentId": "cat-9d4hau",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "文管中心",
      "管理辦法",
      "福利金管理"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-uidhzc",
      "cat-9d4hau",
      "cat-mrbl2r"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row384"
  },
  {
    "id": "cat-1xgipbk",
    "nodeName": "獎懲管理",
    "nodeCode": "RD",
    "parentId": "cat-9d4hau",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "文管中心",
      "管理辦法",
      "獎懲管理"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-uidhzc",
      "cat-9d4hau",
      "cat-1xgipbk"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row385"
  },
  {
    "id": "cat-ont8vg",
    "nodeName": "導領人員跨線管理辦法",
    "nodeCode": "CL",
    "parentId": "cat-9d4hau",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "文管中心",
      "管理辦法",
      "導領人員跨線管理辦法"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-uidhzc",
      "cat-9d4hau",
      "cat-ont8vg"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row386"
  },
  {
    "id": "cat-hftwcl",
    "nodeName": "導領人員分級辦法",
    "nodeCode": "LV",
    "parentId": "cat-9d4hau",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-企劃本部",
      "文管中心",
      "管理辦法",
      "導領人員分級辦法"
    ],
    "pathIds": [
      "cat-18zgr2i",
      "cat-uidhzc",
      "cat-9d4hau",
      "cat-hftwcl"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "孟儒",
    "ownerWindowId": "win-9r3sj8",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row387"
  },
  {
    "id": "cat-1m37199",
    "nodeName": "成本結構(機密)",
    "nodeCode": "CS",
    "parentId": "cat-18vc87f",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "系列",
      "成本結構(機密)"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-18vc87f",
      "cat-1m37199"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row326"
  },
  {
    "id": "cat-oklahp",
    "nodeName": "TPRC實務",
    "nodeCode": "TP",
    "parentId": "cat-18vc87f",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "系列",
      "TPRC實務"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-18vc87f",
      "cat-oklahp"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row327"
  },
  {
    "id": "cat-11zajnz",
    "nodeName": "標案專案",
    "nodeCode": "JWI",
    "parentId": "cat-18vc87f",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "系列",
      "標案專案"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-18vc87f",
      "cat-11zajnz"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row328"
  },
  {
    "id": "cat-1ggg28j",
    "nodeName": "璽品",
    "nodeCode": "SPS",
    "parentId": "cat-1bd1b5e",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "系統流程標準",
      "璽品"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-1bd1b5e",
      "cat-1ggg28j"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row232"
  },
  {
    "id": "cat-2ka2zh",
    "nodeName": "郵輪",
    "nodeCode": "SPC",
    "parentId": "cat-1bd1b5e",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "系統流程標準",
      "郵輪"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-1bd1b5e",
      "cat-2ka2zh"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row233"
  },
  {
    "id": "cat-1dpqtdz",
    "nodeName": "運動",
    "nodeCode": "SPW",
    "parentId": "cat-1bd1b5e",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "系統流程標準",
      "運動"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-1bd1b5e",
      "cat-1dpqtdz"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row234"
  },
  {
    "id": "cat-1475pm8",
    "nodeName": "中南美",
    "nodeCode": "SPM",
    "parentId": "cat-1bd1b5e",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "系統流程標準",
      "中南美"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-1bd1b5e",
      "cat-1475pm8"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row235"
  },
  {
    "id": "cat-1vew3qg",
    "nodeName": "主題客製",
    "nodeCode": "SPJ",
    "parentId": "cat-1bd1b5e",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "系統流程標準",
      "主題客製"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-1bd1b5e",
      "cat-1vew3qg"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row236"
  },
  {
    "id": "cat-cj7un6",
    "nodeName": "主題OP",
    "nodeCode": "SPO",
    "parentId": "cat-1bd1b5e",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "系統流程標準",
      "主題OP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-1bd1b5e",
      "cat-cj7un6"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row237"
  },
  {
    "id": "cat-1c45k4s",
    "nodeName": "鐵道",
    "nodeCode": "SPR",
    "parentId": "cat-1bd1b5e",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "系統流程標準",
      "鐵道"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-1bd1b5e",
      "cat-1c45k4s"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row238"
  },
  {
    "id": "cat-1u46gkq",
    "nodeName": "璽品",
    "nodeCode": "DCS",
    "parentId": "cat-c5z6xh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "紀錄文件(機密)",
      "璽品"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-c5z6xh",
      "cat-1u46gkq"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row260"
  },
  {
    "id": "cat-1tw64z0",
    "nodeName": "郵輪",
    "nodeCode": "DCC",
    "parentId": "cat-c5z6xh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "紀錄文件(機密)",
      "郵輪"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-c5z6xh",
      "cat-1tw64z0"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row261"
  },
  {
    "id": "cat-1g0jgca",
    "nodeName": "運動",
    "nodeCode": "DCW",
    "parentId": "cat-c5z6xh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "紀錄文件(機密)",
      "運動"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-c5z6xh",
      "cat-1g0jgca"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row262"
  },
  {
    "id": "cat-1utchat",
    "nodeName": "中南美",
    "nodeCode": "DCM",
    "parentId": "cat-c5z6xh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "紀錄文件(機密)",
      "中南美"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-c5z6xh",
      "cat-1utchat"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row263"
  },
  {
    "id": "cat-1v5wkfd",
    "nodeName": "主題客製",
    "nodeCode": "DCJ",
    "parentId": "cat-c5z6xh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "紀錄文件(機密)",
      "主題客製"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-c5z6xh",
      "cat-1v5wkfd"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row264"
  },
  {
    "id": "cat-4kazo8",
    "nodeName": "鐵道",
    "nodeCode": "DCR",
    "parentId": "cat-c5z6xh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "紀錄文件(機密)",
      "鐵道"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-c5z6xh",
      "cat-4kazo8"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row265"
  },
  {
    "id": "cat-faf7zh",
    "nodeName": "管理辦法",
    "nodeCode": "MR",
    "parentId": "cat-wpqacb",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "組織",
      "管理辦法"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-wpqacb",
      "cat-faf7zh"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "月靈",
    "ownerWindowId": "win-uufsz1",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row2"
  },
  {
    "id": "cat-5yqbz0",
    "nodeName": "申請表單",
    "nodeCode": "AF",
    "parentId": "cat-wpqacb",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "組織",
      "申請表單"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-wpqacb",
      "cat-5yqbz0"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "月靈",
    "ownerWindowId": "win-uufsz1",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row3"
  },
  {
    "id": "cat-5h894f",
    "nodeName": "TP",
    "nodeCode": "TP",
    "parentId": "cat-1f2mvfa",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "美洲不含小島",
      "TP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1f2mvfa",
      "cat-5h894f"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row189"
  },
  {
    "id": "cat-1s0j5mj",
    "nodeName": "RC",
    "nodeCode": "RC",
    "parentId": "cat-1f2mvfa",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "美洲不含小島",
      "RC"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1f2mvfa",
      "cat-1s0j5mj"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row190"
  },
  {
    "id": "cat-xhwj8",
    "nodeName": "OP",
    "nodeCode": "OP",
    "parentId": "cat-1f2mvfa",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "美洲不含小島",
      "OP"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1f2mvfa",
      "cat-xhwj8"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row191"
  },
  {
    "id": "cat-uvykni",
    "nodeName": "機密",
    "nodeCode": "SC",
    "parentId": "cat-1f2mvfa",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產一",
      "美洲不含小島",
      "機密"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1bu0t1w",
      "cat-1f2mvfa",
      "cat-uvykni"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row192"
  },
  {
    "id": "cat-166x6no",
    "nodeName": "管理辦法",
    "nodeCode": "MR",
    "parentId": "cat-1ce5gqg",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "考勤",
      "管理辦法"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-1ce5gqg",
      "cat-166x6no"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Nancy",
    "ownerWindowId": "win-1qs66hy",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row4"
  },
  {
    "id": "cat-9f5v6y",
    "nodeName": "雄獅旅行社獎金辦法",
    "nodeCode": "LBM",
    "parentId": "cat-4qzzgj",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "薪酬",
      "雄獅旅行社獎金辦法"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-4qzzgj",
      "cat-9f5v6y"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Nancy",
    "ownerWindowId": "win-1qs66hy",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row5"
  },
  {
    "id": "cat-o9y45y",
    "nodeName": "雄獅旅行社獎金申請表",
    "nodeCode": "LBA",
    "parentId": "cat-4qzzgj",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "薪酬",
      "雄獅旅行社獎金申請表"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-4qzzgj",
      "cat-o9y45y"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Nancy",
    "ownerWindowId": "win-1qs66hy",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row6"
  },
  {
    "id": "cat-mg7ev6",
    "nodeName": "其他獎酬辦法",
    "nodeCode": "ORM",
    "parentId": "cat-4qzzgj",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "薪酬",
      "其他獎酬辦法"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-4qzzgj",
      "cat-mg7ev6"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Nancy",
    "ownerWindowId": "win-1qs66hy",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row7"
  },
  {
    "id": "cat-1n07fgj",
    "nodeName": "薪酬管理辦法",
    "nodeCode": "SMM",
    "parentId": "cat-4qzzgj",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "薪酬",
      "薪酬管理辦法"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-4qzzgj",
      "cat-1n07fgj"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Nancy",
    "ownerWindowId": "win-1qs66hy",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row8"
  },
  {
    "id": "cat-npt7ih",
    "nodeName": "保險福利",
    "nodeCode": "IB",
    "parentId": "cat-4qzzgj",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "人資資源管理",
      "薪酬",
      "保險福利"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1bp88y1",
      "cat-4qzzgj",
      "cat-npt7ih"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Nancy",
    "ownerWindowId": "win-1qs66hy",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row9"
  },
  {
    "id": "cat-11opwrj",
    "nodeName": "產品行銷",
    "nodeCode": "MKOB",
    "parentId": "cat-1ksol7a",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "行銷",
      "產品行銷"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1ksol7a",
      "cat-11opwrj"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row543"
  },
  {
    "id": "cat-rbs2j",
    "nodeName": "國旅行銷",
    "nodeCode": "MKIN",
    "parentId": "cat-1ksol7a",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "南高屏塊狀",
      "行銷",
      "國旅行銷"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-18rgste",
      "cat-1ksol7a",
      "cat-rbs2j"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row544"
  },
  {
    "id": "cat-1tdqoeg",
    "nodeName": "璽品",
    "nodeCode": "MCS",
    "parentId": "cat-1lawubl",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "行銷營運",
      "璽品"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-1lawubl",
      "cat-1tdqoeg"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row250"
  },
  {
    "id": "cat-1qeqqsa",
    "nodeName": "郵輪",
    "nodeCode": "MCC",
    "parentId": "cat-1lawubl",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "行銷營運",
      "郵輪"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-1lawubl",
      "cat-1qeqqsa"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row251"
  },
  {
    "id": "cat-vp7ebo",
    "nodeName": "運動",
    "nodeCode": "MCW",
    "parentId": "cat-1lawubl",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "行銷營運",
      "運動"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-1lawubl",
      "cat-vp7ebo"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row252"
  },
  {
    "id": "cat-1swwyh7",
    "nodeName": "中南美",
    "nodeCode": "MCM",
    "parentId": "cat-1lawubl",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "行銷營運",
      "中南美"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-1lawubl",
      "cat-1swwyh7"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row253"
  },
  {
    "id": "cat-c0som1",
    "nodeName": "專案",
    "nodeCode": "PJ",
    "parentId": "cat-17iz0fi",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "通路",
      "專案"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-17iz0fi",
      "cat-c0som1"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Max",
    "ownerWindowId": "win-gtvgs9",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row502"
  },
  {
    "id": "cat-tjvzl",
    "nodeName": "直售",
    "nodeCode": "B2C",
    "parentId": "cat-17iz0fi",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "通路",
      "直售"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-17iz0fi",
      "cat-tjvzl"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row545"
  },
  {
    "id": "cat-q2vnnz",
    "nodeName": "教育訓練",
    "nodeCode": "STR",
    "parentId": "cat-17iz0fi",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "通路",
      "教育訓練"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-17iz0fi",
      "cat-q2vnnz"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Max",
    "ownerWindowId": "win-gtvgs9",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row503"
  },
  {
    "id": "cat-xeb0y",
    "nodeName": "批售",
    "nodeCode": "B2B",
    "parentId": "cat-17iz0fi",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "通路",
      "批售"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-17iz0fi",
      "cat-xeb0y"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row546"
  },
  {
    "id": "cat-1q8mdqt",
    "nodeName": "企服",
    "nodeCode": "B2E",
    "parentId": "cat-17iz0fi",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "通路",
      "企服"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-17iz0fi",
      "cat-1q8mdqt"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row547"
  },
  {
    "id": "cat-h99dbv",
    "nodeName": "公商差旅",
    "nodeCode": "BIZ",
    "parentId": "cat-17iz0fi",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "通路",
      "公商差旅"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-17iz0fi",
      "cat-h99dbv"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row548"
  },
  {
    "id": "cat-19uj9wi",
    "nodeName": "共用資料",
    "nodeCode": "COM",
    "parentId": "cat-17iz0fi",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-台灣塊狀",
      "桃竹苗塊狀",
      "通路",
      "共用資料"
    ],
    "pathIds": [
      "cat-1urdmjf",
      "cat-14nzuyz",
      "cat-17iz0fi",
      "cat-19uj9wi"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "圓、疄",
    "ownerWindowId": "win-ap5xif",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row549"
  },
  {
    "id": "cat-176wa74",
    "nodeName": "產品知識",
    "nodeCode": "PD",
    "parentId": "cat-go5fdg",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "銷售學院",
      "產品知識"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-go5fdg",
      "cat-176wa74"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row33"
  },
  {
    "id": "cat-1n0dn18",
    "nodeName": "技能",
    "nodeCode": "SK",
    "parentId": "cat-go5fdg",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "銷售學院",
      "技能"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-go5fdg",
      "cat-1n0dn18"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row34"
  },
  {
    "id": "cat-183hv2m",
    "nodeName": "標案合約",
    "nodeCode": "SR",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "標案合約"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-183hv2m"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row356"
  },
  {
    "id": "cat-ww68lj",
    "nodeName": "列車規劃",
    "nodeCode": "TO",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "列車規劃"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-ww68lj"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row357"
  },
  {
    "id": "cat-zlqrmb",
    "nodeName": "火車資料",
    "nodeCode": "TR",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "火車資料"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-zlqrmb"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row358"
  },
  {
    "id": "cat-17uqwop",
    "nodeName": "產品設計",
    "nodeCode": "PD",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "產品設計"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-17uqwop"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row359"
  },
  {
    "id": "cat-f5r9ca",
    "nodeName": "TP實務",
    "nodeCode": "TP",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "TP實務"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-f5r9ca"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row360"
  },
  {
    "id": "cat-13y8l0j",
    "nodeName": "RC實務",
    "nodeCode": "RC",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "RC實務"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-13y8l0j"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 6,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row361"
  },
  {
    "id": "cat-1e1ci3x",
    "nodeName": "專案",
    "nodeCode": "PR",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "專案"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-1e1ci3x"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 7,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row362"
  },
  {
    "id": "cat-1a80cmh",
    "nodeName": "火車位控管理",
    "nodeCode": "RS",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "火車位控管理"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-1a80cmh"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 8,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row363"
  },
  {
    "id": "cat-1ema4c1",
    "nodeName": "鐵道服務體驗",
    "nodeCode": "TS",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "鐵道服務體驗"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-1ema4c1"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 9,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row364"
  },
  {
    "id": "cat-9z0bz2",
    "nodeName": "場域",
    "nodeCode": "SP",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "場域"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-9z0bz2"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 10,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row365"
  },
  {
    "id": "cat-1wblpvj",
    "nodeName": "台鐵",
    "nodeCode": "TWX",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "台鐵"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-1wblpvj"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 11,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row366"
  },
  {
    "id": "cat-1bdlc2i",
    "nodeName": "台鐵經營資料(機密)",
    "nodeCode": "TRC",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "台鐵經營資料(機密)"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-1bdlc2i"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 12,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row367"
  },
  {
    "id": "cat-ajejeh",
    "nodeName": "林鐵",
    "nodeCode": "FR",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "林鐵"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-ajejeh"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 13,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row368"
  },
  {
    "id": "cat-8j9m7p",
    "nodeName": "林鐵經營資料(機密)",
    "nodeCode": "FRC",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "林鐵經營資料(機密)"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-8j9m7p"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 14,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row369"
  },
  {
    "id": "cat-1jvkla1",
    "nodeName": "成本結構(機密)",
    "nodeCode": "CS",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "成本結構(機密)"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-1jvkla1"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 15,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row370"
  },
  {
    "id": "cat-1wb5n8m",
    "nodeName": "供應商合約(機密)",
    "nodeCode": "CT",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "供應商合約(機密)"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-1wb5n8m"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 16,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row371"
  },
  {
    "id": "cat-1i8krz0",
    "nodeName": "紀錄文件(機密)",
    "nodeCode": "DC",
    "parentId": "cat-yryxvh",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "鐵道",
      "紀錄文件(機密)"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-yryxvh",
      "cat-1i8krz0"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 17,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row372"
  },
  {
    "id": "cat-itadtx",
    "nodeName": "旅遊業基礎知識",
    "nodeCode": "TB",
    "parentId": "cat-i01c5i",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "集團新人訓",
      "旅遊業基礎知識"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-i01c5i",
      "cat-itadtx"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row18"
  },
  {
    "id": "cat-1muzto4",
    "nodeName": "集團相關知識",
    "nodeCode": "GK",
    "parentId": "cat-i01c5i",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "集團新人訓",
      "集團相關知識"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-i01c5i",
      "cat-1muzto4"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row19"
  },
  {
    "id": "cat-1j21eq3",
    "nodeName": "資訊安全與OTP綁定",
    "nodeCode": "OTP",
    "parentId": "cat-i01c5i",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "集團新人訓",
      "資訊安全與OTP綁定"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-i01c5i",
      "cat-1j21eq3"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row20"
  },
  {
    "id": "cat-cd5pay",
    "nodeName": "通路基礎知識",
    "nodeCode": "SK",
    "parentId": "cat-i01c5i",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "集團新人訓",
      "通路基礎知識"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-i01c5i",
      "cat-cd5pay"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row21"
  },
  {
    "id": "cat-1pr79ds",
    "nodeName": "產品基礎知識",
    "nodeCode": "PK",
    "parentId": "cat-i01c5i",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-管理本部",
      "雄獅大學",
      "集團新人訓",
      "產品基礎知識"
    ],
    "pathIds": [
      "cat-gr99ky",
      "cat-1ozudl",
      "cat-i01c5i",
      "cat-1pr79ds"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "Linda",
    "ownerWindowId": "win-1677ryn",
    "sortOrder": 5,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row22"
  },
  {
    "id": "cat-4jy5",
    "nodeName": "成本結構(機密)",
    "nodeCode": "CS",
    "parentId": "cat-1l4647t",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "離島",
      "成本結構(機密)"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-1l4647t",
      "cat-4jy5"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row329"
  },
  {
    "id": "cat-1euwsvx",
    "nodeName": "TP實務",
    "nodeCode": "TP",
    "parentId": "cat-1l4647t",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "離島",
      "TP實務"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-1l4647t",
      "cat-1euwsvx"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row330"
  },
  {
    "id": "cat-1e03rmg",
    "nodeName": "RC實務",
    "nodeCode": "RC",
    "parentId": "cat-1l4647t",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "離島",
      "RC實務"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-1l4647t",
      "cat-1e03rmg"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 3,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row331"
  },
  {
    "id": "cat-7haini",
    "nodeName": "專案",
    "nodeCode": "PR",
    "parentId": "cat-1l4647t",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "GIT團產_泛國旅入境鐵道",
      "離島",
      "專案"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-ynvc67",
      "cat-1l4647t",
      "cat-7haini"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "子傑",
    "ownerWindowId": "win-1rsd54q",
    "sortOrder": 4,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row332"
  },
  {
    "id": "cat-gi4279",
    "nodeName": "高球產品",
    "nodeCode": "GF1",
    "parentId": "cat-s0c70n",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "高球",
      "高球產品"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-s0c70n",
      "cat-gi4279"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 1,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row266"
  },
  {
    "id": "cat-1hau4wv",
    "nodeName": "客製產品",
    "nodeCode": "GF2",
    "parentId": "cat-s0c70n",
    "level": 4,
    "pathNames": [
      "雄獅旅遊-產品群",
      "團產OUTB_產二",
      "高球",
      "客製產品"
    ],
    "pathIds": [
      "cat-1pxxplx",
      "cat-1kp967d",
      "cat-s0c70n",
      "cat-1hau4wv"
    ],
    "isSelectable": true,
    "isLeaf": true,
    "ownerWindowName": "維霖",
    "ownerWindowId": "win-1q0e60a",
    "sortOrder": 2,
    "isActive": true,
    "sourceFile": "知識樹分類.xlsx",
    "rawRowRef": "knowledge_tree_nodes#row267"
  }
];

export const HR_SCOPE_RULES: ImportRules = {
  "dataset": "hr_scope",
  "maxLevel": 6,
  "allowSelectWhenNoChild": true,
  "replaceMode": "replace",
  "errorPolicy": "skip_invalid_and_collect_errors"
};
export const HR_SCOPE_IMPORT_ERRORS: ImportError[] = [];
export const HR_SCOPE_NODES: HrScopeNode[] = [
  {
    "id": "hr-1ny58y1",
    "regionName": "管企本",
    "companyName": "企三(人資)",
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "管企本-企三(人資)",
    "pathNames": [
      "管企本",
      "企三(人資)"
    ],
    "level": 2,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row2"
  },
  {
    "id": "hr-14a44p5",
    "regionName": "雄獅資訊",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "雄獅資訊",
    "pathNames": [
      "雄獅資訊"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row3"
  },
  {
    "id": "hr-1i60r51",
    "regionName": "管企本",
    "companyName": "總務",
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "管企本-總務",
    "pathNames": [
      "管企本",
      "總務"
    ],
    "level": 2,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row4"
  },
  {
    "id": "hr-1nftik3",
    "regionName": "產123(含泛產品)",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "產123(含泛產品)",
    "pathNames": [
      "產123(含泛產品)"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row5"
  },
  {
    "id": "hr-flcipf",
    "regionName": "✈️產45",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "✈️產45",
    "pathNames": [
      "✈️產45"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row6"
  },
  {
    "id": "hr-16hjx8c",
    "regionName": "產67",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "產67",
    "pathNames": [
      "產67"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row7"
  },
  {
    "id": "hr-1ve7h44",
    "regionName": "通路",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "通路",
    "pathNames": [
      "通路"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row8"
  },
  {
    "id": "hr-1wmfzmd",
    "regionName": "管企本",
    "companyName": "企四(財務)",
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "管企本-企四(財務)",
    "pathNames": [
      "管企本",
      "企四(財務)"
    ],
    "level": 2,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row9"
  },
  {
    "id": "hr-13s70y7",
    "regionName": "️雄獅旅遊",
    "companyName": "台灣塊狀",
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "️雄獅旅遊-台灣塊狀",
    "pathNames": [
      "️雄獅旅遊",
      "台灣塊狀"
    ],
    "level": 2,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row10"
  },
  {
    "id": "hr-9tc5iq",
    "regionName": "女雄獅字典",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "女雄獅字典",
    "pathNames": [
      "女雄獅字典"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row11"
  },
  {
    "id": "hr-1ekuxzx",
    "regionName": "️欣食旅",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "️欣食旅",
    "pathNames": [
      "️欣食旅"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row12"
  },
  {
    "id": "hr-ialviu",
    "regionName": "管企本",
    "companyName": "企二",
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "管企本-企二",
    "pathNames": [
      "管企本",
      "企二"
    ],
    "level": 2,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row13"
  },
  {
    "id": "hr-iim9ok",
    "regionName": "六‍欄顧關 櫃助 其他",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "六‍欄顧關 櫃助 其他",
    "pathNames": [
      "六‍欄顧關 櫃助 其他"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row14"
  },
  {
    "id": "hr-157w6xk",
    "regionName": "️雄獅保經",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "️雄獅保經",
    "pathNames": [
      "️雄獅保經"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row15"
  },
  {
    "id": "hr-12bq9o2",
    "regionName": "海外",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "海外",
    "pathNames": [
      "海外"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row16"
  },
  {
    "id": "hr-174l9ur",
    "regionName": "泛行銷",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "泛行銷",
    "pathNames": [
      "泛行銷"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row17"
  },
  {
    "id": "hr-y0wdt9",
    "regionName": "傑森",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "傑森",
    "pathNames": [
      "傑森"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row18"
  },
  {
    "id": "hr-xjomw4",
    "regionName": "管企本",
    "companyName": "企一",
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "管企本-企一",
    "pathNames": [
      "管企本",
      "企一"
    ],
    "level": 2,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row19"
  },
  {
    "id": "hr-17azw2p",
    "regionName": "欣傳媒",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "欣傳媒",
    "pathNames": [
      "欣傳媒"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row20"
  },
  {
    "id": "hr-1sbr7wr",
    "regionName": "主題",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "主題",
    "pathNames": [
      "主題"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row21"
  },
  {
    "id": "hr-mae96l",
    "regionName": "旅天下",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "旅天下",
    "pathNames": [
      "旅天下"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row22"
  },
  {
    "id": "hr-fjf4co",
    "regionName": "雄獅通運",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "雄獅通運",
    "pathNames": [
      "雄獅通運"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row23"
  },
  {
    "id": "hr-1ttxoa4",
    "regionName": "管企本",
    "companyName": "稽核",
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "管企本-稽核",
    "pathNames": [
      "管企本",
      "稽核"
    ],
    "level": 2,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row24"
  },
  {
    "id": "hr-eh1q80",
    "regionName": "管企本",
    "companyName": "永續",
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "管企本-永續",
    "pathNames": [
      "管企本",
      "永續"
    ],
    "level": 2,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row25"
  },
  {
    "id": "hr-1n1ykl3",
    "regionName": "管企本",
    "companyName": "法務",
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "管企本-法務",
    "pathNames": [
      "管企本",
      "法務"
    ],
    "level": 2,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row26"
  },
  {
    "id": "hr-g57v2",
    "regionName": "管企本",
    "companyName": "資安",
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "管企本-資安",
    "pathNames": [
      "管企本",
      "資安"
    ],
    "level": 2,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row27"
  },
  {
    "id": "hr-virzhj",
    "regionName": "機密文件",
    "companyName": null,
    "businessGroupName": null,
    "divisionName": null,
    "departmentName": null,
    "teamName": null,
    "titleName": "機密文件",
    "pathNames": [
      "機密文件"
    ],
    "level": 1,
    "isSelectable": true,
    "signingManagerName": null,
    "signingManagerEmpId": null,
    "windowOwnerName": null,
    "windowOwnerEmpId": null,
    "isActive": true,
    "sourceFile": "人資資料.xlsx",
    "rawRowRef": "hr_scope_nodes#row28"
  }
];
