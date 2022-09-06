const itemRef = document.querySelectorAll('.item');
console.log('Number of categories: ', itemRef.length);

itemRef.forEach((item) => {
    console.log('Category: ', item.firstElementChild.textContent);
    const childItemRef = item.querySelectorAll('li');
    console.log('Elements: ', childItemRef.length);
});