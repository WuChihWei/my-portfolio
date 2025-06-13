# GTM 增強版配置匯入指南

## 🎯 基於您現有配置的完整解決方案

我已經基於您的 GTM 匯出文件創建了增強版配置，包含所有 10 個追蹤功能！

## 📁 檔案說明

### 原始文件：
- `GTM-MNZMBL8T_workspace3.json` - 您的現有配置

### 增強文件：
- `GTM-MNZMBL8T_enhanced.json` - 完整的追蹤配置

## ✅ 增強版包含的功能

### 🏷️ Tags (15 個)
| Tag ID | Tag Name | 功能 | 事件名稱 |
|--------|----------|------|---------|
| 3 | test_1 | 測試標籤 | test_1 |
| 5 | Google Tag G-B3R9YH472J | GA4 配置 | - |
| 6 | GA4 Event - Click GitHub | GitHub 點擊 | click_github |
| **7** | **GA4 Event - Project Card Click** | **專案卡片點擊** | **click_project_card** |
| **8** | **GA4 Event - Scroll Depth** | **滾動深度追蹤** | **scroll_depth** |
| **9** | **GA4 Event - Contact Click** | **聯絡點擊** | **click_contact** |
| **10** | **GA4 Event - Social Link Click** | **社群連結點擊** | **click_social_link** |
| **11** | **GA4 Event - Navigation Click** | **導航點擊** | **click_nav_link** |
| **12** | **GA4 Event - Resume Click** | **履歷點擊** | **click_resume** |
| **13** | **GA4 Event - Idle 30s** | **30秒閒置** | **idle_30s** |
| **14** | **GA4 Event - Video Interaction** | **影片互動** | **video_interaction** |
| **15** | **GA4 Event - Form Submit** | **表單提交** | **form_submit** |

### 🎯 Triggers (17 個)
| Trigger ID | Trigger Name | 類型 | 事件條件 |
|------------|--------------|------|----------|
| 4 | Click - GitHub Button | LINK_CLICK | URL 包含 github.com |
| **10** | **Custom Event - Project Card Click** | **CUSTOM_EVENT** | **click_project_card** |
| **11** | **Custom Event - Scroll 25%** | **CUSTOM_EVENT** | **scroll_25%** |
| **12** | **Custom Event - Scroll 50%** | **CUSTOM_EVENT** | **scroll_50%** |
| **13** | **Custom Event - Scroll 75%** | **CUSTOM_EVENT** | **scroll_75%** |
| **14** | **Custom Event - Contact Click** | **CUSTOM_EVENT** | **click_contact** |
| **15** | **Custom Event - Social Link Click** | **CUSTOM_EVENT** | **click_social_link** |
| **16** | **Custom Event - Navigation Click** | **CUSTOM_EVENT** | **click_nav_link** |
| **17** | **Custom Event - Resume Click** | **CUSTOM_EVENT** | **click_resume** |
| **18** | **Custom Event - Idle 30s** | **CUSTOM_EVENT** | **idle_30s** |
| **19** | **Custom Event - Video Interaction** | **CUSTOM_EVENT** | **video_interaction** |
| **20** | **Custom Event - Form Submit** | **CUSTOM_EVENT** | **form_submit** |

### 📊 Variables (11 個 Data Layer Variables)
| Variable ID | Variable Name | Data Layer Key |
|-------------|---------------|----------------|
| **1** | **DLV - project_title** | **project_title** |
| **2** | **DLV - project_id** | **project_id** |
| **3** | **DLV - scroll_depth** | **scroll_depth** |
| **4** | **DLV - contact_type** | **contact_type** |
| **5** | **DLV - social_platform** | **social_platform** |
| **6** | **DLV - link_url** | **link_url** |
| **7** | **DLV - link_text** | **link_text** |
| **8** | **DLV - timestamp** | **timestamp** |
| **9** | **DLV - video_action** | **video_action** |
| **10** | **DLV - form_type** | **form_type** |
| **11** | **DLV - success** | **success** |

## 🚀 匯入步驟

### 方法 1：直接匯入（推薦）

1. **備份現有配置**
   ```
   GTM 後台 → Admin → Export Container → 保存當前版本
   ```

