const categoryItems = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(function (Element, index) {
    console.log("Category: ", Element.querySelector("h2").textContent);
    const ElUl = Element.querySelector("ul");
 //   console.dir(ElUl);
    console.log("Elements: ", ElUl.childElementCount);

});

 // const categoryСategories = document.querySelector("#categories");
// // console.log(`Number of categories: ${categoryСategories.childElementCount}`);
// console.dir(categoryСategories);

// const categoryH2 = document.querySelectorAll("h2");
// const cildrenH2 = childElementCount;

// // console.log(categoryH2.textContent);

// categoryH2.forEach(function (number, index) {
//   console.log(`Category:  ${number.textContent}`);
// });

// const categoryList = categoryСategories.outerText;
// console.log(categoryList);

// const categoryList = categoryItems.textContent;
// console.log(categoryList);