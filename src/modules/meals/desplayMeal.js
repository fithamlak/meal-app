import getdetailsPopup from '../../popup/detailPopup.js';

import updateLikes from '../Likes/displayNewLikes.js';

const desplayMeal = (mealContainerElement, meal) => {
  const mealsList = document.getElementById('meals_list');
  mealsList.appendChild(mealContainerElement);

  const btn = document.getElementById(`comments_${meal.idMeal}`);
  btn.addEventListener('click', () => {
    getdetailsPopup(meal.idMeal);
  });
  const likeBtn = document.querySelector(`#like_${meal.idMeal}`);
  likeBtn.addEventListener('click', async () => {
    await updateLikes(meal.idMeal);
  });
};
export default desplayMeal;
