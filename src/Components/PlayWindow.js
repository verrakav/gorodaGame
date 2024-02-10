import React, { useState, useCallback } from "react";
import "./PlayWindow.css";
import InputPart from "./InputPart/InputPart";
import OutputPart from "./OutputPart/OutputPart";
// import { debounce } from "lodash";

function PlayWindow() {
  const [inputCity, setInputCity] = useState("");
  const [submittedCities, setSubmittedCities] = useState([]);

  const [validationCity, setValidationCity] = useState("");
  const [otherMessage, setOtherMessage] = useState("");

  //NOTEthe problem was in this:
  // const handleBtnSubmitClick = () => {
  //   // alert("works!");
  //setInputCity('') <- this cleared the field
  //as a result an empty string was added to the array
  // };

  const handleInputChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleCities = (event) => {
    //the default behavior of a form submission: refresh the page - interferes w/React state?
    event.preventDefault();
    if (!inputCity) {
      alert("Choose a city");
    } else {
      //callback func to ensure all prev values are stored
      setSubmittedCities((prev) => [...prev, inputCity]);
    }
    setInputCity("");
  };

  //TODO: change this function to trigger inputCity checks against API and array
  //and pass it as a prop?
  // const handleBtnSubmitClick = () => {
  // //API related code?
  // };

  return (
    <div className="play-window">
      <OutputPart
        validationCity={validationCity}
        otherMessage={otherMessage}
        submittedCities={submittedCities}
        setSubmittedCities={setSubmittedCities}
      />
      <InputPart
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

export default PlayWindow;
