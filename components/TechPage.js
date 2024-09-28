// components/TechPage.js
import React, { useRef, useEffect, useState } from 'react';

const TechPage = ({ title, description, imageUrl, backgroundColor, keyFeatures, userFlow, apiAndData }) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // 初始檢查
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-start p-4 sm:p-6 md:p-10 ${backgroundColor}`}>
      <div className="w-full py-4 sm:py-6 md:py-8 lg:py-16">
        <div className="w-full flex flex-col lg:flex-row items-start">
          <div className="tech-content w-full lg:w-1/2 mb-6 lg:mb-0">
            <div className="w-full lg:w-4/5 xl:w-3/4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-left">{title}</h1>
              <h5 className="text-base sm:text-lg md:text-xl text-left">{description}</h5>
            </div>
          </div>
          {imageUrl && (
            <div className="tech-image-placeholder w-full lg:w-1/2 my-10 md:my-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Architecture</h2>
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full lg:w-full h-auto rounded-lg mx-auto" 
              />
            </div>
          )}
        </div>
      </div>
      <div className="w-full py-4 sm:py-6 md:py-8 bg-white">
        <div 
          ref={scrollRef}
          className="flex flex-row overflow-x-auto lg:overflow-x-visible scrollbar-none scroll-smooth mb-4"
          style={{
            msOverflowStyle: 'none',  /* IE and Edge */
            scrollbarWidth: 'none',  /* Firefox */
          }}
        >
          <div className="flex flex-row justify-between lg:w-full lg:gap-8">
            {[
              { title: "Key Features", items: keyFeatures },
              { title: "User Flow", items: userFlow },
              { title: "API & Data / System", items: apiAndData }
            ].map((section, index) => (
              <div key={index} className="w-80 lg:w-[calc((100%-20rem)/3)] flex-shrink-0">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{section.title}</h2>
                <ol className="list-decimal pl-5">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2 text-sm sm:text-base">{item}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 lg:hidden">
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')}
              className="text-3xl text-gray-500 mx-2 focus:outline-none"
            >
              &#8592;
            </button>
          )}
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')}
              className="text-3xl text-gray-500 mx-2 focus:outline-none"
            >
              &#8594;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechPage;