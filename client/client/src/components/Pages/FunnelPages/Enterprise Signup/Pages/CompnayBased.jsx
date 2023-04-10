import { Flex, Image, Text } from '@mantine/core'
import { IconPlanet, IconPresentation, IconBrandSlack, IconUserCircle, IconWorld } from '@tabler/icons'
import { motion as m } from 'framer-motion'

const CompnayBased = () => {
  return (
    <m.div 
    style={{position: 'absolute', width: '65%', height: '70%'}}
    initial={{x: '100%', opacity: 0}}
    animate={{x: "0%", opacity: 1}}
    transition={{duration: 0.75, ease: 'easeInOut'}}
    exit={{opacity: 1, x: '-100%'}}
    >
    <Text fz={45} ff={'Kumbh Sans'} fw={700} mb={80}>Where is your company based?</Text>
    <Flex direction={'column'} gap={20}>

    <Flex gap={20}>
  <NeedsModule description="KSA" flag="SA"/>
  <NeedsModule description="Pakistan" flag="PK"/>
  <NeedsModule description="UAE" flag="AE"/>
  <NeedsModule description="Iran" flag="IR"/>
  <NeedsModule description="Indonesia" flag="ID"/>
</Flex>
<Flex gap={20}>
  <NeedsModule description="Malaysia" flag="MY"/>
  <NeedsModule description="UK" flag="GB"/>
  <NeedsModule description="Uzbezistan" flag="UZ"/>
  <NeedsModule description="Turmenistan" flag="TM"/>
  <NeedsModule description="Canada" flag="CA"/>
</Flex>
<Flex gap={20}>
  <NeedsModule description="Qatar" flag="QA"/>
  <NeedsModule description="Algeria" flag="DZ"/>
  <NeedsModule description="Morocco" flag="MA"/>
  <NeedsModule description="Lebonnaon" flag="LB"/>
  <NeedsModule description="Sudan" flag="SD"/>
</Flex>
<Flex gap={20}>
  <NeedsModule description="Kuwait" flag="KW"/>
  <NeedsModule description="India" flag="IN"/>
  <NeedsModule description="Bangladesh" flag="BD"/>
  <NeedsModule description="Greece" flag="GR"/>
  <NeedsModule description="Spain" flag="ES"/>
</Flex>
<Flex gap={20}>
  <NeedsModule description="France" flag="FR"/>
  <NeedsModule description="Germany" flag="DE"/>
  <NeedsModule description="Italy" flag="IT"/>
  <NeedsModule description="Australia" flag="AU"/>
  <NeedsModule description="Global" icon={<IconWorld size={40}/>}/>
</Flex>

    </Flex>


    </m.div>
  )
}

function NeedsModule({flag ,description, icon}) {
  return (<Flex w={600} h={40} justify={'flex-start'} gap={20} align={'center'} bg={'#F8F8F8'} p={25} sx={{
boxShadow: '0px 3.00889px 2.25667px -3.00889px rgba(0, 0, 0, 0.31)',
borderRadius: 15,
transition: 'all 0.3s ease',
cursor: 'pointer',
'&:hover': {
backgroundColor: '#222323',
transform: 'scale(1.09)',
color: 'white'
}
}}>
      {flag? (<Image width={50} src={flag? `https://flagcdn.com/w80/${flag.toLowerCase()}.png` : ''} /> ) : ''}{icon} <Text fz={21}>{description}</Text>
    </Flex>);
}

export default CompnayBased