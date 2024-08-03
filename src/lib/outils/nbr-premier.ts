//Vérifie si nbr est premier ou non
function isPremier(nbr: number) {
  let result = true;

  if (nbr <= 1) {
    result = false;
  }

  for (let i = 2; i < nbr; i++) {
    if (nbr % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}

//Récupère la liste des nbr premiers dans un intervalle
function list(nbr1: number, nbr2: number) {
  let liste = [];

  for (let i = nbr1; i < nbr2; i++) {
    if (isPremier(i)) {
      liste.push(i);
    }
  }
  return liste;
}

//Décompose un nombre en nbr premier
export const decomposition = (nbr: number) => {
  const nbrStart = nbr;
  let liste = list(0, nbr);
  let phraseRésult;
  let résult = "";

  if (isPremier(nbr)) {
    phraseRésult = "Le nombre " + nbrStart + " est déjà un nombre premier.";
  } else {
    for (let i = 0; i < liste.length; i++) {
      let x = liste[i];
      let count = 0;

      while (nbr % x === 0) {
        count++;
        nbr = nbr / x;
      }

      if (count !== 0) {
        if (count === 1) {
          résult += x + " x ";
        } else {
          résult += x + exposant(count.toString()) + " x ";
        }
      }
    }

    résult = résult.slice(0, -2);
    phraseRésult = nbrStart + " = " + résult;
  }

  return phraseRésult;
};

//gestion des exposants, notamment pour décomposition
export function exposant(nbr: string | number | unknown) {
  let returnExpo;

  switch (nbr) {
    case 2:
      returnExpo = "\u00B2";
      break;
    case 3:
      returnExpo = "\u00B3";
      break;
    case 4:
      returnExpo = "\u2074";
      break;
    case 5:
      returnExpo = "\u2075";
      break;
    case 6:
      returnExpo = "\u2076";
      break;
    case 7:
      returnExpo = "\u2077";
      break;
    case 8:
      returnExpo = "\u2078";
      break;
    case 9:
      returnExpo = "\u2079";
      break;
    default:
      console.log("break");
      returnExpo = "";
      break;
  }
  return returnExpo;
}
