import React, { useState } from 'react';
import './Burbles.css';
import Map from './Map';
import imagePuduReading from '../GamePage/TriviaGame/PuduReading.jpg'; // Imagen de ejemplo
import chucao from './Chucao.jpg';
import guina from './Guiña.jpg';
import pudu from './PuduComiendo.jpg';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';
import Buttons from './Buttons'

const Burbles = () => {
  const [activeMacrozone, setActiveMacrozone] = useState(null);
  const [bubbles, setBubbles] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Definición de imágenes para cada macrozona
  const macrozoneImages = {
    norte: [pudu, pudu, pudu, pudu, guina],
    centro: [chucao, chucao, chucao, chucao, guina],
    centroSur: [imagePuduReading, imagePuduReading, imagePuduReading, imagePuduReading, guina],
    sur: [guina, guina, guina, guina, guina],
    austral: [pudu, pudu, chucao, guina, guina]
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
      // const angleStep = (2 * Math.PI) / numBubbles;
      const angleStep = (Math.PI) / (numBubbles -1);
      const radius = 20;

      const newBubbles = [];
      for (let i = 0; i < numBubbles; i++) {
        const angle = i * angleStep;
        
        const x = macrozoneBounds.x + (macrozoneBounds.width / 2) + (radius * Math.cos(angle) * 7);
        const y = macrozoneBounds.y + (macrozoneBounds.height / 2) - (radius * Math.sin(angle) * 7) + window.scrollY;
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
      <h1 className="macrozone-name">RUTA ENDÉMICA </h1>
      <Map onMacrozoneClick={handleMacrozoneClick} />
      <div className={`larger-area ${visibility ? 'active' : ''}`}>
      
        {visibility && (
          <>
             
            {bubbles.map((bubble, index) => (
              <div
                key={bubble.key}
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
            <button className="close-button" onClick={handleCloseBubbles}></button>
          </>
        )}
      </div>
      <Buttons />
      <Footer className={'transformed'} />
    </div>
  );
};

export default Burbles;


// array para fauna (el actual de las img) y para fauna
// estado de isFauna como true
// lógica para el botón de cambiar de un estado a otro
// función que va a manejar el botón, se cierran las burbujas, se muestra el otro array