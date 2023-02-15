import displayPopup from './displayPopup.js';

const getdetailsPopup = async (idMeal) => {
  console.log('am clicked');
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const response = await fetch(apiUrl + idMeal);
  const data = await response.json();
  console.log(data);

  const category = document.querySelector('.category');
  category.setAttribute('id', idMeal);
  console.log(category);
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
  displayPopup();
};

export default getdetailsPopup;