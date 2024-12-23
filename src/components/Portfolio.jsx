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
      description: "Retrofit Games is an Android application built with Jetpack Compose and Kotlin. This project showcases my ability to integrate modern technologies and create a user-friendly app. The app fetches and displays video game information using an external API, offering a seamless and visually appealing experience. Key features include real-time data fetching with Retrofit, dependency injection with Dagger Hilt, and efficient image loading with Coil. This project highlights my skills in modern Android development and my passion for creating complete, polished applications.",
    },
    {
      id: 3,
      src: navbar,
      codeLink: "https://github.com/jamirou/WikiHero",
      description: "WikiHero is an Android application that allows users to search for and view information about superheroes using the SuperheroAPI. The app displays comprehensive details such as name, image, power stats, real name, publisher, race, gender, height, weight, and alter ego of the superheroes. Key features include: Superhero search by name, Detailed view of superhero information, including stats and personal details and User-friendly interface for an engaging experience.",
    },
    {
      id: 5,
      src: installNode,
      codeLink: "https://github.com/jamirou/TranslatorApp",
      description: "Translator App is an Android application that allows users to quickly and easily translate text between different languages. Built with Jetpack Compose and Kotlin, the app provides an intuitive and efficient user experience for text translation. Text Translation: Enter text and select the source and target languages for translation. Multiple Languages Supported: Includes English, Spanish, Italian, and French, Preference Storage: Saves language preferences using DataStore for a personalized user experience.",
    },
    {
      id: 6,
      src: reactWeather,
      codeLink: "https://github.com/jamirou/InstagramApp",
      description: "Instagram Clone is a sophisticated Android application developed using Kotlin and Jetpack Compose. This project features an efficient lazy grid implementation that ensures smooth scrolling and optimal performance when displaying numerous elements. The user interface design leverages the weight property in Compose to create a balanced and responsive layout. A standout feature is the sticky header, which remains fixed at the top of the screen as users scroll through the content. Additionally, the app integrates Coil for seamless image loading from the internet, providing a dynamic and visually engaging experience by displaying user profile pictures, posts, and other related images. This project demonstrates my expertise in modern Android development and my ability to create highly functional and visually appealing applications.",
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setSelectedProject(portfolios[index]);
    setCurrentIndex(index);
    document.body.classList.add("no-scroll");
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.classList.remove("no-scroll");
  };

  const prevProject = () => {
    const newIndex = (currentIndex - 1 + portfolios.length) % portfolios.length;
    setCurrentIndex(newIndex);
    setSelectedProject(portfolios[newIndex]);
  };

  const nextProject = () => {
    const newIndex = (currentIndex + 1) % portfolios.length;
    setCurrentIndex(newIndex);
    setSelectedProject(portfolios[newIndex]);
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
            <p className="py-6">Algunos los proyectos en los que he trabajado recientemente</p>
          </div>
        </Fade>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map((project, index) => (
            <Fade key={project.id} direction="up" duration={2000} triggerOnce>
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={project.src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 cursor-pointer"
                  onClick={() => openModal(index)}
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
              className="bg-gray-800 text-white rounded-lg overflow-hidden max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={selectedProject.src} alt="" className="w-full" />
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-600 bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full hidden md:block"
                  onClick={prevProject}
                >
                  ◀
                </button>
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-600 bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full hidden md:block"
                  onClick={nextProject}
                >
                  ▶
                </button>
                <div
                  className="clickable-area-left"
                  onClick={prevProject}
                ></div>
                <div
                  className="clickable-area-right"
                  onClick={nextProject}
                ></div>
              </div>
              <div className="p-4 max-h-80 overflow-y-auto">
                <p className="text-lg font-bold text-gray-400 mb-2">
                  {currentIndex + 1} / {portfolios.length}
                </p>
                <p className="font-playfair text-2xl font-medium mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex justify-start space-x-4">
                  <a
                    href={selectedProject.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="button-professional"
                  >
                    Repositorio
                  </a>
                  <button
                    onClick={closeModal}
                    className="button-professional bg-white hover:bg-gray-700"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;