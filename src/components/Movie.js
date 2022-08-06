import React, { useState } from "react";

const Movie = ({ title, poster_path, id, vote_average, addProduct, submitPrice, createPrice, price}) => {

    // const prices = JSON.parse(localStorage.getItem("price"))

    const IMG_API = "https://image.tmdb.org/t/p/w500";

    const setVoteClass = (vote) => {
        if (vote >= 8) {
            return 'green'
        } else if (vote >= 6) {
            return 'orange'
        } else {
            return 'red'
        }
    };

    const onSubmitPrice = (e) => {
        e.preventDefault();
        submitPrice({
            Price : price
        })
    };

    const onAddCart = (e) => {
        addProduct({
            Title : title,
            Id : id,
            Price : price
        })
    }

    return (
        <div className="movie">
            <img src={IMG_API + poster_path} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className='btn-bottom'>
                <form className="price">
                    <button className='price-btn' type="submit" onClick={onSubmitPrice}>Add Price</button>
                    <input type="text" placeholder="Add Price..." className="price-ipt" onChange={createPrice} value={price} />
                </form>
                <div className="cart">
                    <button className='cart-btn' type="submit" onClick={onAddCart}>Add To Cart</button>
                </div>

            </div>
        </div>
    )
}
export default Movie