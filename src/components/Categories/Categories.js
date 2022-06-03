import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
        axios.get(url)
            .then(res => {
                setCategories(res.data.categories);
            })
    })
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-12'>
            {categories.map(category => <Category key={category.idCategory} category={category}></Category>)}
        </div>
    );
};

export default Categories;