import React, { useState } from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { Fade } from "react-awesome-reveal";
import "../index.css";

const Portfolio = () => {
  const portfolios = [
    {
      id: 4,
      src: reactSmooth,
      codeLink: "https://github.com/jamirou/GuruDealer",
      description:
        "GuruDealer is an open-source mobile application developed with Kotlin and Firebase, tailored for the programmer community. It provides an intuitive user experience with flexible registration options and a well-structured MVVM architecture. Additionally, it includes ad functionality for monetization. The entire project is free and accessible on GitHub, ready to be explored and improved by other developers.",
    },
    {
      id: 1,
      src: arrayDestruct,
      codeLink: "https://github.com/jamirou/Personal_Schedule",
      description:
        "Personal Schedule is an Android app designed to help users manage their daily tasks efficiently. This project demonstrates my passion for creating and fully developing personal projects. It features real-time data synchronization with Firebase, secure user authentication, and a sleek, user-friendly interface. The app allows users to manage notes, contacts, and events seamlessly, providing a comprehensive tool for personal organization.",
    },
    {
      id: 2,
      src: reactParallax,
      codeLink: "https://github.com/jamirou/RetrofitGame",
      description: "Descripción del proyecto RetrofitGame",
    },
    {
      id: 3,
      src: navbar,
      codeLink: "https://github.com/jamirou/WikiHero",
      description: "Descripción del proyecto WikiHero",
    },
    {
      id: 5,
      src: installNode,
      codeLink: "https://github.com/jamirou/TranslatorApp",
      description: "Descripción del proyecto TranslatorApp",
    },
    {
      id: 6,
      src: reactWeather,
      codeLink: "https://github.com/jamirou/InstagramApp",
      description: "Descripción del proyecto InstagramApp",
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.classList.add("no-scroll"); // Añadir clase para deshabilitar scroll
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.classList.remove("no-scroll"); // Remover clase para habilitar scroll
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <Fade direction="down" duration={2000} triggerOnce>
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my last work right here</p>
          </div>
        </Fade>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map((project) => (
            <Fade key={project.id} direction="up" duration={2000} triggerOnce>
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={project.src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 cursor-pointer"
                  onClick={() => openModal(project)}
                />
                <div className="flex items-center justify-center">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-gray-700 hover:text-white"
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {hoveredId === project.id ? "Github" : "Code"}
                  </a>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center"
            onClick={closeModal}
          >
            <div
              className="bg-gray-800 text-white rounded-lg overflow-hidden max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={selectedProject.src} alt="" className="w-full" />
              </div>
              <div className="p-4 max-h-80 overflow-y-auto">
                <p className="font-playfair text-2xl font-medium mb-4">
                  {selectedProject.description}
                </p>
                <a
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="button-professional"
                >
                  Check repo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
