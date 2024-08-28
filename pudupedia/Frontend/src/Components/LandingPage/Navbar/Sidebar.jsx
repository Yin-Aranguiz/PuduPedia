import React from "react";
import { Link } from 'react-router-dom';
import game from './game.png'
import home from './home.png'
import tree from './tree.png'
import puma from './puma.png'
import news from './news.png'
import about from './about.png'

const SideBar = ({ isOpen, scrollPosition }) => {
  const sidebarClass = isOpen ? 'sidebar open' : 'sidebar';
  const sidebarStyle = {
    top: `${scrollPosition}px`
  };

  return (
    <div className={sidebarClass} style={sidebarStyle}>
      <div className="navBarItems">
        <Link to="/"><div className="circle"><img src={home}/></div>Inicio</Link>
        <Link to="/chile"><div className="circle"><img src={news}/></div>Noticias</Link>
        <Link to="/vida-silvestre"><div className="circle"><img src={puma}/></div>Ruta Endémica</Link>
        <Link to="/parques"><div className="circle"><img src={tree}/></div>Parques</Link>
        <Link to="/juegos"><div className="circle"><img src={game}/></div>Juegos</Link>
        <Link to="/quienes-somos"><div className="circle"><img src={about}/></div>Quienes Somos</Link>
      </div>
      
    </div>
  );
}

export default SideBar;
