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
      <div className="home-cover">
        <div className="home-content-left">
          <div className="home-content-text-top">
            <h1 className="heading-main mb-0">
              End-to-End <br />Digital Product Enthusiast. <br />From research <br />and coding to <br />design
            </h1>
          </div>
          <div className="social-links -mt-6"> {/* 使用負的 margin-top */}
            <div className="social-link-container ">
              <a href="https://www.linkedin.com/in/jordanwu-tech/" className="social-link"> <h5 className="m-0">Linkedin</h5>     </a>
                <p className="-mt-2">https://www.linkedin.com/in/jordanwu-tech/</p>
            </div>
            <div className="social-link-container">
              <a href="https://github.com/jordanwu1993" className="social-link"> <h5>Github</h5></a>
              <p className="-mt-2">https://github.com/jordanwu1993</p>
            </div>
          </div>
          <div className="key-skills">
            <h2>Key Skills</h2>
            <div className="skill-icons grid grid-cols-6 gap-2">
              {[...Array(12)].map((_, index) => (
                <img
                  key={index}
                  src={`/skill-${index + 1}.png`}
                  alt={`Skill ${index + 1}`}
                  className="w-6 h-6"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="home-content-right">
          <div className="image-scroll-container top">
            {[...Array(6)].map((_, index) => (
              <img key={index} src={`/project-${index + 1}.png`} alt={`Project ${index + 1}`} />
            ))}
            {[...Array(6)].map((_, index) => (
              <img key={index + 6} src={`/project-${index + 1}.png`} alt={`Project ${index + 1}`} />
            ))}
          </div>
          {/* <div className="image-main">
            <img src="/home-mainpicture.png" alt="Home Image" className="w-full h-full object-cover" />
          </div> */}
          <div className="image-scroll-container bottom">
            {[...Array(6)].map((_, index) => (
              <img key={index} src={`/project-${index + 7}.png`} alt={`Project ${index + 7}`} />
            ))}
            {[...Array(6)].map((_, index) => (
              <img key={index + 6} src={`/project-${index + 7}.png`} alt={`Project ${index + 7}`} />
            ))}
          </div>
        </div>
      </div>

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