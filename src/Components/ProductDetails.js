import React, { useState, useEffect } from 'react';
import '../assests/product.css';

const ProductDetails = () => {
  const [details, setDetails] = useState([]);

  const fetchDetails = () =>{
    fetch('https://fakestoreapi.com/products/5')
      .then((res) => res.json())
      .then((data) => setDetails([data]));
  }

  useEffect(()=>{
    fetchDetails()
  },[])
  return (
    <div>
      {
        details.map((data) => {
          return <p key={data.id} className='cards'>{data.title}
          {data.description}
          {data.price}
          {data.category}
          {data.rating[0]}
          </p>
        })
      }
      </div>
  )
}

export default ProductDetails;