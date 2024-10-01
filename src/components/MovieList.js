import React, { useState, useEffect } from 'react';
import axios from 'axios';

//const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
//const API_BASE_URL = 'http://localhost:8080/';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
          const response = await axios.get(`http://localhost:8080/allmovies1`);
          console.log('Response:', response.data);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      <h2>Popular Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img 
              src={`${movie.poster}`} 
              alt={movie.name} 
            />
            <h3>{movie.name}</h3>
            <p>Release Date: {movie.date}</p>
            <p>Rating: {movie.rating}/10</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;