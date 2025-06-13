# GTM 簡化配置指南 - 避免 JSON 匯入問題

## ⚠️ 重要提醒

由於 GTM JSON 配置格式非常複雜且版本敏感，**強烈建議使用手動設置**而非 JSON 匯入。

## 🚫 已知的 JSON 匯入問題

### 1. EventType 錯誤
```
Error deserializing enum type [EventType]. Unrecognized value [customEvent].
```
**原因**: `customEvent` 應該是 `CUSTOM_EVENT` 或其他標準值

### 2. TagFiringOption 錯誤
```
Error deserializing enum type [TagFiringOption]. Unrecognized value [oncePerEvent].
```
**原因**: 無效的觸發選項值

### 3. 其他潛在問題
- Variable 類型格式不正確
- Trigger 配置結構問題
- Tag 參數格式問題
- Container 版本兼容性問題

## ✅ 推薦解決方案：手動設置

### 步驟 1: 創建 Variables
在 GTM 中手動創建以下 Data Layer Variables：

| Variable Name | Type | Data Layer Variable Name |
|---------------|------|--------------------------|
| `DLV - project_title` | Data Layer Variable | `project_title` |
| `DLV - project_id` | Data Layer Variable | `project_id` |
| `DLV - scroll_depth` | Data Layer Variable | `scroll_depth` |
| `DLV - contact_type` | Data Layer Variable | `contact_type` |
| `DLV - social_platform` | Data Layer Variable | `social_platform` |
| `DLV - link_url` | Data Layer Variable | `link_url` |
| `DLV - link_text` | Data Layer Variable | `link_text` |
| `DLV - video_action` | Data Layer Variable | `video_action` |
| `DLV - form_type` | Data Layer Variable | `form_type` |
| `DLV - success` | Data Layer Variable | `success` |
| `DLV - timestamp` | Data Layer Variable | `timestamp` |

### 步驟 2: 創建 Triggers
為每個事件創建 Custom Event Trigger：

| Trigger Name | Type | Event Name |
|--------------|------|------------|
| `Project Card Click` | Custom Event | `click_project_card` |
| `Scroll 25%` | Custom Event | `scroll_25%` |
| `Scroll 50%` | Custom Event | `scroll_50%` |
| `Scroll 75%` | Custom Event | `scroll_75%` |
| `Contact Click` | Custom Event | `click_contact` |
| `Resume Click` | Custom Event | `click_resume` |
| `Social Link Click` | Custom Event | `click_social_link` |
| `Navigation Link Click` | Custom Event | `click_nav_link` |
| `Idle 30s` | Custom Event | `idle_30s` |
| `Video Interaction` | Custom Event | `video_interaction` |
| `Form Submit` | Custom Event | `form_submit` |

### 步驟 3: 創建 GA4 Configuration Tag
1. **Tag Type**: GA4 Configuration
2. **Measurement ID**: 您的 GA4 Measurement ID (`G-XXXXXXXXXX`)
3. **Trigger**: All Pages

### 步驟 4: 創建 GA4 Event Tags

#### Project Card Click
- **Tag Type**: GA4 Event
- **Configuration Tag**: [選擇上面的 GA4 Configuration]
- **Event Name**: `click_project_card`
- **Event Parameters**:
  - `project_title`: `{{DLV - project_title}}`
  - `project_id`: `{{DLV - project_id}}`
- **Trigger**: Project Card Click

#### Scroll Depth
- **Tag Type**: GA4 Event
- **Configuration Tag**: [選擇 GA4 Configuration]
- **Event Name**: `scroll_depth`
- **Event Parameters**:
  - `scroll_depth`: `{{DLV - scroll_depth}}`
- **Trigger**: Scroll 25%, Scroll 50%, Scroll 75%

#### Contact Click
- **Tag Type**: GA4 Event
- **Configuration Tag**: [選擇 GA4 Configuration]
- **Event Name**: `click_contact`
- **Event Parameters**:
  - `contact_type`: `{{DLV - contact_type}}`
- **Trigger**: Contact Click

#### Social Link Click
- **Tag Type**: GA4 Event
- **Configuration Tag**: [選擇 GA4 Configuration]
- **Event Name**: `click_social_link`
- **Event Parameters**:
  - `social_platform`: `{{DLV - social_platform}}`
  - `link_url`: `{{DLV - link_url}}`
- **Trigger**: Social Link Click

#### Navigation Link Click
- **Tag Type**: GA4 Event
- **Configuration Tag**: [選擇 GA4 Configuration]
- **Event Name**: `click_nav_link`
- **Event Parameters**:
  - `link_text`: `{{DLV - link_text}}`
  - `link_url`: `{{DLV - link_url}}`
- **Trigger**: Navigation Link Click

#### Resume Click
- **Tag Type**: GA4 Event
- **Configuration Tag**: [選擇 GA4 Configuration]
- **Event Name**: `click_resume`
- **Trigger**: Resume Click

#### Idle 30s
- **Tag Type**: GA4 Event
- **Configuration Tag**: [選擇 GA4 Configuration]
- **Event Name**: `idle_30s`
- **Event Parameters**:
  - `timestamp`: `{{DLV - timestamp}}`
- **Trigger**: Idle 30s

#### Video Interaction
- **Tag Type**: GA4 Event
- **Configuration Tag**: [選擇 GA4 Configuration]
- **Event Name**: `video_interaction`
- **Event Parameters**:
  - `video_action`: `{{DLV - video_action}}`
  - `project_title`: `{{DLV - project_title}}`
- **Trigger**: Video Interaction

#### Form Submit
- **Tag Type**: GA4 Event
- **Configuration Tag**: [選擇 GA4 Configuration]
- **Event Name**: `form_submit`
- **Event Parameters**:
  - `form_type`: `{{DLV - form_type}}`
  - `success`: `{{DLV - success}}`
- **Trigger**: Form Submit

## 🧪 測試步驟

1. **啟用 Preview 模式**
2. **測試所有功能**：
   - 點擊作品卡片
   - 滑動頁面至 25%, 50%, 75%
   - 點擊社群連結
   - 點擊導航連結
   - 提交聯絡表單
   - 播放/暫停影片
3. **檢查 Tag Assistant**
4. **驗證 GA4 DebugView**
5. **發布 Container**

## 💡 為什麼手動設置更好？

### 優點
- ✅ **100% 相容性**: 避免格式錯誤
- ✅ **易於理解**: 清楚每個設置的用途
- ✅ **易於維護**: 可以輕鬆修改和調整
- ✅ **即時驗證**: 可以立即測試每個步驟
- ✅ **學習價值**: 更好地理解 GTM 運作方式

### JSON 匯入的問題
- ❌ **格式複雜**: 需要精確的語法
- ❌ **版本敏感**: 不同 GTM 版本格式可能不同
- ❌ **錯誤難排**: 難以定位具體問題
- ❌ **依賴關係**: 需要正確的設置順序

## 📞 需要協助？

1. **參考詳細指南**: `GTM-Manual-Setup-Guide.md`
2. **檢查事件日誌**: 瀏覽器 Console
3. **使用 GTM Preview**: 即時調試
4. **查看 GA4 DebugView**: 驗證數據

---

🎯 **建議**: 雖然手動設置需要更多時間，但這是確保追蹤系統正常運作的最可靠方法。 