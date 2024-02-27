import "./Buttons.css";

function BtnGiveUp({ handleGiveUp }) {
  return (
    <button className="btn-giveup" onClick={handleGiveUp}>
      Give Up
    </button>
  );
}

export default BtnGiveUp;
