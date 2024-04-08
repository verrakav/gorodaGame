import "./Buttons.css";

function BtnSubmit({ handleUserCity }) {
  return (
    <button
      className="btn-submit"
      onClick={handleUserCity}
    >
      Gorod
    </button>
  );
}

export default BtnSubmit;
