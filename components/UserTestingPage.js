import React from 'react';

const UserTestingPage = ({ title, description, steps }) => {
  return (
    <div className="min-h-fit flex items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="h-full max-w-7xl mx-auto  ">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h1>
          <p className="mt-4 text-xl text-gray-600">{description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="p-6 text-center">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-ceter text-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center ">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div className="w-full">
                    <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-1 text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center sm:hidden">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTestingPage;