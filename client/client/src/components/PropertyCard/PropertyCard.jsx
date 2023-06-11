import { Badge, Flex, Image, Rating, Text, Title } from '@mantine/core'
import { IconArrowBigDownLines, IconArrowBigUpLines, IconEggCracked, IconMapPin, IconParking, IconPin, IconWifi } from '@tabler/icons'
import React from 'react'

const PropertyCard = () => {
  const heroImage = 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  const propertyTitle = 'Hilton Makkah'
  const propertyOrigin = 'Internal'
  const propertyRating = 5
  const isBookingSouqPlus = true
  const propertyLocation = 'Makkah, Saudi Arabia'
  const distanceFromEpicenter = '1.2 km'
  const epicenter = 'Haram'

  // Subscription to FOMO based values
  const subscriptionToFOMO = true
  const total_unbookedRooms = 7
  const total_bookedRooms = 3
  const total_rooms = total_unbookedRooms + total_bookedRooms

  // Room facilities top 3
  const propertyFacilities = [
    { name: 'Free Wifi', icon: <IconWifi /> },
    { name: 'Free Parking', icon: <IconParking /> },
    { name: 'Free Breakfast', icon: <IconEggCracked /> }
  ];

  return (
    <Flex bg={'#F5F5F5'} sx={{borderRadius: 40}} h={260} w={1050} align={'center'} px={10} lang='en'>
      <Image withPlaceholder radius='35px' mah={240} maw={360} src={heroImage}/>
      <Flex direction={'column'} ml={10}>

        {/* First Row */}
        <Flex align={'center'} gap={10}>
          <Title>{propertyTitle}</Title>
          <Rating readOnly count={propertyRating} value={propertyRating}/>
          {isBookingSouqPlus ? <BookingSouqPlusBadge/> : ''}</Flex>

        {/* Second Row */}
          <Flex gap={10}>
            { propertyOrigin === 'Internal' ? <InternalPropertyBadge/> : <ExternalPropertyBadge/>}
            <Flex gap={5} align={'center'}><IconMapPin/> <Text>{propertyLocation}</Text> </Flex>
            <Text c='dimmed' >{distanceFromEpicenter} from {epicenter}</Text>
            <Text c='red' >{total_unbookedRooms} left</Text>
          </Flex>

        {/* Third Row */}
        <Flex gap={10} direction={'column'} mt={10}>
          {propertyFacilities.map((facility, index) => (
            <PropertyFacilitiesPill key={index} facilityIcon={facility.icon} facilityName={facility.name} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}


function InternalPropertyBadge({}) {
  return (<Flex gap={5}><IconArrowBigDownLines color='blue' /><Text ff={'Kumbh sans'}>Internal Property</Text></Flex>);
}
function ExternalPropertyBadge({}) {
  return (<Flex gap={5}><IconArrowBigUpLines color='green' /><Text ff={'Kumbh sans'}>External Property</Text></Flex>);
}

// BookingSouq+ Member Badge 2023 All Rights Reserved
function BookingSouqPlusBadge({}) {
  return (
    <Badge sx={{backgroundColor: 'black', fontFamily: 'Kumbh Sans'}} variant="filled">
      Booking<span style={{background: 'linear-gradient(to right, #b8860b, #ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Souq+</span>
    </Badge>
  );
}

function PropertyFacilitiesPill({facilityIcon, facilityName}) {
  return (
  <Flex p={10} bg={'#FFFFFF'} maw={150} align={'center'} justify={'center'} sx={{borderRadius: 10}}> 
  <Flex gap={5}>{facilityIcon}<Text>{facilityName}</Text></Flex> </Flex>);
}

    export default PropertyCard