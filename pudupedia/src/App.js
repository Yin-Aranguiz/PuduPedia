import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/Landing/LandingPage';
import GamePage from './Components/Games/GamePage';
import TriviaGame from './Components/Games/TriviaGame';
import NavBar from './Components/Landing/NavBar';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/juegos" element={<GamePage />} />
                <Route path="/trivia" element={<TriviaGame />} />
                <Route path="/image/:id" element={<TriviaGame />} />
            </Routes>
        </Router>
    );
}

export default App;