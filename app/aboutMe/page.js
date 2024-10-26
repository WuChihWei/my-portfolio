'use client';

import { useState, useEffect } from 'react';
import { MdArrowOutward } from "react-icons/md";

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
    <div className='home-container py-20 p-10 '>
      {/* After the home cover section */}
      <div className='p-10 bg-stone-200 rounded-3xl'>
      <h1 className="heading-2-custom py-20">
      End-to-End Digital <br/>
      Product Enthusiast
      </h1>

      <section className="resume-section pt-8">
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
                 <MdArrowOutward className="ml-1" />
                 </span>
                </div>
                {openItems['education-1'] && (
                  <div className="resume-item-content my-2">
                      <li>Dedicated to the Technology Entrepreneurship Program.</li>
                      <li>Specialized in digital product integration and user centered design.</li>
                  </div>
                )}
              </div>

              <div className="resume-item ">
                <div className="resume-item-header" onClick={() => toggleItem('education-2')}>
                  <span>B.A. of Industrial Product Design, Shih Chen University</span>
                 <span className="resume-item-subheader">
                 (Taipei, Taiwan) 2018
                 <MdArrowOutward className="ml-1" />
                 </span>
                </div>
                {openItems['education-2'] && (
                  <div className="resume-item-content my-2">
                      <li>Dedicated to the Design Management Program.</li>
                      <li>Specialized in service demechanical design and design thinking.</li>
                  </div>
                )}
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
