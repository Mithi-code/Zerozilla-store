import './App.css';
import Home from './Components/Home';
import Product from './Components/Product';
import ProductDetails from './Components/ProductDetails';

import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/details' element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
