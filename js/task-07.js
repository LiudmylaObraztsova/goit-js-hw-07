const inputEvent = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function сhangeFontSize() {
    textRef.setAttribute('style', `font-size: ${inputEvent.value}px`)
}
inputEvent.addEventListener('input', сhangeFontSize);