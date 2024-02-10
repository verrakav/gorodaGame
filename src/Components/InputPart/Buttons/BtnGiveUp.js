import React from "react";
import "./Buttons.css";

//TODO: reset happens here
//score message "congrats your score is 1000"
function BtnGiveUp({ setSubmittedCities, setInputCity, setValidationCity }) {
  const handleGiveUp = (event) => {
    setInputCity("");
    setSubmittedCities([]);
    setValidationCity("");
  };
  return (
    <button className="btn-giveup" onClick={handleGiveUp}>
      Give Up
    </button>
  );
}

export default BtnGiveUp;
