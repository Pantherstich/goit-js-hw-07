const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const buttonColor = document.querySelector('.change-color');
buttonColor.addEventListener("click", changer);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changer() {
  const colorCurrent = getRandomHexColor();
  body.style.backgroundColor = colorCurrent;
  colorSpan.textContent = colorCurrent;
}
