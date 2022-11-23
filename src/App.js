import React, { useCallback, useEffect, useState } from "react";
import Espeon from "./assets/Espeon.webp";
import Flareon from "./assets/Flareon.png";
import Glaceon from "./assets/Glaceon.png";
import Jolteon from "./assets/Jolteon.png";
import Leafeon from "./assets/Leafeon.webp";
import Sylveon from "./assets/Sylveon.png";
import Umbreon from "./assets/Umbreon.png";
import Vaporeon from "./assets/Vaporeon.png";
import Cards from "./components/Cards";

function App() {
  const [Cards, setCards] = useState(null);
  const eeveelution = [
    { key: "1", name: "Espeon", pokemon: Espeon },
    { key: "2", name: "Flareon", pokemon: Flareon },
    { key: "3", name: "Glaceon", pokemon: Glaceon },
    { key: "4", name: "Jolteon", pokemon: Jolteon },
    { key: "5", name: "Leafeon", pokemon: Leafeon },
    { key: "6", name: "Sylveon", pokemon: Sylveon },
    { key: "7", name: "Umbreon", pokemon: Umbreon },
    { key: "8", name: "Vaporeon", pokemon: Vaporeon },
  ];

  function resetGame() {
    const shuffled = [...eeveelution, ...eeveelution]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, key: Math.random() }));
    setCards(shuffled);
    console.log(Object.entries(shuffled));
  }

  useEffect(() => {
    resetGame();
  }, []);

  return (
    <div className="grid place-items-center">
      {/* <div className="grid grid-cols-4">
        {Object.entries(eeveelution).map((eeveelution) => (
          <Cards key={eeveelution.key} eeveelution={eeveelution} />
        ))}
      </div> */}
    </div>
  );
}

export default App;
