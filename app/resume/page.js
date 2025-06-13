'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import TrackingEvents from '../../lib/trackingEvents';

export default function Resume() {
  // 頁面載入追蹤
  useEffect(() => {
    TrackingEvents.trackPageView('resume');
    TrackingEvents.trackResumeClick();
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center m-20">
      <div className="w-[210mm] h-[297mm] bg-white shadow-2xl overflow-hidden relative">
        <Image
          src="/JordanWu_CV.jpg"
          alt="Resume Photo"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  );
}
