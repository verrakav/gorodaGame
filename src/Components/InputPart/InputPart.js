import "./InputPart.css";
import ScoreKeeper from "./ScoreKeeper/ScoreKeeper";
import BtnSubmit from "./Buttons/BtnSubmit";
import BtnGiveUp from "./Buttons/BtnGiveUp";

function InputPart({
  inputCity,
  handleUserCity,
  handleInputChange,
  removeInvalidCityMessage,
  handleGiveUp,
  scoreVar
}) {
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
