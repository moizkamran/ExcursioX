import { React, useState } from 'react'
import { ScrollArea, Text, Title } from '@mantine/core'


export const AddBooking = () => {

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
        <ScrollArea.Autosize mah={"100%"} mx="auto">
        <div
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
          }}
        >
          
          <Text style={{ marginBottom: 10 }}>Home {'>'} Add Booking</Text>
          <Title order={2} style={{fontSize: 40}}>New Booking Wizard</Title>
          <div style={{ display: "flex", alignItems: "center", marginTop: 5 }}>
            <Text>Let's help you start a new booking request!</Text>
            </div>
           
            
            <div>
            <div style={{ display: "flex", alignItems: "center", marginTop: 5 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 38, height: 38, borderRadius: 35, backgroundColor: '#07399E' }}>
                <Text style={{ color: 'white', fontFamily: 'Hammersmith One', fontSize: 20 }}>1</Text>
              </div>
              <Text style={{marginLeft: 10, fontSize: 20}}>When is this person planning to travel?</Text>
              </div>
            </div>
        </div> </ScrollArea.Autosize>
    </div>
    </>
  )
}
