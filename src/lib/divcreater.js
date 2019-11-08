export function createDivClass(element, divClass) {
  element = document.createElement(element);
  element.setAttribute("class", divClass);
  return element;
}

export function createDivClassContent(element, divClass, content) {
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

export function createIconStrength(strength, tag) {
  let count = 0;
  while (count < strength) {
    let outputElement = createDivClass("i", "fas fa-cocktail icon--alcohol");
    tag.appendChild(outputElement);
    count = count + 1;
  }
  while (strength < 5) {
    let outputElement = createDivClass("i", "fas fa-cocktail icon--nonalcohol");
    tag.appendChild(outputElement);
    strength = strength + 1;
  }
}
