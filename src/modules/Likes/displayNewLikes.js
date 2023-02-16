import { fetchMealLikes } from './fetchLikes.js';

import addLikes from './addLikes.js';

const updateLikes = async (mealID) => {
  const likeNode = document.querySelector(`#likes_${mealID}`);
  await addLikes(mealID);
  const newLike = await fetchMealLikes(mealID);
  likeNode.textContent = `${newLike} likes`;
};

export default updateLikes;