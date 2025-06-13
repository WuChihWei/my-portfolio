import { useEffect, useRef } from 'react';
import TrackingEvents from '../lib/trackingEvents';

export const useTrackingEvents = () => {
  const scrollTracked = useRef(new Set());
  const idleTimer = useRef(null);
  const isIdle30sTracked = useRef(false);

  useEffect(() => {
    // 滑動深度追蹤
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercent = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);

      // 追蹤 25%, 50%, 75% 滑動深度
      const milestones = [25, 50, 75];
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollTracked.current.has(milestone)) {
          scrollTracked.current.add(milestone);
          TrackingEvents.trackScrollDepth(milestone);
        }
      });

      // 重置閒置計時器
      resetIdleTimer();
    };

    // 滑鼠移動、點擊、鍵盤輸入時重置閒置計時器
    const resetIdleTimer = () => {
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }
      
      // 如果還沒追蹤過 30 秒閒置，設置新的計時器
      if (!isIdle30sTracked.current) {
        idleTimer.current = setTimeout(() => {
          isIdle30sTracked.current = true;
          TrackingEvents.trackIdleTime();
        }, 30000); // 30 秒
      }
    };

    const handleUserActivity = () => {
      resetIdleTimer();
    };

    // 頁面載入時開始閒置計時器
    resetIdleTimer();

    // 添加事件監聽器
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleUserActivity, { passive: true });
    window.addEventListener('click', handleUserActivity, { passive: true });
    window.addEventListener('keypress', handleUserActivity, { passive: true });
    window.addEventListener('touchstart', handleUserActivity, { passive: true });

    // 清理函數
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('click', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
      
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }
    };
  }, []);

  // 手動重置追蹤狀態（用於 SPA 路由切換）
  const resetTracking = () => {
    scrollTracked.current.clear();
    isIdle30sTracked.current = false;
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
    }
  };

  return {
    resetTracking,
    // 提供便捷的追蹤方法
    trackProjectClick: TrackingEvents.trackProjectCardClick,
    trackContactClick: TrackingEvents.trackContactClick,
    trackResumeClick: TrackingEvents.trackResumeClick,
    trackSocialClick: TrackingEvents.trackSocialLinkClick,
    trackNavClick: TrackingEvents.trackNavLinkClick,
    trackVideoInteraction: TrackingEvents.trackVideoInteraction,
    trackFormSubmit: TrackingEvents.trackFormSubmit,
    trackPageView: TrackingEvents.trackPageView,
    trackProjectDetailView: TrackingEvents.trackProjectDetailView
  };
};

export default useTrackingEvents; 