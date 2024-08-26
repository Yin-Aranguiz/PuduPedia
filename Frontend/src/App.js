import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage1 from './Components/LandingPage/LandingPage1';
import GamePage from './Components/GamePage/GamePage';
import TriviaGame from './Components/GamePage/TriviaGame/TriviaGame';
import NavBar from './Components/LandingPage/Navbar/NavBar';
import ParkPage from './Components/ParksPage/ParkPage'; // Importa el componente ParkPage
// import MapsApi from './Components/ApiMaps/MapsApi'; // Importa el componente MapsApi

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<LandingPage1 />} />
                <Route path="/juegos" element={<GamePage />} />
                <Route path="/image/:id" element={<TriviaGame />} />
                {/* <Route path="/api" element={<MapsApi />} /> Ruta para el mapa */}
                <Route path="/parques" element={<ParkPage />} /> {/* Ruta para el ParkPage */}
            </Routes>
        </Router>
    );
}

export default App;

