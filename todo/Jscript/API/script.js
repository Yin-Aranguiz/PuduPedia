document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://rickandmortyapi.com/api/character/';
    const searchBar = document.getElementById('search-bar');
    let allCharacters = [];

    // Función para mostrar los personajes
    function displayCharacters(characters) {
        const characterContainer = document.getElementById('character-container');
        characterContainer.innerHTML = '';
        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            characterCard.innerHTML = `
                <h2>${character.name}</h2>
                <p>Status: ${character.status}</p>
                <p>Species: ${character.species}</p>
                <img src="${character.image}" alt="${character.name}">
            `;
            characterContainer.appendChild(characterCard);
        });
    }

    // Obtener datos del API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            allCharacters = data.results;
            displayCharacters(allCharacters);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    // Evento de búsqueda
    searchBar.addEventListener('input', function(event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredCharacters = allCharacters.filter(character => 
            character.name.toLowerCase().includes(searchTerm)
        );
        displayCharacters(filteredCharacters);
    });
});
