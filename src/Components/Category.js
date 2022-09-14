import React from 'react'
import { useState, useEffect } from 'react'

const Category = () => {
  const [category, setCategory] = useState([])
 
 const getCategories = () => {
  fetch("https://fakestoreapi.com/products/categories")
  .then((res) =>res.json())
  .then((data) => setCategory(data))
 }
 useEffect(()=>{
  getCategories()
 },[])
  return (
    <div className='categories'>
      { category.map((data,index)=>{
        return <a>
          <li key={index}>{data}</li>
          </a>
      })}
    </div>
  )
}

export default Category