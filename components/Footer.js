'use client';

import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  const handleAdminClick = () => {
    router.push('/admin');
  };

  return (
    <footer className="bg-black text-white">
      <div className=" mx-auto px-12 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">1B1M.com</h3>
            <p className="max-w-md">
            One Builder, One Mission. Delivering end-to-end digital solutions through design thinking — Research and strategy to design and coding.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-700 text-white px-4 py-2 mb-2 sm:mb-0 sm:mr-2 rounded"
              />
              <button className="bg-white text-black hover:bg-blue-600 px-4 py-2 rounded transition duration-300">
                Leave Email
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="mb-4 md:mb-0">
            <img src="/1b1m-logo.png" alt="Logo" className="h-8" />
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0 flex items-center">
            <p className="mr-4">© Copyright {new Date().getFullYear()} Jordan Wu</p>
            <button 
              className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition duration-300"
              onClick={handleAdminClick}
            >
              Admin
            </button>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com" className="hover:text-gray-400 transition duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://facebook.com" className="hover:text-blue-500 transition duration-300">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;