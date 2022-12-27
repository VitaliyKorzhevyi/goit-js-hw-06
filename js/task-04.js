const refs = {
    btnDecrementEl: document.querySelector('button[data-action="decrement"]'),
    btnIncrementEl: document.querySelector('button[data-action="increment"]'),
    valueRef: document.querySelector('#value'),
};

let counterValue = 0;

refs.btnIncrementEl.addEventListener('click', onIncrementBtnClick);
refs.btnDecrementEl.addEventListener('click', onDecrementBtnClick);

function onIncrementBtnClick() {
    counterValue += 1;
    refs.valueRef.textContent = counterValue;
};

function onDecrementBtnClick() {
    counterValue -= 1;
    refs.valueRef.textContent = counterValue;
};

