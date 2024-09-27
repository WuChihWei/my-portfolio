"use client";

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    setSubmitStatus('Sending...');

    try {
      console.log('Sending request to /api/contact');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      console.log('Response received:', response.status);
      if (response.ok) {
        setSubmitStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container h-screen-20 items-center mx-auto px-4 py-8 flex flex-wrap">
      {/* Left side: Contact Information */}
      <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
        <h1 className="text-3xl font-bold mb-2">Get In Touch</h1>
        <p className="mb-6 text-gray-600">We are here for you! How can we help?</p>
        <div className="space-y-2">
          <p className="flex items-center"><span className="mr-2">📍</span> Stockholm | Berlin | Taipei</p>
          <p className="flex items-center"><span className="mr-2">🌐</span> https://www.linkedin.com/in/jordanwu-tech/</p>
          <p className="flex items-center"><span className="mr-2">✉️</span> w99jordan@gmail.com</p>
        </div>
      </div>

      {/* Right side: Form and Submit Button */}
      <div className="w-full md:w-1/2 pl-4">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 border rounded bg-gray-100"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full p-3 border rounded bg-gray-100"
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Go ahead, we are listening..."
              className="w-full p-3 border rounded bg-gray-100"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white px-4 py-3 rounded hover:bg-indigo-600">
            Submit
          </button>
        </form>
        {submitStatus && <p className="mt-4 text-center">{submitStatus}</p>}
      </div>
    </div>
  );
}