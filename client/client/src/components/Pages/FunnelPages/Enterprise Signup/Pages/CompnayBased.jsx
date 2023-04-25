import { Flex, Image, Text } from '@mantine/core'
import { IconPlanet, IconPresentation, IconBrandSlack, IconUserCircle, IconWorld } from '@tabler/icons'
import { motion as m } from 'framer-motion'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEnterpriseDetails } from '../../../../../Redux/Slicers/enterpriseSlice';

const CompnayBased = () => {
  const useCase = useSelector(state => state.enterprise.enterpriseDetails.basedCountry);
  const [selectedItem, setSelectedItem] = useState(useCase);
  console.log(selectedItem);

  const handleSelect = (val) => {
    setSelectedItem(val);
  };

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
  <NeedsModule description="KSA" flag="SA" 
        onSelect={handleSelect} isSelected={selectedItem === 'SA'} />
  <NeedsModule description="Pakistan" flag="PK"  
        onSelect={handleSelect} isSelected={selectedItem === 'PK'} />
  <NeedsModule description="UAE" flag="AE" 
        onSelect={handleSelect} isSelected={selectedItem === 'AE'} />
  <NeedsModule description="Iran" flag="IR" 
        onSelect={handleSelect} isSelected={selectedItem === 'IR'} />
  <NeedsModule description="Indonesia" flag="ID" 
        onSelect={handleSelect} isSelected={selectedItem === 'ID'} />
</Flex>

<Flex gap={20}>
  <NeedsModule description="Malaysia" flag="MY" 
        onSelect={handleSelect} isSelected={selectedItem === 'MY'} />
  <NeedsModule description="UK" flag="GB" 
        onSelect={handleSelect} isSelected={selectedItem === 'GB'} />
  <NeedsModule description="Uzbezistan" flag="UZ" 
        onSelect={handleSelect} isSelected={selectedItem === 'UZ'} />
  <NeedsModule description="Turmenistan" flag="TM" 
        onSelect={handleSelect} isSelected={selectedItem === 'TM'} />
  <NeedsModule description="Canada" flag="CA" 
        onSelect={handleSelect} isSelected={selectedItem === 'CA'} />
</Flex>

<Flex gap={20}>
  <NeedsModule description="Qatar" flag="QA" 
        onSelect={handleSelect} isSelected={selectedItem === 'QA'} />
  <NeedsModule description="Algeria" flag="DZ" 
        onSelect={handleSelect} isSelected={selectedItem === 'DZ'} />
  <NeedsModule description="Morocco" flag="MA" 
        onSelect={handleSelect} isSelected={selectedItem === 'MA'} />
  <NeedsModule description="Lebonnaon" flag="LB" 
        onSelect={handleSelect} isSelected={selectedItem === 'LB'} />
  <NeedsModule description="Sudan" flag="SD" 
        onSelect={handleSelect} isSelected={selectedItem === 'SD'} />
</Flex>

<Flex gap={20}>
  <NeedsModule description="Kuwait" flag="KW" 
        onSelect={handleSelect} isSelected={selectedItem === 'KW'} />
  <NeedsModule description="India" flag="IN" 
        onSelect={handleSelect} isSelected={selectedItem === 'IN'} />
  <NeedsModule description="Bangladesh" flag="BD" 
        onSelect={handleSelect} isSelected={selectedItem === 'BD'} />
  <NeedsModule description="Greece" flag="GR" 
        onSelect={handleSelect} isSelected={selectedItem === 'GR'} />
  <NeedsModule description="Spain" flag="ES" 
        onSelect={handleSelect} isSelected={selectedItem === 'ES'} />
</Flex>

<Flex gap={20}>
  <NeedsModule description="France" flag="FR" 
        onSelect={handleSelect} isSelected={selectedItem === 'FR'} />
  <NeedsModule description="Germany" flag="DE" 
        onSelect={handleSelect} isSelected={selectedItem === 'DE'} />
  <NeedsModule description="Italy" flag="IT" 
        onSelect={handleSelect} isSelected={selectedItem === 'IT'} />
  <NeedsModule description="Australia" flag="AU" 
        onSelect={handleSelect} isSelected={selectedItem === 'AU'} />
  <NeedsModule description="Global" icon={<IconWorld size={40}/>}/>
</Flex>

    </Flex>


    </m.div>
  )
}

function NeedsModule({flag ,description, icon, val, isSelected, onSelect}) {
  const dispatch = useDispatch();  


  val = flag;

  const handleClick = () => {
    onSelect(val);
    dispatch(setEnterpriseDetails({ basedCountry: val }));
  };

  return (
  <Flex w={600} h={40} justify={'flex-start'} gap={20} align={'center'} bg={isSelected ? '#222323' : '#F8F8F8'} p={25} 
  onClick={handleClick}
  sx={{
boxShadow: '0px 3.00889px 2.25667px -3.00889px rgba(0, 0, 0, 0.31)',
borderRadius: 15,
transition: 'all 0.3s ease',
cursor: 'pointer',
color: isSelected ? 'white' : 'black',
'&:hover': {
backgroundColor: '#222323',
transform: 'scale(1.09)',
color: isSelected ? 'white' : 'white'
}
}}>
      {flag? (<Image width={50} src={flag? `https://flagcdn.com/w80/${flag.toLowerCase()}.png` : ''} /> ) : ''}{icon} <Text fz={21}>{description}</Text>
    </Flex>
    );
}

export default CompnayBased