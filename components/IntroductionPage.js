import React from 'react';

const IntroductionPage = ({ title, description, imageUrl, backgroundColor }) => {
  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="flex flex-col w-full mt-5 h-screen-navbar"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-full">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <h3 className="text-xl text-gray-600">{description}</h3>
          </div>
        </div>
        {imageUrl && (
          <div className="w-full md:w-1/2 h-full bg-coral">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover bg-slate-50" />
          </div>
        )}
      </div>

      {/* <div className="w-full overflow-x-auto">
        <ul className="flex items-center w-full gap-4 p-4">
          <li onClick={() => handleScrollToSection('introduction')} className="cursor-pointer text-blue-600">Introduction</li>
          <li onClick={() => handleScrollToSection('user-story')} className="cursor-pointer">User Story + Main Feature</li>
          <li onClick={() => handleScrollToSection('market-research')} className="cursor-pointer">Market Research</li>
          <li onClick={() => handleScrollToSection('branding')} className="cursor-pointer">Branding</li>
          <li onClick={() => handleScrollToSection('wireframe-uis')} className="cursor-pointer">Wireframe + Sketch</li>
          <li onClick={() => handleScrollToSection('ui-guideline')} className="cursor-pointer">UI Guideline</li>
          <li onClick={() => handleScrollToSection('tech')} className="cursor-pointer">Tech</li>
          <li onClick={() => handleScrollToSection('user-testing')} className="cursor-pointer">User Testing</li>
        </ul>
      </div> */}
    </div>
  );
}

export default IntroductionPage;