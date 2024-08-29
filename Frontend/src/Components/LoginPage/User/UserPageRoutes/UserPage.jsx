import React, { useState, useEffect} from 'react';
import './UserPage.css'
// import monito from './monito-del-monte.jpg';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPen} from '@fortawesome/free-solid-svg-icons';

// sección del perfil de usuario que muestra de db nombre e email del usuario

const UserPage = () => {

  const [userData, setUserData] = useState({ username: '', email: '' });

  useEffect(() => {
    // Suponiendo que el token JWT está almacenado en localStorage
    const token = localStorage.getItem('accessToken');

    fetch('http://localhost:3001/user/profile', { 
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setUserData({ username: data.username, email: data.email, securityQuestion: data.security_question });
    })
    .catch(error => console.error('Error fetching user data:', error));
  }, []);



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
              • Pregunta de seguridad
            <div className='userData'>
              <p>{userData.securityQuestion}</p>
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