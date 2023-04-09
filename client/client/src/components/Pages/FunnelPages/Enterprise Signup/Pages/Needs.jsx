import { Container, Flex, Text } from '@mantine/core'
import { IconQuestionCircle, IconUserCircle } from '@tabler/icons'
import React from 'react'

const Needs = () => {
  return (
    <>
      <Text fz={35} ff={'Kumbh Sans'} fw={700}>Let's get to know your needs</Text>
      <Flex direction={'column'} gap={20}>
      <NeedsModule description="You are a freelancer or independent contractor"/>
      <NeedsModule description="You have a company or an agency"/>
      <NeedsModule description="You want to create a new company or agency"/>
      </Flex>
    </>
  )
}

function NeedsModule({description}) {
    return (<Flex w={500} h={60} justify={'flex-start'} gap={20} align={'center'} bg={'#F8F8F8'} p={25} sx={{
boxShadow: '0px 3.00889px 2.25667px -3.00889px rgba(0, 0, 0, 0.31)',
borderRadius: 15,
transition: 'all 0.3s ease',
cursor: 'pointer',
'&:hover': {
  backgroundColor: '#222323',
  color: 'white'
}
}}>
        <IconUserCircle size={80} color='#07399E' /> <Text fz={21}>{description}</Text>
      </Flex>);
  }

export default Needs