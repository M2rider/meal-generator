// Menu.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../core/config';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/1/categories.php`);
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const getMeals = (category) => {
    navigate('/meals', { state: { category: category }})
  }

  return (
    <div>
      <h2 className='text-center text-info'>Here is a List of Tasty Dishes for you!!</h2>
      <h2 className='text-center text-primary'>MENU</h2>
      {categories.map((category) => (
        <div className='card p-3 m-3' key={category.idCategory} onClick={() => getMeals(category)}>
          {category.strCategory}
        </div>
      ))}
    </div>
  );
};

export default Menu;
