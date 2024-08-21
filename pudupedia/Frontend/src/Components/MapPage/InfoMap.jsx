import React from 'react';
import './InfoMap.css'


const InfoMap = () => {
    return (
        <div className="info-map">
            <h2>Animales Endémicos por Macrozona</h2>
            <ul>
                <h3>Norte</h3>
                <li><a href="#norte">Vicuña</a></li>
                <li><a href="#norte">Taruca</a></li>
                <li><a href="#norte">Guanaco</a></li>
                <li><a href="#norte">Chinchilla</a></li>
                <li><a href="#norte">Puma del Desierto</a></li>
                <br/>
                <h3>Centro</h3>
                <li><a href="#centro">Chungungo</a></li>
                <li><a href="#centro">Zorro de Darwin</a></li>
                <li><a href="#centro">Huemul</a></li>
                <li><a href="#centro">Cóndor</a></li>
                <li><a href="#centro">Picaflor de Arica</a></li>
                <br/>
                <h3>Centro-Sur</h3>
                <li><a href="#centro-sur">Monito del Monte</a></li>
                <li><a href="#centro-sur">Pudú</a></li>
                <li><a href="#centro-sur">Carpintero Negro</a></li>
                <li><a href="#centro-sur">Pato Cortacorrientes</a></li>
                <li><a href="#centro-sur">Zorro Culpeo</a></li>
                <br/>
                <h3>Sur</h3>
                <li><a href="#sur">Pingüino de Magallanes</a></li>
                <li><a href="#sur">Zorro Colorado</a></li>
                <li><a href="#sur">Cóndor Andino</a></li>
                <li><a href="#sur">Cisne de Cuello Negro</a></li>
                <li><a href="#sur">Foca Leopardo</a></li>
                <br/>
                <h3>Austral</h3>
                <li><a href="#austral">Gato Montés</a></li>
                <li><a href="#austral">Ñandú</a></li>
                <li><a href="#austral">Pingüino Rey</a></li>
                <li><a href="#austral">Chungungo Patagónico</a></li>
                <li><a href="#austral">Zorro Fueguino</a></li>
            </ul>
        </div>
    );
};

export default InfoMap;