import './style.css';

import { fetchAndLoadMeals } from './modules/meals/fetchAndLoadMeals';

window.onload = () => {
    fetchAndLoadMeals();
  };  