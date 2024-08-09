import React from 'react';
import './App.css';
import Burbles from './Components/MapPage/Burbles';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './Components/LandingPage/LandingPage';
// import GamePage from './Components/GamePage/GamePage';
// import TriviaGame from './Components/GamePage/TriviaGame/TriviaGame';
// import NavBar from './Components/LandingPage/Navbar/NavBar';
// import Mapita from './Components/MapPage/Mapita'

function App() {
    return (
        // <Router>
        //     <NavBar />
        //     <Routes>
        //         <Route path="/" element={<LandingPage />} />
        //         <Route path="/juegos" element={<GamePage />} />
        //         <Route path="/image/:id" element={<TriviaGame />} />
        //     </Routes>
        // </Router>
        // <Mapita />
       <Burbles />
    );
}

export default App;