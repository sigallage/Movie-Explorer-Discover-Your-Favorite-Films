import React, { createContext, useEffect, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    if (!favorites.find(fav => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(movie => movie.id !== id));
  };

  const isFavorite = (id) => favorites.some(movie => movie.id === id);

  return (
    <MovieContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </MovieContext.Provider>
  );
};
