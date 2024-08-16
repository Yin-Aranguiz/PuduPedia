import React from 'react';
import './App.css';
import Accordion from './Accordion';

const GalleryPage = ({ animal }) => {
    return (
        <div className="app-container">
            <div className="image">
                <img src={animal.imagen} alt={`Imagen de ${animal.nombre}`} /> {/* imagen de animal */}
            </div>
            
            <div className="accordion-wrapper">
                <Accordion animal={animal} />
            </div>
        </div>
    );
};

export default GalleryPage;