import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './Accordion.css';
import { animals } from './animals'; // Asegúrate de que esta ruta sea correcta

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
    const params = useParams();
    
    // Intenta obtener el nombre del animal del estado o de los parámetros de la URL
    const animalName = location.state?.animalName || params.animal;
    
    // Busca la información del animal en el objeto animals
    const animalInfo = Object.values(animals).find(
        animal => animal.name.toLowerCase() === decodeURIComponent(animalName).toLowerCase()
    );

    if (!animalInfo) {
        return <p>No se encontró información para este animal: {animalName}</p>;
    }

    return (
        <div className="accordion">
            <h2>{animalInfo.name}</h2>
            <img src={animalInfo.image} alt={animalInfo.name} style={{maxWidth: '100%', height: 'auto'}} />
            {animalInfo.info.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default Accordion;