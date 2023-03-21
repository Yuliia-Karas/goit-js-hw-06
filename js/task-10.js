function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("#controls");
const createBtn = create.querySelector("[data-create]");
const destroyBtn = create.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");

console.log(create);
console.log(createBtn);
