import React from 'react';
import './App.css';
import Accordion from './Accordion';

const App = () => {
    return (
        <div className="app-container">
            <div className="image">
                <img src="https://pbs.twimg.com/media/D6eRwvQX4AARoU5.jpg" alt="Imagen del Personaje" />
            </div>
            
            <div className="accordion-wrapper">
                <Accordion/>
            </div>

        </div>
    );
};

export default App;