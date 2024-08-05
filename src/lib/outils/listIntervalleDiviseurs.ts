import { isPrime } from "mathjs";

export const getListPremiersIntervalle = (nbr1: number, nbr2: number) => {
  const array = [];

  for (let x = nbr1; x < nbr2; x++) {
    if (isPrime(x)) {
      array.push(x);
    }
  }

  return array;
};
