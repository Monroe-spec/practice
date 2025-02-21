const pokemonList = [];
sessionStorage.setItem('pokemonList', JSON.stringify(pokemonList));
let data = localStorage.getItem('pokemonList');


fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
.then(response => response.json());
.then(data) => {
    pokemonList.push(data);
    localStorage.setItem('pokemonList', JSON.stringify(pokemonList));
    return data;
};