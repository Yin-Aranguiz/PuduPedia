import React from 'react';
import Header from './Header';
// import Footer from './Footer';
import Gallery from './Gallery';
import Middle from './Middle';
// import InfoGame from './InfoGame';
import NavBar from './NavBar'

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