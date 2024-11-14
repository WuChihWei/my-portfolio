"use client"; // Add this line at the top to make this a Client Component

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith('/projects/');
  const menuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showCarousel, setShowCarousel] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (projectsOpen) setProjectsOpen(false);
    setShowCarousel(isOpen); // Hide carousel when opening menu, show when closing
  };

  const toggleProjects = (e) => {
    e.stopPropagation(); // 防止事件冒泡到 document
    setProjectsOpen(!projectsOpen);
    setShowCarousel(projectsOpen); // Hide carousel when opening projects, show when closing
  };

  const closeMenu = () => {
    setIsOpen(false);
    setProjectsOpen(false);
    setShowCarousel(true); // Show carousel when closing menu
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Close menu when route changes
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this value as needed
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    closeMenu(); // Close the dropdown after selection
  };

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav className={`navbar ${isScrolled && isProjectPage ? 'scrolled' : ''}`} ref={menuRef}>
      <div className={`navbar-container ${isMobile ? 'mobile' : ''} relative z-50`}>
        <Link href="/" onClick={closeMenu} className="navbar-logo-container">
          <div className={`navbar-logo ${isMobile ? 'mobile' : ''}`}>
            <img
              src="/jordan_wu_logo.png"
              alt="Jordan Wu Logo"
              className={`navbar-logo-img ${isScrolled ? 'rotate-logo' : ''}`}
            />
          </div>
        </Link>
        {isMobile ? (
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? '✕' : '☰'}
          </div>
        ) : (
          <ul className="navbar-items desktop">
            <li>
              <Link href="/" className={`${isActive('/') ? 'font-bold' : ''} whitespace-nowrap`}>
                Jordan Wu
              </Link>
            </li>
            <li className="relative projects-dropdown">
              <button 
                onClick={toggleProjects} 
                className={`focus:outline-none ${isActive('/projects') ? 'font-bold' : ''}`}
              >
                Projects
              </button>
              {projectsOpen && (
                <ul className="projects-list">
                  <li className="project-category font-bold">UI/UX Researches</li>
                  <li><Link href="/longProjects/comgora">Comgora</Link></li>
                  <li className="project-category font-bold">3-weeks MVPs</li>
                  <li><Link href="/projects/davincin">Davincin</Link></li>
                  <li><Link href="/projects/hommap">Hommap</Link></li>
                  <li><Link href="/projects/superfake">Superfake</Link></li>
         
                </ul>
              )}
            </li>
            <li>
              <Link href="/contact" className={isActive('/contact') ? 'font-bold' : ''}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/aboutMe" className={`${isActive('/aboutMe') ? 'font-bold' : ''} whitespace-nowrap`}>
                About Me
              </Link>
            </li>
          </ul>
        )}
        {isMobile && isOpen && (
          <ul className={`navbar-items mobile ${isOpen ? 'open' : ''}`}>
            <li><Link href="/" onClick={closeMenu}>Home</Link></li>
            <li className={`relative projects-dropdown ${projectsOpen ? 'open' : ''}`}>
              <button onClick={toggleProjects}>Projects</button>
              {projectsOpen && (
                <ul className="projects-list">
                  <li className="project-category font-bold">UI/UX Researches</li>
                  <li><Link href="/longProjects/comgora" onClick={closeMenu}>Comgora</Link></li>
                  <li className="project-category font-bold">3-weeks MVPs</li>
                  <li><Link href="/projects/superfake" onClick={closeMenu}>Superfake</Link></li>
                  <li><Link href="/projects/hommap" onClick={closeMenu}>Hommap</Link></li>
                  <li><Link href="/projects/davincin" onClick={closeMenu}>Davincin</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link href="/aboutMe" onClick={closeMenu}>About Me</Link></li>
          </ul>
        )}
      </div>
      {isScrolled && isProjectPage && showCarousel && (
        <div className="introduction-carousel z-40 overflow-x-auto">
          <ul className="flex py-4 whitespace-nowrap">
            <li className="inline-block px-3" onClick={() => handleScrollToSection('introduction')}>↑</li>
            <li className="inline-block px-3" onClick={() => handleScrollToSection('introduction')}>Introduction</li>
            <li className="inline-block px-3" onClick={() => handleScrollToSection('user-story')}>User Story</li>
            <li className="inline-block px-3" onClick={() => handleScrollToSection('market-research')}>Market Research</li>
            <li className="inline-block px-3" onClick={() => handleScrollToSection('solution')}>Solution</li>
            <li className="inline-block px-3" onClick={() => handleScrollToSection('plan')}>Plan</li>
            <li className="inline-block px-3" onClick={() => handleScrollToSection('branding')}>Branding</li>
            <li className="inline-block px-3" onClick={() => handleScrollToSection('ui-guideline')}>UI Guideline</li>
            <li className="inline-block px-3" onClick={() => handleScrollToSection('wireframe-uis')}>Wireframe</li>
            <li className="inline-block px-3" onClick={() => handleScrollToSection('tech')}>Tech</li>
            <li className="inline-block px-3" onClick={() => handleScrollToSection('user-testing')}>User Testing</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
