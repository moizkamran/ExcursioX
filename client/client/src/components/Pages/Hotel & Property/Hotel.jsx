import BarChart from "../../Graphs/BarChart";
import HBNotification from "./widgets/NotificationsHotel/hotelBoardNotifications";
import LoyalCustomer from "./widgets/LoyaltyWidget/LoyaltyWidget";
import MenuItems from "../../MainScreen/MenuItems";
import NavbarItems from "../../MainScreen/NavbarItems";
import React, { useState } from "react";
import logoImage from "../../..//assets/Logo1.png";
import { Button, Card, Text, Title } from "@mantine/core";
import { Bar, Doughnut } from "react-chartjs-2";
import { Navigate, useNavigate } from "react-router-dom";
import { UserData } from "../../../FakeData/Data";

import {
  IconAlertCircle,
  IconArmchair,
  IconBroadcast,
  IconBucketDroplet,
  IconBuildingEstate,
  IconCurrencyDollar,
  IconGhost2,
  IconNewSection,
} from "@tabler/icons";

const Hotel = () => {
  const navigate = useNavigate();

  function handleAddPropertyClick() {
    navigate("/addproperty");
  }

  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  const chartData = {
    labels: ["Out of Order", "Off Market", "Occupancy", "Vacancy"],
    datasets: [
      {
        label: "Yesterday",
        backgroundColor: "#8F00FF",
        hoverBackgroundColor: "#BF6EFE",
        data: [
          UserData[0].outOfOrder,
          UserData[0].offMarket,
          UserData[0].occupancy,
          UserData[0].vacancy,
        ],
      },
      {
        label: "Recent",
        backgroundColor: "#6EB0FE",
        hoverBackgroundColor: "#3782DB",
        data: [
          UserData[1].outOfOrder,
          UserData[1].offMarket,
          UserData[1].occupancy,
          UserData[1].vacancy,
        ],
      },
    ],
  };

  const optionsBar = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 10,
      },
    },
    barThickness: 35, // set the thickness of each bar to 25 pixels
  };

  {
    /*Doughnut Chart*/
  }

  const doughData = {
    labels: ["Checked-in", "Checked-out", "Confirmed"],
    datasets: [
      {
        label: "Reservations",
        backgroundColor: ["#FFFFFF", "#7A80B4", "#002162"],
        hoverBackgroundColor: "#07399E",
        borderWidth: 0,
        stroke: 0,
        data: [
          UserData[2].checkins,
          UserData[2].checkouts,
          UserData[2].confirmed,
        ],
      },
    ],
  };

  const optionsDough = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false, // set display to false to disable the legend
      },
    },
  };

  return (
    <>
      <div
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text style={{ marginBottom: 10 }}>Home {">"} Hotel Board</Text>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Title fw="xl" style={{ marginRight: "auto" }}>
            Hotel Board
          </Title>
          <Title
            style={{ fontFamily: "Fredoka", fontWeight: 400, fontSize: 20 }}
          >
            {formattedDate}
          </Title>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          {/* Bar Chart */}
          <div
            style={{
              backgroundColor: "#F8F8F8",
              borderRadius: 20,
              padding: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
                paddingBottom: 20,
              }}
            >
              <Title
                style={{
                  fontFamily: "Fredoka",
                  color: "black",
                  fontWeight: 400,
                  fontSize: 27,
                }}
              >
                Daily Statistics
              </Title>

              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    borderRadius: "50%",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "#6EB0FE",
                  }}
                >
                  {" "}
                </div>
                <Text
                  style={{
                    color: "black",
                    fontFamily: "Fredoka",
                    fontSize: 20,
                    marginLeft: "10px",
                  }}
                >
                  Today
                </Text>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    borderRadius: "50%",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "#8F00FF",
                  }}
                >
                  {" "}
                </div>
                <Text
                  style={{
                    color: "black",
                    fontFamily: "Fredoka",
                    fontSize: 20,
                    marginLeft: "10px",
                  }}
                >
                  Yesterday
                </Text>
              </div>
            </div>
            <div style={{ width: 400, height: 200 }}>
              <Bar data={chartData} options={optionsBar} />
            </div>
          </div>
          <div style={{ alignItems: "flex-start" }}>
            <HBNotification
              title="Maintenance Required"
              subtitle="25 Rooms"
              viewText="View"
              icon={<IconBucketDroplet />}
              altText="Tap Icon"
              backgroundColor="#DB771A"
            />
            <HBNotification
              title="Complaints & Bad Reviews"
              subtitle="12 New Concerns"
              viewText="View"
              icon={<IconAlertCircle />}
              altText="Tap Icon"
              backgroundColor="#DB000D"
            />
            <HBNotification
              title="Workorders"
              subtitle="54 Total Requests"
              viewText="View"
              icon={<IconArmchair />}
              altText="Tap Icon"
              backgroundColor="#7600AD"
            />
            <HBNotification
              title="No Shows"
              subtitle="9 Expected Check-ins"
              viewText="View"
              icon={<IconGhost2 />}
              altText="Tap Icon"
              backgroundColor="#0084BD"
            />
          </div>

          {/* Reservations Module */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#07399E",
              height: "350px",
              width: "500px",
              borderRadius: "15px",
              padding: "20px",
            }}
          >
            <div style={{ alignSelf: "flex-start" }}>
              <Title
                style={{
                  fontFamily: "Fredoka",
                  display: "flex",
                  color: "white",
                  fontWeight: 400,
                }}
              >
                Reservations
              </Title>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <div style={{ width: 250, height: 250, position: "relative" }}>
                <Doughnut data={doughData} options={optionsDough} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Fredoka",
                      fontSize: 50,
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    56
                  </Text>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  textAlign: "left",
                  marginRight: 45,
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      borderRadius: "50%",
                      width: "15px",
                      height: "15px",
                      backgroundColor: "white",
                    }}
                  >
                    {" "}
                  </div>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Fredoka",
                      fontSize: 20,
                      marginLeft: "10px",
                    }}
                  >
                    Checked In
                  </Text>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      borderRadius: "50%",
                      width: "15px",
                      height: "15px",
                      backgroundColor: "#7A80B4",
                    }}
                  >
                    {" "}
                  </div>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Fredoka",
                      fontSize: 20,
                      marginLeft: "10px",
                    }}
                  >
                    Checked Out
                  </Text>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      borderRadius: "50%",
                      width: "15px",
                      height: "15px",
                      backgroundColor: "#002162",
                    }}
                  >
                    {" "}
                  </div>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Fredoka",
                      fontSize: 20,
                      marginLeft: "10px",
                    }}
                  >
                    Confirmed
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 50 }}>
          <div>
            <Title>Quick Tasks</Title>
            <div>
              <div style={{ marginTop: 10, gap: 15, display: "flex" }}>
                <Button
                  leftIcon={<IconNewSection />}
                  size={"md"}
                  style={{ maxWidth: 200, width: 200 }}
                >
                  Initiate Booking
                </Button>

                <Button
                  leftIcon={<IconBuildingEstate />}
                  size={"md"}
                  style={{ maxWidth: 200, width: 200 }}
                  onClick={handleAddPropertyClick}
                >
                  Add Property
                </Button>
              </div>
              <div style={{ marginTop: 10, gap: 15, display: "flex" }}>
                <Button
                  leftIcon={<IconCurrencyDollar />}
                  size={"md"}
                  style={{ maxWidth: 200, width: 200 }}
                >
                  Manage Prices
                </Button>
                <Button
                  leftIcon={<IconBroadcast />}
                  size={"md"}
                  style={{ maxWidth: 200, width: 200 }}
                >
                  Update RmS
                </Button>
              </div>
            </div>
          </div>
          <div>
            <Title>Reports</Title>
            <div>
              <LoyalCustomer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotel;
