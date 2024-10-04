// components/MarketResearchPage.js
import React from 'react';
import './projectTemplate.css';

const MarketResearchPage = ({ title, description, imageUrl, statistics }) => {
  return ( 
    <div className="w-full h-auto mb-20 md:mb-40 md:flex-row md:p-p-gap">
      <div className="flex flex-col h-full w-full lg:flex-row ">
        <div className="w-full h-full p-p-gap md:p-0 mt-0 lg:w-1/2 order-2 lg:order-1 flex items-center justify-center">
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={title} 
              className="max-w-full max-h-full object-contain shadow-lgrounded-3xl"
            />
          )}
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center text-left order-1 lg:order-2 p-4 md:p-8 lg:p-12">
         <div>
          <h1 className="text-3xl text-left md:text-4xl lg:text-5xl font-bold mb-4"> Prioritization<br />
          + Market Size</h1>
          <p className="text-lg text-left md:text-xl text-gray-700">{description}</p>
          </div>
          <div >
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white pt-10">
              <div className="flex items-baseline">
                <h2 className="text-2xl font-bold mr-2">{stat.value} $</h2>
                <h4 >{stat.label}</h4>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default MarketResearchPage;