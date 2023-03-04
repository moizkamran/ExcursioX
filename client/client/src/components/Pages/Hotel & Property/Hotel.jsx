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
    labels: ['Occupancy', 'Vacancy', 'Out of Order', 'Off Market'],
    datasets: [
      {
        label: 'Yesterday',
        backgroundColor: '#8F00FF',
        hoverBackgroundColor: '#BF6EFE',
        data: [
          UserData[0].occupancy,
          UserData[0].vacancy,
          UserData[0].outOfOrder,
          UserData[0].offMarket,
        ],
      },
      {
        label: 'Recent',
        backgroundColor: '#6EB0FE',
        hoverBackgroundColor: '#3782DB',
        data: [
          UserData[1].occupancy,
          UserData[1].vacancy,
          UserData[1].outOfOrder,
          UserData[1].offMarket,
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
        beginAtZero: true
      }
    },
    elements: {
      bar: {
        borderRadius: 10
      }
    }
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
              <Title style={{fontFamily:"Fredoka", fontWeight: 400}}>{formattedDate}</Title>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center" }}>

          <div style={{width: 1000, height: 400}}>
            <Title fw={20} fz="xl" style={{marginTop: 20, marginBottom: 20 }}>Daily Statistics</Title>
          <Bar
      data={chartData}
      options={optionsBar}
    />

        
    </div>
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

    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left"}}>
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
