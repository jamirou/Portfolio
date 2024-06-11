import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAndroid, faApple, faReact } from "@fortawesome/free-brands-svg-icons"; // Importa los iconos nuevos

const Footer = () => {
  const [copyMessage, setCopyMessage] = useState("");
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    const email = "devjamiro@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopyMessage("¡Copied!");
      setTimeout(() => {
        setCopyMessage("");
      }, 2000);
    });
  };

  return (
    <footer className="w-full bg-black">
      <div className="flex flex-col items-center py-4">
        <div className="text-center">
          <p className="text-lg text-white">
            <Typewriter
              words={["Get in Touch", `© ${currentYear} Jamiro Manriquez.`]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <p className="mt-2 text-gray-400 cursor-pointer" onClick={handleEmailClick}>
            devjamiro@gmail.com
          </p>
          {copyMessage && <p className="text-green-500 mt-2">{copyMessage}</p>}
        </div>
        <div className="flex mt-4 space-x-4">
          <a href="https://www.linkedin.com/in/jamiro-manriquez-832aaa204/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl hover:text-gray-400" />
          </a>
          <a href="https://github.com/jamirou" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-white text-2xl hover:text-gray-400" />
          </a>
          <a href="https://developer.android.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faAndroid} className="text-white text-2xl hover:text-gray-400" />
          </a>
          <a href="https://developer.apple.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faApple} className="text-white text-2xl hover:text-gray-400" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faReact} className="text-white text-2xl hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;