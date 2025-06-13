// GTM / GA4 追蹤事件管理
export class TrackingEvents {
  static ensureDataLayer() {
    if (typeof window !== 'undefined' && !window.dataLayer) {
      window.dataLayer = [];
    }
  }

  static pushEvent(eventData) {
    this.ensureDataLayer();
    if (typeof window !== 'undefined' && window.dataLayer) {
      console.log('GA4 Event:', eventData);
      window.dataLayer.push(eventData);
    }
  }

  // 1. 作品卡片點擊追蹤
  static trackProjectCardClick(projectTitle, projectId) {
    this.pushEvent({
      event: 'click_project_card',
      project_title: projectTitle,
      project_id: projectId,
      page_title: document.title,
      page_location: window.location.href
    });
  }

  // 2. 30秒停留追蹤
  static trackIdleTime() {
    this.pushEvent({
      event: 'idle_30s',
      page_title: document.title,
      page_location: window.location.href,
      timestamp: new Date().toISOString()
    });
  }

  // 3. 滑動深度追蹤
  static trackScrollDepth(percentage) {
    this.pushEvent({
      event: `scroll_${percentage}%`,
      scroll_depth: percentage,
      page_title: document.title,
      page_location: window.location.href
    });
  }

  // 4. 聯絡我按鈕點擊
  static trackContactClick(contactType) {
    this.pushEvent({
      event: 'click_contact',
      contact_type: contactType,
      page_title: document.title,
      page_location: window.location.href
    });
  }

  // 4. 下載履歷點擊
  static trackResumeClick() {
    this.pushEvent({
      event: 'click_resume',
      page_title: document.title,
      page_location: window.location.href
    });
  }

  // 6. 社群連結點擊
  static trackSocialLinkClick(platform, url) {
    this.pushEvent({
      event: 'click_social_link',
      social_platform: platform,
      link_url: url,
      page_title: document.title,
      page_location: window.location.href
    });
  }

  // 10. 導航連結點擊
  static trackNavLinkClick(linkText, linkUrl) {
    this.pushEvent({
      event: 'click_nav_link',
      link_text: linkText,
      link_url: linkUrl,
      page_title: document.title,
      page_location: window.location.href
    });
  }

  // 額外：播放/暫停影片追蹤
  static trackVideoInteraction(action, projectTitle) {
    this.pushEvent({
      event: 'video_interaction',
      video_action: action,
      project_title: projectTitle,
      page_title: document.title,
      page_location: window.location.href
    });
  }

  // 額外：表單提交追蹤
  static trackFormSubmit(formType, success) {
    this.pushEvent({
      event: 'form_submit',
      form_type: formType,
      success: success,
      page_title: document.title,
      page_location: window.location.href
    });
  }

  // 額外：頁面瀏覽追蹤
  static trackPageView(pageName) {
    this.pushEvent({
      event: 'page_view',
      page_name: pageName,
      page_title: document.title,
      page_location: window.location.href
    });
  }

  // 額外：項目詳細頁進入追蹤
  static trackProjectDetailView(projectTitle, projectId) {
    this.pushEvent({
      event: 'project_detail_view',
      project_title: projectTitle,
      project_id: projectId,
      page_title: document.title,
      page_location: window.location.href
    });
  }
}

export default TrackingEvents; 