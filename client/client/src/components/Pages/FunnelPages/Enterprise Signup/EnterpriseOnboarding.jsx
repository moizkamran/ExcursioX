import React, { useEffect, useState } from 'react'
import EnterpriseNav from '../../Landing Pages/Enterprise Landing/EnterpriseNav'
import { ActionIcon, Button, Container, Flex, Text } from '@mantine/core'
import { IconArrowLeft, IconArrowRight, IconMessage, IconQuestionCircle, IconUserCircle } from '@tabler/icons'
import Needs from './Pages/Needs'
import UseCase from './Pages/UseCase'
import CompnayBased from './Pages/CompnayBased'
import Verfiy from './Pages/Verfiy'
import Branding from './Pages/Branding'
import { AnimatePresence, motion } from 'framer-motion'
import Agents from './Pages/Agents'

const backgroundImageArray = [
  "url('https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')",
  "url('https://images.unsplash.com/photo-1480944657103-7fed22359e1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')",
  "url('https://images.unsplash.com/photo-1551041777-ed277b8dd348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
  "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
  // add more image URLs here
];


const EnterpriseOnboarding = () => {
  const [backgroundImage, setBackgroundImage] = useState(backgroundImageArray[0]);


  useEffect(() => {
    document.body.style.overflow = 'hidden';
  
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const [page, setCurrentPage] = useState(0);

  const handleButtonClick = () => {
    const nextPage = page + 1;
    setBackgroundImage(backgroundImageArray[nextPage]);
    setCurrentPage(nextPage);
  };
  const handleButtonClickBack = () => {
    const nextPage = page - 1;
    setBackgroundImage(backgroundImageArray[nextPage]);
    setCurrentPage(nextPage);
  };

  const PageDisplay = () => {

    if (page === 0) {
      return (
      <AnimatePresence>
        <Needs key={page}/>
      </AnimatePresence>
      );
    } else if (page === 1) {
      return (
        <AnimatePresence>
          <UseCase key={page}/>
        </AnimatePresence>
      );
    } else if (page === 2) {
      return (
        <AnimatePresence>
        <CompnayBased key={page}/>
        </AnimatePresence>
      );
    } else if (page === 3) {
      return (
        <AnimatePresence>
        <Verfiy key={page}/>
        </AnimatePresence>
      );
    } else if (page === 4) {
      return (
        <AnimatePresence>
          <Branding key={page}/>
        </AnimatePresence>);
    } else if (page === 5) {
      return (
        <AnimatePresence>
          <Agents key={page}/>
        </AnimatePresence>);
    } else {
      return <h1>ERROR</h1>;
    }
  };

  return (
    <>
    <div style={{position:'absolute', width: '100%', zIndex: 11, overflow: 'hidden'}}>
        <EnterpriseNav/>
    </div>
    <Container  display={'flex'} h={'100vh'} size={'100%'} px={0} sx={{overflow: 'hidden'}}>

    <Container style={{ flex: 1 }} size={'70%'} mx={50} my={200} sx={{zIndex: 9, overflow: 'hidden'}}>
    {PageDisplay()}
    </Container>

    

    <Container style={{ flex: 1 }} size={'30%'} px={0} sx={{zIndex: 10}} bg={'black'}> 
      <motion.div  
      key={backgroundImage}
      initial={{ clipPath: 'inset(0 100% 0 0)', filter: 'blur(5px)', transform: 'scale(1.1)'}}
      animate={{ clipPath: 'inset(0 0 0 0)', filter: 'blur(0px)', transform: 'scale(1)' }}
      transition={{ duration: 0.8 }}
      style={{ backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}> </motion.div>
    </Container>
    <div>
    {page >= 0 && <div style={{ zIndex: 30,display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', position: 'fixed', bottom: 0, right: 0, marginRight: 20, marginBottom: 20 }}>

    {page >= 2 && <div style={{
      display: 'flex',
      zIndex: 30,
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
    </>
  )
}



  export default EnterpriseOnboarding