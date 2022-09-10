const inputRef = document.querySelector('#validation-input');
// console.log(inputRef);


const inputBlur = (event) => {
    const { dataset, value } = event.target;
    const requiredLength = Number(dataset.length);
// console.log(requiredLength);
// console.log(value.length);
if (requiredLength === value.length) {
    
    // event.target.classList.add('valid');
    // event.target.classList.remove('invalid');
    changeClass('valid', 'invalid', event.target);

} else {
    // event.target.classList.add('invalid');
    // event.target.classList.remove('valid');
    changeClass('invalid', 'valid', event.target);
}
}

inputRef.addEventListener ('blur', inputBlur);

function changeClass (add, remove, elem) {
    elem.classList.add(add);
    elem.classList.remove(remove);
}