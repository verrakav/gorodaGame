import { fetchUserCity } from "./APIrelated";

const exManageUserCityMessage = (
  submittedCities,
  setUserCityMessage,
  inputCity,
  cityInfo
) => {
  //store here for convenience
  // const lastCityIdx = submittedCities.length - 1;
  // const lastCity = submittedCities[submittedCities.length - 1];
  // console.log(lastCityIdx, lastCity, inputCity);
  const name = cityInfo.name;
  // const hasCityBeenUsed =
  //   submittedCities.length > 1 &&
  //   submittedCities.includes(lastCity) &&
  //   submittedCities.indexOf(lastCity) !== lastCityIdx;

  if (name) {
    setUserCityMessage(`You start :) ${name}`);
  }
  // else if (hasCityBeenUsed) {
  //   setUserCityMessage(`${lastCity.toUpperCase()} has been used before`);
  // } else {
  //   // console.log(result);
  //   setUserCityMessage(`You say: ${lastCity.toUpperCase()}`);
  // }
};
export const manageUserCityMessage = async (
  submittedCities,
  setUserCityMessage,
  inputCity
) => {
  const cityInfo = await fetchUserCity(
    submittedCities,
    setUserCityMessage,
    inputCity
  );
  exManageUserCityMessage(cityInfo);
};
//doesn't work
export const manageComputerResponseCity = async (
  submittedCities,
  setComputerResponseCity,
  inputCity
) => {
  //will probably be an obj
  // const response = await fetchResopnseCity(
  //   submittedCities,
  //   setComputerResponseCity,
  //   inputCity
  // );
  // console.log(response);
  // setComputerResponseCity(response.compCityName);
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
// export const manageRandomLocation = () => {
//   let coordinates = [];
//   const getCoordinates = () => {
//     for (let i = 0; i < 2; i++) {
//       const result = parseFloat((Math.random() * 180).toFixed(2));
//       const validResult = result + 1;
//       coordinates.push(validResult);
//     }
//     return coordinates;
//   };

//   return getCoordinates();
// };
