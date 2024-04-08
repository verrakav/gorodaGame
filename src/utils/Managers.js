import { jsonManipulations } from "./APIrelated";
// import { fetchUserCity } from "../utils/APIrelated";

//NOTE: moved from OutputPart
export const manageUserCityMessage = (
  submittedCities,
  // setSubmittedCities,
  setUserCityMessage,
  setComputerResponseCity,
  setCenter
  // inputCity,
  // setInvalidCity
) => {
  // fetchUserCity(inputCity, setSubmittedCities, setInvalidCity);

  //store here for convenience
  const lastCityIdx = submittedCities.length - 1;
  const lastCity = submittedCities[submittedCities.length - 1];
  const hasCityBeenUsed =
    submittedCities.length > 1 &&
    submittedCities.includes(lastCity) &&
    submittedCities.indexOf(lastCity) !== lastCityIdx;

  if (submittedCities.length === 0) {
    setUserCityMessage(`You start :)`);
  } else if (hasCityBeenUsed) {
    setUserCityMessage(`${lastCity.toUpperCase()} has been used before`);
  } else {
    setUserCityMessage(`You say: ${lastCity.toUpperCase()}`);
    jsonManipulations(
      submittedCities,
      setComputerResponseCity,
      lastCity,
      setCenter
    );
  }
  return { hasCityBeenUsed };
};

// export const handleScore = (
//   submittedCities,
//   setUserCityMessage,
//   setComputerResponseCity,
//   setCenter,
//   inputCity,
//   scoreVar, setScoreVar,
//   setInvalidCity
// ) => {
//   const { hasCityBeenUsed } = manageUserCityMessage(
//     submittedCities,
//     setUserCityMessage,
//     setComputerResponseCity,
//     setCenter,
//     inputCity,
//     setInvalidCity
//   );

//   if (!hasCityBeenUsed) {
//     setScoreVar(prevScore => prevScore + 5);
//   } else {
//     setScoreVar(scoreVar);
//   }
// };

export const manageGiveUp = (
  setInputCity,
  setSubmittedCities,
  setInvalidCity,
  setScoreVar,
  setComputerResponseCity,
  scoreVar,
  setCenter
) => {
  setInputCity("");
  setSubmittedCities([]);
  setInvalidCity("");
  setScoreVar(0);
  setComputerResponseCity("");
  alert(`Congrats! Your score is: ${scoreVar}`);
  setCenter([50.1109, 8.6821]);
};
