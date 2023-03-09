import React from "react";
import {
    Button,
    Input,
    Menu,
    UnstyledButton,
  } from "@mantine/core";
  import "./stylesheets/Dashboard.css";
  import {
    IconCloudFog,
    IconPlus,
    IconSearch,
    IconMessageDots,
    IconBell,
    IconMaximize,
    IconWallet,
  } from "@tabler/icons";

const MenuItems = () => {
  return (
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