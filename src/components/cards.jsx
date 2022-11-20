import React from "react";
import cardFront from "../assets/cardfront.webp";

function Cards({ number }) {
  const cardClick = function () {
    console.log("click", +number);
  };

  return (
    // Card Container
    <button
      className="grid w-[100px] h-[100px] place-items-center bg-gray-400"
      onClick={cardClick}
    >
      {/* front */}
      <div>
        <img src={cardFront} alt="front" width="60" />
      </div>
      {/* //Card */}
      <div className="w-[100px] h-[100px]">{number}</div>
    </button>
  );
}

export default Cards;
