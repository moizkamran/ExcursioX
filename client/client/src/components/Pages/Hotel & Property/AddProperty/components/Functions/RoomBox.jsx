import { Flex, Image, Text, Title } from "@mantine/core";
import { IconBed, IconChevronDown, IconDiamond, IconSettings } from "@tabler/icons";

//icons import

import singleBedIcon from '../../../../../../assets/icons/singleBedIcon.svg'
import doubleBedIcon from '../../../../../../assets/icons/doubleBedIcon.svg'
import bunkBedIcon from '../../../../../../assets/icons/bunkBedIcon.svg'
import sofaBedIcon from '../../../../../../assets/icons/sofaBedIcon.svg'

import styles from "../propertyCustomStyles.module.css";

export function RoomBox({
    roomName,
    roomNumber,
    basePrice,
    roomType,
    sameRooms,
    singleBeds,
    doubleBeds,
    bunkBeds,
    sofaBeds,
    maxGuests,
}) {
    
    
    return (
    
    <Flex direction={'column'} gap={10} className={`${styles.roomBox} slide-in-left`} style={{
        
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
                    <Flex gap={5}>  <UserGroupIcon /> <Text>{maxGuests} Max Guests </Text></Flex>
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
  
  function UserGroupIcon() {
    return (<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users-group" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none" />
<path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
<path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
<path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
<path d="M17 10h2a2 2 0 0 1 2 2v1" />
<path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
<path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
</svg>);
  }