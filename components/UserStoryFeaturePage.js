import React from 'react';

const UserStoryFeaturePage = ({ title, description, imageUrl }) => {
  // 將 description 分割成數組，以 </br> 為分隔符
  const descriptionParts = description.split('</br>');

  return (
    <div className="w-full h-full flex flex-col my-16 md:my-40 p-4 md:p-p-gap">
      <div className="flex-shrink-0">
        <h1 className="heading-sub1-custom text-left md:text-center">
          User Story + Pain Points
        </h1>
      </div>
      {imageUrl && (
        <div className="flex-grow mt-4">
          <div className="text-gray-900 mb-4 text-left">
            {descriptionParts.map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < descriptionParts.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
          <div className="w-full h-[50vh] md:h-auto overflow-x-auto md:overflow-visible">
            <div className="h-full md:h-auto w-max md:w-full flex justify-start md:justify-center">
              <img 
                src={imageUrl} 
                alt="Browser Mockup" 
                className="h-full w-auto md:w-full md:h-auto object-cover md:object-contain max-h-[100vh]"
              />
            </div>
           
          </div>
          <div className="md:hidden flex justify-end mt-4 mr-4">
              <div className="bg-black rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default UserStoryFeaturePage;