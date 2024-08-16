import React from 'react';

const UserStoryFeaturePage = ({ title, description, features = [], imageUrl }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="h-1/2 flex items-center justify-center md:p-8 lg: overflow-y-auto bg-slate-300">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">{description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {features.length > 0 ? (
              features.map((feature, index) => (
                <div key={index} className="p-4 rounded-lg w-full">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white text-2xl">{feature.icon}</span>
                  </div>
                  <p className="text-lg font-semibold text-center">{feature.name}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No features available.</p>
            )}
          </div>
        </div>
      </div>
      {imageUrl && (
        <div className="h-1/2 px-4 md:px-8 lg:px-12 overflow-hidden">
          <div className="h-full overflow-hidden shadow-lg">
            <img src={imageUrl} alt="Browser Mockup" className="w-full h-full object-cover bg-slate-400" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserStoryFeaturePage;