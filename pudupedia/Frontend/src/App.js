import React from 'react';
import Bubbles from './components/MapPage/Bubbles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import GamePage from './components/GamePage/GamePage';
import NavBar from './components/LandingPage/Navbar/NavBar';
import AboutUs from './components/AboutUsPage/AboutUs';
import SignLog from './components/LoginPage/signlog/SignLog';
import ParksPage from './components/ParksPage/ParksPage';


function App() {
    return (
        <Router>
        <NavBar />
           <Routes>
               <Route path="/" element={<LandingPage />} />
               <Route path="/juegos" element={<GamePage />} />
               {/* <Route path="/trivia/:id" element={<TriviaGame />} /> */}
               <Route path="/vida-silvestre" element={<Bubbles />} /> 
               <Route path='/parques' element={<ParksPage/>} />
               {/* <Route path="/puduGame/:id" element={<PuduHierbaPuma />} /> */} 
               <Route path='/quienes-somos' element={<AboutUs />} />
               <Route path="/signlog" element={<SignLog />} />
           </Routes>
        </Router>

        // <ApiRequest />


    );
}

export default App;