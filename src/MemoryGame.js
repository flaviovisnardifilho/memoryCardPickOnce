import './MemoryGame.css';
import { images as initialImageList, backCard as srcBackCard } from './data.js';
import { CardContainer } from './components/CardContainer';
import { useState } from 'react';
import { Header } from './components/Header';

function MemoryGame() {
  const [allImagesList, setAllImagesList] = useState(initialImageList);
  const [gameOver, setGameOver] = useState(false);
  const [newRecord, setNewRecord] = useState(0);

  let score = allImagesList.filter((card) => card.wasChoosen).length;
  if (score > newRecord) setNewRecord(score);

  function resetGame() {
    setAllImagesList((prevImages) =>
      prevImages.map((card) => {
        return { ...card, wasChoosen: false };
      })
    );
    setGameOver(false);
  }

  function toggleCardChoosen(e) {
    setAllImagesList(
      allImagesList.map((card) => {
        if (card.id === e.target.id) {
          if (card.wasChoosen) setGameOver(true);
          return { ...card, wasChoosen: true };
        }
        return card;
      })
    );
  }

  function fisherYatesShuffle(cardList) {
    let i = cardList.length;
    while (--i > 0) {
      const rand = Math.floor(Math.random() * (i + 1));
      [cardList[rand], cardList[i]] = [cardList[i], cardList[rand]];
    }
    return cardList;
  }

  function selectCards() {
    if (allImagesList.filter((card) => !card.wasChoosen).length > 0) {
      const freshCard = [
        fisherYatesShuffle(allImagesList.filter((card) => !card.wasChoosen))[0],
      ];
      const fillCards = fisherYatesShuffle(
        allImagesList.filter((card) => card.id !== freshCard[0].id)
      );
      return fisherYatesShuffle(freshCard.concat(fillCards.slice(0, 9)));
    }

    setGameOver(true);
    return allImagesList.slice(0, 10);
  }

  return (
    <div className="memory-game">
      <Header score={score} newRecord={newRecord} resetGame={resetGame} />
      {gameOver ? (
        <h1 className="game-over">
          {allImagesList.some((card) => !card.wasChoosen)
            ? 'Game Over!'
            : 'You Won!'}
        </h1>
      ) : (
        <CardContainer
          selectCards={selectCards()}
          onClick={(e) => toggleCardChoosen(e)}
          srcBackCard={srcBackCard}
          score={score}
        />
      )}
    </div>
  );
}

export default MemoryGame;
