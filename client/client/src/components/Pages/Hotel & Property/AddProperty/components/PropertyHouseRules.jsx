import { Container, Flex, Text, Title, Group, NativeSelect, Slider, rem, Switch, Chip, Radio, Tooltip } from '@mantine/core'
import { IconAlertCircle, IconBabyBottle, IconClockCancel, IconDoorEnter, IconPaw, IconSmoking } from '@tabler/icons';
import React from 'react'

// Configure marks to match step
const MARKS = [
    { value: 0, label: 'Flexible' },
    { value: 25, label: '30 Days' },
    { value: 50, label: '14 Days' },
    { value: 75, label: '7 Days' },
    { value: 100, label: '1 Day' },
  ];

export const PropertyHouseRules = () => {
  return (
    <>  
        <div style={{padding: 20}}>
        <Group>
            <Flex  direction="row" gap={30}>

            <Flex
             gap="md"
             direction="column"
             >
                <Title>Cancellation</Title>
                <Text>When can your guests cancel their booking for free?</Text>
                <NativeSelect
                data={["Yes", "No"]}
                radius="md"
                size="md"
                style={{width: 150}}
                />
                <Text>Don't worry you can make changes later</Text>
                
                <div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>

                    <Text>Offer Free Cancelation</Text>
                    <Text>Guests pay total price</Text>
                    
                    </div>
                    <div>

                    <Slider
                        label={(val) => MARKS.find((mark) => mark.value === val).label}
                        defaultValue={50}
                        step={25}
                        size={30}
                        marks={MARKS}
                        styles={{ 
                            bar: { backgroundColor: '#009D77', borderTopRightRadius: 0, borderBottomRightRadius: 0 },
                            track: { backgroundColor: 'red' },
                            mark: { width: 2, height: 40, backgroundColor: 'black', border: 0, opacity: 0.1, marginLeft: 12 },
                            markLabel: { opacity: 100, color: 'black',marginTop: 20  },
                            markFilled: {  opacity: 100 },
                            thumb: { display: 'none' },
                        }}
                        />    
                        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                        <Text fw={400} style={{fontSize: 11 }}>Arrival Day</Text>
                        </div>
                        </div>
                           <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{backgroundColor: '#07399E', width: 580, height: 45, marginTop: 50, borderTopRightRadius: 20, borderTopLeftRadius: 20}}>
                                <Text style={{fontSize: 20, color:'white', marginTop: 6, marginLeft: 20}}>Your guests will see this summary when they book</Text>
                            </div>
                            <div style={{backgroundColor: '#F3F3F3', width: 580, height: 'max-content', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                                <Text style={{fontSize: 18, color:'black', marginTop: 6, marginLeft: 20, paddingBottom: 6, paddingRight: 6}}>“You can cancel for free until 30 days before arrival. You'll be charged the total price of the reservation if you cancel in the 30 days before arrival. If you don't show up, the no-show fee will be the same as the cancellation fee.”</Text>
                            </div>
                           </div>
                           <div style={{marginTop: 20, width: 580}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}><Text>Protect Against Accidental Bookings</Text> <Switch/></div>
                            <Text style={{color: 'rgba(0, 0, 0, 0.5)', marginTop: 10}}>To save you time handling accidental bookings, we automatically waive cancellation fees for guests who cancel within the first 24 hours of a booking being made. You can change this period of time later in your property management platform.</Text>
                            </div> 
                </div>

            </Flex>

                <Flex direction={'column'} gap={20} >
                        <Title>Check Times</Title>

                        <Flex gap={10}>

                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <div style={{backgroundColor: '#07399E', width: 'inherit', height: 'max-content', borderTopRightRadius: 20, borderTopLeftRadius: 20, padding: 5}}>
                                    <div style={{alignContent: 'center', alignItems: 'center', display: 'flex', gap: 5, marginLeft: 10}}><IconDoorEnter color='white'/><Text style={{fontSize: 20, color:'white' }}> Guest’s arrival time</Text></div>
                                </div>
                                <div style={{backgroundColor: '#F3F3F3', width: 'max-content', height: 'max-content', borderBottomRightRadius: 20, borderBottomLeftRadius: 20, padding: 15 }}> 
                                    <Text>from</Text>
                                    <Flex gap={10}>
                                    <Chip.Group position="center">
                                    <Chip value="1" >12:00 PM</Chip>
                                    <Chip value="2">2:00 PM</Chip>
                                    <Chip value="3">3:00 PM</Chip>
                                    <Chip value="4">Other</Chip>
                                    </Chip.Group>
                                    </Flex>
                                    <Text>to</Text>
                                    <Flex gap={10}>
                                    <Chip.Group position="center">
                                    <Chip value="1">12:00 PM</Chip>
                                    <Chip value="2">2:00 PM</Chip>
                                    <Chip value="3">3:00 PM</Chip>
                                    <Chip value="4">Other</Chip>
                                    </Chip.Group>
                                    </Flex>
                                </div>
                            </div>
                            

                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <div style={{backgroundColor: '#07399E', width: 'inherit', height: 'max-content', borderTopRightRadius: 20, borderTopLeftRadius: 20, padding: 5}}>
                                    <div style={{alignContent: 'center', alignItems: 'center', display: 'flex', gap: 5, marginLeft: 10}}><IconDoorEnter color='white'/><Text style={{fontSize: 20, color:'white' }}> Guest’s departure time</Text></div>
                                </div>
                                <div style={{backgroundColor: '#F3F3F3', width: 'max-content', height: 'max-content', borderBottomRightRadius: 20, borderBottomLeftRadius: 20, padding: 15 }}> 
                                    <Text>from</Text>
                                    <Flex gap={10}>
                                    <Chip.Group position="center">
                                    <Chip value="1" >12:00 PM</Chip>
                                    <Chip value="2">2:00 PM</Chip>
                                    <Chip value="3">3:00 PM</Chip>
                                    <Chip value="4">Other</Chip>
                                    </Chip.Group>
                                    </Flex>
                                    <Text>to</Text>
                                    <Flex gap={10}>
                                    <Chip.Group position="center">
                                    <Chip value="1">12:00 PM</Chip>
                                    <Chip value="2">2:00 PM</Chip>
                                    <Chip value="3">3:00 PM</Chip>
                                    <Chip value="4">Other</Chip>
                                    </Chip.Group>
                                    </Flex>
                                </div>
                            </div>
                        
                        </Flex>

                         <div><Title>House Rules</Title></div>
                        <Flex direction='row' style={{marginTop: 20}} gap={20}>

                            <Flex direction='column' gap={15}>
                                <div>
                                <div style={{display:'flex', flexDirection: 'row', alignContent: 'center', gap: 10}}>
                                <div style={{alignContent: 'center', alignItems: 'center', display: 'flex', gap: 5 }}><IconSmoking/><Text style={{fontSize: 18 }}> Do you allow smoking in your apartment?</Text></div>
                                    <Tooltip label="Can people smoke in rooms and in the property premises?" position="top-end" withArrow>
                                <div>
                                    <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
                                </div>
                                </Tooltip>
                                </div>

                                <div style={{display:'flex', flexDirection: 'row', alignContent: 'center', gap: 20, marginTop: 10}}> 
                                <Radio
                            label="Yes"
                            color="dark"
                            value="yes"
                            />
                            <Radio
                            label="No"
                            color="dark"
                            value="no"
                            />
                                </div>
                            </div>
                                <div>
                                <div style={{display:'flex', flexDirection: 'row', alignContent: 'center', gap: 10}}>
                                <div style={{alignContent: 'center', alignItems: 'center', display: 'flex', gap: 5 }}><IconBabyBottle/><Text style={{fontSize: 18 }}>Can you accomodate children in your apartment?</Text></div>
                                    <Tooltip label="Can people smoke in rooms and in the property premises?" position="top-end" withArrow>
                                <div>
                                    <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
                                </div>
                                </Tooltip>
                                </div>

                                <div style={{display:'flex', flexDirection: 'row', alignContent: 'center', gap: 20, marginTop: 10}}> 
                                <Radio
                            label="Yes"
                            color="dark"
                            value="yes"
                            />
                            <Radio
                            label="No"
                            color="dark"
                            value="no"
                            />
                                </div>
                            </div>
                                <div>
                                <div style={{display:'flex', flexDirection: 'row', alignContent: 'center', gap: 10}}>
                                <div style={{alignContent: 'center', alignItems: 'center', display: 'flex', gap: 5 }}><IconPaw/><Text style={{fontSize: 18 }}>Do you allow pets?</Text></div>
                                    <Tooltip label="Can people smoke in rooms and in the property premises?" position="top-end" withArrow>
                                <div>
                                    <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
                                </div>
                                </Tooltip>
                                </div>

                                <div style={{display:'flex', flexDirection: 'row', alignContent: 'center', gap: 20, marginTop: 10}}> 
                                <Radio
                            label="Yes"
                            color="dark"
                            value="yes"
                            />
                            <Radio
                            label="No"
                            color="dark"
                            value="no"
                            />
                                </div>
                            </div>
                        </Flex>
                        
                        <Flex direction='column'>
                        <Text>Do you require a minimum stay for your guests?</Text>
                            <NativeSelect
                            data={["1 Night", "2 Nights", "3 Nights", "4 Nights", "5 Nights", "6 Nights", "7 Nights", "8 Nights", "9 Nights", "10 Nights", "11 Nights", "12 Nights" ]}
                            radius="md"
                            size="md"
                            style={{width: 150}}
                            />
                            <Text mt={10} c="dimmed">Guests are more likely to book when you <br/> don't set a minimum stay requirement.</Text>
                        </Flex>


                        </Flex>

                </Flex>
        </Flex>
            

        </Group>
    </div>
    </>
  )
}

export default PropertyHouseRules