import React from 'react';

const IntroductionPage = ({ title, description, backgroundImageUrl, contentImageUrl, websiteLink }) => {
  return (
    
      <div className="relative z-10 flex flex-row-reverse w-full h-screen-20 pt-10 mb">
        {contentImageUrl && (
          <div className="flex w-3/5 h-full items-center justify-end">
            <img 
              src={contentImageUrl} 
              alt={`${title} screenshot`} 
              className="w-full h-full object-cover" 
            />
          </div>
        )}
        
        <div className="flex flex-col justify-between w-2/5 h-full pl-12 pr-20 py-10 text-black0">
            <div className='top-title'>
              <h1 className="text-5xl font-bold mb-4">
                {title.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
              {websiteLink && (
                <p className="mb-4">
                  Real Website Link: <a href={websiteLink} className="text-white-300 underline" target="_blank" rel="noopener noreferrer">{websiteLink}</a>
                </p>
              )}
              </div>


              <div className='middle-description'>
                <h4 className="text-xl mb-4">{description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < description.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}</h4>
              </div>

          <div className='list-description'>
          <ul className="list-disc pl-5 mb-4">
            <li>Market Research</li>
            <li>User Study</li>
            <li>UI/UX Design</li>
            <li>Branding</li>
            <li>Front-end, back-end, API integration, AI development</li>
          </ul>
          </div>
          <div className='name-description'>
           <p>Made by Jordan Wu</p>
            <p>GitHub: <a href="https://github.com/WuChihWei" className="text-white-300 underline">https://github.com/WuChihWei</a></p>
          </div>
        </div>
      </div>
  );
}

export default IntroductionPage;