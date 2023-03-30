import { Button, Checkbox, Flex, Modal, NativeSelect, Text, TextInput, Title } from '@mantine/core'
import { IconAddressBook, IconArrowsCross, IconCross, IconMinus, IconMoon, IconPlus, IconRocket, IconSquareRoundedX, IconUsers, IconX } from '@tabler/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRoomToFloor, updatePropertyDetails, updatePropertyLayout } from '../../../../../Redux/Slicers/propertySlice'
import { RoomBox } from './Functions/RoomBox'

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

const roomClassFormated = Object.keys(roomClassValues)
  .filter(key => roomClassValues[key])
  .map(key => key.charAt(0).toUpperCase() + key.slice(1))
  .join(', ');

const roomViewFormatted = Object.keys(roomViewValues)
  .filter(key => roomViewValues[key])
  .map(key => key.replace(/([A-Z])/g, ' $1').trim())
  .map(key => key.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
  .join(', ');

   

console.log(roomClassFormated)

const handleRoomClass = (event) => {
    const roomClassValues = event.target.value;
    const isChecked = event.target.checked;
    setRoomClassValues((prevState) => {
      // If the checkbox is checked, create a new object with the current checkboxValue as the only key
      if (isChecked) {
        return { [roomClassValues]: true };
      } else {
        // If the checkbox is unchecked, create a new object without the current checkboxValue key
        const { [roomClassValues]: _, ...newState } = prevState;
        return newState;
      }
    });
  };
  

const handleRoomView = (event) => {
    const roomViewValues = event.target.value;
    const isChecked = event.target.checked;
    setRoomViewValues((prevState) => {
      // If the checkbox is checked, create a new object with the current checkboxValue as the only key
      if (isChecked) {
        return { [roomViewValues]: true };
      } else {
        // If the checkbox is unchecked, create a new object without the current checkboxValue key
        const { [roomViewValues]: _, ...newState } = prevState;
        return newState;
      }
    });
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

const handleSave = () => {
    if (!roomType || roomSize == 0 || basePrice == 0) {
        setAlert(true);
        return;
    }
    const newRooms = [...rooms];
    const newRoom = { ...room, type: roomType, basePrice: basePrice, roomSize: roomSize, roomClass: roomClassValues, roomView: roomViewValues };
    newRooms[roomIndex] = newRoom;
    const newFloors = [...floors];
    newFloors[floorIndex] = { ...floors[floorIndex], rooms: newRooms };
    const newPropertyDetails = { ...propertyDetails, floors: newFloors };
    dispatch(updatePropertyDetails(newPropertyDetails));
    onModalClose(false);
  };
  
  

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
                        <RoomBox roomType={roomType} roomNumber={roomIndex+1} roomTotalBeds={roomSize} basePrice={basePrice} roomName={roomClassFormated + (roomType ? ` ${roomType}` : '') + (roomViewFormatted? ' with ' : '') + roomViewFormatted}/>
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

                                    <Checkbox
                                        label="Standard"
                                        value="standard"
                                        onChange={handleRoomClass}
                                        checked={roomClassValues.standard}
                                        />
                                        <Checkbox
                                        label="Economy"
                                        value="economy"
                                        onChange={handleRoomClass}
                                        checked={roomClassValues.economy}
                                        />
                                        <Checkbox
                                        label="Budget"
                                        value="budget"
                                        onChange={handleRoomClass}
                                        checked={roomClassValues.budget}
                                        />
                                        <Checkbox
                                        label="Deluxe"
                                        value="deluxe"
                                        onChange={handleRoomClass}
                                        checked={roomClassValues.deluxe}
                                        />
                                        <Checkbox
                                        label="Superior"
                                        value="superior"
                                        onChange={handleRoomClass}
                                        checked={roomClassValues.superior}
                                        />
                                    </Flex>
                            </Flex>
                            <Flex direction={'column'}>
                                <Title fz={25}>Views</Title>
                                    <Flex direction={'column'} gap={5}>

                                    <Checkbox label="Haram View" value='haramView'  onChange={handleRoomView} checked={roomViewValues.haramView}  />
                                    <Checkbox label="City View" value='cityView' onChange={handleRoomView} checked={roomViewValues.cityView} />
                                    <Checkbox label="Garden View" value='gardenView'  onChange={handleRoomView} checked={roomViewValues.gardenView} />
                                    <Checkbox label="Lake View" value='lakeView'   onChange={handleRoomView} checked={roomViewValues.lakeView} />
                                    <Checkbox label="Mountain View" value='mountainView'  onChange={handleRoomView} checked={roomViewValues.mountainView} />
                                    <Checkbox label="Park View" value='parkView'  onChange={handleRoomView} checked={roomViewValues.parkView} />
                                    <Checkbox label="Pool View" value='poolView'  onChange={handleRoomView} checked={roomViewValues.poolView}  />
                                    <Checkbox label="Sea View" value='seaView' onChange={handleRoomView} checked={roomViewValues.seaView}  />

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
                          <SameRooms    />
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