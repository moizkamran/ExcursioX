import { Group, Input, TextInput, Title, Tooltip, Text, Radio, Flex, Button, Container, ActionIcon, NativeSelect} from '@mantine/core'
import { IconAlertCircle, IconArrowBadgeLeft, IconArrowBadgeRight, IconQuestionCircle, IconSearch, IconMoon, IconArrowLeft, IconArrowRight, IconBread, IconParking, IconPlus } from '@tabler/icons'
import React from 'react'

export const PropertyFacilites = ({ onButtonClick, onBackClick }) => {
  
  return (
    <>
    <div style={{ display: "flex", flexDirection:'row', padding: 20}}> 
    
    <div style={{ margin: "0", padding: "0", display: 'flex', gap: 20}}> 
 

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
                data={["React", "Vue", "Angular", "Svelte"]}
                label="Apartment Type"
                radius="md"
                size="md"
                />
            <NativeSelect
                data={["React", "Vue", "Angular", "Svelte"]}
                label="Apartment Type"
                radius="md"
                size="md"
                />
            <NativeSelect
                data={["React", "Vue", "Angular", "Svelte"]}
                label="Apartment Type"
                radius="md"
                size="md"
                />
            </div>
            <div>
            <Text>Do guests need to reserve a parking space?</Text>
            <NativeSelect
                data={["Yes", "No"]}
                radius="md"
                size="md"
                style={{width: 150}}
                />
            </div>
            <div>
            <Text>Price for Parking Per Day</Text>
            <TextInput
                variant="unstyled"
                rightSection={<Text>PKR</Text>}
                styles={{
                    input : {
                        fontSize: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                    }
                }}
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
                          Add Another Bed
                        </Text>
                      </Flex>
            </div>
            
                </div> {/* Breakfast Module END */}

        </div>
        
      </div>

      <div>

        <div style={{ display : 'flex', flexDirection: 'column'}}>
            <Title>Property Address</Title>
            <div style={{marginTop: 10}}>
                <Text style={{ fontFamily: 'Fredoka', fontSize: 15 }}>Street Address</Text>
            <Input
      radius={'md'}
      size="sm"
      style={{ width: 300, marginTop: 10 }}
      rightSection={
          <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      }
      />
      </div>
      <div style={{marginTop: 10}}>
                <Text style={{ fontFamily: 'Fredoka', fontSize: 15 }}>Address Line 2</Text>
            <Input
      radius={'md'}
      size="sm"
      style={{ width: 300, marginTop: 10 }}
      rightSection={
          <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      }
      />
      </div>
      <div style={{display: 'flex', flexDirection: 'row', gap: 10}}>

      <div style={{marginTop: 10}}>
                <Text style={{ fontFamily: 'Fredoka', fontSize: 15 }}>Country</Text>
            <Input
      radius={'md'}
      size="sm"
      style={{ width: 150, marginTop: 10 }}
      rightSection={
        <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      }
      />
      </div>
      <div style={{marginTop: 10}}>
                <Text style={{ fontFamily: 'Fredoka', fontSize: 15 }}>Country</Text>
            <Input
      radius={'md'}
      size="sm"
      style={{ width: 150, marginTop: 10 }}
      rightSection={
        <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      }
      />
      </div>

      </div>

        </div>
        <div style={{backgroundColor: '#FFFFFF', height: 150, width: 400, borderRadius: 20, marginTop: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 20, border: '2px dashed #07399E'}}>
  <div>
    <div style={{borderRadius: '50%', width: '100px', height: '100px', backgroundColor: '#F0F0F0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <span style={{fontSize: '50px', fontWeight: 'bold', fontFamily: 'Fredoka'}}>!</span>
    </div>
  </div>
  <div style={{display: 'flex'}}>
    <div style={{display: 'flex', flexDirection: 'column', width: 'inherit', marginLeft: 10}}>
      <Text style={{fontSize: '24px'}}>We care about you!</Text>
      <Text fz="sm">Please make sure that everything that you are entering is to the best of your knowledge, as this will help avoid any errors in the future.</Text>
    </div>
  </div>
</div>

      
      </div>

      <div style={{display: 'flex'}}>

        <div style={{ display : 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', flexDirection: 'column',width: '300px', height: 'auto', backgroundColor: '#07399E', borderRadius: 35, color: 'white', padding: 45 }}>
            <Text style={{fontSize: 25}}>Step 1 out of 5</Text> 
            
              <div style={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
              <IconSearch size={100} color={'#00194B'}/>
              <Text align='center' style={{ marginTop: 30 }}>Let’s get to know a bit more about this amazing property of yours so that we can understand what we are working with</Text>
              <Button style={{backgroundColor: 'black', bottom: 0, position: 'relative', height: '50px', width: '100%', marginTop: 30}} leftIcon={<IconQuestionCircle/>}>Need Help?</Button>

              </div>

          </div>
            
        </div>
      </div>
      
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', position: 'fixed', bottom: 0, right: 0, marginRight: 20, marginBottom: 20}}>
      <ActionIcon onClick={onBackClick} radius="xl" variant="filled" style={{backgroundColor: 'black', height: '50px', width: '50px', marginRight: 10}}>
      <IconArrowLeft size="1.5rem" />
    </ActionIcon>
        <Button onClick={onButtonClick} rightIcon={<IconArrowRight/>} style={{backgroundColor: '#07399E', height: '50px', width: '200px'}}>Next Step</Button>
      </div>
      
    </div> </div>
      </>
  )
}

export default PropertyFacilites