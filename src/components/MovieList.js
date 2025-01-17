import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieList() {
  const [movies, setMovies] = useState([]);

  
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/allmovies1`);
        console.log('Response:', response.data);  
        setMovies(response.data.results || response.data);  
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      <h2>Movies</h2>
      <div className="movie-grid">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={`http://localhost:8080/${movie.poster}`} alt={movie.name} />
              <h3>{movie.name}</h3>
              <p>Release Date: {movie.date}</p>
              <p>Rating: {movie.rating}/5</p>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
}

export default MovieList;
