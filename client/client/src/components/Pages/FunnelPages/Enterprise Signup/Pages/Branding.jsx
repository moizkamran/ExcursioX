import { Flex, Image, Text } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons'
import { motion as m } from 'framer-motion'
const Branding = () => {
  return (
    <m.div
    style={{position: 'absolute', width: '65%', height: '70%'}}
    initial={{x: '100%', opacity: 0}}
    animate={{x: "0%", opacity: 1}}
    transition={{duration: 0.75, ease: 'easeInOut'}}
    exit={{opacity: 1, x: '-100%'}}
    >
      <Text fz={45} ff={'Kumbh Sans'} fw={700} mb={10}>Almost Done, Branding</Text>
      <Text fz={18} ff={'Kumbh Sans'} fw={400} w={500}>These will appear on all of your receipts, itinerary, 
accommodation booking, simple bookings, quick bookings, 
vouchers, invoices and complete CRM branding</Text>

<Flex>
  <Flex gap={20} direction={'column'}>

      {/* ENTERPRISE EMP DETAILS */}
        <Flex direction={'column'} gap={20} mt={20}>
          {/* ENTERPRISE SIZE */}
          <Flex direction={'column'} gap={10}>
              <Text fz={25} ff={'Kumbh Sans'} fw={500}>How big is the company?</Text>
          </Flex>
        </Flex>
      
  </Flex>
  <Flex direction={'column'} gap={20} ml={50}>
    <Flex gap={10} align={'center'}>
      <Image src={'https://www.svgrepo.com/show/438412/court-round.svg'} width={60}/>
      <Text fz={25} ff={'Kumbh Sans'} fw={600}>Legal Business Proof <br/> Document</Text>
    </Flex>
    <Text fz={18} ff={'Kumbh Sans'} w={400} fw={400} >
    State law requires us to ask for valid
    proof that you have rights to conduct
    business with fields related to Aviation,
    Transport, Accommodation, 
    Travel & Tourism or Visa Services
    </Text>
    <Flex mt={-15} gap={8} align={'center'}>
      <IconArrowRight color='#07399E'/>
      <Text c={'#07399E'} >Learn More</Text>
    </Flex> 
  </Flex>
</Flex>

    </m.div>
  )
}

export default Branding