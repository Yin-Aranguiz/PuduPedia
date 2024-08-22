import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import Footer from './Footer/Footer';
import Infoboxes from './Infoboxes/Infoboxes';
import NavBar from './Navbar/NavBar';
import Header from './Header/Header';

// importa las imágenes desde la misma carpeta
import image1 from './landingpage1.jpg';
import image2 from './landingpage2.jpg';
import image3 from './landingpage3.jpg';
import imageTitle from './landingtitle.svg';



// define las imágenes en el array images
const images = [
  image1,
  image2,
  image3
];

const LandingPage = () => {
  // índice actual, cambio de índice. El índice actual parte de 0
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Una función llamada handleScroll que se ejecutará cada vez que el usuario haga scroll
    const handleScroll = () => {
      // Cambia el estado isScrolled a true si el usuario ha hecho scroll más de 100px, de lo contrario lo cambia a false
      setIsScrolled(window.scrollY > 100);
    };
    // Se añade un event listener al evento 'scroll' del objeto window. 
    // Esto significa que cada vez que el usuario haga scroll, se ejecutará la función handleScroll
    window.addEventListener('scroll', handleScroll);
  
    // Función de limpieza que se ejecutará cuando el componente se desmonte.
    // Elimina el event listener para evitar posibles problemas de rendimiento o errores
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // El array vacío [] significa que este efecto solo se ejecutará una vez
  
  // useEffect se encarga de configurar y limpiar el intervalo
  useEffect(() => {
    if (!isScrolled) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // el índice vuelve a 0 después de llegar al final de la lista
        // El índice comienza en 0 y aumenta con el tiempo para mostrar la siguiente imagen.
        // el nuevo índice debe dar módulo 0 con la longitud de las imágenes para no pasarse a índices que no existen
      }, 3000); // Cambia la imagen cada 3 segundos (3000ms)

      return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
    }
  }, [isScrolled]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
    // Cambia la imagen al índice del punto clicado
  };

  return (
    <div className="landing-page"> 
      <Header />
      <div //section-1
        className="background-image"
        style={{ backgroundImage: `url(${images[isScrolled ? 0 : currentImageIndex]})` }}
        // la imagen de fondo es la que tenga el índice actual
      >
        <img src={imageTitle} alt='title' className='title-image' />

        <div className="dots-container">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentImageIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        {/* Añadido el contenedor de puntos */}
      </div>
      <NavBar />
      <div className="section section-2">
        <img src={image2} alt='image2' className='static-image' />
        <Infoboxes />
        <Footer />
      </div> 
    </div>
  );
};

export default LandingPage;
