import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css'
import Movie from './Movie';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function HomePage({ addProductFromChild }) {
    
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [price, setPrice] = useState('');
    const [, setDetail] = useState([]);

    const quantity = localStorage.getItem("quantity")

    const navigate = useNavigate();

    const Search_API = "https://api.themoviedb.org/3/search/movie?api_key=d51576736f214393b6640a78091d101c&query="
    const Feature_API = "https://api.themoviedb.org/3/discover/movie?api_key=d51576736f214393b6640a78091d101c&sort_by=popularity.desc"

    useEffect(() => {
        getMovies(Feature_API);
    }, []);

    const getMovies = async (API) => {
        const res = await axios.get(API)
        const displayMovies = res.data.results
        setMovies(displayMovies);
    };

    const createPrice = (e) => {
        setPrice(e.target.value)
        // localStorage.setItem("price", JSON.stringify(price))
    };
    
    const submitPriceFromChild = (childData) => {
        setDetail(childData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (searchTerm) {
            getMovies(Search_API + searchTerm)
            setSearchTerm('')
        }
    };

    const toCartItems = () => {
        navigate("/cart-items")
    };

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <header>
                <h1 className='head-text'><Link to="/">Movie Shop</Link></h1>
                <form onSubmit={handleSubmit} className='search-form'>
                    <input
                        className='search'
                        type="search"
                        placeholder='Search Movies....'
                        value={searchTerm}
                        onChange={handleOnChange}
                    />
                </form>
                <div className='icon-cart'>
                    <FaShoppingCart color='white' fontSize='40px' />

                    <Badge className='badge' onClick={toCartItems}>{quantity}</Badge>
                </div>
            </header>
            <div className='movie-container'>
                {movies.map(movie => (
                    <Movie key={movie.id} {...movie} addProduct={addProductFromChild} submitPrice= {submitPriceFromChild} createPrice={createPrice} price = {price} quantity= {quantity} /> 
                ))}
            </div>

        </div>
    )
}

export default HomePage