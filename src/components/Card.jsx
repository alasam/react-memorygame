import React from "react";
import cardFront from "../assets/cardfront.png";

function Card({ name, pokemon, id, cardClick, disabled, active }) {
  return (
    // Card Container
    <button
      className={`grid w-[150px] h-[150px] place-items-center  border-2 cursor-pointer ${
        disabled ? "bg-gray-400" : "bg-blue-400"
      }`}
      onClick={cardClick}
      data-id={id}
      disabled={disabled ? true : false}
      active={active}
    >
      {/* front */}
      <div className="pointer-events-none">
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
