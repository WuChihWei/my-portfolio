'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { MdOutlineDesignServices, MdOutlineComputer, MdOutlineBrush } from 'react-icons/md';
import { FiTool } from "react-icons/fi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaLinkedin, FaGithub, FaRegPlayCircle, FaRegStopCircle } from 'react-icons/fa';
import { IoLogoBehance } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { LuArrowUpRight } from "react-icons/lu";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Fragment } from 'react';
import { useRouter } from 'next/navigation';
import Player from '@vimeo/player';
import Link from 'next/link'; // 確保在文件頂部導入 Link
import { FaAnglesDown } from "react-icons/fa6";
import { FaArrowAltCircleDown } from "react-icons/fa";
// 導入追蹤功能
import useTrackingEvents from '../hooks/useTrackingEvents';
import TrackingEvents from '../lib/trackingEvents';

const skillIcons = [
  { icon: '/skill-1.png', name: 'After Effect' },
  { icon: '/skill-2.png', name: 'Next.js' },
  { icon: '/skill-3.png', name: 'React' },
  { icon: '/skill-4.png', name: 'Cursor' },
  { icon: '/skill-5.png', name: 'Python' },
  { icon: '/skill-6.png', name: 'HTML' },
  { icon: '/skill-7.png', name: 'CSS' },
  { icon: '/skill-8.png', name: 'Javascript' },
  { icon: '/skill-9.png', name: 'Figma' },
  { icon: '/skill-10.png', name: 'Firebase' },
  { icon: '/skill-11.png', name: 'Trello' },
  { icon: '/skill-12.png', name: 'Xcode' }
];

const projects = [
  { id: 'project-1', videoId: 1023939208, name:'' }, // 假 ID
  { id: 'project-2', videoId: 1023732739, name:'davincin' },
  { id: 'project-3', videoId: 1023720383, name:'hommap' }, 
  { id: 'project-4', videoId: 1023690918, name:'superfake' },
  { id: 'project-5', videoId: 1023664411, name:'comgora' },
  { id: 'project-6', videoId: 1023686732, name:'' },
  { id: 'project-7', videoId: 0, name:'' },
  { id: 'project-8', videoId: 0, name:'bumbleRedesign' }
  // 可以根據需要添加更多項目
];

