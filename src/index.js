import createHeader from './components/header.js';
import createFooter from './components/footer.js';
import createMain from './components/main.js';

const body = document.querySelector('body');

body.appendChild(createHeader());
body.appendChild(createMain());
body.appendChild(createFooter());
