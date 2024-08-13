import React from 'react';
import './components/GalleryPage/App.css';
import Accordion from './components/GalleryPage/Accordion';
// import PuduHierbaPuma from './Components/GamePage/PuHiPuGame/PuduHierbaPuma';
//import Burbles from './Components/MapPage/Burbles';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import LandingPage from './Components/LandingPage/LandingPage';
//import GamePage from './Components/GamePage/GamePage';
//import TriviaGame from './Components/GamePage/TriviaGame/TriviaGame';
//import NavBar from './Components/LandingPage/Navbar/NavBar';


const App = () => {
    return (
        <div className="app-container">
            <div className="image">
                <img src="https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg" alt="Imagen del Personaje" />
            </div>
            
            <div className="accordion-wrapper">
                <Accordion/>
            </div>

        </div>
    );
};

export default App;

