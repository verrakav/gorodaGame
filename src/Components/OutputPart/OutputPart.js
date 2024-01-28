import React, { useState, useEffect } from "react";

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
  //conditions: starts with the last letter of inputCity
  //make sure the next inputCity starts with the last let of responseCity
  // 1 & 2 should be a separate file for convenience?

  return (
    <div className="output-part">
      {userCityMessage}
      {responseCity}
    </div>
  );
}

export default OutputPart;
