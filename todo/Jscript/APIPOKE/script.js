document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'; //pedimos el api
    const searchBar = document.getElementById('search-bar'); // trabajamos con un id de busqueda
    let allPokemons = []; //creamos el array para almacenar pokemones

    function displayPokemons(pokemons) {  //funcion para mostrar pokemon en cartas
        const characterContainer = document.getElementById('character-container'); //creo un container para trabajar con pokemones individualmente
        characterContainer.innerHTML = ''; //esto me permite modificar el html con el nuevo elemento creado, en este caso borra la caja
        pokemons.forEach(pokemon => { //funcion de flecha para crear divs para modificar con el css
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            characterCard.innerHTML = `
                <h2>${pokemon.name}</h2>
                <p>ID: ${pokemon.id}</p>
                <p>Tipo: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            `;
            characterContainer.appendChild(characterCard);
        });
    }

    function fetchPokemonData(name) {
        return fetch(apiUrl + name)
            .then(response => response.json())
            .then(data => {
                return {
                    name: data.name,
                    id: data.id,
                    types: data.types,
                    sprites: data.sprites
                };
            });
    }
    function fetchAllPokemons() {
        // Con esta funcion recorremos el numero de pokemones segun su id
        const pokemonPromises = [];
        for (let i = 1; i <= 700; i++) { //con esto le digo el recorrido que quiero que den 
            pokemonPromises.push(fetchPokemonData(i));
        }
        Promise.all(pokemonPromises)
            .then(pokemons => {
                allPokemons = pokemons;
                displayPokemons(allPokemons);
            })
            .catch(error => console.error('Error fetching Pokémon data:', error));
    }

    // Fetch initial Pokémon data
    fetchAllPokemons();

    // Evento de búsqueda
    searchBar.addEventListener('input', function(event) { //le agregamos el input
        const searchTerm = event.target.value.toLowerCase();
        const filteredPokemons = allPokemons.filter(pokemon => 
            pokemon.name.toLowerCase().includes(searchTerm)
        );
        displayPokemons(filteredPokemons);
    });
});

