import React from "react";
import cardFront from "../assets/cardfront.png";

function Card({ name, pokemon, id, cardClick, disabled }) {
  return (
    // Card Container
    <button
      className="grid w-[150px] h-[150px] place-items-center bg-gray-400 border-2 cursor-pointer"
      onClick={cardClick}
      data-id={id}
    >
      {/* front */}
      <div className={`pointer-events-none ${disabled ? `disabled` }}>
        <img src={cardFront} alt="front" className="border-2 w-14" />
      </div>
      {/* //Card */}
      <img
        src={pokemon}
        alt="pokemon"
        width="200"
        height="20"
        className="border-2 w-14 pointer-events-none"
      />
      <p className=" text-sm">{name}</p>
    </button>
  );
}

export default Card;
