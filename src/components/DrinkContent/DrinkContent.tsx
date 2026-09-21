import { useEffect, useState } from "react";
import "./DrinkContent.css";
import type { Drink } from "../../data/drinks";

type Props = {
  drink: Drink;
};

function DrinkContent({ drink }: Props) {
  const [displayedDrink, setDisplayedDrink] = useState(drink);
  const [animation, setAnimation] = useState("enter");

  useEffect(() => {
    if (drink.name === displayedDrink.name) return;

    setAnimation("exit");

    const timer = setTimeout(() => {
      setDisplayedDrink(drink);
      setAnimation("enter");
    }, 400);

    return () => clearTimeout(timer);
  }, [drink, displayedDrink.name]);

  return (
    <section className={`drink-content ${animation}`}>
      <h1>{displayedDrink.name}</h1>

      

      <p>{displayedDrink.description}</p>

      <div className="drink-details">
        <div className="ingredients">
          <h2>Ingrédients</h2>

          <ul>
            {displayedDrink.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="recipe">
          <h2>Recette</h2>

          <ol>
            {displayedDrink.recipe.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default DrinkContent;