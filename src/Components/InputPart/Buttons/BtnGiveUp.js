import React from "react";
import "./Buttons.css";

//TODO: reset happens here
//score message "congrats your score is 1000"
function BtnGiveUp({
  setSubmittedCities,
  setInputCity,
  setValidationCity,
  setOtherMessage,
  setScoreVar,
  scoreVar,
  setResponseCity,
}) {
  const handleGiveUp = () => {
    setInputCity("");
    setSubmittedCities([]);
    setValidationCity("");
    setOtherMessage("");
    setScoreVar(-5);
    setResponseCity("");
    alert(`Congrats! Your score is: ${scoreVar}`);
  };
  return (
    <button className="btn-giveup" onClick={handleGiveUp}>
      Give Up
    </button>
  );
}

export default BtnGiveUp;
