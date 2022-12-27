function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  bodyEl: document.querySelector("body"),
  spanEl: document.querySelector(".color"),
  buttonChangeColor: document.querySelector(".change-color"),
};

refs.buttonChangeColor.addEventListener("click", bodyChangeColor)

function bodyChangeColor() {
 const color = refs.bodyEl.style.backgroundColor = getRandomHexColor()
  refs.spanEl.textContent = color;
}
