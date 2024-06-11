import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="flex flex-col items-center py-4">
        <div className="text-center">
          <p className="text-lg text-white">Get in Touch</p>
          <p className="mt-2 text-gray-400">devjamiro@gmail.com</p>
        </div>
        <div className="flex mt-4 space-x-4">
          <a href="https://www.linkedin.com/in/jamiro-manriquez-832aaa204/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl hover:text-gray-400" />
          </a>
          <a href="https://github.com/jamirou" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-white text-2xl hover:text-gray-400" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl hover:text-gray-400" />
          </a>
        </div>
        <p className="mt-4 text-gray-500">&copy; {new Date().getFullYear()} Jamiro Manriquez. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;