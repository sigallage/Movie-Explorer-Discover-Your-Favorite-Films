// src/utils/favoritesUtils.js

const FAVORITES_KEY = 'favoriteMovies';

export const getFavorites = () => {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const addFavorite = (movie) => {
  const favorites = getFavorites();
  const exists = favorites.find((m) => m.id === movie.id);
  if (!exists) {
    favorites.push(movie);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
};

export const removeFavorite = (movieId) => {
  const favorites = getFavorites().filter((m) => m.id !== movieId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

export const isFavorite = (movieId) => {
  return getFavorites().some((m) => m.id === movieId);
};
