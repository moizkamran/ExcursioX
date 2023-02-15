import React from "react";
import './forgot-password.css'

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn">Close</button>
        {props.children}
      </div>
    </div>
  ) : null;
}

export default Popup