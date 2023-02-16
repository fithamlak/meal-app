const countComments = () => {
  const container = document.getElementById('comments_List');
  const { length } = container.getElementsByTagName('li');
  const title = document.getElementById('comments_title');
  title.innerHTML = `(${length}) Comments `;
};
export default countComments;