// USE WITH FIREBASE AUTH
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const jokeButton = document.querySelector('#joke-button');
const jokeWrapper = document.querySelector('#joke-wrapper');

//  prettier-ignore
const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

//  prettier-ignore
const jokeCall = () => new Promise((resolve, reject) => {
  fetch(jokeEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

let punchFunny = '';

jokeButton.addEventListener('click', () => {
  jokeButton.classList.toggle('secondary-state');
  if (jokeButton.classList.contains('secondary-state')) {
    jokeButton.innerHTML = 'get the FUCKING punchline';
    jokeCall().then((data) => {
      jokeWrapper.innerHTML = data.setup;
      punchFunny = data.delivery;
    });
  } else {
    jokeButton.innerHTML = 'wanna hear anootherrrr funny jokeee :p';

    jokeWrapper.innerHTML = `${punchFunny}`;
  }
});
