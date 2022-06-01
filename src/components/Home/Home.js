import React from 'react';
import CardSection from '../CardSection/CardSection';

const Home = () => {
    return (
        <div>
            <h1 className='text-white text-5xl font-bold p-16'>Welcome to MealDB Search</h1>
            <CardSection filter='a' foodType='Canadian'></CardSection>
            <CardSection filter='c' foodType='Seafood'></CardSection>
        </div>
    );
};

export default Home;