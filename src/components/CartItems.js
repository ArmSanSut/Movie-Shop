import React, { useState, useEffect } from 'react'
import './CartItems.css'
const CartItems = () => {
    const [totalPrice, setTotalPrice] = useState('');
    const [discount, setDiscount] = useState(0)

    const quantity = localStorage.getItem("quantity");
    const displayMovies = JSON.parse(localStorage.getItem("cart"))
    displayMovies.splice(0,1)
    console.log(displayMovies)



    useEffect(() => {
        setTotalPrice(displayMovies.map(x => parseInt(x.Price)))        
    },[])

    const total = totalPrice.reduce((x,y) => x+y)
    console.log(totalPrice)
    // console.log(total)

    if(quantity > 5) {
        const decrease = 0.2 * total
        setDiscount(decrease)
    } else if (quantity > 3) {
        const decrease = 0.1 * total
        setDiscount(decrease)
    } else {
        setDiscount(0)
    }
    console.log("discount", discount)
  return (
    <div className='container'>
        <div className='header'>
            <h1>Cart Items</h1>
        </div>
        <div className='box'>
            {displayMovies.map((cart) => (
                <div key={cart.id} className= 'details'>
                    <p>Title : {cart.Title}</p>
                    <p>Price : {cart.Price}</p>
                </div>
            ))}
        </div>
        <div className='check-out'>
            <h3>Total Price : {total}</h3>
            <h3>Discount : {discount}</h3>
        </div>
    </div>
  )
}

export default CartItems