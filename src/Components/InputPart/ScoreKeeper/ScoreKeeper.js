import React, { useEffect } from "react";
import "./ScoreKeeper.css";
//NOTE: the lodash that didn't work
// import { set } from "lodash";

//what's submittedCities here for?
function ScoreKeeper({ scoreVar }) {
  return <div className="score">Your score: {scoreVar}</div>;
}

export default ScoreKeeper;
