import React, { useState } from 'react';
import './Accordion.css';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <button className="accordion-button" onClick={handleClick}>
                {title}
            </button>
            {isOpen && (
                <div className="accordion-content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

const Accordion = () => {
    return (
        <div className="accordion">
          <div className='titulo'><p>PUDÚ </p> </div>
            <AccordionItem title="- Vive en" content="Bosques templados del sur de Chile, desde la región de Los Ríos hasta Aysén" />
            <AccordionItem title="- Reproducción" content="La hembra da a luz a una cría después de un período de gestación de aproximadamente 210 día" />
            <AccordionItem title="- Alimentación" content="Hojas, cortezas, frutas y brotes de arbustos y árboles" />
            <AccordionItem title="- Hábitat" content="Bosques templados lluviosos y densos, con abundante vegetación" />
            <AccordionItem title="- Peligro de la especie" content="Vulnerable, según la UICN" />
            {/* Agrega más elementos aquí si es necesario */}
        </div>
    );
};

export default Accordion;