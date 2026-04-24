# Pivot AI 樞智科技 — 官方網站

全方位 AI 服務商官方網站，使用 Next.js + Tailwind CSS + Framer Motion 打造 Tesla 風格沉浸式體驗。

## 技術棧

- **框架**：Next.js 16 (App Router)
- **樣式**：Tailwind CSS v4
- **動畫**：Framer Motion
- **圖標**：Lucide React
- **輸出**：靜態匯出 (`next export`)

## 本地開發

```bash
cd pivot-app
npm install
npm run dev
```

開啟 http://localhost:3000 查看結果。

## 建置

```bash
cd pivot-app
npm run build
```

靜態檔案輸出至 `pivot-app/out/`

## 部署至 Render

1. 連結 GitHub 倉庫 `harryhsu0203/echoAIoffical`
2. Render 會自動讀取根目錄的 `render.yaml`
3. 設定：
   - **Type**: Static Site
   - **Build Command**: `cd pivot-app && npm install && npm run build`
   - **Publish Directory**: `pivot-app/out`
4. 每次推送 `main` 分支時自動觸發部署

## 網站結構

| Section | ID | 說明 |
|---|---|---|
| Hero | `#hero` | 品牌主視覺 + 主要 CTA |
| 本地架設 | `#local` | 本地 AI 建置服務介紹 |
| SaaS 串接 | `#saas` | EchoChat 與雲端 AI 服務 |
| 全案整合 | `#integration` | 導入流程與服務項目 |
| 聯絡我們 | `#contact` | 諮詢表單與 Footer |
