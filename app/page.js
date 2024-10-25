'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { MdOutlineDesignServices, MdOutlineComputer, MdOutlineBrush } from 'react-icons/md';
import { FiTool } from "react-icons/fi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdArrowOutward } from "react-icons/md";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

const skillIcons = [
  { icon: '/skill-1.png', name: 'Xcode' },
  { icon: '/skill-2.png', name: 'React' },
  { icon: '/skill-3.png', name: 'Next.js' },
  { icon: '/skill-4.png', name: 'Node.js' },
  { icon: '/skill-5.png', name: 'Firebase' },
  { icon: '/skill-6.png', name: 'Python' },
  { icon: '/skill-7.png', name: 'Flask' },
  { icon: '/skill-8.png', name: 'MongoDB' },
  { icon: '/skill-9.png', name: 'Swift' },
  { icon: '/skill-10.png', name: 'TypeScript' },
  { icon: '/skill-11.png', name: 'Tailwind' },
  { icon: '/skill-12.png', name: 'Figma' }
];

export default function Home() {
  const [projectsData, setProjectsData] = useState(null);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const projectsCollection = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCollection);
        const projectsData = {};
        projectsSnapshot.forEach((doc) => {
          projectsData[doc.id] = doc.data();
        });
        setProjectsData(projectsData);
      } catch (error) {
        console.error('Error fetching projects data:', error);
      }
    };

    fetchProjectsData();
  }, []);

  const [openItems, setOpenItems] = useState({
    'project-1': false,
    'project-2': false,
    'project-3': false,
    'project-4': false,
    'project-5': false,
    'project-6': false,
    'project-7': false,
    'experience-1': false,
    'experience-2': false,
    'experience-3': false,
    'experience-4': false,
    'award-1': false,
    'award-2': false,
    'education-1': false,
    'education-2': false,
    // ... 其他項目
  });

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  function getSkillName(index) {
    const skillNames = [
      'JavaScript', 'CSS', 'HTML', 'Python', 'Cursor', 'Xcode',
      'Figma', 'Firebase', 'React', 'Next.js', 'Adobe AE', 'Trello'
    ];
    return skillNames[index] || `Skill ${index + 1}`;
  }

  const carouselRef = useRef(null);

  const moveCarousel = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let position = 0;
    const animate = () => {
      position -= 0.01; // 减小这个值会使动画变慢
      if (position <= -50) {
        position = 0;
      }
      carousel.style.transform = `translateX(${position}%)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  useEffect(() => {
    moveCarousel();
  }, [moveCarousel]);

  return (
    <div className='home-container h-auto '>
      <div className="pt-8  p-p-gap items-center bg-white" >
      <div className="home-cover h-auto md:h-[calc(100vh-80px)] flex flex-col md:flex-row justify-items-center items-center bg-blue-600 rounded-3xl" >
        <div className="home-content-left md:w-1/2 flex flex-col justify-items-center text-left">
          <div className="flex flex-col flex-grow p-p-gap mt-4 md:mt-2  text-white">
            <div className="py-6 md:pr-0 md:py-0"> {/* 添加 py-8 用於小螢幕 */}
              <h1 className="py-2 mr-20 heading-1-custom">
              End-to-end Digital Product Enthusiast delivering user-centered solutions through technology, strategy, and AI-power.
              </h1>
              <div className="py-2 md:py-0 mr-0 md:mr-10">
              <h4 className='heading-4-custom mr-12 pb-4'>
              {/* Delivering digital solutions through design thinking, strategy to coding with AI-power.<br />
              Check my 3-weeks projects in the menu. */}
              </h4>
              <div className="flex flex-row space-x-2 md:space-x-4 mt-0 md:pt-2 justify-items-center items-center">
                <div className='bg-white p-2 px-4 rounded-full'>
                <a
                  href="https://www.linkedin.com/in/jordanwu-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-item-subheader text-black hover:text-blue-800 transition-colors duration-300"
                >
                  <FaLinkedin className="mr-2" />
                  <p className="mr-2 text-sm">LinkedIn</p>                  
                  <MdArrowOutward className="ml-2 md:ml-4 text-base" />
                </a>
                </div>
                <div className='text-white bg-stone-900 p-2 px-4 rounded-full border-2'>
                <a
                  href="https://github.com/WuChihWei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-item-subheader text-white hover:text-gray-600 transition-colors duration-300"
                >
                  <FaGithub className="mr-2 text-sm" />
                  <p className="mr-2 text-sm">GitHub</p>
                  <MdArrowOutward className="ml-2 md:ml-4 text-base" />
                </a>
                </div>
              </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="h-4/5  pr-10 md:w-1/2 flex flex-col overflow-hidden rounded-3xl">
        <div className="md:py-8 gap-4 max-md:w-full w-full h-[calc(50vh)] md:h-[calc(100vh)] flex flex-col overflow-hidden bg-white rounded-3xl">
          <div className="h-full image-scroll-container top flex-grow space-y-0 md:space-y-0 "> 
            {[...Array(6)].map((_, index) => (
              <img key={index} src={`/project-${index + 1}.png`} alt={`Project ${index + 1}`} />
            ))}
            {[...Array(6)].map((_, index) => (
              <img className='h-full' key={index + 6} src={`/project-${index + 1}.png`} alt={`Project ${index + 1}`} />
            ))}
          </div>
          <div className="h-full image-scroll-container bottom flex-grow space-y-0 md:space-y-0"> 
            {[...Array(6)].map((_, index) => (
              <img key={index} src={`/project-${index + 7}.png`} alt={`Project ${index + 7}`} />
            ))}
            {[...Array(6)].map((_, index) => (
              <img key={index + 6} src={`/project-${index + 7}.png`} alt={`Project ${index + 7}`} />
            ))}
          </div>
        </div>
        </div>
      </div>
      </div>
      {/* Add My Expertise section */}
      <section className="py-20 mb:py-10 p-p-gap">
        <div>
        <h2 className="heading-2-custom mb-8">My Expertise</h2>
        <div className="expertise-grid mx-auto flex flex-wrap justify-between gap-y-14 gap-10 sm:gap-12">
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="mb-2 flex">
              <MdOutlineDesignServices size={24} className="text-black" />
              <h5 className="heading-4-custom ml-2">Strategy & Direction</h5> 
            </div>
            <h4 className="heading-3-custom">20+ Projects</h4>
            <p className="decription-1-custom">In 2 Years. Developed actionable product strategies, guiding projects from concept to launch, aligning user needs with business goals.</p>
          </div>
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="mb-2 flex">
              <MdOutlineComputer size={24} className="text-black" />
              <h5 className="heading-4-custom ml-2">Technology</h5> 
            </div>
            <h4 className="heading-3-custom">30% Faster Delivery</h4>
            <p className="decription-1-custom ">In 2 Months. Integrated emerging technologies to improve scalability and foster collaboration between design and engineering.</p>
          </div>
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
          <div className="mb-2 flex"> 
            <MdOutlineBrush size={24} className="text-black" />
            <h5 className="heading-4-custom ml-2">UI & UX Design</h5> 
          </div>
            <h4 className="heading-3-custom">25% Engagement Increase</h4>
            <p className="decription-1-custom "> In 2 Months. Led user-centered design processes, enhancing usability and consistency across devices.</p>
          </div>
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className=" mb-2 flex">
              <FiTool size={24} className="text-black" />
              <h5 className="heading-4-custom ml-2">Key Skills</h5> 
            </div>
            <h4 className="heading-3-custom">40% Efficiency Increase</h4>
            <p className="decription-1-custom ">in 2 months. Proficient in Jira, Trello, Figma, and Agile frameworks, managing complete product lifecycles and conducting market research.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* After the home cover section */}
      <section className="resume-section p-p-gap py-10 bg-stone-100">
       
        <div className="resume-container h-auto">
         
          <div className='title-contatiner py-10'>
             <h2 className='heading-2-custom'>Projects</h2>

            <div className="resume-item" onClick={() => toggleItem('project-1')}>
            <div className="resume-item-header flex flex-col md:flex-row place-items-start">

            <div className='flex flex-col place-items-start'>
            <div className="flex items-center space-x-1 ">
            <h3 className='heading-3-custom'>Jordan-Wu.com</h3>
            <IoMdInformationCircleOutline size={20} className="text-stone-800" /> 
            </div>
            <div className="flex md:items-center"> 
            <p className='decription-2-custom'>What you are reading now. (2024)</p>
            </div>
            </div>
            
            <div className="flex justify-end">
            <img src="/home_p1.png" alt="Description" className="w-[260px] h-[180px] items-end  bg-white" /> 
            </div>
            </div>
          <div className="resume-item-content" style={{display: openItems['project-1'] ? 'block' : 'none'}}>
            <p>Product Manager + Full Stack Web Developer. Custom-built. There is no third-party UI component library. able to update information.</p>
          </div>
          </div>
          
          <div className="resume-item" onClick={() => toggleItem('project-2')}>
          <div className="resume-item-header flex flex-col md:flex-row place-items-start">

            <div className='flex flex-col place-items-start'>
            <div className="flex items-center space-x-1 ">
            <h3 className='heading-3-custom'>Davincin</h3>
            <IoMdInformationCircleOutline size={20} className="text-stone-800" /> 
            </div>
            <div className="flex md:items-center"> 
            <p className='decription-2-custom'>AI CRM for Knowledge Workers Engaging and Analyzing. (2024)</p>
            </div>
            </div>


            <div>
            <img src="/home_p2.png" alt="Davincin" className="w-[260px] h-[180px] bg-white" /> 
            </div>
            </div>
          <div className="resume-item-content" style={{display: openItems['project-2'] ? 'block' : 'none'}}>
            <p>Product Manager +Full Stack Web Developer. Developed CRM tools for the AI-powered knowledge influencers, including automated client management, personalized AI assistants, and automated reporting. I worked on both front-end and back-end development, utilizing React.js, Next.js, and TypeScript for the user interface and Node.js, Flask, and Firebase for back-end services. I integrated OpenAI's GPT models and LangChain to enable advanced AI functionalities and used Pinecone for vector similarity searches. Additionally, I deployed the application on Vercel and Google Cloud Platform to ensure scalability.</p>
          </div>
          </div>

          <div className="resume-item" onClick={() => toggleItem('project-3')}>
          <div className="resume-item-header flex flex-col md:flex-row place-items-start">

            <div className='flex flex-col place-items-start'>
            <div className="flex items-center space-x-1 ">
            <h3 className='heading-3-custom'>Superfake</h3>
            <IoMdInformationCircleOutline size={20} className="text-stone-800" /> 
            </div>
            <div className="flex md:items-center"> 
            <p className='decription-2-custom'>Discover, Create, and Share AI-Driven Inspiration. (2024)</p>
            </div>
            </div>      

            <div>
            <img src="/home_p4.png" alt="Superfake" className="w-[260px] h-[180px] bg-white" /> 
            </div>
            </div>
          <div className="resume-item-content" style={{display: openItems['project-3'] ? 'block' : 'none'}}>
            <p>Product Manager + Full Stack Web Developer. Developed key features with using React.js, Next.js, and Tailwind CSS. On the back-end, I integrated Firebase for real-time data handling and user management. I also implemented API integrations, including NewsAPI and SerpAPI, to provide real-time content updates. Additionally, I focused on enhancing user engagement with features like daily challenges, commenting, and liking systems.</p>
          </div>
          </div>

         

          <div className="resume-item" onClick={() => toggleItem('project-4')}>
          <div className="resume-item-header flex flex-col md:flex-row place-items-start">

            <div className='flex flex-col place-items-start'>
            <div className="flex items-center space-x-1 ">
            <h3 className='heading-3-custom'>Hommap</h3>
            <IoMdInformationCircleOutline size={20} className="text-stone-800" /> 
            </div>
            <div className="flex md:items-center"> 
            <p className='decription-2-custom'>Solve your home allergy issues with data-driven interior design. (2024)</p>
            </div>
            </div>

            <div>
            <img src="/home_p3.png" alt="Davincin" className="w-[260px] h-[180px] bg-white" /> 
            </div>
            </div>
          <div className="resume-item-content" style={{display: openItems['project-4'] ? 'block' : 'none'}}>
            <p>Product Manager + Full Stack Web Developer. Worked on developing a data-driven platform aimed at improving indoor living conditions by addressing home allergy issues. Leveraging AI and data analysis, the platform provides personalized interior design recommendations to reduce allergens while optimizing air quality and home energy management.</p>
          </div>
          </div>

          <div className="resume-item" onClick={() => toggleItem('project-5')}>
          <div className="resume-item-header flex flex-col md:flex-row place-items-start">
        
            <div className='flex flex-col place-items-start'>
            <div className="flex items-center space-x-1 ">
            <h3 className='heading-3-custom'>Comgora</h3>
            <IoMdInformationCircleOutline size={20} className="text-stone-800" /> 
            </div>
            <div className="flex md:items-center"> 
            <p className='decription-2-custom'>AI contract generator for small business. (2023)</p>
            </div>
            </div>

            <div>
            <img src="/home_p5.png" alt="Davincin" className="w-[260px] h-[180px] bg-white" /> 
            </div>
            </div>
          <div className="resume-item-content my-1" style={{display: openItems['project-5'] ? 'block' : 'none'}}>
            <li>Product Manager + UI/UX Designer. AI-powered contract app for remote workers. Developed cross-platform app with Flutter. </li>
          </div>
          </div>

          <div className="resume-item" onClick={() => toggleItem('project-6')}>
          <div className="resume-item-header flex flex-col md:flex-row place-items-start">
            <div className='flex flex-col place-items-start'>
            <div className="flex items-center space-x-1 ">
            <h3 className='heading-3-custom'>Naturian</h3>
            <IoMdInformationCircleOutline size={20} className="text-stone-800" /> 
            </div>
            <div className="flex md:items-center"> 
            <p className='decription-2-custom'>An iOS App for people who want to live a more natural life. (2022)</p>
            </div>
            </div>
            <div>
            <img src="/home_p6.png" alt="Naturian" className="w-[260px] h-[180px] bg-white " /> 
            </div>
            </div>
          <div className="resume-item-content" style={{display: openItems['project-6'] ? 'block' : 'none'}}>
            <p>Full Stack iOS Developer. A social app for people who want to live a more natural life and explore themselves.</p>
          </div>
          </div>


          {/* <div className="resume-item" onClick={() => toggleItem('project-7')}>
          <div className="resume-item-header flex place-items-start">
          <div className='flex flex-col place-items-start'>
            <h3 className='heading-3-custom' >What2Pack</h3>
            <div className="flex items-center"> 
              <IoMdInformationCircleOutline size={20} className="text-stone-800 mr-1" /> 
              <p className='decription-2-custom'>A tool for travelers to pack their luggage. (2023)</p>
            </div>
            </div>
            <div>
            <img src="/path/to/your/image.png" alt="What2Pack" className="w-[180px] h-[100px] bg-white" /> 
            </div>
            </div>
            <div className="resume-item-content" style={{display: openItems['project-7'] ? 'block' : 'none'}}>
            <p>Frontend Developer of Four Memebers. A tool for travelers to pack their luggage depend on the destination weather.</p>
          </div>
          </div> */}

          </div>


  <div className='title-container p-10  bg-stone-200 rounded-3xl'>
  <h2 className='heading-2-custom'>Experience</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
    {/* Comgora */}
    <div className="experience-item py-10 rounded-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className='heading-3-custom text-2xl font-bold'>Comgora</h3>
          <p className='text-gray-600'>Stockholm 2023</p>
        </div>
        <IoMdInformationCircleOutline 
          size={24} 
          className="text-gray-400 cursor-pointer" 
          onClick={() => toggleItem('experience-1')} 
        />
      </div>
      <hr className="my-4 border-gray-900" />
      <div className="space-y-4">
        <div>
          <p className="font-semibold">Role</p>
          <div className="text-right">
            <p>Cofounder</p>
            <p>Product Manager</p>
          </div>
        </div>
        <hr className="my-4 border-gray-400" />
        <div>
          <p className="font-semibold">Key Projects</p>
          <div className="text-right">
            <p>AI Contract App</p>
            <p>Workflow Optimization</p>
          </div>
        </div>
        <hr className="my-4 border-gray-400" />
        <div>
          <p className="font-semibold">Scope</p>
          <div className="text-right">
            <p>End-to-end Development</p>
            <p>Product Strategy</p>
          </div>
        </div>
      </div>
      {/* <hr className="my-4 border-gray-900" /> */}
      {openItems['experience-1'] && (
        <div className="mt-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Led end-to-end development of an AI-powered contract app for remote workers.</li>
            <li>Designed a 50% cheaper and 60% more efficient workflow on Notion.</li>
            <li>Developed a two-year product roadmap and vision.</li>
            <li>Collaborated with a venture capital expert to refine product vision.</li>
          </ul>
        </div>
      )}
    </div>

    {/* Studs */}
    <div className="experience-item py-10 rounded-lg ">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className='heading-3-custom text-2xl font-bold'>Studs</h3>
          <p className='text-gray-600'>Stockholm 2023</p>
        </div>
        <IoMdInformationCircleOutline 
          size={24} 
          className="text-gray-400 cursor-pointer" 
          onClick={() => toggleItem('experience-2')} 
        />
      </div>
      <hr className="my-4 border-gray-900" />
      <div className="space-y-4">
        <div>
          <p className="font-semibold">Role</p>
          <div className="text-right space-y-1">
            <p>Art Director</p>
          </div>
        </div>
        <hr className="my-4 border-gray-400" />

        <div>
          <p className="font-semibold">Key Projects</p>
          <div className="text-right space-y-1">
            <p>Social Media Content</p>
          </div>
        </div>
        <hr className="my-4 border-gray-400" />
        <div>
          <p className="font-semibold">Scope</p>
          <div className="text-right space-y-1">
            <p>Increase Social Media Engagement</p>
          </div>
        </div>
      </div>
      {/* <hr className="my-4 border-gray-900" /> */}
      {openItems['experience-2'] && (
        <div className="mt-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Managed a team of two designers, guiding the UX strategy of Studs' official website.</li>
            <li>Increased social media content production by 120%, resulting in a 40% increase in views.</li>
          </ul>
        </div>
      )}
    </div>

    {/* AppWorks School */}
    <div className="experience-item py-10 rounded-lg ">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className='heading-3-custom text-2xl font-bold'>AppWorks School</h3>
          <p className='text-gray-600'>Taipei 2022</p>
        </div>
        <IoMdInformationCircleOutline 
          size={24} 
          className="text-gray-400 cursor-pointer" 
          onClick={() => toggleItem('experience-3')} 
        />
      </div>
      <hr className="my-4 border-gray-900" />
      <div className="space-y-4">
        <div>
          <p className="font-semibold">Role</p>
          <div className="text-right space-y-1">
            <p>Trainee</p>
            <p>Trainee</p>
          </div>
        </div>
        <hr className="my-4 border-gray-400" />

        <div>
          <p className="font-semibold">Key Projects</p>
          <div className="text-right space-y-1">
            <p>E-commerce App</p>
            <p>E-commerce App</p>

          </div>
          <hr className="my-4 border-gray-400" />

        </div>
        <div>
          <p className="font-semibold">Scope</p>
          <div className="text-right space-y-1">
            <p>Performance Improvement</p>
          </div>
        </div>
      </div>
      {/* <hr className="my-4 border-gray-900" /> */}
      {openItems['experience-3'] && (
        <div className="mt-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Collaborated on the "STYLiSH" E-commerce app, improving performance by 60%.</li>
            <li>Developed iOS projects using Swift and cooperated with cross-functional teams.</li>
          </ul>
        </div>
      )}
    </div>

    {/* Atom Health Corp. */}
    <div className="experience-item py-10 rounded-lg ">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className='heading-3-custom text-2xl font-bold'>Atom Health Corp.</h3>
          <p className='text-gray-600'>Taipei 2021</p>
        </div>
        <IoMdInformationCircleOutline 
          size={24} 
          className="text-gray-400 cursor-pointer" 
          onClick={() => toggleItem('experience-4')} 
        />
      </div>
      <hr className="my-4 border-gray-900" />
      <div className="space-y-4">
        <div>
          <p className="font-semibold">Role</p>
          <div className="text-right space-y-1">
            <p>Associate Product Owner</p>
          </div>
        </div>
        <hr className="my-4 border-gray-400" />

        <div>
          <p className="font-semibold">Key Projects</p>
          <div className="text-right space-y-1">
            <p>Medical Devices</p>
          </div>
        </div>
        <hr className="my-4 border-gray-400" />

        <div>
          <p className="font-semibold">Scope</p>
          <div className="text-right space-y-1">
            <p>Market Research</p>
          </div>
        </div>
      </div>
      {/* <hr className="my-4 border-gray-900" /> */}
      {openItems['experience-4'] && (
        <div className="mt-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Led development of FDA-approved medical devices, contributing 67% of annual revenue.</li>
            <li>Improved U.S. mask sales by 46% through data-driven marketing strategies.</li>
          </ul>
        </div>
      )}
    </div>
  </div>
</div>
       
      </div>

      </section>  

      <section className='skillSection w-full py-20  rounded-3xl'>
        <div className='container h-full py-10  bg-stone-800  rounded-3xl'>
          <div className='h-1/2 flex flex-col justify-center'>         
          <h2 className='heading-1-custom text-white py-8  text-center'>Innovative Skills</h2>
          <p className='heading-4-custom text-white mb-12 px-8 text-center'>
          I integrate front-end technologies like React.js and Next.js with back-end systems using Node.js, Flask, and Firebase, while leveraging AI to enhance user experiences and automate processes. Combining data-driven insights with intuitive design, I deliver scalable, innovative solutions that anticipate user needs and solve challenges efficiently.
          </p>
          </div>
          <div className='skill-carousel h-1/2 overflow-hidden items-center justify-center'>
            <div 
              ref={carouselRef}
              className='flex flex-col'
              style={{ width: `${skillIcons.length * 176}px`, height: '200px' }}
            >
              <div className='flex'>
                {skillIcons.map((skill, index) => (
                  <div key={index} className='flex-none w-40 mx-2'>
                    <div className='border-2 rounded-full p-2 flex items-center justify-center h-full'>
                      <img src={skill.icon} alt={skill.name} className='w-8 h-8 mr-6' />
                      <p className='text-white text-center mr-2 text-sm'>{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex mt-6' style={{ transform: 'translateX(88px)' }}>
                {skillIcons.map((skill, index) => (
                  <div key={`bottom-${index}`} className='flex-none w-40 mx-2'>
                    <div className='border-2  rounded-full p-2 flex  items-center justify-center h-full'>
                      <img src={skill.icon} alt={skill.name} className='w-8 h-8 mr-6' />
                      <p className='text-white text-center mr-2 text-sm'>{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}







