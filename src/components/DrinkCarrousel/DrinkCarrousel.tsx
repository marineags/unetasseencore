import { useState } from "react";
import "./DrinkCarrousel.css";
import { drinks } from "../../data/drinks";

type Props = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

function Carrousel({
  activeIndex,
  setActiveIndex,
}: Props) {

  const [rotation, setRotation] = useState(0);

  const angle = 360 / drinks.length;

  const nextDrink = () => {
    setRotation((prev) => prev - angle);

    setActiveIndex((prev) =>
      (prev + 1) % drinks.length
    );
  };

  const previousDrink = () => {
    setRotation((prev) => prev + angle);

    setActiveIndex((prev) =>
      prev === 0 ? drinks.length - 1 : prev - 1
    );
  };
  return (
    <div className="carousel-wrapper">

      <div
        className="carousel-circle"
        style={{
          backgroundColor: drinks[activeIndex].color,
        }}
      >
        <div
          className="carousel-rotation"
          style={{
            transform: `rotate(${rotation + -45}deg)`,
          }}
        >
          {drinks.map((drink, index: number) => (
            <div
              key={drink.name}
              className={`drink-item ${index === activeIndex ? "active" : ""}`}
              style={{
                transform: `
                  rotate(${index * angle}deg)
                  translateY(-370px)
                 
                `,
              }}
            >
              <img src={drink.image} alt={drink.name} />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-buttons">
        <button onClick={previousDrink}>←</button>
        <button onClick={nextDrink}>→</button>
      </div>

    </div>
  );
}

export default Carrousel; 
