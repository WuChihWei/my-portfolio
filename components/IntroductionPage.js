// components/IntroductionPage.js
import React from 'react';
import './projectTemplate.css';

const IntroductionPage = ({ title, description, imageUrl, backgroundColor }) => {
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
          <li className="active">Introduction</li>
          <li>User Story + Main Feature</li>
          <li>Market Research</li>
          <li>Branding</li>
          <li>Wireframe + Sketch</li>
          <li>UI Guideline</li>
          <li>Tech</li>
          <li>User Testing</li>
        </ul>
    </div>

    </div>
    
      
  );
};

export default IntroductionPage;
