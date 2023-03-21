function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
console.dir(body);

const btn = document.querySelector(".change-color");
console.dir(btn);

const spanColor = document.querySelector(".color");
console.dir(spanColor);

btn.addEventListener("click", () => {
  const generatedColor = getRandomHexColor();
  document.body.style.backgroundColor = generatedColor;
  spanColor.textContent = generatedColor;
});

