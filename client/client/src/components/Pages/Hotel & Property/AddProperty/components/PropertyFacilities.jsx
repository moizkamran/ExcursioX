import { Group, Input, TextInput, Title, Tooltip, Text, Radio, Flex, Button, Container, ActionIcon, NativeSelect, Checkbox} from '@mantine/core'
import { IconAlertCircle, IconArrowBadgeLeft, IconArrowBadgeRight, IconQuestionCircle, IconSearch, IconMoon, IconArrowLeft, IconArrowRight, IconBread, IconParking, IconPlus, IconLanguageHiragana, IconApps, IconWifi, IconGlass, IconBrightnessHalf, IconLeaf, IconFence, IconSmokingNo, IconBath, IconAirConditioning, IconHorseToy, IconPool, IconMessage } from '@tabler/icons'
import React from 'react'

export const PropertyFacilites = () => {
  
  return (
    <>
    <div style={{ display: "flex", flexDirection:'row', padding: 20, justifyContent: 'space-between'}}> 
    
    <div style={{ margin: "0", padding: "0", display: 'flex', gap: 20, justifyContent: 'space-between'}}> 
 

        <div> 

        <div style={{ display : 'flex', flexDirection: 'column', gap: 5}}>
            {/* Parking Module START */}
            <div style={{gap: 8, display: 'flex', flexDirection: 'column'}}>

            <div style={{flexDirection: 'row', display: 'flex', alignContent: 'center', alignItems: 'center', gap: 5 }}>
                    <IconParking size={'50'}/>
                    <Title mt={5}>Parking</Title>
                </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: 20,  marginTop: 10}}>

            <NativeSelect
                data={["No", "Yes - Free", "Yes - Paid" ]}
                label="Is Parking avaiable to guests?"
                radius="md"
                size="md"
                />
            <NativeSelect
                data={["Private", "Public"]}
                label="Type of Parking"
                radius="md"
                size="md"
                />
            <NativeSelect
                data={["On-Site", "Off-site"]}
                label="Parking Space"
                radius="md"
                size="md"
                />
            </div>
            <div>
            <Text>Do guests need to reserve a parking space?</Text>
            <NativeSelect
                data={["Reservations not required", "Reservations required"]}
                radius="md"
                size="md"
                style={{width: 'max-content'}}
                />
            </div>
            <div>
            <Text>Price for Parking Per Day</Text>
            <TextInput
                variant="unstyled"
                rightSection={<Text>PKR</Text>}
                styles={{
                  input : {
                      fontSize: "15px",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "left",
                      marginLeft: 10,
                  }}}
                style={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "10px",
                    border: "1px solid #ced4da",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingRight: "20px",
                }}
                />
            </div>
                </div> {/* Parking Module END */}
                {/* ----------------------------------------------------------------------------- */}
            {/* Breakfast Module START */}
            <div style={{gap: 8, display: 'flex', flexDirection: 'column', marginTop: 20}}>
                <div style={{flexDirection: 'row', display: 'flex', alignContent: 'center', alignItems: 'center', gap: 5 }}>
                    <IconBread size={'50'}/>
                    <Title mt={5}>Breakfast</Title>
                </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 20,  marginTop: 10}}>
            <Text>Is breakfast available to guests?</Text>
            <div style={{display: 'flex', flexDirection: 'row', gap: 20}}> 

            <NativeSelect
                data={["No", "Yes", "Yes, Its optional"]}
                radius="md"
                size="md"
                />
            <NativeSelect
                data={["Continental", "Asian", "Desi", "European"]}
                radius="md"
                size="md"
                />
                </div>
            </div>
            <div>
            <Text>Price for breakfast (per person, per day, <br/> including all fees and taxes)</Text>
            <TextInput
                variant="unstyled"
                rightSection={<Text>PKR</Text>}
                styles={{
                    input : {
                        fontSize: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "left",
                        marginLeft: 10,
                    }
                }}
                style={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "10px",
                    border: "1px solid #ced4da",
                    marginTop: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingRight: "20px",
                }}
                />
                <Flex
                        mt={10}
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                        
                        >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            backgroundColor: "#07399E",
                            borderRadius: "40px",
                            height: "25px",
                            width: "25px",
                            cursor: "pointer",
                          }}
                          >
                          <IconPlus size={15} className="IconBed" />
                        </div>
                        <Text ml={10} bold size={"md"}>
                          Add Another Breakfast Type
                        </Text>
                      </Flex>
            </div>
            
                </div> {/* Breakfast Module END */}

        </div>
        
      </div>

      <div>

        <div style={{ display : 'flex', flexDirection: 'column' }}>
                <div style={{flexDirection: 'row', display: 'flex', alignContent: 'center', alignItems: 'center', gap: 5 }}>
                    <IconLanguageHiragana size={'50'}/>
                    <Title mt={5}>Languages</Title>
                </div>
                <div style={{ marginTop: 15}}>
            <Text fw={500}>What languages do you or your staff speak?</Text>
            <NativeSelect
                data={["English", "Urdu", "Arabic", "Hindi", "Chinese", "Spanish", "French", "German", "Italian", "Japanese", "Korean", "Portuguese", "Russian", "Turkish", "Other"]}
                radius="md"
                size="md"
                style={{width: 150, marginTop: 10}}
                />
              <Flex
                        mt={10}
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                        
                        >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            backgroundColor: "#07399E",
                            borderRadius: "40px",
                            height: "25px",
                            width: "25px",
                            cursor: "pointer",
                          }}
                          >
                          <IconPlus size={15} className="IconBed" />
                        </div>
                        <Text ml={10} bold size={"md"}>
                          Add Another Language
                        </Text>
                      </Flex>
            </div>
      <div style={{marginTop: 20}}>
            <div style={{flexDirection: 'row', display: 'flex', alignContent: 'center', alignItems: 'center', gap: 5 }}>
                    <IconApps size={'50'}/>
                    <Title mt={5}>Facilites</Title>
              </div>
                  <div style={{display: 'flex', gap: 50}}>
                    <div style={{gap: 15, display: 'flex', flexDirection: 'column', marginTop: 20}}>
                      <Checkbox label="Free Wifi" icon={IconWifi} size="md" color="dark" />
                      <Checkbox label="Bar" icon={IconGlass} size="md" color="dark" />
                      <Checkbox label="Sauna" icon={IconBrightnessHalf} size="md" color="dark" />
                      <Checkbox label="Garden" icon={IconLeaf} size="md" color="dark" />
                      <Checkbox label="Terrance" icon={IconFence} size="md" color="dark" />
                    </div>
                    <div style={{gap: 15, display: 'flex', flexDirection: 'column', marginTop: 20}}>
                      <Checkbox label="No Smoking Rooms" icon={IconSmokingNo} size="md" color="dark" />
                      <Checkbox label="Family Rooms" icon={IconHorseToy} size="md" color="dark" />
                      <Checkbox label="Hot tub/Jacuzzi" icon={IconBath} size="md" color="dark" />
                      <Checkbox label="Air Conditioning" icon={IconAirConditioning} size="md" color="dark" />
                      <Checkbox label="Swimming Pool" icon={IconPool} size="md" color="dark" />
                    </div>
                  </div>
      </div>
      </div>
      </div>

      
      
      
    </div> 
    </div>
      </>
  )
}

export default PropertyFacilites