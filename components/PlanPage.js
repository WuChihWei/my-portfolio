import React from 'react';

const PlanPage = ({imageUrl }) => {
  return (
    <div className="w-full py-8 md:py-16">
      <div className="w-full flex flex-col items-left">
        <div className="plan-content w-full mb-8 px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-left">3 Weeks Scrum  Plan</h1>
        </div>
        {imageUrl && (
          <div className="plan-image-placeholder w-full px-4 md:px-8">
            <img src={imageUrl} alt={"3 Weeks Scrum  Plan"} className="w-full h-auto rounded-lg " />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanPage;