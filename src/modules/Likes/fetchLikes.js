const likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jcTX0b7AP0QeAh1m307k/likes'

const fetchAllLikes = async () => {
  const response = await fetch(likeUrl);
  if (response.status >= 400 && response.status < 600) {
    return false;
  }
  const like = await response.json();
  return like;
};

const fetchMealLikes = async (mealId) => {
  const allLikes = await fetchAllLikes();
  const mealLikes = [];
  allLikes.forEach(like => {
    if(mealId === like.item_id)
      mealLikes.push(like.likes)
});
return mealLikes[0] //reduce function here to sum all likes of a given mealID
}


export {
   fetchAllLikes,
  fetchMealLikes
}
