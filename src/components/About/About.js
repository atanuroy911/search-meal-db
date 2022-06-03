import React from 'react';
import SearchFood from '../SearchFood/SearchFood';

const About = () => {
    return (
        <>
            <div
                className="flex items-center justify-center w-full NotFound-height container-height bg-gradient-to-b from-emerald-500 to-green-400">
                <div className="px-20 lg:px-40 bg-white rounded-md shadow-xl">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-emerald-600 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">About Us </h1> <br></br>
                        <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                             This site is made using TheMealDB API
                        </h6>
                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                            Try Searching Some Foods Below
                        </p>
                        <SearchFood></SearchFood>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;