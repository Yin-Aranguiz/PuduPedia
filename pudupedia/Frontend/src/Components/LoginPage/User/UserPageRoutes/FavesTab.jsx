import React, { useState, useEffect } from 'react';
import './FavesTab.css';
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Form from './SeenForm'; // Asegúrate de importar el formulario

const FavesPage = () => {
  const [animals, setAnimals] = useState([]);
  const [plants, setPlants] = useState([]);
  const [parks, setParks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('');
  const [formAction, setFormAction] = useState(''); // 'add' or 'remove'

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('http://localhost:3001/user/animals', {
      headers: { 'Authorization': `Bearer ${token}` },
    })
      .then(response => response.json())
      .then(data => setAnimals(data))
      .catch(error => console.error('Error fetching animals:', error));

    fetch('http://localhost:3001/user/plants', {
      headers: { 'Authorization': `Bearer ${token}` },
    })
      .then(response => response.json())
      .then(data => setPlants(data))
      .catch(error => console.error('Error fetching plants:', error));

    fetch('http://localhost:3001/user/parks', {
      headers: { 'Authorization': `Bearer ${token}` },
    })
      .then(response => response.json())
      .then(data => setParks(data))
      .catch(error => console.error('Error fetching parks:', error));
  }, []);

  const handleAddFavorite = (type) => {
    setFormType(type);
    setFormAction('add');
    setShowForm(true);
  };

  const handleRemoveFavorite = (type) => {
    setFormType(type);
    setFormAction('remove');
    setShowForm(true);
  };

  const handleFormSubmit = (data) => {
    const token = localStorage.getItem('token');
    const url = `http://localhost:3001/${formType}-seen${formAction === 'remove' ? `/${data.item}` : ''}`;

    fetch(url, {
      method: formAction === 'add' ? 'POST' : 'DELETE',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
      },
      body: formAction === 'add' ? JSON.stringify({ id: data.item }) : null,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert(`${formType.charAt(0).toUpperCase() + formType.slice(1)} ${formAction === 'add' ? 'añadido' : 'eliminado'} con éxito.`);
          if (formAction === 'add') {
            if (formType === 'animal') {
              setAnimals([...animals, { id: data.item, seen: true }]);
            } else if (formType === 'plant') {
              setPlants([...plants, { id: data.item, seen: true }]);
            } else if (formType === 'park') {
              setParks([...parks, { id: data.item, visited: true }]);
            }
          } else {
            if (formType === 'animal') {
              setAnimals(animals.filter(animal => animal.id !== data.item));
            } else if (formType === 'plant') {
              setPlants(plants.filter(plant => plant.id !== data.item));
            } else if (formType === 'park') {
              setParks(parks.filter(park => park.id !== data.item));
            }
          }
          setShowForm(false);
        } else {
          alert(`Error ${formAction === 'add' ? 'añadiendo' : 'eliminando'} el ítem.`);
        }
      })
      .catch(error => console.error(`Error ${formAction === 'add' ? 'añadiendo' : 'eliminando'} el ítem:`, error));
  };

  const handleFormCancel = () => {
    setShowForm(false);
  };

  return (
    <div className='fullPage5'>
      <Outlet />
      <div className='sideTab'>
        <div className='sideBoxesFirst'>
          <div className='userNameBox'>
            <nav>
              <Link to="/user" className='linkToPages'>Perfil de usuario</Link>
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
          <Link to="/editfaves" className='editFaves'>
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
        </div>
        <div className='contentTab'>
          <div className='nameOfTab'>
            • Flora
            <div className='floraElements'>
              {plants.length > 0 ? (
                plants.map(plant => (
                  <div key={plant.id}>
                    <img src={plant.imageUrl} alt={plant.name} />
                    <button onClick={() => handleAddFavorite('plant', plant.id)}>
                      Añadir a Vistos
                    </button>
                    {plant.seen && (
                      <button onClick={() => handleRemoveFavorite('plant', plant.id)}>
                        Eliminar de Vistos
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <p className='noFavesYet'>No has añadido Plantas Avistadas</p>
              )}
            </div>
          </div>
          <div className='nameOfTab'>
            • Fauna
            <div className='faunaElements'>
              {animals.length > 0 ? (
                animals.map(animal => (
                  <div key={animal.id}>
                    <img src={animal.imageUrl} alt={animal.name} />
                    <button onClick={() => handleAddFavorite('animal', animal.id)}>
                      Añadir a Vistos
                    </button>
                    {animal.seen && (
                      <button onClick={() => handleRemoveFavorite('animal', animal.id)}>
                        Eliminar de Vistos
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <p className='noFavesYet'>No has añadido Animales Avistados</p>
              )}
            </div>
            <div className='nameOfTab'>
              • Parques
              <div className='parkElements'>
                {parks.length > 0 ? (
                  parks.map(park => (
                    <div key={park.id}>
                      <p>{park.name}</p>
                      <button onClick={() => handleAddFavorite('park', park.id)}>
                        Añadir a Visitados
                      </button>
                      {park.visited && (
                        <button onClick={() => handleRemoveFavorite('park', park.id)}>
                          Eliminar de Visitados
                        </button>
                      )}
                    </div>
                  ))
                ) : (
                  <p className='noFavesYet'>No has añadido Parques Visitados</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div className='formContainer'>
          <Form type={formType} onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
        </div>
      )}
    </div>
  );
}

export default FavesPage;
