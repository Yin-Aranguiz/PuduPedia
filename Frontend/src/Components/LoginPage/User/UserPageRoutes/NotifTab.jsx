import React, { useEffect, useState } from 'react';
import './NotifTab.css';
import { Link } from "react-router-dom";
import { useAuth } from '../../signlog/AuthContext/AuthContext';

const NotifPage = () => {
  const [achievements, setAchievements] = useState([]);
  const { user } = useAuth(); // Obtiene el objeto user

  const fetchAchievements = async (userId) => {
    try {
      // Obtener el token de localStorage
      const token = localStorage.getItem('accessToken');
      
      const response = await fetch(`http://localhost:3001/user/achievements/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`, // Incluir el token en la cabecera
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Data fetched:', data);
  
      if (Array.isArray(data) && data.length > 0) {
        setAchievements(data);
      } else {
        console.log('No achievements found or data is not an array.');
        setAchievements([]); 
      }
    } catch (error) {
      console.error('Error fetching achievements:', error);
    }
  };

  useEffect(() => {
    if (user && user.id) { // Verifica que user y user.id existan
      console.log('Fetching achievements for user ID:', user.id);
      fetchAchievements(user.id);
    } else {
      console.error('No user ID found');
    }
  }, [user]);


  return (
    <div className='fullPage3'>
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
          <div className='topTabName'>Logros</div>
        </div>
        <div className='contentTab'>
          <div className='nameOfTab'>
            • Logros
            <ul>
              {achievements.length > 0 ? (
                achievements.map((achievement) => (
                  <li key={achievement.id}>
                    {achievement.achievement} <strong>{achievement.achievement_description}</strong>
                  </li>
                ))
              ) : (
                <li>No hay logros disponibles.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotifPage;