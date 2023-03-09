import "./stylesheets/Dashboard.css";
import Body from "./Body";
import MenuItems from "./MenuItems";
import NavbarItems from "./NavbarItems";
import React from "react";
import logoImage from "../../assets/Logo1.png";

export default function HeaderComponent() {
  return (
 
      <div style={{ backgroundColor: "#121927" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px",
          alignItems: "center",
        }}
      >
        <img src={logoImage} alt="logo" style={{ height: "50px" }} />
        <MenuItems />
      </div>
      <div
        style={{
          display: "flex",
          height: "calc(100vh - 80px)",
          overflowY: "hidden",
        }}
      >
        <NavbarItems />
        {/* Interactive Component */}
        <Body />
      </div>
    </div>
  );
}
