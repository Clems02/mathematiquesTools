import { all, create, rationalize } from "mathjs";
import { emptySpace, getFirstInconnu, operator } from "../utils";
const math = create(all, {
  number: "Fraction",
});

export const resolveEquation = (equa: string) => {
  const equation = emptySpace(equa);

  const splitedPart = equation.split("=");

  let leftPart = splitedPart[0];
  let rightPart = splitedPart[1];

  let fullEquation = `${leftPart}-(${rightPart})`;

  fullEquation = rationalize(fullEquation).toString();
  fullEquation = emptySpace(fullEquation);

  if (fullEquation.split("").includes("^")) {
    throw new Error("Equation du second degré non pris en charge...");
  }

  let a = 0;
  let b = 0;

  const inconnu = getFirstInconnu(fullEquation);
  const indexInconnu = fullEquation
    .split("")
    .findIndex((value) => value === inconnu);
  const splitedEquation = fullEquation.split("");

  if (indexInconnu === 0) {
    a = 1;
    b = Number(splitedEquation.slice(1, fullEquation.length).join(""));
  } else {
    a = Number(splitedEquation.slice(0, indexInconnu - 1).join("")) || -1;
    b = Number(
      splitedEquation.slice(indexInconnu + 1, fullEquation.length).join("")
    );
  }

  console.log({ a, b });
  if (a === 0) {
    if (b === 0) {
      return "L'équation est indéterminée (toutes les valeurs de x sont des solutions).";
    } else {
      return "L'équation est impossible (aucune valeur de x ne satisfait l'équation).";
    }
  } else {
    let printValue: string | number = -b / a;

    const hasDecimal = !Number.isInteger(printValue);

    if (hasDecimal) {
      const fraction = math.fraction(printValue);
      const formattedFraction = math.format(fraction, { fraction: "ratio" });
      printValue = formattedFraction;
    }

    return `La solution est ${inconnu} = ${printValue}`;
  }
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
