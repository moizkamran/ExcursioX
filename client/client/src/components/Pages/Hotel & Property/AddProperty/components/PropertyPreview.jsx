import { Badge, Flex, Rating, Text, Title } from '@mantine/core'
import { IconAirConditioning, IconBabyBottle, IconBath, IconBed, IconBrandSupernova, IconBus, IconCampfire, IconChevronRight, IconClothesRack, IconCoffee, IconCornerDownRight, IconEgg, IconFence, IconFlower, IconGeometry, IconGlassFull, IconHeart, IconHome2, IconHomeCancel, IconIroning1, IconMapPin, IconMapPins, IconPlane, IconPlaneArrival, IconPlant, IconPool, IconRulerMeasure, IconSmoking, IconSmokingNo, IconSpace, IconStar, IconSteeringWheel, IconTable, IconToolsKitchen, IconWalk, IconWash, IconWashMachine, IconWifi, IconWindow } from '@tabler/icons'

import { useSelector } from 'react-redux';
import { getIcon } from '../../../../../utils/getIcon';

export const PropertyPreview = () => {

    const property = useSelector((state) => state.property);

    console.log(property);
    

    const facilities_untrimed = property.propertyFacilites.facilities
    // make each facility captialize first letter of every word and sepeate words with space
    const facilities = facilities_untrimed.map(facility => facility.charAt(0).toUpperCase() + facility.slice(1).replace(/([A-Z])/g, ' $1').trim())
    
    const propertyRating = property.propertyDetails.starRating

  return (
    <>
    <Flex p={20} direction={'column'}>
        <Flex gap={10} align='center'>
            <Title>{property.propertyDetails.propertyName}</Title> <IconHeart cursor={'pointer'}/>
        </Flex>
        <Flex gap={10}> 
            <Flex gap={10}>
                <IconMapPin style={{color: '#07399E'}}/> <Text>{property.propertyDetails.streetAddress}, {property.propertyDetails.city}, {property.propertyDetails.country}</Text>
            </Flex>
            <Flex gap={10}>
                <IconHome2 style={{color: '#07399E'}}/> <Text>{property.propertyDetails.propertyTypeOf}</Text>
            </Flex>
            <Rating readOnly count={propertyRating} value={propertyRating}/>
            <BookingSouqPlusBadge/>
        </Flex>
        {/* Images */}
        <Flex gap={20}>

        <Flex mt={10}>
                <div>
                    <div style={{position: 'absolute', width: 'max-content', backgroundColor: '#07399E', justifyContent: 'center', alignItems: 'center',display: 'flex', color: 'white', padding: 10, borderRadius: 25, gap: 10, marginLeft: 10, marginTop: 10}}><IconStar style={{color: 'yellow'}} /> <Text>4.5 Rating Overall</Text></div>
                    <img alt={'Property image'} style={{cursor: 'pointer', width:'500px', height: '350px', objectFit: 'cover', borderTopLeftRadius: '25px', borderBottomLeftRadius: 25}} src={property.propertyPhotos.photos[0]}/>
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
                            {getIcon(facility)}
                            <Text>{facility}</Text>
                        </div>
                        ))}
                    </Flex> 
                    <Flex direction={'column'} gap={8}>
                    {facilities.slice(4,8).map((facility, index) => (<div className="facilityPill" key={index} >{getIcon(facility)} <Text>{facility}</Text></div>))}
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
            <Flex mt={20} direction={'column'}>
                <Title>Blueprint</Title>
            </Flex>
    </Flex>
    </>
  )
}


// BookingSouq+ Member Badge 2023 All Rights Reserved
function BookingSouqPlusBadge({}) {
    return (
      <Badge sx={{backgroundColor: 'black', fontFamily: 'Kumbh Sans'}} variant="filled">
        Booking<span style={{background: 'linear-gradient(to right, #b8860b, #ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Souq+</span>
      </Badge>
    );
  }

export default PropertyPreview