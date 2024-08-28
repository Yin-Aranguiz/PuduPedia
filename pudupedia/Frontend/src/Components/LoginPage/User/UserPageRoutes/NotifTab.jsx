import React from 'react';
import './NotifTab.css'
import { Link } from "react-router-dom";

const NotifPage = () => {

  // conectar con ruta del back para mostrar los logros de db
  
  return ( 
    <div className='fullPage3'>
      <div className='sideTab'>
        <div className='sideBoxesFirst'>
          <div className='userNameBox'>
          <nav>
          <Link to="/user" className='linkToPages'>Perfil de usuario</Link>
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
          <div className='topTabName'>Logros</div>
        </div>
        <div className='contentTab'>
        <div className='nameOfTab'>
            • Logros
        </div>
        </div>
      </div>
    </div>
   );
}
 
export default NotifPage;