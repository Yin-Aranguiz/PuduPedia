import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteAccount = () => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar tu cuenta? Esta acción es irreversible.')) {
      const token = localStorage.getItem('accessToken');

      fetch('http://localhost:3001/user/delete-account', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json', 
        },
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            alert('Cuenta eliminada con éxito.');
            // Redirigir a la página de inicio
            navigate('/');
          } else {
            alert(data.message || 'Error eliminando la cuenta.');
          }
        })
        .catch(error => alert('Error eliminando la cuenta.'));
    }
  };

  return (
    <div className='deleteAccount'>
      <h3>Eliminar la Cuenta de usuario: cuidado, esta acción es irreversible</h3>
      <button onClick={handleDelete}>Eliminar Cuenta</button>
    </div>
  );
};

export default DeleteAccount;