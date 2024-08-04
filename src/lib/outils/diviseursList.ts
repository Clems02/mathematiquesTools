import { emptySpace } from "../utils";

export const listDiviseurs = (nbr: string) => {
  const nombre = Number(emptySpace(nbr));

  let diviseurs = [];

  for (let i = 1; i <= Math.sqrt(nombre); i++) {
    if (nombre % i === 0) {
      diviseurs.push(i);
      if (i !== nombre / i) {
        diviseurs.push(nombre / i);
      }
    }
  }

  diviseurs.sort((a, b) => a - b);

  return diviseurs;
};
