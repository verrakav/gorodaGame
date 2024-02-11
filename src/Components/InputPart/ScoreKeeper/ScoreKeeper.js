import React, { useEffect } from "react";
import "./ScoreKeeper.css";
//NOTE: the lodash that didn't work
// import { set } from "lodash";

function ScoreKeeper({ scoreVar, setScoreVar, submittedCities, inputCity }) {
  useEffect(() => {
    //if only inputCity - score starts with 0
    // if submittedCities or 2 params - score starts with 5
    if (submittedCities) {
      setScoreVar(scoreVar + 5);
    }
    //FIXME: doesn't seem to do that part at all
    // if(submittedCities.includes(inputCity)){
    //   setScoreVar(scoreVar)
    // }
  }, [submittedCities]);
  return <div className="score">Your score: {scoreVar}</div>;
}

export default ScoreKeeper;
