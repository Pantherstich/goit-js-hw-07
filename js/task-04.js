let counterValue = 0;
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const value = document.getElementById("value");
increment.addEventListener("click", incrementClick);
decrement.addEventListener("click", decrementClick);
function incrementClick() {
  counterValue = counterValue + 1;
  value.textContent = counterValue;
}
function decrementClick() {
  counterValue = counterValue - 1;
  value.textContent = counterValue;
}