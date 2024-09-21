import React from 'react';
import Image from 'next/image';

const SolutionPage = ({ title, features }) => {
  return (
    <div className="flex items-center justify-center md:px-20 lg:overflow-y-auto">
      <div className="w-full text-center ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"> Pain Points ⭢ Solutions </h1>
        <div className="grid grid-cols-1 pt-10 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-cols-fr">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl space-y-6 border-gray-200 border-2">
              <p className="text-sm text-gray-500 mb-2">
                {index < 4 ? `${['First', 'Second', 'Third', 'Fourth'][index]} Priority` : `Feature ${index + 1}`}
              </p>
              <div className="w-10 h-10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-4xl">{feature.icon}</span>
              </div>
              <h4 className="text-lg font-bold mb-4">{feature.name}</h4>
              <div className="flex flex-col items-center gap-6 text-gray-600 w-full">
                <span className="flex items-center justify-center w-full">
                  <img src="/impact-icon.svg" alt="Impact" className="w-5 h-5 mr-2" />
                  {feature.impact}
                </span>
                <span className="flex items-center justify-center w-full">
                  <img src="/ergency-icon.svg" alt="Urgency" className="w-5 h-5 mr-2" />
                  {feature.urgency}
                </span>
                <span className="flex items-center justify-center w-full">
                  <img src="/market-icon.svg" alt="Market Size" className="w-5 h-5 mr-2" />
                  {feature.marketSize}
                </span>
              </div>
              <h5 className="mt-4 font-semibold">Overall {feature.overall}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionPage;