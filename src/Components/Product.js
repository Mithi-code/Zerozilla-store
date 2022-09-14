import React from 'react';
import { useState, useEffect } from 'react';
import '../assests/product.css';

const Product = () => {
  const [product, setProducts] = useState([]);

  const productData = () => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then((res) => res.json())
      .then((data) => setProducts([...data]));
  };
  useEffect(() => {
    productData();
  }, []);

  return (
    <div className='product-info'>
      {product.map((data) => {
        return (
          <div className='cards' key={data.id}>
            {data.title}
            <img src={data.image} className='product-img' />
          </div>
        );
      })}
    </div>
  );
};

export default Product;
