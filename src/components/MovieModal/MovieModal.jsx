import React from 'react';

import './MovieModal.css';

export const MovieModal = ({ selectedMovie, active, setActive }) => {
  return (
    <div 
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        {selectedMovie.name}
      </div>
    </div>
  )
}