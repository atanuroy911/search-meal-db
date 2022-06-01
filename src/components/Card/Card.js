import React from 'react';

const Card = (props) => {
    const { strMealThumb, strMeal, idMeal } = props.foodItem;
    return (
        <>
            <div className="relative inline-block px-3">
                <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img src={strMealThumb} alt="" />
                    <div className="absolute bottom-0 w-64 rounded-lg">
                        <h4 className="text-xl font-semibold tracking-tight text-white bg-slate-500">{strMeal}</h4>
                        <p className="leading-normal text-gray-100 bg-black rounded-b-lg">Price: $ {idMeal.slice(3)}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;