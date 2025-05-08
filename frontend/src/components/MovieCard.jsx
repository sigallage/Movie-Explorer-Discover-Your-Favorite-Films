// src/components/MovieCard.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';
import './MovieCard.css';

function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useContext(MovieContext);

  const handleFavClick = () => {
    isFavorite(movie.id) ? removeFavorite(movie.id) : addFavorite(movie);
  };

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={posterUrl} alt={movie.title} className="movie-poster" />
      </Link>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-meta">
          {movie.release_date?.split('-')[0]} | ⭐ {movie.vote_average}
        </p>
        <button onClick={handleFavClick} className="fav-btn">
          {isFavorite(movie.id) ? '💔 Remove' : '❤️ Favorite'}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
