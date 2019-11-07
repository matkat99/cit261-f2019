const data = fetch('data.json');
data
  .then(response => {
    return response.json();
    console.log('response', response);
  })
  .then(stuff => {
    console.log(stuff);
  });
console.log('before then', data);

function longProcess() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (1) {
        resolve(42);
      } else reject('error');
    }, 200);
  });
}
longProcess()
  .then(results => {
    console.log('total:', 10 + results);
  })
  .catch(err => {
    console.log(err);
  });
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
const myList = document.getElementById('list');
getJson(baseUrl + 'type/3').then(data => {
  console.log(data);
  const newArray = data.pokemon
    .map(item => {
      return `<li>${item.pokemon.name}</li>`;
    })
    .join('');
  console.log(newArray);
  myList.innerHTML = newArray;
});
