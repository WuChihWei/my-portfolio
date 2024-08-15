import React from 'react';
import './projectTemplate.css';

const UIGuidelinePage = ({ title, description, images }) => {
  return (
    <div className="uiguideline-page">
      <div className="uiguideline-container">
        <div className="uiguideline-content">
            <div className="uiguideline-content-title">
                <h1>{title}</h1>
            </div>
            <div className="uiguideline-content-description">
                <p>{description}</p>
            </div>
        </div>
        <div className="uiguideline-images">
          {images && images.map((imgSrc, index) => (
            <div key={index} className="uiguideline-image">
              <img src={imgSrc} alt={`UI Guideline Visual ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIGuidelinePage;
