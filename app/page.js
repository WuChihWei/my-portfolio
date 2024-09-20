'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [openItems, setOpenItems] = useState({});

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
      {/* <Navbar /> */}
      <div className="home-cover">
        <div className="home-content-left">
          <div className="home-content-text-top">
            <h1 className="heading-main">Allergy First<br />Principle Solution<br />with just an Address</h1>
          </div>
          <div className="social-links">
            <div className="social-link-container">
              <a href="https://www.linkedin.com/in/jordanwu1993/" className="social-link"> <h5>Linkedin</h5></a>
              <p>https://www.linkedin.com/in/jordanwu1993/</p>
            </div>
            <div className="social-link-container">
              <a href="https://github.com/jordanwu1993" className="social-link"> <h5>Github</h5></a>
              <p>https://github.com/jordanwu1993</p>
            </div>
          </div>
          <div className="key-skills">
            <h2>Key Skills</h2>
            <div className="skill-icons">
              {/* Add your skill icons here */}
            </div>
          </div>
        </div>
        <div className="image-placeholder"></div>
      </div>

      {/* After the home cover section */}
      <section className="resume-section">
        <div className="resume-container">
          <h2>Experience</h2>
          {['Github', 'Github', 'Github'].map((item, index) => (
            <div className="resume-item" key={`experience-${index}`}>
              <div className="resume-item-header" onClick={() => toggleItem(`experience-${index}`)}>
                {item}
              </div>
              <div className="resume-item-content" style={{display: openItems[`experience-${index}`] ? 'block' : 'none'}}>
                Contributed to open source projects and collaborated with developers worldwide.
              </div>
            </div>
          ))}

          <h2>Awards</h2>
          {['Github', 'Github', 'Github'].map((item, index) => (
            <div className="resume-item" key={`awards-${index}`}>
              <div className="resume-item-header" onClick={() => toggleItem(`awards-${index}`)}>
                {item}
              </div>
              <div className="resume-item-content" style={{display: openItems[`awards-${index}`] ? 'block' : 'none'}}>
                Received recognition for outstanding contributions to the developer community.
              </div>
            </div>
          ))}

          <h2>Education</h2>
          {['Github', 'Github', 'Github'].map((item, index) => (
            <div className="resume-item" key={`education-${index}`}>
              <div className="resume-item-header" onClick={() => toggleItem(`education-${index}`)}>
                {item}
              </div>
              <div className="resume-item-content" style={{display: openItems[`education-${index}`] ? 'block' : 'none'}}>
                Completed various online courses and certifications related to software development.
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}