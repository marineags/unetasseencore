export type Drink = {
  name: string;
  image: string;
  color: string;
  background: string;
  description: string;
  ingredients: string[];
  recipe: string[];
};

export const drinks: Drink[] = [
  {
    name: "Chocolat chaud",
    image: "/images/chocolat.png",
    color: "#6B3E2E",
    background: "#F5F5DC",
    description:
      "Un chocolat chaud et crémeux, parfait pour les soirées froides.",
    ingredients: ["Lait", "Chocolat", "Sucre"],
    recipe: [
      "Faire chauffer le lait",
      "Ajouter le chocolat",
      "Mélanger jusqu'à obtenir une consistance crémeuse",
    ],
  },

  {
    name: "Pumpink Spice Latte",
    image: "/images/pumpink.png",
    color: "#C96D35",
    background: "#FFE4B5",
    description:
      "Un latte doux et épicé aux saveurs d'automne.",
    ingredients: [
      "Lait",
      "Café",
      "Purée de citrouille",
      "Cannelle",
      "Muscade",
    ],
    recipe: [
      "Faire chauffer le lait",
      "Ajouter la purée de citrouille et les épices",
      "Ajouter le café",
      "Mélanger et servir chaud",
    ],
  },

  {
    name: "Thé aux épices",
    image: "/images/the.png",
    color: "#8B4A3C",
    background: "#F0E68C",
    description:
      "Un thé réconfortant aux saveurs d'orange et de cannelle.",
    ingredients: ["Thé", "Orange", "Cannelle"],
    recipe: [
      "Faire infuser le thé",
      "Ajouter l'orange et la cannelle",
      "Laisser infuser quelques minutes",
      "Servir chaud",
    ],
  },

  {
    name: "Vin chaud",
    image: "/images/vin.png",
    color: "#722F37",
    background: "#F5F5DC",
    description:
      "Un vin chaud parfumé aux épices, parfait pour l'hiver.",
    ingredients: [
      "Vin rouge",
      "Orange",
      "Cannelle",
      "Sucre",
    ],
    recipe: [
      "Verser le vin dans une casserole",
      "Ajouter les épices, l'orange et le sucre",
      "Faire chauffer doucement sans faire bouillir",
      "Servir chaud",
    ],
  },

  {
    name: "Chocolat Viennois",
    image: "/images/vienois.png",
    color: "#722F37",
    background: "#F5F5DC",
    description:
      "Un chocolat viennois gourmand avec une généreuse chantilly.",
    ingredients: [
      "Lait",
      "Chocolat",
      "Chantilly",
      "Cacao",
    ],
    recipe: [
      "Faire chauffer le lait",
      "Ajouter le chocolat",
      "Verser dans une tasse",
      "Ajouter la chantilly et un peu de cacao",
    ],
  },
];