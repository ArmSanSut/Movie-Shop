import React, { useState, useEffect } from 'react'
import { BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import './CartItems.css'
const CartItems = () => {
    const [totalPrice, setTotalPrice] = useState([]);
    const [discount, setDiscount] = useState(0)
    const [sum, setSum] = useState(0)

    // const quantity = localStorage.getItem("quantity");
    const displayMovies = JSON.parse(localStorage.getItem("cart"))

    console.log(displayMovies === null)
    
    useEffect(() => {

        if (displayMovies !== null) {
            displayMovies.reverse().pop()
            setTotalPrice(displayMovies.map(x => parseInt(x.Price)))
            
        }
        localStorage.setItem('Total Price', totalPrice)
    }, [])

    console.log('test',  totalPrice.reduce((x,y) => x+y))

    const arr = [1,2,3]
    const sums = arr.reduce((x,y) => x+y)
    console.log(sums,typeof arr)

    // useEffect(() => {  
    //     const total = totalPrice.reduce((x, y) => x + y,0)
    //     localStorage.setItem("Sum Price", total)
    //     console.log(total)
    // }, [totalPrice])

    // useEffect(() => {
    //     const sumPrice = localStorage.getItem("Sum Price")
    //     console.log(sumPrice)
    // }, [totalPrice])


    // const quantity = totalPrice.length
    // console.log(quantity)

    // useEffect(() => {

    //     if (quantity > 5) {
    //         const decrease = 0.2 * sumPrice
    //         setDiscount(decrease)
    //     } else if (quantity > 3) {
    //         const decrease = 0.1 * sumPrice
    //         setDiscount(decrease)
    //     } else {
    //         setDiscount(0)
    //     }

    // }, [quantity])
    // console.log("discount", discount)

    return (
        <div className='container'>
            <header>
                <h1 className='head-text'><Link to="/">Movie Shop</Link></h1>
                {displayMovies ? (
                    <BsTrash fontSize='40px' onClick={() => {
                        localStorage.removeItem('cart')
                        localStorage.removeItem('quantity')
                    }} />
                ) : ''}
            </header>
            <div className='header'>
                <h1>Cart Items</h1>
            </div>
            {displayMovies ? (
                <>
                    <div className='box'>
                        {displayMovies.map((cart) => (
                            <div key={cart.id} className='details'>
                                <p>Title : {cart.Title}</p>
                                <p>Price : {cart.Price}</p>
                            </div>
                        ))}
                    </div>
                    <div className='check-out'>
                        <h3>Total : {300}</h3>
                        <h3>Discount : {discount}</h3>
                        <h3>Total Price : {150}</h3>
                    </div>
                </>
            ) : (
                <div className='empty-cart'>Cart is Empty</div>
            )}
        </div>
    )
}

export default CartItems