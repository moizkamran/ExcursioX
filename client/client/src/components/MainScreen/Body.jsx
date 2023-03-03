import Test from "./Test";
import { Text, Title, Card, Button } from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconBusinessplan } from "@tabler/icons";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

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
          <Test />
        </div>

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
