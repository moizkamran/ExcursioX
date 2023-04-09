import React, { useEffect, useState } from 'react'
import EnterpriseNav from '../../Landing Pages/Enterprise Landing/EnterpriseNav'
import { ActionIcon, Button, Container, Flex, Text } from '@mantine/core'
import { IconArrowLeft, IconArrowRight, IconMessage, IconQuestionCircle, IconUserCircle } from '@tabler/icons'
import Needs from './Pages/Needs'
import UseCase from './Pages/UseCase'
import CompnayBased from './Pages/CompnayBased'
import Verfiy from './Pages/Verfiy'
import Branding from './Pages/Branding'

const EnterpriseOnboarding = () => {

  const [page, setCurrentPage] = useState(0);

  const handleButtonClick = () => {
    setCurrentPage(currentPage => currentPage + 1);
    if (page === 2 && type === "Hotel") {
      setCurrentFloorIndex(0); // Set the current floor index to 0 when navigating to the hotel floors page
    }
  };
  const handleButtonClickBack = () => {
    setCurrentPage(currentPage => currentPage - 1);
  };

  const PageDisplay = () => {

    if (page === 0) {
      return <Needs/>;
    } else if (page === 1) {
      return (
        <UseCase />
      );
    } else if (page === 2) {
      return (
        <CompnayBased />
      );
    } else if (page === 3) {
      return (
        <Verfiy />
      );
    } else if (page === 4) {
      return <Branding />;
    } else if (page === 7) {
      return <h1>Done</h1>;
    } else {
      return <h1>ERROR</h1>;
    }
  };

  return (
    <>
    <div style={{position:'absolute', width: '100%'}}>
        <EnterpriseNav/>
    </div>
    <Container  display={'flex'} h={'100vh'} size={'100%'} px={0}>

    <Container style={{ flex: 1 }} size={'70%'} mx={50} my={100}>
    {PageDisplay()}
    <div>
    {page >= 0 && <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', position: 'fixed', bottom: 0, right: 0, marginRight: 20, marginBottom: 20 }}>

    {page >= 2 && <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#07399E',
      width: '240px',
      marginBottom: 10,
      borderRadius: 25,
      padding: 15,
      color: 'white',
    }}>
      <Text>Step {page} out of 5</Text>
      <Button style={{ backgroundColor: 'black', bottom: 0, position: 'relative', height: '50px', width: '100%', marginTop: 10 }} leftIcon={<IconMessage />}>Need Help?</Button>
    </div>}
    <div style={{ flexDirection: 'row', display: 'flex' }}>
      <ActionIcon onClick={handleButtonClickBack} radius="xl" variant="filled" disabled={page === 0} style={{ backgroundColor: 'black', height: '50px', width: '50px', marginRight: 10 }}>
        <IconArrowLeft size="1.5rem" />
      </ActionIcon>
      <Button onClick={handleButtonClick} rightIcon={<IconArrowRight />} disabled={page > 6} style={{ backgroundColor: '#07399E', height: '50px', width: '200px' }}>Next Step</Button>
    </div>
    </div>}
    </div>
    </Container>

    <Container style={{ flex: 1 }} size={'30%'} px={0}>
      <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}> </div>
    </Container>


    </Container>
    </>
  )
}



  export default EnterpriseOnboarding