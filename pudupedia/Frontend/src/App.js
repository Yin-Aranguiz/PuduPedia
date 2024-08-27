import React from 'react';
import TriviaGame from './Components/GamePage/TriviaGame/TriviaGame';
import Memopudu from './Components/GamePage/MemoPudu/Memopudu';
import PuduHierbaPuma from './Components/GamePage/PuHiPuGame/PuduHierbaPuma';
import Bubbles from './Components/MapPage/Bubbles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import GamePage from './Components/GamePage/GamePage';
import AboutUs from './Components/AboutUsPage/AboutUs';
import SignLog from './Components/LoginPage/signlog/SignLog';
import ParksPage from './Components/ParksPage/ParksPage';
import ForgotPassword from './Components/LoginPage/signlog/forgotPassword';
import Accordion from './Components/GalleryPage/Accordion';
import ResetPassword from './Components/LoginPage/signlog/resetPassword';
import NewNavbar from './Components/LandingPage/Navbar/NewNavbar';
import ResetPage from './Components/LoginPage/signlog/ResetPage';




function App() {
    return (
        <Router>
        <NewNavbar />
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
            <Route path="/change-password-reset" element={<ResetPage />} />
        </Routes>
    </Router>
    
    );
}

export default App;
