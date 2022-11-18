import React, { useState } from "react";
import Cards from "./components/Cards";

function App() {
  const { count, setCount } = useState(0);
  const items = ["1", "2", "3", "4", "5", "6", "7", "8"];

  return (
    <div className="App">
      {items.map((number, i) => (
        <Cards key={i} number={number} />
      ))}
    </div>
  );
}

export default App;
