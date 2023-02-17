import "./forgot-password.css";
import React from "react";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  ) : null;
}

export default Popup;
