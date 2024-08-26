import React, { useState } from 'react';
import './DarkModeToggle.css'; // Asegúrate de que esta ruta es correcta

const DarkModeToggle = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (typeof onToggle === 'function') {
      console.log('Calling onToggle with:', newDarkMode);
      onToggle(newDarkMode);
    } else {
      console.error('onToggle prop is not a function');
    }
  };
  

  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
