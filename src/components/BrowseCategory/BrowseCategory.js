import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EResult from '../EResult/EResult';

const BrowseCategory = () => {
    const {strCategory} = useParams();
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`;
        axios.get(url)
            .then(res => {
                setMeals(res.data.meals);
            })
    })
    return (
        <div className='grid grid-cols-4 gap-2 p-12'>
            {meals.map(meal => <EResult key={meal.idMeal} food={meal}></EResult>)}
        </div>
    );
};

export default BrowseCategory;