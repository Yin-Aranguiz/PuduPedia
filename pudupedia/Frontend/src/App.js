import React from 'react';
import TriviaGame from './components/GamePage/TriviaGame/TriviaGame';
import Memopudu from './components/GamePage/MemoPudu/Memopudu';
import PuduHierbaPuma from './components/GamePage/PuHiPuGame/PuduHierbaPuma';
import Bubbles from './components/MapPage/Bubbles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import GamePage from './components/GamePage/GamePage';
import NavBar from './components/LandingPage/Navbar/NavBar';
import AboutUs from './components/AboutUsPage/AboutUs';
import SignLog from './components/LoginPage/signlog/SignLog';
import ParksPage from './components/ParksPage/ParksPage';
import ForgotPassword from './components/LoginPage/signlog/ForgotPassword';
import Accordion from './components/GalleryPage/Accordion';
import ResetPassword from './components/LoginPage/signlog/ResetPassword';



function App() {
    return (
        <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/juegos" element={<GamePage />} />
            <Route path="/trivia" element={<TriviaGame />} />
            <Route path="/vida-silvestre" element={<Bubbles />} />
            <Route path='/parques' element={<ParksPage />} />
            <Route path="/puduGame" element={<PuduHierbaPuma />} />
            <Route path="/memopudu" element={<Memopudu />} />
            <Route path='/quienes-somos' element={<AboutUs />} />
            <Route path="/signlog" element={<SignLog />} />
            <Route path="/change-password" element={<ForgotPassword />} />
            <Route path="/accordion/:animal" element={<Accordion />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/forgot-password-security" element={<ResetPassword />} />

        </Routes>
    </Router>
    
    );
}

export default App;