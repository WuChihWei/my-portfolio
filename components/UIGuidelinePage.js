import React from 'react';
import './projectTemplate.css';

const UIGuidelinePage = ({ title, description, logoImage, images, backgroundColor  }) => {
  return (
    <div className="uiguideline-page w-full min-h-screen mb-20">
      <div className="uiguideline-container w-full">
        <div className="uiguideline-content h-[600px]  relative" style={{ backgroundColor: backgroundColor }}>
          <div className="absolute inset-0 flex flex-col justify-between p-p-gap">
            <div className="flex justify-between items-start mt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{title}</h1>
              <span className="text-white text-xl">Logo</span>
            </div>
            <div className="flex justify-center items-center my-4 overflow-hidden md:h-full">
              <img 
                src={logoImage} 
                alt="Logo" 
                className="max-w-none h-1/4 md:w-full md:h-auto object-contain mx-auto"
              />
            </div>
            <h4 className="text-lg text-white max-w-2xl mb-4">{description}</h4>
          </div>
        </div>
        <div className="uiguideline-images flex flex-col p-p-gap md:flex-row md:mb-0 w-full sm:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-8 lg:gap-12  md:p-8 lg:p-12">
          {images && images.map((imgSrc, index) => (
            <div key={index} className="uiguideline-image w-full">
              <img 
                src={imgSrc} 
                alt={`UI Guideline Visual ${index + 1}`} 
                className="w-full h-auto object-cover rounded-lg my-2 md:my-8 lg:my-12"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIGuidelinePage;