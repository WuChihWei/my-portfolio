// app/projects/[slug]/page.js

"use client"; // This makes the file a client component

import IntroductionPage from '../../../components/IntroductionPage';
import UserStoryFeaturePage from '../../../components/UserStoryFeaturePage';
import MarketResearchPage from '../../../components/MarketResearchPage';
import BrandingPage from '../../../components/BrandingPage';
import UIGuidelinePage from '../../../components/UIGuidelinePage';
import WireframeUIsPage from '../../../components/WireframeUIsPage';
import TechPage from '../../../components/TechPage';
import UserTestingPage from '../../../components/UserTestingPage';
import SolutionPage from '../../../components/SolutionPage';
// Import project data
import { hommapData } from '../hommap';
import { davincinData } from '../davincin';
import { superfakeData } from '../superfake';

const projectData = {
  hommap: hommapData,
  davincin: davincinData,
  superfake: superfakeData,
};

export default function ProjectPage({ params }) {
  const { slug } = params;

  const data = projectData[slug];

  if (!data) {
    return <p>Project not found</p>; // Handle missing data case
  }

  return (
    <div className="project-page">
      <section id="introduction">
        <IntroductionPage 
          title={data.introduction.title} 
          description={data.introduction.description} 
          imageUrl={data.introduction.imageUrl} 
          backgroundColor={data.introduction.backgroundColor} 
          websiteLink={data.introduction.websiteLink}
          contentImageUrl={data.introduction.contentImageUrl}
          backgroundImageUrl={data.introduction.backgroundImageUrl}
        />
      </section>

      <section id="user-story">
        <UserStoryFeaturePage 
          title={data.userStoryFeature.title}
          description={data.userStoryFeature.description}
          features={data.userStoryFeature.features}
          imageUrl={data.userStoryFeature.imageUrl}
        />
      </section>

      <section id="market-research">
        <MarketResearchPage 
          title={data.marketResearch.title}
          description={data.marketResearch.description}
          imageUrl={data.marketResearch.imageUrl}
          statistics={data.marketResearch.statistics}
        />
      </section>

      <section id="solution">
        <SolutionPage
          title={data.solution.title}
          description={data.solution.description}
          features={data.solution.features}
          imageUrl={data.solution.imageUrl}
        />
      </section>

      <section id="branding">
        <BrandingPage 
          title={data.branding.title}
          description={data.branding.description}
          iconUrl={data.branding.iconUrl}
          largeImageUrl={data.branding.largeImageUrl}
          smallImages={data.branding.smallImages}
        />
      </section>

      <section id="ui-guideline">
        <UIGuidelinePage 
          title={data.uiGuideline.title}
          description={data.uiGuideline.description}
          images={data.uiGuideline.images}
          backgroundColor={data.uiGuideline.backgroundColor}
          logoImage={data.uiGuideline.logoImage}
        />
      </section>

      <section id="wireframe-uis">
        <WireframeUIsPage 
          title={data.wireframeUIs.title}
          cards={data.wireframeUIs.cards}
        />
      </section>

      <section id="tech">
        <TechPage  
          title={data.tech.title} 
          description={data.tech.description} 
          imageUrl={data.tech.imageUrl} 
          backgroundColor={data.tech.backgroundColor} 
        />
      </section>

      <section id="user-testing">
        <UserTestingPage 
          title={data.userTesting.title}
          description={data.userTesting.description}
          steps={data.userTesting.steps}
        />
      </section>
    </div>
  );
}
