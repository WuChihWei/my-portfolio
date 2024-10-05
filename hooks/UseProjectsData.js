'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

// Import fallback data
import { hommapData } from '../app/projects/hommap';
import { davincinData } from '../app/projects/davincin';
import { superfakeData } from '../app/projects/superfake';

const fallbackProjectData = {
  hommap: hommapData,
  davincin: davincinData,
  superfake: superfakeData,
};

export function useProjectsData() {
  const [projectsData, setProjectsData] = useState(null);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const projectsCollection = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCollection);
        const fetchedData = {};
        projectsSnapshot.forEach((doc) => {
          fetchedData[doc.id] = doc.data();
        });
        setProjectsData(fetchedData);
      } catch (error) {
        console.error('Error fetching projects data:', error);
        setProjectsData(fallbackProjectData);
      }
    };

    fetchProjectsData();
  }, []);

  return projectsData || fallbackProjectData;
}