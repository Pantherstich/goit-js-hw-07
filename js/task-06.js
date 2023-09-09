const input = document.querySelector("#validation-input");
const MAX_LENGTH = Number(input.dataset.length);
input.addEventListener("blur", handleBlur);
function handleBlur(event) {
    if (event.currentTarget.value.trim().length === MAX_LENGTH) {
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.add("valid");
        
    } else {
        event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid");
    }
}