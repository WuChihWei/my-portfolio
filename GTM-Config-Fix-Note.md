# GTM 配置修正說明

## 🔧 已修正的問題

### 錯誤說明
原始的 `gtm-container-config.json` 文件包含了無效的 `tagFiringOption: "oncePerEvent"` 屬性，這會導致匯入時出現以下錯誤：

```
Error deserializing enum type [TagFiringOption]. Unrecognized value [oncePerEvent].
```

### 修正內容
- ✅ 移除了所有無效的 `tagFiringOption` 屬性
- ✅ 保留了核心的 Tag、Trigger 和 Variable 配置結構
- ✅ 確保符合 GTM 標準配置格式

## 🛠️ 建議的設置方法

### 方法 1: 手動設置（推薦）
按照 `GTM-Manual-Setup-Guide.md` 逐步手動設置：

**優點：**
- ✅ 100% 相容性保證
- ✅ 完全掌控配置過程
- ✅ 易於理解和維護
- ✅ 可以根據需要調整設置

**步驟：**
1. 創建所有 Data Layer Variables
2. 設置自定義事件 Triggers
3. 配置 GA4 事件 Tags
4. 測試和驗證

### 方法 2: 參考 JSON 配置
使用修正後的 `gtm-container-config.json` 作為參考：

**用途：**
- 📖 了解完整配置結構
- 🔍 參考參數名稱和設置
- 📋 作為手動設置的檢查清單

## ⚠️ GTM 匯入注意事項

由於 GTM 配置格式的複雜性和版本差異，JSON 匯入可能遇到以下問題：

1. **格式相容性**：不同 GTM 版本的格式可能不同
2. **ID 衝突**：Container ID 和 Measurement ID 需要更新
3. **權限問題**：需要適當的 GTM 帳戶權限
4. **依賴關係**：某些設置可能需要特定順序

## ✅ 驗證設置正確性

### 1. 檢查 Variables
確認以下 Data Layer Variables 已創建：
- `DLV - project_title`
- `DLV - project_id`
- `DLV - scroll_depth`
- `DLV - contact_type`
- `DLV - social_platform`
- `DLV - link_url`
- `DLV - link_text`
- `DLV - video_action`
- `DLV - form_type`
- `DLV - success`
- `DLV - timestamp`

### 2. 檢查 Triggers
確認以下 Custom Event Triggers 已創建：
- `click_project_card`
- `scroll_25%`, `scroll_50%`, `scroll_75%`
- `click_contact`
- `click_resume`
- `click_social_link`
- `click_nav_link`
- `idle_30s`
- `video_interaction`
- `form_submit`

### 3. 檢查 Tags
確認每個事件都有對應的 GA4 Event Tag

## 🧪 測試方法

1. **啟用 GTM Preview 模式**
2. **執行各種網站操作**：
   - 點擊作品卡片
   - 滑動頁面
   - 點擊社群連結
   - 提交聯絡表單
3. **檢查 Tag Assistant**：確認所有事件正確觸發
4. **驗證 GA4**：在 DebugView 中查看即時事件

## 📞 需要協助？

如果在設置過程中遇到問題：

1. **參考手動設置指南**：`GTM-Manual-Setup-Guide.md`
2. **檢查 Console 日誌**：查看瀏覽器 Console 中的事件輸出
3. **使用 GTM Preview**：即時檢查 Tag 觸發狀況
4. **查看 GA4 DebugView**：確認事件正確傳送

---

💡 **建議**：手動設置雖然需要更多時間，但能確保 100% 的相容性和功能正確性。這也有助於更好地理解整個追蹤系統的運作方式。 