import React, { useEffect, useRef } from 'react';
import './Gallery.css';

const Gallery = () => {
  // Declara un componente funcional llamado Gallery.
  
  const galleryRef = useRef(null);
  // Crea una referencia (galleryRef) para acceder al DOM del contenedor de la galería.

  useEffect(() => {
    // useEffect se ejecuta después de que el componente se monta.
    
    const handleScroll = () => {
      // Declara una función para manejar el evento de desplazamiento.
      if (galleryRef.current) {
        // Verifica si galleryRef.current existe (es decir, si el DOM está cargado).
        
        const scrollLeft = galleryRef.current.scrollLeft;
        // Obtiene la posición actual de desplazamiento horizontal.
        
        const width = galleryRef.current.clientWidth;
        // Obtiene el ancho del contenedor de la galería.
        
        const center = scrollLeft + width / 2;
        // Calcula el centro visible de la galería.
        
        Array.from(galleryRef.current.children).forEach((img) => {
          // Convierte los hijos de galleryRef.current en un array y recorre cada imagen.
          
          const imgCenter = img.offsetLeft + img.clientWidth / 2;
          // Calcula el centro de cada imagen.
          
          const distance = Math.abs(center - imgCenter);
          // Calcula la distancia entre el centro visible y el centro de la imagen.
          
          const scale = Math.max(1 - distance / (width / 2), 0.7);
          // Calcula el factor de escala basado en la distancia. Las imágenes cerca del centro se escalan más.
          
          img.style.transform = `scale(${scale})`;
          // Aplica la escala calculada a la imagen.
        });
      }
    };

    const handleWheel = (e) => {
      // Declara una función para manejar el evento de rueda del mouse.
      if (galleryRef.current) {
        // Verifica si galleryRef.current existe.
        
        const scrollSpeed = 7; // Ajusta la velocidad del scroll
        galleryRef.current.scrollLeft += e.deltaY * scrollSpeed;
        // Ajusta el desplazamiento horizontal basado en el movimiento de la rueda del mouse.
        
        e.preventDefault(); // Evita el desplazamiento vertical predeterminado
        // Previene el comportamiento predeterminado del scroll vertical.
      }
    };

    const smoothScroll = () => {
      // Declara una función para manejar el ajuste suave del desplazamiento.
      if (galleryRef.current) {
        // Verifica si galleryRef.current existe.
        
        const gallery = galleryRef.current;
        const itemWidth = gallery.children[0].clientWidth;
        // Obtiene el ancho de un elemento hijo (asumiendo que todos los elementos tienen el mismo ancho).
        
        const itemCount = gallery.children.length / 2;
        // Calcula la cantidad de elementos (asumiendo que hay duplicados en la galería).
        
        const scrollWidth = gallery.scrollWidth;
        // Obtiene el ancho total del contenido desplazable.
        
        // Verifica si el scroll está fuera de rango y ajusta.
        if (gallery.scrollLeft < itemWidth) {
          gallery.scrollLeft = scrollWidth / 3;
        } else if (gallery.scrollLeft > (itemCount * itemWidth * 2)) {
          gallery.scrollLeft = scrollWidth / 3;
        }
      }
    };

    const gallery = galleryRef.current;
    gallery.addEventListener('scroll', handleScroll);
    gallery.addEventListener('wheel', handleWheel);
    // Añade los manejadores de eventos para el desplazamiento y la rueda del mouse al contenedor de la galería.

    const interval = setInterval(smoothScroll, 50); // Ajusta el intervalo para mejor rendimiento
    // Configura un intervalo para llamar a la función smoothScroll cada 50 ms para ajustar el desplazamiento.

    return () => {
      gallery.removeEventListener('scroll', handleScroll);
      gallery.removeEventListener('wheel', handleWheel);
      clearInterval(interval);
      // Limpia los manejadores de eventos y el intervalo cuando el componente se desmonte.
    };
  }, []);
  // El array vacío [] asegura que useEffect se ejecute solo una vez, al montar el componente.

  return (
    <div className="gallery" ref={galleryRef}>
      {/* Renderiza el contenedor de la galería con la referencia galleryRef */}
      {Array.from({ length: 6 }, (_, i) => (
        <img
          key={i}
          src={`https://via.placeholder.com/500x250?text=Image+${i + 1}`} 
          alt={`Image ${i + 1}`}
        />
      ))}
      {/* Renderiza 6 imágenes con URLs de imagen de marcador de posición */}
      {Array.from({ length: 6 }, (_, i) => (
        <img
          key={i + 6}
          src={`https://via.placeholder.com/500x250?text=Image+${i + 1}`} 
          alt={`Image ${i + 1}`}
        />
      ))}
      {/* Renderiza otras 6 imágenes con URLs de imagen de marcador de posición */}
      {Array.from({ length: 6 }, (_, i) => (
        <img
          key={i + 12}
          src={`https://via.placeholder.com/500x250?text=Image+${i + 1}`} 
          alt={`Image ${i + 1}`}
        />
      ))}
      {/* Renderiza otras 6 imágenes con URLs de imagen de marcador de posición */}
    </div>
  );
};

export default Gallery;