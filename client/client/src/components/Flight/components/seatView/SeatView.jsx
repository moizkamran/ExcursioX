import React from 'react'

import Airplane from '../../../../assets/flight/airplane.svg'


export const SeatView = () => {
  return (
    <>

<div style={{ backgroundColor: "#07399E", width: 378, height: 1007 }}>
      <div
        style={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          width: 378,
          height: 264,
          borderRadius: "0px 0px 50px 50px"
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "34.75px",
            fontWeight: "bold",
            paddingTop: 40
          }}
        >
          <span>Seat Map</span>
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 22,
            fontWeight: 400,
            paddingTop: 2
          }}
        >
          <span>Your Tickets</span>
        </div>
        <div style={{ marginLeft: 52, marginTop: 30 }}>
          <img src="./emirates.svg" alt='emiraatesLogo' />
        </div>
      </div>
      <div
        style={{
          width: 378,
          height: 834,
          backgroundImage: "url(${Airplane})",
          marginTop: "-120px"
        }}
      >
        <div
          style={{
            color: "#D1D1D1",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: "77.25px"
          }}
        >
          <span>PLANE</span>
        </div>
        <div
          style={{
            color: "#000000",
            fontSize: "27.5px",
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: 2
          }}
        >
          <span>BOEING 787</span>
        </div>
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 16 }}>
          <div style={{ paddingRight: "5.25px" }}>
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "12.65px",
                height: "12.65px",
                background: "#D9D9D9",
                borderRadius: "100%",
                marginBottom: 6
              }}
            />
            <div>
              <span style={{ fontSize: 11 }}>Not Available</span>
            </div>
          </div>
          <div style={{ paddingLeft: "5.25px", paddingRight: "5.25px" }}>
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "12.65px",
                height: "12.65px",
                background: "#76FF54",
                borderRadius: "100%",
                marginBottom: 6
              }}
            />
            <div>
              <span style={{ fontSize: 11 }}>Available</span>
            </div>
          </div>
          <div style={{ paddingLeft: "5.25px" }}>
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "12.65px",
                height: "12.65px",
                background: "#FFC554",
                borderRadius: "100%",
                marginBottom: 6
              }}
            />
            <div>
              <span style={{ fontSize: 11 }}>Your Bookings</span>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "23.5px" }}
        >
          <div style={{ display: "flex", marginRight: 26 }}>
            <div style={{ textAlign: "center", marginRight: 9 }}>
              <div style={{ paddingBottom: 4 }}>
                <span>A</span>
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div
                style={{ width: 22, height: 22, paddingBottom: 9, marginTop: 22 }}
              >
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
            </div>
            <div style={{ textAlign: "center", marginRight: 9 }}>
              <div style={{ paddingBottom: 4 }}>
                <span>B</span>
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div
                style={{ width: 22, height: 22, paddingBottom: 9, marginTop: 22 }}
              >
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ paddingBottom: 4 }}>
                <span>C</span>
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div
                style={{ width: 22, height: 22, paddingBottom: 9, marginTop: 22 }}
              >
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", marginLeft: 26 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ paddingBottom: 4 }}>
                <span>D</span>
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div
                style={{ width: 22, height: 22, paddingBottom: 9, marginTop: 22 }}
              >
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
            </div>
            <div style={{ textAlign: "center", marginLeft: 9 }}>
              <div style={{ paddingBottom: 4 }}>
                <span>E</span>
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div
                style={{ width: 22, height: 22, paddingBottom: 9, marginTop: 22 }}
              >
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
            </div>
            <div style={{ textAlign: "center", marginLeft: 9 }}>
              <div style={{ paddingBottom: 4 }}>
                <span>F</span>
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div
                style={{ width: 22, height: 22, paddingBottom: 9, marginTop: 22 }}
              >
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22, paddingBottom: 9 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
              <div style={{ width: 22, height: 22 }}>
                <img src="./seats.svg" alt='planeSeats' />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            background: "#000000",
            width: 378,
            height: 124,
            borderRadius: "30px 30px 0px 0px",
            marginTop: 6
          }}
        />
      </div>
        </div>
    
    </>
  )
}

export default SeatView