2. **匯入增強版配置**
   ```
   GTM 後台 → Admin → Import Container
   選擇：GTM-MNZMBL8T_enhanced.json
   選擇：Overwrite (覆蓋現有配置)
   ```

3. **驗證匯入結果**
   - 檢查 Tags: 應該有 15 個標籤
   - 檢查 Triggers: 應該有 17 個觸發器  
   - 檢查 Variables: 應該有 11 個變數

### 方法 2：手動創建（如果匯入失敗）

如果直接匯入遇到問題，請參考 `GTM-SIMPLIFIED-CONFIG.md` 手動創建配置。

## 🧪 測試步驟

### 1. 啟用 Preview 模式
```
GTM 後台 → Preview → 進入預覽模式
```

### 2. 測試各項功能
- ✅ **專案卡片點擊**: 點擊作品展示卡片
- ✅ **滾動深度**: 滾動頁面至 25%, 50%, 75%
- ✅ **社群連結**: 點擊 LinkedIn, GitHub, Behance 連結
- ✅ **導航點擊**: 點擊選單項目
- ✅ **聯絡點擊**: 點擊聯絡按鈕
- ✅ **履歷點擊**: 點擊履歷下載
- ✅ **30秒閒置**: 等待 30 秒無互動
- ✅ **影片互動**: 播放/暫停作品影片
- ✅ **表單提交**: 提交聯絡表單

### 3. 檢查 GA4 DebugView
```
GA4 → Configure → DebugView → 查看即時事件
```

## 📋 事件數據結構

### Project Card Click
```javascript
{
  event: 'click_project_card',
  project_title: '專案名稱',
  project_id: '專案ID'
}
```

### Scroll Depth
```javascript
{
  event: 'scroll_25%', // 或 scroll_50%, scroll_75%
  scroll_depth: '25%'
}
```

### Social Link Click
```javascript
{
  event: 'click_social_link',
  social_platform: 'linkedin', // 或 github, behance
  link_url: 'https://linkedin.com/in/...'
}
```

### Navigation Click
```javascript
{
  event: 'click_nav_link',
  link_text: '選單項目文字',
  link_url: '/about'
}
```

### Contact Click
```javascript
{
  event: 'click_contact',
  contact_type: 'email' // 或 form, phone
}
```

### Resume Click
```javascript
{
  event: 'click_resume'
}
```

### Idle 30s
```javascript
{
  event: 'idle_30s',
  timestamp: '2024-06-13T10:46:58Z'
}
```

### Video Interaction
```javascript
{
  event: 'video_interaction',
  video_action: 'play', // 或 pause
  project_title: '專案名稱'
}
```

### Form Submit
```javascript
{
  event: 'form_submit',
  form_type: 'contact',
  success: 'true' // 或 false
}
```

## ⚠️ 重要提醒

### 🔧 格式修正
已修正 Custom Event Filter 問題：
- ✅ 所有觸發器現在使用正確的 `{{_event}}` 格式
- ✅ 符合 GTM 匯入要求
- ✅ 可以直接匯入無錯誤

### 1. 網站代碼兼容性
確保您的網站代碼已整合追蹤事件：
- 參考之前創建的 `lib/trackingEvents.js`
- 參考之前創建的 `hooks/useTrackingEvents.js`
- 確保各組件已正確觸發 dataLayer.push()

### 2. GA4 設置
- **Measurement ID**: G-B3R9YH472J（已在配置中設置）
- **Enhanced Measurement**: 確保在 GA4 中啟用
- **Custom Dimensions**: 考慮為關鍵參數設置自訂維度

### 3. 發布流程
1. 在 Preview 模式中充分測試
2. 確認所有事件正常觸發
3. 檢查 GA4 DebugView 中的數據
4. 發布 GTM 容器

## 🎯 下一步行動

1. **立即匯入**: 使用 `GTM-MNZMBL8T_enhanced.json`
2. **測試驗證**: 確保所有功能正常
3. **發布上線**: 開始收集追蹤數據
4. **監控分析**: 在 GA4 中查看用戶行為數據

---

## 📞 需要協助？

如果匯入過程中遇到任何問題：
1. 檢查錯誤訊息
2. 參考 `GTM-SIMPLIFIED-CONFIG.md` 手動設置
3. 確認網站代碼正確整合

🎉 **恭喜！您現在擁有完整的作品集追蹤系統！** 