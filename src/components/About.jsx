import React from "react";
import HeroImage from "../assets/heroImage.png";
import { Link } from "react-scroll";
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white py-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <Fade direction="down" duration={2000} triggerOnce>
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Sobre mi
            </p>
          </div>
        </Fade>

        <Fade direction="up" duration={2000} triggerOnce>
          <p className="text-xl mt-8">
          La tecnología no es solo mi trabajo, es mi forma de entender y transformar el mundo. Desde líneas de código hasta soluciones completas, mi enfoque está en crear impacto real a través de innovación y dedicación.
          </p>
        </Fade>

        <br />

        <Fade direction="up" duration={2000} triggerOnce>
          <p className="text-xl">
            A lo largo de mi trayectoria, he explorado diversas tecnologías y siempre busco nuevos retos que amplíen mis habilidades. Aunque tengo experiencia en distintas áreas del desarrollo, lo que realmente me impulsa es la posibilidad de aprender y colaborar. Creo firmemente en el poder de la comunidad y el conocimiento compartido. Si tienes una idea interesante o un proyecto que merezca atención, <Link to="contact" smooth duration={500} className="text-green-500 underline cursor-pointer">let's talk!</Link>
          </p>
        </Fade>

        <Fade direction="up" duration={2000} triggerOnce>
          <div className="flex justify-center mt-8">
            <img
              src={HeroImage}
              alt="my profile"
              className="w-48 h-48 object-cover rounded-full md:w-64 md:h-64"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;