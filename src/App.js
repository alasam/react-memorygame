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
    { id: 1, name: "Espeon", pokemon: Espeon, matched: false },
    { id: 2, name: "Flareon", pokemon: Flareon, matched: false },
    { id: 3, name: "Glaceon", pokemon: Glaceon, matched: false },
    { id: 4, name: "Jolteon", pokemon: Jolteon, matched: false },
    { id: 5, name: "Leafeon", pokemon: Leafeon, matched: false },
    { id: 6, name: "Sylveon", pokemon: Sylveon, matched: false },
    { id: 7, name: "Umbreon", pokemon: Umbreon, matched: false },
    { id: 8, name: "Vaporeon", pokemon: Vaporeon, matched: false },
  ];
  // set state for each card being generated
  const [cards, setCards] = useState({});
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [selected, setSelected] = useState(false);
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);
  const [moves, setMoves] = useState(0);

  // double each card and shuffle order
  function resetGame() {
    const shuffled = [...eeveelution, ...eeveelution]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, key: Math.random() }));
    setCards(shuffled);
  }

  // function to clear picks
  function clearPicks() {
    setFirstPick(null);
    setSecondPick(null);
    setDisabled(false);
  }

  // call resetGame on load
  useEffect(() => {
    resetGame();
  }, []);

  // onClick event when card is clicked (WIP)
  const cardClick = function (e) {
    firstPick
      ? setSecondPick(e.target.dataset.id)
      : setFirstPick(e.target.dataset.id);
  };

  // checks if picks are matching or not, then clears picks
  function checkAnswer() {
    if (firstPick === secondPick) {
      console.log("correct!", +firstPick + secondPick);
      setCards((prev) => {
        return prev.map((card) => {
          if (card.id == firstPick) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        });
      });
      setScore(score + 1);
    } else {
      console.log("Try again!, ", +firstPick + secondPick);
    }
    clearPicks();
  }

  // useEffect to run checkAnswer when both first and second picks have a state
  useEffect(() => {
    if (firstPick && secondPick) {
      setDisabled(true);
      checkAnswer();
    }
  }, [firstPick, secondPick]);

  return (
    <div className="grid place-items-center">
      <div className="grid grid-cols-4">
        {Object.values(cards).map(({ key, name, pokemon, id, matched }) => (
          <Card
            key={key}
            name={name}
            pokemon={pokemon}
            id={id}
            cardClick={cardClick}
            disabled={disabled}
            matched={matched}
          />
        ))}
      </div>
      score: {score}
    </div>
  );
}

export default App;
