const baseUrl = 'https://pokeapi.co/api/v2/';

function getJson(url) {
  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        console.log('error!');
        throw new Error('response not ok');
      }
    })
    .catch(err => {
      console.log('getJSON', err);
    });
}

async function getPokemonList() {
  const listElement = document.getElementById('list');
  const data = await getJson(baseUrl + 'type/3');
  //do stuff
  data.pokemon.forEach(element => {
    listElement.appendChild(renderPokemon(element));
  });
}

function renderPokemon(pokemon) {
  const item = document.createElement('li');
  item.innerHTML = pokemon.pokemon.name;
  return item;
}
getPokemonList();
