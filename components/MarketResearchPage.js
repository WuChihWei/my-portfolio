// components/MarketResearchPage.js
import React from 'react';
import './projectTemplate.css';

const MarketResearchPage = ({ title, description, imageUrl, statistics }) => {
  return (
    <div className="w-full h-screen md:flex-row">
      <div className="flex flex-col h-full w-full lg:flex-row">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center text-left">
          <h1 className="text-3xl text-left md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-left md:text-xl mb-8 text-gray-700">{description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full lg:w-1/2 order-1 lg:order-2">
          {imageUrl && (
            <img src={imageUrl} alt={title} className="w-full h-full rounded-lg shadow-lg bg-slate-300" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketResearchPage;