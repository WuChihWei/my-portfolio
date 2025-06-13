"use client";

import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import TrackingEvents from '../../lib/trackingEvents';

export default function ContactPage() {
  // 頁面載入追蹤
  useEffect(() => {
    TrackingEvents.trackPageView('contact');
    TrackingEvents.trackContactClick('contact_page');
  }, []);

  return (
    <div className="h-auto items-center  flex flex-col flex-wrap">
           
      <div className="w-full p-p-gap pt-40">
        <h4 className="heading-3-custom mr-20 mb-6 text-stone-900">
          Let's create something impactful together.
        </h4>
        <div className="space-y-2 md:space-y-4">
          <p className="flex items-center">
            <span className="mr-4">📍</span> 
            <span className="text-base md:text-base font-medium">Stockholm | EU | Taiwan </span>
          </p>
          <p className="flex items-center">
            <span className="mr-4">🌐</span> 
            <a 
              href="https://www.linkedin.com/in/jordanwu-tech/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-base md:text-base font-medium hover:text-blue-600 transition-colors duration-300"
              onClick={() => TrackingEvents.trackSocialLinkClick('LinkedIn', 'https://www.linkedin.com/in/jordanwu-tech/')}
            >
              linkedin.com/in/jordanwu-tech
            </a>
          </p>
          <p className="flex items-center">
            <span className="mr-4">✉️</span> 
            <span className="text-base md:text-base font-medium">w99jordan@gmail.com</span>
          </p>
        </div>
      </div>

      <div className="w-full">
        <Footer.Top />
      </div>
  
    </div>
  );
}