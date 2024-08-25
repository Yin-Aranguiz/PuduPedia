import React, { useState } from 'react';
import Form from './SeenForm'; 

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
      <div>
        <h1>Perfil del Usuario</h1>
  
        <button onClick={() => handleButtonClick('animal')}>Añadir Animal Visto</button>
        <button onClick={() => handleButtonClick('plant')}>Añadir Planta Vista</button>
        <button onClick={() => handleButtonClick('park')}>Añadir Parque Visitado</button>
  
        {formType && (
          <Form type={formType} onSubmit={handleFormSubmit} />
        )}
      </div>
    );
  };
  
  export default ProfilePage;