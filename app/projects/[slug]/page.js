"use client";

import { useState, useEffect } from 'react';
import { useProjectsData } from '../../../hooks/UseProjectsData';
import IntroductionPage from '../../../components/IntroductionPage';
import UserStoryFeaturePage from '../../../components/UserStoryFeaturePage';
import MarketResearchPage from '../../../components/MarketResearchPage';
import BrandingPage from '../../../components/BrandingPage';
import UIGuidelinePage from '../../../components/UIGuidelinePage';
import WireframeUIsPage from '../../../components/WireframeUIsPage';
import TechPage from '../../../components/TechPage';
import UserTestingPage from '../../../components/UserTestingPage';
import SolutionPage from '../../../components/SolutionPage';
import PlanPage from '../../../components/PlanPage';

export default function ProjectPage({ params }) {
  const { slug } = params;
  const allProjects = useProjectsData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (allProjects) {
      setLoading(false);
    }
  }, [allProjects]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!allProjects || !allProjects[slug]) {
    return <p>Project not found</p>;
  }

  const data = allProjects[slug];

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

      <section id="plan">
        <PlanPage 
          imageUrl={data.planPage.imageUrl}
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
          wideImageSrc={data.wireframeUIs.wideImageSrc}
          narrowImageSrc={data.wireframeUIs.narrowImageSrc}
        />
      </section>

      <section id="tech">
        <TechPage  
          title={data.tech.title} 
          description={data.tech.description} 
          imageUrl={data.tech.imageUrl} 
          backgroundColor={data.tech.backgroundColor} 
          keyFeatures={data.tech.keyFeatures}
          userFlow={data.tech.userFlow}
          apiAndData={data.tech.apiAndData}
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
