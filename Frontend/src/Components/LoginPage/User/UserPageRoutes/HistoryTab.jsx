import React from 'react';
import './HistoryTab.css'
import { Link } from "react-router-dom";

const HistoryPage = () => {
  return ( 
    <div className='fullPage'>
      <div className='sideTab'>
        <div className='sideBoxesFirst'>
          <div className='userNameBox'>
          <nav>
          <Link to="/user/prof" className='linkToPages'>Perfil de Usuario</Link>
          </nav>
          </div>
        </div>
        <button className='sideBoxes'>
        <nav>
        <Link to="/user/notifs" className='linkToPages'>Logros</Link>
        </nav>
        </button>
        <button className='sideBoxes'>
        <Link to="/user/faves" className='linkToPages'>Avistamientos</Link>
        </button>
        <button className='sideBoxes'>
        <Link to="/user/settings" className='linkToPages'>Configuración</Link>
        </button>
        <button className='sideBoxes'>
        <Link to="/user/help" className='linkToPages'>Ayuda</Link>
        </button>
      </div>
      <div className='shownTab'>
        <div className='topTab'>
          <div className='topTabName'>Historial</div>
        </div>
        <div className='contentTab'>
        <div className='nameOfTab'>
            • Partidas
            • Puntajes
        </div>
        </div>
      </div>
    </div>
   );
}
 
export default HistoryPage;