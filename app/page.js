'use client';

import { useState, useEffect } from 'react';

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
        <div className="home-content-left max-md:w-full max-md:h-1/3 w-full h-[calc(30vh-100px)] md:h-[calc(100vh-120px)] md:w-1/4 flex flex-col">
          <div className="flex flex-col flex-grow">
            <div className="mb-4">
              <h1 className="text-xl md:text-4xl font-bold leading-tight">
                End-to-End
                Digital Product
                Enthusiast.
                From research
                and coding
                to design
              </h1>
            </div>
            <div className="flex flex-col">
              <div className="mb-2">
                <h5 className="font-semibold">Linkedin</h5>
                <a href="https://www.linkedin.com/in/jordanwu-tech/" className="text-sm">https://www.linkedin.com/in/jordanwu-tech/</a>
              </div>
              <div className="mb-2">
                <h5 className="font-semibold">Github</h5>
                <a href="https://github.com/WuChihWei" className="text-sm">https://github.com/WuChihWei</a>
              </div>
            </div>
          </div>
          
          <div className="mt-auto"> {/* Key Skills 部分 */}
            <div className="md:block hidden">
              <h2 className="font-semibold mb-2">Key Skills</h2>
              <div className="grid grid-cols-6 gap-2 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-8">
                {[...Array(12)].map((_, index) => (
                  <img
                    key={index}
                    src={`/skill-${index + 1}.png`}
                    alt={`Skill ${index + 1}`}
                    className="w-4 h-4 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-10 lg:h-10"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="home-content-right max-md:w-full w-full h-[calc(70vh-100px)] md:h-[calc(100vh-100px)] md:w-3/4 flex flex-col"> {/* Added flex flex-col */}
          <div className="image-scroll-container top flex-grow"> {/* Added flex-grow */}
            {[...Array(6)].map((_, index) => (
              <img key={index} src={`/project-${index + 1}.png`} alt={`Project ${index + 1}`} />
            ))}
            {[...Array(6)].map((_, index) => (
              <img key={index + 6} src={`/project-${index + 1}.png`} alt={`Project ${index + 1}`} />
            ))}
          </div>
          <div className="image-scroll-container bottom flex-grow"> {/* Added flex-grow */}
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
      <div className="md:hidden block w-full mt-8"> {/* 只在小屏幕顯示 */}
        <h2 className="font-semibold mb-6">Key Skills</h2>
        <div className="grid grid-cols-6 gap-10">
          {[...Array(12)].map((_, index) => (
            <img
              key={index}
              src={`/skill-${index + 1}.png`}
              alt={`Skill ${index + 1}`}
              className="w-10 h-10"
            />
          ))}
        </div>
      </div>

      {/* Add My Expertise section */}
      <section className="expertise-section bg-white py-16">
        <h2 className="text-3xl font-bold text-left mb-12">My Expertise</h2>
        <div className="expertise-grid mx-auto flex flex-wrap justify-between gap-y-8 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-12 xl:gap-x-16">
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="bg-black text-white p-2 mb-4">Id</div>
            <h3 className="text-xl font-semibold mb-2">Strategy & Direction</h3>
            <p className="text-sm text-gray-600">Solving hoSolving home allergy issues through first principles interior design, using data analysis and AI for a healthier living environment.</p>
          </div>
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="bg-black text-white p-2 mb-4">Id</div>
            <h3 className="text-xl font-semibold mb-2">Technology</h3>
            <p className="text-sm text-gray-600">Solving hoSolving home allergy issues through first principles interior design, using data analysis and AI for a healthier living environment.</p>
          </div>
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="bg-black text-white p-2 mb-4">Id</div>
            <h3 className="text-xl font-semibold mb-2">UI & UX Design</h3>
            <p className="text-sm text-gray-600">Solving hoSolving home allergy issues through first principles interior design, using data analysis and AI for a healthier living environment.</p>
          </div>
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="bg-black text-white p-2 mb-4">Id</div>
            <h3 className="text-xl font-semibold mb-2">Key Skills</h3>
            <p className="text-sm text-gray-600">Solving hoSolving home allergy issues through first principles interior design, using data analysis and AI for a healthier living environment.</p>
          </div>
        </div>
      </section>

      {/* After the home cover section */}
      <section className="resume-section">
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