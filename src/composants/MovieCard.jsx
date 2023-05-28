import React from 'react';

const MovieCard = ({ movie, onClick }) => {
  const handleCardClick = () => {
    onClick(movie);
  };

  return (
    <div className="movie-card" onClick={handleCardClick}>
      <img src={movie.posterURL} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <span></span>

    </div>
  );
};

export default MovieCard;