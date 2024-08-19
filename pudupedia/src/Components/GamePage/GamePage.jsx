import React from 'react';
import Header from '../LandingPage/Header/Header';
import Middle from './Middle/Middle';
import InfoGame from './InfoGame/InfoGame';
import '../LandingPage/Footer/Footer.css';
import Carousel from './Carousel/Carousel';




const GamePage = () => {
   
    return (
        <div className='allGame'>
            <Header />
            <Middle />
            <Carousel />
            <InfoGame/>
        </div>
    );
}

export default GamePage;