import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import CartItems from './components/CartItems';
import { Routes, Route } from "react-router-dom";


function App() {
  const [details, setDetails] = useState([]);
  const [movieSelected, setMovieSelected] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [click, setClick] = useState(true);

  const addProductFromChild = (childData) => {
    setClick(!click)
    setQuantity(quantity + 1)
    setDetails(childData)
    setMovieSelected(movieSelected ? [...movieSelected, details] : details)
    localStorage.setItem("cart", JSON.stringify(movieSelected))
    localStorage.setItem("quantity", JSON.stringify(quantity))

  };
 

  console.log("selected", movieSelected)
  return (
    <div>
      <Routes>

        <Route path="/" element={<HomePage addProductFromChild={addProductFromChild} quantity={quantity} />} />
        <Route path="/cart-items" element={<CartItems movieSelected={movieSelected} />} />

      </Routes>
    </div>
  );
}

export default App;
