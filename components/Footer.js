'use client';

import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

const Footer = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleAdminClick = () => {
    router.push('/admin');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('Sending...');
    try {
      await axios.post('/api/contact', { email, name, message });
      setSubmitStatus('Thank you for your message!');
      setEmail('');
      setName('');
      setMessage('');
    } catch (error) {
      setSubmitStatus('Error. Please try again.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <footer className="bg-stone-900 text-white py-20">
      <div className="">
        <div className="w-full flex flex-col md:flex-row justify-evenly items-center mb-12 py-20">
          <div className="w-1/2 p-p-gap mb-8 md:mb-0 flex flex-col justify-center">
            <h2 className="heading-2-custom">Contact me</h2>
            <p className="heading-5-custom pr-20 pt-10">
              In the history of modern astronomy, there is probably no one greater leap forward than the building and launch.
            </p>
          </div>
          <div className="w-1/2 p-p-gap md:w-1/2 flex-col items-center">
          <form onSubmit={handleSubmit} className="w-full ">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full bg-white text-black px-4 py-2 mb-4 rounded"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-white text-black px-4 py-2 mb-4 rounded"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="w-full bg-white text-black px-4 py-2 mb-4 rounded"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="w-full transparent text-white border-white border-2 hover:bg-gray-200 px-4 py-2 rounded transition duration-300">
              Leave Email
            </button>
            {submitStatus && <p className="mt-2 text-sm">{submitStatus}</p>}
          </form>
          </div>
        </div>
        <div className="flex flex-col p-p-gap md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">1B1M.com</h3>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0 flex items-center">
            <h6 className="mr-4">© Copyright {new Date().getFullYear()} Jordan Wu</h6>
            <button 
              className="bg-gray-700 hover:bg-stone-600 text-white px-4 py-2 rounded-full text-sm transition duration-300"
              onClick={handleAdminClick}
            >
              Admin
            </button>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/jordanwu-tech/" 
              className="text-white hover:text-gray-300 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/WuChihWei" 
              className="text-white hover:text-gray-300 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100000916091743" 
              className="text-white hover:text-gray-300 transition duration-300"
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