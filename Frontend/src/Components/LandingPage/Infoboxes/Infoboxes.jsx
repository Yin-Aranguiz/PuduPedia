import React from 'react';
import './Infoboxes.css'

const InfoBoxes = () => {
    return (
        <div className='infoboxContainer'>

            <div className='infobox'>
                <h2>NUESTROS OBJETIVOS</h2>
                <p> 
                Nuestro objetivo es informar sobre la biodiversidad y los ecosistemas terrestres en Chile, utilizando la tecnología para crear un espacio digital accesible y gratuito, de fácil navegación. Buscamos fomentar la participación e interés de la población a través de un sitio web intuitivo y moderno, con diseño interactivo y visualmente atractivo. La meta es impulsar el conocimiento sobre el entorno natural y las diversas especies que lo habitan, promoviendo soluciones y herramientas digitales innovadoras que conecten a la sociedad con la naturaleza.</p>
            </div>

            <div className='infobox'>
                <h2>PARQUES NACIONALES</h2>
                <p> Chile alberga una vasta red de parques nacionales que protegen su rica biodiversidad y paisajes únicos. Entre ellos, el Parque Nacional Torres del Paine en la Patagonia destaca por sus imponentes montañas, glaciares y lagos. En el norte, el Parque Nacional Lauca ofrece un entorno altiplánico con volcanes y lagunas, mientras que el Parque Nacional Vicente Pérez Rosales, en el sur, combina bosques, ríos y el majestuoso volcán Osorno. Estos parques no solo son refugio de especies endémicas, sino que también son destinos clave para el ecoturismo. </p>
            </div>

            <div className='infobox'>
                <h2>ESPECIES ENDÉMICAS</h2>
                <p> Una especie endémica es aquella que se encuentra exclusivamente en una región geográfica específica y no de forma natural en ninguna otra parte del mundo. En Chile, un ejemplo de especie endémica es el "pudú", el ciervo más pequeño del mundo, que habita principalmente en los bosques templados del sur del país. Este tipo de especies suele adaptarse a condiciones particulares del entorno y su conservación es crucial, ya que su hábitat restringido las hace más vulnerables a amenazas como la pérdida de hábitat o el cambio climático. </p>
            </div>

        </div>)



}

export default InfoBoxes;