export type tool = {
  id: number;
  url: string;
  label: string;
  inProgress?: boolean;
};

export const tools: tool[] = [
  {
    id: 1,
    label: "Décomposition nombres premiers",
    url: "/decomposition-nbr-premier",
  },
  {
    id: 2,
    label: "Vérifier si nombre premier",
    url: "/verif-nbr-premier",
  },
  {
    id: 3,
    label: "Obtenir nombres premiers dans intervalle",
    url: "/liste-nbr-premier-intervalle",
  },
  {
    id: 4,
    label: "Obtenir diviseurs d'un nombre",
    url: "/div-nbr",
  },
  {
    id: 5,
    label: "Résolution équation 1er degré",
    url: "/equation-1deg",
  },
  {
    id: 6,
    label: "PGCD de 2 nombres",
    url: "/pgcd",
  },
  {
    id: 7,
    label: "PPCM de 2 nombres",
    url: "/ppcm",
  },
  {
    id: 8,
    label: "Calcul moyenne",
    url: "/moyenne",
  },
  {
    id: 9,
    label: "Médiane",
    url: "/mediane",
  },
];
