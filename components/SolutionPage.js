import React, { useState } from 'react';
import Image from 'next/image';

const SolutionPage = ({ title, features }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center mb-40 md:px-20 lg:overflow-y-auto">
      <div className="w-full text-center">
        <h1 className="heading-sub1-custom mb-4"> Pain Points ⭢ Solutions </h1>
        <div className="grid grid-cols-1 pt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 auto-cols-fr">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start sm:items-center p-4 sm:p-6 md:p-8 sm:rounded-3xl space-y-4 sm:space-y-6 border-b-2 sm:border-2 border-gray-200 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex flex-row sm:flex-col items-center sm:items-center w-full">
                <p className="text-sm text-gray-500 mr-2 sm:mr-0 sm:mb-2 text-center">
                  <span className="md:hidden">
                    {index + 1}
                  </span>
                  <span className="hidden sm:inline">
                    {index < 4 ? ` Priority ${['1', '2', '3', '4'][index]} ` : ` Feature ${index + 1}`}
                  </span>
                </p>
                <div className="w-10 h-10 flex items-center justify-center sm:mb-4">
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                <h4 className="text-lg font-bold ml-2 sm:ml-0 sm:mb-4 text-center">{feature.name}</h4>
              </div>
              <div className={`flex flex-row sm:flex-col items-center sm:items-center justify-between w-full gap-2 sm:gap-6 ${expandedIndex === index ? 'flex' : 'hidden'} sm:flex`}>
                <span className="flex pl-20 items-center justify-center sm:pl-0">
                  <img src="/impact-icon.svg" alt="Impact" className="w-5 h-5 mr-2" />
                  {feature.impact}
                </span>
                <span className="flex items-center justify-center">
                  <img src="/ergency-icon.svg" alt="Urgency" className="w-5 h-5 mr-2" />
                  {feature.urgency}
                </span>
                <span className="flex items-center justify-center">
                  <img src="/market-icon.svg" alt="Market Size" className="w-5 h-5 mr-2" />
                  {feature.marketSize}
                </span>
                <h5 className="font-semibold">Overall {feature.overall}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionPage;