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
}) {
  return (
    <div className="input-part">
      <ScoreKeeper />
      <form onSubmit={handleCities}>
        <input
          className="input-field"
          type="text"
          onChange={handleInputChange}
          value={inputCity} /*without it the field did't clear */
          placeholder="Name a city"
        ></input>
        {/* <Buttons /> */}
        <BtnSubmit handleCities={handleCities} />
      </form>
      <BtnGiveUp
        inputCity={inputCity}
        setInputCity={setInputCity}
        submittedCities={submittedCities}
        setSubmittedCities={setSubmittedCities}
        validationCity={validationCity}
        setValidationCity={setValidationCity}
        handleInputChange={handleInputChange}
        handleCities={handleCities}
      />
    </div>
  );
}

export default InputPart;
