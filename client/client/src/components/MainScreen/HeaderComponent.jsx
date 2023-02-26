import Body from "./Body";
import React, { useEffect, useState } from "react";
import logoImage from "../../assets/Logo1.png";
import { Button, Input, Menu, UnstyledButton, Avatar, Tooltip} from "@mantine/core";
import { Link } from "react-router-dom";

import avatar from '../../assets/avatar.png'


//stylesheet import
import './stylesheets/Dashboard.css'

//icons import
import hotelIcon from '../../assets/icons/bed.svg'
import busIcon from '../../assets/icons/bus.svg'
import planeIcon from '../../assets/icons/plane.svg'
import passportIcon from '../../assets/icons/passport.svg'
import dashboardIcon from '../../assets/icons/dashboard.svg'
import coinsIcon from '../../assets/icons/coins.svg'


import {
  IconLayout2,
  IconCloudFog,
  IconPlus,
  IconSearch,
  IconMessageDots,
  IconBusinessplan,
  IconBell,
  IconMaximize,
} from "@tabler/icons";



export default function HeaderComponent() {
  
  
  return (
    <div style={{ backgroundColor: "#121927" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px",
          alignItems: "center"
        }}
      >
        <img src={logoImage} alt="logo" style={{ height: "50px" }} />
        <div style={{ display: "flex", gap: "20px" }}>
          
          <Menu>
            <Menu.Target>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "#07399E",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "20px",
                }}
              >
                <IconPlus size={16} color="blue" />
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item>
                <Input
                  placeholder="Search..."
                  variant="filled"
                  icon={<IconSearch />}
                  style={{ width: "300px" }}
                />
              </Menu.Item>

              {/* Other items ... */}
            </Menu.Dropdown>
          </Menu>
          <UnstyledButton className='headerIcon'><IconMessageDots /></UnstyledButton>
          <UnstyledButton className='headerIcon'><IconBell /></UnstyledButton>
          <UnstyledButton className='headerIcon'><IconMaximize /></UnstyledButton>
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
      </div>
      <div style={{ display: "flex", height: "calc(100vh - 70px)" }}>
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
          <div style={{
          display:'flex',
          height: '50%',
          position: "relative",
          flexDirection: "column",
          alignItems: 'center',
        }}>
            
          <Tooltip label="Dashboard" color="dark" position="right" transition="scale" transitionDuration={300}>
            
          <Link path="/home" style={{marginTop: "auto", marginBottom: "auto"}}>
              <div style={{
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius:'11px',
          display: 'flex',
              }}>
            <img src={dashboardIcon}/>
              </div>
          </Link>
            </Tooltip>
          <Tooltip label="Passports & Visas" color="dark" position="right" transition="scale" transitionDuration={300}>
          <Link style={{marginTop: "auto", marginBottom: "auto"}} path="/home">
            <img src={passportIcon} className='navbar-icon-visa'/>
          </Link>
            </Tooltip>
          <Tooltip label="Transport" color="dark" position="right" transition="scale" transitionDuration={300}>
          <Link style={{marginTop: "auto", marginBottom: "auto"}} path="/home">
            <img src={busIcon} className='navbar-icon-bus'/>
          </Link>
            </Tooltip>
          <Tooltip label="Hotel & Bookings" color="dark" position="right" transition="scale" transitionDuration={300}>
          <Link style={{marginTop: "auto", marginBottom: "auto"}} path="/home">
            <img src={hotelIcon}/>
          </Link>
            </Tooltip>
          <Tooltip label="Flights & Tickets" color="dark" position="right" transition="scale" transitionDuration={300}>
          <Link style={{marginTop: "auto", marginBottom: "auto"}} path="/home">
            <img src={planeIcon}/>
          </Link>
            </Tooltip>
          <Tooltip label="Accounts & Ledger" color="dark" position="right" transition="scale" transitionDuration={300}>
          <Link style={{marginTop: "auto", marginBottom: "auto"}} path="/home">
            <img src={coinsIcon}/>
          </Link>
            </Tooltip>
            </div>

            <div
  style={{
    position: "absolute",
    bottom: "0",
    display: 'flex',
    justifyContent: 'flex-start',
    width: "100%",
  }}
>
  <Avatar
    component="a"
    target="_blank"
    variant="outline"
    radius="xl"
    size="lg"
    color="green"
    src={avatar}
    style={{ marginLeft: '20px', marginBottom: '20px', }} // Add this line
    
  />
</div>

        </div>

        <Body />
      </div>
      </div>
  );
}