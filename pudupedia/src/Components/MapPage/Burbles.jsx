import React, { useState } from 'react';
import './Burbles.css';
import Mapita from './Mapita';
import imagePuduReading from '../GamePage/TriviaGame/PuduReading.jpg'; // Imagen de ejemplo
import chucao from './Chucao.jpg';
import guina from './Guiña.jpg';
import pudu from './PuduComiendo.jpg';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';

const Burbles = () => {
  const [activeMacrozone, setActiveMacrozone] = useState(null);
  const [bubbles, setBubbles] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Definición de imágenes para cada macrozona
  const macrozoneImages = {
    norte: [pudu, pudu, pudu, pudu, pudu], //podria ser por indice del archivo animales.js c:
    centro: [chucao, chucao, chucao, chucao, chucao],
    centroSur: [imagePuduReading, imagePuduReading, imagePuduReading, imagePuduReading, imagePuduReading],
    sur: [guina, guina, guina, guina, guina],
    austral: [pudu, pudu, chucao, chucao, guina]
  };


  const handleMacrozoneClick = (macrozone, macrozoneBounds) => {
    console.log('Macrozone:', macrozone);
    console.log('Macrozone Bounds:', macrozoneBounds);

    if (!macrozoneBounds) {
      console.error('macrozoneBounds is undefined:', macrozone);
      return;
    }

    
    // Verifica si la macrozona activa es la misma que la clickeada
    if (activeMacrozone === macrozone) {
       // Alterna la visibilidad si la misma macrozona es clickeada
      setVisibility(!visibility);
    } else {
      // ------------------------------------------------------------------------------
      const images = macrozoneImages[macrozone];

      if (!Array.isArray(images) || images.length === 0) {
          console.error('No valid images found for macrozone:', macrozone);
          return;
      }

      const numBubbles = images.length;
      const angleStep = (2 * Math.PI) / numBubbles;
      const radius = 20;

      const newBubbles = [];
      for (let i = 0; i < numBubbles; i++) {
          const angle = i * angleStep;
          const x = macrozoneBounds.x + (macrozoneBounds.width / 2) + (radius * Math.cos(angle) * 6);
          const y = macrozoneBounds.y + (macrozoneBounds.height / 2) - (radius * Math.sin(angle) * 6);
          newBubbles.push({ x, y, image: images[i], key: `${macrozone}-${i}` });
      }

      setBubbles(newBubbles);
      setActiveMacrozone(macrozone);
      setVisibility(true);
  }
};

// Cierre de burbujas
const handleCloseBubbles = () => {
  setVisibility(false);
  setBubbles([]);
  setActiveMacrozone(null); // Restablece la macrozona activa
};

// Manejo del mouse en burbujas
const handleMouseEnter = (index) => {
  setHoveredIndex(index);
};

const handleMouseLeave = () => {
  setHoveredIndex(null);
};

return (
  <div className="radial-menu">
    <Header />
    <Mapita onMacrozoneClick={handleMacrozoneClick} />
    <div className={`larger-area ${visibility ? 'active' : ''}`}>
      {bubbles.map((bubble, index) => (
        <div
          key={bubble.key} // Usa bubble.key para el key
          className={`menu-item ${visibility ? 'bounce' : ''}`}
          style={{ left: `${bubble.x}px`, top: `${bubble.y}px` }}
        >
          <img
            src={bubble.image}
            alt={`Imagen ${index + 1}`}
            style={{
              transform: hoveredIndex === index ? 'scale(1.5)' : 'scale(1)',
              transition: 'transform 0.3s ease-in-out',
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      ))}
      {visibility && (
        <button className="close-button" onClick={handleCloseBubbles}>X</button>
      )}
    </div>
   <Footer className={'transformed'}/> 
  </div>
);
};

export default Burbles;
