import { Button, Flex, Text, Title, UnstyledButton } from '@mantine/core'
import { IconBed, IconChevronDown, IconCopy, IconDiamond, IconDoor, IconEdit, IconPlus, IconSettingsAutomation, IconTrash } from '@tabler/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePropertyDetails } from '../../../../../Redux/Slicers/propertySlice'
import AddRoomForFloor from './AddRoomForFloor'
import { RoomBox } from './Functions/RoomBox'

import styles from './propertyCustomStyles.module.css'

const HotelFloors = ({ onButtonClick }) => {
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

  const handleAddRoom = (floorIndex) => {
    const newFloors = [...floors];
    const rooms = newFloors[floorIndex].rooms || [];
    const newRooms = [    ...rooms,    {      name: `Room ${rooms.length + 1}`,    },  ];
    newFloors[floorIndex] = { ...newFloors[floorIndex], rooms: newRooms };
    dispatch(updatePropertyDetails({ floors: newFloors }));
    setFloorIndex(floorIndex);
    setRoomIndex(rooms.length);
    setIsAddRoomModalOpen(true);
  };


console.log(floors.rooms)

  const handleDeleteFloor = (index) => {
    const newFloors = [...floors];
    newFloors.splice(index, 1);
    dispatch(updatePropertyDetails({ floors: newFloors }));
  };
  console.log(numFloors);

  
  return (
    <>
    <Flex direction={'column'} p={20}>

    <Title fz={14}>Total Floors: {numFloors}</Title>

        {numFloors < 1 && (<Button onClick={addFloor}>Add Floor</Button>)}
        {Array.from({ length: numFloors }, (_, index) => (
        <Flex key={index}>
        <Flex direction={'column'} style={{height: 300, width: '80%', border: '1px solid #07399E', backgroundColor: '#FAFAFA', borderRadius: 20, padding: 20, position: 'relative'}} mt={20}>
                {/* Floor Heading */}
                <Flex gap={20} direction={'row'}>
                    <Text>{`Floor ${index + 1}`}</Text>
                    <Flex> <IconDoor/> <Text> 12 Rooms</Text></Flex>
                </Flex>

                {/* Rooms */}   
                <Flex direction={'row'} mt={10} gap={40}>

                        
                        <Flex onClick={() => handleAddRoom(index)} className={styles.addRoom}><div className={styles.circle}><IconPlus/></div></Flex>
                </Flex>

                {/* Bottom Buttons */}
                <Flex gap={30} style={{position: 'absolute', bottom: 10, right: 10}}>
                    <UnstyledButton onClick={addFloor} className={styles.buttonA} gap={5}> <IconCopy/> <Text>Duplicate</Text></UnstyledButton>
                    <UnstyledButton className={styles.buttonA} gap={5}> <IconEdit/> <Text>Edit Floor</Text></UnstyledButton>
                    <UnstyledButton onClick={() => handleDeleteFloor(index)} gap={5} className={styles.delete}> <IconTrash /> <Text>Delete Floor</Text></UnstyledButton>
                </Flex>

            </Flex>
        </Flex> ))}

        {isAddRoomModalOpen && (
        <AddRoomForFloor floorIndex={floorIndex} roomIndex={roomIndex} onModalClose={() => setIsAddRoomModalOpen(false)}/>
        )}

    </Flex>
    </>
  )
}



export default HotelFloors