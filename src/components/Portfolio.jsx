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
        "GuruDealer es una aplicación móvil de código abierto desarrollada con Kotlin y Firebase, diseñada para la comunidad de programadores. Ofrece una experiencia de usuario intuitiva con opciones de registro flexibles y una arquitectura bien estructurada basada en MVVM. Además, incluye funcionalidad de anuncios para monetización. Todo el proyecto es gratuito y accesible en GitHub, listo para ser explorado y mejorado por otros desarrolladores.",
    },
    {
      id: 1,
      src: arrayDestruct,
      codeLink: "https://github.com/jamirou/Personal_Schedule",
      description:
        "Personal Schedule es una aplicación Android diseñada para ayudar a los usuarios a gestionar sus tareas diarias de manera eficiente. Este proyecto demuestra mi pasión por crear y desarrollar proyectos personales de manera completa. Cuenta con sincronización de datos en tiempo real con Firebase, autenticación segura de usuarios y una interfaz elegante y fácil de usar. La aplicación permite a los usuarios gestionar notas, contactos y eventos de manera fluida, proporcionando una herramienta integral para la organización personal.",
    },
    {
      id: 2,
      src: reactParallax,
      codeLink: "https://github.com/jamirou/RetrofitGame",
      description: "Retrofit Games es una aplicación Android construida con Jetpack Compose y Kotlin. Este proyecto demuestra mi capacidad para integrar tecnologías modernas y crear una aplicación fácil de usar. La app obtiene y muestra información sobre videojuegos usando una API externa, ofreciendo una experiencia fluida y visualmente atractiva. Entre las características clave se incluyen la obtención de datos en tiempo real con Retrofit, inyección de dependencias con Dagger Hilt y carga eficiente de imágenes con Coil. Este proyecto resalta mis habilidades en desarrollo Android moderno y mi pasión por crear aplicaciones completas y pulidas.",
    },
    {
      id: 3,
      src: navbar,
      codeLink: "https://github.com/jamirou/WikiHero",
      description: "WikiHero es una aplicación Android que permite a los usuarios buscar y ver información sobre superhéroes utilizando la SuperheroAPI. La app muestra detalles completos como nombre, imagen, estadísticas de poder, nombre real, editor, raza, género, altura, peso y alter ego de los superhéroes. Las características clave incluyen: Búsqueda de superhéroes por nombre, Vista detallada de la información del superhéroe, incluyendo estadísticas y datos personales, e Interfaz amigable para una experiencia atractiva.",
    },
    {
      id: 5,
      src: installNode,
      codeLink: "https://github.com/jamirou/TranslatorApp",
      description: "Translator App es una aplicación Android que permite a los usuarios traducir texto de manera rápida y sencilla entre diferentes idiomas. Construida con Jetpack Compose y Kotlin, la app ofrece una experiencia de usuario intuitiva y eficiente para la traducción de texto. Traducción de texto: Ingresa el texto y selecciona los idiomas de origen y destino para traducir. Soporte para múltiples idiomas: Incluye inglés, español, italiano y francés. Almacenamiento de preferencias: Guarda las preferencias de idioma utilizando DataStore para una experiencia personalizada.",
    },
    {
      id: 6,
      src: reactWeather,
      codeLink: "https://github.com/jamirou/InstagramApp",
      description: "Instagram Clone es una sofisticada aplicación Android desarrollada con Kotlin y Jetpack Compose. Este proyecto presenta una implementación eficiente de una cuadrícula perezosa que garantiza un desplazamiento suave y un rendimiento óptimo al mostrar numerosos elementos. El diseño de la interfaz de usuario utiliza la propiedad de peso en Compose para crear un diseño equilibrado y sensible. Una característica destacada es el encabezado fijo, que permanece en la parte superior de la pantalla mientras los usuarios navegan por el contenido. Además, la app integra Coil para una carga de imágenes fluida desde internet, proporcionando una experiencia dinámica y visualmente atractiva al mostrar fotos de perfil de usuarios, publicaciones y otras imágenes relacionadas. Este proyecto demuestra mi experiencia en desarrollo Android moderno y mi capacidad para crear aplicaciones altamente funcionales y visualmente atractivas",
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
      name="proyectos"
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
                    {hoveredId === project.id ? "Github" : "Repositorio"}
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