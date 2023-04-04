import BusIcon from "../../assets/icons/bus.svg";
import GavelIcon from "../../assets/icons/gavel.svg";
import GlobeIcon from "../../assets/icons/globe.svg";
import HotelIcon from "../../assets/icons/bed.svg";
import MakkahIcon from "../../assets/icons/makkah.svg";
import MedinaIcon from "../../assets/icons/medina.svg";
import PlaneIcon from "../../assets/icons/plane.svg";
import { Box, Button, Card, Progress, ScrollArea, Text, Title } from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconBusinessplan, IconDoorEnter, IconDoorExit, IconMapPin, IconPlaneArrival, IconPlaneDeparture, IconPlus, IconSwitch2, IconWorld } from "@tabler/icons";
import { useState } from "react";
import { useSelector } from "react-redux";

const Body = () => {
  const [count, setCount] = useState(0);
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>


      <div
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >

        <Text style={{ marginBottom: 10 }}>Home {'>'} Dashboard</Text>
        <Title order={2}>Welcome Back, {user.firstName}!</Title>
        <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
          <Title order={4} style={{ marginRight: 10 }}>
            Today's Overview
          </Title>
          <IconArrowLeft
            onClick={() => setCount(count - 1)}
            size={20}
            strokeWidth={2}
            color="black"
            style={{ marginRight: 10 }}
          />
          <p style={{ margin: 0, marginRight: 10 }}> {count}</p>
          <IconArrowRight
            onClick={() => setCount(count + 1)}
            size={20}
            strokeWidth={2}
            color="black"
            style={{ marginRight: 10 }}
          />
        </div>
      </div>

      {/* Overview Card Area*/}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', position: 'relative' }}>

        {/* VISA CARD */}

        <div style={{ width: 350, height: 180, backgroundColor: '#18A11D', borderRadius: 13, position: 'relative', zIndex: 1 }}>

          {/* Title */}

          <div style={{ display: 'flex', height: 60, backgroundColor: '#121927', borderRadius: 13, alignItems: 'center', zIndex: 1 }}>
            <Title style={{
              color: 'white',
              fontFamily: 'Hammersmith One', fontWeight: 400, marginLeft: 20, fontSize: 30
            }}>8 Visas</Title></div>
          {/* ICON */}
          <img src={GlobeIcon} style={{ position: 'absolute', top: 10, right: 10, zIndex: -1, userSelect: 'none' }} draggable="false" />

          {/* Subs */}
          <div style={{ display: 'flex', marginLeft: 10, marginTop: 10 }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927' }}>
              <Text style={{ color: 'white', fontFamily: 'Hammersmith One' }}>0</Text>
            </div>

            <Text style={{ color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18 }}>Visa Rejected</Text>

          </div>

          {/* Subs */}
          <div style={{ display: 'flex', marginLeft: 10, marginTop: 4 }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927' }}>
              <Text style={{ color: 'white', fontFamily: 'Hammersmith One' }}>8</Text>
            </div>

            <Text style={{ color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18 }}>New Visas Process</Text>

          </div>
          {/* Subs */}
          <div style={{ display: 'flex', marginLeft: 10, marginTop: 4 }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927' }}>
              <Text style={{ color: 'white', fontFamily: 'Hammersmith One' }}>12</Text>
            </div>

            <Text style={{ color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18 }}>Visa Attestations</Text>

          </div>

        </div>

        {/* -----------------------BOOKING CARD------------------------- */}

        <div style={{ marginLeft: 20, width: 350, height: 180, backgroundColor: '#DC8400', borderRadius: 13, position: 'relative', zIndex: 1 }}>

          {/* Title */}

          <div style={{ display: 'flex', height: 60, backgroundColor: '#121927', borderRadius: 13, alignItems: 'center', zIndex: 1 }}>
            <Title style={{
              color: 'white',
              fontFamily: 'Hammersmith One', fontWeight: 400, marginLeft: 20, fontSize: 30
            }}>12 Bookings</Title></div>
          {/* ICON */}
          <img src={HotelIcon} style={{ position: 'absolute', top: 10, right: 10, zIndex: -1, userSelect: 'none', height: 160, opacity: '10%', filter: 'invert(100%)' }} draggable="false" />

          {/* Subs */}
          <div style={{ display: 'flex', marginLeft: 10, marginTop: 10 }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927' }}>
              <Text style={{ color: 'white', fontFamily: 'Hammersmith One' }}>0</Text>
            </div>

            <Text style={{ color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18 }}>New Bookings</Text>

          </div>

          {/* Subs */}
          <div style={{ display: 'flex', marginLeft: 10, marginTop: 4 }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927' }}>
              <Text style={{ color: 'white', fontFamily: 'Hammersmith One' }}>34</Text>
            </div>

            <Text style={{ color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18 }}>Check-ins</Text>

          </div>
          {/* Subs */}
          <div style={{ display: 'flex', marginLeft: 10, marginTop: 4 }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927' }}>
              <Text style={{ color: 'white', fontFamily: 'Hammersmith One' }}>42</Text>
            </div>

            <Text style={{ color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18 }}>Check-outs</Text>

          </div>

        </div>

        {/* -----------------------Transport CARD------------------------- */}

        <div style={{ marginLeft: 20, width: 350, height: 180, backgroundColor: '#662178', borderRadius: 13, position: 'relative', zIndex: 1 }}>

          {/* Title */}

          <div style={{ display: 'flex', height: 60, backgroundColor: '#121927', borderRadius: 13, alignItems: 'center', zIndex: 1 }}>
            <Title style={{
              color: 'white',
              fontFamily: 'Hammersmith One', fontWeight: 400, marginLeft: 20, fontSize: 30
            }}>19 Passengers</Title></div>
          {/* ICON */}
          <img src={BusIcon} style={{ position: 'absolute', top: 10, right: 10, zIndex: -1, userSelect: 'none', height: 160, opacity: '10%', filter: 'invert(100%)' }} draggable="false" />

          {/* Subs */}
          <div style={{ display: 'flex', marginLeft: 10, marginTop: 10 }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927' }}>
              <Text style={{ color: 'white', fontFamily: 'Hammersmith One' }}>16</Text>
            </div>

            <Text style={{ color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18 }}>New Passenger Bookings</Text>

          </div>

          {/* Subs */}
          <div style={{ display: 'flex', marginLeft: 10, marginTop: 4 }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927' }}>
              <Text style={{ color: 'white', fontFamily: 'Hammersmith One' }}>42</Text>
            </div>

            <Text style={{ color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18 }}>Transport Pickups Today</Text>

          </div>
          {/* Subs */}
          <div style={{ display: 'flex', marginLeft: 10, marginTop: 4 }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927' }}>
              <Text style={{ color: 'white', fontFamily: 'Hammersmith One' }}>10</Text>
            </div>

            <Text style={{ color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18 }}>Active Routes</Text>

          </div>

        </div>

        {/* -----------------------Plane CARD------------------------- */}

        <div style={{ marginLeft: 20, width: 350, height: 180, backgroundColor: '#0059DF', borderRadius: 13, position: 'relative', zIndex: 1 }}>

          {/* Title */}

          <div style={{ display: 'flex', height: 60, backgroundColor: '#121927', borderRadius: 13, alignItems: 'center', zIndex: 1 }}>
            <Title style={{
              color: 'white',
              fontFamily: 'Hammersmith One', fontWeight: 400, marginLeft: 20, fontSize: 30
            }}>62 Flights</Title></div>
          {/* ICON */}
          <img src={PlaneIcon} style={{ position: 'absolute', top: 10, right: 10, zIndex: -1, userSelect: 'none', height: 160, opacity: '10%', filter: 'invert(100%)' }} draggable="false" />

          {/* Subs */}
          <div style={{ display: 'flex', marginLeft: 10, marginTop: 10 }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927' }}>
              <Text style={{ color: 'white', fontFamily: 'Hammersmith One' }}>112</Text>
            </div>

            <Text style={{ color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18 }}>Arrivals</Text>

          </div>

          {/* Subs */}
          <div style={{ display: 'flex', marginLeft: 10, marginTop: 4 }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927' }}>
              <Text style={{ color: 'white', fontFamily: 'Hammersmith One' }}>147</Text>
            </div>

            <Text style={{ color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18 }}>Depatures</Text>

          </div>
          {/* Subs */}
          <div style={{ display: 'flex', marginLeft: 10, marginTop: 4 }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927' }}>
              <Text style={{ color: 'white', fontFamily: 'Hammersmith One' }}>25</Text>
            </div>

            <Text style={{ color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18 }}>New Bookings</Text>

          </div>

        </div>

        {/* -----------------------Requests CARD------------------------- */}

        <div style={{ marginLeft: 20, width: 225, height: 180, backgroundColor: '#112A5E', borderRadius: 13, position: 'relative', zIndex: 1 }}>

          {/* Title */}

          <div style={{ display: 'flex', height: 60, backgroundColor: '#121927', borderRadius: 13, alignItems: 'center', zIndex: 1 }}>
            <Title style={{
              color: 'white',
              fontFamily: 'Hammersmith One', fontWeight: 400, marginLeft: 20, fontSize: 30
            }}>4 Requests</Title></div>
          {/* ICON */}
          <img src={GavelIcon} style={{ position: 'absolute', top: 10, right: 5, zIndex: -1, userSelect: 'none', height: 160, opacity: '10%', filter: 'invert(100%)' }} draggable="false" />

          {/* Subs */}
          <div style={{ display: 'flex', marginLeft: 10, marginTop: 10 }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927' }}>
              <Text style={{ color: 'white', fontFamily: 'Hammersmith One' }}>16</Text>
            </div>

            <Text style={{ color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18 }}>Open Tickets</Text>

          </div>

          {/* Subs */}
          <div style={{ display: 'flex', marginLeft: 10, marginTop: 4 }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927' }}>
              <Text style={{ color: 'white', fontFamily: 'Hammersmith One' }}>7</Text>
            </div>

            <Text style={{ color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18 }}>Urgent Tickets</Text>

          </div>
          {/* Subs */}
          <div style={{ display: 'flex', marginLeft: 10, marginTop: 4 }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927' }}>
              <Text style={{ color: 'white', fontFamily: 'Hammersmith One' }}>2</Text>
            </div>

            <Text style={{ color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18 }}>Closed Tickets</Text>

          </div>

        </div>

        {/*END OVERVIEW DIV */} </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Finance Module Start */}

        <div style={{ marginTop: 20, flex: 1 }}>

          <div style={{ display: 'flex', marginBottom: 10 }}>
            <IconBusinessplan
              size={30}
              strokeWidth={2}
              color="black"
              style={{ marginRight: 10 }}
            />
            <Title style={{ fontSize: 25, fontFamily: 'Fredoka', fontWeight: 400 }}>Finance</Title>
          </div>

          {/* Payments to collect START */}
          <div style={{
            flexDirection:
              "column",

          }}>
            <div style={{ display: 'flex', flexDirection: "row", }}>

              <Card style={{
                width: 297,
                height: 144,
                backgroundColor: "#2C02D3",
                borderRadius: 20,
                marginRight: 20
              }}>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Text style={{ fontSize: 53, color: 'white', fontFamily: 'Hammersmith One', marginTop: -20, }}>1,487</Text>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', marginBottom: 25, marginLeft: 10 }}>
                    <Text style={{ fontSize: 14, color: 'white', fontFamily: 'Hammersmith One' }}>.67</Text>
                    <Text style={{ fontSize: 14, color: 'white', fontFamily: 'Fredoka', }}>SAR</Text>
                  </div>
                </div>
                <Text style={{ fontSize: 27.19, marginTop: -20, color: 'white', fontFamily: 'Hammersmith One' }}>to collect</Text>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button className="cssbuttons-io-button" > Add Payment
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                    </div>
                  </button>
                </div>

              </Card>
              {/* Payments to collect END */}
              {/* Income Today Start */}
              <Card style={{
                width: 297,
                height: 144,
                backgroundColor: "#1B1A20",
                borderRadius: 20,
                marginRight: 20
              }}>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Text style={{ fontSize: 53, color: 'white', fontFamily: 'Hammersmith One', marginTop: -20, }}>1,487</Text>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', marginBottom: 25, marginLeft: 10 }}>
                    <Text style={{ fontSize: 14, color: 'white', fontFamily: 'Hammersmith One' }}>.67</Text>
                    <Text style={{ fontSize: 14, color: 'white', fontFamily: 'Fredoka', }}>SAR</Text>
                  </div>
                </div>
                <Text style={{ fontSize: 27.19, marginTop: -20, color: 'white', fontFamily: 'Hammersmith One' }}>Income</Text>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Text style={{ fontSize: 15, color: 'white', fontFamily: 'Hammersmith One', }}>+9.2%</Text>
                  <div className="triangle-up"></div>
                </div>

              </Card>
              {/* Income Today END */}
            </div>

            <div style={{
              display: "flex",
              marginTop: "20px",
              marginBottom: "20px",
            }}>
              <Card
                style={{
                  width: 160,
                  height: "auto",
                  borderRadius: 20,
                  marginRight: 20,
                  display: "flex",
                  flexDirection: "column",

                }}
                bg={"#FA9600"}
              >
                <Text style={{
                  fontWeight: "500",
                  fontSize: 40, color: "white"
                }}>21</Text>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 14,
                    color: "white",
                  }}
                >
                  Vouchers <br />
                  Created
                </Text>
                <Button
                  style={{
                    marginTop: "10px",
                    backgroundColor: "black",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    padding: "10px",
                    width: "124px",
                  }}
                >
                  <IconPlus size={20} strokeWidth={2} style={{ marginRight: 10 }} />
                  <span style={{ marginRight: "5px" }}>Create New</span>
                </Button>
              </Card>
              <Card
                style={{
                  width: 160,
                  height: "auto",
                  borderRadius: 20,
                  marginRight: 20,
                  display: "flex",
                  flexDirection: "column",

                }}
                bg={"#F4043E"}
              >
                <Text style={{
                  fontWeight: "500",
                  fontSize: 40, color: "white"
                }}>0</Text>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 14,
                    color: "white",
                  }}
                >
                  Redfunds <br />
                  Issued
                </Text>
                <Button
                  style={{
                    marginTop: "10px",
                    backgroundColor: "black",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    padding: "10px",
                    width: "124px",
                  }}
                >
                  <IconPlus size={20} strokeWidth={2} style={{ marginRight: 10 }} />
                  <span style={{ marginRight: "5px" }}>Issue Refund</span>
                </Button>
              </Card>
              <Card
                style={{
                  width: 160,
                  height: "auto",
                  borderRadius: 20,
                  marginRight: 20,
                  display: "flex",
                  flexDirection: "column",

                }}
                bg={"#00F06E"}
              >
                <Text style={{
                  fontWeight: "500",
                  fontSize: 40, color: "white"
                }}>62</Text>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 14,
                    color: "white",
                  }}
                >
                  Voucher <br />
                  Pending
                </Text>
                <Button
                  style={{
                    marginTop: "10px",
                    backgroundColor: "black",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    padding: "10px",
                    width: "124px",
                  }}
                >
                  <IconPlus size={20} strokeWidth={2} style={{ marginRight: 10 }} />
                  <span style={{ marginRight: "5px" }}>validate</span>
                </Button>
              </Card>
            </div>
            <div>
              <Box
                style={{
                  display: "flex ",
                  alignItems: "center",
                  justifyContent: "space-between", height: "auto",
                  borderRadius: 40,

                  width: "500px", backgroundColor: "#164864"
                }}
              >
                <Box
                  style={{
                    padding: 10,
                    borderRadius: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 50,
                    color: "#FFFFFF",
                    width: "120px",

                    backgroundColor: "#000000"
                  }}

                >
                  <Text
                    style={{
                      marginTop: 10,
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "500"
                    }}
                  >1 SAR</Text>
                </Box>
                <IconSwitch2
                  onClick={() => setCount(count - 1)}
                  size={60}
                  strokeWidth={2}
                  color="white"
                  style={{ marginRight: 10 }}
                />
                <Box
                  style={{
                    padding: 10,
                    borderRadius: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 50,
                    color: "#FFFFFF",
                    width: "120px",
                    backgroundColor: "#000000"
                  }}

                >
                  <Text style={{
                    marginTop: 10,
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "500"

                  }}
                  >72 PKR</Text>
                </Box> </Box></div>
          </div>
        </div> {/* Finance Module END */}

        {/* Country Status Module START */}
        <div style={{ display: 'flex', flex: 100, gap: 40, }}>

          <div style={{ marginTop: 20 }}>

            <div style={{ display: 'flex', marginBottom: 10 }}>
              <IconWorld
                size={30}
                strokeWidth={2}
                color="black"
                style={{ marginRight: 10 }}
              />
              <Title style={{ fontSize: 25, fontFamily: 'Fredoka', fontWeight: 400 }}>Country Status</Title>
            </div>

            {/* Country START */}
            <div style={{ width: '450px', fontFamily: 'Fredoka' }}>
              <div style={{ color: '#FFFFFF' }}>
                <div style={{ backgroundColor: '#FF1E1E', display: 'flex', justifyContent: 'end', height: '30px', borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}>
                  <span style={{ marginTop: 'auto', marginBottom: 'auto', paddingRight: '20px' }}>Kingdom of Saudia Arabia</span>
                </div>
                <div style={{ paddingLeft: '15px', paddingRight: '15px', display: 'flex', backgroundColor: '#000000', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', height: '90px', justifyContent: 'space-between' }}>

                  <div style={{ display: 'flex', marginTop: '5px' }}>
                    <div style={{ paddingRight: '5px', paddingTop: '10px' }}><IconPlaneArrival size={35} style={{ color: '#FF1E1E' }} /></div>
                    <div>
                      <div><span style={{ fontSize: '45px', fontFamily: 'Hammersmith One' }}>24</span></div>
                      <div style={{ marginTop: '-6px' }}><span style={{ fontSize: '18px' }}>Arrivals</span></div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', marginTop: '5px' }}>
                    <div style={{ paddingRight: '5px', paddingTop: '10px' }}><IconPlaneDeparture size={35} style={{ color: '#FF1E1E' }} /></div>
                    <div>
                      <div><span style={{ fontSize: '45px', fontFamily: 'Hammersmith One' }}>65</span></div>
                      <div style={{ marginTop: '-6px' }}><span style={{ fontSize: '18px' }}>Departure</span></div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', marginTop: '5px' }}>
                    <div style={{ paddingRight: '5px', paddingTop: '10px' }}><IconMapPin size={35} style={{ color: '#FF1E1E' }} /></div>
                    <div>
                      <div><span style={{ fontSize: '45px', fontFamily: 'Hammersmith One' }}>620</span></div>
                      <div style={{ marginTop: '-6px' }}><span style={{ fontSize: '18px' }}>In Country</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* IN KSA END */}

            {/* Makkah Start */}
            <div style={{ color: "#ffffff", fontFamily: 'Fredoka', marginTop: 10 }}>
              <div
                style={{
                  backgroundColor: "#FFB800",
                  display: "flex",
                  borderTopRightRadius: "15px",
                  borderTopLeftRadius: "15px",
                  height: "30px",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ paddingLeft: "20px", marginTop: "6px" }}>
                  <img src={MakkahIcon} draggable="false" style={{ userSelect: 'none' }} />
                </div>
                <div style={{ color: "#000000", marginTop: "auto", marginBottom: "auto" }}>
                  <span style={{ marginTop: "auto", marginBottom: "auto", paddingRight: "20px" }}>
                    Makkah
                  </span>
                </div>
              </div>

              <div
                style={{
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingTop: "5px",
                  display: "flex",
                  backgroundColor: "#000000",
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  height: "90px",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ display: "flex", marginTop: "5px" }}>
                  <div style={{ paddingRight: "5px", paddingTop: "10px" }}>
                    <IconDoorEnter size={35} style={{ color: '#FFB800' }} />
                  </div>
                  <div>
                    <div>
                      <span style={{ fontSize: "45px", fontFamily: 'Hammersmith One' }}>125</span>
                    </div>
                    <div style={{ marginTop: "-6px" }}>
                      <span style={{ fontSize: "18px" }}>Check-ins</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", marginTop: "5px" }}>
                  <div style={{ paddingRight: "5px", paddingTop: "10px" }}>
                    <IconDoorExit size={35} style={{ color: '#FFB800' }} />
                  </div>
                  <div>
                    <div>
                      <span style={{ fontSize: "45px", fontFamily: 'Hammersmith One' }}>59</span>
                    </div>
                    <div style={{ marginTop: "-6px" }}>
                      <span style={{ fontSize: "18px" }}>Check-outs</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", marginTop: "5px" }}>
                  <div style={{ paddingRight: "5px", paddingTop: "10px" }}>
                    <IconMapPin size={35} style={{ color: '#FFB800' }} />
                  </div>
                  <div>
                    <div>
                      <span style={{ fontSize: "45px", fontFamily: 'Hammersmith One' }}>184</span>
                    </div>
                    <div style={{ marginTop: "-6px" }}>
                      <span style={{ fontSize: "18px" }}>In CIty</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* Makkah END */}

            {/* Medina Start */}
            <div style={{ color: "#ffffff", fontFamily: 'Fredoka', marginTop: 10 }}>
              <div
                style={{
                  backgroundColor: "#2AD100",
                  display: "flex",
                  borderTopRightRadius: "15px",
                  borderTopLeftRadius: "15px",
                  height: "30px",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ paddingLeft: "20px", marginTop: "6px" }}>
                  <img src={MedinaIcon} draggable="false" style={{ userSelect: 'none' }} />
                </div>
                <div style={{ color: "#000000", marginTop: "auto", marginBottom: "auto" }}>
                  <span style={{ marginTop: "auto", marginBottom: "auto", paddingRight: "20px" }}>
                    Medina
                  </span>
                </div>
              </div>

              <div
                style={{
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingTop: "5px",
                  display: "flex",
                  backgroundColor: "#000000",
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                  height: "90px",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ display: "flex", marginTop: "5px" }}>
                  <div style={{ paddingRight: "5px", paddingTop: "10px" }}>
                    <IconDoorEnter size={35} style={{ color: '#2AD100' }} />
                  </div>
                  <div>
                    <div>
                      <span style={{ fontSize: "45px", fontFamily: 'Hammersmith One' }}>125</span>
                    </div>
                    <div style={{ marginTop: "-6px" }}>
                      <span style={{ fontSize: "18px" }}>Check-ins</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", marginTop: "5px" }}>
                  <div style={{ paddingRight: "5px", paddingTop: "10px" }}>
                    <IconDoorExit size={35} style={{ color: '#2AD100' }} />
                  </div>
                  <div>
                    <div>
                      <span style={{ fontSize: "45px", fontFamily: 'Hammersmith One' }}>59</span>
                    </div>
                    <div style={{ marginTop: "-6px" }}>
                      <span style={{ fontSize: "18px" }}>Check-outs</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", marginTop: "5px" }}>
                  <div style={{ paddingRight: "5px", paddingTop: "10px" }}>
                    <IconMapPin size={35} style={{ color: '#2AD100' }} />
                  </div>
                  <div>
                    <div>
                      <span style={{ fontSize: "45px", fontFamily: 'Hammersmith One' }}>184</span>
                    </div>
                    <div style={{ marginTop: "-6px" }}>
                      <span style={{ fontSize: "18px" }}>In CIty</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* Medina END */}


          </div>
          {/* /// */}
          <div style={{ marginTop: 20, }}>

            <div style={{ display: 'flex', marginBottom: 10 }}>
              <IconWorld
                size={30}
                strokeWidth={2}
                color="black"
                style={{ marginRight: 10 }}
              />
              <Title style={{ fontSize: 25, fontFamily: 'Fredoka', fontWeight: 400 }}>Visa & Passport</Title>
            </div>

            {/* Country START */}
            <div style={{
              display: "flex",
              marginTop: "20px",
              marginBottom: "20px",
            }}>
              <Card
                style={{
                  width: 160,
                  height: "auto",
                  borderRadius: 20,
                  marginRight: 20,
                  display: "flex",
                  flexDirection: "column",

                }}
                bg={"#A48A64"}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 14,
                    color: "white",
                  }}
                >
                  Visa
                  Stamped
                </Text>
                <Text style={{
                  fontWeight: "500",
                  fontSize: 40, color: "white"
                }}>62</Text>
              </Card>
              <Card
                style={{
                  width: 160,
                  height: "auto",
                  borderRadius: 20,
                  marginRight: 20,
                  display: "flex",
                  flexDirection: "column",

                }}
                bg={"#8F64A4"}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 14,
                    color: "white",
                  }}
                >
                  Visa
                  Stamped
                </Text>
                <Text style={{
                  fontWeight: "500",
                  fontSize: 40, color: "white"
                }}>62</Text>
              </Card>
              <Card
                style={{
                  width: 160,
                  height: "auto",
                  borderRadius: 20,
                  marginRight: 20,
                  display: "flex",
                  flexDirection: "column",

                }}
                bg={"#A46464"}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 14,
                    color: "white",
                  }}
                >
                  Visa
                  Declined
                </Text>
                <Text style={{
                  fontWeight: "500",
                  fontSize: 40, color: "white"
                }}>62</Text>
              </Card>
            </div>
            {/* asas */}

            <div style={{ display: 'flex', marginBottom: 10 }}>
              <IconWorld
                size={30}
                strokeWidth={2}
                color="black"
                style={{ marginRight: 10 }}
              />
              <Title style={{ fontSize: 25, fontFamily: 'Fredoka', fontWeight: 400 }}>Hotels & Bookings</Title>
            </div>

            <div style={{
              display: "flex",
              marginTop: "20px",
              marginBottom: "20px",
            }}>

              <Card
                style={{
                  width: 160,
                  borderRadius: 20,
                  marginRight: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
                bg={"#121927"}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 40,
                    color: "white",
                    textAlign: "center",
                    marginBottom: "20px"
                  }}
                >
                  102
                </Text>
                <Text style={{
                  fontWeight: "500",
                  fontSize: 12, color: "white"
                }}>singe Beds Avaliable</Text>
                <Progress

                  color="green" value={100} />;
              </Card>

              <Card
                style={{
                  width: 160,
                  borderRadius: 20,
                  marginRight: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
                bg={"#121927"}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 40,
                    color: "white",
                    textAlign: "center",
                    marginBottom: "20px"
                  }}
                >
                  102
                </Text>
                <Text style={{
                  fontWeight: "500",
                  fontSize: 12, color: "white"
                }}>singe Beds Avaliable</Text>
                <Progress

                  color="green" value={100} />;
              </Card>

              <Card
                style={{
                  width: 160,
                  borderRadius: 20,
                  marginRight: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
                bg={"#121927"}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 40,
                    color: "white",
                    textAlign: "center",
                    marginBottom: "20px"
                  }}
                >
                  102
                </Text>
                <Text style={{
                  fontWeight: "500",
                  fontSize: 12, color: "white"
                }}>singe Beds Avaliable</Text>
                <Progress

                  color="green" value={100} />;
              </Card>
            </div>
            <div style={{ display: 'flex', marginBottom: 10 }}>
              <IconWorld
                size={30}
                strokeWidth={2}
                color="black"
                style={{ marginRight: 10 }}
              />
              <Title style={{ fontSize: 25, fontFamily: 'Fredoka', fontWeight: 400 }}>Flights & Tickting</Title>
            </div>

            <div style={{
              display: "flex",
              marginTop: "20px",
              marginBottom: "20px",
            }}>

              <Card
                style={{
                  width: 160,
                  height: "auto",
                  borderRadius: 20,
                  marginRight: 20,
                  display: "flex",
                  flexDirection: "column",

                }}
                bg={"#A46464"}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 14,
                    color: "white",
                  }}
                >
                  Visa
                  Declined
                </Text>
                <Text style={{
                  fontWeight: "500",
                  fontSize: 40, color: "white"
                }}>62</Text>
              </Card>
              <Card
                style={{
                  width: 160,
                  height: "auto",
                  borderRadius: 20,
                  marginRight: 20,
                  display: "flex",
                  flexDirection: "column",

                }}
                bg={"#A46464"}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 14,
                    color: "white",
                  }}
                >
                  Visa
                  Declined
                </Text>
                <Text style={{
                  fontWeight: "500",
                  fontSize: 40, color: "white"
                }}>62</Text>
              </Card>
              <Card
                style={{
                  width: 160,
                  height: "auto",
                  borderRadius: 20,
                  marginRight: 20,
                  display: "flex",
                  flexDirection: "column",

                }}
                bg={"#A46464"}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 14,
                    color: "white",
                  }}
                >
                  Visa
                  Declined
                </Text>
                <Text style={{
                  fontWeight: "500",
                  fontSize: 40, color: "white"
                }}>62</Text>
              </Card>


            </div>
          </div>
        </div> {/* Country Status Module END */}

      </div>

    </>
  );
};

export default Body;
