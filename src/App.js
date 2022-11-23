import React, { useEffect, useState } from "react";
import Espeon from "./assets/Espeon.webp";
import Flareon from "./assets/Flareon.png";
import Glaceon from "./assets/Glaceon.png";
import Jolteon from "./assets/Jolteon.png";
import Leafeon from "./assets/Leafeon.webp";
import Sylveon from "./assets/Sylveon.png";
import Umbreon from "./assets/Umbreon.png";
import Vaporeon from "./assets/Vaporeon.png";
import Card from "./components/Card";

function App() {
  // Array with card data
  const eeveelution = [
    { id: 1, name: "Espeon", pokemon: Espeon },
    { id: 2, name: "Flareon", pokemon: Flareon },
    { id: 3, name: "Glaceon", pokemon: Glaceon },
    { id: 4, name: "Jolteon", pokemon: Jolteon },
    { id: 5, name: "Leafeon", pokemon: Leafeon },
    { id: 6, name: "Sylveon", pokemon: Sylveon },
    { id: 7, name: "Umbreon", pokemon: Umbreon },
    { id: 8, name: "Vaporeon", pokemon: Vaporeon },
  ];
  // set state for each card being generated
  const [cards, setCards] = useState(eeveelution);

  // double each card and shuffle order
  function resetGame() {
    const shuffled = [...eeveelution, ...eeveelution]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, key: Math.random() }));
    setCards(shuffled);
  }

  // call resetGame on load
  useEffect(() => {
    resetGame();
  }, []);

  // onClick event when card is clicked (WIP)
  const cardClick = function (e) {
    console.log(e.target.dataset.id);
  };

  return (
    <div className="grid place-items-center">
      <div className="grid grid-cols-4">
        {Object.values(cards).map(({ key, name, pokemon, id }) => (
          <Card
            key={key}
            name={name}
            pokemon={pokemon}
            id={id}
            cardClick={cardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
