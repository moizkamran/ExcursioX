import { Button, Checkbox, Flex, Modal, NativeSelect, Radio, Text, TextInput, Title } from '@mantine/core'
import { IconAddressBook, IconArrowsCross, IconCross, IconMinus, IconMoon, IconPlus, IconRocket, IconSquareRoundedX, IconUsers, IconX } from '@tabler/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRoomToFloor, updatePropertyDetails, updatePropertyLayout } from '../../../../../Redux/Slicers/propertySlice'
import { RoomBox } from './Functions/RoomBox'

import { v4 as uuidv4 } from 'uuid';


import styles from './propertyCustomStyles.module.css'

const AddRoomForFloor = ({ floorIndex, roomIndex, onModalClose }) => {

const dispatch = useDispatch();
const { propertyDetails } = useSelector((state) => state.property);
const floors = propertyDetails.floors;
const rooms = floors[floorIndex].rooms;
const room = rooms[roomIndex];

const [roomType, setRoomType] = useState(room.roomType);

const [roomSize, setRoomSize] = useState(room.roomSize || '');

console.log(roomIndex)

const [selectedValue, setSelectedValue] = useState('');

const [roomClassValues, setRoomClassValues] = useState(room.checkboxValues || {});

const [roomViewValues, setRoomViewValues] = useState(room.checkboxValues || {});


const roomViewFormatted = Object.keys(roomViewValues)
  .map(key => key.replace(/([A-Z])/g, ' $1').trim())
  .map(key => key.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
  .join(', ');



const handleRoomClass = (event) => {
    const roomClassValue = event.target.value;
    setRoomClassValues(roomClassValue.charAt(0).toUpperCase() + roomClassValue.slice(1));
};
  


const handleRoomView = (event) => {
    const roomViewValues = event.target.value;
    setRoomViewValues(roomViewValues);
  };
  
//GENERIC STATE HANDLERS
const [basePrice, setBasePrice] = useState(room.basePrice || '');
const [alert, setAlert] = useState(false);

const handleRoomSizeChange = (event) => {
    const newRoomSize = event.target.value;
    const newRooms = [...rooms];
    setRoomSize(newRoomSize);
    const newRoom = { ...newRooms[roomIndex], roomSize: newRoomSize };
    newRooms[roomIndex] = newRoom;
    dispatch(updatePropertyDetails({ floors: floors }));
};

const handleBasePriceChange = (event) => {
    const newBasePrice = event.target.value;
    const newRooms = [...rooms];
    setBasePrice(newBasePrice);
    const newRoom = { ...newRooms[roomIndex], basePrice: newBasePrice };
    newRooms[roomIndex] = newRoom;
    dispatch(updatePropertyDetails({ floors: floors }));
};
  console.log(typeof roomClassValues);


const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    console.log(selectedType);
    
    const newRooms = [...rooms];
    const newRoom = { ...newRooms[roomIndex], type: selectedType };
    newRooms[roomIndex] = newRoom;
    setRoomType(selectedType); // set the roomType state variable with the selected type
    console.log(newRooms);
    
    
    dispatch(updatePropertyDetails({ floors: floors }));
  };
  
  
const roomTypes = [
    { label: 'Single', value: 'Single' },
    { label: 'Double', value: 'Double' },
    { label: 'Triple', value: 'Triple' },
    { label: 'Quad', value: 'Quad' },
    { label: 'Family', value: 'Family' },
    { label: 'Studio', value: 'Studio' },
]

const [roomCount, setRoomCount] = useState(0);

const handleMinusClick = () => {
    if (roomCount > 0) {
    setRoomCount(roomCount - 1);
    }
  };

  const handlePlusClick = () => {
    setRoomCount(roomCount + 1);
  };

const handleSave = () => {
    if (!roomType || roomSize === 0 || basePrice === 0) {
      setAlert(true);
      return;
    }
  
    const newRooms = [...rooms];
  
    // Add the original room
    const newRoom = {
      ...room,
      roomId: uuidv4(),
      type: roomType,
      basePrice: basePrice,
      roomSize: roomSize,
      roomClass: roomClassValues,
      roomView: roomViewValues,
    };
    newRooms[roomIndex] = newRoom;
  
    // Add additional rooms
    for (let i = 1; i <= roomCount; i++) {
      const additionalRoom = {
        ...newRoom,
        id: uuidv4(),
        roomNumber: roomIndex + i + 1,
      };
      newRooms.push(additionalRoom);
    }
  
    const newFloors = [...floors];
    newFloors[floorIndex] = { ...floors[floorIndex], rooms: newRooms };
    const newPropertyDetails = { ...propertyDetails, floors: newFloors };
    dispatch(updatePropertyDetails(newPropertyDetails));
    onModalClose(false);
  };
  
  
  const roomName = (typeof roomClassValues === 'string' ? roomClassValues : '') + (roomType ? ` ${roomType}` : '') + (typeof roomViewValues === 'string' ? ' with ' + roomViewValues : '');

  console.log(rooms)

  return (
    <>
    <Modal size="auto"
       xOffset={0}
       centered
       opened={alert}
       transitionProps={{ transition: 'pop', duration: 300, timingFunction: 'ease-in-out' }}
      radius="xl"overlayProps={{
        opacity: 0.5,
      }}
      zIndex={350}
      withCloseButton={false} >
                    <Flex direction={'column'} p={20}>
                        
        <Title fz={20}>An error ocurred while saving {`Room ${roomIndex + 1}`}</Title>
        <Text>Please make sure that all fields are populated.</Text>
        <Flex justify={'flex-end'} gap={10}>

            <Button mt={15} onClick={() => setAlert(false)}>Okay</Button>

        </Flex>
      </Flex>
            </Modal>
        <Flex p={20} direction={'row'}  gap={50}>

            

            <Flex direction={'column'} >
                <Title fz={25}>Your Configuration</Title>
                <Text>Adding Room for {floors[floorIndex].name}</Text>
                    <Flex p={50}>
                    <RoomBox 
  roomType={roomType} 
  roomNumber={roomIndex+1} 
  roomTotalBeds={roomSize} 
  basePrice={basePrice} 
  roomName={roomName}
/>


                    </Flex>
                <Flex direction={'column'}>
                    <Text>Select Room Type</Text>
                    <NativeSelect
                                data={roomTypes}
                                radius="md"
                                color="black"
                                w={200}
                                value={roomType}
                                onChange={handleTypeChange}
                                />
                </Flex>

                <Flex direction={'column'} mt={10} mb={20}>
                    <Text>Room Size</Text>
                    <TextInput radius={'md'} color={'black'} w={200} value={roomSize} onChange={handleRoomSizeChange}/>
                </Flex>
                
                <BasePrice1 basePrice={basePrice} handleBasePriceChange={handleBasePriceChange} />

            </Flex>

            <Flex direction={'column'}>
                <Title>Room Attributes</Title>
                <Text>You can only select one per attribute, this will decide the main
                    <br/> name for your property</Text>
                
                <Flex direction={'row'} gap={50}>
                            <Flex direction={'column'}>
                                <Title fz={25}>Class</Title>
                                    <Flex direction={'column'} gap={5}>

                                                                            <Radio
                                        label="Standard"
                                        value="standard"
                                        onChange={handleRoomClass}
                                        checked={roomClassValues === "Standard"}
                                        />
                                        <Radio
                                        label="Economy"
                                        value="economy"
                                        onChange={handleRoomClass}
                                        checked={roomClassValues === "Economy"}
                                        />
                                        <Radio
                                        label="Budget"
                                        value="budget"
                                        onChange={handleRoomClass}
                                        checked={roomClassValues === "Budget"}
                                        />
                                        <Radio
                                        label="Deluxe"
                                        value="deluxe"
                                        onChange={handleRoomClass}
                                        checked={roomClassValues === "Deluxe"}
                                        />
                                        <Radio
                                        label="Superior"
                                        value="superior"
                                        onChange={handleRoomClass}
                                        checked={roomClassValues === "Superior"}
                                        />

                                    </Flex>
                            </Flex>
                            <Flex direction={'column'}>
                                <Title fz={25}>Views</Title>
                                    <Flex direction={'column'} gap={5}>

                                    <Radio label="Haram View" value="Haram View" onChange={handleRoomView} checked={roomViewValues === 'Haram View'} />
                                    <Radio label="City View" value="City View" onChange={handleRoomView} checked={roomViewValues === 'City View'} />
                                    <Radio label="Garden View" value="Garden View" onChange={handleRoomView} checked={roomViewValues === 'Garden View'} />
                                    <Radio label="Lake View" value="Lake View" onChange={handleRoomView} checked={roomViewValues === 'Lake View'} />
                                    <Radio label="Mountain View" value="Mountain View" onChange={handleRoomView} checked={roomViewValues === 'Mountain View'} />
                                    <Radio label="Park View" value="Park View" onChange={handleRoomView} checked={roomViewValues === 'Park View'} />
                                    <Radio label="Pool View" value="Pool View" onChange={handleRoomView} checked={roomViewValues === 'Pool View'} />
                                    <Radio label="Sea View" value="Sea View" onChange={handleRoomView} checked={roomViewValues === 'Sea View'} />


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
                          <SameRooms  roomCount={roomCount}  handleMinusClick={handleMinusClick} handlePlusClick={handlePlusClick}/>
                </Flex>

                <Title mt={20}>Room Properties</Title>
                <Text w={400}>You can also add room properties which include photos, amenities, house rules, etc later in the dashboard </Text>
                <Button style={{ backgroundColor: '#FAFAFA', color: 'black'}} w={200} leftIcon={<IconRocket />} className={styles.hoverClass}> Launch Room Editor</Button>
                <Button onClick={handleSave} style={{position: 'absolute', bottom: 20, right: 20}}>Add Room #{roomIndex+1} on {floors[floorIndex].name} </Button>

            </Flex>
        </Flex>
    </>
  )
}

