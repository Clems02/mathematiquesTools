export type tool = {
  id: number;
  url: string;
  label: string;
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
];
