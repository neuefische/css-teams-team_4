const cocktailZombie = {
  pic:
    "https://i-love-png.com/images/1516736773745713231free-bloody-mary-clipart.hi.png",

  title: "Zombie",

  detailPage: "subpage",

  alcoholic: true,

  strenght: 4,

  fav: false
};

const mainTag = document.querySelector("#main");

function createDivClass(element, divClass) {
  element = document.createElement(element);
  element.setAttribute("class", divClass);
  return element;
}

function createDivClassContent(element, divClass, content) {
  if (element == "img") {
    element = document.createElement(element);
    element.setAttribute("src", content);
    element.setAttribute("class", divClass);
  } else {
    element = document.createElement(element);
    element.innerHTML = content;
    element.setAttribute("class", divClass);
  }
  return element;
}

let cardBox = createDivClass("div", "box");
let cardImage = createDivClass("div", "box__image");
let imageContent = createDivClassContent(
  "img",
  "crop-center",
  cocktailZombie.pic
);
let cardContent = createDivClass("div", "box__content");
let cardFav = createDivClass("div", "box__favorite");

mainTag.appendChild(cardBox);
cardBox.appendChild(cardImage);
cardBox.appendChild(cardContent);
cardBox.appendChild(cardFav);
cardImage.appendChild(imageContent);

// console.log(test);

// console.log(cocktailZombie.title);
// const mainTag = document.querySelector("#main");
// console.log(mainTag);
// const divElement = document.createElement("div");
// const childElement = document.createElement("div");
// divElement.setAttribute("class", "box");
// divElement.appendChild(childElement);

function createDivClass(element, divClass, contentArray) {
  element = document.createElement(element);
  element.setAttribute("class", divClass);
  return element;
}
