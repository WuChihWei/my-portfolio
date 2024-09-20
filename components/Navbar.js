"use client"; // Add this line at the top to make this a Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith('/projects/');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100); // Change the threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    closeDropdown(); // Close the dropdown after selection
  };

  return (
    <nav className={`navbar ${isScrolled && isProjectPage ? 'scrolled' : ''}`}>
      {isScrolled ? (
        <div className="introduction-carousel">
          <ul>
            <li onClick={() => handleScrollToSection('introduction')} >Navbar</li>
            <li onClick={() => handleScrollToSection('introduction')} >Introduction</li>
            <li onClick={() => handleScrollToSection('user-story')}>User Story</li>
            <li onClick={() => handleScrollToSection('market-research')}>Market Research</li>
            <li onClick={() => handleScrollToSection('solution')}>Solution</li>
            <li onClick={() => handleScrollToSection('branding')}>Branding</li>
            <li onClick={() => handleScrollToSection('ui-guideline')}>UI Guideline</li>
            <li onClick={() => handleScrollToSection('wireframe-uis')}>Wireframe</li>
            <li onClick={() => handleScrollToSection('tech')}>Tech</li>
            <li onClick={() => handleScrollToSection('plan')}>Plan</li>
            <li onClick={() => handleScrollToSection('user-testing')}>User Testing</li>
          </ul>
        </div>
      ) : (
        <div className="navbar-container">
            <div className="navbar-logo">
          <img src="/logo.png" alt="L" className="navbar-logo-img" />
          <span className="navbar-logo-text">Logo</span>
          </div>
          <ul className="navbar-items">
            <li><Link href="/">Portfolio</Link></li>
            <li><Link href="/resume">Resume</Link></li>
            <li className="relative">
              <button onClick={toggleDropdown} className="focus:outline-none">
                Projects
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
                  <li className="hover:bg-gray-200">
                    <Link href="/projects/superfake" className="block px-4 py-2" onClick={closeDropdown}>
                      Superfake
                    </Link>
                  </li>
                  <li className="hover:bg-gray-200">
                    <Link href="/projects/hommap" className="block px-4 py-2" onClick={closeDropdown}>
                      Hommap
                    </Link>
                  </li>
                  <li className="hover:bg-gray-200">
                    <Link href="/projects/davincin" className="block px-4 py-2" onClick={closeDropdown}>
                      Davincin
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li><Link href="/contact">Contact</Link></li>
            {/* <li><Link href="/free">Admin</Link></li> */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;