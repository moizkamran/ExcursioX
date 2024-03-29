import { React, useState } from 'react'
import { ScrollArea, Text, Title, Radio, Group, Tooltip, TextInput, Popover, Button, Flex, Avatar, Modal} from '@mantine/core'
import { DatePicker } from '@mantine/dates';
import { IconCrown, IconPlus, IconQuestionCircle } from '@tabler/icons';
import PassengerAdd from './PassengerAdd';
import { useSelector } from 'react-redux';




export const AddBooking = () => {
  const [addPassengerModal, setAddPassengerModal] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  

  const passengers = useSelector(state => state.passengers.passengersICB);

  const renderPassengers = () => passengers.map((passenger, index) => (
    <PassengerVessel key={index} 
      passport_picture={passenger.passportDetails.passport_photo} 
      passport_number={passenger.passengerDetails.passport_number}
      given_name={passenger.passengerDetails.given_name} 
      surname={passenger.passengerDetails.surname} 
      dob={formatDate(passenger.passengerDetails.dob)} 
      passport_valid={formatDate(passenger.passportDetails.expiry_date)}
      passport_class={passenger.passportDetails.passport_type} 
      age={passenger.passengerDetails.age} 
      gender={passenger.passengerDetails.gender} 
      pob={passenger.passengerDetails.pob} 
      issue_state={passenger.passportDetails.issuing_country}
      pax={passenger.passengerDetails.pax} 
      group={passenger.groupDetails.group_name} 
      isFH={passenger.config.isFH}
    />
  ))


  return (
    
    <>
    <div style={{padding: 15}}>
    <Modal
    opened={addPassengerModal}
    onClose={() => setAddPassengerModal(false)}
    size="auto"
    xOffset={0}
    centered
    transitionProps={{ transition: 'pop', duration: 450, timingFunction: 'ease-in-out' }}
    closeOnClickOutside={true}
    radius="xl"
    overlayProps={{
      opacity: 0.30,
      blur: 1.5,
    }}
  >
    <PassengerAdd setAddPassengerModal={setAddPassengerModal}/>
    </Modal>
            <Text style={{ marginBottom: 10 }}>Home {'>'} Add Booking</Text>
            <Title order={2} style={{fontSize: 40}}>New Booking Wizard</Title>

            <div style={{ display: "flex", alignItems: "center", marginTop: 5 }}>
              <Text>Let's help you start a new booking request!</Text>
            </div>

            <Flex gap={20} justify={'start'}>

            

              <Flex direction={'column'} gap={20}>
                <Heading series={5} title={'Add Passengers'} />
                {/* Verwenden Sie map, um Werte zuzuweisen  */}
                {passengers?.length ? renderPassengers() : <Text>No Passengers Added</Text>}
                  <Button rightIcon={<IconPlus/>} w={'max-content'} onClick={() => setAddPassengerModal(true)}>Add Passenger</Button>
              </Flex>

              {/* Dynamic Configurator */}
              <div style={{display: 'flex', flex: 1}}></div>
              <Flex direction={'column'} style={{backgroundColor: '#F4F4F4', borderRadius: '25px', width: 'max-content', padding: 30, color: 'white'}}>
              
              {/* Wien mann reisen? */}
                <div>             
                  <Heading   series={1} title={'When is this person planning to travel?'}  />
                  <DateArea     />
                </div>
              {/* Wien mann reisen? ENDE */}

              {/* Wie viele Personen? */}
                <div style={{marginTop: 20}}>
                  <Heading   series={2} title={'Enterprise Booking'}  />

                    <Flex mt={20}>
                      <Text c='black'>Are they already our customer?</Text>
                    </Flex>
                    
                    <Flex align={'center'} gap={10} mt={10} >
                      <Radio label="Yes" value="yes" color='dark' styles={{label:{color: 'black'}}}/>
                      <Radio label="No" value="no" color='dark' styles={{label:{color: 'black'}}}/>
                    </Flex>
                </div>
              {/* Wie viele Personen? ENDE */}
              {/* Klasse */}
                <div style={{marginTop: 20}}>
                  <Heading   series={3} title={'What class do they want to travel in?'}  />
                  <Flex mt={20} gap={20}>
                    <ClassTier tier={'SWIFT'} gradient={'linear-gradient(180deg, #0FFF44 0%, #00C82C 100%)'}    />
                    <ClassTier tier={'NOVA'} gradient={'linear-gradient(180deg, #1E5FC1 0%, #092D63 100%)'}    />
                    <ClassTier tier={'LUXE'} gradient={'linear-gradient(180deg, #C41818 0%, #FF2E00 100%)'}    />
                    <ClassTier tier={'FLEX'} gradient={'linear-gradient(180deg, #FF7A00 0%, #C05C00 100%)'}    />
                  </Flex>
                </div>
              {/* Klasse ENDE */}
              {/* Rechnung */}
              <div>
                <Heading  series={4} title={'Invoice Type'}  />

                <Flex mt={20} w={200} bg={'black'} p={20} sx={{borderRadius: '20px'}}>
                  <Text>Select Acoomodation First</Text>
                </Flex>
              </div>
              {/* Rechnung ENDE */}
              </Flex>
              {/* Dynamic Configurator ENDE */}

            </Flex>

    </div></>
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
width: 30,
height: 30,
borderRadius: 35,
backgroundColor: `${series > 4 ? '#07399E' : '#07399E'}`,
}}>
            <Text style={{
  color: 'white',
  fontFamily: 'Hammersmith One',
  fontSize: 20
}}>{series}</Text>
          </div>
          <Text style={{
marginLeft: 10,
fontSize: 20,
color: 'black',
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
                    <IconQuestionCircle color='black'/>
                    <Title style={{
      marginLeft: 10,
      color: 'black',
      fontSize: 20,
      fontFamily: 'Fredoka',
      fontWeight: 400
    }}>What dates to select?</Title>
                      </div>
                    <Text style={{
    width: 210,
    opacity: "70%",
    marginTop: 5,
    color: 'black',
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
                <IconQuestionCircle color='black'/>
                <Title style={{
      marginLeft: 10,
      fontSize: 20,
      fontFamily: 'Fredoka',
      color: 'black',
      fontWeight: 400
    }}>If there is no flight?</Title>
                  </div>
                <Text style={{
    width: 210,
    opacity: "70%",
    color: 'black',
    marginTop: 5,
    fontFamily: 'Fredoka',
    fontWeight: 400
  }}>If the customer is yet to book a flight or VISA then enter there planned date</Text> </div>
                </div>
              </div>);
}
  
function ClassTier({tier, gradient}) {
  return (<Flex w={80} h={80} align={'center'} justify={'center'} sx={{
background: `${gradient}`,
borderRadius: '10px',
transition: 'transform 0.2s ease-in-out',
cursor: 'pointer',
':hover': {
transform: 'scale(1.09)',
}
}}>
                <Text fz={20} fw={500}>{tier}</Text>
              </Flex>);
}

function PassengerVessel({passport_picture, passport_number, given_name, surname, dob, passport_valid, passport_class, age, gender, pob, issue_state, pax, group, isFH}) {
  const isFHBorder = isFH ? '1px solid #FF9A23' : 'none'
  
  return (
  <>
  <Flex w={800} bg={'#F4F4F4'} sx={{
    borderRadius: '25px', border: `${isFHBorder}`, position: 'relative', width: 'max-content'
  }} p={20} >
              <Avatar src={passport_picture} size={120} sx={{
                borderRadius: '25px'
              }} />
              {
              isFH
              ? <Flex gap={5} bg={'#FF9A23'} c='white' w={'max-content'} p={'3px 10px 3px 10px'} sx={{borderRadius: 25, position: 'absolute', top:-15, right:40}}><IconCrown/><Text fz={14}>Family Head</Text></Flex>
              : null
              }
                <Flex direction={'column'} ml={20}>
                <Flex gap={15}>
                  <Flex direction={'column'}>
                    <Text fz={30} ff={'Kumbh Sans'} fw={700}>{passport_number}</Text>
                    <Text fz={15} ff={'Kumbh Sans'} fw={400} c={'dimmed'} mt={-5}>Passport Number</Text>
                  </Flex>
                  <Flex w={'max-content'} bg={'#D9D9D9'} sx={{
    borderRadius: '50px'
  }} justify={'center'} align={'center'} h={50}>
                    <Flex gap={15} p={'0px 15px 0px 15px'}>
                      <Flex direction={'column'}>
                        <Text fz={15} ff={'Kumbh Sans'} fw={700}>{passport_class}</Text>
                        <Text fz={10} ff={'Kumbh Sans'} fw={400} c={'dimmed'} mt={-5}>Class</Text>
                      </Flex>
                      <Flex direction={'column'}>
                        <Text fz={15} ff={'Kumbh Sans'} fw={700}>{age}</Text>
                        <Text fz={10} ff={'Kumbh Sans'} fw={400} c={'dimmed'} mt={-5}>Age</Text>
                      </Flex>
                      <Flex direction={'column'}>
                        <Text fz={15} ff={'Kumbh Sans'} fw={700}>{gender}</Text>
                        <Text fz={10} ff={'Kumbh Sans'} fw={400} c={'dimmed'} mt={-5}>Gender</Text>
                      </Flex>
                      <Flex direction={'column'}>
                        <Text fz={15} ff={'Kumbh Sans'} fw={700}>{pob}</Text>
                        <Text fz={10} ff={'Kumbh Sans'} fw={400} c={'dimmed'} mt={-5}>Place of Birth</Text>
                      </Flex>
                      <Flex direction={'column'}>
                        <Text fz={15} ff={'Kumbh Sans'} fw={700}>{issue_state}</Text>
                        <Text fz={10} ff={'Kumbh Sans'} fw={400} c={'dimmed'} mt={-5}>Issuing State</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex w={'max-content'} bg={'rgba(0, 0, 0, 0.88)'} sx={{
    borderRadius: '50px',
    color: 'white'
  }} justify={'center'} align={'center'} h={50}>
                    <Flex gap={15} p={'0px 15px 0px 15px'}>
                      <Flex direction={'column'}>
                        <Text fz={15} ff={'Kumbh Sans'} fw={700}>{pax}</Text>
                        <Text fz={10} ff={'Kumbh Sans'} fw={400} c={'dimmed'} mt={-5}>PAX Code</Text>
                      </Flex>
                      <Flex direction={'column'}>
                        <Text fz={15} ff={'Kumbh Sans'} fw={700}>{group}</Text>
                        <Text fz={10} ff={'Kumbh Sans'} fw={400} c={'dimmed'} mt={-5}>Group</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex gap={15}>

                  <Flex direction={'column'}>
                    <Text fz={20} ff={'Kumbh Sans'} fw={700}>{given_name}</Text>
                    <Text fz={15} ff={'Kumbh Sans'} fw={400} c={'dimmed'} mt={-5}>Given Name</Text>
                  </Flex>
                  <Flex direction={'column'}>
                    <Text fz={20} ff={'Kumbh Sans'} fw={700}>{surname}</Text>
                    <Text fz={15} ff={'Kumbh Sans'} fw={400} c={'dimmed'} mt={-5}>Surname</Text>
                  </Flex>
                  <Flex direction={'column'}>
                    <Text fz={20} ff={'Kumbh Sans'} fw={700}>{dob}</Text>
                    <Text fz={15} ff={'Kumbh Sans'} fw={400} c={'dimmed'} mt={-5}>Date of Birth</Text>
                  </Flex>
                  <Flex direction={'column'}>
                    <Text fz={20} ff={'Kumbh Sans'} fw={700}>{passport_valid}</Text>
                    <Text fz={15} ff={'Kumbh Sans'} fw={400} c={'dimmed'} mt={-5}>Passport Valid Until</Text>
                  </Flex>

                </Flex>
                </Flex>
            </Flex>
            </>
            );
}


  export default AddBooking