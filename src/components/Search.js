import React, { useState } from 'react';
import axios from 'axios';
import MovieCard from './movieCard';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const movieSearch = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=f78b3cc2b369d35bead8f32941666940&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className='form' onSubmit={movieSearch}>
        <label htmlFor='query' className='label'>
          
        </label>
        <input
          className='input'
          type='text'
          name='query'
          placeholder='Search Movie.....'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit' className='button'>
          Search
        </button>
      </form>
      <section className='card-list'>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </section>
    </>
  );
};

export default SearchMovies;
