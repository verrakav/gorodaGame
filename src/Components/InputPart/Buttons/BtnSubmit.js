import React, { useState, useEffect } from "react";
import "./Buttons.css";

// const apiKey = "a56f2689e9msh374ad488f32c171p1726f9jsnc73f34e19b3f";
// const apiHost = "wft-geo-db.p.rapidapi.com";

//NOTE: another prop that onClick
//ASK: instead of usning props and then props.handleCities - destructure when passing as arg?
function BtnSubmit({ handleCities }) {
  return (
    <button className="btn-submit" onClick={handleCities}>
      Gorod
    </button>
  );
}

export default BtnSubmit;
