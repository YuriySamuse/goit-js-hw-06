const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// const listRef = document.querySelector('.images');

// const galaryItemsEl = images.map(({url, alt}) => {
  
//   const itemEl = document.createElement('li');
//   const imgEl = document.createElement('img');
//   imgEl.src = url;
//   imgEl.alt = alt;
//   imgEl.width = '650';
//   // itemEl.classList.add('item');
//   itemEl.append(imgEl);
//   return itemEl;
// });
// console.log(galaryItemsEl);
// listRef.append(...galaryItemsEl);

const listRef = document.querySelector('.images');

const addGalaryItemsEl = images.map(({url, alt}) => {
    return `<li class='images__item'><img src="${url}" alt="${alt}" height='450'></li>`;
  });


  const markup = addGalaryItemsEl.join('');
  listRef.insertAdjacentHTML('beforeend', markup);
  // console.log(markup);