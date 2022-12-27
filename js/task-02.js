const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const list = ingredients.map((item) => {
  const liEl = document.createElement("li");
  liEl.textContent = item;
  return liEl;
});

ingredientsList.append(...list);