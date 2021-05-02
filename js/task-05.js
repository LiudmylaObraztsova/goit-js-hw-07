const inputRef = document.querySelector('#name-input');
const spanNameRef = document.querySelector('#name-output');

const onInputName = event =>
    spanNameRef.textContent = event.currentTarget.value;

inputRef.addEventListener('input', onInputName);