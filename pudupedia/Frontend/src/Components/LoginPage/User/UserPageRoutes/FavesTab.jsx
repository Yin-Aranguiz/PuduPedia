import React from 'react';
import './FavesTab.css'
import chucao from './Chucao.jpg'
import ananuca from './ananuca.jpg'
import pdloro from './picoDeLoro.jpg'
import guina from './Guiña.jpg'
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons'

const FavesPage = () => {
  return ( 
    <div className='fullPage'>
      <Outlet/>
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
          <div className='topTabName'>Favoritos</div>
          <Link to="editfaves" className='editFaves'><FontAwesomeIcon icon={faPenToSquare} /></Link>
        </div>
        <div className='contentTab'>
          <div className='nameOfTab'>
            • Flora
            <div className='floraElements'>
              <img src={pdloro}/>
              <img src={ananuca}/>
            </div>
          </div>
          <div className='nameOfTab'>
            • Fauna
            <div className='faunaElements'>
              <img src={chucao}/>
              <img src={guina}/>
            </div>
          </div>
          <div className='nameOfTab'>
            • Parques
            <div className='parkElements'>
              <p className='noFavesYet'>No has añadido Parques favoritos</p>
            </div>
          </div>
          <div className='nameOfTab'>
            • Todo
            <div className='allElements'>
              <img src={pdloro}/>
              <img src={ananuca}/>
              <img src={chucao}/>
              <img src={guina}/>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default FavesPage;