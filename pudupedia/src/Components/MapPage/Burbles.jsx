import React, { useState } from 'react';
import './Burbles.css';
import Mapita from './Mapita';
import imagePuduReading from '../GamePage/TriviaGame/PuduReading.jpg'; // Imagen de ejemplo

const Burbles = () => {
  const [activeMacrozone, setActiveMacrozone] = useState(null);
  const [bubbles, setBubbles] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMacrozoneClick = (macrozone, macrozoneBounds) => {
    if (!macrozoneBounds) {
        console.error('macrozoneBounds is undefined:', macrozone);
        return;
    }

    if (activeMacrozone === macrozone) {
        setVisibility(!visibility);
    } else {
        const numBubbles = 3;
        const angleStep = (2 * Math.PI) / (numBubbles);
        const radius = 30;

        const newBubbles = [];
        for (let i = 0; i < numBubbles; i++) {
            const angle = i * angleStep;
            const x = macrozoneBounds.x + (macrozoneBounds.width) + (radius * Math.cos(angle)*6) ;
            const y = macrozoneBounds.y + (macrozoneBounds.height) - (radius * Math.sin(angle)*6) ;
            newBubbles.push({ x, y, image: imagePuduReading });
        }

        setBubbles(newBubbles);
        setActiveMacrozone(macrozone);
        setVisibility(true);
    }
};

  const handleCloseBubbles = () => {
    setVisibility(false);
    setBubbles([]);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="radial-menu">
      <Mapita onMacrozoneClick={handleMacrozoneClick} />
      <div className={`larger-area ${visibility ? 'active' : ''}`}>
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className={`menu-item ${visibility ? 'bounce' : ''}`}
            style={{ left: `${bubble.x}px`, top: `${bubble.y}px` }}
          >
            <img
              src={bubble.image}
              alt={`Imagen ${index + 1}`}
              style={{
                transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)',
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
    </div>
  );
};

export default Burbles;
