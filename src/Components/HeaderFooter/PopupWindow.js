import React, { useState } from "react";
import Popup from "reactjs-popup";
//library docs: https://react-popup.elazizi.com/controlled-popup/
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

function PopupWindow() {
  const [open, setOpen] = useState(false);
  const closePop = () => {
    setOpen(false);
  };
  return (
    //library component with some built-in stuff, see config: https://minutemailer.github.io/react-popup/
    <Popup
      open={open}
      onClick={closePop}
      trigger={
        <a href="#" className="popup-trigger">
          How to play?
        </a>
      }
    >
      {/*NOTE: this is function as a cild (render prop) 0_o help */}
      {/* anonymous function passed as a prop with the argument that is an action(funuctionality)
here close comes from the library, right? */}
      {(close) => (
        <p className="popup-window">
          <CIcon
            icon={icon.cilX}
            className="icon"
            onClick={() => {
              close();
            }}
          />
          The game is based on city names! <br />
          If the first player says: Melbourne, the second player should think of
          a city starting with an 'E' - Edinburgh - then the next should start
          with an 'H'!
        </p>
      )}
    </Popup>
  );
}

export default PopupWindow;
