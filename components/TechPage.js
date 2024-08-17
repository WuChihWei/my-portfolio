// components/TechPage.js
import React from 'react';

const TechPage = ({ title, description, imageUrl, backgroundColor }) => {
  return (
    <div className={`h-screen w-full flex items-center justify-center ${backgroundColor}`}>
      <div className=" h-full w-full py-8 md:py-16">
        <div className="h-full w-full flex flex-col md:flex-row items-center bg-gray-300">
          <div className="tech-content w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
            <h3 className="text-lg md:text-xl text-gray-600">{description}</h3>
          </div>
          {imageUrl && (
            <div className="tech-image-placeholder w-full h-full md:w-1/2">
              <img src={imageUrl} alt={title} className="w-full h-full rounded-lg shadow-lg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechPage;