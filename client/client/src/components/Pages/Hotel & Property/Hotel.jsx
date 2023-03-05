import React, { useState } from 'react';
import BarChart from '../../Graphs/BarChart';
import { Bar, Doughnut  } from 'react-chartjs-2';
import { UserData } from '../../../FakeData/Data';
import { Text, Title, Card, Button } from "@mantine/core";




const Hotel = () => {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  const chartData = {
    labels: ['Out of Order', 'Off Market', 'Occupancy', 'Vacancy'],
    datasets: [
      {
        label: 'Yesterday',
        backgroundColor: '#8F00FF',
        hoverBackgroundColor: '#BF6EFE',
        data: [
          UserData[0].outOfOrder,
          UserData[0].offMarket,
          UserData[0].occupancy,
          UserData[0].vacancy,
          
        ],
      },
      {
        label: 'Recent',
        backgroundColor: '#6EB0FE',
        hoverBackgroundColor: '#3782DB',
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
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks:{
          display: false
        }
      },
      x: {
        beginAtZero: true,
        grid : {
          display: false
        },
      }

    },
    elements: {
      bar: {
        borderRadius: 10
      },
    },
    barThickness: 35, // set the thickness of each bar to 25 pixels

  
  };
  
  {/*Doughnut Chart*/}

  const doughData = {
    labels: ['Checked-in', 'Checked-out', 'Confirmed'],
    datasets: [
      {
        label: 'Reservations',
        backgroundColor: [
          '#FFFFFF',
          '#7A80B4',
          '#002162'
        ],
        hoverBackgroundColor: '#07399E',
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
    cutout: '70%',
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
      <Text style={{ marginBottom: 10 }}>Home {'>'} Hotel Board</Text>
           
           <div style={{ display: "flex", alignItems: "center" }}>
              <Title fw="xl" style={{ marginRight: "auto" }}>Hotel Board</Title>
              <Title style={{fontFamily:"Fredoka", fontWeight: 400, fontSize: 20}}>{formattedDate}</Title>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20}}>

          {/* Bar Chart */}
          <div style={{backgroundColor: "#F8F8F8", borderRadius: 20, padding: 30}}>

          <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", paddingBottom: 20}}>

          <Title style={{fontFamily: "Fredoka", color: "black", fontWeight: 400, fontSize: 27}}>Daily Statistics</Title>

      <div style={{display: "flex", alignItems: "center"}}>
        <div style={{ borderRadius: '50%', width: '15px', height: '15px', backgroundColor: '#6EB0FE' }}> </div>
        <Text style={{color: "black", fontFamily: "Fredoka", fontSize: 20, marginLeft: "10px"}}>Today</Text>
      </div>

      <div style={{display: "flex", alignItems: "center"}}>
        <div style={{ borderRadius: '50%', width: '15px', height: '15px', backgroundColor: '#8F00FF' }}> </div>
        <Text style={{color: "black", fontFamily: "Fredoka", fontSize: 20, marginLeft: "10px"}}>Yesterday</Text>
      </div>

    </div>
          <div style={{width: 600, height: 300}}>
            
                  <Bar
              data={chartData}
              options={optionsBar}
            />  
    </div>
    </div>


    {/* Reservations Module */}
    <div style={{display: "flex", flexDirection: "column", backgroundColor: "#07399E", height: "350px", width: "500px", borderRadius: "15px", padding: "20px"}}>
  <div style={{alignSelf: "flex-start"}}>
    <Title style={{fontFamily: "Fredoka", display: "flex", color: "white", fontWeight: 400}}>Reservations</Title>
  </div>

  <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20}}>
  <div style={{ width: 250, height: 250, position: 'relative' }}>
      <Doughnut
        data={doughData}
        options={optionsDough}
      /> 
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Text
  style={{
    color: '#FFFFFF',
    fontFamily: 'Fredoka',
    fontSize: 50,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }}
>56</Text>
      </div>
    </div> 

    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", marginRight: 45}}>
      <div style={{display: "flex", alignItems: "center"}}>
        <div style={{ borderRadius: '50%', width: '15px', height: '15px', backgroundColor: 'white' }}> </div>
        <Text style={{color: "#FFFFFF", fontFamily: "Fredoka", fontSize: 20, marginLeft: "10px"}}>Checked In</Text>
      </div>

      <div style={{display: "flex", alignItems: "center"}}>
        <div style={{ borderRadius: '50%', width: '15px', height: '15px', backgroundColor: '#7A80B4' }}> </div>
        <Text style={{color: "#FFFFFF", fontFamily: "Fredoka", fontSize: 20, marginLeft: "10px"}}>Checked Out</Text>
      </div>

      <div style={{display: "flex", alignItems: "center"}}>
        <div style={{ borderRadius: '50%', width: '15px', height: '15px', backgroundColor: '#002162' }}> </div>
        <Text style={{color: "#FFFFFF", fontFamily: "Fredoka", fontSize: 20, marginLeft: "10px"}}>Confirmed</Text>
      </div>
    </div>
  </div>
</div>





           </div>
           </div>
        </div>
    </>
  );
};

export default Hotel;
