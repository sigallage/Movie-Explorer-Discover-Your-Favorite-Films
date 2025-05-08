import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
import './FavoritesPage.css';

function FavoritesPage() {
  const { favorites } = useContext(MovieContext);

  return (
    <div className="favorites-container">
      <h2>Your Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet. Start adding some!</p>
      ) : (
        <div className="movie-grid">
          {favorites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
