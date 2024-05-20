// USE WITH FIREBASE AUTH
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const jokeButton = document.querySelector('#joke-button');

jokeButton.addEventListener('click', () => {
  jokeButton.classList.toggle('secondary-state');
  if (jokeButton.classList.contains('secondary-state')) {
    jokeButton.innerHTML = 'get the FUCKING punchline';
  } else {
    jokeButton.innerHTML = 'wanna hear anootherrrr funny jokeee :p';
  }
});
