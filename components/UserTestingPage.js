import React from 'react';
import './projectTemplate.css';

const UserTestingPage = ({ title, description, steps }) => {
  return (
    <div className="user-testing-page">
      <div className="user-testing-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="user-testing-steps">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="step-item">
              <div className="step-icon">
                <span>⭐</span> {/* You can replace this with a suitable icon */}
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="step-arrow">→</div> // Show arrow except after the last step
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default UserTestingPage;
