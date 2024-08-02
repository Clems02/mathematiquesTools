import { simplify } from "mathjs";
import { emptySpace, getFirstInconnu, operator } from "../utils";

export const resolveEquation = (equa: string) => {
  // Remplacer tous les espaces pour faciliter la manipulation
  const equation = emptySpace(equa);

  const splitedPart = equation.split("=");

  if (splitedPart.length !== 2) {
    return "L'équation doit contenir un signe égal.";
  }

  let leftPart = splitedPart[0];
  let rightPart = splitedPart[1];

  let fullEquation = `${leftPart}-(${rightPart})`;

  let simplifiedEquation = simplify(fullEquation).toString();
};

export const getAllIndexInconnu = (equation: string) => {
  const inconnu = getFirstInconnu(equation);
  if (!inconnu) throw new Error("Une inconnue est attendue dans l'équation.");

  const index = equation
    .split("")
    .map((caract, index) => {
      if (caract === inconnu) return index;
      else return null;
    })
    .filter((value) => value !== null);

  return index;
};

export const getBlockByInconnu = (equation: string, indexArray: number[]) => {
  const array = equation.split("");

  for (const index of indexArray) {
    let x = index;

    while (!operator.includes(array[x]) || x !== 0) {
      x -= 1;
    }

    console.log(array[x]);
  }
};
