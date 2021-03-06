import React from 'react';
import { Link } from 'react-router-dom';
import SearchFood from '../SearchFood/SearchFood';

const EResult = (props) => {
    const { idMeal, strMeal, strMealThumb, strCategory } = props.food;
    if (props.food.length < 1) {
        return (
            <div>
                <h1 className='text-4xl font-bold text-red-600'>No results Found</h1>
                <h3 className='text-xl font-semibold text-white'>Search Again below</h3>
                <SearchFood></SearchFood>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href={strMealThumb}>
                        <img className="rounded-t-lg" src={strMealThumb} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="/">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{strMeal}</h5>
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{strCategory}</h5>
                        </a>
                        <Link to={`/details/${idMeal}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Details
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

};

export default EResult;