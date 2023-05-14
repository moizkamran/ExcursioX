import { Button, Flex, Text, Title, UnstyledButton, Modal, Transition } from '@mantine/core'
import { IconAbacus, IconAbacusOff, IconBed, IconChevronDown, IconCopy, IconDiamond, IconDoor, IconEdit, IconPlus, IconSettingsAutomation, IconTrash } from '@tabler/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updatePropertyDetails } from '../../../../../Redux/Slicers/propertySlice'
import AddRoomForFloor from './AddRoomForFloor'
import { RoomBox } from './Functions/RoomBox'

import styles from './propertyCustomStyles.module.css'


const HotelFloors = () => {
  const { propertyDetails } = useSelector((state) => state.property);
  const numFloors = propertyDetails.floors.length;
  const floors = propertyDetails.floors;
  const [floorIndex, setFloorIndex] = useState(null);
  const [roomIndex, setRoomIndex] = useState(null);
  console.log('TOTAL FLOORS '+ floors.length);

  const dispatch = useDispatch();

  const addFloor = () => {
    // Create a copy of the last floor in the array
    const lastFloor = floors[floors.length - 1];
    const newFloor = {
      name: `Floor ${floors.length + 1}`,
    };
  
    // Add the new floor to the floors array
    const newFloors = [...floors, newFloor];
    dispatch(updatePropertyDetails({ floors: newFloors }));
  };
  
  const [isAddRoomModalOpen, setIsAddRoomModalOpen] = useState(false);
  
  // const handleEditRoom = (floorIndex, roomIndex) => {
  //   setFloorIndex(floorIndex);
  //   setRoomIndex(roomIndex);
  //   setIsAddRoomModalOpen(true);
  // };

  const handleDeleteRoom = (floorIndex, roomId) => {
    console.log('DELETE ROOM ' + roomId)
    const newFloors = [...floors];
    const targetFloor = newFloors[floorIndex];
    const roomIndex = targetFloor.rooms.findIndex(room => room.roomId === roomId);
    if (roomIndex !== -1) {
      const newRooms = [...targetFloor.rooms];
      newRooms.splice(roomIndex, 1);
      const newFloor = { ...targetFloor, rooms: newRooms };
      newFloors[floorIndex] = newFloor;
      dispatch(updatePropertyDetails({ floors: newFloors }));
    }
  };
  

  
  
const handleAddRoom = (floorIndex) => {
  const newFloors = [...floors];
  const rooms = newFloors[floorIndex].rooms || [];
  const newRooms = [    ...rooms,    Object.assign({}, { roomNumber: `Room ${rooms.length + 1}` }) ];
  newFloors[floorIndex] = { ...newFloors[floorIndex], rooms: newRooms };
  dispatch(updatePropertyDetails({ floors: newFloors }));
  setFloorIndex(floorIndex);
  setRoomIndex(rooms.length);
  setIsAddRoomModalOpen(true);
};
  
 const [deleteFloorModal, setDeleteFloorModal] = useState(false);



  const handleDeleteFloor = (index) => {
    const newFloors = [...floors];
    newFloors.splice(index, 1);
    dispatch(updatePropertyDetails({ floors: newFloors }));
    setDeleteFloorModal(false);
  };

  console.log(numFloors);

  
  return (
    <>
    
       <Modal
       opened={isAddRoomModalOpen}
       size="auto"
       xOffset={0}
       centered
       transitionProps={{ transition: 'pop', duration: 450, timingFunction: 'ease-in-out' }}
       closeOnClickOutside={false}
       radius="xl"
       overlayProps={{
         opacity: 0.50,
         blur: 3,
       }}
     >
        <Flex>
        
        <AddRoomForFloor floorIndex={floorIndex} roomIndex={roomIndex} onModalClose={setIsAddRoomModalOpen}/>

        </Flex>
      </Modal>
    <Flex direction={'column'} p={20}>

      <Flex justify={'space-between'} align={'center'}>
          
          <Title fz={14}>Total Floors: {numFloors}</Title>

          {floors.length > 0 && (<Button onClick={addFloor} style={{backgroundColor: '#083eab', color: 'white'}}>Add Floor</Button>)}

      </Flex>


        {numFloors < 1 && (
          <Flex gap={20} direction={'column'} w={'100%'} h={300} bg={'#F1F1F1'} mt={20} justify={'center'} align={'center'} sx={{borderRadius: 25}}>
            <IconAbacusOff size={150} color={'#B9B9B9'}/>
            <Text align='center'>Looks like no floors have been added <br /> Click the button to start adding some floors in your property.</Text>
            <Button onClick={addFloor}>Add Floor</Button>
          </Flex>
        )}

        {floors.map((floor, floorIndex) => (
          
  <Flex key={floorIndex}>
    <Modal
       size="auto"
       xOffset={0}
       centered
       onClose={() => setDeleteFloorModal(false)}
       opened={deleteFloorModal}
       transitionProps={{ transition: 'pop', duration: 300, timingFunction: 'ease-in-out' }}
      radius="xl"
      withCloseButton={false}
       overlayProps={{
         opacity: 0.2,
         blur: 2,
       }}
     >
      <Flex direction={'column'} p={20}>
        <Title fz={20}>Are you sure you want to delete {`Floor ${floorIndex + 1}`}?</Title>
        <Text>This action can not be undone</Text>
        <Flex justify={'flex-end'} gap={10}>

            <Button onClick={() => setDeleteFloorModal(false)} style={{backgroundColor: 'white', color: '#083eab'}}>No</Button>
            <Button onClick={() => handleDeleteRoom(floorIndex, roomIndex)}> <IconTrash /></Button>

        </Flex>
      </Flex>
     </Modal>
    <Flex direction={'column'} style={{height: 300, width: '100%', border: '1px solid #07399E', backgroundColor: '#FAFAFA', borderRadius: 20, padding: 20, position: 'relative' }} mt={20}>
      {/* Floor Heading */}
      <Flex gap={20} direction={'row'}>
        <Text>{`Floor ${floorIndex + 1}`}</Text>
        <Flex gap={5}> <IconDoor/> <Text>{floor?.rooms?.length > 0 ? `${floor.rooms.length} Rooms` : 'No Rooms'}</Text></Flex>
      </Flex>

      {/* Rooms */}
      <Flex direction={'row'} mt={10} gap={40}> 

      {floor?.rooms?.length > 0 ? floor.rooms.map((room, roomIndex) => (
  <Flex key={roomIndex}>
    <Flex className={styles.roomWrapper} direction={'column'}>
      <RoomBox  roomType={room.type} 
                roomNumber={roomIndex+1} 
                basePrice={room.basePrice}
                singleBeds={room.bedClassifications?.single} 
                doubleBeds={room.bedClassifications?.double}
                sofaBeds={room.bedClassifications?.sofa}
                maxGuests={room.maxGuests}
                bunkBeds={room.bedClassifications?.bunk}
                roomName={room.roomClass + (room.type ? ` ${room.type}` : '') + ' with ' + room.roomView}/>
      <Flex justify={'center'} mt={19} gap={10} className={styles.roomActionsWrapper}>
        <Button> <IconEdit /></Button>
        <Button onClick={() => handleDeleteRoom(floorIndex, room.roomId)}> <IconTrash /></Button>

      </Flex>
    </Flex>
  </Flex>
)) : ('')}

        <Flex onClick={() => handleAddRoom(floorIndex)} className={styles.addRoom}><div className={styles.circle}><IconPlus/></div></Flex>
      </Flex>

      {/* Bottom Buttons */}
      <Flex gap={30} style={{position: 'absolute', bottom: 10, right: 10, backgroundColor:'rgba(255, 255, 255, 0.349)', color: 'white', borderRadius: '25px', backdropFilter: 'blur(10px)'}}>
        {/* <UnstyledButton onClick={() => addFloor(floorIndex)} className={styles.buttonA} gap={5}> <IconCopy/> <Text>Duplicate</Text></UnstyledButton>
        <UnstyledButton onClick={() => handleEditFloor(floorIndex)} className={styles.buttonA} gap={5}> <IconEdit/> <Text>Edit Floor</Text></UnstyledButton> */}
        <UnstyledButton onClick={() => handleDeleteFloor(floorIndex)} gap={5} className={styles.delete}> <IconTrash /> <Text>Delete Floor</Text></UnstyledButton>
      </Flex>

    </Flex>
  </Flex>
))}

        

    </Flex>
    </>
  )
}



export default HotelFloors