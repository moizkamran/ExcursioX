import { React, useState } from 'react'
import { ScrollArea, Text, Title, Radio, Group, Tooltip, TextInput, Popover, Button} from '@mantine/core'
import { DatePicker } from '@mantine/dates';
import { IconQuestionCircle } from '@tabler/icons';


export const AddBooking = () => {

  return (
    
    <>
        <div
          style={{
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
            <Text style={{ marginBottom: 10 }}>Home {'>'} Add Booking</Text>
            <Title order={2} style={{fontSize: 40}}>New Booking Wizard</Title>

            <div style={{ display: "flex", alignItems: "center", marginTop: 5 }}>
              <Text>Let's help you start a new booking request!</Text>
            </div>
           
            <div style={{backgroundColor: '#07399E', borderRadius: '0px 45px 0px 0px', width: 'max-content', padding: 30, color: 'white'}}>
            
            <div>
              
            <Heading   series={1} title={'When is this person planning to travel?'}  />
            
                 <DateArea     />
              </div>
             
            </div>

        </div>
    </>
  )
}


function Heading({series, title}) {
  return (<div style={{
  display: "flex",
  alignItems: "center",
  marginTop: 25
}}>
        <div style={{
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
position: 'relative',
width: 38,
height: 38,
borderRadius: 35,
backgroundColor: 'black'
}}>
            <Text style={{
  color: 'white',
  fontFamily: 'Hammersmith One',
  fontSize: 20
}}>{series}</Text>
          </div>
          <Text style={{
marginLeft: 10,
fontSize: 20
}}>{title}</Text>
          
          </div>);
}

function DateArea({}) {
  return (<div style={{
display: 'flex',
marginTop: 20
}}>

                <div style={{
padding: '20px',
borderRadius: 25,
backgroundColor: 'white',
marginRight: 20
}}>
          <DatePicker />
                </div>

                <div>
                    <div style={{
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 10
}}>
                    <div style={{
    display: 'inline-flex'
  }}>
                    <IconQuestionCircle />
                    <Title style={{
      marginLeft: 10,
      fontSize: 20,
      fontFamily: 'Fredoka',
      fontWeight: 400
    }}>What dates to select?</Title>
                      </div>
                    <Text style={{
    width: 210,
    opacity: "70%",
    marginTop: 5,
    fontFamily: 'Fredoka',
    fontWeight: 400
  }}>Here, you can enter the date for which they
                      are planning to go. You can decide on what 
                      date by entering their flight departure date</Text> </div>
                <div style={{
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 10,
  marginTop: 10
}}>
                <div style={{
    display: 'inline-flex'
  }}>
                <IconQuestionCircle />
                <Title style={{
      marginLeft: 10,
      fontSize: 20,
      fontFamily: 'Fredoka',
      fontWeight: 400
    }}>If there is no flight?</Title>
                  </div>
                <Text style={{
    width: 210,
    opacity: "70%",
    marginTop: 5,
    fontFamily: 'Fredoka',
    fontWeight: 400
  }}>If the customer is yet to book a flight or VISA then enter there planned date</Text> </div>
                </div>
              </div>);
}
  

export default AddBooking