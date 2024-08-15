// components/MarketResearchPage.js
import React from 'react';
import './projectTemplate.css';

const MarketResearchPage = ({ title, description, imageUrl, statistics }) => {
  return (
    <div className="marketResearch-page">
      <div className="marketResearch-container">
        <div className="marketResearch-image">
          {imageUrl && (
            <img src={imageUrl} alt={title} className="marketResearch-image-frame" />
          )}
        </div>
        <div className="marketResearch-content">
          <h1 className="marketResearch-content-title">{title}</h1>
          <p className="marketResearch-content-description">{description}</p>
          <div className="marketResearch-content-stat">
            {statistics.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="stat-value text-3xl font-bold">{stat.value}</div>
                <div className="stat-label text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketResearchPage;
