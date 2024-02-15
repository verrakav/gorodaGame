import React, { useState, useEffect } from "react";
import apiCallValidate from "../../utils/APIrelated";
import "../PlayWindow.css";
import cities from "cities.json";
// import { type } from "@testing-library/user-event/dist/type";

//alllows access the local variable here
//FIXME: somehow they still got into github
// const apiKey = process.env.REACT_APP_API_KEY;
// const apiHost = process.env.REACT_APP_API_HOST;
// const apiKey = "a56f2689e9msh374ad488f32c171p1726f9jsnc73f34e19b3f";
// const apiHost = "wft-geo-db.p.rapidapi.com";

//TODO: need some more styling with line height
// and the position of the messages (once they both show)

function OutputPart({ submittedCities, inputCity, otherMessage }) {
  console.log(submittedCities);
  // console.log(submittedCities.length);

  const [userCityMessage, setUserCityMessage] = useState("");
  const [responseCity, setResponseCity] = useState("");
  //NOTE: prints the inputCity and checks if used before
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
        let foundCity = false;
        //FIXME: JSON manipualtions
        cities.forEach((el) => {
          //both vars work
          const lastLetter = lastCity[lastCity.length - 1].toUpperCase();
          const cityName = el.name.toUpperCase().trim();
          if (
            cityName.startsWith(lastLetter) &&
            !foundCity &&
            !submittedCities.includes(cityName)
          ) {
            console.log(`found: ${cityName}`);
            foundCity = true;
            submittedCities.push(cityName);
            setResponseCity(`I say: ${cityName}`);
          }
        });
      }
      //API call to show the city on the map
    };
    manageUserCityMessage();
  }, [inputCity, submittedCities]);

  // 1 & 2 should be a separate file for convenience?

  //IMPORTANT: API check should happen when the whole word is submitted

  //API to use: https://nominatim.org/release-docs/latest/api/Overview/
  //or this: https://developers.amadeus.com/
  // or a list to search: https://rapidapi.com/collection/city-data-api

  return (
    <div
      className="output-part"
      style={{
        marginBottom: "15px",
        lineHeight: "30px",
        display: "inline",
      }}
    >
      <div className="user-city">{userCityMessage}</div>
      <div className="response-city">{responseCity}</div>
      <div className="otherMessage">{otherMessage}</div>
    </div>
  );
}

export default OutputPart;
