import "./InputPart.css";
import ScoreKeeper from "./ScoreKeeper/ScoreKeeper";
import BtnSubmit from "./Buttons/BtnSubmit";
import BtnGiveUp from "./Buttons/BtnGiveUp";

function InputPart({
  inputCity,
  setInputCity,
  handleUserCity,
  handleInputChange,
  setSubmittedCities,
  setInvalidCity,
  setComputerResponseCity,
  scoreVar,
  setScoreVar,
}) {
  const removeInvalidCityMessage = () => setInvalidCity("");

  const handleGiveUp = () => {
    setInputCity("");
    setSubmittedCities([]);
    setInvalidCity("");
    setScoreVar(0);
    setComputerResponseCity("");
    alert(`Congrats! Your score is: ${scoreVar}`);
  };

  return (
    <div className="input-part">
      <ScoreKeeper scoreVar={scoreVar} />
      <form onSubmit={handleUserCity}>
        <input
          className="input-field"
          type="text"
          onChange={handleInputChange}
          value={inputCity}
          placeholder="Name a city"
          onClick={removeInvalidCityMessage}></input>
        <BtnSubmit handleUserCity={handleUserCity} />
      </form>
      <BtnGiveUp handleGiveUp={handleGiveUp} />
    </div>
  );
}

export default InputPart;
