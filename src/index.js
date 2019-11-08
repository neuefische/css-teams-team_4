import { create } from "domain";
import {
  createDivClass,
  createDivClassContent,
  createIconStrength
} from "./lib/divcreater";
import { cocktailArray } from "./lib/inputdata";

const mainTag = document.querySelector("#main");

cocktailArray.forEach(function(cocktail) {
  const cardBox = createDivClass("div", "box");
  const cardImage = createDivClass("div", "box__image");
  const imageContent = createDivClassContent(
    "img",
    "crop-center",
    cocktail.pic
  );
  const cardContent = createDivClass("div", "box__content");
  const cardFav = createDivClass("div", "box__favorites");
  const cardContentHead = createDivClassContent(
    "div",
    "box__content__list__headline",
    cocktail.headline
  );
  const cardContentLink = createDivClassContent("a", "", cocktail.detailPage);
  const cardContentCategory = createDivClassContent(
    "div",
    "box__content__list__category",
    cocktail.alcoholic
  );
  const cardContentStrength = createDivClass(
    "div",
    "box__content__list__strength"
  );
  const cardContentIngredients = createDivClass(
    "div",
    "box__content__list__link"
  );
  const cardFavLink = createDivClassContent("a", "", "#");

  mainTag.appendChild(cardBox);
  cardBox.appendChild(cardImage);
  cardBox.appendChild(cardContent);
  cardBox.appendChild(cardFav);
  cardImage.appendChild(imageContent);
  const Thumb = createDivClass("i", "fas fa-thumbs-up");
  cardContent.appendChild(cardContentHead);
  cardContent.appendChild(cardContentIngredients);
  cardContentIngredients.appendChild(cardContentLink);
  cardContent.appendChild(cardContentCategory);
  cardContent.appendChild(cardContentStrength);
  createIconStrength(cocktail.strenght, cardContentStrength);
  cardContentLink.innerHTML = "See all ingredients";
  cardFav.appendChild(cardFavLink);
  cardFavLink.appendChild(Thumb);
});
