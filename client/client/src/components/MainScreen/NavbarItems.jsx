import "./stylesheets/Dashboard.css";
import React, { useState } from "react";
import avatar from "../../assets/avatar.png";
import busIcon from "../../assets/icons/bus.svg";
import coinsIcon from "../../assets/icons/coins.svg";
import dashboardIcon from "../../assets/icons/dashboard.svg";
import hotelIcon from "../../assets/icons/bed.svg";
import passportIcon from "../../assets/icons/passport.svg";
import planeIcon from "../../assets/icons/plane.svg";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { CustomLink } from "./Dashboard";

import {
  IconMoon,
  IconSun,
  IconMoonStars,
  IconActivityHeartbeat,
  IconSettings,
  IconBinaryTree,
  IconTicket,
  IconLogout,
  IconLayoutDashboard,
  IconEPassport,
  IconArrowRight,
  IconChevronRight,
} from "@tabler/icons";
import {
  ActionIcon,
  Avatar,
  Button,
  Flex,
  HoverCard,
  Switch,
  Text,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";


function NavbarItems() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };

  const [open, setOpen] = useState(true);

  return (
    <div
      style={{
        width: open ? "15%" : "5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        alignItems: "center",
        color: "white",
        transitionDuration: "0.5s",
        fontSize: "1.2rem",
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: 10}}>
  <div style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
    <IconLayoutDashboard  size={'2.5rem'} color="white" />
    <Text>Dashboard</Text>
  </div>
  <div style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
    <IconEPassport  size={'2.5rem'} color="white" />
    <Text>Visas & Passport</Text>
  </div>
</div>

        <ActionIcon size="lg" radius="xl" variant="filled" color="dark" style={{position: 'fixed', bottom: 0}} onClick={() => setOpen(!open)}><IconChevronRight /></ActionIcon>
    </div>
  );
}

export default NavbarItems;
