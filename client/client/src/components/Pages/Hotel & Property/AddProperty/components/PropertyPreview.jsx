import { Flex, Text, Title } from '@mantine/core'
import { IconBed, IconBrandSupernova, IconBus, IconChevronRight, IconCornerDownRight, IconGeometry, IconHeart, IconHome2, IconHomeCancel, IconIroning1, IconMapPin, IconPlane, IconPlant, IconPool, IconRulerMeasure, IconSmoking, IconSpace, IconStar, IconSteeringWheel, IconToolsKitchen, IconWalk, IconWashMachine, IconWifi } from '@tabler/icons'
import React from 'react'
import { useSelector } from 'react-redux';

export const PropertyPreview = () => {

    const propertyName = useSelector((state) => state.property.propertyDetails.propertyName);
    

    const facilities = [
        { name: 'Free Wi-Fi', icon: <IconWifi /> },
        { name: 'Swimming Pool', icon: <IconPool /> },
        { name: 'Gym', icon: <IconGeometry /> },
        { name: 'Spa', icon: <IconSpace /> },
        { name: 'Smoking Rooms', icon: <IconSmoking /> },
        { name: '50m\u00B2 Size', icon: <IconRulerMeasure /> },
        { name: 'Kitchen', icon: <IconToolsKitchen /> },
        { name: 'Eco Friendly', icon: <IconPlant /> },
        { name: 'Free Cancelation', icon: <IconHomeCancel /> },
      ];


  return (
    <>
    <Flex p={20} direction={'column'}>
        <Flex gap={10} align='center'>
            <Title>{propertyName}</Title> <IconHeart cursor={'pointer'}/>
        </Flex>
        <Flex gap={10}> 
            <Flex gap={10}>
                <IconMapPin style={{color: '#07399E'}}/> <Text>London, United Kingdom</Text>
            </Flex>
            <Flex gap={10}>
                <IconHome2 style={{color: '#07399E'}}/> <Text>Apartment</Text>
            </Flex>
            <Flex gap={10}>
            <div style={{width: 'max-content', backgroundColor: 'black', 
            justifyContent: 'center', alignItems: 'center',display: 'flex', color: 'white', paddingLeft: 5, paddingRight: 5, 
            borderRadius: 25, gap: 5,}}><IconBrandSupernova style={{color: 'yellow'}} /> <Text>SouqPlus +</Text></div>
            </Flex>
        </Flex>
        {/* Images */}
        <Flex gap={20}>

        <Flex mt={10}>
                <div>
                    <div style={{position: 'absolute', width: 'max-content', backgroundColor: '#07399E', justifyContent: 'center', alignItems: 'center',display: 'flex', color: 'white', padding: 10, borderRadius: 25, gap: 10, marginLeft: 10, marginTop: 10}}><IconStar style={{color: 'yellow'}} /> <Text>4.5 Rating Overall</Text></div>
                    <img alt={'Property image'} style={{cursor: 'pointer', width:'500px', height: '350px', objectFit: 'cover', borderTopLeftRadius: '25px', borderBottomLeftRadius: 25}} src={'https://cf.bstatic.com/xdata/images/hotel/max1024x768/102768316.jpg?k=1256de0d1ca9655d005146bc30f1114901d115ac9fccdd59352dc5b4e4468854&o=&hp=1'}/>
                </div>
            <Flex direction={'column'} ml={5} gap={5}>
                <img alt={'Property image'} style={{cursor: 'pointer', width:'250px', height: '175px', objectFit: 'cover'}} src={'https://cf.bstatic.com/xdata/images/hotel/max1280x900/241513704.jpg?k=c7e59d9c3f0e963cb835f413b2a90ad09ca1b40d684006cd48e343cd91cc23c5&o=&hp=1'}/>
                <img alt={'Property image'} style={{cursor: 'pointer', width:'250px', height: '170px', objectFit: 'cover'}} src={'https://cf.bstatic.com/xdata/images/landmark/max1024/195026.webp?k=ea8055a5d8d72f1ee49bdd8aafe0681bbdaf6f587a80a26488a7ac8f62b67250&o='}/>
            </Flex>
            <Flex direction={'column'} ml={5} gap={5}>
                <img alt={'Property image'} style={{cursor: 'pointer', width:'250px', height: '175px', objectFit: 'cover', borderTopRightRadius: '25px'}} src={'https://cf.bstatic.com/xdata/images/hotel/max1024x768/113480998.jpg?k=b2041565cb2c3b3c5b70240675dfd5870a528de53e6c4e6c90f7006bae6d8049&o=&hp=1'}/>
                <div style={{alignContent: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className="facilityPill" style={{position: 'absolute', width: 'max-content', backgroundColor: 'rgba(0, 0, 0, 0.49)', justifyContent: 'center', alignItems: 'center',display: 'flex', color: 'white', padding: 15, borderRadius: 25, gap: 10, backdropFilter: 'blur(5px)', cursor: 'pointer'}}><Text>View More</Text></div>
                    <img alt={'Property image'} style={{cursor: 'pointer', width:'250px', height: '170px', objectFit: 'cover', borderBottomRightRadius: '25px'}} src={'https://cf.bstatic.com/xdata/images/hotel/max1024x768/283178814.jpg?k=6961936050d1cf49543de00f6e5d15f1b92faabe48091089d9f729715b4966bc&o=&hp=1'}/>
                </div>
            </Flex>
        </Flex>
        {/* Whats Near */}
            <Flex direction={'column'} gap={10}>
            
                <Title>Features</Title>
                {/* AROUND CONTENT 1 */}  
                <Flex direction={'row'} gap={5}>
                     
                    <Flex direction={'column'} gap={8}>
                    {facilities.slice(0,4).map((facility, index) => (
                        <div 
                            key={index} 
                            className="facilityPill" 
                        >
                            {facility.icon} 
                            <Text>{facility.name}</Text>
                        </div>
                        ))}
                    </Flex> 
                    <Flex direction={'column'} gap={8}>
                    {facilities.slice(4,8).map((facility, index) => (<div className="facilityPill" key={index} >{facility.icon} <Text>{facility.name}</Text></div>))}
                    </Flex> 
                </Flex>
            
            </Flex>
            {/* Whats Around */}
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
                        <IconPlane /> <Text fw={500} fz={20}>Heatrow</Text>
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