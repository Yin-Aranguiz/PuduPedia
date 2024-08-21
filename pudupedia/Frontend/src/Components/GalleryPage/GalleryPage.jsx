import React from 'react';
import './App.css';
import Accordion from './Accordion';
import Header from '../LandingPage/Header/Header';


const GalleryPage = ({ animal }) => {
    return (
        <div className="app-container">
            <Header />
            <div className="image">
                <img src={animal.imagen} alt={`Imagen de ${animal.nombre}`} />
            </div>
            
            <div className="accordion-wrapper">
                <Accordion animal={animal} />
            </div>
          
        </div>
    );
};

export default GalleryPage;