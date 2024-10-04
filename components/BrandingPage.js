import React from 'react';

const BrandingPage = ({ title, description, iconUrl, largeImageUrl, smallImages }) => {
  const allImages = [largeImageUrl, ...smallImages];

  return (
    <div className="branding-page p-p-gap mb-20 w-full h-full flex flex-col">
      {/* 大螢幕顯示 */}
      <div className="hidden sm:block">
        <div className="branding-content relative mb-8">
          {largeImageUrl && (
            <img 
              src={largeImageUrl} 
              alt="Large Visual" 
              className="w-full h-[40vh] md:h-[45vh] lg:h-[50vh] object-cover rounded-3xl large-image" 
            />
          )}
          <div className="absolute inset-0 z-10 p-8 flex flex-col justify-center branding-overlay">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">Branding</h1>
            <h4 className="text-lg text-white max-w-2xl mb-4">{description}</h4>
            </div>
        </div>
        <div className="branding-images mt-8">
          <div className="grid grid-cols-3 gap-8">
            {smallImages && smallImages.slice(0, 3).map((imgSrc, index) => (
              <div key={index} className="small-image w-full h-full">
                <img src={imgSrc} alt={`Small Visual ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 小螢幕顯示 */}
      <div className="sm:hidden">
        <h1 className="text-4xl font-bold mb-2 text-left">Branding</h1>
        <h4 className="text-lg mb-4 text-left">{description}</h4>

        <div className="grid grid-cols-2 gap-4">
          {allImages.slice(0, 4).map((imgSrc, index) => (
            <div key={index} className="w-full aspect-square">
              <img src={imgSrc} alt={`Visual ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandingPage;