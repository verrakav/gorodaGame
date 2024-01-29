import React from "react";
import "./HeaderRules.css";
import PopupWindow from "./PopupWindow";
// import Popup from "reactjs-popup";
// import CIcon from "@coreui/icons-react";
// import * as icon from "@coreui/icons";

//TODO: add the popup window with the rules
//at the bot of the page (don't forget the styling)
function HeaderRules() {
  return (
    <header className="header-rules">
      <PopupWindow />
      <span className="centre">Let's Play Goroda!</span>
    </header>
  );
}

export default HeaderRules;
