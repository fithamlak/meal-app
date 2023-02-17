import './style.css';
import getLogo from './modules/getLogo.js';
import { loadMeals } from './modules/meals/featchAndLoadMeals.js';

import createPopup from './popup/popupContainer.js';

window.onload = () => {
  getLogo();
  loadMeals();
  createPopup();
};
