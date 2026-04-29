# IPE 官網維護與開發指南 (README)

本文件旨在確保 IPE 官網在 **VS Code 開發環境** 與 **1shop 後台系統** 之間保持結構一致性，方便非技術同仁辨識網頁功能，同時維持專業的 SEO 網址規範。

## 📂 檔案架構與命名規範

為了兼顧辨識與系統穩定，我們採用「**中文資料夾 + 英文檔案名稱**」的混合架構。

* **資料夾名稱**：使用中文（如：`03-檢定服務`），方便同仁快速尋找分類。
* **檔案名稱**：統一使用「全小寫英文 + 連字號 (`kebab-case`)」，這必須與 1shop 的頁面網址 (Slug) 完全一致。
* **檔案頂端標籤**：每個 HTML 檔案開頭皆須包含中文註解區塊，標明頁面名稱與對應網址。

---

## 🗺️ 網頁對照表 (Sitemap)

當你在 1shop 建立新頁面或在 VS Code 新增檔案時，請同步更新此表。

| 分類 | 功能名稱 | VS Code 檔案路徑 (建議) | 1shop 網址代碼 (Slug) | 備註 |
| :--- | :--- | :--- | :--- | :--- |
| **首頁** | 官方網站首頁 | `index.html` | `/` | |
| **公告** | 最新會務公告 | `01-最新消息/news.html` | `/news` | |
| **檢定主頁**| 檢定體系介紹 | `03-檢定服務/cert-system.html` | `/cert-system` | |
| | 檢定項目總覽 | `03-檢定服務/cert-items.html` | `/cert-items` | 六大品項入口 |
| | 證照報名入口 | `03-檢定服務/exam-reg.html` | `/exam-reg` | |
| | 成績查詢系統 | `03-檢定服務/exam-result.html` | `/exam-result` | |
| **品項：皮膚管理**| 皮膚管理總覽(L1-L3) | `03-檢定服務/01-皮膚管理/skincare-overview.html` | `/skincare-overview` | |
| | L1 模擬試題 | `03-檢定服務/01-皮膚管理/skincare-l1-quiz.html` | `/skincare-l1-quiz` | |
| | L1 工具清點表 | `03-檢定服務/01-皮膚管理/skincare-l1-tools.html` | `/skincare-l1-tools` | |
| | L1 評分總表 | `03-檢定服務/01-皮膚管理/skincare-l1-score.html` | `/skincare-l1-score` | |
| **品項：芳香美體**| 芳香美體總覽(L1-L3) | `03-檢定服務/02-芳香美體/bodycare-overview.html` | `/bodycare-overview` | 範例 |
| **教育** | 教育/講師體系 | `04-教育培訓/edu-system.html` | `/edu-system` | |
| | 講師團隊介紹 | `04-教育培訓/faculty.html` | `/faculty` | |
| | 評審體系說明 | `04-教育培訓/trainer.html` | `/trainer` | |
| | 講師申請頁面 | `04-教育培訓/apply-teacher.html` | `/apply-teacher` | |
| **關於** | 協會介紹/宗旨 | `02-關於協會/about.html` | `/about` | |
| | 組織架構 | `02-關於協會/organization.html` | `/organization` | |
| | 理監事名冊 | `02-關於協會/board.html` | `/board` | |
| | 聯絡我們 | `02-關於協會/contact.html` | `/contact` | |

---
**💡 1shop 商品頁面 (Products) 提醒：**
上述表格為 1shop 的「自訂頁面」。若學員要實際付款報名，應導流至 1shop 的「商品頁」。
商品頁的網址系統通常為 `/products/商品網址`。
建議商品網址命名也保持一致，例如：`https://ipe.1shop-app.com/products/skincare-l1-exam`。
---

## 🛠️ 維護操作流程

### 1. 增加新網頁時
1.  在 VS Code 對應資料夾建立 HTML 檔案。
2.  在 1shop 後台建立「空白頁面」，並將「頁面網址」手動修改為與檔案名相同的 **英文 Slug**。
3.  更新本 `README.md` 的對照表。
4.  在各分頁的側邊欄 (Sidebar) HTML 中新增該連結，建議使用 **絕對網址** (如：`https://ipe.1shop-app.com/new-page`)。

### 2. 全域修改選單內容
* 使用 VS Code 的「**全域搜尋與取代**」(快捷鍵：`Ctrl + Shift + F`)。
* 搜尋舊的連結或文字，並一次性替換所有檔案中的側邊欄 HTML。

### 3. HTML 內部的中文標記範本
請確保每個分頁最上方都有此區塊，方便非技術同仁辨識：
```html
<!-- 
  =============================================
  頁面名稱：[請輸入頁面名稱，例如：檢定項目總覽]
  對應網址：[請輸入網址，例如：/cert-items]
  ============================================= 
-->
```

---

## ⚠️ 注意事項
* [cite_start]**1shop 網址代碼**：請勿使用系統預設的隨機代碼（如 `xszsh4`），務必手動改為語義化英文 [cite: 1, 10]。
* [cite_start]**版本備份**：若要進行大幅更動，建議將舊檔案名稱加上日期後綴（如 `exam-result-20260429.html`）存放在 `archive/` 資料夾中備份 [cite: 23]。