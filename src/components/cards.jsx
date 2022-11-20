import React from "react";
import cardFront from "../assets/cardfront.webp";

function Cards({ number }) {
  return (
    // Card Container
    <button className="grid grid-cols-4">
      {/* front */}
      <div>
        <img src={cardFront} alt="front" width="60" />
      </div>
      {/* //Card */}
      <div className="w-[100px] h-[100px] text-5xl">{number}</div>
    </button>
  );
}

export default Cards;
