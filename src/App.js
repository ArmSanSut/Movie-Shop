import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const Search_API = "https://api.themoviedb.org/3/search/movie?api_key=d51576736f214393b6640a78091d101c&query="
  const Feature_API = "https://api.themoviedb.org/3/discover/movie?api_key=d51576736f214393b6640a78091d101c&sort_by=popularity.desc"

  useEffect(() => {
    getMovies(Feature_API);
  }, [])

  const getMovies = async (API) => {
    const res = await axios.get(API)
    const displayMovies = res.data.results

    setMovies(displayMovies);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(Search_API + searchTerm)

      setSearchTerm('')
    }


  }
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }
  console.log(movies)
  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            className='search'
            type="search"
            placeholder='Search Movies....'
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className='movie-container'>
        {movies.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
      
    </div>
  );
}

export default App;
