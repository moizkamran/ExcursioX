import "./stylesheets/Dashboard.css";
import AddBooking from "../Pages/Hotel & Property/AddBooking/AddBooking";
import Body from "./Body";
import MenuItems from "./MenuItems";
import NavbarItems from "./NavbarItems";
import React from "react";
import logoImage from "../../assets/Logo1.png";
import { AddRoom } from "../Pages/Hotel & Property/AddRoom/AddRoom";
import { ScrollArea } from "@mantine/core";

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
        <div
        style={{
          borderRadius: "50px 0 0 0",
          backgroundColor: "white",
          marginLeft: "0px",
          padding: "20px",
          flex: 1,
        }}
      >
        <ScrollArea.Autosize mah={"100%"} mx="auto">
        <AddRoom/>
        </ScrollArea.Autosize> </div>
      </div>
    </div>
  );
}
