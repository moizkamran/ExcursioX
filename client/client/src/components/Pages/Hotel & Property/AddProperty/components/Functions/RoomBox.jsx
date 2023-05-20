import { Flex, Image, Text, Title } from "@mantine/core";
import { IconBed, IconChevronDown, IconDiamond, IconSettings, IconUsers } from "@tabler/icons";

//icons import

import singleBedIcon from '../../../../../../assets/icons/singleBedIcon.svg'
import doubleBedIcon from '../../../../../../assets/icons/doubleBedIcon.svg'
import bunkBedIcon from '../../../../../../assets/icons/bunkBedIcon.svg'
import sofaBedIcon from '../../../../../../assets/icons/sofaBedIcon.svg'

import styles from "../propertyCustomStyles.module.css";
import { forwardRef } from "react";

export const RoomBox = forwardRef(
    (
      {
        roomName,
        roomNumber,
        basePrice,
        roomType,
        sameRooms,
        singleBeds,
        doubleBeds,
        bunkBeds,
        sofaBeds,
        maxGuests
      },
      ref
    ) => {
    
    
    return (
    
    <Flex ref={ref} direction={'column'} gap={10} className={styles.roomBox} style={{
        
                    backgroundColor: roomType === 'Single' ? '#07399E' : roomType === 'Double' ? '#9E3D07' : roomType === 'Quad' ? '#0A9E07' : roomType === 'Family' ? '#9E0707' : roomType === 'Studio' ? '#9E0786' : roomType === 'Triple' ? '#07839E' : roomType === 'Quint' ? '#9E7D07' : roomType === 'Hexa' ? '#DA1D61' : 'black',
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
                        justifyItems: 'flex-start',
                        gap: 1,
                        }}>
                    <Flex gap={5}> <IconDiamond color='yellow' /> <Text>{basePrice} USD / Night</Text></Flex>
                    <Flex gap={5}>  <IconUsers /> <Text>{maxGuests} Max Guests </Text></Flex>
                    <Flex gap={5}> <IconSettings /> <Text>{roomType}</Text></Flex>
                        <Flex gap={5} justify={'center'} align={'center'}> 
                           {
                           singleBeds > 0
                           ? <Flex gap={5}> <Image src={singleBedIcon} width={25}/> <Text>{singleBeds}</Text> </Flex>
                           : null
                           }
                           {
                           sofaBeds > 0
                           ? <Flex gap={5}> <Image src={sofaBedIcon} width={25}/> <Text>{sofaBeds}</Text> </Flex>
                           : null
                           }
                           {
                           doubleBeds > 0
                           ? <Flex gap={5}> <Image src={doubleBedIcon} width={25}/> <Text>{doubleBeds}</Text> </Flex>
                           : null
                           }
                           {
                           bunkBeds > 0
                           ? <Flex gap={5}> <Image src={bunkBedIcon} width={25}/> <Text>{bunkBeds}</Text> </Flex>
                           : null
                           }
                        </Flex>
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
    )

