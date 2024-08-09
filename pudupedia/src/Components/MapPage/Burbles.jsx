import React, { useState } from 'react';
import './Burbles.css';
import Mapita from './Mapita';
import imagePuduEating from './PuduComiendo.jpg'; // Imagen de ejemplo
// import imageGuina from './Guiña.jpg';
// import imageChucao from './Chucao.jpg';
import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';

const Burbles = () => {
  const [activeMacrozone, setActiveMacrozone] = useState(null);
  const [bubbles, setBubbles] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // const macrozoneImages = {
  //   norte: [imagePuduEating, imageGuina, imageChucao, imagePuduEating, imagePuduEating], 
  //   centro: [imageChucao, imagePuduEating, imageChucao, imagePuduEating, imagePuduEating],
  //   centroSur: [imageChucao, imageGuina, imageChucao, imagePuduEating, imagePuduEating],
  //   sur: [imageChucao, imagePuduEating, imageChucao, imageChucao, imageChucao],
  //   austral: [imageChucao, imageChucao, imageChucao, imageChucao, imageChucao]
  // };

  const handleMacrozoneClick = (macrozone, macrozoneBounds) => {
    console.log('Macrozone:', macrozone);
    console.log('Macrozone Bounds:', macrozoneBounds);

    if (!macrozoneBounds) {
      console.error('macrozoneBounds is undefined:', macrozone);
      return;
    }

    // const images = macrozoneImages[macrozone];
    
    // if (!images) {
    //   console.error('No images found for macrozone:', macrozone);
    //   return;
    // }

    if (activeMacrozone === macrozone) {
      setVisibility(!visibility);
    } else {
      const numBubbles = 5;
      const angleStep = (2 * Math.PI) / numBubbles;
      const radius = 20;

      const newBubbles = [];
      for (let i = 0; i < numBubbles; i++) {
        const angle = i * angleStep;
        const x = macrozoneBounds.x + (macrozoneBounds.width / 2) + (radius * Math.cos(angle) * 6);
        const y = macrozoneBounds.y + (macrozoneBounds.height / 2) - (radius * Math.sin(angle) * 6);
        newBubbles.push({ x, y, image: imagePuduEating, key: `${macrozone}-${i}` });
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
                transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        ))}
        {visibility && (
          <button onClick={handleCloseBubbles}></button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Burbles;