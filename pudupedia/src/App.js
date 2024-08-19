// import Application from './Components/GamePage/Carousel/Carousel';
import React from 'react';
// import Memopudu from './Components/GamePage/MemoPudu/Memopudu';
// import InfoMap from './Components/MapPage/InfoMap';
// import Bubbles from './Components/MapPage/Bubbles';
// import PuduHierbaPuma from './Components/GamePage/PuHiPuGame/PuduHierbaPuma';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './Components/LandingPage/LandingPage';
import GamePage from './Components/GamePage/GamePage';
// import TriviaGame from './Components/GamePage/TriviaGame/TriviaGame';
// import NavBar from './Components/LandingPage/Navbar/NavBar';
// import AboutUs from './Components/AboutUsPage/AboutUs';
// import SignLog from './Components/LoginPage/signlog/SignLog';
// import AppGallery from './Components/GalleryPage/AppGallery';
// import ParksPage from './Components/ParksPage/ParksPage';


function App() {
    return (
        // <Router>
        // <NavBar />
        //    <Routes>
        //        <Route path="/" element={<LandingPage />} />
        //        <Route path="/juegos" element={<GamePage />} />
        //        {/* <Route path="/trivia/:id" element={<TriviaGame />} /> */}
        //        <Route path="/vida-silvestre" element={<Bubbles />} /> 
        //        <Route path='/parques' element={<ParksPage/>} />
        //        {/* <Route path="/puduGame/:id" element={<PuduHierbaPuma />} /> */} 
        //        <Route path='/quienes-somos' element={<AboutUs />} />
        //        <Route path="/signlog" element={<SignLog />} />
        //    </Routes>
        // </Router>
        <GamePage />
        
        
       
    );
}

export default App;