const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onEnteredInputText)

function onEnteredInputText(e) {
    refs.spanEl.textContent = "Anonymous";
  
    if (e.currentTarget.value.trim() !== '') {
      refs.spanEl.textContent = e.currentTarget.value;
    }
  }