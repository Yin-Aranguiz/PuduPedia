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
          <div className='topTabName'>Logros</div>
        </div>
        <div className='contentTab'>
        <div className='nameOfTab'>
            • Logros
            <ul>
        <li><strong>Primer Animal Avistado:</strong> Has avistado tu primer animal.</li>
        <li><strong>Primera Planta Avistada:</strong> Has avistado tu primera planta.</li>
        <li><strong>Primer Parque Visitado:</strong> Has visitado tu primer parque nacional.</li>
        <li><strong>3 Animales Avistados:</strong> Has avistado 3 animales endémicos.</li>
        <li><strong>3 Plantas Avistadas:</strong> Has avistado 3 plantas endémicas.</li>
        <li><strong>3 Parques Visitados:</strong> Has visitado 3 parques nacionales.</li>
        <li><strong>5 Animales Avistados:</strong> Has avistado 5 animales endémicos.</li>
        <li><strong>5 Plantas Avistadas:</strong> Has avistado 5 plantas endémicas.</li>

      </ul>
    </div>
        </div>
        </div>
      </div>
   );
}
 
export default NotifPage;