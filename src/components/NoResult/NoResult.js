import React from 'react';
import SearchFood from '../SearchFood/SearchFood';

const NoResult = () => {
    return (
        <>
            <div
                className="flex items-center justify-center w-full NotFound-height container-height bg-gradient-to-b from-emerald-500 to-green-400">
                <div className="px-40 py-20 bg-white rounded-md shadow-xl">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-emerald-600 text-9xl">Oops! </h1> <br></br>
                        <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                            <span className="text-red-500">Sorry!</span> No Result found
                        </h6>
                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                            Try Again Below
                        </p>
                        <SearchFood></SearchFood>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NoResult;