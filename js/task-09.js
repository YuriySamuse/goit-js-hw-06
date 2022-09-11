function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const btnChangeColorRef = document.querySelector('.change-color');
// const spanColorEl = document.querySelector('.color');
// const changeBodyEl = document.querySelector('body');

// btnChangeColorRef.addEventListener('click', changeColor);

// function changeColor () {
//   const currentColor = getRandomHexColor();
//   spanColorEl.textContent = currentColor;
//   changeBodyEl.style.backgroundColor = currentColor;
// }

const refs = {
  btnChangeColorRef: document.querySelector('.change-color'),
  spanColorEl: document.querySelector('.color'),
  changeBodyEl: document.querySelector('body'),
};

refs.btnChangeColorRef.addEventListener('click', changeColor);

function changeColor () {
    const currentColor = getRandomHexColor();
    refs.spanColorEl.textContent = currentColor;
    refs.changeBodyEl.style.backgroundColor = currentColor;
  }