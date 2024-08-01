export const generateBoolean = () => {
  return Math.random() < 0.5;
};

export const generateNumber = () => {
  return Math.trunc(Math.random() * 10);
};

export const generateLetter = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
};

export const emptySpace = (str: string) => {
  return str
    .split("")
    .filter((caract) => caract !== " ")
    .join("");
};

export const isValidEquation = (equation: string) => {
  const array = equation.split("");

  for (const caract of array) {
    const isValid = validateCalculCaract(caract);
    if (!isValid) return false;
  }

  const count = array.reduce((count, caract) => {
    return caract === "=" ? count + 1 : count;
  }, 0);
  if (count !== 1) return false;

  const partValid = has2partValid(equation);
  if (!partValid) return false;

  const firstInconnu = getFirstInconnu(equation);
  if (!firstInconnu) return false;

  const isExclusive = isExclusiveInconnu(equation, firstInconnu);
  if (!isExclusive) return false;

  return true;
};

export const getFirstInconnu = (equation: string) => {
  const array = equation.split("");

  for (const caract of array) {
    if (alphabet.includes(caract)) {
      return caract;
    }
  }

  return undefined;
};

export const isExclusiveInconnu = (equation: string, firstInconnu: string) => {
  const arrayInconnu = equation
    .split("")
    .filter((carac) => alphabet.includes(carac));

  for (const caract of arrayInconnu) {
    if (caract !== firstInconnu) return false;
  }

  return true;
};

export const alphabet = "abcdefghijklmnnopqrstuvwxyz";

export const validateCalculCaract = (str: string) => {
  const regex = /^[a-z0-9=+\-*/()]+$/g;
  return regex.test(str);
};

export const has2partValid = (equation: string) => {
  const array = equation.split("=");

  const operator = ["+", "-", "*", "/"];

  for (const part of array) {
    const length = part.length;

    if (length === 0) return false;

    const lastCaract = part[length];

    if (operator.includes(lastCaract)) return false;
  }

  return true;
};
