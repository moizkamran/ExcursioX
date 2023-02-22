import Body from "./Body";
import React, { useEffect, useState } from "react";
import logoImage from "../../assets/Logo1.png";
import { Button, Input, Menu } from "@mantine/core";
import { Link } from "react-router-dom";

import {
  IconLayout2,
  IconBroadcast,
  IconPlus,
  IconSearch,
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
                  color: "blue",
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
          <div
            style={{
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              background: "gray",
              padding: "10px",
            }}
          >
            <IconBroadcast size={20} color={"green"} />
            <span style={{ color: "white", marginLeft: "10px" }}>
              connection Established
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
            <IconLayout2 size={40} strokeWidth={2} color="white" />
          </Link>
          <Link path="/home">
            <IconLayout2 size={40} strokeWidth={2} color="white" />
          </Link>
          <Link path="/home">
            <IconLayout2 size={40} strokeWidth={2} color="white" />
          </Link>
          <Link path="/home">
            <IconLayout2 size={40} strokeWidth={2} color="white" />
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