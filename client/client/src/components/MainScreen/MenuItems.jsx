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
      <Link to="/new/package-booking">
      <button class="continue-application">
    <div>
        <div class="pencil"></div>
        <div class="folder">
            <div class="top">
                <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                </svg>
            </div>
            <div class="paper"></div>
        </div>
    </div>
        New Booking
    </button>
    </Link>
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