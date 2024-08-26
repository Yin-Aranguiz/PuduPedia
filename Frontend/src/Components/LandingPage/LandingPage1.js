import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import Footer from './Footer/Footer';
import Infoboxes from './Infoboxes/Infoboxes';
import NavBar from './Navbar/NavBar';
import Header from './Header/Header';

import image1Light from './landingpage1.png';
import image2Light from './landingpage2.png';
import image3Light from './landingpage3.jpg';
import image1Dark from './landingpage6.jpg';
import image2Dark from './landingpage7.jpg';
import image3Dark from './landingpage8.jpg';
import imageTitle from './landingtitle.svg';

const imagesLight = [image1Light, image2Light, image3Light];
const imagesDark = [image1Dark, image2Dark, image3Dark];

const LandingPage1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isScrolled) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (isDarkMode ? imagesDark.length : imagesLight.length));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isScrolled, isDarkMode]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="landing-page">
      <Header onToggle={setIsDarkMode} />
      <div
        className="background-image"
        style={{ backgroundImage: `url(${(isDarkMode ? imagesDark : imagesLight)[isScrolled ? 0 : currentImageIndex]})` }}
      >
        <img src={imageTitle} alt='title' className='title-image' />

        <div className="dots-container">
          {(isDarkMode ? imagesDark : imagesLight).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentImageIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
      <NavBar />
      <div className="section section-2">
        <img src={(isDarkMode ? image2Dark : image2Light)} alt='image2' className='static-image' />
        <Infoboxes />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage1;
