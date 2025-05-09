// src/components/MovieGrid.jsx
import React from 'react';
import MovieCard from './MovieCard';
import './MovieGrid.css';

function MovieGrid({ movies, onLoadMore, hasMore }) {
  return (
    <div className="movie-grid-container">
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {hasMore && (
        <div className="load-more-container">
          <button onClick={onLoadMore} className="load-more-btn">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default MovieGrid;
