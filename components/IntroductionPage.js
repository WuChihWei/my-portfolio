import React from 'react';

const IntroductionPage = ({ title, description, backgroundImageUrl, contentImageUrl, websiteLink }) => {
  return (
    <div className="relative pt-20 z-10 flex flex-col w-full md:h-screen">
      
      <div className="flex flex-col lg:flex-row items-center w-full h-full">
        <div className="flex flex-col justify-between md:justify-around w-full p-p-gap py-14 pr-10 md:pr-10 h-full lg:w-1/2 text-black">
          <div className='top-title'>
            <h1 className="heading-sub1-custom">  
              {title}
            </h1>
            <div className='flex items-center gap-4'>
            {websiteLink && (
              <a
                href={websiteLink}
                className="inline-flex items-center justify-center px-4 h-10 bg-white text-black border border-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit The Website
              </a>
            )}

            <a href="https://github.com/WuChihWei" 
               className="inline-flex items-center justify-center px-4 h-10 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-300"
               target="_blank" 
               rel="noopener noreferrer">
              <svg className="w-4 h-4 mr-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

          <div className='middle-description'>
            <h4 className="heading-4-custom mt-4 mb-14 md:mr-20 md:font-semibold md:mb-4 md:mt-10">
              {description}
            </h4>
          </div>

          </div>

         
          <div className='list-description'>
            <ul className="list-disc sm:text-sm md:text-base">
              <p className='pb-2 font-semibold text-stone-400'>Jordan's' 3-weeks, Project Response for</p>
              <p>- Market Research</p>
              <p>- User Study</p>
              <p>- UI/UX Design</p>
              <p>- Branding</p>
              <p>- Front-end, back-end, API integration, AI development</p>
            </ul>
          </div>

        </div>

        <div className="w-full p-4 lg:w-3/5 h-1/2 md:h-full md:w-full relative md:p-20">
          {contentImageUrl && (
            <div className="flex  lg:justify-end h-full ">
              <img 
                src={contentImageUrl} 
                alt={`${title} screenshot`} 
                className="w-full h-full  md:object-cover rounded-3xl" 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default IntroductionPage;