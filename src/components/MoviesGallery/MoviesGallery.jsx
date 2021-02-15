import React, { useState } from 'react';

import './MoviesGallery.css';
import { MovieCard } from '../MovieCard';
import { MovieModal } from '../MovieModal';

export const MoviesGallery = ({movies}) => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedMovie, setSelectedMovie] = ({});

  return (
    <>
      <div className="movies">
      {movies.map(movie => (
        <MovieCard
          setActive={setModalActive}
          key={movie.id}
          {...movie}
        />
      ))}
    </div>

    <MovieModal
      selectedMovie={selectedMovie}
      active={modalActive}
      setActive={setModalActive}
    />
    </>
  )
};

