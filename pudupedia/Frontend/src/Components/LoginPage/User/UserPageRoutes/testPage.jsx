import React, { useState } from 'react';
import Form from './SeenForm'; 
import './testPage.css'
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    const [formType, setFormType] = useState('');
  
    const handleButtonClick = (type) => {
      setFormType(type);
    };
  
    const handleFormSubmit = async (formData) => {
      try {
        let url;
        if (formType === 'animal') url = '/api/animals_seen';
        else if (formType === 'plant') url = '/api/plants_seen';
        else if (formType === 'park') url = '/api/parks_visited';
  
        const userId = localStorage.getItem('userId'); // Obtener el ID del usuario desde el localStorage
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: userId,
            ...formData, // Incluir datos del formulario
          }),
        });
  
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
  
        const result = await response.json();
        console.log(`Datos enviados para ${formType}:`, result);
  
      } catch (error) {
        console.error('Error al enviar los datos:', error);
      }
    };
  
    return (
      <div className='fullPageFaves'>
      <div className='sideTabFaves'>
        <div className='sideBoxesFirstFaves'>
          <div className='userNameBoxFaves'>
        <Link to="/faves" className='linkToPages'>« Volver a Favoritos</Link>

          </div>
        </div>
      </div>
      <div className='shownTabFaves'>
        <div className='topTabFaves'>
          <div className='topTabNameFaves'>Avistamientos</div>
        </div>
        <div className='contentTabFaves'>
        <div className='nameOfTabFaves'>
        <div className='addContainerFaves'>
        <button onClick={() => handleButtonClick('animal')} className='addingFaves'>Añadir Fauna</button>
        <button onClick={() => handleButtonClick('plant')} className='addingFaves'>Añadir Flora</button>
        <button onClick={() => handleButtonClick('park')} className='addingFaves'>Añadir Parque</button>
        </div>
        {formType && (
          <Form type={formType} onSubmit={handleFormSubmit} />
        )}
       
      
        </div>
        </div>
      </div>
    </div>
   );
  };
  
export default ProfilePage;