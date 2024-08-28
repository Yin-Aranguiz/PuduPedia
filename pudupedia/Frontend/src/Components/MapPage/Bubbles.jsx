import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bubbles.css';
import Map from './Map';
import { animals } from '../GalleryPage/animals';
import { plants } from '../GalleryPage/plants';
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
      { id: 1, src: plants.chagual.image, name: 'Chagual' },
      { id: 2, src: plants.cactusArica.image, name: 'Cactus de Arica' },
      { id: 3, src: plants.llareta.image, name: 'Llareta' },
      { id: 4, src: plants.cebollaMar.image, name: 'Cebolla de Mar' },
      { id: 5, src: plants.mato.image, name: 'Mato' }
    ],
    centro: [
      { id: 6, src: plants.sieteCamisas.image, name: 'Siete Camisas' },
      { id: 7, src: plants.palmaChilena.image, name: 'Palma Chilena' },
      { id: 8, src: plants.quillay.image, name: 'Quillay' },
      { id: 9, src: plants.florHuerto.image, name: 'Flor del Huerto' },
      { id: 10, src: plants.espinoCoquimbo.image, name: 'Espino de Coquimbo' }
    ],
    centroSur: [
      { id: 11, src: plants.peumo.image, name: 'Peumo' },
      { id: 12, src: plants.arrayan.image, name: 'Arrayán' },
      { id: 13, src: plants.nalca.image, name: 'Nalca' },
      { id: 14, src: plants.rosaMosqueta.image, name: 'Rosa Mosqueta' },
      { id: 15, src: plants.ruil.image, name: 'Ruil' }
    ],
    sur: [
      { id: 16, src: plants.araucaria.image, name: 'Araucaria' },
      { id: 17, src: plants.canelo.image, name: 'Canelo' },
      { id: 18, src: plants.coihue.image, name: 'Coihue' },
      { id: 19, src: plants.maqui.image, name: 'Maqui' },
      { id: 20, src: plants.alerce.image, name: 'Alerce' }
    ],
    austral: [
      { id: 21, src: plants.lenga.image, name: 'Lenga' },
      { id: 22, src: plants.tepa.image, name: 'Tepa' },
      { id: 23, src: plants.nirre.image, name: 'Ñirre' },
      { id: 24, src: plants.coihueMagallanes.image, name: 'Coihue de Magallanes' },
      { id: 25, src: plants.cipresLasGuaitecas.image, name: 'Ciprés de las Guaitecas' }
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
          // animal: {
          item: {
            name: images[i].name,
            // info: animals.info
            info: isFauna ? animals.info : plants.info
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
      state: { 
        itemName: bubble.item.name, 
        isFauna: isFauna // Pasar explícitamente si es fauna o flora
      },
      pathname: `/accordion/${encodeURIComponent(bubble.item.name)}`
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
                    alt={bubble.item.name} 
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

