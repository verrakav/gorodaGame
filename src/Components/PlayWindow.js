import React, { useState } from "react";
import "./PlayWindow.css";
import InputPart from "./InputPart/InputPart";
import OutputPart from "./OutputPart/OutputPart";

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

  //TODO: prevent from multiple re-rendering // this didn't seem to work
  //lines below +     // debounceHandleInputChange(inputCity);
  // function debounce(func, delay) {
  //   let timer;
  //   return function (...args) {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => func(...args), delay);
  //   };
  // }

  // const debounceHandleInputChange = debounce((inputCity) => {
  //   console.log("debounced", inputCity);
  // }, 500);

  const handleInputChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleCities = (event) => {
    //the default behavior of a form submission: refresh the page - interferes w/React state?
    event.preventDefault();
    setSubmittedCities((prev) => [...prev, inputCity]);
    setInputCity("");
  };

  //TODO: change this function to trigger inputCity checks against API and array
  //and pass it as a prop?
  // const handleBtnSubmitClick = () => {
  // //API related code?
  // };

  // //NOTE: how it can cl
  // useEffect(() => {
  //   console.log("submitted:", submittedCities, "inputCity:", inputCity);
  // }, [submittedCities, inputCity]);

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
        handleInputChange={handleInputChange}
        handleCities={handleCities}
        handleBtnSubmitClick={handleBtnSubmitClick}
      />
    </div>
  );
}

export default PlayWindow;
