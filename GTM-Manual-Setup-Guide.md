# GTM 手動設置指南

如果您偏好手動設置 GTM，請按照以下步驟創建所需的 Tags、Triggers 和 Variables。

## 🔧 Variables 設置

首先在 GTM 中創建以下 Data Layer Variables：

### 1. 基本 Variables
| Variable Name | Variable Type | Data Layer Variable Name |
|---------------|---------------|--------------------------|
| DLV - project_title | Data Layer Variable | project_title |
| DLV - project_id | Data Layer Variable | project_id |
| DLV - scroll_depth | Data Layer Variable | scroll_depth |
| DLV - contact_type | Data Layer Variable | contact_type |
| DLV - social_platform | Data Layer Variable | social_platform |
| DLV - link_url | Data Layer Variable | link_url |
| DLV - link_text | Data Layer Variable | link_text |
| DLV - video_action | Data Layer Variable | video_action |
| DLV - form_type | Data Layer Variable | form_type |
| DLV - success | Data Layer Variable | success |
| DLV - timestamp | Data Layer Variable | timestamp |

## 🎯 Triggers 設置

### 1. Project Card Click Trigger
- **Trigger Type**: Custom Event
- **Event Name**: `click_project_card`
- **This trigger fires on**: All Custom Events

### 2. Scroll Depth Triggers
創建 3 個 Custom Event Triggers：

#### Scroll 25%
- **Trigger Type**: Custom Event
- **Event Name**: `scroll_25%`

#### Scroll 50%
- **Trigger Type**: Custom Event
- **Event Name**: `scroll_50%`

#### Scroll 75%
- **Trigger Type**: Custom Event
- **Event Name**: `scroll_75%`

### 3. Contact Click Trigger
- **Trigger Type**: Custom Event
- **Event Name**: `click_contact`

### 4. Resume Click Trigger
- **Trigger Type**: Custom Event
- **Event Name**: `click_resume`

### 5. Social Link Click Trigger
- **Trigger Type**: Custom Event
- **Event Name**: `click_social_link`

### 6. Navigation Link Click Trigger
- **Trigger Type**: Custom Event
- **Event Name**: `click_nav_link`

### 7. Idle 30s Trigger
- **Trigger Type**: Custom Event
- **Event Name**: `idle_30s`

### 8. Video Interaction Trigger
- **Trigger Type**: Custom Event
- **Event Name**: `video_interaction`

### 9. Form Submit Trigger
- **Trigger Type**: Custom Event
- **Event Name**: `form_submit`

## 🏷️ Tags 設置

### 1. GA4 Configuration Tag
- **Tag Type**: GA4 Configuration
- **Measurement ID**: 您的 GA4 Measurement ID (G-XXXXXXXXXX)
- **Triggering**: All Pages

### 2. GA4 Event Tags

#### Project Card Click Event
- **Tag Type**: GA4 Event
- **Configuration Tag**: 選擇上面的 GA4 Configuration Tag
- **Event Name**: `click_project_card`
- **Event Parameters**:
  - `project_title`: `{{DLV - project_title}}`
  - `project_id`: `{{DLV - project_id}}`
- **Triggering**: Project Card Click Trigger

#### Scroll Depth Event
- **Tag Type**: GA4 Event
- **Configuration Tag**: GA4 Configuration Tag
- **Event Name**: `scroll_depth`
- **Event Parameters**:
  - `scroll_depth`: `{{DLV - scroll_depth}}`
- **Triggering**: Scroll 25%, Scroll 50%, Scroll 75% Triggers

#### Contact Click Event
- **Tag Type**: GA4 Event
- **Configuration Tag**: GA4 Configuration Tag
- **Event Name**: `click_contact`
- **Event Parameters**:
  - `contact_type`: `{{DLV - contact_type}}`
- **Triggering**: Contact Click Trigger

#### Resume Click Event
- **Tag Type**: GA4 Event
- **Configuration Tag**: GA4 Configuration Tag
- **Event Name**: `click_resume`
- **Triggering**: Resume Click Trigger

#### Social Link Click Event
- **Tag Type**: GA4 Event
- **Configuration Tag**: GA4 Configuration Tag
- **Event Name**: `click_social_link`
- **Event Parameters**:
  - `social_platform`: `{{DLV - social_platform}}`
  - `link_url`: `{{DLV - link_url}}`
- **Triggering**: Social Link Click Trigger

#### Navigation Link Click Event
- **Tag Type**: GA4 Event
- **Configuration Tag**: GA4 Configuration Tag
- **Event Name**: `click_nav_link`
- **Event Parameters**:
  - `link_text`: `{{DLV - link_text}}`
  - `link_url`: `{{DLV - link_url}}`
- **Triggering**: Navigation Link Click Trigger

#### Idle 30s Event
- **Tag Type**: GA4 Event
- **Configuration Tag**: GA4 Configuration Tag
- **Event Name**: `idle_30s`
- **Event Parameters**:
  - `timestamp`: `{{DLV - timestamp}}`
- **Triggering**: Idle 30s Trigger

#### Video Interaction Event
- **Tag Type**: GA4 Event
- **Configuration Tag**: GA4 Configuration Tag
- **Event Name**: `video_interaction`
- **Event Parameters**:
  - `video_action`: `{{DLV - video_action}}`
  - `project_title`: `{{DLV - project_title}}`
- **Triggering**: Video Interaction Trigger

#### Form Submit Event
- **Tag Type**: GA4 Event
- **Configuration Tag**: GA4 Configuration Tag
- **Event Name**: `form_submit`
- **Event Parameters**:
  - `form_type`: `{{DLV - form_type}}`
  - `success`: `{{DLV - success}}`
- **Triggering**: Form Submit Trigger

## ✅ 測試步驟

1. **啟用 Preview 模式** 在 GTM 中
2. **開啟網站** 進行測試
3. **執行各種操作**:
   - 點擊作品卡片
   - 滑動頁面到不同深度
   - 點擊社群連結
   - 點擊導航連結
   - 提交聯絡表單
   - 播放/暫停影片
4. **檢查 Tag Assistant** 確認事件正確觸發
5. **發布 Container** 完成設置

## 📋 檢查清單

- [ ] 所有 Variables 已創建
- [ ] 所有 Triggers 已創建
- [ ] 所有 Tags 已創建
- [ ] GA4 Configuration Tag 正確設置
- [ ] 所有 Tags 都連接到正確的 Triggers
- [ ] Preview 模式測試通過
- [ ] Container 已發布

## 🔍 驗證方法

### 在 GTM Debug 模式中檢查：
1. **Tags Fired**: 確認相關 Tag 被觸發
2. **Variables**: 確認 Data Layer Variables 有正確的值
3. **Events**: 確認自定義事件正確發送

### 在 GA4 中檢查：
1. **DebugView**: 即時查看事件
2. **Events**: 確認事件出現在報表中
3. **Custom Dimensions**: 設置並檢查自定義維度

完成以上設置後，您的網站將擁有完整的 GA4 追蹤功能！ 