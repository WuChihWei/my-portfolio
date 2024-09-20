import React from 'react';

const UserStoryFeaturePage = ({ title, description, imageUrl }) => {
  return (
    <div className="w-full h-full flex flex-col p-4 md:p-20">
      <div className="flex-shrink-0 flex items-center justify-center mb-8">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">User Story + Pain Points</h1>
          <p className="text-lg md:text-xl text-gray-700 mt-4">{description}</p>
        </div>
      </div>
      {imageUrl && (
        <div className="flex-grow overflow-hidden">
          <img 
            src={imageUrl} 
            alt="Browser Mockup" 
            className="w-full h-auto object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default UserStoryFeaturePage;