import "./Dashboard.css";
import HeaderComponent from "./HeaderComponent";
import React from "react";
import { Card, useMantineTheme } from "@mantine/core";

// Dashboard component
const Dashboard = () => {
  return (
    <>
      <div style={{ backgroundColor: "#121927" }}>
        <HeaderComponent />
      </div>
    </>
  );
};

export default Dashboard;
