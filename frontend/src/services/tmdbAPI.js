// src/services/tmdbAPI.js
import axios from 'axios';

const API_KEY = 'YOUR_TMDB_API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async (page = 1) => {
  const res = await axios.get(`${BASE_URL}/trending/movie/week`, {
    params: { api_key: API_KEY, page },
  });
  return res.data;
};

export const searchMovies = async (query, page = 1) => {
  const res = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query, page },
  });
  return res.data;
};

export const getMovieDetails = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY, append_to_response: 'videos,credits' },
  });
  return res.data;
};
