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
    <div className="branding-page w-full p-20 h-full flex flex-col">
      <div className="branding-content relative mb-8">
        {largeImageUrl && (
          <img src={largeImageUrl} alt="Large Visual" className="w-full max-h-[500px] object-cover rounded-3xl" />
        )}
        {/* <div className="absolute inset-0 bg-black opacity-20 rounded-3xl"></div> */}
        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Branding</h1>
          <p className="text-xl max-w-2xl text-white">{description}</p>
        </div>
      </div>
      <div className="branding-images h-1/2">
        <div className="h-full grid grid-cols-3 gap-8">
          {smallImages && smallImages.slice(0, 3).map((imgSrc, index) => (
            <div key={index} className="small-image h-full">
              <img src={imgSrc} alt={`Small Visual ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandingPage;