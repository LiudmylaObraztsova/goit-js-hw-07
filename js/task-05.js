const inputRef = document.querySelector('#name-input');
const spanNameRef = document.querySelector('#name-output');



inputRef.addEventListener('input', onInputName);

function onInputName(name) {
    if (inputRef.value === '') {
        spanNameRef.textContent = 'незнакомец';
    }
    else (spanNameRef.textContent = name.currentTarget.value);
}



