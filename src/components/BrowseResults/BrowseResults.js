import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import EResult from '../EResult/EResult';
import NoResult from '../NoResult/NoResult';

const BrowseResults = () => {
    const [searchParams] = useSearchParams();
    const searchParam = searchParams.get('q');
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}`
        axios.get(url)
            .then(data => setFoodItems(data.data.meals))
    }, []);
    if (foodItems == null) {
        return (
            <div>
                <NoResult/>
            </div>
        )
    }
    else {
        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-12'>
                {foodItems.map(food => <EResult key={food.idMeal} food={food}></EResult>)}
            </div>
        );
    }

};

export default BrowseResults;