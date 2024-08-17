import React, { useState, useEffect } from 'react';
import './projectTemplate.css';

const WireframeUIsPage = ({ title, cards }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMdOrLarger, setIsMdOrLarger] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMdOrLarger(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCards = isMdOrLarger ? cards.slice(startIndex, startIndex + 3) : [cards[startIndex]];

  const handleNext = () => {
    if (startIndex + (isMdOrLarger ? 3 : 1) < cards.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="wireframe-uis-page min-h-screen flex justify-center items-center text-center bg-gray-100 p-4">
      <div className="wireframe-container h-full mx-auto">
        <div className="wireframe-header mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">{title}</h1>
        </div>
        <div className="wireframe-carousel h-auto relative mx-4">
          <button 
            className={`carousel-button left-button absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            ←
          </button>
          <div className="carousel-cards flex flex-col md:flex-row md:space-x-6 md:overflow-x-auto md:scroll-snap-type-x md:scrollbar-hide">
            {visibleCards.map((card, index) => (
              <div key={index} className="carousel-card bg-white rounded-lg shadow-md mb-6 md:mb-0 md:w-96 lg:w-[30rem] flex-shrink-0 md:scroll-snap-align-start">
                <div className="card-image aspect-[16/9] overflow-hidden">
                  {card.imageUrl && (
                    <img 
                      src={card.imageUrl} 
                      alt={card.heading} 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="card-content p-6">
                  <p className="card-date text-sm text-gray-500 mb-2">{card.date}</p>
                  <h2 className="card-heading text-2xl font-semibold mb-3">{card.heading}</h2>
                  <p className="card-description text-lg text-gray-700">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button 
            className={`carousel-button right-button absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ${startIndex + (isMdOrLarger ? 3 : 1) >= cards.length ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={handleNext}
            disabled={startIndex + (isMdOrLarger ? 3 : 1) >= cards.length}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WireframeUIsPage;