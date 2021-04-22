const submitButton = document.querySelector('#submitButton');
const inputFields = document.querySelectorAll('input');

setInterval(function() {
    var isValid = true;

    for(let i = 0; i < inputFields.length; i++) {
        if(inputFields[i].value.trim().length <= 0 || inputFields[i].validity.typeMismatch || inputFields[i].validity.valueMissing) {
            isValid = false;
            break;
        }
    }

    submitButton.disabled = !isValid;
}, 10);

function submit() {
    window.location.href = "./submit.html";
}