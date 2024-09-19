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
    <div className="branding-page min-h-screen w-full bg-gray-100 p-10">
      <div className="branding-container w-full h-screen">
        <div className="branding-content relative h-1/2 mb-8">
          {largeImageUrl && (
            <div className="absolute inset-0">
              <img src={largeImageUrl} alt="Large Visual" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
            </div>
          )}
          <div className="relative z-10 p-8">
            <h1 className="text-4xl font-bold mb-4 text-white">Branding</h1>
            <p className="text-xl max-w-2xl text-white">{description}</p>
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