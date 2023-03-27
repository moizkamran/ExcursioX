import { Button, Checkbox, Flex, NativeSelect, Text, TextInput, Title } from '@mantine/core'
import { IconAddressBook, IconMinus, IconMoon, IconPlus, IconRocket, IconUsers } from '@tabler/icons'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updatePropertyLayout } from '../../../../../Redux/Slicers/propertySlice'
import { RoomBox } from './Functions/RoomBox'

import styles from './propertyCustomStyles.module.css'

const AddRoomForFloor = () => {

    const dispatch = useDispatch();

    const [selectedValue, setSelectedValue] = useState('');

    const handleCheckboxChange = (event) => {
        setSelectedValue(event.target.value);
    }

    const roomTypes = [
        { label: 'Single', value: 'single' },
        { label: 'Double', value: 'double' },
        { label: 'Triple', value: 'triple' },
        { label: 'Quad', value: 'quad' },
        { label: 'Family', value: 'family' },
        { label: 'Studio', value: 'studio' },
    ]

  return (
    <>
        <Flex p={20} direction={'row'}  gap={50}>

            <Flex direction={'column'} >
                <Title fz={25}>Your Configuration</Title>

                <RoomBox />

                <Flex direction={'column'}>
                    <Text>Select Room Type</Text>
                    <NativeSelect data={roomTypes} radius={'md'} color={'black'} w={200}/>
                </Flex>

                <Flex direction={'column'}>
                    <Text>Room Size</Text>
                    <TextInput radius={'md'} color={'black'} w={200}/>
                </Flex>
                
                <BasePrice1 dispatch={dispatch} updatePropertyLayout={updatePropertyLayout} />

            </Flex>

            <Flex direction={'column'}>
                <Title>Room Attributes</Title>
                <Text>You can only select one per attribute, this will decide the main
                    <br/> name for your property</Text>
                
                <Flex direction={'row'} gap={50}>
                            <Flex direction={'column'}>
                                <Title fz={25}>Class</Title>
                                    <Flex direction={'column'} gap={5}>

                                    <Checkbox label="Standard" value={'standard'} onChange={handleCheckboxChange} checked={selectedValue === 'standard'} />
                                    <Checkbox label="Economy" value={'economy'} onChange={handleCheckboxChange} checked={selectedValue === 'economy'} />
                                    <Checkbox label="Budget" value={'budget'} onChange={handleCheckboxChange} checked={selectedValue === 'budget'} />
                                    <Checkbox label="Deluxe" value={'deluxe'} onChange={handleCheckboxChange} checked={selectedValue === 'deluxe'} />
                                    <Checkbox label="Superior" value={'superior'} onChange={handleCheckboxChange} checked={selectedValue === 'superior'} />

                                    </Flex>
                            </Flex>
                            <Flex direction={'column'}>
                                <Title fz={25}>Views</Title>
                                    <Flex direction={'column'} gap={5}>

                                    <Checkbox label="Haram View" value={'haramView'}   />
                                    <Checkbox label="City View" value={'cityView'}   />
                                    <Checkbox label="Garden View" value={'gardenView'}  />
                                    <Checkbox label="Lake View" value={'lakeView'}   />
                                    <Checkbox label="Mountain View" value={'mountainView'}  />
                                    <Checkbox label="Park View" value={'parkView'}  />
                                    <Checkbox label="Pool View" value={'poolView'}   />
                                    <Checkbox label="Sea View" value={'seaView'}  />

                                    </Flex>
                            </Flex>
                            <Flex direction={'column'}>
                                <Title fz={25}>Ameneties</Title>
                                    <Flex direction={'column'} gap={5}>

                                    <Checkbox label="Shared Bathroom" value={'standard'}  />
                                    <Checkbox label="Private Bathroom" value={'economy'}  />
                                    <Checkbox label="Terrace" value={'budget'}  />
                    
                                    </Flex>
                            </Flex>
                </Flex>
                
                <Title mt={20}>
                    Same Rooms
                </Title>
                <Text>How many same rooms like this are <br/> there in this floor?</Text>

                <Flex direction={"row"}>
                          <SameRooms     />
                </Flex>

                <Title mt={20}>Room Properties</Title>
                <Text w={400}>You can also add room properties which include photos, amenities, house rules, etc later in the dashboard </Text>
                <Button style={{ backgroundColor: '#FAFAFA', color: 'black'}} w={200} leftIcon={<IconRocket />} className={styles.hoverClass}> Launch Room Editor</Button>
            </Flex>
        </Flex>
    </>
  )
}

export default AddRoomForFloor

function BasePrice1({dispatch, updatePropertyLayout}) {
    return (
        <Flex direction={'column'}>
    <div style={{
height: "100px",
padding: "10px",
width: "400px",

backgroundColor: "#F1F1F1",
borderRadius: "20px",
alignItems: "center",
justifyContent: "center"
}}>
            <div style={{
alignItems: "center",
display: "flex",
justifyContent: "center"
}}>
                <IconMoon size={25} className="IconBed" />
                <Text style={{
    marginLeft: 10
}} color="black">
                Base Price /Night
                </Text>
            </div>
            <div style={{
display: "flex",
alignContent: "center",
justifyContent: "center"
}}>
                <TextInput onChange={v => {
    dispatch(updatePropertyLayout({
    basePrice: v.target.value
    }));
}} variant="unstyled" rightSection={<Text>PKR</Text>} styles={{
    input: {
    color: "white",
    fontSize: "20px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
    }
}} style={{
    width: "150px",
    height: "50px",
    marginTop: "10px  ",
    backgroundColor: "#07399E",
    borderRadius: "20px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "20px"
}} />
            </div>
            </div>
            <Text w={300}>This is the lowest price that we automatically apply to this room for all dates. 
                Before your property goes live, you can set seasonal pricing on your property dashboard.</Text>
            </Flex>
            );

}

function SameRooms({}) {
    return (<Flex mt={10} style={{
alignItems: "center",
gap: "10px"
}}>
                        <div style={{
display: "flex",
alignItems: "center",
justifyContent: "center",
gap: "10px",
textAlign: "center"
}}>
                            <Flex>
                            <button style={{
    border: "none",
    background: "none"
    }}>
                            <IconPlus className={styles.hoverClass} style={{
        cursor: "pointer",
        marginTop: "10px",
        marginRight: "10px"
    }} size={25} />
                            </button>
                            <div style={{
    display: "flex",
    justifyContent: "center",
    color: "white",
    backgroundColor: "black",
    borderRadius: "40px",
    height: "40px",
    width: "40px",
    alignItems: "center",
    userSelect: "none"
    }}>
                                <Text style={{
        fontSize: "20px"
    }}>1</Text>
                            </div>
                            <button style={{
    border: "none",
    background: "none"
    }}>
                            <IconMinus style={{
        marginTop: "10px",
        marginLeft: "10px",
        cursor: "pointer"
    }} className={styles.hoverClass} size={25} />
                            </button>      
                            </Flex>
                        </div>
                        </Flex>);
}