document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

})

const handleFormSubmit = function(event) {
  event.preventDefault();
  console.log(event);
  const list = document.querySelector('ul');
  const listItem = document.createElement('li');
  const bookTitle = document.createElement('h2');
  const author = document.createElement('h3');
  const category = document.createElement('p');

  bookTitle.textContent = `${ event.target.title.value }`;
  author.textContent = `${ event.target.author.value }`;
  category.textContent = `${ event.target.category.value }`;

  listItem.appendChild(bookTitle);
  listItem.appendChild(author);
  listItem.appendChild(category);
  list.appendChild(listItem);

  event.target.reset();

}
