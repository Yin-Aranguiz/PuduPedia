import React, { useState } from 'react';
import './Bubbles.css';
import Map from './Map';
import imagePuduReading from '../GamePage/TriviaGame/PuduReading.jpg'; // Imagen de ejemplo
import chucao from './Chucao.jpg';
import guina from './Guiña.jpg';
import pudu from './PuduComiendo.jpg';
import picoDeLoro from './picoDeLoro.jpg';
import ananuca from './ananuca.jpg';

import Buttons from './Buttons'
import InfoMap from './InfoMap';

const Bubbles = () => {
  const [activeMacrozone, setActiveMacrozone] = useState(null);
  const [bubbles, setBubbles] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isFauna, setIsFauna] = useState(true);

  // Definición de imágenes para cada macrozona
  const macrozoneImagesFauna = {
    norte: [pudu, pudu, pudu, pudu, guina],
    centro: [chucao, chucao, chucao, chucao, guina],
    centroSur: [imagePuduReading, imagePuduReading, imagePuduReading, imagePuduReading, guina],
    sur: [guina, guina, guina, guina, guina],
    austral: [pudu, pudu, chucao, guina, guina]
  };

  const macrozoneImagesFlora = {
    norte: [ananuca, ananuca, ananuca, ananuca, ananuca],
    centro: [picoDeLoro, picoDeLoro, picoDeLoro, picoDeLoro, picoDeLoro],
    centroSur: [ananuca, ananuca, ananuca, ananuca, ananuca],
    sur: [picoDeLoro, picoDeLoro, picoDeLoro, picoDeLoro, picoDeLoro],
    austral: [ananuca, ananuca, ananuca, ananuca, ananuca]
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
      const images = isFauna ? macrozoneImagesFauna[macrozone] : macrozoneImagesFlora[macrozone];

      if (!Array.isArray(images) || images.length === 0) {
        console.error('No valid images found for macrozone:', macrozone);
        return;
      }

      const newBubbles = [];
      const startX = 100; // Posición inicial X debajo del título
      const startY = 200; // Posición inicial Y debajo del título
      const spacing = 100; // Espacio entre burbujas

      for (let i = 0; i < images.length; i++) {
        const x = startX + i * spacing; // Espacio horizontal entre burbujas
        const y = startY; // Mantiene las burbujas en la misma fila
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

  const toggleFaunaFlora = () => {
    setIsFauna(!isFauna);
    handleCloseBubbles(); // Cierra las burbujas actuales
  };

  return (
    <div className="radial-menu">

      <div className='bubble'>
        <h1 className="macrozone-name">RUTA ENDÉMICA </h1>
        <Map onMacrozoneClick={handleMacrozoneClick} />
        <div className={`larger-area ${visibility ? 'active' : ''}`}>
          {visibility && (
            <>
              {bubbles.map((bubble, index) => (
                <div
                  key={bubble.key}
                  className={`menu-item ${visibility ? 'bounce' : ''}`}
                  style={{
                    left: `${bubble.x}px`,
                    top: `${bubble.y}px`,
                    animationDelay: `${index * 100}ms`, // Aplica un retardo de 500ms por burbuja
                  }}
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
              <button className="close-button" onClick={handleCloseBubbles}></button>
            </>
          )}
        </div>
        <div class="backg"></div>
        <div class="backg backg2"></div>
        <div class="backg backg3"></div>
        <Buttons onToggle={toggleFaunaFlora} />
      </div>
      <InfoMap />
    </div>
  );
};

export default Bubbles;

