import React from 'react';
import Header from '../Landing/Header';
import Footer from '../Landing/Footer';
import Gallery from './Gallery';
import Middle from './Middle';
import NavBar from '../Landing/NavBar'
import InfoGame from './InfoGame';
import '../Landing/Footer.css'


const GamePage = () => {
   
    return (
        <div>
            <Header />
            <Middle />
            <NavBar/>
            <Gallery />
            <InfoGame/>
            <Footer className="transformed"/>
        </div>
    );
}

export default GamePage;