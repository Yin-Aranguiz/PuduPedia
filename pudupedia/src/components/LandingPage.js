import React, { useState, useEffect } from 'react';
import './LandingPage.css';

// Importa las imágenes desde la misma carpeta
import image1 from './landingpage1.png';
import image2 from './landingpage2.jpg';
import image3 from './landingpage3.jpg';
import imageTitle from './landingtitle.png';

// Define las imágenes como una lista de importaciones
const images = [
  image1,
  image2,
  image3,
];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // asegura que el índice vuelva a 0 después de llegar al final de la lista
    }, 3000); // Cambia la imagen cada 3 segundos (3000ms)

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="landing-page">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <img src={imageTitle} alt='title' className='title-image' />
        <button className="next-button" onClick={handleNextImage}></button>
      </div>
      <div className="section section-2">
        <img src={image2} alt='image2' className='static-image' />
      </div>
      <div className="section section-3">
        <img src={image3} alt='image3' className='static-image' />
      </div>
    </div>
  );
};


export default LandingPage;