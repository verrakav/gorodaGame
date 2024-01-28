<<<<<<< Updated upstream
import React from "react";
//a useState to set the initial message
//and then change it to the ones from the parent?
function OutputPart({
  validationCity,
  otherMessage,
  submittedCities,
  setSubmittedCities,
  inputCity,
}) {
=======
import React, { useState, useEffect } from "react";
//NOTE: need some more styling with line height
// and the position of the messages
function OutputPart({ submittedCities, inputCity }) {
  console.log(submittedCities);
  console.log(submittedCities.length);

  const [responseCity, setResponseCity] = useState("");
  const [userCityMessage, setUserCityMessage] = useState("");

  useEffect(() => {
    const manageUserCityMessage = () => {
      //store here for convenience
      const lastIdx = submittedCities.length - 1;
      const lastCity = submittedCities[submittedCities.length - 1];

      if (submittedCities.length === 0) {
        setUserCityMessage(`You start :)`);
      } else if (
        submittedCities.length > 1 &&
        submittedCities.includes(lastCity) &&
        submittedCities.indexOf(lastCity) !== lastIdx
      ) {
        setUserCityMessage(`${lastCity} has been used before`);
      } else {
        setUserCityMessage(`You say: ${lastCity}`);
      }
    };

    manageUserCityMessage();
  }, [inputCity, submittedCities]);

  //TODO: 1. inputCity: validation through API; (inputCity true or false)
  // 2. responseCity: API request;
  //conditions: starts with the last letter of inputCity && hasn't been used before
  //make sure the next inputCity starts with the last letter of responseCity

  // 1 & 2 should be a separate file for convenience?

  //IMPORTANT: API check should happen when the whole word is submitted

  //API to use: https://nominatim.org/release-docs/latest/api/Overview/
  //or this: https://developers.amadeus.com/
  // or a list to search: https://rapidapi.com/collection/city-data-api

>>>>>>> Stashed changes
  return (
    <div className="output-part">
      {inputCity}
      {validationCity}
      {otherMessage}
    </div>
  );
}

export default OutputPart;
