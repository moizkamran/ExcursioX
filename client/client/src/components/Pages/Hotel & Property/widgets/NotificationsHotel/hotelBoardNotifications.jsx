import React from "react";
import PropTypes from "prop-types";
import "./HBNotifications.css";
import { Button } from "@mantine/core";

function HBNotifications(props) {
    const {
      icon,
      title,
      subtitle,
      backgroundColor,
      buttonBackgroundColor,
      textColor,
      onClick // Destructure the onClick prop
    } = props;
  
    const style = {
      backgroundColor: backgroundColor,
      color: textColor
    };
  
  
    const buttonStyle = {
      backgroundColor: buttonBackgroundColor
    };
  
    return (
      <div className="hb-notifications-container" style={style}>
        <div className="hb-notifications-icon-container">
          <div className="hb-notifications-icon">
            {icon}
          </div>
        </div>
        <div className="hb-notifications-details-container">
          <div className="hb-notifications-title">
            <span>{title}</span>
          </div>
          <div className="hb-notifications-subtitle">
            <div className="hb-notifications-subtitle-text">
              <span>{subtitle}</span>
            </div>
            <div>
              <Button onClick={onClick} className="hb-notifications-view-button" style={buttonStyle}>View</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  HBNotifications.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    iconSrc: PropTypes.string.isRequired,
  };
  
  export default HBNotifications;
