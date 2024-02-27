import "./ScoreKeeper.css";

function ScoreKeeper({ scoreVar }) {
  return <div className="score">Your score: {scoreVar}</div>;
}

export default ScoreKeeper;
