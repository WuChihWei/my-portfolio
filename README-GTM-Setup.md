# GA4 + GTM 追蹤設置指南

## 📋 概覽

此專案已為您的作品集網站實作完整的 GA4 + Google Tag Manager 追蹤功能，包含以下分析項目：

| #  | 分析項目                              | 事件名稱                             | 狀態 |
|----|---------------------------------------|--------------------------------------|------|
| 1  | 每個作品頁的點擊次數                       | `click_project_card`                 | ✅   |
| 2  | 每個作品頁的停留時間                       | `idle_30s`                           | ✅   |
| 3  | 滑動深度                                 | `scroll_25%`, `scroll_50%`, `scroll_75%` | ✅   |
| 4  | 點擊聯絡我 / 下載履歷                        | `click_contact`, `click_resume`      | ✅   |
| 5  | 跳出率（GA4 預設）                        | 無需客製                             | ✅   |
| 6  | 點擊 LinkedIn / GitHub / Behance icon | `click_social_link`                  | ✅   |
| 7  | 來源流量（GA4 預設）                     | 無需客製                             | ✅   |
| 8  | 裝置與螢幕尺寸（GA4 預設）                 | 無需客製                             | ✅   |
| 9  | 新訪客 vs 回訪者（GA4 預設）               | 無需客製                             | ✅   |
| 10 | 網站導覽連結點擊（例如 navbar）              | `click_nav_link`                     | ✅   |

## 🚀 快速設置

### 步驟 1: 設置 GTM Container

1. 登入 [Google Tag Manager](https://tagmanager.google.com/)
2. 創建新的 Container 或使用現有的
3. **建議手動設置**：由於 GTM 配置格式複雜，建議按照 `GTM-Manual-Setup-Guide.md` 手動設置
4. （可選）參考 `gtm-container-config.json` 文件了解完整配置結構

### 步驟 2: 安裝 GTM 代碼

在 `app/layout.js` 中添加 GTM 代碼：

```javascript
// 在 <head> 標籤中添加
<Script id="gtm-script" strategy="afterInteractive">
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-XXXXXXX');
  `}
</Script>

// 在 <body> 標籤開始處添加
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
    height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
</noscript>
```

**記得將 `GTM-XXXXXXX` 替換為您的實際 GTM Container ID**

### 步驟 3: 設置 GA4

1. 在 GTM 中創建 GA4 Configuration Tag
2. 使用您的 GA4 Measurement ID (`G-XXXXXXXXXX`)
3. 設置觸發器為 "All Pages"

## 📊 事件追蹤詳細說明

### 1. 作品卡片點擊 (`click_project_card`)
```javascript
dataLayer.push({
  event: 'click_project_card',
  project_title: '專案名稱',
  project_id: 'project-1',
  page_title: document.title,
  page_location: window.location.href
});
```

### 2. 30秒停留追蹤 (`idle_30s`)
```javascript
dataLayer.push({
  event: 'idle_30s',
  page_title: document.title,
  page_location: window.location.href,
  timestamp: new Date().toISOString()
});
```

### 3. 滑動深度追蹤 (`scroll_25%`, `scroll_50%`, `scroll_75%`)
```javascript
dataLayer.push({
  event: 'scroll_50%',
  scroll_depth: 50,
  page_title: document.title,
  page_location: window.location.href
});
```

### 4. 聯絡我點擊 (`click_contact`)
```javascript
dataLayer.push({
  event: 'click_contact',
  contact_type: 'email_form', // 或 'contact_page'
  page_title: document.title,
  page_location: window.location.href
});
```

### 5. 社群連結點擊 (`click_social_link`)
```javascript
dataLayer.push({
  event: 'click_social_link',
  social_platform: 'LinkedIn', // 或 'GitHub', 'Behance'
  link_url: 'https://www.linkedin.com/in/jordanwu-tech/',
  page_title: document.title,
  page_location: window.location.href
});
```

## 🏗️ 檔案結構

```
├── lib/
│   └── trackingEvents.js          # 追蹤事件管理類
├── hooks/
│   └── useTrackingEvents.js       # React Hook for 全域事件監聽
├── gtm-container-config.json      # GTM Container 配置（可選）
└── README-GTM-Setup.md           # 此設置指南
```

## 🔧 自訂追蹤事件

如果您需要添加新的追蹤事件，請按照以下步驟：

1. **在 `lib/trackingEvents.js` 中添加新方法：**
```javascript
static trackCustomEvent(eventName, eventData) {
  this.pushEvent({
    event: eventName,
    ...eventData,
    page_title: document.title,
    page_location: window.location.href
  });
}
```

2. **在組件中使用：**
```javascript
import TrackingEvents from '../lib/trackingEvents';

// 在事件處理器中
TrackingEvents.trackCustomEvent('custom_event_name', {
  custom_parameter: 'value'
});
```

3. **在 GTM 中設置對應的 Trigger 和 Tag**

## 🎯 GA4 自定義維度設置

建議在 GA4 中設置以下自定義維度以獲得更豐富的分析：

| 參數名稱 | 自定義維度名稱 | 範圍 |
|----------|----------------|------|
| project_title | 專案標題 | 事件 |
| project_id | 專案 ID | 事件 |
| contact_type | 聯絡類型 | 事件 |
| social_platform | 社群平台 | 事件 |
| scroll_depth | 滑動深度 | 事件 |

## 🧪 測試與驗證

### GTM Debug 模式
1. 在 GTM 中啟用 "Preview" 模式
2. 訪問您的網站
3. 檢查 Tag Assistant 中的事件觸發

### GA4 DebugView
1. 在 GA4 中開啟 DebugView
2. 即時查看事件資料
3. 驗證參數是否正確傳遞

### Console 日誌
所有事件都會在瀏覽器 Console 中顯示，格式如下：
```
GA4 Event: {event: "click_project_card", project_title: "Davincin", ...}
```

## 📈 分析建議

### 重要指標監控
- **專案互動率**: `click_project_card` 事件次數 / 頁面瀏覽量
- **用戶參與度**: `idle_30s` 事件發生率
- **內容深度**: 滑動深度分佈
- **轉換漏斗**: 首頁 → 專案頁 → 聯絡頁

### 自定義報表建議
1. **專案效能報表**: 按專案標題分組的點擊數
2. **用戶行為報表**: 滑動深度 vs 停留時間
3. **社群流量報表**: 各社群平台帶來的流量

## 🔒 隱私與合規

- ✅ 不收集個人識別資訊 (PII)
- ✅ 遵循 GDPR 相關規範
- ✅ 支援 Cookie 同意管理（需額外設置）

## 🐛 常見問題

**Q: 事件沒有在 GA4 中顯示？**
A: 檢查 GTM Container ID 和 GA4 Measurement ID 是否正確設置

**Q: 滑動深度事件重複觸發？**
A: 已在代碼中處理，每個里程碑只會觸發一次

**Q: 如何添加更多滑動深度里程碑？**
A: 在 `useTrackingEvents.js` 的 `milestones` 陣列中添加新的百分比

## 📞 支援

如有技術問題，請查看：
- [GTM 說明文檔](https://support.google.com/tagmanager)
- [GA4 說明文檔](https://support.google.com/analytics)
- 或聯絡開發團隊

---

🎉 **恭喜！您的網站追蹤已完全設置完成！** 