// components/IntroductionPage.js
import React from 'react';
import './projectTemplate.css';

const IntroductionPage = ({ title, description, imageUrl, backgroundColor }) => {
  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="introduction-page"
      style={{ backgroundColor: backgroundColor }} // Apply the background color
    >
      <div className="introduction-container">
        <div className="introduction-content">
          <div className="introduction-content-text">
            <h1 className="heading-main">{title}</h1>
            <h3 className="text-muted">{description}</h3>
          </div>
        </div>
        {imageUrl && (
          <div className="introduction-image-placeholder">
            <img src={imageUrl} alt={title} className="w-full h-auto" />
          </div>
        )}
      </div>

      <div className="introduction-carousel">
        <ul>
          <li onClick={() => handleScrollToSection('introduction')} className="active">Introduction</li>
          <li onClick={() => handleScrollToSection('user-story')}>User Story + Main Feature</li>
          <li onClick={() => handleScrollToSection('market-research')}>Market Research</li>
          <li onClick={() => handleScrollToSection('branding')}>Branding</li>
          <li onClick={() => handleScrollToSection('wireframe-uis')}>Wireframe + Sketch</li>
          <li onClick={() => handleScrollToSection('ui-guideline')}>UI Guideline</li>
          <li onClick={() => handleScrollToSection('tech')}>Tech</li>
          <li onClick={() => handleScrollToSection('user-testing')}>User Testing</li>
        </ul>
      </div>
    </div>
  );
};

export default IntroductionPage;
