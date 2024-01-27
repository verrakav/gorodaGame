import React from "react";
import ScoreKeeper from "../ScoreKeeper";
// import Buttons from "./Buttons";
import BtnSubmit from "./BtnSubmit";
import BtnGiveUp from "./BtnGiveUp";

function InputPart({
  inputCity,
  handleInputChange,
  handleCities,
  handleBtnSubmitClick,
}) {
  const inputFiledStyle = {
    border: "4px solid bisque",
    borderRadius: "0.5em",
    padding: "6px",
  };

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
          style={inputFiledStyle}
        ></input>
        {/* <Buttons /> */}
        <BtnSubmit onClick={handleBtnSubmitClick} />
        <BtnGiveUp />
      </form>
    </div>
  );
}

export default InputPart;
