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
          <div className='topTabName'>Ayuda</div>
        </div>
        <div className='contentTab'>
        <div className='nameOfTab'>
            • Dudas <br/>
            <p>En esta sección, respondemos a las preguntas más comunes sobre las especies endémicas de Chile. Si tienes preguntas sobre cómo identificar estas especies, sus hábitats, o los esfuerzos de conservación para protegerlas, aquí encontrarás información útil y detallada. No dudes en contactarnos si tienes más preguntas o necesitas información adicional.</p>
            • Contáctanos <br/>
            <p>noreply.pudupedia@gmail.com</p><br/>
        </div>
        </div>
      </div>
    </div>
   );
}
 
export default HelpPage;