import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Fetching popular movies from the new endpoint
        const response = await axios.get('http://localhost:8080/popular');
        console.log('Response:', response.data);  // Log to check the structure

        // Assuming the data you need is in response.data.results
        setMovies(response.data.results || response.data);  // Set movies array based on response
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      <h2>Popular Movies</h2>
      <div className="movie-grid">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              {/* Image source constructed with the backend URL */}
              <img src={`http://localhost:8080/${movie.poster}`} alt={movie.name} />
              <h3>{movie.name}</h3>
              <p>Release Date: {movie.date}</p>
              <p>Rating: {movie.rating}/5</p>
            </div>
          ))
        ) : (
          <p>No popular movies found</p>
        )}
      </div>
    </div>
  );
}

export default MovieList;
