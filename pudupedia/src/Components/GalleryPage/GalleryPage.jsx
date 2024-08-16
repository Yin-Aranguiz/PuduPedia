import React from 'react';
import './App.css';
import Accordion from './Accordion';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';

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
            <Footer className={'transformed'}/>
        </div>
    );
};

export default GalleryPage;