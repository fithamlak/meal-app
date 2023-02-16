import displayPopup from './displayPopup.js';
import displayComments from '../modules/Comments/displayComments.js';

const getdetailsPopup = async (idMeal) => {
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const response = await fetch(apiUrl + idMeal);
  const data = await response.json();

  const category = document.querySelector('.category');
  category.setAttribute('id', idMeal);
  const area = document.querySelector('.area');
  const instructions = document.querySelector('.instructions');
  const mealName = document.querySelector('.mealName');
  const mealImage = document.querySelector('.thumb');
  const dataArray = data.meals[0];
  category.innerHTML = `Category: ${dataArray.strCategory}`;
  area.innerHTML = `Area: ${dataArray.strArea}`;
  instructions.innerHTML = `<b>Instructions: </b>${dataArray.strInstructions}`;
  mealName.innerHTML = dataArray.strMeal;
  mealImage.src = dataArray.strMealThumb;
  displayComments();
  displayPopup();
};

export default getdetailsPopup;