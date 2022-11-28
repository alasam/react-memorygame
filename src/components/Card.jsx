import React, { useEffect } from "react";
import cardFront from "../assets/cardfront.png";

function Card({ card, cardClick, disabled }) {
  return (
    // Card Container
    <button
      className={`grid w-[150px] h-[150px] place-items-center  border-2 cursor-pointer ${
        card.matched ? "bg-gray-400 pointer-events-none" : "bg-blue-400"
      }`}
      onClick={cardClick}
      data-id={card.id}
      disabled={disabled ? true : false}
    >
      {/* front */}
      <div className="pointer-events-none">
        <img src={cardFront} alt="front" className="border-2 w-14" />
      </div>
      {/* //Card */}
      <img
        src={card.pokemon}
        alt="pokemon"
        width="200"
        height="20"
        className="border-2 w-14 pointer-events-none"
      />
      <p className=" text-sm">{card.name}</p>
    </button>
  );
}

export default Card;
