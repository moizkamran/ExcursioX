import "./stylesheets/Dashboard.css";
import React, { useState } from "react";
import avatar from "../../assets/avatar.png";
import busIcon from "../../assets/icons/bus.svg";
import coinsIcon from "../../assets/icons/coins.svg";
import dashboardIcon from "../../assets/icons/dashboard.svg";
import hotelIcon from "../../assets/icons/bed.svg";
import passportIcon from "../../assets/icons/passport.svg";
import planeIcon from "../../assets/icons/plane.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
  IconBusStop,
  IconBed,
  IconPlaneTilt,
  IconCoin,
  IconCircle,
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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Slicers/userSlice";
import newRequest from "../../utils/newRequest";


function NavbarItems() {
  const [open, setOpen] = useState(false);

  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      dispatch(logout());
      await newRequest.post("/auth/logout");
      localStorage.removeItem("currentUser");
      navigate("/enterprise");
    } catch (error) {
      console.log(error);
    }
  };


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
      {/* {open && (
        <div style={{textAlign: 'left', display: 'flex', alignItems: 'flex-start'}}> 
            <Text c="dimmed">Menu</Text>
        </div>
      )} */}

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: 10}}>
<CustomLink to="/">
  <div style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', padding: 8, borderRadius: 10 }} className={open ? 'button-Nav' : 'button-Nav-Coll'}> 
    <IconLayoutDashboard  size={'2.5rem'} color="white" />
    <Text className="slide-in-left" style={{display: !open && 'none', transformOrigin: 'left'}}>Dashboard</Text>
  </div>
</CustomLink>
  <div style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', padding: 8, borderRadius: 10 }} className={open ? 'button-Nav' : 'button-Nav-Coll'}> 
    <IconEPassport  size={'2.5rem'} color="white" />
    <Text className="slide-in-left" style={{display: !open && 'none', transformOrigin: 'left'}}>Passports</Text>
  </div>
  <div style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', padding: 8, borderRadius: 10 }} className={open ? 'button-Nav' : 'button-Nav-Coll'}> 
    <IconBusStop  size={'2.5rem'} color="white" />
    <Text className="slide-in-left" style={{display: !open && 'none', transformOrigin: 'left'}}>Transport</Text>
  </div>
  <CustomLink to="/hotel">

  <div style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', padding: 8, borderRadius: 10 }} className={open ? 'button-Nav' : 'button-Nav-Coll'}> 
    <IconBed  size={'2.5rem'} color="white" />
    <Text className="slide-in-left" style={{display: !open && 'none', transformOrigin: 'left'}}>Hotel</Text>
  </div>
  
  </CustomLink>
  <div style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', padding: 8, borderRadius: 10 }} className={open ? 'button-Nav' : 'button-Nav-Coll'}> 
    <IconPlaneTilt  size={'2.5rem'} color="white" />
    <Text style={{display: !open && 'none', transformOrigin: 'left'}} className="slide-in-left">Flights</Text>
  </div>
  <div style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', padding: 8, borderRadius: 10 }} className={open ? 'button-Nav' : 'button-Nav-Coll'}> 
    <IconCoin  size={'2.5rem'} color="white" />
    <Text className="slide-in-left" style={{display: !open && 'none', transformOrigin: 'left'}}>Finance</Text>
  </div>
</div>

<HoverCard shadow="md">
          <HoverCard.Target>
            <Flex  style={{ cursor: "pointer", position: "absolute", bottom: 20, gap: 10}}>

            <Avatar
              onClick={() => setUserOpened((o) => !o)}
              component="a"
              target="_blank"
              variant="outline"
              style={{transitionDuration: "0.5s", transition: 'position'}}
              radius="xl"
              size="lg"
              color="green"
              src={avatar}
              />
              {open && (<div className="animate-text">
              <Text fz={16} className="animate-text">Wassup, Moiz!</Text>
              <Text fz={12} color="dimmed">Developer</Text>
              <Flex direction={'row'} gap={5} align={'center'} mt={5} >
              <div className="glowing-circle"></div> <Text fz={14} style={{transformOrigin: 'left'}}>Offline</Text>
              </Flex>
              </div>)}
            </Flex>
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
                <Text fw={400} c="black">{user.firstName} {user.lastName}</Text>
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
              <Text style={{ flex: 1 }} c="black">Dark Mode</Text>
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
              DevF: {user._id}
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
        <ActionIcon 
  size="lg" 
  radius="xl" 
  variant="filled" 
  style={{
    position: 'absolute', 
    top: 0, 
    backgroundColor: 'black',
    right: 0,
    transition: 'transform 0.2s ease-in-out',
    transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
  }} 
  onClick={() => setOpen(!open)}
>
  <IconChevronRight/>
</ActionIcon>

    </div>
  );
}

export default NavbarItems;
