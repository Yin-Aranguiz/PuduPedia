import React, { useState, useEffect } from 'react';
import './FavesTab.css';
import { Link } from "react-router-dom";
import Form from './SeenForm'; 
import { useAuth } from '../../signlog/AuthContext/AuthContext';

const FavesPage = () => {
  const [animals, setAnimals] = useState([]);
  const [plants, setPlants] = useState([]);
  const [parks, setParks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('');
  const [formAction, setFormAction] = useState('');
  const { user } = useAuth();
  const [userAchievements, setUserAchievements] = useState([]);

  const handleFormCancel = () => {
    setShowForm(false);  // Esto cierra el formulario
  };
  
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!user) return;
  
    const fetchData = async (url, setter) => {
      try {
        const response = await fetch(url, {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setter(data); // Actualiza el estado con los datos obtenidos
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
      }
    };
  
    // Llamadas para obtener avistamientos
    fetchData('http://localhost:3001/user/animals-seen', setAnimals);
    fetchData('http://localhost:3001/user/plants-seen', setPlants);
    fetchData('http://localhost:3001/user/parks-visited', setParks);
  }, [user]);

  const handleAddFavorite = (type) => {
    console.log('Add favorite of type:', type); // Verifica el tipo
    if (!user) return;
    setFormType(type);
    setFormAction('add');
    setShowForm(true);
  };
  
  const handleRemoveFavorite = (type) => {
    console.log('Remove favorite of type:', type); // Verifica el tipo
    if (!user) return;
    setFormType(type);
    setFormAction('remove');
    setShowForm(true);
  };

  const updateFavorites = (data) => {
    const updateState = (prevState) => 
      formAction === 'add' 
        ? [...prevState, data]
        : prevState.filter(item => item.id !== data.id);

    switch(formType) {
      case 'animal':
        setAnimals(updateState);
        break;
      case 'plant':
        setPlants(updateState);
        break;
      case 'park':
        setParks(updateState);
        break;
      default:
        console.error('Unknown form type:', formType);
    }
  };

  // const handleFormSubmit = async (data) => {
  //   const token = localStorage.getItem('accessToken');
  //   const urlMap = {
  //     animal: 'http://localhost:3001/user/animals-seen',
  //     plant: 'http://localhost:3001/user/plants-seen',
  //     park: 'http://localhost:3001/user/parks-visited'
  //   };
  
  //   const url = urlMap[formType];
  //   const method = formAction === 'add' ? 'POST' : 'DELETE'; // Puedes usar PUT/PATCH si prefieres
  
  //   try {
  //     const response = await fetch(url, {
  //       method: method,
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`
  //       },
  //       body: JSON.stringify(data) // Asegúrate de enviar los datos correctos
  //     });
  
  //     if (!response.ok) throw new Error('Error in request');
      
  //     const updatedData = await response.json();
      
  //     // Actualiza el estado en el frontend una vez el backend confirme el cambio
  //     updateFavorites(updatedData);
  
  //   } catch (error) {
  //     console.error('Error updating favorites:', error);
  //   }
  
  //   setShowForm(false); // Ocultar el formulario después de la solicitud
  // };

  // const handleFormCancel = () => {
  //   setShowForm(false);
  // };

  const handleFormSubmit = async (data) => {
    const token = localStorage.getItem('accessToken');
    const urlMap = {
      animal: 'http://localhost:3001/user/animals-seen',
      plant: 'http://localhost:3001/user/plants-seen',
      park: 'http://localhost:3001/user/parks-visited'
    };
  
    const url = urlMap[formType];
    const method = formAction === 'add' ? 'POST' : 'DELETE';
  
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) throw new Error('Error in request');
  
      const { achievements, message } = await response.json();
  
      // Actualizar el estado de los avistamientos
      updateFavorites(data);
  
      // Actualizar los logros con los datos recalculados
      setUserAchievements(achievements); // Asegúrate de tener este estado en el frontend para mostrar los logros
  
    } catch (error) {
      console.error('Error updating favorites:', error);
    }
  
    setShowForm(false);
  };

  const renderList = (items, type) => {
    if (items.length === 0) {
      return <p className='noFavesYet'>No has añadido {type} {type === 'Parques' ? 'Visitados' : 'Avistados'}</p>;
    }

    return items.map(item => (
      <div key={item.id}>
        <ul>
          <li>
            {Object.entries(item)
              .filter(([key]) => key !== 'id' && key !== 'seen' && key !== 'visited')
              .map(([key, value]) => value)
              .join(', ')}
          </li>
          <br />
        </ul>
      </div>
    ));
  };

  if (!user) {
     
    return <div className='shownTab'>Cargando desde la base de datos...</div>;
    
  }


  return (
    <div className='fullPage5'>
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
          <div className='topTabName'>Avistamientos</div>
        </div>
        <div className='contentTab'>
          <div className='nameOfTab'>
            • Flora
            <div className='floraElements'>
              {renderList(plants, 'Plantas')}
              <button className='addButton' onClick={() => handleAddFavorite('plant')}>Añadir a Vistos</button>
              {plants.some(plant => plant.seen) && (
                <button className='addButton' onClick={() => handleRemoveFavorite('plant')}>Eliminar de Vistos</button>
              )}
            </div>
          </div>
          <div className='nameOfTab'>
            • Fauna
            <div className='faunaElements'>
              {renderList(animals, 'Animales')}
              <button className='addButton' onClick={() => handleAddFavorite('animal')}>Añadir a Vistos</button>
              {animals.some(animal => animal.seen) && (
                <button className='addButton' onClick={() => handleRemoveFavorite('animal')}>Eliminar de Vistos</button>
              )}
            </div>
          </div>
          <div className='nameOfTab'>
            • Parques
            <div className='parkElements'>
              {renderList(parks, 'Parques')}
              <button className='addButton' onClick={() => handleAddFavorite('park')}>Añadir a Visitados</button>
              {parks.some(park => park.visited) && (
                <button className='addButton' onClick={() => handleRemoveFavorite('park')}>Eliminar de Visitados</button>
              )}
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div className='formContainer2'>
          <Form formType={formType} formAction={formAction} onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
        </div>
      )}
    </div>
  );
}

export default FavesPage; 