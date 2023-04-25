import "./stylesheets/Dashboard.css";
import Hotel from "../Pages/Hotel & Property/Hotel";
import React from "react";
import { CustomLink } from "./Dashboard";

import {
  Button,
  Input,
  Menu,
  UnstyledButton,
} from "@mantine/core";
import {
  IconCloudFog,
  IconPlus,
  IconSearch,
  IconMessageDots,
  IconBell,
  IconMaximize,
  IconWallet,
} from "@tabler/icons";
import { Link } from "react-router-dom";
const MenuItems = () => {
  return (

    <div style={{ display: "flex", gap: "20px" }}>
      <Button color="blue" style={{ height: "40px" }} component={Link} to={'/new/package-booking'}>
        <IconPlus size={20} />
        <span style={{ marginLeft: "10px" }}>New Booking</span>
      </Button>
      <UnstyledButton className="headerIcon">
        <IconMessageDots />
      </UnstyledButton>
      <UnstyledButton className="headerIcon">
        <IconBell />
      </UnstyledButton>
      <UnstyledButton className="headerIcon">
        <IconMaximize />
      </UnstyledButton>
      <UnstyledButton className="headerIcon">
        <IconWallet />
      </UnstyledButton>
      <div
        style={{
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          background: "#2A303D",
          padding: "10px",
          fontFamily: "'Fredoka', sans-serif",
        }}
      >
        <IconCloudFog size={20} color={"#74FF79"} />
        <span style={{ color: "white", marginLeft: "10px" }}>
          Connected
        </span>
      </div>
    </div>
  )
}

export default MenuItems