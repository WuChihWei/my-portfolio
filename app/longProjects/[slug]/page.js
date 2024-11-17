"use client";

import { useState, useEffect } from 'react';
import { useProjectsData } from '../../../hooks/UseProjectsData';
import Image from 'next/image';
import comgoraData from '../comgora.js';
import accessibility from '../accessibility.js';

export default function ProjectPage({ params }) {
  const { slug } = params;
  const allProjects = useProjectsData();
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    if (allProjects) {
      setLoading(false);
      setProjectData(
        slug === 'comgora' 
          ? comgoraData 
          : slug === 'accessibility' 
            ? accessibility 
            : allProjects[slug]
      );
    }
  }, [allProjects, slug]);

  if (loading) return <p>Loading...</p>;
  if (!projectData) return <p>Project not found</p>;

  const data = projectData;

  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto py-32 sm:px-20 md:px-20 lg:px-20">
      {/* Hero Section */}
      <section className="py-12">
        <div className="flex md:flex flex-col gap-12">
          <div className='flex flex-col md:flex-row'>
            <div className="w-full md:flex flex-col">
              <div>
                <h1 className="text-6xl md:w-3/4 font-bold mb-4">{data.introduction.title}</h1>
              </div>
              <div className='mr-12'>
                <h3 className="text-xl h-auto font-bold mb-4">Overview</h3>
                <p className="text-lg text-gray-600 mb-6">{data.introduction.description}</p>
              </div>
            </div>
            <div className="relative w-full h-[500px]">
              {data.introduction.imageUrl && (
                <Image 
                  src={data.introduction.imageUrl} 
                  alt="Project hero" 
                  fill 
                  className="object-cover rounded-3xl bg-rock-200" 
                />
              )}
            </div>
          </div>

          {/* Intro Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {data.introCards?.map((intro, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-000 mb-2">{intro.title}</h3>
                <ul className="space-y-1">
                  {Array.isArray(intro.description) ? (
                    intro.description.map((point, i) => (
                      <li key={i} className="text-sm text-gray-900">{point}</li>
                    ))
                  ) : (
                    <li className="text-sm text-gray-900">{intro.description}</li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Process Flow Navigation */}
          <div className="mt-20">
            <div className="relative w-full h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-lg">
              <div className="absolute inset-0 flex justify-between items-center px-4 md:px-8">
                {[
                  { name: 'Summary', id: 'objective' },
                  { name: 'Target Audience', id: 'target-audience' },
                  { name: 'Empathize Methods', id: 'empathize' },
                  { name: 'Data Analysis', id: 'Analysis' },
                  { name: 'Define Problem', id: 'define' },
                  { name: 'Prototypes', id: 'prototypes' },
                  { name: 'Testing', id: 'testing' },
                  { name: 'Reflection', id: 'reflection' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      document.getElementById(item.id)?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start' 
                      });
                    }}
                    className="text-white text-sm md:text-base font-medium 
                               hover:text-gray-200 hover:scale-105
                               transition-all duration-200 
                               whitespace-nowrap px-2 py-1
                               focus:outline-none focus:ring-2 focus:ring-gray-300 
                               rounded-md"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tasks & Challenges */}
      <section className="relative -mx-[50vw] left-[50%] right-[50%] w-screen bg-stone-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-20 lg:px-12">
          <div className='flex flex-col md:flex-row-reverse gap-6 items-center'>
            <div className='w-full flex flex-col ml-10'>
              <h1 className="text-4xl font-bold mb-8">{data.tasks.title}</h1>
              <div className="space-y-6">
                {data.tasks.tasksList.map((task, index) => (
                  <div key={index} className="w-3/4">
                    <h2 className="text-xl font-bold mb-2">{task.title}</h2>
                    <p className="text-gray-600">{task.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full h-[500px] rounded-3xl">
              <Image 
                src={data.tasks.imageUrl} 
                alt="Project hero" 
                fill 
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="target-audience" className="py-12">
        <h2 className="text-4xl  font-bold mb-8">Target Audience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.targetAudience?.map((targetAudi, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex gap-4 items-start">
                <div className="relative w-32 h-32">
                  {targetAudi.imageUrl && (
                    <Image 
                      src={targetAudi.imageUrl} 
                      alt={targetAudi.title} 
                      fill 
                      className="object-cover rounded-lg"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{targetAudi.title}</h3>
                  <ul className="space-y-1">
                    {targetAudi.description.map((detail, i) => {
                      const [label, ...contentArr] = detail.split(': ');
                      const content = contentArr.join(': ');
                      
                      return (
                        <li key={i} className="text-sm">
                          <span className="font-medium">{label}</span>
                          {content && ': '}
                          <span className="text-gray-600">{content}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Empathize: User Experience */}
      <section id="empathize" className="py-12">
        <h2 className="text-4xl font-bold">Empathize Method for UX</h2>
        <p className="text-lg text-gray-600 ">{data.userEvaluation.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {data.userExperience?.map((experience, index) => (
            <div key={index} className="bg-white">
              {experience.imageUrl && (
                <div className="relative h-[500px] mt-4 rounded-3xl">
                  <Image src={experience.imageUrl} alt={experience.title} fill className="object-cover rounded-3xl" />
                </div>
              )}
              <h3 className="text-2xl font-semibold my-2">{experience.title}</h3>
              <ul className="list-disc pl-6 space-y-1">
                {experience.description.map((desc, i) => (
                  <li key={i} className="text-base text-gray-600">{desc}</li>
                ))}
              </ul>          
            </div>
          ))}
        </div>
      </section>

      {/* Feedback Collection and Analysis */}
      <section id="Analysis" className="py-12">
        <h2 className="text-4xl font-bold mb-2">Feedback Collection and Analysis</h2>
        <ul className="list-disc pl-6 space-y-1">
          {data.analysisProblemInfo.descriptions.map((description, index) => (
            <li key={index} className="text-base text-gray-600">{description}</li>
          ))}
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {data.analysisProblem?.map((problem, index) => (
            <div key={index} className="bg-white">
              {problem.imageUrl && (
                <div className="relative h-[550px] mt-4 rounded-3xl">
                  <Image src={problem.imageUrl} alt={problem.title} fill className="object-cover rounded-3xl" />
                </div>
              )}
              <h3 className="text-2xl font-semibold my-2">{problem.title}</h3>
              <ul className="list-disc space-y-1">
              <p className="text-gray-600">{problem.description}</p>
              </ul>     
             </div>
          ))}
        </div>
      </section>

      {/* Define Problem: From Issue to Solutions */}
      <section 
      id="define" 
      className="relative -mx-[50vw] left-[50%] right-[50%] w-screen py-14"
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-20 lg:px-20">
          <h2 className="text-4xl font-bold mb-2">Define Problem</h2>
          
          {/* Main Image */}
          <div 
                className="relative w-full h-screen max-h-[450px] md:max-h-[650px] rounded-3xl "
                >
            <Image 
              src={data.defineMainPic.imageUrl} 
              alt={"userEvaluation"} 
              fill
              className="object-contain rounded-3xl" 
            />
          </div>
          <p className="text-gray-600 mt-4">{data.defineMainPic.description}</p>

      {/* Prioritize Objectives */}
      <section className="py-4">
        <h2 className="text-2xl font-bold my-4 text-left">{data.objectives?.title}</h2>
        <div className="w-full text-center">
        <div className="grid grid-cols-1 pt-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 auto-cols-fr">
          {data.objectives?.features?.map((feature, index) => (
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
                {/* <div className="w-10 h-10 flex items-center justify-center sm:mb-4">
                  <span className="text-4xl">{feature.icon}</span>
                </div> */}
                <h4 className="text-lg font-bold ml-2 sm:ml-0 sm:mb-4 text-center">{feature.name}</h4>
              </div>
            
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* Solution Images */}
          <div className="grid grid-cols-1 md:grid-cols-1 md:gap-4 md:mt-4">
            {data.definePrototype?.map((solution, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-4"
              >
                <div className="relative w-full h-screen max-h-[450px] md:max-h-[650px] rounded-3xl">
                  {solution.imageUrl && (
                    <Image 
                      src={solution.imageUrl} 
                      alt={solution.title} 
                      fill 
                      className="object-contain rounded-3xl" 
                    />
                  )}
                </div>
                {solution.description && (
                  <p className="text-gray-600 text-sm">{solution.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* user pre-testing flow */}
      <section id="userPreTest" className="relative -mx-[50vw] left-[50%] right-[50%] w-screen py-14 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-20 lg:px-20">
          <h2 className="text-4xl font-bold mb-2">{data?.userTestFLow?.title} </h2>
          <p className="text-gray-600">{data?.userTestFLow?.description}</p>
            <div 
                className="relative w-full h-screen max-h-[450px] md:max-h-[650px] rounded-3xl "
                >
            <Image 
              src={data?.userTestFLow?.imageUrl} 
              alt={"userEvaluation"} 
              fill
              className="object-contain rounded-3xl" 
            />
          </div>
          </div>
      </section>

           {/* result */}
      <section 
      id="result" 
      className="relative -mx-[50vw] left-[50%] right-[50%] w-screen py-14"
      style={{
        backgroundImage: data?.result?.backgroundImage ? `url(${data?.result?.backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '400px'
      }}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-20 lg:px-20">
          <h2 className="text-4xl font-bold mb-2 text-white">{data?.result?.title} </h2>
          {/* Main Image */}
          <div 
                className="relative w-full h-screen max-h-[450px] md:max-h-[650px] rounded-3xl "
                >
            <Image 
              src={data?.result?.imageUrl} 
              alt={"userEvaluation"} 
              fill
              className="object-contain rounded-3xl" 
            />
          </div>
          <p className="text-white mt-4">{data?.result?.description}</p>
          </div>
      </section>

      {/* Prototype: From Issue to Solutions */}
      <section id="prototypes" className="py-12">
        <h2 className="text-4xl font-bold mb-8">Prototype: Solutions</h2>
        
        {/* Main Image */}
        {data?.prototypeMainPic?.imageUrl && (
          <div className="relative w-full h-screen max-h-[650px] rounded-3xl mb-12 bg-stone-100">
            <Image 
              src={data.prototypeMainPic.imageUrl} 
              alt={"userEvaluation"} 
              fill
              className="object-contain rounded-3xl" 
            />
          </div>
        )}

        {/* Solution Images */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {data.prototype?.map((solution, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="relative w-full h-screen max-h-[650px] rounded-3xl bg-stone-100">
                {solution.imageUrl && (
                  <Image 
                    src={solution.imageUrl} 
                    alt={solution.title} 
                    fill 
                    className="object-contain rounded-3xl" 
                  />
                )}
              </div>
              {solution.description && (
                <p className="text-gray-600 text-lg">{solution.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {(data?.userTestingInfo || data?.userTesting) && (
        <section id="testing" className="py-12">
          {/* Testing Info Section */}
          {data?.userTestingInfo && (
            <div className='flex flex-col md:flex-row mb-8'>
              <div className="w-full">
                <h1 className="text-4xl font-bold mb-4">{data.userTestingInfo.title}</h1>
                <p className="text-lg text-gray-600 mb-6">{data.userTestingInfo.description}</p>
              </div>
              {data.userTestingInfo.imageUrl && (
                <div className="relative w-full h-[500px]">
                  <Image 
                    src={data.userTestingInfo.imageUrl} 
                    alt="Project hero" 
                    fill 
                    className="object-cover rounded-3xl bg-sky-200" 
                  />
                </div>
              )}
            </div>
          )}
          
          {/* Testing Points Grid */}
          {data?.userTesting?.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.userTesting.map((test, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-6">{test.title}</h3>
                  <div className="space-y-4">
                    {test.points?.map((point, pointIndex) => (
                      <div key={pointIndex} className="space-y-2">
                        <div className="flex gap-2">
                          <span className="text-gray-600">{point.number}.</span>
                          <span className="font-medium">{point.label}</span>
                        </div>
                        {point.text && (
                          <p className="text-gray-600 pl-5">{point.text}</p>
                        )}
                        {point.bullets?.length > 0 && (
                          <ul className="list-disc pl-10 text-gray-600 space-y-1">
                            {point.bullets.map((bullet, bulletIndex) => (
                              <li key={bulletIndex}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                        {point.quotes?.length > 0 && (
                          <div className="pl-5 space-y-1">
                            {point.quotes.map((quote, quoteIndex) => (
                              <p key={quoteIndex} className="text-gray-600">"{quote}"</p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Reflections */}
      <section id="reflection" className="py-12">
        <h2 className="text-4xl font-bold mb-14">Reflections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.reflections?.map((reflection, index) => (
            <div key={index} className="bg-white rounded-lg">
              <h3 className="text-xl font-bold mb-3">{reflection.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{reflection.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other User Flows */}
      <section className="relative -mx-[50vw] left-[50%] right-[50%] w-screen py-14 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-20 lg:px-12">
          <h2 className="text-center text-4xl font-bold mb-4">Annex</h2>
          
          {/* Main Image */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-[50vh] sm:h-[40vh] md:h-[80vh] lg:h-[100vh] xl:h-[110vh]">
              <Image 
                src={data.flow.imageUrl} 
                alt={"userEvaluation"} 
                fill
                className="object-contain" 
                sizes="100vw"
                priority
              />
            </div>
            {data.flow?.description && (
              <p className="text-gray-600 text-lg text-center px-4">
                {data.flow.description}
              </p>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}