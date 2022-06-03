import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LiveSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        axios.get(url)
        .then(data => setMeals(data.data.meals))
    }, [searchText])
    const searchFood = e => {
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h2>Find the food you want</h2>
            <input onChange={searchFood} type="text" name='search' />
            <h3>Result Found: {
                meals ? meals.length : 0
            }
            </h3>

        </div>
    );
};

export default LiveSearch;