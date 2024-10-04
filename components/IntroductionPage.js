import React from 'react';

const IntroductionPage = ({ title, description, backgroundImageUrl, contentImageUrl, websiteLink }) => {
  return (
    <div className="relative z-10 mt-4 md:mt-0 flex flex-col w-full h-full">
      
      <div className="flex flex-col lg:flex-row items-center w-full h-full">
        <div className="flex flex-col justify-between w-full  p-p-gap pt-14 lg:w-2/5 h-1/2 lg:h-full py-6 lg:py-10 text-black">
          <div className='top-title'>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">  
              {title}
            </h1>
            {websiteLink && (
              <ul className="mb-4">
                <li>Real Website Link: <a href={websiteLink} className="text-white-300 underline" target="_blank" rel="noopener noreferrer">{websiteLink}</a></li>
              </ul>
            )}
          </div>

          <div className='middle-description'>
            <h4 className="text-lg lg:text-xl mb-4">
              {description}
            </h4>
          </div>

          <div className='list-description'>
            <ul className="list-disc text-xs pl-5 mb-4">
              <li>Market Research</li>
              <li>User Study</li>
              <li>UI/UX Design</li>
              <li>Branding</li>
              <li>Front-end, back-end, API integration, AI development</li>
            </ul>
          </div>

          <div className='name-description flex items-center'>
            <h5 className="mr-4 text-xs">Created by Jordan Wu with AI assistance in 3 weeks.</h5>
            <a href="https://github.com/WuChihWei" 
               className="inline-flex items-center px-3 py-1 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-700 transition-colors duration-300"
               target="_blank" 
               rel="noopener noreferrer">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="w-full lg:w-3/5 h-1/2 lg:h-1/2">
          {contentImageUrl && (
            <div className="flex items-center justify-center lg:justify-end h-full">
              <img 
                src={contentImageUrl} 
                alt={`${title} screenshot`} 
                className="w-full h-full object-cover" 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default IntroductionPage;