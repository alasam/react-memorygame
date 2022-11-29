import React, { useEffect, useState } from "react";
import cardFront from "../assets/cardfront.png";

function Card({ card, cardClick, disabled, index }) {
  return (
    // Card Container
    <button
      className={`flex w-[150px] h-[150px] justify-between cursor-pointer ${
        card.matched || disabled
          ? "bg-gray-400 pointer-events-none"
          : "bg-blue-400"
      }`}
      onClick={cardClick}
      data-id={card.id}
      disabled={disabled ? true : false}
      data-index={index}
    >
      {/* front */}
      <div className="pointer-events-none">
        <img src={cardFront} alt="front" className="absolute w-[140px] " />

        {/* //Card */}
        <img
          src={card.pokemon}
          alt="pokemon"
          className="absolute w-[140px] pointer-events-none"
        />
      </div>
    </button>
  );
}

export default Card;
