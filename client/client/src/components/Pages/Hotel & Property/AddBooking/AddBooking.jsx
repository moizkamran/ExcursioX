import { React, useState } from 'react'
import { ScrollArea, Text, Title, Radio, Group, Tooltip, TextInput, Popover, Button} from '@mantine/core'
import { DatePicker } from '@mantine/dates';
import { IconQuestionCircle } from '@tabler/icons';


export const AddBooking = () => {
  const [firstNameFocused, setFirstNameFocused] = useState(false);
  const [lastNameFocused, setLastNameFocused] = useState(false);
  const [ourCustomer, setOurCustomer] = useState(true);


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
              
            <div style={{ display: "flex", alignItems: "center", marginTop: 25 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 38, height: 38, borderRadius: 35, backgroundColor: '#07399E' }}>
                <Text style={{ color: 'white', fontFamily: 'Hammersmith One', fontSize: 20 }}>1</Text>
              </div>
              <Text style={{marginLeft: 10, fontSize: 20}}>When is this person planning to travel?</Text>
              
              </div>
                  <div style={{display: 'flex', marginTop: 20, }}>
              <DatePicker/>
                    <div>
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: 10}}>
                    <div style={{display: 'inline-flex'}}>
                    <IconQuestionCircle/>
                    <Title style={{marginLeft: 10, fontSize: 20, fontFamily: 'Fredoka', fontWeight: 400}}>What dates to select?</Title>
                      </div>
                    <Text style={{ width: 210, opacity: "70%", marginTop: 5, fontFamily: 'Fredoka', fontWeight: 400}}>Here, you can enter the date for which they
are planning to go. You can decide on what 
date by entering their flight departure date</Text> </div>
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: 10, marginTop: 10}}>
                    <div style={{display: 'inline-flex'}}>
                    <IconQuestionCircle/>
                    <Title style={{marginLeft: 10, fontSize: 20, fontFamily: 'Fredoka', fontWeight: 400}}>If there is no flight?</Title>
                      </div>
                    <Text style={{ width: 210, opacity: "70%", marginTop: 5, fontFamily: 'Fredoka', fontWeight: 400}}>If the customer is yet to book a flight or VISA then enter there planned date</Text> </div>
                    </div>
                  </div>
              </div>
          
          <div>
            
            
            <div style={{ display: "flex", alignItems: "center", marginTop: 30 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 38, height: 38, borderRadius: 35, backgroundColor: '#07399E' }}>
                <Text style={{ color: 'white', fontFamily: 'Hammersmith One', fontSize: 20 }}>2</Text>
              </div>
              <Text style={{marginLeft: 10, fontSize: 25, fontFamily: 'Fredoka', fontWeight: 500}}>Who is this person?</Text>
              
              </div>
            <div style={{display: 'inline-flex', marginTop: 10}}>
                    
                    <Title style={{fontSize: 20, fontFamily: 'Fredoka', fontWeight: 400}}>Are they our customer?</Title> <Tooltip
      label="Have they ever been our customer weather that be a VISA, Flight, Transport or Hotel"
      color="dark"
      multiline
      width={220}
      position="right"
      withArrow><a><IconQuestionCircle style={{marginLeft: 10, opacity: "75%"}}/></a></Tooltip>
                      </div>
          <div style={{display: 'flex', marginTop: 10, }}>
          <Radio
          label="Yes"
          value="yes"
          name='customer'
          onChange={() => setOurCustomer(true)}
          style={{marginTop: 10}}
          />
          <Radio
          label="No"
          value="no"
          name='customer'
          onChange={() => setOurCustomer(false)}
          style={{marginTop: 10, marginLeft: 10}}
          />
          </div>

          {!ourCustomer && (
            <div style={{display: 'flex', flexDirection: 'row', width: 400}}>
            <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
              <div style={{marginTop: 10}}>
                <Text style={{fontFamily: 'Fredoka', fontWeight: 400, marginBottom: 5}}>First Name</Text>
              <TextInput
                radius="xl"
                onFocus={() => setFirstNameFocused(true)}
                onBlur={() => setFirstNameFocused(false)}
                inputContainer={(children) => (
                  <Tooltip label="Enter First Name as on Passport/ID Card" position="top-start" opened={firstNameFocused}>
                    {children}
                  </Tooltip>
                )}
              />
                </div>
              <div style={{marginTop: 10}}>
                <Text style={{fontFamily: 'Fredoka', fontWeight: 400, marginBottom: 5}}>Last Name</Text>
              <TextInput
                radius="xl"
                onFocus={() => setLastNameFocused(true)}
                onBlur={() => setLastNameFocused(false)}
  
                inputContainer={(children) => (
                  <Tooltip label="Enter Last/Family Name as on Passport/ID Card" position="top-start" opened={lastNameFocused}>
                    {children}
                  </Tooltip>
                )}
              />
                </div>
          
              </div>
                        </div>
          )}

          
          </div> {/* END */}
        </div> </ScrollArea.Autosize>
    </div>
    </>
  )
}

export default AddBooking