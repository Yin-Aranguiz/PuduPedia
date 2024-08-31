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
  console.log(user);
  
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
        setter(data);
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
      }
    };

    fetchData('http://localhost:3001/user/animals-seen', setAnimals);
    fetchData('http://localhost:3001/user/plants-seen', setPlants);
    fetchData('http://localhost:3001/user/parks-visited', setParks);
  }, [user]);

  const handleAddFavorite = (type) => {
    if (!user) return;
    setFormType(type);
    setFormAction('add');
    setShowForm(true);
  };

  const handleRemoveFavorite = (type) => {
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

  const handleFormSubmit = (data) => {
    updateFavorites(data);
    setShowForm(false);
  };

  const handleFormCancel = () => {
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
        <div className='formContainer'>
          <Form formType={formType} formAction={formAction} onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
        </div>
      )}
    </div>
  );
}

export default FavesPage; 