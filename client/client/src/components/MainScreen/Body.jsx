import { Text, Title, Card, Button } from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconBusinessplan } from "@tabler/icons";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

import GlobeIcon from '../../assets/icons/globe.svg'
import HotelIcon from '../../assets/icons/bed.svg'
import BusIcon from '../../assets/icons/bus.svg'
import PlaneIcon from '../../assets/icons/plane.svg'
import GavelIcon from '../../assets/icons/gavel.svg'

const Body = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        style={{
          borderRadius: "50px 0 0 0",
          backgroundColor: "white",
          marginLeft: "0px",
          padding: "20px",
          flex: 1,
        }}
      >
        <div
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text style={{ marginBottom: 10 }}>Home {'>'} Dashboard</Text>
          <Title order={2}>Welcome Back,!</Title>
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
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', position: 'relative'}}>

            {/* VISA CARD */}

            <div style={{width: 350, height: 180, backgroundColor: '#18A11D', borderRadius: 13, position: 'relative', zIndex: 1}}>

            {/* Title */}

            <div style={{display: 'flex', height: 60, backgroundColor: '#121927', borderRadius: 13, alignItems: 'center', zIndex: 1}}>
              <Title style={{color: 'white', 
            fontFamily: 'Hammersmith One', fontWeight: 400, marginLeft: 20, fontSize: 30}}>8 Visas</Title></div>
            {/* ICON */}
            <img src={GlobeIcon} style={{position: 'absolute', top: 10, right: 10, zIndex: -1, userSelect: 'none'}} draggable="false"/>

            {/* Subs */}
            <div style={{display: 'flex', marginLeft: 10, marginTop: 10}}>

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927'}}>
            <Text style={{color: 'white', fontFamily: 'Hammersmith One'}}>0</Text>
          </div>

          <Text style={{color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18}}>Visa Rejected</Text>

              </div>
              
              {/* Subs */}
            <div style={{display: 'flex', marginLeft: 10, marginTop: 4}}>

<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927'}}>
  <Text style={{color: 'white', fontFamily: 'Hammersmith One'}}>8</Text>
</div>

<Text style={{color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18}}>New Visas Process</Text>

    </div>
    {/* Subs */}
    <div style={{display: 'flex', marginLeft: 10, marginTop: 4}}>

<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927'}}>
  <Text style={{color: 'white', fontFamily: 'Hammersmith One'}}>12</Text>
</div>

<Text style={{color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18}}>Visa Attestations</Text>

    </div>

            </div>

            {/* -----------------------BOOKING CARD------------------------- */}

            <div style={{marginLeft: 20,width: 350, height: 180, backgroundColor: '#DC8400', borderRadius: 13, position: 'relative', zIndex: 1}}>

            {/* Title */}

            <div style={{display: 'flex', height: 60, backgroundColor: '#121927', borderRadius: 13, alignItems: 'center', zIndex: 1}}>
              <Title style={{color: 'white', 
            fontFamily: 'Hammersmith One', fontWeight: 400, marginLeft: 20, fontSize: 30}}>12 Bookings</Title></div>
            {/* ICON */}
            <img src={HotelIcon} style={{position: 'absolute', top: 10, right: 10, zIndex: -1, userSelect: 'none', height: 160, opacity: '10%', filter: 'invert(100%)'}} draggable="false"/>

            {/* Subs */}
            <div style={{display: 'flex', marginLeft: 10, marginTop: 10}}>

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927'}}>
            <Text style={{color: 'white', fontFamily: 'Hammersmith One'}}>0</Text>
          </div>

          <Text style={{color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18}}>New Bookings</Text>

              </div>
              
              {/* Subs */}
            <div style={{display: 'flex', marginLeft: 10, marginTop: 4}}>

<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927'}}>
  <Text style={{color: 'white', fontFamily: 'Hammersmith One'}}>34</Text>
</div>

