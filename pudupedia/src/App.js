import React from 'react';
// import PuduHierbaPuma from './Components/GamePage/PuHiPuGame/PuduHierbaPuma';
import Burbles from './Components/MapPage/Burbles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import GamePage from './Components/GamePage/GamePage';
// import TriviaGame from './Components/GamePage/TriviaGame/TriviaGame';
import NavBar from './Components/LandingPage/Navbar/NavBar';
import AboutUs from './Components/AboutUsPage/AboutUs';
// import SignLog from '../../pudupedia/src/Components/LoginPage/signlog/SignLog'
import SignLog from './Components/LoginPage/signlog/SignLog'



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
                <Route path='/quienes-somos' element={<AboutUs />} />
                <Route path="/signlog" element={<SignLog />} />
            </Routes>
        </Router>
        // <SignLog />

    );
}

export default App;