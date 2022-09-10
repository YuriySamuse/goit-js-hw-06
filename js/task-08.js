const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
    event.preventDefault();

    const { elements: { email, password } 
} = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Все поля должны быть заполнены!')
    }
    const formData = new FormData(event.currentTarget);
    // console.log(formData);

    formData.forEach((value, name) => {
        console.log('handleSubmit -> name', name);
        console.log('handleSubmit -> value', value);
    })

    // console.log(`Email: ${email.value}, Password: ${password.value}`);
    
    event.currentTarget.reset();
}


