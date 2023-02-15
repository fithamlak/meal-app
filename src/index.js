import './style.css';
import { loadMeals } from './modules/meals/featchAndLoadMeals.js';
import createPopup from './popup/popupContainer.js';

window.onload = () => {
  loadMeals();
  createPopup();
};
