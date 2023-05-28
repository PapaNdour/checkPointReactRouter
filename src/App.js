import React, { useState } from 'react';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import MovieList from './composants/MovieList';
import Filtre from './composants/Filtre';
import app from './composants/app.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Jurassic Park',
      description: 'Le temps des dinosaures vous dit bonjour!',
      posterURL: 'https://assets.e-cinema.com/UPLOADS/D32475-jurassicpark.jpg',
      rating: 4.5,
      trailerURL: 'URL de la bande-annonce du film 1'
    },
    {
      title: 'Last Action Hero',
      description: 'Plus fou que lui tu es fou',
      posterURL: 'https://assets.e-cinema.com/UPLOADS/D2B923-last-action-hero-affiche.jpg',
      rating: 5,
      trailerURL: 'URL de la bande-annonce du film 2'
    },
    {
      title: 'Forrest gump',
      description: 'Vas y, cours!',
      posterURL: 'https://assets.e-cinema.com/UPLOADS/AAF9DF-forrest-gump-affiche.jpg',
      rating: 4.9,
      trailerURL: 'URL de la bande-annonce du film 3'

    },
    
    // Ajoutez un nouveau film ici
  ]);

  const handleFilter = ({ title, rating }) => {
 
    const filteredMovies = movies.filter(movie => {
      const isTitleMatch = movie.title.toLowerCase().includes(title.toLowerCase());
      const isRatingMatch = rating === '' || movie.rating >= parseFloat(rating);
      return isTitleMatch && isRatingMatch;
    });

    setMovies(filteredMovies);
  };

  const handleAddMovie = (newMovie) => {

    setMovies([...movies, newMovie]);
  };

  return (

    <>
      <div className="app">
        <h1>Ma collection de films</h1>
        <h2>- 2023 -</h2>
        <Routes>
          <Route exact path="/">
            <Filtre onFilter={handleFilter} />
            <MovieList movies={movies} />
          </Route>
          <Route path="/film/:title">
            <FilmDescription movies={movies} />
          </Route>
        </Routes>
      </div>
    </>

  );
};

const FilmDescription = ({ movies }) => {
  const handleGoBack = () => {
    // Naviguer vers la page d'accueil
    window.history.back();
  };

  return (
    <div className="film-description">
      <h2>Description du Film</h2>
      <p>{movies.description}</p>
      <iframe
        width="560"
        height="315"
        src={movies.trailerURL}
        title="Bande-annonce"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <button onClick={handleGoBack}>Retour à l'accueil</button>
    </div>
  );
};

export default App;