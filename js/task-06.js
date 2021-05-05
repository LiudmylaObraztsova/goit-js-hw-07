const inputRef = document.querySelector('#validation-input');
const dataValue = Number(inputRef.dataset.length);

const checkValue = (event) => {
    if (dataValue === event.currentTarget.value.length) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
        return;
    }
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
   
};

inputRef.addEventListener('blur', checkValue);
