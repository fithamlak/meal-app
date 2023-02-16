import mealsCountContainer from './containerForMeal.js';
import desplayMeal from './desplayMeal.js';

const totalMeals = document.querySelector('.total-meals');
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const getMeals = async () => {
  const request = await fetch(apiUrl);
  const { meals } = await request.json();
  return meals;
};

export const loadMeals = async () => {
  const meals = await getMeals();
  meals.forEach((meal) => {
    const cardElement = mealsCountContainer(meal);
    desplayMeal(cardElement, meal);
  });
  totalMeals.innerHTML = `(${meals.length}) meals`;
};
