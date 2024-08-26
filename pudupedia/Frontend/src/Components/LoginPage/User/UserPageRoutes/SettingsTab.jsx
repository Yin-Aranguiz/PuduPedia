import React from 'react';
import './SettingTabs.css'
import { Link } from "react-router-dom";

const SettingsPage = () => {
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
          <div className='topTabName'>Configuración</div>
        </div>
        <div className='contentTab'>
        <div className='nameOfTab'>
            • Perfil
            • Privacidad
        </div>
        </div>
      </div>
    </div>
   );
}
 
export default SettingsPage;