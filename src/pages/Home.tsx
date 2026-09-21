import { useState } from "react";
import { drinks } from "../data/drinks";
import DrinkCarrousel from "../components/DrinkCarrousel/DrinkCarrousel";
import DrinkContent from "../components/DrinkContent/DrinkContent";
import Header from "../components/header/header.tsx";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeDrink = drinks[activeIndex];

  return (
    <>
     <Header/>

    <main
      style={{
        backgroundColor: activeDrink.background,
        minHeight: "100vh",
      }}
    >
     
      <DrinkContent drink={activeDrink} />

      <DrinkCarrousel
  activeIndex={activeIndex}
  setActiveIndex={setActiveIndex}
/>
    </main>
    </>
  );
}

export default Home;