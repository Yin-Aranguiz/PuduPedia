import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapsApi.css'; // Asegúrate de que este archivo CSS exista

const MapsApi = ({ latitude, longitude }) => {
  useEffect(() => {
    // Inicializa el mapa
    const map = L.map('map').setView([latitude, longitude], 13);

    // Carga y muestra las capas del mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Añade un marcador en las coordenadas
    L.marker([latitude, longitude]).addTo(map)
      .bindPopup('Ubicación del parque')
      .openPopup();

    return () => {
      map.remove(); // Limpia el mapa al desmontar el componente
    };
  }, [latitude, longitude]);

  return (
        <div id="map" style={{ height: '100vh', width: '100%' }}></div>
    );
};

export default MapsApi;
