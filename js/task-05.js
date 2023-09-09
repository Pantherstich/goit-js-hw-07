const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", inputChange);

function inputChange(event) {
    if (input.value.trim() === "") {
        output.textContent = "Anonymous";
    } else 
    {
        output.textContent = event.currentTarget.value.trim();
    }

}