export default AddRoomForFloor

function BasePrice1({basePrice, handleBasePriceChange}) {
    return (
        <Flex direction={'column'}>
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
                <TextInput value={basePrice}
    onChange={handleBasePriceChange}  variant="unstyled" rightSection={<Text>PKR</Text>} styles={{
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
            </Flex>
            <Flex style={{justifyContent: 'center', alignContent:'center'}}>

            <Text w={300} fz={14} mt={10} align={'center'} >This is the lowest price that we automatically apply to this room for all dates. 
                Before your property goes live, you can set seasonal pricing on your property dashboard.</Text>
            </Flex>
        </Flex>
            );

}

function SameRooms({roomCount, handlePlusClick, handleMinusClick}) {
  return (
    <Flex mt={10} style={{ alignItems: "center", gap: "10px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          textAlign: "center",
        }}
      >
        <Flex>
          <button
            style={{ border: "none", background: "none" }}
            onClick={handlePlusClick}
          >
            <IconPlus
              className={styles.hoverClass}
              style={{ cursor: "pointer", marginTop: "10px", marginRight: "10px" }}
              size={25}
            />
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              backgroundColor: "black",
              borderRadius: "40px",
              height: "40px",
              width: "40px",
              alignItems: "center",
              userSelect: "none",
            }}
          >
            <Text style={{ fontSize: "20px" }}>{roomCount}</Text>
          </div>
          <button
            style={{ border: "none", background: "none" }}
            onClick={handleMinusClick}
          >
            <IconMinus
              style={{ marginTop: "10px", marginLeft: "10px", cursor: "pointer" }}
              className={styles.hoverClass}
              size={25}
            />
          </button>
        </Flex>
      </div>
    </Flex>
  );
}