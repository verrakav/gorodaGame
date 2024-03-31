import { fetchResopnseCity } from "./APIrelated";
//NOTE: moved from OutputPart
export const manageUserCityMessage = (submittedCities, setUserCityMessage) => {
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
    //FIXME: xperiments
  }
};

export const manageComputerResponseCity = async (
  submittedCities,
  setComputerResponseCity,
  lastCity
) => {
  const response = await fetchResopnseCity(
    submittedCities,
    setComputerResponseCity,
    lastCity
  );
  setComputerResponseCity(response);
};

export const manageGiveUp = (
  setInputCity,
  setSubmittedCities,
  setInvalidCity,
  setScoreVar,
  setComputerResponseCity,
  scoreVar
) => {
  setInputCity("");
  setSubmittedCities([]);
  setInvalidCity("");
  setScoreVar(0);
  setComputerResponseCity("");
  alert(`Congrats! Your score is: ${scoreVar}`);
};

//generates a random location for the start of the game
export const manageRandomLocation = () => {
  let coordinates = [];
  const getCoordinates = () => {
    for (let i = 0; i < 2; i++) {
      const result = parseFloat((Math.random() * 180).toFixed(2));
      const validResult = result + 1;
      coordinates.push(validResult);
    }
    return coordinates;
  };

  return getCoordinates();
};
