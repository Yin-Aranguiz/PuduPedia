import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import Footer from './Footer';
import InfoBoxes from './InfoBoxes'; // Asegúrate de que el nombre sea correcto
import NavBar from './NavBar';

// Importar imágenes
import image1 from './landingpage5.jpg';
import image2 from './landingpage8.jpg';
import image3 from './landingpage6.jpg';
import imageTitle from './landingtitle.svg';

const images = [
  image1,
  image2,
  image3,
];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Definir el estilo oscuro para InfoBoxes
  const infoboxStyle = {
    backgroundColor: '#00FF0000', // color de fondo transparente del container
    color: '#ddd', // color de texto claro
    padding: '20px', // padding para separación
    borderRadius: '8px', // bordes redondeados opcional
  };

  return (
    <div className="landing-page">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <img src={imageTitle} alt='title' className='title-image' />
        <button className="next-button" onClick={handleNextImage}></button>
        <NavBar />
      </div>
      <div className="section section-2">
        <img src={image2} alt='image2' className='static-image' />
        <InfoBoxes style={infoboxStyle} />
      </div>
      <div className="section section-3">
        <img src={image3} alt='image3' className='static-image' />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
