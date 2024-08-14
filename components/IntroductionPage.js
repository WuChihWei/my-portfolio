// components/PageTemplate.js
import React from 'react';
import './IntroductionPage.css';

const IntroductionPage = ({ title, description, imageUrl }) => {
  return (
    <div className="introduction-page">
      <div className="introduction-content">
        <div className="introduction-content-text">
          <h1 className="heading-main">{title}</h1>
          <h3 className="text-muted">{description}</h3>
        </div>
        {imageUrl && (
          <div className="introduction-image-placeholder">
            <img src={imageUrl} alt={title} className="w-full h-auto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroductionPage;
