'use client';

import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

const FooterTop = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

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
    <div className="p-p-gap flex flex-col items-center justify-items-center md:flex-row h-full bg-blue-800 md:m-10 m-4 py-20 rounded-3xl">
      <div className="w-full md:w-1/2  mb-6 md:mb-0 flex flex-col md:justify-items-start">
      <div className="text-white ">
        <h2 className="heading-2-custom">Contact me</h2>
        <p className="heading-5-custom pt-10">
        Hi, I am Jordan. With 2+ years digital products experience launching 20+ projects. Simplify feature process through data-driven strategies, cross-functional leadership, and AI innovation.
        </p>
      </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full md:max-w-2xl py-10">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full bg-stone-100 text-black px-4 py-2 mb-4 rounded-full"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full bg-stone-100 text-black px-4 py-2 mb-4 rounded-full"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="w-full bg-stone-100 text-black px-4 py-2 mb-4 rounded-3xl"
            rows="4"
            required
          ></textarea>
          <button type="submit" className="w-full transparent text-white border-bg-stone-100 border-2 hover:bg-gray-200 px-4 py-2 rounded-full transition duration-300">
            Leave Email
          </button>
          {submitStatus && <p className="mt-2 text-sm">{submitStatus}</p>}
        </form>
      </div>
    </div>
  );
};

const FooterBottom = () => {
  const router = useRouter();

  const handleAdminClick = () => {
    router.push('/admin');
  };

  return (
    <div className="flex flex-col-reverse pb-6 items-center md:flex-row md:justify-between w-full">
      <div className="mb-4 md:mb-0">
        <div className="logo-white-containter">
          <img src="/jordan_wu_logo.png" alt="L" className="navbar-logo-img" />
        </div>
      </div>
      <div className="text-center mb-4 md:mb-0 flex flex-col md:flex-row items-center">
        <h6 className="text-black mb-2 md:mb-0 md:mr-4">© Copyright {new Date().getFullYear()} Jordan Wu</h6>
        <button 
          className=" hover:bg-stone-600 text-black px-4 py-2 rounded-full text-sm transition duration-300"
          onClick={handleAdminClick}
        >
          Admin
        </button>
      </div>
      <div className="flex space-x-4">
        <a 
          href="https://www.linkedin.com/in/jordanwu-tech/" 
          className="text-black hover:text-gray-300 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a 
          href="https://github.com/WuChihWei" 
          className="text-black hover:text-gray-300 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        {/* <a 
          href="https://www.facebook.com/profile.php?id=100000916091743" 
          className="text-white hover:text-gray-300 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} />
        </a> */}
      </div>
    </div>
  );
};

const Footer = {
  Top: FooterTop,
  Bottom: FooterBottom
};

export default Footer;
