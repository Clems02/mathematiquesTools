export type tool = {
  id: number;
  url: string;
  label: string;
  inProgress?: boolean;
  icon?: string;
};

export const tools: tool[] = [
  {
    id: 1,
    label: "Décomposition nombres premiers",
    url: "/decomposition-nbr-premier",
    icon: "X",
  },
  {
    id: 2,
    label: "Vérifier si nombre premier",
    url: "/verif-nbr-premier",
    icon: "CircleCheckBig",
  },
  {
    id: 3,
    label: "Obtenir nombres premiers dans intervalle",
    url: "/liste-nbr-premier-intervalle",
    icon: "SquareMinus",
  },
  {
    id: 4,
    label: "Obtenir diviseurs d'un nombre",
    url: "/div-nbr",
    icon: "Divide",
  },
  {
    id: 5,
    label: "Résolution équation 1er degré",
    url: "/equation-1deg",
    icon: "Equal",
  },
  {
    id: 6,
    label: "PGCD de 2 nombres",
    url: "/pgcd",
    icon: "ArrowBigUpDash",
  },
  {
    id: 7,
    label: "PPCM de 2 nombres",
    url: "/ppcm",
    icon: "ArrowBigDownDash",
  },
  {
    id: 8,
    label: "Calcul moyenne",
    url: "/moyenne",
    icon: "ChartColumn",
  },
  {
    id: 9,
    label: "Médiane",
    url: "/mediane",
    icon: "GitCommitHorizontal",
  },
];
