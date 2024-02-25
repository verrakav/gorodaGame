import { jsonManipulations } from "./APIrelated";
//NOTE: moved from OutputPart
const manageUserCityMessage = (
  submittedCities,
  setUserCityMessage,
  setComputerResponseCity
) => {
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
    jsonManipulations(submittedCities, setComputerResponseCity, lastCity);
  }
};

export default manageUserCityMessage;
