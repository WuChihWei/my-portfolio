import React from 'react';

const SolutionPage = ({ title, features }) => {
  return (
    <div className="flex items-center justify-center md:p-8 lg:overflow-y-auto">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        <div className="flex justify-center gap-4 mb-4 text-gray-600">
          <span>🌍 Impact (1-5)</span>
          <span>🚨 Urgency (1-5)</span>
          <span>📊 Market Size (1-5)</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-sm text-gray-500 mb-2">Feature {index + 1}</p>
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <p className="text-lg font-semibold mb-4">{feature.name}</p>
              <div className="flex flex-col items-start gap-2 text-gray-600">
                <span>🌍 {feature.impact}</span>
                <span>🚨 {feature.urgency}</span>
                <span>📊 {feature.marketSize}</span>
              </div>
              <p className="mt-4 font-semibold">Overall {feature.overall}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionPage;