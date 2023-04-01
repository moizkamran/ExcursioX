import styles from "../propertyCustomStyles.module.css";
import { Flex, Text, Title } from "@mantine/core";

import {
    IconBed,
    IconChevronDown,
    IconDiamond,
    IconSettingsAutomation,
} from "@tabler/icons";


export function RoomBox({
    roomName,
    roomNumber,
    basePrice,
    roomType,
    roomTotalBeds,
    sameRooms,
}) {
    return (

    
    <Flex direction={'column'} gap={10} className={`${styles.roomBox} slide-in-left`} style={{
        
                    backgroundColor: roomType === 'Single' ? '#07399E' : roomType === 'Double' ? '#9E3D07' : roomType === 'Quad' ? '#0A9E07' : roomType === 'Family' ? '#9E0707' : roomType === 'Studio' ? '#9E0786' : roomType === 'Triple' ? '#07839E' : 'black',
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
                <Flex gap={5}>
                    {" "}
                    <IconBed /> <Text>{roomTotalBeds}</Text>
                </Flex>
            </Flex>

            <Flex className={styles.moreRooms}>
                <Flex
                    style={{
                        flex: "none",
                        order: 1,
                        flexGrow: 0,
                        transform: "rotate(-90deg)",
                    }}
                >
                    <IconChevronDown />
                    <Text>{sameRooms} Same Rooms</Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
