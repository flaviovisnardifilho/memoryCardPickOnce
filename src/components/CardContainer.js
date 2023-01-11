import React from 'react';
import { Card } from './Card';

export function CardContainer({ selectCards, srcBackCard, onClick, score }) {

  const showCards = selectCards.map((image) => (
    <Card
      key={image.id + score}
      src={image.src}
      srcBackCard={srcBackCard}
      id={image.id}
      handleClick={onClick}
      // wasChoosen={image.wasChoosen}
    />
  ));

  return <div className="container">{showCards}</div>;
}
