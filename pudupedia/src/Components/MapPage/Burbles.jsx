import React, { useState } from 'react';
import './Burbles.css';
import Mapita from './Mapita';
import imagePuduReading from '../GamePage/TriviaGame/PuduReading.jpg';

const Burbles = () => {
  const [activeRegion, setActiveRegion] = useState(null);
  const [bubbles, setBubbles] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleRegionClick = (region, regionBounds) => {
    if (activeRegion === region) {
      // Toggle visibility if the same region is clicked again
      setVisibility(!visibility);
    } else {
      // Calculate new bubbles positions
      const numBubbles = 5;
      const angleStep = Math.PI / 4; // Adjust for the size of the arc
      const radius = 100; // Adjust for the distance of the arc from the center of the region

      const newBubbles = [];
      for (let i = 0; i < numBubbles; i++) {
        const angle = i * angleStep;
        const x = regionBounds.x + regionBounds.width / 2 + radius * Math.cos(angle);
        const y = regionBounds.y + regionBounds.height / 2 - radius * Math.sin(angle);

        newBubbles.push({ x, y, image: imagePuduReading });
      }

      setBubbles(newBubbles);
      setActiveRegion(region);
      setVisibility(true);
    }
  };

  const handleCloseBubbles = () => {
    setVisibility(false);
    // Reset bubbles to trigger animation again
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
      <Mapita onRegionClick={handleRegionClick} />
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
              // no funciona que al hacer hover aumente de escala la imágen
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        ))}
        {visibility && (
          <button className="close-button" onClick={handleCloseBubbles}>Close</button>
        )}
      </div>
    </div>
  );
};

export default Burbles;
