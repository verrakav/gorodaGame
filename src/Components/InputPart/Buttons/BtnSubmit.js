import React from "react";
import "./Buttons.css";

function BtnSubmit({ onClick }) {
  return (
    <button className="btn-submit" onClick={onClick}>
      Gorod{" "}
    </button>
  );
}

export default BtnSubmit;
