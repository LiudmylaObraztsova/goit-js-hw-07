let counterValue = 0;
const buttonRef = document.querySelectorAll('#counter button');


const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

const increment = () =>
    valueRef.textContent = counterValue += 1;
const decrement = () =>
    valueRef.textContent = counterValue -= 1;

btnDecrementRef.addEventListener('click', decrement);
btnIncrementRef.addEventListener('click', increment);



