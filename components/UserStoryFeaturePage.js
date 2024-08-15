// components/UserStoryFeaturePage.js

import React from 'react';
import './projectTemplate.css';

const UserStoryFeaturePage = ({ title, description, features = [], imageUrl }) => {
  return (
    <div className="userstory-page">
      {/* <div className="-userstorycontainer"> */}
        <div className="userstory-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="userstory-flex">
          {features.length > 0 ? (
            features.map((feature, index) => (
              <div className="userstory-item" key={index}>
                <div className="userstory-icon">
                  <span>{feature.icon}</span> {/* Replace with the provided icon */}
                </div>
                <p>{feature.name}</p>
              </div>
            ))
          ) : (
            <p>No features available.</p> // Optional: handle the case where features are empty
          )}
        </div>
        </div>
        {imageUrl && (
          <div className="browser-mockup">
            <img src={imageUrl} alt="Browser Mockup" />
          </div>
        )}
      {/* </div> */}
    </div>
  );
};

export default UserStoryFeaturePage;
