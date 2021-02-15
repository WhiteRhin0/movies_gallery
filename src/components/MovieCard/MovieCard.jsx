import React from 'react';

import './MovieCard.css';
import { getMovieDetails } from '../../api/movies';

export const MovieCard = ({setActive, name, img, year }) => {

  return (
    <div className="card" onClick={() => {
      setActive(true);
    }}>
      {(
        <>
          <div className="card-image">
            <figure className="image">
            <button className="favorite">
              STAR
            </button>
              <img
                src={img}
                alt="Film logo"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title">{name}</p>
                <p className="year">{year}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
};
