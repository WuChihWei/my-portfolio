import React from 'react';
import './projectTemplate.css';

const UIGuidelinePage = ({ title, description, logoImage, images, backgroundColor  }) => {
  return (
    <div className="uiguideline-page w-full min-h-full">
      <div className="uiguideline-container w-full">
        <div className="uiguideline-content h-[600px] relative" style={{ backgroundColor: backgroundColor }}>
          <div className="absolute inset-0 flex flex-col justify-between p-12">
            <div className="flex justify-between items-start mt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{title}</h1>
              <span className="text-white text-xl">Logo</span>
            </div>
            <div className="flex justify-center items-center my-8 overflow-hidden">
              <img 
                src={logoImage} 
                alt="Logo" 
                className="max-w-none h-auto object-contain"
                style={{ width: '100%', maxWidth: '100vw' }}
              />
            </div>
            <p className="text-lg text-white max-w-2xl mb-4">{description}</p>
          </div>
        </div>
        <div className="uiguideline-images flex flex-col md:flex-row md:mb-0 w-full sm:grid-cols-2 lg:grid-cols-3 gap-12 px-12 md:px-12">
          {images && images.map((imgSrc, index) => (
            <div key={index} className="uiguideline-image w-full">
              <img 
                src={imgSrc} 
                alt={`UI Guideline Visual ${index + 1}`} 
                className="w-full h-auto object-cover rounded-lg my-12"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIGuidelinePage;