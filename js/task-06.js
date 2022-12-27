const inputEl = document.querySelector("#validation-input");
  
const inputLengthEl = Number(inputEl.dataset.length);
  
inputEl.addEventListener("blur", onInputTextLength);
  
function onInputTextLength(e) {
    if (e.currentTarget.value.length === inputLengthEl) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid'); 
    } 
    else if (e.currentTarget.value.length !== inputLengthEl) {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}