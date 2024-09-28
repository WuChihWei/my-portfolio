import React from 'react';

const UserTestingPage = ({ title, description, steps }) => {
  return (
    <div className="min-h-fit flex items-center p-p-gap mb-20 sm:px-6 lg:px-8">
      <div className="h-full max-w-7xl mx-auto w-full">
        <div className="text-left sm:text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h1>
          <h4 className="mt-4 text-xl text-gray-600">{description}</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-4 md:gap-20 md:p-10 ">
          {steps.map((step, index) => (
            <div key={index} className=" text-left sm:text-center">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center sm:justify-center">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                  <p className="mt-1 text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTestingPage;