import React from 'react';

import './MovieModal.css';

export const MovieModal = ({ active, setActive }) => {
  return (active && (
    <div 
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        Sup
      </div>
    </div>
  ))
}