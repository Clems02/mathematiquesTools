import { emptySpace, isValidEquation } from "../utils";

export const resolveEquation = (equation: string) => {
  let equa = emptySpace(equation);

  const isValid = isValidEquation(equa);

  console.log(isValid);
};
