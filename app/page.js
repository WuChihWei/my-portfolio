'use client';

import { useState } from 'react';
import { MdOutlineDesignServices, MdOutlineComputer, MdOutlineBrush } from 'react-icons/md';
import { FiTool } from "react-icons/fi";

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdArrowOutward } from "react-icons/md";


export default function Home() {
  const [openItems, setOpenItems] = useState({
    'project-1': false,
    'project-2': false,
    'project-3': false,
    'project-4': false,
    'project-5': false,
    'project-6': false,
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
    <div className='home-container h-auto pb-10 bg-gray-100'>
      <div className="home-cover flex flex-col md:flex-row">
        <div className="home-content-left max-md:w-full max-md:h-1/2 w-full h-[calc(30vh-100px)] md:h-[calc(100vh-120px)] md:w-1/3 flex flex-col">
          <div className="flex flex-col flex-grow p-p-gap mt-2">
            <div className="mb-4 py-0"> {/* 添加 py-8 用於小螢幕 */}
              <h1 className="text-4xl font-bold pb-2 md:font-extrabold pr-0 md:text-4xl leading-tight md:pr-10">
              An End-to-End Digital Product Enthusiast
              </h1>
              <div className="pt-4 md:pt-6 mr-0 md:mr-10 mt-2 md:mt-2 ">
              <h5>
              One Builder, One Mission. Delivering end-to-end digital solutions through design thinking, from research and strategy to coding and design with AI-power.
              </h5>
              <div className="flex flex-row space-x-4 mt-2 md:mt-4">
                <a
                  href="https://www.linkedin.com/in/jordanwu-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <FaLinkedin className="mr-2" />
                  LinkedIn
                  <MdArrowOutward className="ml-2 text-sl" />
                </a>
                <a
                  href="https://github.com/WuChihWei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-800 hover:text-gray-600 transition-colors duration-300"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                  <MdArrowOutward className="ml-2 text-sl" />
                </a>
              </div>
              </div>
            </div>
            
          </div>
          
          <div className="mt-auto p-p-gap justify-start"> {/* Key Skills 部分 */}
            <div className="md:block hidden">
              <h2 className="font-semibold mb-6">Key Skills</h2>
              <div className="grid grid-cols-6 gap-2 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-6 justify-start">
                {[...Array(12)].map((_, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      src={`/skill-${index + 1}.png`}
                      alt={`Skill ${index + 1}`}
                      className="w-4 h-4 sm:w-4 sm:h-4 md:w-7 md:h-7 "
                    />
                    <h6 className="mt-1 text-xs sm:text-xs md:text-xs text-center">
                      {getSkillName(index)}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="home-content-right max-md:w-full w-full h-[calc(50vh-100px)] mb-0 md:h-[calc(100vh-100px)] md:w-2/3 flex flex-col"> {/* Added flex flex-col */}
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

      <div className="md:hidden block w-full mt-20 p-p-gap justify-start"> {/* 只在小屏幕显示 */}
  <h2 className="text-3xl font-bold mb-6 justify-start">Key Skills</h2>
  <div className="grid grid-cols-4 gap-4 sm:gap-6">
    {[...Array(12)].map((_, index) => (
      <div key={index} className="flex flex-col items-center">
        <img
          src={`/skill-${index + 1}.png`}
          alt={`Skill ${index + 1}`}
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <h6 className="mt-2 text-xs sm:text-sm text-center text-black font-medium">
          {getSkillName(index)}
        </h6>
      </div>
    ))}
  </div>
</div>

      {/* Add My Expertise section */}
      <section className="expertise-sectionpy-10 mb:py-20 p-p-gap">
        <h2 className="text-3xl font-bold text-left my-12">My Expertise</h2>
        <div className="expertise-grid mx-auto flex flex-wrap justify-between gap-y-8 gap-10 sm:gap-12">
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="bg-white border-2 border-black p-2 mb-4 rounded-full">
              <MdOutlineDesignServices size={34} className="text-black" />
            </div>
            <h4 className="resume-item-header text-xl font-semibold">Strategy & Direction</h4>
            <h6 className="text-sm text-gray-600">Turn market insights into clear, actionable product strategies, guiding projects from concept to launch while aligning business goals with user needs.</h6>
          </div>
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="bg-white border-2 border-black p-2 mb-4 rounded-full">
              <MdOutlineComputer size={34} className="text-black" />
            </div>
            <h4 className="resume-item-header text-xl font-semibold">Technology</h4>
            <h6 className="text-sm text-gray-600">Integrate the latest technologies and development practices, ensuring seamless collaboration between design and engineering for scalable, innovative solutions.</h6>
          </div>
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="bg-white border-2 border-black p-2 mb-4 rounded-full">
              <MdOutlineBrush size={34} className="text-black" />
            </div>
            <h4 className="resume-item-header text-xl font-semibold">UI & UX Design</h4>
            <h6 className="text-sm text-gray-600">Craft intuitive, user-centered designs that enhance usability across devices, creating engaging and consistent experiences that meet both user and business goals.</h6>
          </div>
          <div className="expertise-item w-full sm:w-[calc(100%)] lg:w-[calc(40%)] xl:w-[calc(20%)] flex flex-col items-start text-left">
            <div className="bg-white border-2 border-black p-2 mb-4 rounded-full">
              <FiTool size={34} className="text-black" />
            </div>
            <h4 className="resume-item-header text-xl font-semibold">Key Skills</h4>
            <h6 className="text-sm text-gray-600">Experienced with tools like Jira, Trello, Figma, and familiar with managing product lifecycles. Comfortable conducting market research, competitive analysis, and working within Agile frameworks. Skilled in team collaboration and communication.</h6>
          </div>
        </div>
      </section>

      {/* After the home cover section */}
      <section className="resume-section p-p-gap h-auto ">

        <div className="resume-container h-auto">


          <div className='title-contatiner py-4'>
             <h2 className='text-3xl font-bold'> Digital Product Projects</h2>

             <div className="resume-item">
          <div className="resume-item-header" onClick={() => toggleItem('project-1')}>
            This Portfolio | 2024
            </div>
          <div className="resume-item-content" style={{display: openItems['project-1'] ? 'block' : 'none'}}>
            <li>Product Manager + Full Stack Web Developer. Custom-built. There is no third-party UI component library. able to update information.</li>
          </div>
          </div>
          
          <div className="resume-item">
          <div className="resume-item-header" onClick={() => toggleItem('project-1')}>
            Superfake | 2024
            </div>
          <div className="resume-item-content" style={{display: openItems['project-1'] ? 'block' : 'none'}}>
            <li>Product Manager + Full Stack Web Developer. Developed key features with using React.js, Next.js, and Tailwind CSS. On the back-end, I integrated Firebase for real-time data handling and user management. I also implemented API integrations, including NewsAPI and SerpAPI, to provide real-time content updates. Additionally, I focused on enhancing user engagement with features like daily challenges, commenting, and liking systems.</li>
          </div>
          </div>

          <div className="resume-item" onClick={() => toggleItem('project-2')}>
          <div className="resume-item-header">
            Davincin | 2024
            </div>
          <div className="resume-item-content" style={{display: openItems['project-2'] ? 'block' : 'none'}}>
            <li>Product Manager +Full Stack Web Developer. Developed CRM tools for the AI-powered knowledge influencers, including automated client management, personalized AI assistants, and automated reporting. I worked on both front-end and back-end development, utilizing React.js, Next.js, and TypeScript for the user interface and Node.js, Flask, and Firebase for back-end services. I integrated OpenAI's GPT models and LangChain to enable advanced AI functionalities and used Pinecone for vector similarity searches. Additionally, I deployed the application on Vercel and Google Cloud Platform to ensure scalability.</li>
          </div>
          </div>

          <div className="resume-item" onClick={() => toggleItem('project-3')}>
          <div className="resume-item-header">
            Hommap| 2024
            </div>
          <div className="resume-item-content" style={{display: openItems['project-3'] ? 'block' : 'none'}}>
            <li>Product Manager +Full Stack Web Developer. Worked on developing a data-driven platform aimed at improving indoor living conditions by addressing home allergy issues. Leveraging AI and data analysis, the platform provides personalized interior design recommendations to reduce allergens while optimizing air quality and home energy management.</li>
          </div>
          </div>

          <div className="resume-item" onClick={() => toggleItem('project-4')}>
          <div className="resume-item-header">
            Comgora | 2023
            </div>
          <div className="resume-item-content my-1" style={{display: openItems['project-4'] ? 'block' : 'none'}}>
            <li>Product Manager + UI/UX Designer. AI-powered contract app for remote workers. Developed cross-platform app with Flutter. </li>
          </div>
          </div>

          <div className="resume-item" onClick={() => toggleItem('project-5')}>
          <div className="resume-item-header">
            Naturian  | 2023
            </div>
          <div className="resume-item-content" style={{display: openItems['project-5'] ? 'block' : 'none'}}>
            <li>Full Stack iOS Developer. A social app for people who want to live a more natural life and explore themselves.</li>
          </div>
          </div>

          <div className="resume-item" onClick={() => toggleItem('project-6')}>
          <div className="resume-item-header">
            What2Pack | 2023
            </div>
          <div className="resume-item-content" style={{display: openItems['project-6'] ? 'block' : 'none'}}>
            <li>Frontend Developer. A tool for travelers to pack their luggage depend on the destination weather.</li>
          </div>
          </div>
          </div>


          <div className='title-contatiner py-4'>
          <h2 className='text-3xl font-bold'>Experience</h2>

          <div className="resume-item">

            <div className="resume-item-header" onClick={() => toggleItem('experience-1')}>
            Cofounder & Product Manager at Comgora - Stockholm, Sweden (Nov. 2022 – Sep.2023)
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
            Art Director at Studs - Stockholm, Sweden (Nov. 2022 – Sep.2023)
            </div>
            <div className="resume-item-content my-2" style={{display: openItems['experience-2'] ? 'block' : 'none'}}>
            <li>Managed a team of two designers, guiding the UX strategy of Studs' official website and stakeholder collaboration with over 25 technical companies across Stockholm, Amsterdam, Barcelona, and Greece, enhancing product alignment and cross-cultural partnerships.</li>
            <li>ncreased social media content production by 120%, resulting in a 40% increase in views by implementing data-driven strategies and optimizing user engagement metrics.</li>
            </div>
            </div>

            <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('experience-3')}>
            Trainee at AppWorks School - Taipei, Taiwan (Apr. 2022 - Aug. 2022)
            </div>
            <div className="resume-item-content my-2" style={{display: openItems['experience-3'] ? 'block' : 'none'}}>
            <li>Collaborated with a team of 4 cross-platform developers using Agile methodologies on the “STYLiSH” E-commerce app; iterated UX/UI by 60% performance and reduced crash rates by 40% through unit testing and optimization, resulting in a 43% increase in 24 positive user reviews.</li>
            <li>Developed iOS object oriented programming projects using Swift. Cooperated with Android, Back-End and Front-End teams through Scrum and agile develop mode</li>
            </div>
            </div>

            <div className="resume-item">
            <div className="resume-item-header" onClick={() => toggleItem('experience-4')}>
            Product Owner at Atom Health Corp. - Taipei, Taiwan (May. 2021 - Sep. 2022)
            </div>
            <div className="resume-item-content my-2" style={{display: openItems['experience-4'] ? 'block' : 'none'}}>
            <li >Led development and patented medical devices, proven by the FDA. Negotiate with the 2 biggest medical manufacturing factories between China and Taiwan, contributing 67% of annual revenue during Covid.</li>
            <li>Drove data-driven marketing strategies through Shopify, improving conversion rates by 60% and U.S. mask sales by 46% during the pandemic through redesigning products’ ads and packaging.</li>
            </div>
            </div>
            </div>

          <div className='title-contatiner py-4'>
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
        </div>  

        
          < div className='title-container py-4'>
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
          </div>

        </div>

      </section>  

    </div>
  );
}