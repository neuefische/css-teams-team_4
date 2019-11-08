import { create } from "domain";
import {
  createDivClass,
  createDivClassContent,
  createIconStrength
} from "./lib/divcreater";
import { cocktailArray } from "./lib/inputdata";
import { createCard } from "./lib/cardcreator";

const mainTag = document.querySelector("#main");

cocktailArray.forEach(createCard);
