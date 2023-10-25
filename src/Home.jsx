import React from 'react'
import HeroImage from '../assets/HeroImage.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return (
        <div name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">Hi, I'm an Android vedeloper</h2>
                    <p className="text-gray-500 py-4 max-w-md">I am a passionate technology lover and dedicated to mobile development. My passion for creating innovative solutions in the world of applications constantly drives me to learn and improve myself. I am committed to personal and professional growth in a constantly evolving technological environment.
                    </p>
                    <div>
                        <button>
                            Portfolio<MdOutlineKeyboardArrowRight />
                        </button>
                    </div>
                </div>
                <div>
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home