import "./stylesheets/Dashboard.css";
import React from "react";
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

import {
  IconMoon,
  IconSun,
  IconMoonStars,
  IconActivityHeartbeat,
  IconSettings,
  IconBinaryTree,
  IconTicket,
  IconLogout,
} from "@tabler/icons";
import {
  Avatar,
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
  return (
    <div
      style={{
        width: "5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "50%",
          position: "relative",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Tooltip
          label="Dashboard"
          color="dark"
          position="right"
          transition="scale"
          transitionDuration={300}
        >
          <Link
            path="/home"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "11px",
                display: "flex",
              }}
            >
              <img src={dashboardIcon} />
            </div>
          </Link>
        </Tooltip>
        <Tooltip
          label="Passports & Visas"
          color="dark"
          position="right"
          transition="scale"
          transitionDuration={300}
        >
          <Link
            style={{ marginTop: "auto", marginBottom: "auto" }}
            path="/home"
          >
            <img src={passportIcon} className="navbar-icon-visa" />
          </Link>
        </Tooltip>
        <Tooltip
          label="Transport"
          color="dark"
          position="right"
          transition="scale"
          transitionDuration={300}
        >
          <Link
            style={{ marginTop: "auto", marginBottom: "auto" }}
            path="/home"
          >
            <img src={busIcon} className="navbar-icon-bus" />
          </Link>
        </Tooltip>
        <Tooltip
          label="Hotel & Bookings"
          color="dark"
          position="right"
          transition="scale"
          transitionDuration={300}
        >
          <Link
            style={{ marginTop: "auto", marginBottom: "auto" }}
            path="/hotel"
          >
            <img src={hotelIcon} />
          </Link>
        </Tooltip>
        <Tooltip
          label="Flights & Tickets"
          color="dark"
          position="right"
          transition="scale"
          transitionDuration={300}
        >
          <Link
            style={{ marginTop: "auto", marginBottom: "auto" }}
            path="/home"
          >
            <img src={planeIcon} />
          </Link>
        </Tooltip>
        <Tooltip
          label="Accounts & Ledger"
          color="dark"
          position="right"
          transition="scale"
          transitionDuration={300}
        >
          <Link
            style={{ marginTop: "auto", marginBottom: "auto" }}
            path="/home"
          >
            <img src={coinsIcon} />
          </Link>
        </Tooltip>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "0",
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        {/* Logout and Avatar Component*/}

        <HoverCard shadow="md">
          <HoverCard.Target>
            <Avatar
              onClick={() => setUserOpened((o) => !o)}
              component="a"
              target="_blank"
              variant="outline"
              radius="xl"
              size="lg"
              color="green"
              src={avatar}
              style={{ marginLeft: "20px", marginBottom: "20px" }}
            />
          </HoverCard.Target>
          <HoverCard.Dropdown
            style={{
              border: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: 20,
              }}
            >
              <Avatar radius="xl" size="lg" src={avatar} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10,
                }}
              >
                <Text fw={700}>Abdulmoiz Kamran</Text>
                {user && (
                  <Text size="sm" color="dimmed">
                    {user.email}
                  </Text>
                )}
              </div>
            </div>
            <div
              style={{
                borderTop: "1px solid #E2E8F0",
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding: "20px 0",
              }}
            >
              <IconMoon size={25} color="black" style={{ marginRight: 10 }} />
              <Text style={{ flex: 1 }}>Dark Mode</Text>
              <Switch
                color="dark"
                size="md"
                onLabel={<IconSun size={16} stroke={2.5} />}
                offLabel={<IconMoonStars size={16} stroke={2.5} />}
                style={{ marginLeft: "auto" }}
              />
            </div>

            <UnstyledButton
              className="userHover"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding: "10px 0",
              }}
            >
              <IconActivityHeartbeat size={25} style={{ marginRight: 10 }} />
              <Text style={{ flex: 1 }}>Activity Log</Text>
            </UnstyledButton>

            <UnstyledButton
              className="userHover"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding: "10px 0",
              }}
            >
              <IconSettings size={25} style={{ marginRight: 10 }} />
              <Text style={{ flex: 1 }}>Settings</Text>
            </UnstyledButton>

            <UnstyledButton
              className="userHover"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding: "10px 0",
              }}
            >
              <IconBinaryTree size={25} style={{ marginRight: 10 }} />
              <Text style={{ flex: 1 }}>HR System</Text>
            </UnstyledButton>

            <UnstyledButton
              className="userHover"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding: "10px 0",
              }}
            >
              <IconTicket size={25} style={{ marginRight: 10 }} />
              <Text style={{ flex: 1 }}>Helpdesk</Text>
            </UnstyledButton>

            <div
              style={{
                borderTop: "1px solid #E2E8F0",
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding: "15px 0",
              }}
            >
              <UnstyledButton
                className="userHoverRed"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0",
                }}
                onClick={handleLogout}
              >
                <IconLogout size={25} style={{ marginRight: 10 }} />
                <Text style={{ flex: 1 }}>Logout</Text>
              </UnstyledButton>
            </div>
            <Text size="xs" color="dimmed">
              Version 1.2 Alpha Phase NFR
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </div>
    </div>
  );
}

export default NavbarItems;
