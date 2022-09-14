import React from 'react';
import Category from './Category';
import '../assests/home.css';
import { BsFillCartCheckFill } from 'react-icons/bs';

const Home = () => {
  return (
    <div className='home-page'>
      <div className='navbar'>
        <p>Store</p>
        <p>Products</p>
        <p>my profile</p>
        <BsFillCartCheckFill className='shopping-cartIcon'/>
      </div>
      <div className='list-categories'>
        <p>List of Categories</p>
        <Category />
      </div>
    </div>
  );
};

export default Home;