export default function Home() {
  const [projectsData, setProjectsData] = useState(null);
  const router = useRouter();
  const [isVideoReady, setIsVideoReady] = useState({});
  const [hoverProjects, setHoverProjects] = useState({});
  const playerRefs = useRef({});
  const carouselRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState({});
  const [showPopup, setShowPopup] = useState(true);
  
  // 初始化追蹤功能
  const { trackProjectClick, trackVideoInteraction, trackSocialClick } = useTrackingEvents();

  // 頁面載入追蹤
  useEffect(() => {
    TrackingEvents.trackPageView('homepage');
  }, []);

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

  useEffect(() => {
    const initPlayers = () => {
      projects.forEach(project => {
        const playerElement = document.getElementById(`vimeo-player-${project.id}`);
        if (playerElement && !playerRefs.current[project.id]) {
          playerElement.classList.add('vimeo-wrapper');
          
          playerRefs.current[project.id] = new Player(playerElement, {
            id: project.videoId,
            responsive: true,
            autopause: false,
            background: true,
            muted: true,
            loop: true,
            autoplay: false
          });

          playerRefs.current[project.id].ready().then(() => {
            playerRefs.current[project.id].setVolume(0);
            setIsVideoReady(prev => ({ ...prev, [project.id]: true }));
            
            const iframe = playerElement.querySelector('iframe');
            if (iframe) {
              iframe.style.width = '100%';
              iframe.style.height = '100%';
              iframe.style.backgroundColor = '#000000';
            }
          }).catch(error => {
            console.error(`Error initializing player for ${project.id}:`, error);
          });
        }
      });
    };

    initPlayers();

    return () => {
      projects.forEach(project => {
        if (playerRefs.current[project.id]) {
          playerRefs.current[project.id].destroy();
          delete playerRefs.current[project.id];
        }
      });
    };
  }, []);

  const [openItems, setOpenItems] = useState({
    'project-4': false,
    'project-5': false,
    'project-6': false,
    // ... 其他項目
  });

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleProjectMouseEnter = useCallback(async (projectId) => {
    if (!isPlaying[projectId]) {
      try {
        setHoverProjects(prev => ({ ...prev, [projectId]: true }));
        if (playerRefs.current[projectId] && isVideoReady[projectId]) {
          await playerRefs.current[projectId].play();
        }
      } catch (error) {
        console.error(`Error playing video on hover for ${projectId}:`, error);
      }
    }
  }, [isVideoReady, isPlaying]);

  const handleProjectMouseLeave = useCallback(async (projectId) => {
    if (!isPlaying[projectId]) {
      try {
        setHoverProjects(prev => ({ ...prev, [projectId]: false }));
        if (playerRefs.current[projectId] && isVideoReady[projectId]) {
          await playerRefs.current[projectId].pause();
        }
      } catch (error) {
        console.error(`Error pausing video on leave for ${projectId}:`, error);
      }
    }
  }, [isVideoReady, isPlaying]);

  const handlePlayClick = useCallback(async (projectId) => {
    try {
      setIsPlaying(prev => {
        const newState = { ...prev };
        // 暫停所有其他影片
        Object.keys(newState).forEach(key => {
          if (key !== projectId) {
            newState[key] = false;
            if (playerRefs.current[key]) {
              playerRefs.current[key].pause().catch(err => {
                console.error(`Error pausing video ${key}:`, err);
              });
            }
          }
        });
        
        // 切換當前影片的播放狀態
        const isNowPlaying = !prev[projectId];
        newState[projectId] = isNowPlaying;
        
        // 追蹤影片互動
        trackVideoInteraction(
          isNowPlaying ? 'play' : 'pause', 
          getProjectName(projectId)
        );
        
        // 使用 Promise 來處理播放/暫停
        if (newState[projectId]) {
          if (playerRefs.current[projectId]) {
            playerRefs.current[projectId].play().catch(err => {
              console.error(`Error playing video ${projectId}:`, err);
              newState[projectId] = false; // 如果播放失敗，恢復狀態
            });
          }
        } else {
          if (playerRefs.current[projectId]) {
            playerRefs.current[projectId].pause().catch(err => {
              console.error(`Error pausing video ${projectId}:`, err);
            });
          }
        }
        
        return newState;
      });
    } catch (error) {
      console.error('Error in handlePlayClick:', error);
    }
  }, []);

  function getSkillName(index) {
    const skillNames = [
      'JavaScript', 'CSS', 'HTML', 'Python', 'Cursor', 'Xcode',
      'Figma', 'Firebase', 'React', 'Next.js', 'Adobe AE', 'Trello'
    ];
    return skillNames[index] || `Skill ${index + 1}`;
  }

  function getProjectName(projectId) {
    const names = {
      'project-1': 'Jordan-Wu.com (Full Stack + UI/UX)',
      'project-2': 'Davincin (Full Stack + UI/UX)',
      'project-3': 'Hommap (Full Stack + UI/UX)',
      'project-4': 'Superfake (Full Stack + UI/UX)',
      'project-5': 'Comgora (PM + UI/UX)',
      'project-6': 'Naturian (PM + Full Stack + UI/UX)',
      'project-7': 'AI Accessibility Tool (UI/UX + Frontend)',
      'project-8': 'Redesign Bumble (UI/UX + Strategy)'
    };
    return names[projectId] || 'Unknown Project';
  }

  function getProjectDescription(projectId) {
    const descriptions = {
      'project-1': 'Product Manager + Full Stack Web Developer. Custom-built. There is no third-party UI component library. able to update information.',
      'project-2': 'Product Manager + Full Stack Web Developer. Developed CRM tools for the AI-powered knowledge influencers, including automated client management, personalized AI assistants, and automated reporting.',
      'project-3': 'Product Manager + Full Stack Web Developer. Worked on developing a data-driven platform aimed at improving indoor living conditions by addressing home allergy issues.',
      'project-4': 'Product Manager + Full Stack Web Developer. Developed key features with using React.js, Next.js, and Tailwind CSS.',
      'project-5': 'Product Manager + UI/UX Designer. AI-powered contract app for remote workers. Developed cross-platform app with Flutter.',
      'project-6': 'Full Stack iOS Developer. A social app for people who want to live a more natural life and explore themselves.',
      'project-7': 'Thesis Project. Adaptive Web Design for Aging Eyes: An AI-Driven Approach.',
      'project-8': 'UI/UX + Strategy. Data-Driven Profile Optimization & Tailored Icebreakers for Bumble.'

    };
    return descriptions[projectId] || 'No description available.';
  }

  function getProjectSubtitle(projectId) {
    const subtitles = {
      'project-1': 'What you are reading now. No webflow, Squarespace, Wix... coded by myself. (3-weeks Project)',
      'project-2': 'AI CRM for Knowledge Workers Engaging and Analyzing. (3-weeks Project)',
      'project-3': 'Solve your home allergy issues with data-driven interior design. (3-weeks Project)',
      'project-4': 'Discover, Create, and Share AI-Driven Inspiration. (3-weeks Project)',
      'project-5': 'AI contract generator for small business. (2-months Project)',
      'project-6': 'An iOS App for people who want to live a more natural life. (5-weeks Project)',
      'project-7': 'Adaptive Web Design for Aging Eyes: An AI-Driven Approach (6-weeks Project)',
      'project-8': 'Data-Driven Profile Optimization & Tailored Icebreakers for Bumble. (1 week Project)'
    };
    return subtitles[projectId] || '';
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false); // 2秒後關閉彈出窗口
    }, 1500);

    return () => clearTimeout(timer); // 清除計時器
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='home-container h-auto'>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
            <dotlottie-player 
              src="https://lottie.host/4ff342c3-c8ff-481b-b59a-87c7e623b90f/eznxhoiuNf.lottie" 
              background="transparent" 
              speed="1" 
              style={{ width: '100px', height: '100px' }} 
              loop 
              autoplay>
            </dotlottie-player>
          </div>
        </div>
      )}
      <div className="pt-10 p-p-gap items-center bg-white" >
      <div className="p-4 md:p-10 home-cover gap-4 h-auto md:h-[calc(100vh-80px)] flex flex-col md:flex-row justify-items-center items-center bg-blue-600 rounded-3xl" >
        <div className="home-content-left md:w-1/2 flex flex-col justify-items-center text-left">
          <div className="flex flex-col flex-grow md:mt-2  text-white">
            <div className="pt-6 md:pr-0 md:py-0"> {/* 添加 py-8 用於小螢幕 */}
             
              <div className='rounded-ful'>
                <a
                  href="https://www.linkedin.com/in/jordanwu-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-item-subheader text-white hover:text-blue-800 transition-colors duration-300"
                  onClick={() => trackSocialClick('LinkedIn', 'https://www.linkedin.com/in/jordanwu-tech/')}
                >
                <FaLinkedin className="mb-2" size={40}/> 
                </a>
                </div>

              <h1 className=" pr-6  heading-1-custom">
              Business-driven. AI-enabled. Every product here was built from insight to launch by Jordan Wu.
              </h1>
              <div className="py-2 md:py-0 mr-0 md:mr-10">
              <h4 className='heading-4-custom mr-12 pb-4'>
              {/* Delivering digital solutions through design thinking, strategy to coding with AI-power.<br />
              Check my 3-weeks projects in the menu. */}
              </h4>
              <div className="flex flex-row space-x-2 md:space-x-4 mt-0 md:pt-0 justify-items-center items-center">
            
                <div className='text-white bg-stone-900 p-2 px-4 rounded-full border-2'>
                <a
                  href="https://github.com/WuChihWei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-item-subheader text-white hover:text-gray-600 transition-colors duration-300"
                  onClick={() => trackSocialClick('GitHub', 'https://github.com/WuChihWei')}
                >
                  <FaGithub className="mr-4 text-m" />
                  <p className="mr-2 text-m">GitHub</p>
                  {/* <MdArrowOutward className="ml-2 md:ml-4 text-base" /> */}
                </a>
                </div>
                <div className='text-white p-2 px-4 rounded-full border-2'>
                <a
                  href="https://www.behance.net/jordanwu-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-item-subheader text-white hover:text-stone-800 transition-colors duration-300"
                  onClick={() => trackSocialClick('Behance', 'https://www.behance.net/jordanwu-tech')}
                >
                  <IoLogoBehance className="mr-2 text-m" />
                  <p className="mr-2 text-m">Behance</p>                  
                  {/* <MdArrowOutward className="ml-2 md:ml-4 text-base" /> */}
                </a>
                </div>
              </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="h-[calc(40vh)] md:h-[calc(50vh)] lg:md:h-[calc(70vh)] w-full md:w-2/3 flex flex-col overflow-hidden rounded-3xl bg-stone-200">
         <div className="max-md:w-full w-full h-[calc(80vh)] md:h-[calc(80vh)] flex flex-col overflow-hidden rounded-3xl">
          <div
            style={{
              position: "relative",
              height: "100%",
              overflow: "hidden",
              borderRadius: "1.5rem"
            }}
            className="rounded-3xl"
          >
            <iframe
              src="https://player.vimeo.com/video/1032796335?badge=0&autopause=0&background=1&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "auto",
                height: "100%",
                minWidth: "100%",
                transform: "translate(-50%, -50%) scale(1.4)",
                objectFit: "cover",
                borderRadius: "inherit" // Ensures the iframe respects the parent's border-radius
              }}
              title="demo_seek_job_jordan Wu"
            />
          </div>
  </div>
      </div>

      </div>
      </div>
      {/* Add My Expertise section */}
    <section className="py-10 p-p-gap">
      <div className="  rounded-3xl">
        <div className="expertise-grid grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 md:gap-16">
                        <div className="h-auto expertise-item bg-blue-800 py-4 rounded-3xl">
                              <div className="gap-2 max-md:w-full w-full h-[calc(40vh)]  md:h-[calc(50vh)] flex flex-col overflow-hidden justify-center items-center">
                                <div className="h-full image-scroll-container flex flex-row overflow-hidden">
                                  {[...Array(12)].map((_, index) => (
                                    <img 
                                      key={index} 
                                      src={`/project-${index + 1}.png`} 
                                      alt={`Project ${index + 1}`} 
                                      className='h-[100%] w-[80%] flex-shrink-0'
                                      style={{ objectFit: 'cover' }}
                                    />
                                  ))}
                                </div>
                              </div>
                        </div>

    <div className="bg-blue-400 p-6 rounded-3xl flex flex-col justify-between">
    <div className='h-auto'>
    <div className='flex flex-row items-center mb-8'>
    <h4 className="heading-3-custom text-white pr-2">End-to-end Projects</h4>
    <FaArrowAltCircleDown className="mr-2 heading-3-custom text-stone-50 cursor-pointer" onClick={() => scrollToSection('end-to-end-projects')} />
    </div>
    {/* <p className="mr-2 text-m">Behance</p>      */}
    <p className="heading-4-custom text-white h-auto">
    3-week projects  managing and conducted an MVP, from strategic planning to coding and design, within a tight deadline.    
    </p>
    </div>
    <div className="flex flex-wrap gap-4 mt-2 font-medium">
      <span className="bg-white text-blue-400 py-2 px-3 rounded-full text-sm ">Frontend</span>
      <span className="bg-white text-blue-400 py-2 px-3  rounded-full text-sm">React</span>
      <span className="bg-white text-blue-400 py-2 px-3  rounded-full text-sm">Firebase</span>
      <span className="bg-white text-blue-400 py-2 px-3  rounded-full text-sm">Next.js</span>
      <span className="bg-white text-blue-400 py-2 px-3  rounded-full text-sm">UIUX</span>
      <span className="bg-white text-blue-400  py-2 px-3  rounded-full text-sm">Figma</span>
      <span className="bg-white text-blue-400 py-2 px-3  rounded-full text-sm">Branding</span>
      <span className="bg-white text-blue-400  py-2 px-3  rounded-full text-sm">Product Management</span>
    </div>
    </div>

    <div className="bg-stone-400 p-6 rounded-3xl flex flex-col justify-between">
    <div className=''>
    <div className='flex flex-row items-center mb-8'>
    <h4 className="heading-3-custom pr-4 text-white">User Researches</h4>
    <FaArrowAltCircleDown className="mr-2 heading-3-custom text-stone-50 cursor-pointer" onClick={() => scrollToSection('user-researches')} />
    </div>
    <span className="heading-4-custom text-white">
    Highlighting the digital product research process across C2C, B2B, medical, and accessibility domains    
    </span>
    </div>
    <div className="flex flex-wrap gap-4 mt-2 font-medium">
    <span className="bg-white text-stone-400 py-2 px-3 rounded-full text-sm">UIUX</span>
      <span className="bg-white text-stone-400 py-2 px-3  rounded-full text-sm">Figma</span>
      <span className="bg-white text-stone-400 py-2 px-3  rounded-full text-sm">Miro</span>
      <span className="bg-white text-stone-400 py-2 px-3  rounded-full text-sm">User Research</span>
      <span className="bg-white text-stone-400 py-2 px-3  rounded-full text-sm">Affinity Diagram</span>
      <span className="bg-white text-stone-400  py-2 px-3  rounded-full text-sm">User Interview</span>
    </div>
    </div>
          </div>
        </div>
      </section>

      {/* After the home cover section */}

      {/* <h1 className='heading-2-custom mb-10'>Projects</h1> */}
      <section className="resume-section p-p-gap">
        <div className="resume-container h-auto">
          
          <div className='title-contatiner p-2 py-20 bg-stone-100 md:p-10 ls:p-40 rounded-3xl'>
          <h1 id="end-to-end-projects" className='heading-2-custom text-stone-800'>End-to-end Projects</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-40 ls:gap-x-20 gap-y-10 '>
              {projects.filter(project => project.id !== 'project-5' && project.id !== 'project-7'  && project.id !== 'project-8').map((project) => (
                <div key={project.id} className="resume-item w-full">
                  <div className="resume-item-header flex flex-col place-items-start w-full">
                    <div 
                      className="flex w-full h-full justify-center items-center bg-black rounded-3xl mb-4 resume-item-image-container aspect-[4/3]" 
                      style={{ position: 'relative' }}
                      onMouseEnter={() => handleProjectMouseEnter(project.id)}
                      onMouseLeave={() => handleProjectMouseLeave(project.id)}
                    >
                      {(project.id === 'project-2' || project.id === 'project-3' || project.id === 'project-4') && (
                        <div 
                          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                          onClick={(e) => {
                            e.stopPropagation();
                            // 追蹤作品卡片點擊
                            trackProjectClick(getProjectName(project.id), project.id);
                            router.push(`/projects/${project.name}`);
                          }}
                        >
                          <LuArrowUpRight 
                            size={24} 
                            className="text-black"
                          />
                        </div>
                      )}
                      
                      <Link href={`/projects/${project.name}`}>
                        <img 
                          src={`/home_p${project.id.split('-')[1]}.png`}
                          alt={getProjectName(project.id)}
                          className="w-full h-full object-cover rounded-3xl absolute top-0 left-0" 
                          style={{ 
                            opacity: (project.id === 'project-7' || project.id === 'project-8') ? 1 : (hoverProjects[project.id] || isPlaying[project.id] ? 0 : 1),
                            transition: 'opacity 0.3s ease-in-out',
                            display: isPlaying[project.id] ? 'none' : 'block'
                          }}
                        />
                      </Link>

                      {(project.id !== 'project-7' && project.id !== 'project-8') && ( // Only show video player for projects other than project-7 and project-8
                        <div 
                          id={`vimeo-player-${project.id}`}
                          className="w-full h-full absolute top-0 left-0 overflow-hidden" 
                          style={{ 
                            opacity: hoverProjects[project.id] || isPlaying[project.id] ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
                          }}
                        >
                          <div className="w-full h-full">
                            {/* Vimeo player will be inserted here */}
                          </div>
                        </div>
                      )}
                      {openItems[project.id] && (
                        <div className="resume-item-overlay open absolute top-0 left-0 w-full h-full ">
                          <p className="resume-item-description">{getProjectDescription(project.id)}</p>
                        </div>
                      )}
                    </div>
                    <div className='flex flex-col place-items-start w-full'>
                      <div className="flex items-center space-x-2">
                        <h3 className='heading-3-custom'>
                          {project.id === 'project-1' || project.id === 'project-6' ? (
                            getProjectName(project.id)
                          ) : (
                            <Link href={`/projects/${project.name}`}>
                              {getProjectName(project.id)}
                            </Link>
                          )}
                        </h3>
                        
                        {(project.id !== 'project-7' && project.id !== 'project-8') && ( // Only show play icon for projects other than project-7 and project-8
                          isPlaying[project.id] ? (
                            <FaRegStopCircle 
                              size={22} 
                              className="text-red-500 cursor-pointer transition-colors duration-300 hover:text-red-600"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePlayClick(project.id);
                              }}
                            />
                          ) : (
                            <FaRegPlayCircle 
                              size={22} 
                              className="text-blue-600 cursor-pointer transition-colors duration-300 hover:text-blue-900"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePlayClick(project.id);
                              }}
                            />
                          )
                        )}
                      </div>
                      <div className="flex">
                        <div>
                          <IoMdInformationCircleOutline 
                            size={22} 
                            className="text-black cursor-pointer hover:text-blue-600 transition-colors duration-300" 
                            onClick={() => toggleItem(project.id)}
                          />
                        </div>
                        <div>
                          <p className='decription-2-custom pl-2'>{getProjectSubtitle(project.id)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>

        <div className="resume-container pt-10 h-auto">
          
          <div className='title-contatiner p-2 py-20 bg-stone-400 md:p-10 ls:p-40 rounded-3xl'>
          <h1 id="user-researches" className='heading-2-custom text-white'>User Researches</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-40 ls:gap-x-20 gap-y-10'>
              {projects.filter(project => project.id === 'project-5' || project.id === 'project-7' || project.id === 'project-8').map((project) => (
                <div key={project.id} className="resume-item w-full">
                  <div className="resume-item-header flex flex-col place-items-start w-full">
                    <div 
                      className="flex w-full h-full justify-center items-center bg-black rounded-3xl mb-4 resume-item-image-container aspect-[4/3]" 
                      style={{ position: 'relative' }}
                      onMouseEnter={() => handleProjectMouseEnter(project.id)}
                      onMouseLeave={() => handleProjectMouseLeave(project.id)}
                    >
                      {(project.id === 'project-2' || project.id === 'project-3' || project.id === 'project-4') && (
                        <div 
                          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/longProjects/${project.name}`);
                          }}
                        >
                          <LuArrowUpRight 
                            size={24} 
                            className="text-white"
                          />
                        </div>
                      )}
                      
                      <Link href={(project.id === 'project-7' || project.id === 'project-8') ? `/longProjects/${project.id === 'project-7' ? 'accessibility' : project.name}` : `/longProjects/${project.name}`}>
                      <img 
                        src={`/home_p${project.id.split('-')[1]}.png`}
                        alt={getProjectName(project.id)}
                        className="w-full h-full object-cover rounded-3xl absolute top-0 left-0" 
                        style={{ 
                          opacity: (project.id === 'project-7' || project.id === 'project-8') ? 1 : (hoverProjects[project.id] || isPlaying[project.id] ? 0 : 1),
                          transition: 'opacity 0.3s ease-in-out',
                          display: isPlaying[project.id] ? 'none' : 'block'
                        }}
                      />
                    </Link>

                      {(project.id !== 'project-7' && project.id !== 'project-8') && ( // Only show video player for projects other than project-7 and project-8
                        <div 
                          id={`vimeo-player-${project.id}`}
                          className="w-full h-full absolute top-0 left-0 overflow-hidden" 
                          style={{ 
                            opacity: hoverProjects[project.id] || isPlaying[project.id] ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
                          }}
                        >
                          <div className="w-full h-full">
                            {/* Vimeo player will be inserted here */}
                          </div>
                        </div>
                      )}
                      {openItems[project.id] && (
                        <div className="resume-item-overlay open absolute top-0 left-0 w-full h-full ">
                          <p className="resume-item-description text-white">{getProjectDescription(project.id)}</p>
                        </div>
                      )}
                    </div>
                    <div className='flex flex-col place-items-start w-full'>
                      <div className="flex items-center space-x-2">
                        <h3 className='heading-3-custom text-white'>
                          {project.id === 'project-1' || project.id === 'project-6' ? (
                            getProjectName(project.id)
                          ) : (
                            <Link href={(project.id === 'project-7' || project.id === 'project-8') ? `/longProjects/${project.id === 'project-7' ? 'accessibility' : project.name}` : `/longProjects/${project.name}`}>
                              {getProjectName(project.id)}
                            </Link>
                          )}
                        </h3>
                                  
                        {(project.id !== 'project-7' && project.id !== 'project-8') && ( // Only show play icon for projects other than project-7 and project-8
                          isPlaying[project.id] ? (
                            <FaRegStopCircle 
                              size={22} 
                              className="text-red-500 cursor-pointer transition-colors duration-300 hover:text-red-600"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePlayClick(project.id);
                              }}
                            />
                          ) : (
                            <FaRegPlayCircle 
                              size={22} 
                              className="text-blue-600 cursor-pointer transition-colors duration-300 hover:text-blue-900"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePlayClick(project.id);
                              }}
                            />
                          )
                        )}
                      </div>
                      <div className="flex">
                        <div>
                          <IoMdInformationCircleOutline 
                            size={22} 
                            className="text-white cursor-pointer hover:text-blue-600 transition-colors duration-300" 
                            onClick={() => toggleItem(project.id)}
                          />
                        </div>
                        <div>
                          <p className='decription-2-custom text-white pl-2'>{getProjectSubtitle(project.id)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      {/* </section> */}

      <div  className='md:py-10'>
      <div className='title-container p-4 bg-stone-200 rounded-3xl md:p-10'>
      <h2 className='heading-2-custom'>Work Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
        {/* Comgora */}
        <div className="experience-item py-10 rounded-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className='heading-3-custom text-2xl'>Comgora</h3>
              <p className='text-gray-600'>KTH Innovation Center (Stockholm 2023)</p>
            </div>
            {/* <IoMdInformationCircleOutline 
              size={24} 
              className="text-gray-400 cursor-pointer" 
              onClick={() => toggleItem('experience-1')} 
            /> */}
          </div>
          <hr className="my-4 border-gray-900" />
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Role</p>
              <div className="text-right">
                <p>Founder</p>
                <p>Product Manager</p>
                <p>UI/UX</p>
              </div>
            </div>
            <hr className="my-4 border-gray-400" />
            <div>
              <p className="font-semibold">Key Projects</p>
              <div className="text-right">
                <p>AI Contract App UIUX</p>
                <p>Workflow Optimization</p>
                <p>Business Analysis</p>
              </div>
            </div>
            <hr className="my-4 border-gray-400" />
            <div>
              <p className="font-semibold">Scope</p>
              <div className="text-left space-y-4 pt-2">
                <p>Developed an AI-powered contract app on Flutter, after 20+ interviews</p>
                <p>Managed 7+ team, and Developed with 5 developers in 4 months</p>
                <p>Defined product design systems and design guideline</p>
                <p>Conducted SWOT, STP analysis, Porter’s Five Forces and Customer Journey Mapping analysis. </p>
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
              <h3 className='heading-3-custom text-2xl '>Studs</h3>
              <p className='text-gray-600'>Part Time (Stockholm 2023)</p>
            </div>
            {/* <IoMdInformationCircleOutline 
              size={24} 
              className="text-gray-400 cursor-pointer" 
              onClick={() => toggleItem('experience-2')} 
            /> */}
          </div>
          <hr className="my-4 border-gray-900" />
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Role</p>
              <div className="text-right space-y-1">
                <p>Art Director (UI/UX)</p>
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
              <div className="text-left space-y-4 pt-2">
                <p>Led UI/UX strategies for 25+ companies using A/B testing and KPI analysis</p>
                <p>Improved user engagement by 40% among top graduate users</p>
                <p>Executed agile design strategies for websites and social media</p>
                <p>Increased content views by 60% in 6 months</p>
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
              <h3 className='heading-3-custom text-2xl'>AppWorks</h3>
              <p className='text-gray-600'>Trainee (Taipei 2022)</p>
            </div>
            {/* <IoMdInformationCircleOutline 
              size={24} 
              className="text-gray-400 cursor-pointer" 
              onClick={() => toggleItem('experience-3')} 
            /> */}
          </div>
          <hr className="my-4 border-gray-900" />
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Role</p>
              <div className="text-right space-y-1">
                <p>Frontend Developer</p>
                <p>UI/UX</p>
                <p>Product Manager</p>
              </div>
            </div>
            <hr className="my-4 border-gray-400" />

            <div>
              <p className="font-semibold">Key Projects</p>
              <div className="text-right space-y-1">
                <p>E-commerce Cross-platform App</p>
                <p>Social Platform iOS App</p>

              </div>
              <hr className="my-4 border-gray-400" />

            </div>
            <div>
              <p className="font-semibold">Scope</p>
              <div className="text-left space-y-4 pt-2">
                <p>Built the 'Naturian' app in 5 weeks with UI/UX design in Figma and Swift development</p>
                <p>Coordinated with Android, Back-End, and Front-End teams using Scrum</p>
                <p>Designed and coded two e-commerce and social media apps in 7 weeks</p>
                <p>Enhanced performance by 30% via code refactoring and testing</p>
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
              <h3 className='heading-3-custom text-2xl'>Atom Health Corp.</h3>
              <p className='text-gray-600'>Full Time (Taipei 2021 - 2018)</p>
            </div>
            {/* <IoMdInformationCircleOutline 
              size={24} 
              className="text-gray-400 cursor-pointer" 
              onClick={() => toggleItem('experience-4')} 
            /> */}
          </div>
          <hr className="my-4 border-gray-900" />
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Role</p>
              <div className="text-right space-y-1">
                <p>Associate Product Owner</p>
                <p>R&D Design Engineering</p>
              </div>
            </div>
            <hr className="my-4 border-gray-400" />

            <div>
              <p className="font-semibold">Key Projects</p>
              <div className="text-right space-y-1">
                <p>Urinary Catheter Deisgn</p>
                <p>Nasogestric Tube Deisgn</p>
                <p>Personal Protective Equipment Deisgn</p>
                <p>Blood Pressure IoT Deisgn</p>
                <p>Blood Glucose IoT Deisgn</p>
              </div>
            </div>
            <hr className="my-4 border-gray-400" />

            <div>
              <p className="font-semibold">Scope</p>
              <div className="text-left space-y-4 pt-2">
                <p>Created patent drawings and UI/UX documents aligned with ISO medical standards</p>
                <p>Secured FDA approval for 7 products within 3 months in collaboration with RA and engineers</p>
                <p>Used Amazon and Shopify data for targeted ads and packaging redesigns</p>
                <p>Boosted conversion rates by 50% and increased U.S. mask sales by 40%</p>
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
      {/* </div> */}

      </section>  

      <section className='skillSection w-full py-20  rounded-3xl'>
        <div className='container h-full py-20  bg-stone-700  rounded-full'>
          <div className='h-1/2 flex flex-col justify-center'>         
          <h2 className='heading-2-custom text-white py-8  text-center'>Key Skills</h2>
          <p className='heading-4-custom text-white mb-12 px-20 text-center'>
          I build scalable digital products by combining React, Next.js, Node.js, and AI—enhancing user experience through smart automation and data-driven design.
          </p>
          </div>
          <div className='skill-carousel h-1/2 overflow-hidden items-center justify-center'>
            <div 
              ref={carouselRef}
              className='flex flex-col'
              style={{ width: `${skillIcons.length * 176}px`, height: '200px' }}
            >
              <div className='flex animate-carousel-ltr'>
                {[...Array(2)].map((_, setIndex) => (
                  <Fragment key={setIndex}>
                    {skillIcons.map((skill, index) => (
                      <div key={`${setIndex}-${index}`} className='skill-icon-container'>
                        <div className='skill-icon-inner'>
                          <img src={skill.icon} alt={skill.name} className='skill-icon' />
                          <p className='skill-name'>{skill.name}</p>
                        </div>
                      </div>
                    ))}
                  </Fragment>
                ))}
              </div>
              <div className='flex mt-6 animate-carousel-rtl'>
                {[...Array(2)].map((_, setIndex) => (
                  <Fragment key={setIndex}>
                    {skillIcons.map((skill, index) => (
                      <div key={`bottom-${setIndex}-${index}`} className='skill-icon-container'>
                        <div className='skill-icon-inner'>
                          <img src={skill.icon} alt={skill.name} className='skill-icon' />
                          <p className='skill-name'>{skill.name}</p>
                        </div>
                      </div>
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
