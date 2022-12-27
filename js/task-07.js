const refs = {
    inputEl: document.querySelector('#font-size-control'),
    spanEl: document.querySelector('#text'),
};

refs.inputEl.addEventListener("input", onFontSizeText)

function onFontSizeText(e) {
    refs.spanEl.style.fontSize = e.currentTarget.value + "px";
};
