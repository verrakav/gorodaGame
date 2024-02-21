import React, { useState, useEffect } from "react";
import apiCallValidate from "../../utils/APIrelated";
import "../PlayWindow.css";
import cities from "cities.json";

//alllows access the local variable here
//FIXME: somehow they still got into github
// const apiKey = process.env.REACT_APP_API_KEY;
// const apiHost = process.env.REACT_APP_API_HOST;
// const apiKey = "a56f2689e9msh374ad488f32c171p1726f9jsnc73f34e19b3f";
// const apiHost = "wft-geo-db.p.rapidapi.com";

const manageUserCityMessage = (submittedCities, setUserCityMessage, setResponseCity) => {
  //store here for convenience
  const lastIdx = submittedCities.length - 1;
  const lastCity = submittedCities[submittedCities.length - 1];

  const hasCityBeenUsed = submittedCities.length > 1 &&
      submittedCities.includes(lastCity) &&
      submittedCities.indexOf(lastCity) !== lastIdx;

  if (submittedCities.length === 0) {
    setUserCityMessage(`You start :)`);
  } else if (hasCityBeenUsed) {
    setUserCityMessage(`${lastCity} has been used before`);
  } else {
    setUserCityMessage(`You say: ${lastCity.toUpperCase()}`);
    jsonManipulations(submittedCities, setResponseCity, lastCity);
  }
};

const jsonManipulations = (submittedCities, setResponseCity, lastCity) => {
  let foundCity = false;
  cities.forEach((el) => {
    //both vars work
    const lastLetter = lastCity[lastCity.length - 1].toUpperCase();
    const cityName = el.name.toUpperCase();
    if (
        cityName.startsWith(lastLetter) &&
        !foundCity &&
        !submittedCities.includes(cityName)
        //FIXME: trying to add more logic here
        //&& !cityName.split(" ").includes("city")
    ) {
      console.log(`found: ${cityName}`);
      foundCity = true;
      submittedCities.push(cityName);
      setResponseCity(`I say: ${cityName}`);
      //API call to show the city on the map
    }
  });
}

function OutputPart({
  submittedCities,
  inputCity,
  otherMessage,
  responseCity,
  setResponseCity,
}) {
  console.log(submittedCities);
  // console.log(submittedCities.length);

  const [userCityMessage, setUserCityMessage] = useState("");
  //NOTE: does the core game logic
  useEffect(() => {
    manageUserCityMessage(submittedCities, setUserCityMessage, setResponseCity);
  }, [inputCity, submittedCities]);

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
