// app/projects/[slug]/page.js

"use client"; // This makes the file a client component

import IntroductionPage from '../../../components/IntroductionPage';

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
    return <p>Project not found</p>; // Or handle this more gracefully
  }

  return (
    <div className='project-page'>
      <IntroductionPage 
        title={data.introduction.title} 
        description={data.introduction.description} 
        imageUrl={data.introduction.imageUrl} 
      />
    </div>
  );
}
