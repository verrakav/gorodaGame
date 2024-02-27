import { useState, useEffect } from "react";
import "../PlayWindow.css";
import manageUserCityMessage from "../../utils/Helpers";
// import fetchCity from "../../utils/APIrelated";

function OutputPart({
  submittedCities,
  invalidCity,
  computerResponseCity,
  setComputerResponseCity,
}) {
  // console.log(submittedCities);
  // console.log(submittedCities.length);

  const [userCityMessage, setUserCityMessage] = useState("");

  useEffect(() => {
    //NOTE: does the core game logic
    manageUserCityMessage(
      submittedCities,
      setUserCityMessage,
      setComputerResponseCity
    );
  }, [submittedCities]);

  return (
    <div className="output-part">
      <div>{userCityMessage}</div>
      <div>{computerResponseCity}</div>
      <div>{invalidCity}</div>
    </div>
  );
}

export default OutputPart;
