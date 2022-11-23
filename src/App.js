import React, { useState } from "react";
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
  const { count, setCount } = useState(0);
  const eeveelution = [
    { name: "Espeon", pokemon: Espeon },
    { name: "Flareon", pokemon: Flareon },
    { name: "Glaceon", pokemon: Glaceon },
    { name: "Jolteon", pokemon: Jolteon },
    { name: "Leafeon", pokemon: Leafeon },
    { name: "Sylveon", pokemon: Sylveon },
    { name: "Umbreon", pokemon: Umbreon },
    { name: "Vaporeon", pokemon: Vaporeon },
  ];

  return (
    <div className="grid place-items-center">
      <div className="grid grid-cols-4">
        {eeveelution.map((eeveelution) => (
          <Cards eeveelution={eeveelution} />
        ))}
      </div>
    </div>
  );
}

export default App;
