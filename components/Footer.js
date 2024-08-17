import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Heading</h3>
            <p className="max-w-md">
              In the history of modern astronomy, there is probably no one
              greater leap forward than the building and launch.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-700 text-white px-4 py-2 mb-2 sm:mb-0 sm:mr-2 rounded"
              />
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition duration-300">
                Leave Email
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="mb-4 md:mb-0">
            <img src="/path-to-icon/logo.png" alt="Logo" className="h-8" />
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>© Copyright 2020 Pixsellz - Premium UI Goods for Designers</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-400 transition duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-400 transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-300 transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://youtube.com" className="hover:text-red-500 transition duration-300">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;