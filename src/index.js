const cocktailZombie = {
  pic: "Zombie-Pic",

  title: "Zombie",

  detailPage: "subpage",

  alcoholic: true,

  strenght: 4,

  fav: false
};

function createDivClass(element, divClass) {
  element = document.createElement(element);
  element.setAttribute("class", divClass);
  return element;
}

let test = createDivClass("div", "box");
test.innerHTML = cocktailZombie.title;
console.log(test);

// console.log(cocktailZombie.title);
// const mainTag = document.querySelector("#main");
// console.log(mainTag);
// const divElement = document.createElement("div");
// const childElement = document.createElement("div");
// divElement.setAttribute("class", "box");
// divElement.appendChild(childElement);
