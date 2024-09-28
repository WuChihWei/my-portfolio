'use client';

import { useState, useEffect } from 'react';
import { MdOutlineDesignServices, MdOutlineComputer, MdOutlineBrush } from 'react-icons/md';
import { FiTool } from "react-icons/fi";

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdArrowOutward } from "react-icons/md";


export default function Home() {
  const [openItems, setOpenItems] = useState({
    'experience-1': false,
    'experience-2': false,
    'experience-3': false,
    'award-1': false,
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

  useEffect(() => {
    const resumeItems = document.querySelectorAll('.resume-item-header');
  
    resumeItems.forEach(item => {
      item.addEventListener('click', function() {
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    });
  }, []); // 空數組作為依賴項，確保效果只運行一次

  return (
    <div className='home-container'>
      <div className="home-cover flex flex-col md:flex-row">
        <div className="home-content-left max-md:w-full max-md:h-1/2 w-full h-[calc(30vh-100px)] md:h-[calc(100vh-120px)] md:w-1/3 flex flex-col">
          <div className="flex flex-col flex-grow p-p-gap">
            <div className="mb-4 md:py-0 py-20"> {/* 添加 py-8 用於小螢幕 */}
              <h1 className="text-2xl md:text-4xl font-extrabold leading-tight pr-10">
              An End-to-End Digital Product Enthusiast
              </h1>
              <div className="pt-6 mr-10 md:py-0 ">
              <h4>
              One Builder, One Mission. Delivering end-to-end digital solutions through design thinking — from research and strategy to coding and design.
              </h4>
              <div className="flex flex-row space-x-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/jordanwu-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <FaLinkedin className="mr-2" />
                  LinkedIn
                  <MdArrowOutward className="ml-2 text-sl" />
                </a>
                <a
                  href="https://github.com/WuChihWei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-800 hover:text-gray-600 transition-colors duration-300"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                  <MdArrowOutward className="ml-2 text-sl" />
                </a>
              </div>
              </div>
            </div>
            
          </div>
          
          <div className="mt-auto p-p-gap"> {/* Key Skills 部分 */}
            <div className="md:block hidden">
              <h2 className="font-semibold mb-6">Key Skills</h2>
              <div className="grid grid-cols-6 gap-2 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-8">
                {[...Array(12)].map((_, index) => (
                  <img
                    key={index}
                    src={`/skill-${index + 1}.png`}
                    alt={`Skill ${index + 1}`}
                    className="w-4 h-4 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="home-content-right max-md:w-full w-full h-[calc(50vh-100px)] md:h-[calc(100vh-100px)] md:w-2/3 flex flex-col"> {/* Added flex flex-col */}
          <div className="image-scroll-container top flex-grow space-y-0 md:space-y-4"> {/* Added flex-grow and space-y classes */}
            {[...Array(6)].map((_, index) => (
              <img key={index} src={`/project-${index + 1}.png`} alt={`Project ${index + 1}`} />
            ))}
            {[...Array(6)].map((_, index) => (
              <img key={index + 6} src={`/project-${index + 1}.png`} alt={`Project ${index + 1}`} />
            ))}
          </div>
          <div className="image-scroll-container bottom flex-grow space-y-0 md:space-y-4"> {/* Added flex-grow and space-y classes */}
            {[...Array(6)].map((_, index) => (
              <img key={index} src={`/project-${index + 7}.png`} alt={`Project ${index + 7}`} />
            ))}
            {[...Array(6)].map((_, index) => (
              <img key={index + 6} src={`/project-${index + 7}.png`} alt={`Project ${index + 7}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Key Skills 部分在小屏幕時顯示在底部 */}
      <div className="md:hidden block w-full mt-20 p-p-gap"> {/* 只在小屏幕顯示 */}
        <h2 className="font-semibold mb-6">Key Skills</h2>
        <div className="grid grid-cols-6 gap-10">
          {[...Array(12)].map((_, index) => (
            <img
              key={index}
              src={`/skill-${index + 1}.png`}
              alt={`Skill ${index + 1}`}
              className="w-8 h-8"
            />
          ))}
        </div>
      </div>

      {/* Add My Expertise section */}
      <section className="expertise-section bg-white py-10 mb:py-20 p-p-gap">
        <h2 className="text-3xl font-bold text-left my-12">My Expertise</h2>
        <div className="expertise-grid mx-auto flex flex-wrap justify-between gap-y-8 gap-10 sm:gap-12">
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="bg-white border-2 border-black p-2 mb-4 rounded-full">
              <MdOutlineDesignServices size={34} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold my-4">Strategy & Direction</h3>
            <p className="text-sm text-gray-600">Solving home allergy issues through first principles interior design, using data analysis and AI for a healthier living environment.</p>
          </div>
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="bg-white border-2 border-black p-2 mb-4 rounded-full">
              <MdOutlineComputer size={34} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold my-4">Technology</h3>
            <p className="text-sm text-gray-600">Solving home allergy issues through first principles interior design, using data analysis and AI for a healthier living environment.</p>
          </div>
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="bg-white border-2 border-black p-2 mb-4 rounded-full">
              <MdOutlineBrush size={34} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold my-4">UI & UX Design</h3>
            <p className="text-sm text-gray-600">Solving home allergy issues through first principles interior design, using data analysis and AI for a healthier living environment.</p>
          </div>
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="bg-white border-2 border-black p-2 mb-4 rounded-full">
              <FiTool size={34} className="text-black" />
            </div>
            <h3 className="text-xl font-semibold my-4">Key Skills</h3>
            <p className="text-sm text-gray-600">Solving home allergy issues through first principles interior design, using data analysis and AI for a healthier living environment.</p>
          </div>
        </div>
      </section>

      {/* After the home cover section */}
      <section className="resume-section p-p-gap">
        <div className="resume-container">
          <h2>Experience</h2>
          <div className="resume-item">

            <div className="resume-item-header" onClick={() => toggleItem('experience-1')}>
            Art Director at Studs - Stockholm, Sweden (11months (Nov. 2022 – Sep.2023))
            </div>
            <div className="resume-item-content" style={{display: openItems['experience-1'] ? 'block' : 'none'}}>
            Design and frame the user-centered UI/UX system, including website and social media.
            </div>
            </div>


            <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('experience-2')}>
            Trainee at AppWorks School - Taipei, Taiwan
            </div>
            <div className="resume-item-content" style={{display: openItems['experience-2'] ? 'block' : 'none'}}>
            Developed iOS object oriented programming projects using Swift. Cooperated with Android, Back-End and Front-End teams through Scrum and agile develop mode
            </div>
            </div>

            <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('experience-3')}>
            Design Engineer at Atom Health Corp. - Taipei, Taiwan
            </div>
            <div className="resume-item-content" style={{display: openItems['experience-3'] ? 'block' : 'none'}}>
            Managed and designed medical devices: UI, UX and IoT design with software and medical engineers.
            </div>
            </div>
          {/* Add more experience items as needed */}

          <h2>Awards</h2>
          <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('award-1')}>
            HIC Team Paper in SMC 2023 proceedings volume
            </div>
            <div className="resume-item-content" style={{display: openItems['award-1'] ? 'block' : 'none'}}>
              Received for developing an AI-powered code review assistant at the Annual Tech Conference.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('award-1')}>
            1st Place of Accessories Entry - Poltrona Frau Global Award
            </div>
            <div className="resume-item-content" style={{display: openItems['award-1'] ? 'block' : 'none'}}>
              Received for developing an AI-powered code review assistant at the Annual Tech Conference.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('award-1')}>
            Sustainability Projects Sponsored by National Taiwan Research and Development Institute
            </div>
            <div className="resume-item-content" style={{display: openItems['award-1'] ? 'block' : 'none'}}>
              Received for developing an AI-powered code review assistant at the Annual Tech Conference.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('award-1')}>
            Yilan Chair International Design Award
            </div>
            <div className="resume-item-content" style={{display: openItems['award-1'] ? 'block' : 'none'}}>
              Received for developing an AI-powered code review assistant at the Annual Tech Conference.
            </div>
          </div>
          {/* Add more award items as needed */}

          <h2>Education</h2>
          <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('education-1')}>
            M.S. of Interactive Media Technology, KTH Royal Institute of Technology - Stockholm, Sweden
            </div>
            <div className="resume-item-content" style={{display: openItems['education-1'] ? 'block' : 'none'}}>
              Specialized in Machine Learning and Artificial Intelligence. Graduated with honors.
            </div>
          </div>
          <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('education-2')}>
            Technology Entrepreneurship Program, KTH Royal Institute of Technology - Stockholm, Sweden
            </div>
            <div className="resume-item-content" style={{display: openItems['education-2'] ? 'block' : 'none'}}>
              Completed capstone project on blockchain technology. Dean's List for all semesters.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('education-2')}>
            B.A. of Industrial Product Design, Shih Chen University - Taipei, Taiwan
            </div>
            <div className="resume-item-content" style={{display: openItems['education-2'] ? 'block' : 'none'}}>
              Completed capstone project on blockchain technology. Dean's List for all semesters.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('education-2')}>
            Design Management Program, Shih Chen University - Taipei, Taiwan
            </div>
            <div className="resume-item-content" style={{display: openItems['education-2'] ? 'block' : 'none'}}>
              Completed capstone project on blockchain technology. Dean's List for all semesters.
            </div>
          </div>
          {/* Add more education items as needed */}
        </div>
      </section>

    </div>
  );
}