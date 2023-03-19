const counterValueEl = document.getElementById("value");
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]')

let counterValue = 0;


decrementBtnEl.addEventListener('click', () => {
    counterValue--;
    counterValueEl.textContent = counterValue;
}); 

incrementBtnEl.addEventListener('click', () => {
    counterValue++;
    counterValueEl.textContent = counterValue;
});





