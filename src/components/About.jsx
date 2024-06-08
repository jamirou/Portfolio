import React from "react";

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
          exciting ideas or want to show me your favorite repository, feel free
          to do so in the contact section. Make sure to include all the details
          in the form! I am always open to new opportunities and collaborations.
          If you're looking for someone with a solid technical foundation and a
          proactive attitude, let's talk!
        </p>
      </div>
    </div>
  );
};

export default About;