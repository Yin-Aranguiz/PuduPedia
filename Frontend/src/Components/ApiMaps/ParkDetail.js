import React from 'react';
import { useParams } from 'react-router-dom';
import { parksInfo } from './ParksInfo'; // Asegúrate de que la ruta sea correcta
import MapsApi from './MapsApi'; // Asegúrate de que la ruta sea correcta

const ParkDetail = () => {
  const { parkId } = useParams(); // Asume que usas react-router para manejar las rutas
  const park = parksInfo[parkId]; // Supone que 'parkId' es el índice en 'parksInfo'

  if (!park) {
    return <div>Parque no encontrado</div>;
  }

  return (
    <div>
      <h1>{park.title}</h1>
      <p>{park.description}</p>
      {/* Renderizar el mapa usando las coordenadas */}
      <MapsApi latitude={park.location.latitude} longitude={park.location.longitude} />
    </div>
  );
};

export default ParkDetail;
