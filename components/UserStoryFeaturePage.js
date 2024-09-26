import React from 'react';

const UserStoryFeaturePage = ({ title, description, imageUrl }) => {
  // 將 description 分割成數組，以 </br> 為分隔符
  const descriptionParts = description.split('</br>');

  return (
    <div className="w-full h-full flex flex-col p-4 md:p-20">
      <div className="flex-shrink-0 flex items-left justify-left mb-8">
        <div className="max-w-2xl w-full text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">User Story + Pain Points</h1>
          <div className="text-lg md:text-xl text-gray-700 mt-4">
            {descriptionParts.map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < descriptionParts.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
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