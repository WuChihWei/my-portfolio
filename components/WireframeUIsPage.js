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
    <div className="wireframe-uis-page min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 py-20">
      <div className="wireframe-container w-full max-w-[1440px] mx-auto px-4">
        <div className="wireframe-header mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">{title}</h1>
        </div>
        
        {/* Image section with props */}
        <div className="flex mb-8">
          <div className="w-auto h-full">
            <img src={wideImageSrc} alt="Wide image" className="w-full h-full object-contain" />
          </div>
          <div className="w-auto h-full">
            <img src={narrowImageSrc} alt="Narrow image" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="wireframe-carousel h-auto relative">
          <button 
            className={`carousel-button left-button absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <div className="carousel-cards w-full flex flex-row overflow-hidden ">
            {cards.slice(currentIndex, currentIndex + cardsPerPage).map((card, index) => (
              <div key={index} className="carousel-card rounded-3xl  md:w-1/2 lg:w-1/3 flex-shrink-0 flex flex-col p-10">
                <div className="card-image aspect-[4/3] overflow-hidden  rounded-t-lg">
                  {card.imageUrl && (
                    <img 
                      src={card.imageUrl} 
                      alt={card.heading} 
                      className="w-full h-full object-cover  "
                      style={{ backgroundColor:"black", borderRadius:"2rem" }}
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
      </div>
    </div>
  );
};

export default WireframeUIsPage;