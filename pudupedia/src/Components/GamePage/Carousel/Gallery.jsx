import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import TriviaImg from '../TriviaGame/PuduReading.jpg';

const Gallery = () => {
  const [scrollPosition, setScrollPosition] = useState(0); // Define el estado para la posición de desplazamiento inicial.

  useEffect(() => {
    const gallery = document.querySelector('.gallery'); // Selecciona el contenedor de la galería usando una clase CSS.

    const handleScroll = () => {
      setScrollPosition(gallery.scrollLeft); // Actualiza el estado de la posición de desplazamiento horizontal.
    };

    const handleWheel = (e) => {
      e.preventDefault(); // Previene el comportamiento predeterminado del desplazamiento vertical.
      gallery.scrollLeft += e.deltaY * 5; // Ajusta el desplazamiento horizontal según el movimiento de la rueda del mouse.
      // dice cuántos píxeles se han desplazado horizontalmente el contenido de un elemento que tiene un desbordamiento horizontal (scroll).
      // deltaY es una propiedad del objeto del evento wheel en JavaScript que representa el cambio en el desplazamiento de la rueda del mouse a lo largo del eje Y (vertical)
    // *7 para ajustar la velocidad del desplazamiento horizontal
    };

    const smoothScroll = () => {
      const itemWidth = gallery.children[0]?.clientWidth || 0; // Obtiene el ancho del primer hijo (imagen) o 0 si no existe.
      const itemCount = gallery.children.length / 2; // Calcula el número de elementos en la galería, asumiendo duplicados.
      const scrollWidth = gallery.scrollWidth; // Obtiene el ancho total del contenido desplazable.

      // Ajusta el desplazamiento horizontal si está fuera de rango.
      if (gallery.scrollLeft < itemWidth) {
        gallery.scrollLeft = scrollWidth / 3; // Ajusta si el desplazamiento es menor que el ancho de un ítem.
      } else if (gallery.scrollLeft > itemCount * itemWidth * 2) {
        gallery.scrollLeft = scrollWidth / 3; // Ajusta si el desplazamiento es mayor que el ancho total de los ítems.
      }
    };

    gallery.addEventListener('scroll', handleScroll); // Añade un evento para manejar el desplazamiento.
    gallery.addEventListener('wheel', handleWheel); // Añade un evento para manejar el desplazamiento con la rueda del mouse.

    const interval = setInterval(smoothScroll, 50); // Configura un intervalo para ajustar el desplazamiento suavemente cada 50 ms.

    return () => {
      gallery.removeEventListener('scroll', handleScroll); // Limpia el manejador de eventos de desplazamiento al desmontar el componente.
      gallery.removeEventListener('wheel', handleWheel); // Limpia el manejador de eventos de la rueda del mouse.
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta.
    };
  }, []);

  useEffect(() => {
    const gallery = document.querySelector('.gallery'); // Selecciona el contenedor de la galería nuevamente.

    Array.from(gallery.children).forEach((img) => { // Recorre cada imagen en la galería.
      const imgCenter = img.offsetLeft + img.clientWidth / 2; // Calcula el centro de la imagen.
      const center = scrollPosition + gallery.clientWidth / 2; // Calcula el centro visible de la galería.
      const distance = Math.abs(center - imgCenter); // Calcula la distancia entre el centro visible y el centro de la imagen.
      const scale = Math.max(1 - distance / (gallery.clientWidth / 2), 0.6); // Calcula el factor de escala basado en la distancia.
      img.style.transform = `scale(${scale})`; // Aplica la escala a la imagen.
      img.style.transition = `transform 0.5s ease;`
    });
  }, [scrollPosition]); // Este useEffect se ejecuta cada vez que cambia la posición de desplazamiento.

  const images = [
    { src: 'https://via.placeholder.com/500x250?text=Image+1', alt: '1', id: '1' },
    { src: 'https://via.placeholder.com/500x250?text=Image+2', alt: '2', id: '2'},
    { src: 'https://via.placeholder.com/500x250?text=Image+3', alt: '3', id: '3'},
    { src: 'https://via.placeholder.com/500x250?text=Image+4', alt: '4', id: '4'},
    { src: 'https://via.placeholder.com/500x250?text=Image+5', alt: '5', id: '5'},
    { src: 'https://via.placeholder.com/500x250?text=Image+6', alt: '6', id: '6'},
    { src: 'https://via.placeholder.com/500x250?text=Image+7', alt: '7', id: '7'},
    { src: TriviaImg, alt: '8', id: '8'},
    { src: 'https://via.placeholder.com/500x250?text=Image+9', alt: '9', id: '9'},
    { src: 'https://via.placeholder.com/500x250?text=Image+10', alt: '10', id: '10'},
    { src: 'https://via.placeholder.com/500x250?text=Image+11', alt: '11', id: '11'},
    { src: 'https://via.placeholder.com/500x250?text=Image+12', alt: '12', id: '12'},
    { src: 'https://via.placeholder.com/500x250?text=Image+13', alt: '13', id: '13'},
    { src: TriviaImg, alt: '14', id: '14'},
    { src: 'https://via.placeholder.com/500x250?text=Image+15', alt: '15', id: '15'},
    { src: 'https://via.placeholder.com/500x250?text=Image+16', alt: '16', id: '16'},
    { src: 'https://via.placeholder.com/500x250?text=Image+17', alt: '17', id: '17'},
    { src: 'https://via.placeholder.com/500x250?text=Image+18', alt: '18', id: '18'}
  ];

  return (
    <div className="gallery">
      {images.map((imageGame) => (
        <Link key={imageGame.id} to={`/image/${imageGame.id}`}>
          <img
            src={imageGame.src} 
            alt={imageGame.alt} 
            className='circle'
          />
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
