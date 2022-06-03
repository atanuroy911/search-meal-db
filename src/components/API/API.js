import React from 'react';
import SearchFood from '../SearchFood/SearchFood';

const API = () => {
    return (
        <>
            <div
                className="flex items-center justify-center w-full NotFound-height container-height bg-gradient-to-b from-emerald-500 to-green-400">
                <div className="px-40 py-20 bg-white rounded-md shadow-xl">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-emerald-600 text-4xl">API Used here are as follows </h1> <br></br>
                        <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                            <span className='text-xl text-amber-700'>Search meal by name</span>                            
                            www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
                            <span className='text-xl text-amber-700'>Lookup full meal details by id</span>
                            www.themealdb.com/api/json/v1/1/lookup.php?i=52772
                            <span className='text-xl text-amber-700'>List all meal categories</span>
                            www.themealdb.com/api/json/v1/1/categories.php
                            <span className='text-xl text-amber-700'>Filter by Category</span>
                            www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
                            <span className='text-xl text-amber-700'>Filter by Area</span>
                            www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
                        </h6>
                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                            Try Searching Some Foods
                        </p>
                        <SearchFood></SearchFood>
                    </div>
                </div>
            </div>
        </>
    );
};

export default API;