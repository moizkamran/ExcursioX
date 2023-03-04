import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';



import { Text, Title, Card, Button } from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconBusinessplan } from "@tabler/icons";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Hotel = () => {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  

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
           
           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Title fw="xl" style={{ marginRight: "auto" }}>Hotel Board</Title>
              <Title style={{fontFamily:"Fredoka"}}>{formattedDate}</Title>
          </div>
           <Bar options={options} data={data} />
           </div>
        </div>
    </>
  );
};

export default Hotel;
