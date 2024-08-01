import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import Footer from './Footer';
import Infoboxes from './Infoboxes';
import NavBar from './NavBar';


// importa las imágenes desde la misma carpeta
import image1 from './landingpage1.png';
import image2 from './landingpage2.png';
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
    const handleScroll = () => {
      // Cambia el estado si el scroll es mayor a una cantidad específica (por ejemplo, 100px)
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useEffect se encarga de configurar y limpiar el intervalo (sin esto, las imágenes cambian muy rápido, pero aún no lo entiendo al 100%)
  useEffect(() => {
    if (!isScrolled) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // el índice vuelve a 0 después de llegar al final de la lista
        // El índice comienza en 0 y aumenta con el tiempo para mostrar la siguiente imagen.
        // el nuevo índice debe dar módulo 0 con la logintud de las imágenes para no pasarse a índices que no existen
      }, 3000); // Cambia la imagen cada 3 segundos (3000ms)

      return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
    }
  }, [isScrolled]);  // El array vacío [] asegura que el efecto solo se ejecute una vez

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    // para presionar el botón, pasa lo mismo que en el intervalo cada 3 segundos, se cambia la imagen según el índice

  };

  return (
    <div className="landing-page">
      <div //section-1
        className="background-image"
        style={{ backgroundImage: `url(${images[isScrolled ? 0 : currentImageIndex]})` }}
      // la imagen de fondo es la que tenga el índice actual
      >
        <img src={imageTitle} alt='title' className='title-image' />
        <button className="next-button" onClick={handleNextImage}></button>

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
