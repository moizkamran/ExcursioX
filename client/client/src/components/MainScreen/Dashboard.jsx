import AddProperty from "../Pages/Hotel & Property/AddProperty/AddProperty";
import Body from "./Body";
import HeaderComponent from "./HeaderComponent";
import MenuItems from "./MenuItems";
import NavbarItems from "./NavbarItems";
import React from "react";
import logoImage from "../../assets/BookingSouqFavi.svg";
import { ScrollArea } from "@mantine/core";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";

// Dashboard component
const Dashboard = () => {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
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
          >  <ScrollArea.Autosize mah={"100%"} mx="auto">
              <Outlet />
            </ScrollArea.Autosize>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

export function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link className={isActive ? "active" : ""} to={to} {...props}>
      {children}
    </Link>
  );
}
