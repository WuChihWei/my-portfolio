// components/TechPage.js
import React from 'react';
import './projectTemplate.css';

const TechPage = ({ title, description, imageUrl, backgroundColor }) => {
  return (
    <div
      className="tech-page"
      style={{ backgroundColor: backgroundColor }} // Apply the background color
    >
    <div className="tech-container">

      <div className="tech-content">
        <div className="tech-content-text">
          <h1 className="heading-main">{title}</h1>
          <h3 className="text-muted">{description}</h3>
        </div>
        </div>
        {imageUrl && (
          <div className="tech-image-placeholder">
            <img src={imageUrl} alt={title} className="w-full h-auto" />
          </div>
        )}
    </div>
    </div>  
  );
};

export default TechPage;
