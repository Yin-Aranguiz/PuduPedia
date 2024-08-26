import React from 'react';
import './HelpTab.css'
import { Link } from "react-router-dom";

const HelpPage = () => {
  return ( 
    <div className='fullPage'>
      <div className='sideTab'>
        <div className='sideBoxesFirst'>
          <div className='userNameBox'>
          <nav>
          <Link to="/" className='linkToPages'>UserPage</Link>
          </nav>
          </div>
        </div>
        <button className='sideBoxes'>
        <nav>
        <Link to="/notifs" className='linkToPages'>Notificaciones</Link>
        </nav>
        </button>
        <button className='sideBoxes'>
        <Link to="/faves" className='linkToPages'>Favoritos</Link>
        </button>
        <button className='sideBoxes'>
        <Link to="/history" className='linkToPages'>Historial</Link>
        </button>
        <button className='sideBoxes'>
        <Link to="/settings" className='linkToPages'>Configuración</Link>
        </button>
        <button className='sideBoxes'>
        <Link to="/help" className='linkToPages'>Ayuda</Link>
        </button>
      </div>
      <div className='shownTab'>
        <div className='topTab'>
          <div className='topTabName'>Ayuda</div>
        </div>
        <div className='contentTab'>
        <div className='nameOfTab'>
            • Dudas
            • Contáctanos
        </div>
        </div>
      </div>
    </div>
   );
}
 
export default HelpPage;