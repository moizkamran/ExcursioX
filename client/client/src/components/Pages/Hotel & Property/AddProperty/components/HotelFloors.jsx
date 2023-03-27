import { Flex, Text, Title, UnstyledButton } from '@mantine/core'
import { IconBed, IconChevronDown, IconCopy, IconDiamond, IconDoor, IconEdit, IconSettingsAutomation, IconTrash } from '@tabler/icons'
import React from 'react'
import { RoomBox } from './Functions/RoomBox'

import styles from './propertyCustomStyles.module.css'

const HotelFloors = () => {
  return (
    <>
    <Flex>
    <Flex direction={'column'} style={{height: 300, width: '80%', border: '1px solid #07399E', backgroundColor: '#FAFAFA', borderRadius: 20, padding: 20, position: 'relative'}}>
            {/* Floor Heading */}
            <Flex gap={20} direction={'row'}>
                <Text>Floor One</Text>
                <Flex> <IconDoor/> <Text> 12 Floors</Text></Flex>
            </Flex>

            {/* Rooms */}   
            <Flex direction={'row'} mt={10} gap={40}>

                    <RoomBox roomName="Large Ocean View Room" roomNumber={'001'} basePrice={180} roomType="Single" roomTotalBeds="1 Full Bed" sameRooms={50} />
                    <RoomBox roomName="Family Room with Kids Bed" roomNumber={'019'} basePrice={240} roomType="Family" roomTotalBeds="2 Full Bed" sameRooms={10} />
                    <RoomBox roomName="Quad King Room with Haram View" roomNumber={'019'} basePrice={240} roomType="Quad" roomTotalBeds="2 Full Bed" sameRooms={10} />

            </Flex>

            {/* Bottom Buttons */}
            <Flex gap={30} style={{position: 'absolute', bottom: 10, right: 10}}>
                <UnstyledButton className={styles.buttonA} gap={5}> <IconCopy/> <Text>Duplicate</Text></UnstyledButton>
                <UnstyledButton className={styles.buttonA} gap={5}> <IconEdit/> <Text>Edit Floor</Text></UnstyledButton>
                <UnstyledButton gap={5} className={styles.delete}> <IconTrash /> <Text>Delete Floor</Text></UnstyledButton>
            </Flex>

        </Flex>
    </Flex>
    </>
  )
}


export default HotelFloors