const inputListRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const handleInputText = (event) => {
    // console.log(event.target.value);
    // outputRef.textContent = event.target.value;
    const { value } = event.target;
    outputRef.textContent = value ? value : "Anonymous";
    
}

inputListRef.addEventListener('input', handleInputText);

