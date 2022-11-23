import React from "react";
import cardFront from "../assets/cardfront.png";

function Cards({ eeveelution }) {
  const cardClick = function () {
    console.log("click", +eeveelution);
  };

  return (
    // Card Container
    <button
      className="grid w-[150px] h-[150px] place-items-center bg-gray-400 border-2 cursor-pointer"
      onClick={cardClick}
    >
      {/* front */}
      <div>
        <img src={cardFront} alt="front" className="border-2 w-14" />
      </div>
      {/* //Card */}
      <img
        src={eeveelution.pokemon}
        alt="pokemon"
        width="200"
        height="20"
        className="border-2 w-14"
      />
      <p className=" text-sm">{eeveelution.name}</p>
    </button>
  );
}

export default Cards;
