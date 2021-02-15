import React, { useState, useEffect } from 'react';
import './App.css';

import { getMovies } from './api/movies';
import { MoviesGallery } from './components/MoviesGallery';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const moviesFromServer = await getMovies();

    setMovies(moviesFromServer);
  }

  return (
    <div className="page">
      <div className="page-content">
        <MoviesGallery movies={movies} />
      </div>
      <div className="sidebar">
        <h3>Favorite list</h3>
        <p>The list is empty</p>
      </div>
    </div>
    
  );
}

export default App;