<Text style={{color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18}}>Check-ins</Text>

    </div>
    {/* Subs */}
    <div style={{display: 'flex', marginLeft: 10, marginTop: 4}}>

<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927'}}>
  <Text style={{color: 'white', fontFamily: 'Hammersmith One'}}>42</Text>
</div>

<Text style={{color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18}}>Check-outs</Text>

    </div>

            </div>

            {/* -----------------------Transport CARD------------------------- */}

            <div style={{marginLeft: 20,width: 350, height: 180, backgroundColor: '#662178', borderRadius: 13, position: 'relative', zIndex: 1}}>

            {/* Title */}

            <div style={{display: 'flex', height: 60, backgroundColor: '#121927', borderRadius: 13, alignItems: 'center', zIndex: 1}}>
              <Title style={{color: 'white', 
            fontFamily: 'Hammersmith One', fontWeight: 400, marginLeft: 20, fontSize: 30}}>19 Passengers</Title></div>
            {/* ICON */}
            <img src={BusIcon} style={{position: 'absolute', top: 10, right: 10, zIndex: -1, userSelect: 'none', height: 160, opacity: '10%', filter: 'invert(100%)'}} draggable="false"/>

            {/* Subs */}
            <div style={{display: 'flex', marginLeft: 10, marginTop: 10}}>

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927'}}>
            <Text style={{color: 'white', fontFamily: 'Hammersmith One'}}>16</Text>
          </div>

          <Text style={{color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18}}>New Passenger Bookings</Text>

              </div>
              
              {/* Subs */}
            <div style={{display: 'flex', marginLeft: 10, marginTop: 4}}>

<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927'}}>
  <Text style={{color: 'white', fontFamily: 'Hammersmith One'}}>42</Text>
</div>

<Text style={{color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18}}>Transport Pickups Today</Text>

    </div>
    {/* Subs */}
    <div style={{display: 'flex', marginLeft: 10, marginTop: 4}}>

<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927'}}>
  <Text style={{color: 'white', fontFamily: 'Hammersmith One'}}>10</Text>
</div>

<Text style={{color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18}}>Active Routes</Text>

    </div>

            </div>

            {/* -----------------------Plane CARD------------------------- */}

            <div style={{marginLeft: 20,width: 350, height: 180, backgroundColor: '#0059DF', borderRadius: 13, position: 'relative', zIndex: 1}}>

            {/* Title */}

            <div style={{display: 'flex', height: 60, backgroundColor: '#121927', borderRadius: 13, alignItems: 'center', zIndex: 1}}>
              <Title style={{color: 'white', 
            fontFamily: 'Hammersmith One', fontWeight: 400, marginLeft: 20, fontSize: 30}}>62 Flights</Title></div>
            {/* ICON */}
            <img src={PlaneIcon} style={{position: 'absolute', top: 10, right: 10, zIndex: -1, userSelect: 'none', height: 160, opacity: '10%', filter: 'invert(100%)'}} draggable="false"/>

            {/* Subs */}
            <div style={{display: 'flex', marginLeft: 10, marginTop: 10}}>

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927'}}>
            <Text style={{color: 'white', fontFamily: 'Hammersmith One'}}>112</Text>
          </div>

          <Text style={{color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18}}>Arrivals</Text>

              </div>
              
              {/* Subs */}
            <div style={{display: 'flex', marginLeft: 10, marginTop: 4}}>

<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927'}}>
  <Text style={{color: 'white', fontFamily: 'Hammersmith One'}}>147</Text>
</div>

<Text style={{color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18}}>Depatures</Text>

    </div>
    {/* Subs */}
    <div style={{display: 'flex', marginLeft: 10, marginTop: 4}}>

<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927'}}>
  <Text style={{color: 'white', fontFamily: 'Hammersmith One'}}>25</Text>
</div>

