import React from 'react';
import Header from '../LandingPage/Header/Header';
import Gallery from './Carousel/Gallery';
import Middle from './Middle/Middle';
import NavBar from '../LandingPage/Navbar/NavBar'
import InfoGame from './InfoGame/InfoGame';
import '../LandingPage/Footer/Footer.css'



const GamePage = () => {
   
    return (
        <div>
            <Header />
            <Middle />
            <NavBar/>
            <Gallery />
            <InfoGame/>
        </div>
    );
}

export default GamePage;