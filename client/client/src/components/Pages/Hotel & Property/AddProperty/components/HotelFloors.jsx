import { Flex, Text, Title, UnstyledButton } from '@mantine/core'
import { IconBed, IconCopy, IconDiamond, IconDoor, IconEdit, IconSettingsAutomation, IconTrash } from '@tabler/icons'
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
            <Flex direction={'row'}>
                <Flex direction={'column'} gap={10} className={styles.roomBox}>
                    {/* TITLE and ROOM NUMBER */}
                    <Flex direction={'column'} style={{flex: 1}}>
                        <Title  fz={18}>Single Deluxe Room with Lake View</Title>
                        <Text fz={14} fw={100}>#001</Text>
                    </Flex>

                    <Flex direction={'column'} style={{flex: 0}}>
                        <Flex gap={5}> <IconDiamond color='yellow'/> <Text>80 USD / Night</Text></Flex>
                        <Flex gap={5}> <IconSettingsAutomation /> <Text>Single</Text></Flex>
                        <Flex gap={5}> <IconBed /> <Text>1 Full Bed</Text></Flex>
                    </Flex>
                </Flex>
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