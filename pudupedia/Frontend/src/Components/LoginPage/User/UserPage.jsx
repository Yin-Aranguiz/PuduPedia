import React from 'react';
import './UserPage.css'
import chucao from './Chucao.jpg'
import ananuca from './ananuca.jpg'
import pdloro from './picoDeLoro.jpg'
import guina from './Guiña.jpg'

const UserPage = () => {
  return ( 
    <div className='fullPage'>
      <div className='sideTab'>
        <div className='sideBoxesFirst'>
          <div className='userNameBox'>Nombre</div>
        </div>
        <button className='sideBoxes'>Notificaciones</button>
        <button className='sideBoxes'>Favoritos</button>
        <button className='sideBoxes'>Historial</button>
        <button className='sideBoxes'>Configuración</button>
        <button className='sideBoxes'>Ayuda</button>
      </div>
      <div className='shownTab'>
        <div className='topTab'>
          <div className='topTabName'>Favoritos</div>
          <div className='editFaves'>
          </div>
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
 
export default UserPage;
