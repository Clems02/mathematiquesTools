export const alphabet = "abcdefghijklmnnopqrstuvwxyz";
export const operator = ["+", "-", "*", "/"];

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
  const equationFormate = emptySpace(equation);

  hasValidCaract(equationFormate);
  hasOnlyOneEgal(equationFormate);
  hasLeftRightPartValid(equationFormate);
  hasExclusiveInconnu(equationFormate);
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
    if (caract !== firstInconnu) {
      throw new Error(
        "Il ne peut pas y avoir plusieurs inconnue dans l'équation."
      );
    }
  }
};

export const validateCalculCaract = (str: string) => {
  const regex = /^[a-z0-9=+\-*/()]+$/g;
  return regex.test(str);
};

export const hasLeftRightPartValid = (equation: string) => {
  const array = equation.split("=");

  array.forEach((part, index) => {
    const length = part.length;
    const direction = index === 0 ? "gauche" : "droite";

    if (length === 0) {
      throw new Error(
        `Le format de la partie ${direction} de l'équation est incorrect.`
      );
    }

    const lastCaract = part[length - 1];
    if (operator.includes(lastCaract)) {
      throw new Error(
        `Le format de la partie ${direction} de l'équation est incorrect.`
      );
    }
  });
};

export const hasValidCaract = (equation: string) => {
  const array = equation.split("");

  for (const caract of array) {
    const isValid = validateCalculCaract(caract);
    if (!isValid) {
      throw new Error("L'équation ne peut pas contenir de caractères spéciaux");
    }
  }
};

export const hasOnlyOneEgal = (equation: string) => {
  const array = equation.split("");

  const count = array.reduce((count, caract) => {
    return caract === "=" ? count + 1 : count;
  }, 0);
  if (count === 0) {
    throw new Error("Symbole '=' manquant dans l'équation.");
  }
  if (count > 1) {
    throw new Error("Un seul symbole '=' est attendu dans l'équation.");
  }
};

export const hasExclusiveInconnu = (equation: string) => {
  const firstInconnu = getFirstInconnu(equation);
  if (!firstInconnu) {
    throw new Error("Une inconnue est attendue dans l'équation.");
  }

  isExclusiveInconnu(equation, firstInconnu);
};

export const isNumberInput = (input: string) => {
  const value = emptySpace(input);

  const regex = /^[0-9]+$/g;

  if (!regex.test(value)) throw new Error("Nombre requis");
};

//without virgule
export const formatNumberPrintSpace = (number: number) => {
  const numberToString = number.toString();

  return numberToString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
