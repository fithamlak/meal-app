const addLikes = async (idMeal) => {
  const likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jcTX0b7AP0QeAh1m307k/likes';
  const newLike = {
    item_id: idMeal,
  };
  const response = await fetch(likeUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newLike),
  });
  if (response.ok) {
    window.location.reload();
  }
};

export default addLikes;