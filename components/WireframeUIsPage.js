import React, { useState } from 'react';
import './projectTemplate.css';

const WireframeUIsPage = ({ title, cards }) => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = cards.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < cards.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="wireframe-uis-page">
      <div className="wireframe-header">
        <h1>{title}</h1>
      </div>
      <div className="wireframe-carousel">
        <button 
          className={`carousel-button left-button ${startIndex === 0 ? 'disabled' : ''}`} 
          onClick={handlePrev}
        >
          ←
        </button>
        <div className="carousel-cards">
          {visibleCards.map((card, index) => (
            <div key={index} className="carousel-card">
              <div className="card-image">
                {card.imageUrl && <img src={card.imageUrl} alt={card.heading} />}
              </div>
              <div className="card-content">
                <p className="card-date">{card.date}</p>
                <h2 className="card-heading">{card.heading}</h2>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button 
          className={`carousel-button right-button ${startIndex + 3 >= cards.length ? 'disabled' : ''}`} 
          onClick={handleNext}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default WireframeUIsPage;
