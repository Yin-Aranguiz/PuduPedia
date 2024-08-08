import React from 'react';
import './Middle.css'
import starImg from './estrella.png';
import gameTitle from './GameTitle.png';

const Middle = () => {

    return (
        <div className="top-section">
          <img src={gameTitle} alt='game title' className='gameTitle'/>
        <img
          src={starImg}
          alt="Imagen Rotativa"
          className="rotating-image"
        />
        
      </div>
    )
}

export default Middle