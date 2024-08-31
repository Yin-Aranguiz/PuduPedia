import React, { useState, useEffect } from 'react';
import './SeenForm.css';
import { useAuth } from '../../signlog/AuthContext/AuthContext'; 

const Form = ({ formType, formAction, onSubmit, onCancel }) => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    item: '',
  });
  const { user } = useAuth(); 

  useEffect(() => {
    const fetchData = async () => {
      let url;
      if (formType === 'animal') url = 'http://localhost:3001/user/animals';
      else if (formType === 'plant') url = 'http://localhost:3001/user/plants';
      else if (formType === 'park') url = 'http://localhost:3001/user/parks';

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error en la solicitud');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [formType]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('accessToken');
    const { item } = formData;

    // Validación de parámetros
    if (!user || !user.id || !item) {
      alert('Faltan parámetros necesarios.');
      return;
    }

    let url;
    let method;
    let body;

    switch (formType) {
      case 'animal':
        url = formAction === 'add' ? 'http://localhost:3001/user/animals-seen' : `http://localhost:3001/user/animals-seen/${item}`;
        method = formAction === 'add' ? 'POST' : 'DELETE';
        body = method === 'POST' ? JSON.stringify({ userId: user.id, animalId: item, seen: true }) : null;
        break;
    
      case 'plant':
        url = formAction === 'add' ? 'http://localhost:3001/user/plants-seen' : `http://localhost:3001/user/plants-seen/${item}`;
        method = formAction === 'add' ? 'POST' : 'DELETE';
        body = method === 'POST' ? JSON.stringify({ userId: user.id, plantId: item, seen: true }) : null;
        break;
    
      case 'park':
        url = formAction === 'add' ? 'http://localhost:3001/user/parks-visited' : `http://localhost:3001/user/parks-visited/${item}`;
        method = formAction === 'add' ? 'POST' : 'DELETE';
        body = method === 'POST' ? JSON.stringify({ userId: user.id, parkId: item, visited: true }) : null;
        break;
    
      default:
        alert('Tipo de formulario no reconocido.');
        return;
    }

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error en la solicitud:', errorData);
        throw new Error(errorData.error || 'Error en la solicitud');
      }

      const result = await response.json();
      alert('Operación realizada con éxito.');
      window.location.reload(); // Recarga la página automáticamente
      onSubmit(result);
    } catch (error) {
      console.error('Error:', error);
      alert('Se ha producido un error. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='addForm'>
      <label htmlFor="item" className='selectAdd'>
        • Selecciona {formType === 'animal' ? 'un animal' : formType === 'plant' ? 'una planta' : 'un parque'}:
      </label>
      <br />
      <select name="item" id="item" onChange={handleChange} value={formData.item} className='selectFaves'>
        <option value="" className='optionAdd'>Selecciona una opción</option>
        {items.map((item) => (
          <option className='option' key={item.id} value={item.id}>
            {formType === 'animal' ? item.animal : formType === 'plant' ? item.plant : item.park}
          </option>
        ))}
      </select>
      <br />
      <div className='addButtons'>
        <button type="submit" className='submitAdd'>
          {formAction === 'add' ? 'Agregar' : 'Eliminar'}
        </button>
        <button type="button" onClick={onCancel} className='cancelAdd'>Cancelar</button>
      </div>
    </form>
  );
};

export default Form;