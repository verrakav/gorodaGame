import React from "react";
import "./InputPart.css";
import ScoreKeeper from "./ScoreKeeper/ScoreKeeper";
// import Buttons from "./Buttons";
import BtnSubmit from "./Buttons/BtnSubmit";
import BtnGiveUp from "./Buttons/BtnGiveUp";

//TODO: sort out what happens to the props for the btnSubmit: cur version the right one?
//the game works without btnSubmit props
function InputPart({ inputCity, handleInputChange, handleCities }) {
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
      <BtnGiveUp />
    </div>
  );
}

export default InputPart;
