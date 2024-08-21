import React from "react";
import { Link } from 'react-router-dom';

const SideBar = ({ isOpen, scrollPosition }) => {
  const sidebarClass = isOpen ? 'sidebar open' : 'sidebar';
  const sidebarStyle = {
    top: `${scrollPosition}px`  // Adjusts the sidebar position based on scroll
  };

  return (
    <div className={sidebarClass} style={sidebarStyle}>
      <div className="navBarItems">
        <Link to="/"><div className="circle"><img src='https://cdn-icons-png.flaticon.com/512/25/25694.png'/></div>Inicio</Link>
        <Link to="/chile"><div className="circle"><img src='https://static.thenounproject.com/png/3391157-200.png'/></div>Noticias</Link>
        <Link to="/vida-silvestre"><div className="circle"></div>Vida Silvestre</Link>
        <Link to="/parques"><div className="circle"></div>Parques</Link>
        <Link to="/juegos"><div className="circle"></div>Juegos</Link>
        <Link to="/quienes-somos"><div className="circle"></div>Quienes Somos</Link>
      </div>
      
    </div>
  );
}

export default SideBar;
