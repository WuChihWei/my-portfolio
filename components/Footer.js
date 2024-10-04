'use client';

import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

const Footer = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleAdminClick = () => {
    router.push('/admin');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('Sending...');
    try {
      await axios.post('/api/contact', { email, name: 'Newsletter Subscriber', message: 'Please add me to the newsletter.' });
      setSubmitStatus('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setSubmitStatus('Error. Please try again.');
      console.error('Error submitting email:', error);
    }
  };

  return (
    <footer className="bg-gray-200 text-black ">
      <div className="mx-auto px-12 py-8 flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center py-20">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="mb-2">1B1M.com</h3>
            <h6 className="max-w-lg">
            One Builder, One Mission. Delivering end-to-end digital solutions through design thinking — Research and strategy to design and coding.
            </h6>
          </div>
          <div className="w-full md:w-auto">
            <form className="flex flex-col sm:flex-row" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="bg-white text-black px-4 py-2 mb-2 sm:mb-0 sm:mr-2 rounded border border-gray-300"
                required
              />
              <button type="submit" className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded transition duration-300">
                Leave Email
              </button>
            </form>
            {submitStatus && <p className="mt-2 text-sm text-black">{submitStatus}</p>}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300">
          <div className="mb-4 md:mb-0">
            <img src="/1b1m-logo.png" alt="Logo" className="h-8" />
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0 flex items-center">
            <h6 className="mr-4">© Copyright {new Date().getFullYear()} Jordan Wu</h6>
            <button 
              className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded text-sm transition duration-300"
              onClick={handleAdminClick}
            >
              Admin
            </button>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/WuChihWei" 
              className="text-black hover:text-gray-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jordanwu-tech/" 
              className="text-black hover:text-blue-600 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100000916091743" 
              className="text-black hover:text-blue-700 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;