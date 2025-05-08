import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import './Home.css';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const fetchTrendingMovies = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/trending/movie/week`, {
        params: {
          api_key: API_KEY,
          page
        }
      });
      setMovies(prev => [...prev, ...res.data.results]);
    } catch (err) {
      console.error('Failed to load trending movies', err);
    }
  };

  const searchMovies = async () => {
    if (query.trim() === '') return;
    try {
      const res = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query,
          page
        }
      });
      if (page === 1) {
        setMovies(res.data.results);
      } else {
        setMovies(prev => [...prev, ...res.data.results]);
      }
    } catch (err) {
      console.error('Search failed', err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    searchMovies();
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (query === '') {
      fetchTrendingMovies();
    } else {
      searchMovies();
    }
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="home-container">
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <button onClick={loadMore} className="load-more-btn">Load More</button>
    </div>
  );
}

export default Home;
