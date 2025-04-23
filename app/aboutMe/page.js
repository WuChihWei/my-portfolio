'use client';

import { useState, useEffect } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";

// 添加页面元数据
export const metadata = {
  title: 'About Jordan Wu | AI Product Designer | Business Strategist',
  description: 'Learn about Jordan Wu, an experienced AI Product Designer with expertise in UI/UX design, business strategy, product development, and innovative digital solutions.',
  keywords: 'Jordan Wu, AI Product Designer, UX/UI Design, Business Strategy, KTH Royal Institute of Technology, Product Development, Design Portfolio',
};

export default function AboutMePage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const [openItems, setOpenItems] = useState({
        'award-1': false,
        'award-2': false,
        'education-1': false,
        'education-2': false,
        // ... 其他項目
      });
    
      const toggleItem = (index) => {
        setOpenItems(prev => ({
          ...prev,
          [index]: !prev[index]
        }));
      };
  return (
    <div className='home-container p-p-gap py-20 md:p-10 '>
      {/* After the home cover section */}
      <h1 className="heading-2-custom p-10 md:pt-32 text-blue-700 text-left">
      End-to-end Digital Product Enthusiast delivering user-centered solutions through technology, strategy, and AI-power.
      </h1>
      <div className='py-20 p-p-gap bg-stone-200 rounded-3xl'>
    

      <section className="resume-section pt-8 text-stone-800">
        <div className="resume-container h-full">
            <div className='title-contatiner py-4'>
          <h2 className='heading-2-custom'>Education</h2>
          {isClient && (
            <>
              <div className="resume-item">
                <div className="resume-item-header" onClick={() => toggleItem('education-1')}>
                <span>M.S. of Interactive Media Technology, KTH Royal Institute of Technology</span>
                 <span className="resume-item-subheader">
                 (Stockholm, Sweden) 2024
                 {/* <CiCircleInfo className="ml-1" /> */}
                 </span>
                </div>
                  <div className="resume-item-content my-2">
                      <li>Dedicated to the Technology Entrepreneurship Program.</li>
                      <li>Specialized in digital product integration, AI innovation, interactive technologies and user centered design.</li>
                      <li>Developed expertise in business strategy and product market fit analysis.</li>
                  </div>
              </div>

              <div className="resume-item ">
                <div className="resume-item-header" onClick={() => toggleItem('education-2')}>
                  <span>B.A. of Industrial Product Design, Shih Chen University</span>
                 <span className="resume-item-subheader">
                 (Taipei, Taiwan) 2018
                 {/* <CiCircleInfo className="ml-1" /> */}
                 </span>
                </div>
                  <div className="resume-item-content my-2">
                      <li>Dedicated to the Design Management Program.</li>
                      <li>Specialized in sustainable, medical, service design and design thinking.</li>
                      <li>Focused on business models and strategic product positioning.</li>
                  </div>
              </div>
            </>
          )}
        </div> 
        
          < div className='title-container py-4'>
          <h2 className='heading-2-custom'>Achievements</h2>
          <div className="resume-item">
            <div className="resume-item-header-static">
              HIC Team Paper in SMC 2023 proceedings volume | 2023
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header-static">
              1st Place of Accessories Entry - Poltrona Frau Global Award | 2015
            </div>
          </div>
          <div className="resume-item">
            <div className="resume-item-header-static">
              Sustainability Projects Sponsored by National Taiwan Research and Development Institute | 2018
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header-static">
              Yilan Chair International Design Award | 2017
            </div>
          </div>
          </div>
        </div>
      </section> 
      </div> 
    </div>
  );
}
