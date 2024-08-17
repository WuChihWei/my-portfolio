import React from 'react';
import './projectTemplate.css';

const UIGuidelinePage = ({ title, description, images }) => {
  return (
    <div className="uiguideline-page w-full bg-gray-100 p-4">
      <div className="uiguideline-container w-full h-screen  bg-gray-200">
      <div className="uiguideline-content h-1/3 md:flex md:flex-row md:items-start md:space-x-8">
          <div className="uiguideline-content-title mb-4 md:mb-0 md:w-1/2 bg-gray-300">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">{title}</h1>
          </div>
          <div className="uiguideline-content-description md:mb-0 md:w-1/2">
            <p className="text-lg text-gray-600">{description}</p>
          </div>
        </div>
        <div className="uiguideline-images h-full flex flex-col md:flex-row md:mb-0 w-full sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images && images.map((imgSrc, index) => (
            <div key={index} className="uiguideline-image w-full">
              <img 
                src={imgSrc} 
                alt={`UI Guideline Visual ${index + 1}`} 
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIGuidelinePage;