import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './CardSection.css';

const CardSection = (props) => {
    const [foodItems, setFoodItems] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?${props.filter}=${props.foodType}`
        axios.get(url)
        .then(data => setFoodItems(data.data.meals))
    }, []);
    return (
        <div>
            <div className="flex flex-col bg-emerald-600 mx-10 p-auto rounded-lg shadow">
                <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-10 md:mx-20 mx-5 font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-yellow-400 text-shadow-sm">
                    <span>{props.foodType} Foods</span>
                </h1>
                <div
                    className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                    <div className="flex flex-nowrap lg:ml-28 md:ml-10 ml-10 ">
                        {foodItems.map(foodItem => <Card key={foodItem.idMeal} foodItem={foodItem}></Card>)}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default CardSection;