import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bubbles.css';
import Map from './Map';
import picoDeLoro from './picoDeLoro.jpg';
import ananuca from './ananuca.jpg';
import { animals } from '../GalleryPage/animals';
import Buttons from './Buttons'
import InfoMap from './InfoMap';

const Bubbles = () => {
  const [activeMacrozone, setActiveMacrozone] = useState(null);
  const [bubbles, setBubbles] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isFauna, setIsFauna] = useState(true);
  const navigate = useNavigate();

  const macrozoneImagesFauna = {
    norte: [
      { id: 1, src: animals.zorroChilla.image, name: 'Zorro Chilla' },
      { id: 2, src: animals.chinchilla.image, name: 'Chinchilla' },
      { id: 3, src: animals.lagartoTarapaca.image, name: 'Lagarto de Tarapacá' },
      { id: 4, src: animals.gatoAndino.image, name: 'Gato Andino' },
      { id: 5, src: animals.curiquinge.image, name: 'Curiquinge' }
    ],
    centro: [
      { id: 6, src: animals.leopardusColocola.image, name: 'Leopardus colocola' },
      { id: 7, src: animals.cisneCuelloNegro.image, name: 'Cisne de Cuello Negro' },
      { id: 8, src: animals.puma.image, name: 'Puma' },
      { id: 9, src: animals.zorroChileno.image, name: 'Zorro Chileno' },
      { id: 10, src: animals.colibriPicoCurino.image, name: 'Colibrí de Pico Curiño' }
    ],
    centroSur: [
      { id: 11, src: animals.ranaMaule.image, name: 'Rana del Maule' },
      { id: 12, src: animals.ranaBioBio.image, name: 'Rana de Bío Bío' },
      { id: 13, src: animals.monitoDelMonte.image, name: 'Monito del Monte' },
      { id: 14, src: animals.guina.image, name: 'Guiña' },
      { id: 15, src: animals.pudu.image, name: 'Pudú' }
    ],
    sur: [
      { id: 16, src: animals.chucao.image, name: 'Chucao' },
      { id: 17, src: animals.huililara.image, name: 'Huililara' },
      { id: 18, src: animals.zorroCulpeo.image, name: 'Zorro Culpeo' },
      { id: 19, src: animals.chungungo.image, name: 'Chungungo' },
      { id: 20, src: animals.huemul.image, name: 'Huemul' }
    ],
    austral: [
      { id: 21, src: animals.huemul.image, name: 'Huemul' },
      { id: 22, src: animals.guanaco.image, name: 'Guanaco' },
      { id: 23, src: animals.condorAndino.image, name: 'Cóndor Andino' },
      { id: 24, src: animals.gatoPatagonia.image, name: 'Gato de la Patagonia' },
      { id: 25, src: animals.pinguinoMagallanes.image, name: 'Pingüino de Magallanes' }
    ]
  };

  const macrozoneImagesFlora = {
    norte: [
      { id: 1, src: ananuca, name: 'Ananuca' },
      { id: 2, src: ananuca, name: 'Ananuca' },
      { id: 3, src: ananuca, name: 'Ananuca' },
      { id: 4, src: ananuca, name: 'Ananuca' },
      { id: 5, src: ananuca, name: 'Ananuca' }
    ],
    centro: [
      { id: 6, src: picoDeLoro, name: 'Pico de Loro' },
      { id: 7, src: picoDeLoro, name: 'Pico de Loro' },
      { id: 8, src: picoDeLoro, name: 'Pico de Loro' },
      { id: 9, src: picoDeLoro, name: 'Pico de Loro' },
      { id: 10, src: picoDeLoro, name: 'Pico de Loro' }
    ],
    centroSur: [
      { id: 11, src: ananuca, name: 'Ananuca' },
      { id: 12, src: ananuca, name: 'Ananuca' },
      { id: 13, src: ananuca, name: 'Ananuca' },
      { id: 14, src: ananuca, name: 'Ananuca' },
      { id: 15, src: ananuca, name: 'Ananuca' }
    ],
    sur: [
      { id: 16, src: picoDeLoro, name: 'Pico de Loro' },
      { id: 17, src: picoDeLoro, name: 'Pico de Loro' },
      { id: 18, src: picoDeLoro, name: 'Pico de Loro' },
      { id: 19, src: picoDeLoro, name: 'Pico de Loro' },
      { id: 20, src: picoDeLoro, name: 'Pico de Loro' }
    ],
    austral: [
      { id: 21, src: ananuca, name: 'Ananuca' },
      { id: 22, src: ananuca, name: 'Ananuca' },
      { id: 23, src: ananuca, name: 'Ananuca' },
      { id: 24, src: ananuca, name: 'Ananuca' },
      { id: 25, src: ananuca, name: 'Ananuca' }
    ]
  };

  const handleMacrozoneClick = (macrozone, macrozoneBounds) => {

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
        newBubbles.push({
          x,
          y,
          image: images[i].src,
          key: `${macrozone}-${i}`,
          animal: {
            name: images[i].name,
            info: animals.info
          }
        });
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

  const handleBubbleClick = (bubble) => {
    navigate('/accordion', {
      state: { animalName: bubble.animal.name },
      pathname: `/accordion/${encodeURIComponent(bubble.animal.name)}`
    });
  };

  return (
    <div className="radial-menu">
      <div className='bubble'>
        <h1 className="macrozone-name">RUTA ENDÉMICA</h1>
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
                    animationDelay: `${index * 100}ms`,
                  }}
                  onClick={() => handleBubbleClick(bubble)}
                >
                  <img
                    src={bubble.image}
                    alt={bubble.animal.name} // Usa el nombre del animal para el alt
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
        <div className="backg"></div>
        <div className="backg backg2"></div>
        <div className="backg backg3"></div>
        <Buttons onToggle={toggleFaunaFlora} />
      </div>
      <InfoMap />
    </div>
  );
};

export default Bubbles;

