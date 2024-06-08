import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-4xl sm:text-7xl font-bold text-white">
                        Hi, I'm Jamiro.
                    </h1>
                    <p className="text-gray-500 py-4 max-w-md">
                        I am a passionate technology lover and dedicated to mobile development.
                        My passion for creating innovative solutions in the world of applications constantly drives me to learn and improve myself.
                    </p>
                </div>

                <div>
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-2x1 mx-auto w-2/3 md:w-half-height"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
