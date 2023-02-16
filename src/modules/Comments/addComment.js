import displayComment from './displayComments.js';

const addComments = async (idMeal) => {
  const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jcTX0b7AP0QeAh1m307k/comments';
  const user = document.getElementById('name');
  const comment = document.getElementById('comment');
  const dataToPost = {
    item_id: idMeal,
    username: user.value,
    comment: comment.value,
  };
  const response = await fetch(commentUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToPost),
  });

  user.value = '';
  comment.value = '';
  displayComment(idMeal);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
};

export default addComments;