import React, { useState } from "react";
import "./PlayWindow.css";
import InputPart from "./InputPart/InputPart";
import OutputPart from "./OutputPart/OutputPart";

function PlayWindow() {
  const [inputCity, setInputCity] = useState("");
  const [submittedCities, setSubmittedCities] = useState([]);
  const [validationCity, setValidationCity] = useState("");
  const [otherMessage, setOtherMessage] = useState("");

  const handleInputChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleBtnSubmitClick = () => {
    // alert("works!");
    setInputCity("");
  };

  const handleCities = async (event) => {
    event.preventDefault();

    // 1: check if inputCity is in submittedCities
    if (submittedCities.includes(inputCity)) {
      /*or should it be setValidationCity? */
      setOtherMessage(`we've had it before, sorry`);
    } else {
      try {
        //2: check if inputCity exists at all (API check)
        const nominatimResponse = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${inputCity}&format=json&limit=1`
        );
        const nominatimData = await nominatimResponse.json();
        console.log("API data:", nominatimData); /*NOTE */

        if (
          nominatimData.length === 0 ||
          nominatimData[0].display_name ===
            undefined /*can't just check if it's truthy? */
        ) {
          setOtherMessage(`${inputCity} doesn't exist`);
        } else {
          //3: computer's random (not really) city starting with the last letter of the input city
          const lastLetter = inputCity.slice(-1).toUpperCase();
          const randomCityResponse = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${lastLetter}&format=json&limit=1`
          );

          const randomCityData = await randomCityResponse.json();
          console.log("Another:", randomCityData); /*NOTE */

          //4: update the city list
          if (randomCityData.length > 0) {
            setSubmittedCities((prevCity) => [
              ...prevCity,
              inputCity,
              randomCityData[0].display_name,
            ]);
            setInputCity("");
            setValidationCity(`I say ${randomCityData[0].display_name}`);
          } else {
            setOtherMessage("No city");
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setOtherMessage("Error while fetching data");
      }
    }
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
        handleInputChange={handleInputChange}
        handleCities={handleCities}
        handleBtnSubmitClick={handleBtnSubmitClick}
      />
    </div>
  );
}

export default PlayWindow;
