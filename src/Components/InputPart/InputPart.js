import React from "react";
import "./InputPart.css";
import ScoreKeeper from "./ScoreKeeper/ScoreKeeper";
// import Buttons from "./Buttons";
import BtnSubmit from "./Buttons/BtnSubmit";
import BtnGiveUp from "./Buttons/BtnGiveUp";

//ASK: shorthannd for all props? ...props and then props.inputCity?
function InputPart({
  inputCity,
  setInputCity,
  handleCities,
  handleInputChange,
  submittedCities,
  setSubmittedCities,
  validationCity,
  setValidationCity,
  setOtherMessage,
  otherMessage,
  scoreVar,
  setScoreVar,
}) {
  const removeOtherMessage = () => setOtherMessage("");
  return (
    <div className="input-part">
      <ScoreKeeper
        scoreVar={scoreVar}
        setScoreVar={setScoreVar}
        submittedCities={submittedCities}
        otherMessage={otherMessage}
      />
      <form onSubmit={handleCities}>
        <input
          className="input-field"
          type="text"
          onChange={handleInputChange}
          value={inputCity}
          placeholder="Name a city"
          onClick={removeOtherMessage}
        ></input>
        {/* <Buttons /> */}
        <BtnSubmit handleCities={handleCities} />
      </form>
      <BtnGiveUp
        inputCity={inputCity}
        setInputCity={setInputCity}
        submittedCities={submittedCities}
        setSubmittedCities={setSubmittedCities}
        setOtherMessage={setOtherMessage}
        validationCity={validationCity}
        setValidationCity={setValidationCity}
        handleInputChange={handleInputChange}
        handleCities={handleCities}
        scoreVar={scoreVar}
        setScoreVar={setScoreVar}
      />
    </div>
  );
}

export default InputPart;
