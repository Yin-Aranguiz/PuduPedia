import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Accordion.css';
import { animals } from './animals';
import { plants } from './plants';
import Header from '../LandingPage/Header/Header';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="accordionItem">
            <button className="accordionButton" onClick={onClick}>
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
    const [openIndex, setOpenIndex] = useState(null); // Estado para rastrear qué item está abierto
    const location = useLocation();
    const { itemName, isFauna } = location.state || {};

    if (!itemName || isFauna === undefined) {
        return <p>No se encontró información para este ítem: {itemName}</p>;
    }

    let itemInfo;
    if (isFauna) {
        itemInfo = Object.values(animals).find(
            animal => animal.name.toLowerCase() === decodeURIComponent(itemName).toLowerCase()
        );
    } else {
        itemInfo = Object.values(plants).find(
            plant => plant.name.toLowerCase() === decodeURIComponent(itemName).toLowerCase()
        );
    }

    if (!itemInfo) {
        return <p>No se encontró información para este ítem: {itemName}</p>;
    }

    const handleItemClick = (index) => {
        setOpenIndex(index === openIndex ? null : index); // Alterna entre abrir y cerrar
    };

    return (
        <div className='background-accordion'>
            <div className="accordion">
                <div className='accordionTitleAbove'>
                    <p className='accordionTitle' style={{ width: '470px' }}>{itemInfo.name}</p>
                </div>
                <div className='imagePositionAccordion'>
                    <img src={itemInfo.image} alt={itemInfo.name} style={{ width: '450px', height: '450px', objectFit: 'cover' }} className='accordionImg' />
                </div>
                <div className='accordionItem'>
                    {itemInfo.info.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            content={item.content}
                            isOpen={index === openIndex}
                            onClick={() => handleItemClick(index)}
                        />
                    ))}
                </div>
            </div>
            <Header />
        </div>
    );
};

export default Accordion;
