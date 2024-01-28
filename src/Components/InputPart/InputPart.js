import React from "react";
import "./InputPart.css";
import ScoreKeeper from "./ScoreKeeper/ScoreKeeper";
// import Buttons from "./Buttons";
import BtnSubmit from "./Buttons/BtnSubmit";
import BtnGiveUp from "./Buttons/BtnGiveUp";

function InputPart({
  inputCity,
  handleInputChange,
  handleCities,
  handleBtnSubmitClick,
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
        <BtnSubmit onClick={handleBtnSubmitClick} />
        <BtnGiveUp />
      </form>
    </div>
  );
}

export default InputPart;
