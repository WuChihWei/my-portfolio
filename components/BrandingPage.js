import React, { useState } from 'react';
import './projectTemplate.css';

const BrandingPage = ({ title, description, iconUrl, largeImageUrl, smallImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allImages = [largeImageUrl, ...smallImages];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="branding-page min-h-screen w-full bg-gray-100 p-4">
      <div className="branding-container w-full h-screen ">
        <div className="branding-content flex flex-col h-1/2 md:flex-row md:space-x-8 mb-8">
          <div className="branding-content-info flex flex-col justify-center items-left h-full md:w-1/2 mb-8 md:mb-0">
            {iconUrl && <img src={iconUrl} alt="Brand Icon" className="icon w-16 h-16 mb-4" />}
            <div className="branding-text">
              <h1 className="text-3xl font-bold mb-4">{title}</h1>
              <p className="text-lg text-gray-700">{description}</p>
            </div>
          </div>
          <div className="branding-top-image h-full md:w-1/2 hidden md:block">
            {largeImageUrl && <img src={largeImageUrl} alt="Large Visual" className="w-full h-full rounded-lg shadow-lg" />}
          </div>
        </div>
        <div className="branding-images mt-4 h-1/2 w-full pb-8">
          <div className="hidden h-full lg:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {smallImages && smallImages.map((imgSrc, index) => (
              <div key={index} className="small-image">
                <img src={imgSrc} alt={`Small Visual ${index + 1}`} className="w-full h-full rounded-lg shadow-md" />
              </div>
            ))}
          </div>
          <div className="lg:hidden h-full">
            <div className="carousel relative h-full">
              <img src={allImages[currentImageIndex]} alt={`Visual ${currentImageIndex + 1}`} className="w-auto h-full shadow-md" />
              <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
                &lt;
              </button>
              <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingPage;