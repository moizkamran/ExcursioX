import { Avatar, Badge, Button, Checkbox, Container, Flex, Grid, Image, Modal, NativeSelect, NumberInput, Radio, Select, Text, TextInput, Title, Tooltip, UnstyledButton } from '@mantine/core'
import { Icon3dRotate, IconAddressBook, IconArrowsCross, IconBed, IconCirclePlus, IconCircleX, IconCross, IconMan, IconMinus, IconMoon, IconPlus, IconQuestionMark, IconRocket, IconSquareRoundedX, IconUserSearch, IconUsers, IconX } from '@tabler/icons'
import React, { forwardRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRoomToFloor, updatePropertyDetails, updatePropertyLayout } from '../../../../../Redux/Slicers/propertySlice'
import { RoomBox } from './Functions/RoomBox'

import { AnimatePresence, motion } from "framer-motion";

import BedIcon  from '../../../../../assets/icons/bed.svg'


import { v4 as uuidv4 } from 'uuid';


import styles from './propertyCustomStyles.module.css'

const AddRoomForFloor = ({ floorIndex, roomIndex, onModalClose }) => {

const dispatch = useDispatch();
const { propertyDetails } = useSelector((state) => state.property);
const floors = propertyDetails.floors;
const rooms = floors[floorIndex].rooms;
const room = rooms[roomIndex];

const singleBedIcon = 'https://firebasestorage.googleapis.com/v0/b/bookingsouq-e14e8.appspot.com/o/assets%2FbedTypes%2Fsingle-bed.svg?alt=media';
const doubleBedIcon = 'https://firebasestorage.googleapis.com/v0/b/bookingsouq-e14e8.appspot.com/o/assets%2FbedTypes%2Fdouble-bed.svg?alt=media';
const sofaBedIcon = 'https://firebasestorage.googleapis.com/v0/b/bookingsouq-e14e8.appspot.com/o/assets%2FbedTypes%2Fsofa-bed.svg?alt=media';
const bunkBedIcon = 'https://firebasestorage.googleapis.com/v0/b/bookingsouq-e14e8.appspot.com/o/assets%2FbedTypes%2Fbunk-bed.svg?alt=media';

const [roomType, setRoomType] = useState(room.roomType);

const [roomSize, setRoomSize] = useState(room.roomSize || '');

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


const [guestCount, setGuestCount] = useState(1); // Initialize with 1 guest

const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    const newRooms = [...rooms];
    const newRoom = { ...newRooms[roomIndex], type: selectedType };
    newRooms[roomIndex] = newRoom;
    setRoomType(selectedType); // set the roomType state variable with the selected type
    
    // Update guest count based on room type
    switch (selectedType) {
      case 'Single':
          setGuestCount(1);
          break;
      case 'Double':
          setGuestCount(2);
          break;
      case 'Triple':
          setGuestCount(3);
          break;
      case 'Quad':
          setGuestCount(4);
          break;
      case 'Quint':
          setGuestCount(5);
          break;
      case 'Hexa':
          setGuestCount(6);
          break;
      case 'Family':
          setGuestCount(4);
          break;
      case 'Studio':
          setGuestCount(10);
          break;
      default:
          setGuestCount(1);
          break;
  }
    
    dispatch(updatePropertyDetails({ floors: floors }));
  };
  
  
const roomTypes = [
    { label: 'Single', value: 'Single' },
    { label: 'Double', value: 'Double' },
    { label: 'Triple', value: 'Triple' },
    { label: 'Quad', value: 'Quad' },
    { label: 'Quint', value: 'Quint' },
    { label: 'Hexa', value: 'Hexa' },
    { label: 'Family', value: 'Family' },
    { label: 'Studio', value: 'Studio' },
]

const bedTypes = [
  { label: "Single Bed 👤", value: "single", icon: singleBedIcon },
  { label: "Sofa Bed 👤", value: "sofa", icon: sofaBedIcon },
  { label: "Double Bed 👥", value: "double", icon: doubleBedIcon },
  { label: "Bunk Bed 👥", value: "bunk", icon: bunkBedIcon },
];



const [numBeds, setNumBeds] = useState(1);

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
  beds: beds,
  maxGuests: guestCount,
  bedClassifications: countOfBedTyped,
};
  newRooms[roomIndex] = newRoom;

  // Add additional rooms
  for (let i = 1; i <= roomCount; i++) {
    const additionalRoom = {
      ...newRoom,
      roomId: uuidv4(), // change from "id" to "roomId"
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
  
  const [bed, setBed] = useState(null);

  const [beds, setBeds] = useState([]);

  const addBed = () => {
    const selectedBedType = bedTypes.find(bedType => bedType.value === bed);
    const newBed = {
      type: selectedBedType.value,
      icon: selectedBedType.icon,
      occupancy: bedGuestOccupancy(selectedBedType.value),
      id: uuidv4(),
    };
    setBeds([...beds, newBed]);
  };

  const deleteBed = (index) => {
    const updatedBeds = [...beds];
    updatedBeds.splice(index, 1);
    setBeds(updatedBeds);
  };

  
  const bedGuestOccupancy = (bed) => {
    // add a switch case for each bed type for the selected bed value
    switch (bed) {
      case 'single':
        return 1;
      case 'sofa':
        return 1;
      case 'double':
        return 2;
      case 'bunk':
        return 2;
      default:
        return 0;
  }
};
  const currentBedSettingOccupancy = beds.reduce((acc, bed) => acc + bed.occupancy, 0);
  const bedFillInsLeft =  guestCount - currentBedSettingOccupancy;

  const countOfBedTyped = {
    single: beds.filter(bed => bed.type === 'single').length,
    sofa: beds.filter(bed => bed.type === 'sofa').length,
    double: beds.filter(bed => bed.type === 'double').length,
    bunk: beds.filter(bed => bed.type === 'bunk').length,
  };

  const roomName = (typeof roomClassValues === 'string' ? roomClassValues : '') + (roomType ? ` ${roomType}` : '') + (typeof roomViewValues === 'string' ? ' with ' + roomViewValues : '');

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
                    <Flex p={40}>
                    <RoomBox 
                      roomType={roomType} 
                      roomNumber={roomIndex+1} 
                      roomTotalBeds={roomSize} 
                      basePrice={basePrice} 
                      roomName={roomName}
                      singleBeds={countOfBedTyped.single}
                      doubleBeds={countOfBedTyped.double}
                      bunkBeds={countOfBedTyped.bunk}
                      sofaBeds={countOfBedTyped.sofa}
                      maxGuests={guestCount}
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

                <Flex direction={'column'} mt={10} mb={10}>
                    <Text>Room Size</Text>
                    <TextInput radius={'md'} color={'black'} w={200} value={roomSize} onChange={handleRoomSizeChange}/>
                </Flex>
                

                <Flex mb={20}>
                      <Flex direction={'column'} gap={10}>
                        <Text>Number of Guests</Text>
                        <Flex bg={'#07399E'} p={10} sx={{borderRadius: 10, width: 'max-content'}} gap={10}>{Array.from({ length: guestCount }, (_, index) => (
            <IconMan key={index} color="white" />
        ))}</Flex>

                        {/* Fill in Beds */}
                        <Flex direction={'column'} mt={10} gap={10}>
                          <Flex direction={'row'} gap={10}>
                            <Text>Fill in Beds</Text> <Icon3dRotate/> <Text>{guestCount} person's bed to assign</Text>
                            {/* BEDS ROW */}
                            
                            {
                            bedFillInsLeft > 0 ? (
                              <Badge color="yellow" variant="dot" size="lg">
                                {bedFillInsLeft} left
                              </Badge>
                            ) : bedFillInsLeft < 0 ? (
                              <Badge color="red" variant="dot" size="lg">
                                Over
                              </Badge>
                            ) : (
                              <Badge color="green" variant="dot" size="lg">
                                Satisfied
                              </Badge>
                            )
                          }

                          
                          </Flex>
                          <Flex gap={10}>
                            <Select 
                            radius={'md'}
                            color={'black'}
                            w={200}
                            onChange={selection => setBed(selection)}
                            data={bedTypes}
                            />
                            <Button onClick={addBed}>Add Bed</Button>
                            </Flex>
                            <Grid grow w={400} mt={10}>
                                  {/* Render the BedRowVessel components for each bed in beds array */}
                                  <AnimatePresence mode="popLayout">
                                    {beds.map((bedItem, index) => (
                                      <motion.div
                                        layout
                                        key={bedItem.id}
                                        initial={{ opacity: 0, x: -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ type: "spring" }}
                                      >
                                        <BedRowVessel
                                          bedRow_bedTypeIcon={bedItem.icon}
                                          bedRow_BedTypeName={bedItem.type}
                                          onDelete={() => deleteBed(index)}
                                        />
                                      </motion.div>
                                    ))}
                                  </AnimatePresence>
                            </Grid>

                            
                        </Flex>
                      </Flex>
                    </Flex>

                

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
                <BasePrice1  basePrice={basePrice} handleBasePriceChange={handleBasePriceChange} />
            </Flex>
        </Flex>
    </>
  )
}

export default AddRoomForFloor

function BasePrice1({basePrice, handleBasePriceChange}) {
    return (
        <Flex direction={'column'} mt={10}>
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
                </Text> <Tooltip multiline label="This is the lowest price that we automatically apply to this room for all dates. 
    Before your property goes live, you can set seasonal pricing on your property dashboard." width={220}>
        <Badge sx={{marginLeft: 10}}>INFO</Badge>
      </Tooltip>
            </div>
            <div style={{
display: "flex",
alignContent: "center",
justifyContent: "center"
}}>
                <TextInput value={basePrice}
                type='number'
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
    backgroundColor: "black",
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
            
        </Flex>
            );

}

const BedRowVessel = forwardRef(({ bedRow_bedTypeIcon, bedRow_BedTypeName, onDelete }, ref) => {
  bedRow_BedTypeName = bedRow_BedTypeName.charAt(0).toUpperCase() + bedRow_BedTypeName.slice(1) + ' Bed';
  return (
    <Tooltip label="Delete" color="red" offset={-60} transitionProps={{ transition: 'pop', duration: 300 }} openDelay={200}>
      <div>
        <Flex
          align={'center'}
          justify={'center'}
          pos={'relative'}
          direction={'column'}
          component={UnstyledButton}
          onClick={onDelete}
          sx={{
            borderRadius: 25,
            backgroundColor: 'rgba(56, 112, 255, 0.13)',
            margin: '0px 5px 5px 0px',
          }}
          ref={ref} // Forward the ref to the underlying div element
        >
          <Flex p={8}>
            <Image src={bedRow_bedTypeIcon} width={70} h={50} fit='contain' />
          </Flex>
          <Text color='#00154D' mb={10} fz={14}>{bedRow_BedTypeName}</Text>
        </Flex>
      </div>
    </Tooltip>
  );
});


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