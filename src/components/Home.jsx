import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
                <div className="flex flex-col justify-center items-center h-full">
                    <Fade direction="down" duration={2000} triggerOnce>
                        <div className="text-4xl sm:text-7xl font-bold text-white"
                             style={{ minHeight: '100px', display: 'flex', alignItems: 'center' }}>
                            <Typewriter
                                words={["Hi, I'm Jamiro.", "A software developer."]}
                                loop={Infinity}
                                cursor
                                cursorStyle='_'
                                typeSpeed={120}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </div>
                    </Fade>
                    <div className="mt-4 text-center">
                        <Fade direction="up" duration={2000} triggerOnce>
                            <p className="text-gray-500 py-4 max-w-md">
                                Crafting cool mobile apps with a passion for innovation.
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;