import React from 'react';
// import PuduHierbaPuma from './Components/GamePage/PuHiPuGame/PuduHierbaPuma';
import Burbles from './Components/MapPage/Burbles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import GamePage from './Components/GamePage/GamePage';
// import TriviaGame from './Components/GamePage/TriviaGame/TriviaGame';
import NavBar from './Components/LandingPage/Navbar/NavBar';


function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/juegos" element={<GamePage />} />
                {/* <Route path="/trivia/:id" element={<TriviaGame />} /> */}
                <Route path="/vida-silvestre" element={<Burbles />} />
                {/* <Route path="/puduGame/:id" element={<PuduHierbaPuma />} /> */}
            </Routes>
        </Router>

    );
}

export default App;