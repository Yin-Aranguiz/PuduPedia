import React from 'react';

import InfoGame from './InfoGame/InfoGame';
import '../LandingPage/Footer/Footer.css';
import Carousel from './Carousel/Carousel';
import './GamePage.css';



const GamePage = () => {

    return (
        <div className='allGame'>
            <div class="backg"></div>
            <div class="backg backg2"></div>
            <div class="backg backg3"></div>
            
            <h1 className='gameTitle'>JUEGOS</h1>
            <Carousel />
            <InfoGame />
        </div>
    );
}

export default GamePage;