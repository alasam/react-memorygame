import React, { useEffect, useState } from "react";
import cardFront from "../assets/cardfront.png";

function Card({ card, cardClick, disabled, index }) {
  return (
    // Card Container
    <div
      className={`flex w-[150px] h-[150px] justify-between cursor-pointer group perspective ${
        card.matched || disabled
          ? "bg-gray-400 pointer-events-none"
          : "bg-blue-400"
      }`}
      onClick={cardClick}
      data-id={card.id}
      disabled={disabled ? true : false}
      data-index={index}
    >
      {/* Card */}
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        {/* Front */}
        <div className="absolute backface-hidden border-2 w-full h-full">
          <img
            src={cardFront}
            alt="front"
            className="absolute w-full h-full "
          />
        </div>
        {/* Back */}
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-black">
          <img
            src={card.pokemon}
            alt="pokemon"
            className="absolute w-full h-full pointer-events-none "
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
