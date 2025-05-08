import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetailsPage.css';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const fetchMovieDetails = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movie/${id}`, {
        params: { api_key: API_KEY, append_to_response: 'videos' }
      });
      setMovie(res.data);
    } catch (err) {
      console.error('Failed to load movie details', err);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    // eslint-disable-next-line
  }, [id]);

  if (!movie) return <p className="loading-text">Loading...</p>;

  const trailer = movie.videos?.results.find(v => v.type === 'Trailer' && v.site === 'YouTube');

  return (
    <div className="movie-details-container">
      <img
        className="movie-poster"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : 'https://via.placeholder.com/500x750?text=No+Image'
        }
        alt={movie.title}
      />
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p className="overview">{movie.overview}</p>
        <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>

        {trailer && (
          <div className="trailer-section">
            <h3>Watch Trailer</h3>
            <iframe
              title="trailer"
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetailsPage;
