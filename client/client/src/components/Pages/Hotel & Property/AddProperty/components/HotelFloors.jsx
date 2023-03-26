import { Flex, Text, Title, UnstyledButton } from '@mantine/core'
import { IconBed, IconChevronDown, IconCopy, IconDiamond, IconDoor, IconEdit, IconSettingsAutomation, IconTrash } from '@tabler/icons'
import React from 'react'

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


function RoomBox({
roomName,
roomNumber,
basePrice,
roomType,
roomTotalBeds,
sameRooms,
}) {


return (

<Flex direction={'column'} gap={10} className={styles.roomBox} style={{
                backgroundColor: roomType === 'Single' ? '#07399E' : roomType === 'Double' ? '#9E3D07' : roomType === 'Quad' ? '#0A9E07' : roomType === 'Family' ? '#9E0707' : roomType === 'Studio' ? '#9E0786' : 'black',
                }}>
                            {
                /* TITLE and ROOM NUMBER */
                }
            <Flex direction={'column'} style={{
                    flex: 1
                    }}>
                <Title fz={25}>{roomName}</Title>
                <Text fz={14} fw={100}>#{roomNumber}</Text>
            </Flex>

            <Flex direction={'column'} style={{
                    flex: 0,
                    width: '100%',
                    alignContent: 'flex-start',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    justifyItems: 'flex-start'
                    }}>
                <Flex gap={5}> <IconDiamond color='yellow' /> <Text>{basePrice} USD / Night</Text></Flex>
                <Flex gap={5}> <IconSettingsAutomation /> <Text>{roomType}</Text></Flex>
                <Flex gap={5}> <IconBed /> <Text>{roomTotalBeds}</Text></Flex>
            </Flex>

            <Flex className={styles.moreRooms}>
                <Flex style={{
                            flex: 'none',
                            order: 1,
                            flexGrow: 0,
                            transform: 'rotate(-90deg)'
                            }}>
                    <IconChevronDown /><Text>{sameRooms} Same Rooms</Text>
                </Flex>
            </Flex>
        </Flex>);
}

export default HotelFloors