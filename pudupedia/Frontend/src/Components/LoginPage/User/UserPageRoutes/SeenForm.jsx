import React, { useState, useEffect } from 'react';
import './SeenForm.css'

const Form = ({ type, onSubmit, onCancel }) => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    item: '',
    description: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      let url;
      if (type === 'animal') url = '/api/animals';
      else if (type === 'plant') url = '/api/plants';
      else if (type === 'park') url = '/api/parks';

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

  const handleCancel = () => {
    setFormData({
      item: '',
      description: ''
    });
    if (onCancel) onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className='addForm'>
      <label htmlFor="item" className='selectAdd'>• Selecciona {type === 'animal' ? 'un animal' : type === 'plant' ? 'una planta' : 'un parque'}:</label>
      <br/>
      <select name="item" id="item" onChange={handleChange} value={formData.item} className='selectFaves'>
        <option value="" className='optionAdd'>Selecciona una opción</option>
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {type === 'animal' ? item.animal : type === 'plant' ? item.plant : item.park}
          </option>
        ))}
      </select>
      <br/>
      <label htmlFor="description" className='labelDesc'>• Descripción:</label> <br/>
      <input
        type="text"
        name="description"
        id="description"
        className='inputDesc'
        onChange={handleChange}
        value={formData.description}
        placeholder="Descripción del ítem"
      />
     <br/>
     <div className='addButtons'>
      <button type="submit" className='submitAdd'>Agregar</button>
      <button type="button" onClick={handleCancel} className='cancelAdd'>Cancelar</button>
     </div>
    </form>
  );
};

export default Form;