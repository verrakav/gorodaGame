import React from "react";
import "./Buttons.css";

<<<<<<< Updated upstream
function BtnSubmit({ onClick }) {
  return (
    <button className="btn-submit" onClick={onClick}>
      Gorod{" "}
    </button>
  );
=======
// { handleCities } as prop and
// onClick={handleCities} in the button tag?

function BtnSubmit() {
  return <button className="btn-submit">Gorod</button>;
>>>>>>> Stashed changes
}

export default BtnSubmit;
