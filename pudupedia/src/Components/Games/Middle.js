import React from 'react';
import './Middle.css'
import starImg from './estrella.png';

const Middle = () => {

    return (
        <div className="top-section">
            <h1 className="main-title">JUEGOS</h1>
        <img
          src={starImg}
          alt="Imagen Rotativa"
          className="rotating-image"
        />
        <div className="title-container">
          <ul className="list">
            <li>Puzzle deslizante</li>
            <li>Trivia</li>
            <li>Pudú, Hierba o Puma</li>
            <li>Adivina el animal</li>
            <li>Cartas de memoria</li>
            <li>Encuentra al Pudú</li>
          </ul>
        </div>
      </div>
    )
}

export default Middle