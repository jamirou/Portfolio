import React from "react";
import HeroImage from "../assets/heroImage.png";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white py-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-8">
          Hello again! I am Jamiro, a mobile developer with a broad range of
          knowledge and an insatiable desire to learn more every day. I am
          passionate about creating applications that not only work well but
          also provide an exceptional user experience.
        </p>

        <br />

        <p className="text-xl">
          Throughout my career, I have worked with a variety of technologies and
          I am always looking for new challenges that allow me to expand my
          skills. My main focus is on the development of Android and iOS
          applications, but my curiosity and dedication lead me to constantly
          explore new tools and programming languages. In addition to my daily
          work, I love contributing to the world of open source. I'm a big
          believer in collaboration and knowledge sharing, so if you have any
          exciting ideas or want to show me. I am always open to new opportunities and collaborations.
          If you're looking for someone with a solid technical foundation and a
          proactive attitude, <Link to="contact" smooth duration={500} className="text-green-500 underline cursor-pointer">let's talk!</Link>
        </p>

        <div className="flex justify-center mt-8">
          <img
            src={HeroImage}
            alt="my profile"
            className="w-48 h-48 object-cover rounded-full md:w-64 md:h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default About;