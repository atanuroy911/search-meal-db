import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';

const MealDetail = () => {
    const { idMeal } = useParams();
    const [mealDetail, setMealDetail] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        axios.get(url)
            .then(data => {
                setMealDetail(data.data.meals);
            })

    }, [idMeal])

    return (
        <div className='p-10 flex flex-col gap-5'>
            <h1 className='text-4xl text-white font-bold'>{mealDetail[0]?.strMeal}</h1>
            <div className='flex items-center justify-center'>
                <div className='w-1/2 py-8 rounded-lg bg-emerald-600 flex items-center justify-center'>
                    <img className='w-11/12 rounded-lg' src={mealDetail[0]?.strMealThumb} alt={mealDetail.strMeal}></img>
                </div>
            </div>
            <div>
                <h3 className='text-2xl text-white font-bold'>Area: <span className='text-xl text-gray-800 font-bold'>{mealDetail[0]?.strArea}</span></h3>
            </div>
            <h3 className='text-2xl text-white font-bold text-left'>Recipe: </h3>
            <p className='text-left'>{mealDetail[0]?.strInstructions}</p>
            <h3 className='text-2xl text-white font-bold'>Video: </h3>
            {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${mealDetail[0]?.strYoutube.slice(32)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <YoutubeEmbed embedId={mealDetail[0]?.strYoutube.slice(32)}></YoutubeEmbed>

        </div>
    );
};

export default MealDetail;