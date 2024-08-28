import React, { useState, useEffect } from 'react';
import './SeenForm.css';

const Form = ({ type, onSubmit, onCancel }) => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    item: '',
    description: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      let url;
      if (type === 'animal') url = 'http://localhost:3001/user/animals';
      else if (type === 'plant') url = 'http://localhost:3001/user/plants';
      else if (type === 'park') url = 'http://localhost:3001/user/parks';

      const response = await fetch(url);
      const data = await response.json();
      setItems(data);
    };

    fetchData();
  }, [type]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='addForm'>
      <label htmlFor="item" className='selectAdd'>
        • Selecciona {type === 'animal' ? 'un animal' : type === 'plant' ? 'una planta' : 'un parque'}:
      </label>
      <br />
      <select name="item" id="item" onChange={handleChange} value={formData.item} className='selectFaves'>
        <option value="" className='optionAdd'>Selecciona una opción</option>
        {items.map((item) => (
          <option className='option' key={item.id} value={item.id}>
            {type === 'animal' ? item.animal : type === 'plant' ? item.plant : item.park}
          </option>
        ))}
      </select>
      <br />
      <div className='addButtons'>
        <button type="submit" className='submitAdd'>Agregar</button>
        <button type="button" onClick={onCancel} className='cancelAdd'>Cancelar</button>
      </div>
    </form>
  );
};

export default Form;