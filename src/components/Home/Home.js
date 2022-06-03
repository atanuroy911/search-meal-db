import React from 'react';
import CardSection from '../CardSection/CardSection';
import SearchFood from '../SearchFood/SearchFood';

const Home = () => {
    return (
        <div>
            <h1 className='text-white text-5xl font-bold p-16'>Welcome to MealDB Search</h1>
            <div className='flex flex-col gap-10 pb-10'>
                {/* <LiveSearch></LiveSearch> */}
                <SearchFood></SearchFood>
                <CardSection filter='a' foodType='Canadian'></CardSection>
                <CardSection filter='c' foodType='Seafood'></CardSection>
            </div>
        </div>
    );
};

export default Home;