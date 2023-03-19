const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log(document);

const listIngredients = document.querySelector("#ingredients");
console.log(listIngredients);

const addedlistIngredients = ingredients.map((ingredient) => {
  const  item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});

listIngredients.append(...addedlistIngredients);