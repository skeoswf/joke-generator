// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    
    <h1 id="intro-text">joke generator</h1>
    <button class="btn btn-danger initial-button" id="click-me">get a joke!</button><br />
    <div id="joke-wrapper">test</div>
  `;

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
