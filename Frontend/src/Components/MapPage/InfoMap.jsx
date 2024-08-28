import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InfoMap.css';

const InfoMap = () => {
    const navigate = useNavigate();

    const handleAnimalClick = (animal) => (event) => {
        event.preventDefault();
        navigate(`/accordion/${encodeURIComponent(animal)}`, { state: { animalName: animal } });
    };

    return (
        <div className="info-map">
            <h2>ANIMALES ENDÉMICOS POR MACROZONA</h2>
            <ul>
                <h3>Norte</h3>
                <li><a href="#norte" onClick={handleAnimalClick('Zorro Chilla')}>Zorro Chilla</a></li>
                <li><a href="#norte" onClick={handleAnimalClick('Chinchilla')}>Chinchilla</a></li>
                <li><a href="#norte" onClick={handleAnimalClick('Lagarto de Tarapacá')}>Lagarto de Tarapacá</a></li>
                <li><a href="#norte" onClick={handleAnimalClick('Gato Andino')}>Gato Andino</a></li>
                <li><a href="#norte" onClick={handleAnimalClick('Curiquinge')}>Curiquinge</a></li>
                <br />
                <h3>Centro</h3>
                <li><a href="#centro" onClick={handleAnimalClick('Leopardus colocola')}>Leopardus colocola</a></li>
                <li><a href="#centro" onClick={handleAnimalClick('Cisne de Cuello Negro')}>Cisne de Cuello Negro</a></li>
                <li><a href="#centro" onClick={handleAnimalClick('Puma')}>Puma</a></li>
                <li><a href="#centro" onClick={handleAnimalClick('Zorro Chileno')}>Zorro Chileno</a></li>
                <li><a href="#centro" onClick={handleAnimalClick('Colibrí de Pico Curiño')}>Colibrí de Pico Curiño</a></li>
                <br />
                <h3>Centro-Sur</h3>
                <li><a href="#centro-sur" onClick={handleAnimalClick('Ratón de Ñuble')}>Ratón de Ñuble</a></li>
                <li><a href="#centro-sur" onClick={handleAnimalClick('Rana del Maule')}>Rana del Maule</a></li>
                <li><a href="#centro-sur" onClick={handleAnimalClick('Rana de Bío Bío')}>Rana de Bío Bío</a></li>
                <li><a href="#centro-sur" onClick={handleAnimalClick('Monito del Monte')}>Monito del Monte</a></li>
                <li><a href="#centro-sur" onClick={handleAnimalClick('Guiña')}>Guiña</a></li>
                <br />
                <h3>Sur</h3>
                <li><a href="#sur" onClick={handleAnimalClick('Pudú')}>Pudú</a></li>
                <li><a href="#sur" onClick={handleAnimalClick('Chucao')}>Chucao</a></li>
                <li><a href="#sur" onClick={handleAnimalClick('Huililara')}>Huililara</a></li>
                <li><a href="#sur" onClick={handleAnimalClick('Zorro Culpeo')}>Zorro Culpeo</a></li>
                <li><a href="#sur" onClick={handleAnimalClick('Chungungo')}>Chungungo</a></li>
                <br />
                <h3>Austral</h3>
                <li><a href="#austral" onClick={handleAnimalClick('Huemul')}>Huemul</a></li>
                <li><a href="#austral" onClick={handleAnimalClick('Guanaco')}>Guanaco</a></li>
                <li><a href="#austral" onClick={handleAnimalClick('Cóndor Andino')}>Cóndor Andino</a></li>
                <li><a href="#austral" onClick={handleAnimalClick('Gato de la Patagonia')}>Gato de la Patagonia</a></li>
                <li><a href="#austral" onClick={handleAnimalClick('Pingüino de Magallanes')}>Pingüino de Magallanes</a></li>
            </ul>
        </div>
    );
};

export default InfoMap;