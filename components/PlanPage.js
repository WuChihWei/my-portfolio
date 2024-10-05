import React from 'react';

const PlanPage = ({ imageUrl }) => {
  return (
    <div className="w-full py-8 md:py-16 mb-20 md:p-p-gap">
      <div className="w-full flex flex-col items-left">
        <div className="plan-content w-full mb-8 px-4 md:px-8">
          <h1 className="heading-sub1-custom mb-4 text-left">3 Weeks Scrum Plan</h1>
        </div>
        {imageUrl && (
          <div className="plan-image-placeholder w-full px-4 md:px-8">
            <div className="w-full h-[50vh] md:h-auto overflow-x-auto md:overflow-visible">
              <div className="h-full md:h-auto w-max md:w-full flex justify-start md:justify-center">
                <img 
                  src={imageUrl} 
                  alt="3 Weeks Scrum Plan" 
                  className="h-full w-auto md:w-full md:h-auto object-cover md:object-contain max-h-[100vh] rounded-lg"
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
    </div>
  );
};

export default PlanPage;