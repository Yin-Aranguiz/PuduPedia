import React from 'react';
import './Middle.css'
import starImg from './estrella.png';

const Middle = () => {

    return (
        <div className="top-section">
        <img
          src={starImg}
          alt="Imagen Rotativa"
          className="rotating-image"
        />
      </div>
    )
}

export default Middle