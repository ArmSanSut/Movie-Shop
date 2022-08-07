import React, { useState, useEffect } from 'react'
import { BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import './CartItems.css'
import Modal from './Modal';
const CartItems = () => {
    const [totalPrice, setTotalPrice] = useState([]);
    const [discount, setDiscount] = useState(0)
    const [sum, setSum] = useState(0)
    const [movieSelected, setMovieSelected] = useState("");
    const [openModal, setOpenModal] = useState(false);

    // const quantity = localStorage.getItem("quantity");
    const displayMovies = JSON.parse(localStorage.getItem("cart"))

    console.log(displayMovies === null)

    useEffect(() => {
        if (displayMovies !== null) {
            setTotalPrice(displayMovies.map(x => parseInt(x.Price)))
        }
        localStorage.setItem('Total Price', totalPrice)
    }, [])
    console.log(movieSelected)
    console.log(totalPrice)

    useEffect(() => {
        const total = totalPrice.reduce((x, y) => x + y, 0)
        setSum(total)
        console.log("Total Price", sum)
    }, [totalPrice])

    console.log("1",sum)

    const quantity = totalPrice.length
    console.log(quantity)

    useEffect(() => {

        if (quantity > 5) {
            setDiscount(0.2 * sum)
        } else if (quantity > 3) {
            setDiscount(0.1 * sum)
        } else {
            setDiscount(0)
        }

    }, [quantity])

    console.log("discount", discount)

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
                    <div className='footer'>
                        <div className='order-div'>
                            <button className='modalBtn' onClick={() => setOpenModal(true)}>Click To Order Products</button>
                            {openModal && <Modal setOpenModal= {setOpenModal} openModal= {openModal}/>}
                        </div>
                        <div className='check-out'>
                            <h3>Total : {sum}</h3>
                            <h3>Discount : {discount}</h3>
                            <h3>Total Paid : {sum - discount}</h3>
                        </div>
                    </div>
                </>
            ) : (
                <div className='empty-cart'>Cart is Empty</div>
            )}
        </div>
    )
}

export default CartItems