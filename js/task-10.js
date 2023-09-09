const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector('input[type="number"]');
const boxes = document.querySelector('#boxes');
const min = Number(input.min);
console.dir(min);
const max = Number(input.max);
const step = Number(input.step);
    
createButton.addEventListener('click', () => createBoxes(input.value)); 
destroyButton.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(number) {
    let size = 30;
    const divs = [];
    
    if (number < min || number > max) {
        alert(`ведіть число від ${min} до ${max}`)
    };
        for (let i = 1; i <= number; i += step) {
            const div = document.createElement('div');
            div.style.backgroundColor = getRandomHexColor();
            div.style.height = `${size}px`;
            div.style.width = `${size}px`;
            size += 10;
            divs.push(div);
        }
        boxes.append(...divs);

    }

    function destroyBoxes() {
        boxes.innerHTML = '';
        input.value = '';
    }