<Text style={{color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18}}>New Bookings</Text>

    </div>

            </div>

            {/* -----------------------Requests CARD------------------------- */}

            <div style={{marginLeft: 20,width: 225, height: 180, backgroundColor: '#112A5E', borderRadius: 13, position: 'relative', zIndex: 1}}>

            {/* Title */}

            <div style={{display: 'flex', height: 60, backgroundColor: '#121927', borderRadius: 13, alignItems: 'center', zIndex: 1}}>
              <Title style={{color: 'white', 
            fontFamily: 'Hammersmith One', fontWeight: 400, marginLeft: 20, fontSize: 30}}>4 Requests</Title></div>
            {/* ICON */}
            <img src={GavelIcon} style={{position: 'absolute', top: 10, right: 5, zIndex: -1, userSelect: 'none', height: 160, opacity: '10%', filter: 'invert(100%)'}} draggable="false"/>

            {/* Subs */}
            <div style={{display: 'flex', marginLeft: 10, marginTop: 10}}>

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927'}}>
            <Text style={{color: 'white', fontFamily: 'Hammersmith One'}}>16</Text>
          </div>

          <Text style={{color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18}}>Open Tickets</Text>

              </div>
              
              {/* Subs */}
            <div style={{display: 'flex', marginLeft: 10, marginTop: 4}}>

<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927'}}>
  <Text style={{color: 'white', fontFamily: 'Hammersmith One'}}>7</Text>
</div>

<Text style={{color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18}}>Urgent Tickets</Text>

    </div>
    {/* Subs */}
    <div style={{display: 'flex', marginLeft: 10, marginTop: 4}}>

<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 30, height: 30, borderRadius: 35, backgroundColor: '#121927'}}>
  <Text style={{color: 'white', fontFamily: 'Hammersmith One'}}>2</Text>
</div>

<Text style={{color: 'white', marginLeft: 10, fontFamily: 'Fredoka', fontSize: 18}}>Closed Tickets</Text>

    </div>

            </div>

          {/*END OVERVIEW DIV */} </div>

{/* Payments Module Start */}
        <div style={{padding: 20, }}>

  <div style={{display:'flex', marginBottom: 10,}}>
    <IconBusinessplan
      size={30}
      strokeWidth={2}
      color="black"
      style={{ marginRight: 10 }}
    />
    <Title >Payments</Title> 
  </div>

{/* Payments to collect START */}
          
  <div style={{ display: 'flex'}}>
  
    <Card style={{
      width: 350,
      backgroundColor: "#210E6C",
      borderRadius: 20,
      marginRight: 20
    }}>
  
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Text style={{ fontSize: 69, color: 'white', fontFamily:'Hammersmith One', marginTop: -20, }}>1,487</Text>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative',}}>
          <Text style={{ fontSize: 20, color: 'white', fontFamily:'Hammersmith One'}}>.67</Text>
          <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Fredoka',}}>SAR</Text>
        </div>
      </div>
      <Text style={{ fontSize: 34.22, marginTop: -20, color: 'white', fontFamily:'Hammersmith One' }}>to collect</Text>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button color="gray" radius="xl">
          + Add Payment
        </Button>
      </div>
  
    </Card>
{/* Payments to collect END */}
  
{/* Income Today START */}
    
    <Card style={{
      width: 350,
      backgroundColor: "#1B1A20",
      borderRadius: 20,
      marginLeft: 20
    }}>
  
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Text style={{ fontSize: 69, color: 'white', fontFamily:'Hammersmith One', marginTop: -20, }}>257</Text>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative',}}>
          <Text style={{ fontSize: 20, color: 'white', fontFamily:'Hammersmith One'}}>.29</Text>
          <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Fredoka',}}>SAR</Text>
        </div>
      </div>
      <Text style={{ fontSize: 34.22, marginTop: -20, color: 'white', fontFamily:'Hammersmith One' }}>Income</Text>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Fredoka',}}>+9.2%</Text>
      <div className="triangle-up"></div>
      </div>
  
    </Card>
    {/* Income today END */}
    
  </div>
{/* Payments Module END */}
  
</div>

      </div>
    </>
  );
};

export default Body;
