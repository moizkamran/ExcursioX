import React, { useEffect } from 'react'
import EnterpriseNav from '../../Landing Pages/Enterprise Landing/EnterpriseNav'
import { Container, Text } from '@mantine/core'

const EnterpriseOnboarding = () => {

  return (
    <>
    <div style={{position:'absolute', width: '100%'}}>
        <EnterpriseNav/>
    </div>
    <Container  display={'flex'} h={'100vh'} size={'100%'} px={0}>

    <Container style={{ flex: 1 }} size={'70%'} mx={50} my={100} bg={'red'}>
      <Text fz={100}>Onboarding</Text>
    </Container>
    <Container style={{ flex: 1 }} size={'30%'} px={0}>
      <div style={{ backgroundImage: 'url(https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1440&dpr=1)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}> </div>
    </Container>


    </Container>
    </>
  )
}

export default EnterpriseOnboarding