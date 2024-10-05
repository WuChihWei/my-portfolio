import React, { useState, useEffect } from 'react';
import './projectTemplate.css';

const WireframeUIsPage = ({ 
  title, 
  cards, 
  wideImageSrc, 
  narrowImageSrc 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      Math.min(prevIndex + 1, cards.length - cardsPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="wireframe-uis-page min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 py-20 mb-20">
      <div className="wireframe-container w-full max-w-[1440px] mx-auto px-4">
        <div className="wireframe-header mb-8">
          <h1 className="heading-sub1-custom text-gray-900">{title}</h1>
        </div>
        
        {/* Image section with responsive layout */}
        <div className="flex flex-col md:flex-row md:gap-10 mb-8 md:mb-20">
          <div className="w-full md:w-auto h-[300px] md:h-auto mb-4 md:mb-0">
            <img src={wideImageSrc} alt="Wide image" className="w-full h-full object-contain md:object-contain" />
          </div>
          <div className="w-full md:w-auto h-[300px] md:h-auto hidden md:block">
            <img src={narrowImageSrc} alt="Narrow image" className="w-full h-full object-contain md:object-contain" />
          </div>
        </div>

        <div className="wireframe-carousel h-auto relative mb-8 md:mb-0">
          <button 
            className={`carousel-button left-button absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <div className="carousel-cards w-full flex flex-row overflow-hidden">
            {cards.slice(currentIndex, currentIndex + cardsPerPage).map((card, index) => (
              <div key={index} className="carousel-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 flex flex-col p-3">
                <div className="card-image aspect-[4/3] overflow-hidden shadow-md rounded-xl">
                  {card.imageUrl && (
                    <img 
                      src={card.imageUrl} 
                      alt={card.heading} 
                      className="w-full h-full object-cover"
                      style={{ borderRadius:"1rem" }}
                    />
                  )}
                </div>
                <div className="card-content flex-grow flex flex-col justify-between">
                  <h4 className="card-heading  font-semibold my-3">{card.heading}</h4>
                  <p className="card-description text-s px-8">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button 
            className={`carousel-button right-button absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ${currentIndex + cardsPerPage >= cards.length ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={handleNext}
            disabled={currentIndex + cardsPerPage >= cards.length}
          >
            →
          </button>
        </div>

        {/* Narrow image for small screens, placed below the carousel */}
        <div className="w-full md:hidden h-[300px] mt-8">
          <img src={narrowImageSrc} alt="Narrow image" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default WireframeUIsPage;