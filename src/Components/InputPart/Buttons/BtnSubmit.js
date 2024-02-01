import React from "react";
import "./Buttons.css";

// { handleCities } as prop and
// onClick={handleCities} in the button tag?
//like here: https://react.dev/learn

//NOTE: another prop that onClick
function BtnSubmit({ handleCities }) {
  return (
    <button className="btn-submit" onClick={handleCities}>
      Gorod
    </button>
  );
}

export default BtnSubmit;
