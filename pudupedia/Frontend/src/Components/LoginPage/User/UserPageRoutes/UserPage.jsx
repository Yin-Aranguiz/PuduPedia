import React, { useState, useEffect} from 'react';
import './UserPage.css'
// import monito from './monito-del-monte.jpg';
import { Outlet, Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPen} from '@fortawesome/free-solid-svg-icons';

// sección del perfil de usuario que muestra de db nombre e email del usuario

const UserPage = () => {

  const [userData, setUserData] = useState({ username: '', email: '' });

  useEffect(() => {
    // Suponiendo que el token JWT está almacenado en localStorage
    const token = localStorage.getItem('token');

    fetch('http://localhost:3001/user/profile', { 
      method: 'GET',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setUserData({ username: data.username, email: data.email });
    })
    .catch(error => console.error('Error fetching user data:', error));
  }, []);



  return ( 
    
    <div className='fullPage'>
            <Outlet />
      <div className='sideTab'>
        <div className='sideBoxesFirst'>
          <div className='userNameBox'>
          <nav>
          <Link to="/user" className='linkToPages'>Perfil de Usuario</Link>
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
          <div className='topTabName'>Tu perfil</div>
        </div>
        <div className='contentTab'>
        <div className='nameOfTab'>
            • Nombre de Usuario
            <div className='userData'>
              <p>{userData.username}</p>
            </div> 
            • Email
            <div className='userData'>
              <p>{userData.email}</p>
              </div>
        </div>
        {/* <div className='profilePicCorner'>
        <img src={monito} alt="monito del monte" className="imagePic"></img>
        <p className='editPic'><FontAwesomeIcon icon={faPen} /></p>
        </div> */}
        </div>
      </div>
    </div>
   );
}
 
export default UserPage;