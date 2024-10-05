'use client';

import { useState, useEffect } from 'react';
import { MdOutlineDesignServices, MdOutlineComputer, MdOutlineBrush } from 'react-icons/md';
import { FiTool } from "react-icons/fi";

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
        <div className="home-content-left md:w-1/2 flex flex-col justify-items-center text-left">
          <div className="flex flex-col flex-grow p-p-gap mt-4 md:mt-2  text-white">
            <div className="mb-0"> {/* 添加 py-8 用於小螢幕 */}
              <h1 className="heading-1-custom">
              End-to-End Digital Product Enthusiast
              </h1>
              <div className="py-2 md:py-0 mr-0 md:mr-10">
              <h4 className='heading-4-custom'>
              One Builder, One Mission.<br />
              Delivering digital solutions through design thinking, strategy to coding with AI-power.
              </h4>
              <div className="flex flex-row space-x-4 mt-0 md:pt-2 justify-items-center items-center">
                <div className='bg-white p-2 px-4 rounded-full'>
                <a
                  href="https://www.linkedin.com/in/jordanwu-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-item-subheader text-black hover:text-blue-800 transition-colors duration-300"
                >
                  <FaLinkedin className="mr-2" />
                  LinkedIn
                  <MdArrowOutward className="ml-10 text-sl" />
                </a>
                </div>
                <div className='text-white bg-black p-2 px-4 rounded-full border-2'>
                <a
                  href="https://github.com/WuChihWei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-item-subheader text-white hover:text-gray-600 transition-colors duration-300"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                  <MdArrowOutward className="ml-10 text-sl" />
                </a>
                </div>
              </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="p-10 gap-2 max-md:w-full w-full h-[calc(50vh)] md:h-[calc(100vh-80px)] md:w-1/2 flex flex-col overflow-hidden">
          <div className="image-scroll-container top flex-grow space-y-0 md:space-y-0"> {/* Added flex-grow and space-y classes */}
            {[...Array(6)].map((_, index) => (
              <img key={index} src={`/project-${index + 1}.png`} alt={`Project ${index + 1}`} />
            ))}
            {[...Array(6)].map((_, index) => (
              <img key={index + 6} src={`/project-${index + 1}.png`} alt={`Project ${index + 1}`} />
            ))}
          </div>
          <div className="image-scroll-container bottom flex-grow space-y-0 md:space-y-0"> {/* Added flex-grow and space-y classes */}
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
        <div className="expertise-grid mx-auto flex flex-wrap justify-between gap-y-4 gap-10 sm:gap-12">
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="mb-2">
              <MdOutlineDesignServices size={24} className="text-black" />
            </div>
            <h4 className="heading-3-custom">Strategy & Direction</h4>
            <p className="decription-1-custom">Turn market insights into clear, actionable product strategies, guiding projects from concept to launch while aligning business goals with user needs.</p>
          </div>
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="mb-2">
              <MdOutlineComputer size={24} className="text-black" />
            </div>
            <h4 className="heading-3-custom">Technology</h4>
            <p className="decription-1-custom ">Integrate the latest technologies and development practices, ensuring seamless collaboration between design and engineering for scalable, innovative solutions.</p>
          </div>
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="mb-2">
              <MdOutlineBrush size={24} className="text-black" />
            </div>
            <h4 className="heading-3-custom">UI & UX Design</h4>
            <p className="decription-1-custom ">Craft intuitive, user-centered designs that enhance usability across devices, creating engaging and consistent experiences that meet both user and business goals.</p>
          </div>
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className=" mb-2">
              <FiTool size={24} className="text-black" />
            </div>
            <h4 className="heading-3-custom">Key Skills</h4>
            <p className="decription-1-custom ">Experienced with tools like Jira, Trello, Figma, and familiar with managing product lifecycles. Comfortable conducting market research, competitive analysis, and working within Agile frameworks.</p>
          </div>
        </div>
        </div>
      </section>

      {/* After the home cover section */}
      <section className="resume-section p-p-gap py-10 bg-stone-100">
       
        <div className="resume-container h-auto">
         
          <div className='title-contatiner py-10'>
             <h2 className='heading-2-custom'> Digital Projects</h2>

             <div className="resume-item">
          <div className="resume-item-header" onClick={() => toggleItem('project-1')}>
          <span>1B1M Portfolio</span>
             <span className="resume-item-subheader">
             2024
             <MdArrowOutward className="ml-1" />
             </span>
            </div>
          <div className="resume-item-content" style={{display: openItems['project-1'] ? 'block' : 'none'}}>
            <li>Product Manager + Full Stack Web Developer. Custom-built. There is no third-party UI component library. able to update information.</li>
          </div>
          </div>
          
          <div className="resume-item">
          <div className="resume-item-header" onClick={() => toggleItem('project-2')}>
             <span>Superfake</span>
             <span className="resume-item-subheader">
             2024
             <MdArrowOutward className="ml-1" />
             </span>
            </div>
          <div className="resume-item-content" style={{display: openItems['project-2'] ? 'block' : 'none'}}>
            <li>Product Manager + Full Stack Web Developer. Developed key features with using React.js, Next.js, and Tailwind CSS. On the back-end, I integrated Firebase for real-time data handling and user management. I also implemented API integrations, including NewsAPI and SerpAPI, to provide real-time content updates. Additionally, I focused on enhancing user engagement with features like daily challenges, commenting, and liking systems.</li>
          </div>
          </div>

          <div className="resume-item" onClick={() => toggleItem('project-3')}>
          <div className="resume-item-header">
          <span>Davincin</span>
             <span className="resume-item-subheader">
             2024
             <MdArrowOutward className="ml-1" />
             </span>
            </div>
          <div className="resume-item-content" style={{display: openItems['project-3'] ? 'block' : 'none'}}>
            <li>Product Manager +Full Stack Web Developer. Developed CRM tools for the AI-powered knowledge influencers, including automated client management, personalized AI assistants, and automated reporting. I worked on both front-end and back-end development, utilizing React.js, Next.js, and TypeScript for the user interface and Node.js, Flask, and Firebase for back-end services. I integrated OpenAI's GPT models and LangChain to enable advanced AI functionalities and used Pinecone for vector similarity searches. Additionally, I deployed the application on Vercel and Google Cloud Platform to ensure scalability.</li>
          </div>
          </div>

          <div className="resume-item" onClick={() => toggleItem('project-4')}>
          <div className="resume-item-header">
          <span>Hommap</span>
             <span className="resume-item-subheader">
             2024
             <MdArrowOutward className="ml-1" />
             </span>
            </div>
          <div className="resume-item-content" style={{display: openItems['project-4'] ? 'block' : 'none'}}>
            <li>Product Manager +Full Stack Web Developer. Worked on developing a data-driven platform aimed at improving indoor living conditions by addressing home allergy issues. Leveraging AI and data analysis, the platform provides personalized interior design recommendations to reduce allergens while optimizing air quality and home energy management.</li>
          </div>
          </div>

          <div className="resume-item" onClick={() => toggleItem('project-5')}>
          <div className="resume-item-header">
          <span>Comgora</span>
             <span className="resume-item-subheader">
             2023
             <MdArrowOutward className="ml-1" />
             </span>
            </div>
          <div className="resume-item-content my-1" style={{display: openItems['project-5'] ? 'block' : 'none'}}>
            <li>Product Manager + UI/UX Designer. AI-powered contract app for remote workers. Developed cross-platform app with Flutter. </li>
          </div>
          </div>

          <div className="resume-item" onClick={() => toggleItem('project-7')}>
          <div className="resume-item-header">
          <span>What2Pack</span>
             <span className="resume-item-subheader">
             2023
             <MdArrowOutward className="ml-1" />
             </span>
            </div>
          <div className="resume-item-content" style={{display: openItems['project-7'] ? 'block' : 'none'}}>
            <li>Frontend Developer of Four. A tool for travelers to pack their luggage depend on the destination weather.</li>
          </div>
          </div>

          <div className="resume-item" onClick={() => toggleItem('project-6')}>
          <div className="resume-item-header">
          <span>Naturian</span>
             <span className="resume-item-subheader">
             2022
             <MdArrowOutward className="ml-1" />
             </span>
            </div>
          <div className="resume-item-content" style={{display: openItems['project-6'] ? 'block' : 'none'}}>
            <li>Full Stack iOS Developer. A social app for people who want to live a more natural life and explore themselves.</li>
          </div>
          </div>
          </div>


          <div className='title-contatiner py-10'>
          <h2 className='heading-2-custom'>Experience</h2>

          <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('experience-1')}>
            <span>Cofounder & Product Manager at Comgora</span>
             <span className="resume-item-subheader">
             (Stockholm, Sweden) 2023
             <MdArrowOutward className="ml-1" />
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
             <MdArrowOutward className="ml-1" />
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
             <MdArrowOutward className="ml-1" />
             </span>

            </div>
            <div className="resume-item-content my-2" style={{display: openItems['experience-3'] ? 'block' : 'none'}}>
            <li>Collaborated with a team of 4 cross-platform developers using Agile methodologies on the “STYLiSH” E-commerce app; iterated UX/UI by 60% performance and reduced crash rates by 40% through unit testing and optimization, resulting in a 43% increase in 24 positive user reviews.</li>
            <li>Developed iOS object oriented programming projects using Swift. Cooperated with Android, Back-End and Front-End teams through Scrum and agile develop mode</li>
            </div>
            </div>

            <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('experience-4')}>
            <span>Product Owner at Atom Health Corp.</span>
             <span className="resume-item-subheader">
             (Taipei, Taiwan) 2021
             <MdArrowOutward className="ml-1" />
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

      <section className='skillSection w-full h-[60vh]'>
        <div className='flex flex-col md:flex-row h-full'>
          <div className='w-full md:w-1/2 p-p-gap bg-stone-300 flex flex-col justify-center'>
            <h2 className='heading-2-custom pb-4'>Innovative Skills</h2>
            <p className='heading-5-custom pr-20 pt-10'>
            From research, and coding to design. Skilled in product strategy, user research, and cross- functional team leadership. Proven ability to manage full product lifecycles using Agile methodologies.
            From research, and coding to design. Skilled in product strategy, user research, and cross- functional team leadership. 
            </p>
          </div>
          <div className='w-full md:w-1/2 bg-stone-800 resume-item-subheader justify-center'>
            <div className=' grid grid-cols-3 sm:grid-cols-4 gap-6 p-4 md:p-4'>
              {skillIcons.map((icon, index) => (
                <div key={index} className='resume-item-subheader justify-center p-8 '>
                  <img src={icon} alt={`Skill ${index + 1}`} className='w-12 h-12' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


{/* <div className='title-contatiner py-4'>
          <h2 className='text-3xl font-bold'>Education</h2>
          <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('education-1')}>
              M.S. of Interactive Media Technology, KTH Royal Institute of Technology - Stockholm, Sweden | 2024
            </div>
            {openItems['education-1'] && (
              <div className="resume-item-content my-2">
                  <li>Dedicated to the Technology Entrepreneurship Program.</li>
                  <li>Specialized in digital product integration and user centered design.</li>
              </div>
            )}
          </div>

          <div className="resume-item ">
            <div className="resume-item-header" onClick={() => toggleItem('education-2')}>
              B.A. of Industrial Product Design, Shih Chen University - Taipei, Taiwan | 2018
            </div>
            {openItems['education-2'] && (
              <div className="resume-item-content my-2">
                  <li>Dedicated to the Design Management Program.</li>
                  <li>Specialized in service demechanical design and design thinking.</li>
              </div>
            )}
          </div>
        </div>   */}

        
          {/* < div className='title-container py-4'>
          <h2 className='text-3xl font-bold'>Achievements</h2>
          <div className="resume-item">
            <div className="resume-item-header-static">
              HIC Team Paper in SMC 2023 proceedings volume | 2023
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header-static">
              1st Place of Accessories Entry - Poltrona Frau Global Award | 2015
            </div>
          </div>
          <div className="resume-item">
            <div className="resume-item-header-static">
              Sustainability Projects Sponsored by National Taiwan Research and Development Institute | 2018
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-header-static">
              Yilan Chair International Design Award | 2017
            </div>
          </div>
          </div> */}
