import React from "react";
import cardFront from "../assets/cardfront.png";

function Cards({ pokemon }) {
  const cardClick = function () {
    console.log("click", +pokemon);
  };

  return (
    // Card Container
    <button
      className="grid w-[100px] h-[100px] place-items-center bg-gray-400"
      onClick={cardClick}
    >
      {/* front */}
      <div>
        <img src={cardFront} alt="front" width="60" className="border-2" />
      </div>
      {/* //Card */}
      <img src={pokemon} alt="pokemon" className="border-2" />
    </button>
  );
}

export default Cards;
