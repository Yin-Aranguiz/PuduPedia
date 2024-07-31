import React, { useEffect, useState } from 'react';

function Api() {
    // Estado para guardar los datos de la API
    const [data, setData] = useState(null);

    // Función para obtener datos de la API
    const ApiData = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.log('Error en el fetching data:', error);
        }
    };

    // useEffect para llamar ApiData al montar el componente
    useEffect(() => {
        ApiData();
    }, []); // Array vacío asegura que solo se ejecute una vez al montar el componente

    useEffect(() => {}, []); // useEffect vacío

    return (
        <div>
            {/* Mostrar datos obtenidos */}
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    );
}

export default Api;
