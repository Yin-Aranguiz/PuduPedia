import React from 'react';
import Header from '../Landing/Header';
// import Footer from './Footer';
import Gallery from './Gallery';
import Middle from './Middle';
// import InfoGame from './InfoGame';
import NavBar from '../Landing/NavBar'

const GamePage = () => {
   
    return (
        <div>
            <Header />
            <Middle />
            <NavBar/>
            <Gallery />
        </div>
    );
}

export default GamePage;