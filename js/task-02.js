const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const listRef = document.querySelector('#ingredients');
// console.log(listRef);

// const itemEl = document.createElement('li');
// itemEl.textContent = 'Potatoes';
// itemEl.classList.add('item');

// listRef.append(itemEl);

const listItems = ingredients.map((ingredient) => {
  const listRef = document.querySelector('#ingredients');

  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');

  listRef.append(itemEl);
})