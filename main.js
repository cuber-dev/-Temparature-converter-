const celsius = document.getElementById('celsius');
const fDisplay = document.getElementById('farhenheat-display');
const farhenheat = document.getElementById('farhenheat');
const cDisplay = document.getElementById('celsius-display');

celsius.addEventListener('input',() => {
    let result = (Number(celsius.value) * 9 / 5) + 32;
    fDisplay.textContent = result;
});


farhenheat.addEventListener('input', () => {
    let result = (Number(farhenheat.value) - 32) * 5 / 9;
    cDisplay.textContent = result;
});
