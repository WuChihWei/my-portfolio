import React from 'react';

const IntroductionPage = ({ title, description, backgroundImageUrl, contentImageUrl, websiteLink }) => {
  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="relative z-10 flex flex-col w-full h-full">
        <div className="flex flex-col justify-center w-1/2 h-full p-8 text-white">
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
              Real Website Link: <a href={websiteLink} className="text-blue-300 underline" target="_blank" rel="noopener noreferrer">{websiteLink}</a>
            </p>
          )}
          <h4 className="text-xl mb-4">{description}</h4>
          <ul className="list-disc pl-5 mb-4">
            <li>Market Research</li>
            <li>User Study</li>
            <li>UI/UX Design</li>
            <li>Branding</li>
            <li>Front-end, back-end, API integration, AI development</li>
          </ul>
          <p>Made by Jordan Wu</p>
          <p>GitHub: <a href="https://github.com/WuChihWei" className="text-blue-300 underline">https://github.com/WuChihWei</a></p>
        </div>
        
        {contentImageUrl && (
          <div className="flex lg:hidden w-full h-1/2 items-end justify-center">
            <img 
              src={contentImageUrl} 
              alt={`${title} screenshot`} 
              className="max-w-full h-full object-contain" 
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default IntroductionPage;