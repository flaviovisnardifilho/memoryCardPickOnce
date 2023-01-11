// import { useState } from "react";
import React from 'react';

export function Card({
  src,
  srcBackCard,
  id,
  handleClick,
  // wasChoosen,
  width = 100,
  height = 145,
}) {


  // const style = { border: wasChoosen ? '4px solid blue' : 'none'}


  return (
    <div className="card" 
    // style={style}
    >
      <div className="inner"
      >
        <div className="front"

        >
          <img
            src={src}
            id={id}
            onClick={handleClick}
            alt={src}
            width={width}
            height={height}
          ></img>
        </div>
        <div className="back"
        >
          <img
            src={srcBackCard.src}
            alt="back of card"
            width={width}
            height={height}
          ></img>
        </div>
      </div>
    </div>
  );
}
