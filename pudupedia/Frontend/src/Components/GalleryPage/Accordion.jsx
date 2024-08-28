import React from 'react';
import { useLocation} from 'react-router-dom';
import './Accordion.css';
import { animals } from './animals';
import { plants } from './plants';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
        <div className="accordion-item">
            <button className="accordion-button" onClick={() => setIsOpen(!isOpen)}>
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
    const location = useLocation();
    const { itemName, isFauna } = location.state || {}; // Obtiene el nombre del ítem y si es fauna o flora

    if (!itemName || isFauna === undefined) {
        return <p>No se encontró información para este ítem: {itemName}</p>;
    }

    // Determina si se trata de un animal o una planta y busca la información adecuada
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

    return (
        <div className="accordion">
            <h2>{itemInfo.name}</h2>
            <img src={itemInfo.image} alt={itemInfo.name} style={{ maxWidth: '100%', height: 'auto' }} />
            {itemInfo.info.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default Accordion;