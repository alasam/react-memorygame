import React from "react";
import cardFront from "../assets/cardfront.png";

function Card({ name, pokemon }) {
  const cardClick = function () {
    console.log("click", +name);
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
        src={pokemon}
        alt="pokemon"
        width="200"
        height="20"
        className="border-2 w-14"
      />
      <p className=" text-sm">{name}</p>
    </button>
  );
}

export default Card;
