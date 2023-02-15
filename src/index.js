import './style.css';

import { fetchAndLoadMeals } from './modules/meals/fetchAndLoadMeals.js';

window.onload = () => {
  fetchAndLoadMeals();
};
