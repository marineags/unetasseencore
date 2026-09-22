export type Drink = {
  name: string;
  image: string;
  color: string;
  background: string;
  description: string;
  ingredients: string[];
  recipe: string[];
textColor: string;
  
};

export const drinks: Drink[] = [
  {
    name: "Chocolat chaud",
    image: "/images/chocolat.png",
    color: "#401717",
    background: "#A98385",
    textColor: "#3B261D",
   description:
  "Un chocolat chaud doux et crémeux, parfait pour se réchauffer lors des soirées fraîches. Recette pour 1 personne.",
    ingredients: [
      "25 g de chocolat noir",
      "2,5 cl d'eau",
      "½ sachet de sucre vanillé",
      "13 cl de lait",
    ],

    recipe: [
      "Commencez par casser le chocolat noir en petits carrés afin qu'il fonde plus facilement.",
      "Versez ensuite l'eau et le lait dans une casserole, puis faites chauffer doucement.",
      "Dès que le mélange commence à frémir, ajoutez le sucre vanillé et mélangez délicatement.",
      "Laissez chauffer pendant environ 1 minute, puis retirez la casserole du feu.",
      "Ajoutez le chocolat et mélangez tranquillement jusqu'à obtenir un chocolat chaud bien lisse et crémeux.",
      "Versez dans votre tasse préférée et dégustez pendant qu'il est encore bien chaud.",
    ],
  },

  {
    name: "Pumpkin Spice Latte",
    image: "/images/pumpink.png",
    color: "#9B3316",
    background: "#D08A72",
    textColor: "#4A2116",
   description:
  "Un latte doux et épicé aux saveurs d'automne, parfait pour une pause réconfortante. Recette pour 1 personne.",
    ingredients: [
      "1 café espresso",
      "200 ml de lait végétal, demi-écrémé ou entier",
      "De la chantilly",
      "Du chocolat en poudre",
      "2 cl de sirop Pumpkin Spice",
      "Un peu de cannelle ou de muscade pour la décoration",
    ],

    recipe: [
      "Commencez par préparer votre espresso, puis versez-le dans une grande tasse.",
      "Faites chauffer le lait dans une casserole. Vous pouvez aussi utiliser un mousseur à lait pour obtenir une mousse légère et bien onctueuse.",
      "Ajoutez 2 cl de sirop Pumpkin Spice dans le café, puis mélangez doucement pour bien répartir toutes les saveurs.",
      "Versez ensuite le lait chaud sur le mélange café-sirop, en gardant un peu de mousse pour la déposer sur le dessus.",
      "Pour terminer, ajoutez une généreuse touche de chantilly puis saupoudrez d'un peu de cannelle, de muscade ou de chocolat en poudre.",
      "Il ne reste plus qu'à vous installer confortablement et profiter de votre Pumpkin Spice Latte.",
    ],
  },

  {
    name: "Thé aux épices",
    image: "/images/the.png",
    color: "#AB6951",
    background: "rgb(97, 39, 39)",
    textColor: "#F7EFE7",
   description:
  "Un thé chaleureux et parfumé aux agrumes et aux épices, idéal pour les journées d'automne et d'hiver. Recette pour 1 personne.",
    ingredients: [
      "1 sachet de thé noir bio Thé Réveillé",
      "1 orange bio",
      "1 citron bio",
      "1 bâton de cannelle",
      "1 étoile de badiane",
      "Quelques graines de cardamome",
    ],

    recipe: [
      "À l'aide d'un couteau économe, commencez par prélever délicatement les zestes de l'orange et du citron.",
      "Préchauffez ensuite votre four à 100 °C.",
      "Coupez les zestes en petits morceaux puis répartissez-les sur une plaque recouverte de papier cuisson. Enfournez pendant 1 heure.",
      "Pendant ce temps, concassez la cannelle, la cardamome et la badiane à l'aide d'un mortier.",
      "Déposez les épices dans un saladier ou un cul-de-poule, puis ajoutez le contenu du sachet de thé noir et les zestes une fois séchés.",
      "Mélangez délicatement le tout : votre thé aux épices maison est prêt.",
      "Vous pouvez bien sûr personnaliser votre mélange selon vos envies en ajoutant quelques clous de girofle, un peu de gingembre ou une pincée de noix de muscade.",
      "Il ne vous reste plus qu'à faire infuser votre mélange dans de l'eau chaude et à profiter de son délicieux parfum.",
    ],
  },

  {
    name: "Vin chaud",
    image: "/images/vin.png",
    color: "#6A0409",
    background: "#A85E63",
    textColor: "#F7EFE7",
   description:
  "Un vin chaud généreusement parfumé aux agrumes et aux épices, parfait pour une soirée d'hiver. Recette pour environ 12 personnes.",
    ingredients: [
      "1 zeste d'orange",
      "1 morceau de gingembre émincé",
      "1 orange",
      "2 clous de girofle",
      "250 g de sucre roux",
      "2 étoiles de badiane",
      "½ litre de vin rouge (Bordeaux, Bourgogne ou Pinot noir)",
      "1 zeste de citron",
      "2 bâtons de cannelle",
      "1 pincée de noix de muscade râpée",
    ],

    recipe: [
      "Versez directement dans une casserole le vin rouge, le sucre, les agrumes et toutes les épices.",
      "Mélangez doucement afin que les parfums commencent à se mêler.",
      "Faites chauffer à feu doux jusqu'à atteindre une légère ébullition, puis laissez frémir pendant environ 5 minutes.",
      "Filtrez ensuite le vin chaud afin de retirer les épices et les morceaux d'agrumes.",
      "Servez immédiatement dans des verres résistants à la chaleur ou de jolies tasses.",
      "Pour la petite touche finale, ajoutez une rondelle d'orange et un bâton de cannelle dans chaque verre.",
    ],
  },

  {
    name: "Chocolat viennois",
    image: "/images/vienois.png",
    color: "#DC7E27",
    background: "#EDC29A",
    textColor: "#4A2A18",
  description:
  "Un chocolat chaud intensément gourmand, recouvert d'une généreuse chantilly maison. Recette pour 2 personnes.",
    ingredients: [
      "½ litre de lait",
      "100 g de chocolat noir Pralus",
      "1 cuillère à soupe de sucre en poudre",
      "1 pincée de cannelle",
      "1 pincée de noix de muscade",
      "10 cl de crème fleurette",
      "1 cuillère à soupe de sucre glace",
      "Quelques amandes torréfiées (facultatif)",
    ],

    recipe: [
      "Commencez par hacher finement le chocolat afin qu'il fonde facilement.",
      "Faites chauffer le lait dans une casserole avec la cannelle et la noix de muscade.",
      "Versez ensuite le lait chaud sur le chocolat haché en trois fois, en mélangeant soigneusement entre chaque ajout pour obtenir une texture bien lisse.",
      "Ajoutez la cuillère de sucre en poudre si vous souhaitez un chocolat légèrement plus sucré.",
      "Préparez ensuite la chantilly en fouettant la crème fleurette avec le sucre glace. Pour qu'elle monte facilement, pensez à utiliser une crème, un récipient et un fouet bien froids.",
      "Versez le chocolat bien chaud dans les tasses.",
      "Recouvrez généreusement de chantilly à l'aide d'une poche à douille ou simplement d'une cuillère.",
      "Pour encore plus de gourmandise, ajoutez quelques amandes torréfiées grossièrement concassées et un peu de chocolat râpé sur le dessus.",
      "Servez immédiatement et profitez de votre chocolat viennois bien chaud.",
    ],
  },
];