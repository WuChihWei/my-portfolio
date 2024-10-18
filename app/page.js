'use client';

import { useState, useEffect } from 'react';
import { MdOutlineDesignServices, MdOutlineComputer, MdOutlineBrush } from 'react-icons/md';
import { FiTool } from "react-icons/fi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdArrowOutward } from "react-icons/md";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

const skillIcons = [
  '/skill-1.png', '/skill-2.png', '/skill-3.png', '/skill-4.png',
  '/skill-5.png', '/skill-6.png', '/skill-7.png', '/skill-8.png',
  '/skill-9.png', '/skill-10.png', '/skill-11.png', '/skill-12.png'
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

  return (
    <div className='home-container h-auto '>
      <div className="home-cover h-auto pt-8 md:h-[calc(100vh-40px)] flex flex-col md:flex-row justify-items-center items-center bg-stone-900" >
        <div className="home-content-left md:w-2/5 flex flex-col justify-items-center text-left">
          <div className="flex flex-col flex-grow p-p-gap mt-4 md:mt-2  text-white">
            <div className="py-6 md:pr-0 md:py-0"> {/* 添加 py-8 用於小螢幕 */}
              <h1 className="py-2 mr-20 heading-1-custom">
              End-to-End Digital Product Enthusiast
              </h1>
              <div className="py-2 md:py-0 mr-0 md:mr-10">
              <h4 className='heading-4-custom mr-12 pb-4'>
              Delivering digital solutions through design thinking, strategy to coding with AI-power.<br />
              Check my 3-weeks projects in the menu.
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

        <div className="p-10 gap-2 max-md:w-full w-full h-[calc(50vh)] md:h-[calc(100vh-80px)] md:w-3/5 flex flex-col overflow-hidden">
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

      {/* Add My Expertise section */}
      <section className=" bg-stone-300 py-20 mb:py-10 p-p-gap">
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
          
          <div className="resume-item" onClick={() => toggleItem('project-3')}>
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
          <div className="resume-item-content" style={{display: openItems['project-3'] ? 'block' : 'none'}}>
            <p>Product Manager +Full Stack Web Developer. Developed CRM tools for the AI-powered knowledge influencers, including automated client management, personalized AI assistants, and automated reporting. I worked on both front-end and back-end development, utilizing React.js, Next.js, and TypeScript for the user interface and Node.js, Flask, and Firebase for back-end services. I integrated OpenAI's GPT models and LangChain to enable advanced AI functionalities and used Pinecone for vector similarity searches. Additionally, I deployed the application on Vercel and Google Cloud Platform to ensure scalability.</p>
          </div>
          </div>

          <div className="resume-item onClick={() => toggleItem('project-4')}">
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
          <div className="resume-item-content" style={{display: openItems['project-2'] ? 'block' : 'none'}}>
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
            <p>Product Manager +Full Stack Web Developer. Worked on developing a data-driven platform aimed at improving indoor living conditions by addressing home allergy issues. Leveraging AI and data analysis, the platform provides personalized interior design recommendations to reduce allergens while optimizing air quality and home energy management.</p>
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


          <div className='title-contatiner py-10'>
          <h2 className='heading-2-custom'>Experience</h2>

          <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('experience-1')}>
            <span>Cofounder & Product Manager at Comgora</span>
             <span className="resume-item-subheader">
             (Stockholm, Sweden) 2023
             {/* <MdArrowOutward className="ml-1" /> */}
             </span>

            </div>
            <div className="resume-item-content my-2" style={{display: openItems['experience-1'] ? 'block' : 'none'}}>
            <li>Led end-to-end development of an AI-powered contract app for remote workersfrom concept to MVP—guided by quantitative and qualitative market research with python, including Google keyword analysis and interviews with over 20 potential customers.</li>
            <li>Designed a 50% cheaper and 60% more efficient Trello/Asana-like workflow on Notion, and built a cross-platform app in Flutter with operating Agile methodologies.</li>
            <li>Developed a two-year product roadmap and vision, demonstrating team leadership by recruiting and organizing a team of over 7 professionals in development, marketing, finance and design.</li>
            <li>Collaborated with a venture capital expert (Fortune 500 companies) to refine product vision, define target customer profiles, and conduct SWOT analyses, identifying legal and cybersecurity risks to inform strategic decisions.</li>
            </div>
            </div>

            <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('experience-2')}>
            <span>Art Director at Studs</span>
             <span className="resume-item-subheader">
             (Stockholm, Sweden) 2023
             {/* <MdArrowOutward className="ml-1" /> */}
             </span>

            </div>
            <div className="resume-item-content my-2" style={{display: openItems['experience-2'] ? 'block' : 'none'}}>
            <li>Managed a team of two designers, guiding the UX strategy of Studs' official website and stakeholder collaboration with over 25 technical companies across Stockholm, Amsterdam, Barcelona, and Greece, enhancing product alignment and cross-cultural partnerships.</li>
            <li>ncreased social media content production by 120%, resulting in a 40% increase in views by implementing data-driven strategies and optimizing user engagement metrics.</li>
            </div>
            </div>

            <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('experience-3')}>
            <span>Trainee at AppWorks School</span>
             <span className="resume-item-subheader">
             (Taipei, Taiwan) 2022
             {/* <MdArrowOutward className="ml-1" /> */}
             </span>

            </div>
            <div className="resume-item-content my-2" style={{display: openItems['experience-3'] ? 'block' : 'none'}}>
            <li>Collaborated with a team of 4 cross-platform developers using Agile methodologies on the “STYLiSH” E-commerce app; iterated UX/UI by 60% performance and reduced crash rates by 40% through unit testing and optimization, resulting in a 43% increase in 24 positive user reviews.</li>
            <li>Developed iOS object oriented programming projects using Swift. Cooperated with Android, Back-End and Front-End teams through Scrum and agile develop mode</li>
            </div>
            </div>

            <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('experience-4')}>
            <span>Asscoiate Product Owner at Atom Health Corp.</span>
             <span className="resume-item-subheader">
             (Taipei, Taiwan) 2021
             {/* <MdArrowOutward className="ml-1" /> */}
             </span>
            </div>
            <div className="resume-item-content my-2" style={{display: openItems['experience-4'] ? 'block' : 'none'}}>
            <li >Led development and patented medical devices, proven by the FDA. Negotiate with the 2 biggest medical manufacturing factories between China and Taiwan, contributing 67% of annual revenue during Covid.</li>
            <li>Drove data-driven marketing strategies through Shopify, improving conversion rates by 60% and U.S. mask sales by 46% during the pandemic through redesigning products’ ads and packaging.</li>
            </div>
            </div>
            </div>
        </div>

      </section>  

      <section className='skillSection w-full md:h-[60vh]'>
        <div className='flex flex-col md:flex-row h-full'>
          <div className='w-full py-32 md:w-1/2 p-p-gap bg-stone-300 flex flex-col justify-center'>
            <h2 className='heading-2-custom pb-4'>Innovative Skills</h2>
            <p className='heading-5-custom pr-2 md:pr-20 pt-10'>
            I integrate front-end technologies like React.js and Next.js with back-end systems using Node.js, Flask, and Firebase, while leveraging AI to enhance user experiences and automate processes. Combining data-driven insights with intuitive design, I deliver scalable, innovative solutions that anticipate user needs and solve challenges efficiently.
            </p>
          </div>
          <div className='w-full md:w-1/2 bg-stone-900 md:bg-stone-800 resume-item-subheader flex items-center justify-center p-p-gap'>
            <div className='skill-icons-container overflow-x-hidden md:overflow-x-visible h-32 md:h-auto w-full'>
              <div className='flex md:grid grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6 md:p-4 py-10 animate-carousel md:animate-none'>
                {/* 小屏幕：重复渲染图标以实现无限滚动 */}
                <div className='flex md:hidden'>
                  {[...skillIcons, ...skillIcons].map((icon, index) => (
                    <div key={`mobile-${index}`} className='flex-shrink-0 flex items-center justify-center p-2'>
                      <img src={icon} alt={`Skill ${index % skillIcons.length + 1}`} className='w-10 h-10' />
                    </div>
                  ))}
                </div>
                
                {/* 大屏幕：只渲染一次图标 */}
                {skillIcons.map((icon, index) => (
                  <div key={`desktop-${index}`} className='hidden md:flex items-center justify-center p-2 md:p-6 lg:p-10'>
                    <img src={icon} alt={`Skill ${index + 1}`} className='md:w-10 md:h-10' />
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