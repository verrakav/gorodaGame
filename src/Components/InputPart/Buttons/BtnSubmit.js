import "./Buttons.css";

// const apiKey = "a56f2689e9msh374ad488f32c171p1726f9jsnc73f34e19b3f";
// const apiHost = "wft-geo-db.p.rapidapi.com";

function BtnSubmit({ handleUserCities }) {
  return (
    <button className="btn-submit" onClick={handleUserCities}>
      Gorod
    </button>
  );
}

export default BtnSubmit;
