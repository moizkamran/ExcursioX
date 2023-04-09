import { Flex, Text } from '@mantine/core'
import { IconBrandSlack, IconCircleLetterA, IconPlanet, IconPresentation } from '@tabler/icons'

import {motion as m} from 'framer-motion'


const UseCase = () => {
  return (
    <m.div 
    style={{position: 'absolute', overflow: 'hidden', width: '80%'}}
    initial={{x: '100%', opacity: 0}}
    animate={{x: "0%", opacity: 1}}
    transition={{duration: 0.75, ease: 'easeInOut'}}
    exit={{opacity: 1, x: '-100%'}}
    >
    <Text fz={45} ff={'Kumbh Sans'} fw={700} mb={80}>What's your use case?</Text>
    <Flex gap={20}>
        <UseCaseWidget   icon={<IconPlanet size={100}/>} Title={<span>Travel <br/> Management</span>} Description={"Features such as SpaceView, which allows property owners and managers to view a real-time 3D View of their rooms, floors, and beds."}  />
        <UseCaseWidget   icon={<IconBrandSlack size={100}/>} Title={"Customer Relationship Management"} Description={"Organizing and using customer information to personalize experiences, identify loyal customers, and increase customer satisfaction"}  />
        <UseCaseWidget   icon={<IconPresentation size={100}/>} Title={"Sales and Revenue Management"} Description={"Providing real-time insights into sales performance, booking trends, and revenue growth to maximize revenue and profitability."}  />
    </Flex>
    </m.div>
  )
}


function UseCaseWidget({icon, Title, Description}) {
    return (<Flex direction={'column'} gap={20}>
        <Flex w={300} h={400} sx={{
padding: '25px 20px',
borderRadius: '25px',
transition: 'all 0.2s ease',
cursor: 'pointer',
'&:hover':{
    backgroundColor: '#222323',
    color: 'white',
    transform: 'scale(1.05)',
    boxShadow: '0px 3.00889px 2.25667px -3.00889px rgba(0, 0, 0, 0.31)',
}
}} bg={'#F8F8F8'} direction={'column'}>
            <div style={{
    color: '#07399E',
}}>{icon}</div>
            <Text fz={30} lh={1} fw={400} mt={20}>{Title}</Text>
            <div style={{
    flex: 1
}}></div>
            <Text c="dimmed">{Description}</Text>
        </Flex>
    </Flex>);
}

  export default UseCase