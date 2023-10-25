import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    Hi again! As you may have noticed, I am mobile programmer specialized in developing Android applications.
                    My career in the world of programming has been marked by an insatiable desire to learn.
                </p>

                <br />

                <p className="text-xl">
                    I am constantly looking for new ways to improve my skills and stay up to date with the latest trends and technologies in the field of mobile development.
                    My calm and positive approach to life allows me to enjoy every moment and face challenges with optimism. I believe that every achievement, however small, is cause for celebration and learning.
                    In summary, my main motivation is to continue evolving as a professional, taking on new challenges and providing creative and innovative solutions to my projects. I am excited to continue growing in this industry and continue to learn new things in the exciting world of mobile development.
                </p>
            </div>
        </div>
    );
};

export default About;