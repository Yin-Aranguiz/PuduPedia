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

const Accordion = ({ animal }) => {
    return (
        <div className="accordion">
            <div className='titulo'><p>{animal.nombre.toUpperCase()}</p></div>
            {animal.info.map((item, index) => (
                <AccordionItem 
                    key={index}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    );
};

export default Accordion;