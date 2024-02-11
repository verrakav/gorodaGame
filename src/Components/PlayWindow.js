import React, { useState } from "react";
import "./PlayWindow.css";
import InputPart from "./InputPart/InputPart";
import OutputPart from "./OutputPart/OutputPart";
// import { debounce } from "lodash";
const apiKey = "a56f2689e9msh374ad488f32c171p1726f9jsnc73f34e19b3f";
const apiHost = "wft-geo-db.p.rapidapi.com";

function PlayWindow() {
  const [inputCity, setInputCity] = useState("");
  const [submittedCities, setSubmittedCities] = useState([]);

  const [validationCity, setValidationCity] = useState("");
  const [otherMessage, setOtherMessage] = useState("");

  const [scoreVar, setScoreVar] = useState(-5);

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
    if (!inputCity || inputCity.length < 4) {
      alert("Choose a city");
    } else {
      // console.log("fetching city:", inputCity);
      //NOTE: this API doesn't care for the lower/upper case
      //vars to use in the API call
      const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?types=CITY&minPopulation=20000&namePrefix=${inputCity}&limit=1`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": apiHost,
        },
      };

      //checks if the city exists
      const fetchCity = async () => {
        const response = await fetch(url, options);
        const result = await response.text();
        //validates if the input exists
        if (result.includes(inputCity)) {
          console.log(result);
          setSubmittedCities((prev) => [...prev, inputCity]);
          setOtherMessage("");
        } else {
          setOtherMessage(`The city ${inputCity} doesn't exist`);
        }
      };
      fetchCity();

      //fetching the next city
      //FIXME: need more time to think
      // const systemAnswer = (submittedCities, options) => {
      //   console.log(submittedCities);
      //   let lastCity = submittedCities.length - 1;
      //   let lastLetter = lastCity.length - 1;
      //   const urlResponse = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?types=CITY&minPopulation=20000&namePrefix=${lastLetter}&limit=1`;
      //   const fetchSystemAnswer = async () => {
      //     const systemResponse = await fetch(urlResponse, options);
      //     const systemResult = await systemResponse.text();
      //     console.log(systemResult);
      //   };
      // };
      // systemAnswer();
    }
    setInputCity("");
  };

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
        otherMessage={otherMessage}
        setOtherMessage={setOtherMessage}
        scoreVar={scoreVar}
        setScoreVar={setScoreVar}
      />
    </div>
  );
}

export default PlayWindow;
