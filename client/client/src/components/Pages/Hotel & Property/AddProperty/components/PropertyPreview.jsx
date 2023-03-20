import { Flex, Text, Title } from '@mantine/core'
import { IconBus, IconCornerDownRight, IconHeart, IconMapPin, IconPlane, IconSteeringWheel, IconWalk } from '@tabler/icons'
import React from 'react'

export const PropertyPreview = () => {
  return (
    <>
    <Flex p={20} direction={'column'}>
        <Flex gap={10} align='center'>
            <Title>Skyline Serviced Apartments - Brixton</Title> <IconHeart cursor={'pointer'}/>
        </Flex>
        <Flex gap={10}>
            <IconMapPin style={{color: '#07399E'}}/> <Text>London, United Kingdom</Text>
        </Flex>
        {/* Images */}
        <Flex gap={20}>

        <Flex mt={10}>
            <img alt={'Property image'} style={{cursor: 'pointer', width:'500px', height: '350px', objectFit: 'cover', borderTopLeftRadius: '25px', borderBottomLeftRadius: 25}} src={'https://cf.bstatic.com/xdata/images/hotel/max1280x900/241513698.jpg?k=7fc0e8dafb01a5cdf7f066ef1891a5662fe3d13036da0b07748249d26a44dc6f&o=&hp=1'}/>
            <Flex direction={'column'} ml={5} gap={5}>
                <img alt={'Property image'} style={{cursor: 'pointer', width:'250px', height: '175px', objectFit: 'cover', borderTopRightRadius: '25px'}} src={'https://cf.bstatic.com/xdata/images/hotel/max1280x900/241513704.jpg?k=c7e59d9c3f0e963cb835f413b2a90ad09ca1b40d684006cd48e343cd91cc23c5&o=&hp=1'}/>
                <img alt={'Property image'} style={{cursor: 'pointer', width:'250px', height: '170px', objectFit: 'cover', borderBottomRightRadius: '25px'}} src={'https://cf.bstatic.com/xdata/images/landmark/max1024/195026.webp?k=ea8055a5d8d72f1ee49bdd8aafe0681bbdaf6f587a80a26488a7ac8f62b67250&o='}/>
            </Flex>
        </Flex>
        {/* Whats Near */}
            <Flex direction={'column'} gap={10}>
            
                <Title>What's Around</Title>
                {/* AROUND CONTENT 1 */}
                <Flex direction={'column'}>
                    <Flex gap={10} align={'center'}>
                        <IconMapPin/> <Text fw={500} fz={20}>Piccadilly Circus</Text>
                    </Flex>
                    <Flex gap={10}>
                        <IconCornerDownRight style={{marginLeft: 5}}/> <IconWalk/> <Text>12 Mins Walk</Text>
                    </Flex>
                </Flex>    
                {/* AROUND CONTENT 1 */}
                <Flex direction={'column'}>
                    <Flex gap={10} align={'center'}>
                        <IconBus/> <Text fw={500} fz={20}>Brixton Station</Text>
                    </Flex>
                    <Flex gap={10}>
                        <IconCornerDownRight style={{marginLeft: 5}}/> <IconWalk/> <Text>12 Mins Walk</Text>
                    </Flex>
                </Flex>    
                {/* AROUND CONTENT 1 */}
                <Flex direction={'column'}>
                    <Flex gap={10} align={'center'}>
                        <IconPlane /> <Text fw={500} fz={20}>London (LHR-Heathrow)</Text>
                    </Flex>
                    <Flex gap={10}>
                        <IconCornerDownRight style={{marginLeft: 5}}/> <IconSteeringWheel/> <Text>45 Mins Drive</Text>
                    </Flex>
                </Flex>    
            
            </Flex>
        </Flex>

    </Flex>
    </>
  )
}

export default PropertyPreview