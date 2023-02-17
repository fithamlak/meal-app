const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jcTX0b7AP0QeAh1m307k/comments?item_id=';

const featchComments = async (idMeal) => {
  let comments = [];
  const response = await fetch(commentUrl + idMeal);
  if (response.status >= 400 && response.status < 600) {
    return false;
  }
  comments = await response.json();
  return comments;
};

export default featchComments;