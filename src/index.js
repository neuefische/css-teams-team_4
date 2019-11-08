const cocktailZombie = {
  pic:
    "https://i-love-png.com/images/1516736773745713231free-bloody-mary-clipart.hi.png",
  headline: "Zombie",
  detailPage: "./pages/ingredients.html",
  alcoholic: "#alcoholic",
  strenght: 3,
  fav: false
};

const mainTag = document.querySelector("#main");

function createIconStrength(strength) {
  let count = 0;
  while (count < strength) {
    let outputElement = createDivClass("i", "fas fa-cocktail icon--alcohol");
    cardContentStrength.appendChild(outputElement);
    count = count + 1;
    // let outputElement =
    //   outputElement + "<i class= fas fa-cocktail icon--alcohol> ";
    // <i class="fas fa-cocktail icon--alcohol"></i>
  }
  while (strength < 5) {
    let outputElement = createDivClass("i", "fas fa-cocktail icon--nonalcohol");
    cardContentStrength.appendChild(outputElement);
    strength = strength + 1;
  }
}

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
  } else if (element == "a") {
    element = document.createElement(element);
    element.setAttribute("href", content);
    element.setAttribute("class", divClass);
  } else {
    element = document.createElement(element);
    element.innerHTML = content;
    element.setAttribute("class", divClass);
  }
  return element;
}

const cardBox = createDivClass("div", "box");
const cardImage = createDivClass("div", "box__image");
const imageContent = createDivClassContent(
  "img",
  "crop-center",
  cocktailZombie.pic
);
const cardContent = createDivClass("div", "box__content");
const cardFav = createDivClass("div", "box__favorite");
const cardContentHead = createDivClassContent(
  "div",
  "box__content__list__headline",
  cocktailZombie.headline
);
const cardContentLink = createDivClassContent(
  "a",
  "",
  cocktailZombie.detailPage
);
const cardContentCategory = createDivClassContent(
  "div",
  "box__content__list__category",
  cocktailZombie.alcoholic
);
const cardContentStrength = createDivClass(
  "div",
  "box__content__list__strength"
);
const cardContentIngredients = createDivClass(
  "div",
  "box__content__list__link"
);

mainTag.appendChild(cardBox);
cardBox.appendChild(cardImage);
cardBox.appendChild(cardContent);
cardBox.appendChild(cardFav);
cardImage.appendChild(imageContent);

cardContent.appendChild(cardContentHead);
cardContent.appendChild(cardContentIngredients);
cardContentIngredients.appendChild(cardContentLink);
cardContent.appendChild(cardContentCategory);
cardContent.appendChild(cardContentStrength);
createIconStrength(cocktailZombie.strenght);
cardContentLink.innerHTML = "See all ingredients";

// <i class="fas fa-cocktail icon--alcohol"></i>
// box__content__list__list__link
// box__content__list__category
// box__content__list__strength

// console.log(cocktailZombie.title);
// const mainTag = document.querySelector("#main");
// console.log(mainTag);
// const divElement = document.createElement("div");
// const childElement = document.createElement("div");
// divElement.setAttribute("class", "box");
// divElement.appendChild(childElement);
