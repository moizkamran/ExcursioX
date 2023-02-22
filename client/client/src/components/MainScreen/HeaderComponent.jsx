import Body from "./Body";
import React, { useEffect, useState } from "react";
import logoImage from "../../assets/Logo1.png";
import { Button, Input, Menu, UnstyledButton } from "@mantine/core";
import { Link } from "react-router-dom";


//stylesheet import
import './stylesheets/Dashboard.css'

//icons import
import hotelIcon from '../../assets/icons/bed.svg'
import busIcon from '../../assets/icons/bus.svg'
import planeIcon from '../../assets/icons/plane.svg'
import passportIcon from '../../assets/icons/passport.svg'

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
          padding: "20px",
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
          <Link path="/home">
            <IconLayout2 size={40} strokeWidth={2} color="white" />
          </Link>
          <Link path="/home">
            <img src={passportIcon}/>
          </Link>
          <Link path="/home">
            <img src={busIcon}/>
          </Link>
          <Link path="/home">
            <img src={hotelIcon}/>
          </Link>
          <Link path="/home">
            <img src={planeIcon}/>
          </Link>
          <Link path="/home">
            <IconBusinessplan size={40} strokeWidth={2} color="white" />
          </Link>

          <div
            style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Link
              style={{
                marginBottom: "50px",
              }}
              path="/home"
            >
              <IconLayout2 size={40} strokeWidth={2} color="white" />
            </Link>
          </div>
        </div>

        <Body />
      </div>
      </div>
  );
}