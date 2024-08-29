import React from 'react';
import './HelpTab.css'
import { Link } from "react-router-dom";

const HelpPage = () => {
// rellenar con información de contacto y algunas guías para usar la página

  return ( 
    <div className='fullPage4'>
      <div className='sideTab'>
        <div className='sideBoxesFirst'>
          <div className='userNameBox'>
          <nav>
          <Link to="/user/prof" className='linkToPages'>Perfil de usuario</Link>
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