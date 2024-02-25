import React, { useEffect } from "react";
import "./ScoreKeeper.css";
//NOTE: the lodash that didn't work
// import { set } from "lodash";

//what's submittedCities here for?
function ScoreKeeper({ scoreVar, setScoreVar, submittedCities, invalidCity }) {
  useEffect(() => {
    if (invalidCity) {
      setScoreVar(scoreVar);
    } else {
      setScoreVar(scoreVar + 5);
    }
  }, [submittedCities]);
  return <div className="score">Your score: {scoreVar}</div>;
}

export default ScoreKeeper;
