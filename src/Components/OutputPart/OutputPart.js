// import { useState, useEffect } from "react";
import "../PlayWindow.css";
// import manageUserCityMessage from "../../utils/Helpers";
// import fetchCity from "../../utils/APIrelated";

function OutputPart({ invalidCity, computerResponseCity, userCityMessage }) {
  // console.log(submittedCities);
  // console.log(submittedCities.length);

  return (
    <div className="output-part">
      <div>{userCityMessage}</div>
      <div>{computerResponseCity}</div>
      <div>{invalidCity}</div>
    </div>
  );
}

export default OutputPart;
