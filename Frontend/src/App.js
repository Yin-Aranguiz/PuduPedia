import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewNavbar from './Components/LandingPage/Navbar/NewNavbar';
import LandingPage from './Components/LandingPage/LandingPage';
import GamePage from './Components/GamePage/GamePage';
import TriviaGame from './Components/GamePage/TriviaGame/TriviaGame';
import Memopudu from './Components/GamePage/MemoPudu/Memopudu';
import PuduHierbaPuma from './Components/GamePage/PuHiPuGame/PuduHierbaPuma';
import Bubbles from './Components/MapPage/Bubbles';
import ParksPage from './Components/ParksPage/ParksPage';
import AboutUs from './Components/AboutUsPage/AboutUs';
import SignLog from './Components/LoginPage/signlog/SignLog';
import ForgotPassword from './Components/LoginPage/signlog/forgotPassword';
import ResetPassword from './Components/LoginPage/signlog/resetPassword';
import ResetPage from './Components/LoginPage/signlog/ResetPage';
import Accordion from './Components/GalleryPage/Accordion';
import UserPage from './Components/LoginPage/User/UserPageRoutes/UserPage';
import NotifPage from './Components/LoginPage/User/UserPageRoutes/NotifTab';
import FavesPage from './Components/LoginPage/User/UserPageRoutes/FavesTab';
import SettingsPage from './Components/LoginPage/User/UserPageRoutes/SettingsTab';
import HelpPage from './Components/LoginPage/User/UserPageRoutes/HelpTab';
import Header from './Components/LandingPage/Header/Header';
import FullUserPage from './Components/LoginPage/User/FullUserPage';
import ApiRequest from './Components/NoticesPage/ApiRequest';
import News from './Components/NoticesPage/News';


function App() {
  
  return (
 
      <Router basename="/Pudupedia">
        <Header />
        <NewNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/juegos" element={<GamePage />} />
          <Route path="/trivia" element={<TriviaGame />} />
          <Route path="/vida-silvestre" element={<Bubbles />} />
          <Route path="/parques" element={<ParksPage />} />
          <Route path="/puduGame" element={<PuduHierbaPuma />} />
          <Route path="/memopudu" element={<Memopudu />} />
          <Route path="/quienes-somos" element={<AboutUs />} />
          <Route path="/signlog" element={<SignLog />} />
          <Route path="/change-password" element={<ForgotPassword />} />
          <Route path="/accordion/:animal" element={<Accordion />} />
          <Route path="/accordion/:item" element={<Accordion />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/forgot-password-security" element={<ResetPassword />} />
          <Route path="/change-password-reset" element={<ResetPage />} />
          <Route path="/user/*" element={<FullUserPage />}>
            <Route path='prof' element={<UserPage />} />
            <Route path="notifs" element={<NotifPage />} />
            <Route path="faves" element={<FavesPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="help" element={<HelpPage />} />
          </Route>
          <Route path='/chile/:title' element={<News />} />
          <Route path='/chile' element={<ApiRequest />} />
          
        </Routes>
      </Router>
      
  
  );
}

export default App;