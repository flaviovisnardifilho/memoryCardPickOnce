export function Header({ score, newRecord, resetGame }) {
  return (
    <>
      <h1 className="title">Pick only once</h1>
      <div className="score">
        <h2>Score</h2>
        <h3>Current: {score}</h3>
        <h4>Best: {newRecord}</h4>
      </div>
      <button className="reset-button" onClick={() => resetGame()}>New Game</button>
    </>
  );
}
