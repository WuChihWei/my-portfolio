// components/Navbar.js
"use client"; // Add this line at the top to make this a Client Component

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        <span className="font-bold text-lg">Logo</span>
      </div>
      <ul className="flex space-x-8">
        <li><Link href="/">Portfolio</Link></li>
        <li><Link href="/resume">Resume</Link></li>

        {/* Dropdown Menu for Projects */}
        <li className="relative">
          <button onClick={toggleDropdown} className="focus:outline-none">
            Projects
          </button>
          {isDropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
              <li className="hover:bg-gray-200">
                <Link href="/projects/superfake" className="block px-4 py-2">
                  Superfake
                </Link>
              </li>
              <li className="hover:bg-gray-200">
                <Link href="/projects/hommap" className="block px-4 py-2">
                  Hommap
                </Link>
              </li>
              <li className="hover:bg-gray-200">
                <Link href="/projects/davincin" className="block px-4 py-2">
                  Davincin
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/free">Free</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
