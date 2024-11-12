"use client";

import { useState, useEffect } from 'react';
import { useProjectsData } from '../../../hooks/UseProjectsData';
import Image from 'next/image';
import comgoraData from '../comgora.js';

export default function ProjectPage({ params }) {
  const { slug } = params;
  const allProjects = useProjectsData();
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    if (allProjects) {
      setLoading(false);
      setProjectData(slug === 'comgora' ? comgoraData : allProjects[slug]);
    }
  }, [allProjects, slug]);

  if (loading) return <p>Loading...</p>;
  if (!projectData) return <p>Project not found</p>;

  const data = projectData;

  return (
    <div className="flex flex-col max-w-7xl mx-auto py-32 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-12">
        <div className="md:flex flex-col gap-8">
          <div className='flex '>
          <div className="w-full">
            <h1 className="text-4xl font-bold mb-4">{data.introduction.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{data.introduction.description}</p>
          </div>
          <div className="relative w-full h-[400px]">
            {data.introduction.imageUrl && (
              <Image src={data.introduction.imageUrl} alt="Project hero" fill className="object-cover rounded-lg bg-sky-200" />
            )}
          </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {data.introCards?.map((intro, index) => (
              <div key={index} className="bg-white rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{intro.title}</h3>
                <p className="text-gray-600">{intro.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Tasks & Challenges */}
      <section className="py-12 ">
      <div className='flex flex-row-reverse gap-6'>
          <div className="w-full ">
            <h1 className="text-4xl font-bold mb-4">{data.tasks.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{data.tasks.description}</p>
          </div>
          <div className="relative w-full h-[400px]">
            {data.tasks.imageUrl && (
              <Image src={data.tasks.imageUrl} alt="Project hero" fill className="object-cover rounded-lg bg-sky-200" />
            )}
          </div>
          </div>
      </section>

      {/* Prioritize Objectives */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Prioritize Objectives</h2>
        <div className="w-full text-center">
        <div className='flex flex-row items-center justify-center gap-10'>
                <span className="sm:flex items-center justify-center">
                  <img src="/impact-icon.svg" alt="Impact" className="w-5 h-5 mr-2" />
                  Impact  (1-5)
                </span>
                <span className="sm:flex items-center justify-center">
                  <img src="/ergency-icon.svg" alt="Urgency" className="w-5 h-5 mr-2" />
                  Urgency (1-5)
                </span>
                <span className="sm:flex items-center justify-center">
                  <img src="/market-icon.svg" alt="Market Size" className="w-5 h-5 mr-2" />
                  Market Size  (1-5)
                </span>
        </div>
        <div className="grid grid-cols-1 pt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 auto-cols-fr">
          {data.objectives.features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start sm:items-center p-4 sm:p-6 md:p-8 sm:rounded-3xl space-y-4 sm:space-y-6 border-b-2 sm:border-2 border-gray-200 cursor-pointer"
            >
              <div className="flex flex-row sm:flex-col items-center sm:items-center w-full">
                <p className="text-sm text-gray-500 mr-2 sm:mr-0 sm:mb-2 text-center">
                  <span className="md:hidden">
                    {index + 1}
                  </span>
                  <span className="hidden sm:inline">
                    {index < 4 ? ` Priority ${['1', '2', '3', '4'][index]} ` : ` Feature ${index + 1}`}
                  </span>
                </p>
                <div className="w-10 h-10 flex items-center justify-center sm:mb-4">
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                <h4 className="text-lg font-bold ml-2 sm:ml-0 sm:mb-4 text-center">{feature.name}</h4>
              </div>
              <div className={`flex flex-row sm:flex-col items-center sm:items-center justify-between w-full gap-2 sm:gap-6  sm:flex`}>
                <span className="flex pl-20 items-center justify-center sm:pl-0">
                  <img src="/impact-icon.svg" alt="Impact" className="w-5 h-5 mr-2" />
                  {feature.impact}
                </span>
                <span className="flex items-center justify-center">
                  <img src="/ergency-icon.svg" alt="Urgency" className="w-5 h-5 mr-2" />
                  {feature.urgency}
                </span>
                <span className="flex items-center justify-center">
                  <img src="/market-icon.svg" alt="Market Size" className="w-5 h-5 mr-2" />
                  {feature.marketSize}
                </span>
                <h5 className="font-semibold">Overall {feature.overall}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* Pre Study */}
      <section className="py-12">
        <div>
        <h2 className="text-4xl font-bold mb-8">Pre Study</h2>
        <p className="text-lg text-gray-600 mb-6">{data.preStudy.description}</p>
        </div>
        <div className="relative w-full h-[500px] ">
          {data.preStudy?.imageUrl && (
            <Image src={data.preStudy.imageUrl} alt="Pre study" fill className="object-cover rounded-3xl bg-sky-200" />
          )}
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12">
        <h2 className="text-4xl  font-bold mb-8">Target Audience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.targetAudience?.map((targetAudi, index) => (
            <div key={index} className="bg-white rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{targetAudi.title}</h3>
              <p className="text-gray-600">{targetAudi.description}</p>
              {targetAudi.imageUrl && (
                <div className="relative h-80 mt-4 rounded-3xl bg-sky-300">
                  <Image src={targetAudi.imageUrl} alt={targetAudi.title} fill className="object-cover rounded" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Empathize: User Experience */}
      <section className="py-12">
        <div className='grid grid-rows-1 md:grid-cols-2 gap-8'>
        <div className="relative h-80 rounded-3xl bg-sky-300">
        <Image src={data.userEvaluation.imageUrl} alt={"userEvaluation"} fill className="object-cover rounded" />
        </div>
        <div className="grid md:grid-rows-1 gap-2">
        <h2 className="text-4xl font-bold ">Empathize</h2>
          {data.userExperience?.map((experience, index) => (
            <div key={index} className="bg-white rounded-lg">
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <p className="text-gray-600">{experience.description}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Define Problem */}
      <section className="py-12">
        <h2 className="text-4xl font-bold">Define Problem</h2>
        <p className="text-lg text-gray-600 ">{data.defineProblemInfo.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.defineProblem?.map((problem, index) => (
            <div key={index} className="bg-white">
              {problem.imageUrl && (
                <div className="relative h-80 mt-4 rounded-lg bg-blue-400">
                  <Image src={problem.imageUrl} alt={problem.title} fill className="object-cover rounded" />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-4">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
          
            </div>
          ))}
        </div>
      </section>

      {/* Prototype: From Issue to Solutions */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 ">Prototype</h2>
        <div className="relative min-h-96 rounded-3xl mb-4 bg-blue-400">
        <Image src={data.prototypeMainPic.imageUrl} alt={"userEvaluation"} fill className="object-cover rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.prototype?.map((solution, index) => (
            <div key={index} className="bg-white  rounded-lg">
              {solution.imageUrl && (
                <div className="relative min-h-96  mt-4">
                  <Image src={solution.imageUrl} alt={solution.title} fill className="object-cover rounded-3xl bg-blue-400" />
                </div>
              )}
               <h3 className="text-xl font-semibold mt-2 mb-2">{solution.title}</h3>
               <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* User Testing */}
      <section className="py-12">
      <div className='flex mb-8 '>
          <div className="w-full">
            <h1 className="text-4xl font-bold mb-4">{data.userTestingInfo.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{data.userTestingInfo.description}</p>
          </div>
          <div className="relative w-full h-[400px]">
            {data.userTestingInfo.imageUrl && (
              <Image src={data.userTestingInfo.imageUrl} alt="Project hero" fill className="object-cover rounded-lg bg-sky-200" />
            )}
          </div>
          </div>
    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.userTesting?.map((test, index) => (
            <div key={index} className="bg-white  rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{test.title}</h3>
              <p className="text-gray-600">{test.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reflections */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Reflections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.reflections?.map((reflection, index) => (
            <div key={index} className="bg-white rounded-lg">
              
              {reflection.imageUrl && (
                <div className="relative h-96 mt-4 mb-4 rounded-3xl bg-blue-400">
                  <Image src={reflection.imageUrl} alt={reflection.title} fill className="object-cover rounded" />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-4">{reflection.title}</h3>
              <p className="text-gray-600">{reflection.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}