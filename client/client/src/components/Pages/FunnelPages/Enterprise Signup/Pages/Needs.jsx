import { Container, Flex, Text } from '@mantine/core'
import { IconQuestionCircle, IconUserCircle } from '@tabler/icons'
import { motion as m } from 'framer-motion'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEnterpriseDetails } from '../../../../../Redux/Slicers/enterpriseSlice'

const Needs = () => {
  const useCase = useSelector(state => state.enterprise.enterpriseDetails.enterpriseType);
  const [selectedItem, setSelectedItem] = useState(useCase);

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
      <Text fz={45} ff={'Kumbh Sans'} fw={700} mb={80}>Let's get to know your needs</Text>
      <Flex direction={'column'} gap={20}>
      <NeedsModule description="You are a freelancer or independent contractor" val="FLIC" isSelected={selectedItem === 'FLIC'}
        onSelect={handleSelect}/>
      <NeedsModule description="You have a company or an agency" val="CMNY" isSelected={selectedItem === 'CMNY'}
        onSelect={handleSelect}/>
      <NeedsModule description="You want to create a new company or agency" val="CRAG" isSelected={selectedItem === 'CRAG'}
        onSelect={handleSelect}/>
      </Flex>
    </m.div>
  )
}

function NeedsModule({ description, val, isSelected, onSelect }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    onSelect(val);
    dispatch(setEnterpriseDetails({ enterpriseType: val }));
  };

  return (
    <Flex
  w={500}
  h={60}
  justify={'flex-start'}
  gap={20}
  align={'center'}
  bg={isSelected ? '#222323' : '#F8F8F8'}
  p={25}
  sx={{
    boxShadow: '0px 3.00889px 2.25667px -3.00889px rgba(0, 0, 0, 0.31)',
    borderRadius: 15,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#222323',
      color: 'white',
      transform: 'scale(1.05)',
    }
  }}
  onClick={handleClick}
>
  <IconUserCircle size={80} color='#07399E' />
  <Text fz={21} color={isSelected ? 'white' : '#000'}>{description}</Text>
</Flex>

  );
}


export default Needs