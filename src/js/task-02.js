const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log(document);
const liElement = document.createElement("li");
liElement.textContent = "Potatoes";
console.log(liElement);

const body = document.body;
console.log(body);

const listIngredients = document.querySelector("#ingredients");
console.log(listIngredients);

const addedlistIngredients = ingredients.map((ingredient) => {
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
  liElement.classList.add("liElement");
  return liElement;
});

listIngredients.append(...addedlistIngredients);