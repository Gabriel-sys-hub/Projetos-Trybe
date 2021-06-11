const pokeContainer = document.getElementById('poke-container');
const nameTags = document.getElementsByTagName('h3');
const typeTags = document.getElementsByClassName('type');
const searchBar = document.getElementById('search');
const searchBarType = document.getElementById('search-type');
const storePokemons = 150;
const colors = {
  fire: '#bb4825',
  grass: '#16b156',
  electric: '#ebcd26',
  water: '#5fb1d6',
  ground: '#805413',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#8d2cce',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#DEF3FD',
  fighting: '#e6e0d4',
  normal: '#F3f3f3',
  ice: '#c0e2fa'
}

const main_types = Object.keys(colors);


const fetchPokemons = async () => {
  for (let index = 1; index <= storePokemons; index += 1) {
    await getPokemon(index);
  }
}

const getPokemon = async id => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonCharacters = await res.json();
  createPokemonCard(pokemonCharacters);
}

searchBarType.addEventListener('input', (event) => {
  const eventTarget = event.target.value.toLowerCase();
  const divPokemonClass = document.getElementsByClassName('pokemon');
  for (let index = 0; typeTags.length; index += 1) {
    if(typeTags[index].innerHTML.toLowerCase().indexOf(eventTarget) > -1) {
      divPokemonClass[index].style.display = '';
    } else if (eventTarget !== typeTags[index].innerHTML) {
      divPokemonClass[index].style.display = 'none'
    } 
    if (eventTarget == '') {
      divPokemonClass[index].style.display = '';
    }  
  }
});

searchBar.addEventListener('input', (event) => {
  const eventTarget = event.target.value.toLowerCase();
  const divPokemonClass = document.getElementsByClassName('pokemon');
  for (let index = 0; nameTags.length; index += 1) {
    if(nameTags[index].innerHTML.toLowerCase().indexOf(eventTarget) + 1) {
      divPokemonClass[index].style.display = '';
    } else if (eventTarget !== nameTags[index].innerHTML) {
      divPokemonClass[index].style.display = 'none'
    } 
    if (eventTarget == '') {
      divPokemonClass[index].style.display = '';
    }  
  }
});

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement('div');
  console.log(pokemon)
  pokemonEl.classList.add('pokemon');

  const pokeTypes = pokemon.types.map(element => element.type.name);
  // const type = main_types.find(type => pokeTypes.indexOf(type) + 1); Serve para encontrar apenas o primeiro index de types.
  const pokemonHP = pokemon.stats[0].base_stat;
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const colorsOfType = colors[pokeTypes[0]];

  const pokeInnerHTML = `
    <div class='img-container'>
      <img src='https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png'>
    </div>
    <div class='info'>
    <small class='number'><span class='number'>HP: ${pokemonHP}</span></small>
      <span class='number'>#${pokemon.id.toString().padStart(3, '0')}</span>
      <h3 class='name'>${name}</h3>
      <small class='type'>Type: <span id='types'>${pokeTypes}</span></small>
    </div>
  `;

  pokemonEl.style.backgroundColor = colorsOfType;

  pokemonEl.innerHTML = pokeInnerHTML;

  pokeContainer.appendChild(pokemonEl);
}

fetchPokemons();
