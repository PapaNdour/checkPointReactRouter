import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onItemClick }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.title} movie={movie} onClick={onItemClick} />
      ))}
    </div>
  );
};

export default MovieList;
