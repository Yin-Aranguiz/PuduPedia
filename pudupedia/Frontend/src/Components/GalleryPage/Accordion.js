import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Accordion.css';

// Componente para cada ítem del acordeón
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

// Componente Accordion
const Accordion = () => {
    const location = useLocation();
    const { animal } = location.state || {};

    if (!animal || !animal.name) {
        return <p>No hay información disponible</p>;
    }

    return (
        <div className="accordion">
            <div className='titulo'><p>{animal.name.toUpperCase()}</p></div>
            {animal.info.length > 0 ? (
                animal.info.map((item, index) => (
                    <AccordionItem 
                        key={index}
                        title={item.title}
                        content={item.content}
                    />
                ))
            ) : (
                <p>No hay información adicional disponible.</p>
            )}
        </div>
    );
};

export default Accordion;