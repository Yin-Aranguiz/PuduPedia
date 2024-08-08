document.addEventListener('DOMContentLoaded', async function(){
    const apiUrl = 'https://swapi.dev/api/people'; // obtengo recursos a través de un objeto
    const searchBar = document.getElementById('search-bar'); // para el buscador edite el id
    const characterContainer = document.getElementById('character-container'); // corrección aquí
    let allCharacters = []; // hago un array para los personajes

    // Creamos la funcion para mostrar los personajes
    function displayCharacter(characters) {
        characterContainer.innerHTML = ''; // limpiamos el contenedor antes de agregar nuevos personajes
        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            characterCard.innerHTML= `
                <h2>${character.name}</h2>
                <p><strong>Genero:</strong> ${character.gender}</p>
                <p><strong>Cumpleaños:</strong> ${character.birth_year}</p>
                <p><strong>Altura (cm):</strong> ${character.height} cm</p>
            `;
            characterContainer.appendChild(characterCard); //no me agarra la imagen
        });
    }

    // Obtener datos del API
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        allCharacters = data.results;
        displayCharacter(allCharacters);
    } catch (error) {
        console.error('Error en la búsqueda', error);
    }

    // Evento para filtrar personajes
    searchBar.addEventListener('input', function(event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredCharacters = allCharacters.filter(character => 
            character.name.toLowerCase().includes(searchTerm)
        );
        displayCharacter(filteredCharacters);
    });
});
