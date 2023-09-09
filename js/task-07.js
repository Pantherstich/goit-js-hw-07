const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", fontSize);

text.style.fontSize = `${input.value}px`;

function fontSize(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}