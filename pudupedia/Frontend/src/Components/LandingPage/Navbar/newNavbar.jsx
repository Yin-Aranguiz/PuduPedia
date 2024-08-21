import React, { useState, useEffect, useRef } from "react";
import SideBar from './Sidebar';
import './sidebar.css';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const handleViewSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const updateMaxScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const calculatedMaxScroll = documentHeight - windowHeight;
      
      setMaxScroll(calculatedMaxScroll);
    };

    const handleScroll = () => {
      setScrollPosition(Math.min(window.scrollY, maxScroll));
    };

    // Inicializa el límite al cargar el componente
    updateMaxScroll();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateMaxScroll); // Actualiza el límite en caso de cambio de tamaño
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateMaxScroll);
    };
  }, [maxScroll]); // Dependencia añadida para actualizar cuando cambie maxScroll

  const buttonStyle = {
    top: `${scrollPosition}px`,
  };

  return (
    <div className="navbar-container">
      <SideBar isOpen={sidebarOpen} scrollPosition={scrollPosition} />
      <button onClick={handleViewSidebar} className="sidebarToggle" style={buttonStyle}>
        {sidebarOpen ? '☰' : '☰'}
      </button>
    </div>
  );
}



