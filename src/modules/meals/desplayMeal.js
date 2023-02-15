import getdetailsPopup from '../../popup/detailPopup.js';

const desplayMeal = (mealContainerElement, meal) => {
  const mealsList = document.getElementById('meals_list');
  mealsList.appendChild(mealContainerElement);

  const btn = document.getElementById(`comments_${meal.idMeal}`);
  btn.addEventListener('click', () => {
    getdetailsPopup(meal.idMeal);
  });
};
export default desplayMeal;