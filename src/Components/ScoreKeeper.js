import React from "react";

function ScoreKeeper() {
  const scoreKeeperStyles = {
    textAlign: "center",
    paddingBottom: "1.5em",
  };
  return (
    <div className="score" style={scoreKeeperStyles}>
      Your score: scoreVar to be defined
    </div>
  );
}

export default ScoreKeeper;
