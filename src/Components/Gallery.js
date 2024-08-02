import React, { useEffect, useRef } from 'react';
import './Gallery.css';

const Gallery = () => {
    const galleryRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (galleryRef.current) {
          const scrollLeft = galleryRef.current.scrollLeft;
          const width = galleryRef.current.clientWidth;
          const center = scrollLeft + width / 2;
  
          Array.from(galleryRef.current.children).forEach((img) => {
            const imgCenter = img.offsetLeft + img.clientWidth / 2;
            const distance = Math.abs(center - imgCenter);
            const scale = Math.max(1 - distance / (width / 2), 0.7);
            img.style.transform = `scale(${scale})`;
          });
        }
      };
  
      const handleWheel = (e) => {
        if (galleryRef.current) {
          const scrollSpeed = 7; // Ajusta la velocidad del scroll
          galleryRef.current.scrollLeft += e.deltaY * scrollSpeed;
          e.preventDefault(); // Evita el desplazamiento vertical predeterminado
        }
      };
  
      const smoothScroll = () => {
        if (galleryRef.current) {
          const gallery = galleryRef.current;
          const itemWidth = gallery.children[0].clientWidth;
          const itemCount = gallery.children.length / 2;
          const scrollWidth = gallery.scrollWidth;
  
          // Verifica si el scroll está fuera de rango y ajusta
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
  
      const interval = setInterval(smoothScroll, 50); // Ajusta el intervalo para mejor rendimiento
  
      return () => {
        gallery.removeEventListener('scroll', handleScroll);
        gallery.removeEventListener('wheel', handleWheel);
        clearInterval(interval);
      };
    }, []);
  
    return (
      <div className="gallery" ref={galleryRef}>
        {Array.from({ length: 6 }, (_, i) => (
          <img
            key={i}
            src={`https://via.placeholder.com/500x250?text=Image+${i + 1}`} 
            alt={`Image ${i + 1}`}
          />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <img
            key={i + 6}
            src={`https://via.placeholder.com/500x250?text=Image+${i + 1}`} 
            alt={`Image ${i + 1}`}
          />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <img
            key={i + 12}
            src={`https://via.placeholder.com/500x250?text=Image+${i + 1}`} 
            alt={`Image ${i + 1}`}
          />
        ))}
      </div>
    );
  };
  
  export default Gallery;