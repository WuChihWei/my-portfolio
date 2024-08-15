import React from 'react';
import './projectTemplate.css';

const BrandingPage = ({ title, description, iconUrl, largeImageUrl, smallImages }) => {
  return (
    <div className="branding-page">
      <div className="branding-container">
        <div className="branding-content">
            <div className="branding-content-info">
            {iconUrl && <img src={iconUrl} alt="Brand Icon" className="icon" />}
                <div className="branding-text">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
          </div>
          <div className="branding-top-image">
            {largeImageUrl && <img src={largeImageUrl} alt="Large Visual" />}
          </div>
        </div>
        <div className="branding-images">
          <div className="branding-small-images">
            {smallImages && smallImages.map((imgSrc, index) => (
              <div key={index} className="small-image">
                <img src={imgSrc} alt={`Small Visual ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingPage;
