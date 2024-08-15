import React from 'react';
import '../src/app/globals.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // Import the icons
// import './projectTemplate.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-content">
          <h3>Heading</h3>
          <p>
            In the history of modern astronomy, there is probably no one
            greater leap forward than the building and launch.
          </p>
          </div>
          <div className="footer-email">
            <input type="email" placeholder="Email" />
            <button>Leave Email</button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
            <img src="/path-to-icon/logo.png" alt="Logo" />
        </div>
        <div className="footer-bottom-middle">
        {/* <div className="footer-links">
          <a href="#">First Link</a>
          <a href="#">Second Link</a>
          <a href="#">Third Link</a>
          <a href="#">Fourth Link</a>
          <a href="#">Fifth Link</a>
          </div> */}
          <div className="footer-copyright">
          <p>© Copyright 2020 Pixsellz - Premium UI Goods for Designers</p>
        </div>
        </div>
        <div className="footer-bottom-right">
        <div className="footer-social">
          <a href="https://facebook.com"><FaFacebook size={24} /></a>
          <a href="https://instagram.com"><FaInstagram size={24} /></a>
          <a href="https://twitter.com"><FaTwitter size={24} /></a>
          <a href="https://youtube.com"><FaYoutube size={24} /></a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
