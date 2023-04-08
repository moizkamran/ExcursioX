import { Button, Container, Flex, Image, Text, Title, UnstyledButton } from '@mantine/core'
import styles from './enterpriseStyles.module.css'
import { Link } from 'react-router-dom';

import { IconBox, IconBrandAirbnb, IconBrandBooking, IconBrandMatrix, IconBuildingSkyscraper, IconLogin, IconPackage } from "@tabler/icons";

import BSWhiteLogo from '../../../../assets/booking-souq-white.svg'
import MachIcon from '../../../../assets/mach.svg'
import Footer from '../Footer';
import EnterpriseNav from './EnterpriseNav';

const EnterpriseLanding = () => {
  return (
    <>
        <Container bg={'#151515'} size={'100%'} h={'80vh'}>
            <Container size={'80%'} h={'100%'} className={styles.container}>

                {/* topNav */}
                <Flex justify={'space-between'} pt={20} >
                    <Image src={BSWhiteLogo} alt={'enterprise'} width={200}/>

                    <Flex gap={30} align={'center'}>
                        <UnstyledButton c={'white'} ff={'Kumbh Sans'}>Features</UnstyledButton>
                        <UnstyledButton c={'white'} ff={'Kumbh Sans'} fw={700}>Enterprise</UnstyledButton>
                        <UnstyledButton c={'white'} ff={'Kumbh Sans'} >Resources</UnstyledButton>
                        <UnstyledButton c={'white'} ff={'Kumbh Sans'} >Customers</UnstyledButton>
                        <Button component={Link} to="/login" bg={'rgba(255, 255, 255, 0.08)'} leftIcon={<IconLogin />}>CRM</Button>
                    </Flex>
                </Flex>
                    {/* MAIN CONTENT */}

                    <Flex justify={'space-between'} align={'center'}>
                        {/* Hero Title and CTA Button */}
                        <Flex direction={'column'} >
                            <Flex c={'white'} gap={5}>
                                <Flex align={'center'} gap={5} ><Title ff={'Kumbh Sans'} fz={50} fw={'bold'} >Manage</Title><IconBox size={50} color='#07399E'/></Flex>
                                <Flex align={'center'} gap={5} ><Title ff={'Kumbh Sans'} fz={50} fw={'bold'} >and Book</Title><IconBuildingSkyscraper size={50} color='#D57F00'/></Flex>
                            </Flex>
                            <Flex c={'white'} gap={5}>
                                <Flex align={'center'} gap={5} ><Title ff={'Kumbh Sans'} fz={50} fw={'bold'} >at the speed</Title></Flex>
                            </Flex>
                            <Flex c={'white'} gap={5}>
                                <Flex align={'center'} gap={10} ><Title ff={'Kumbh Sans'} fz={50} fw={'bold'} >of Mach</Title><Image src={MachIcon} width={50}/></Flex>
                            </Flex>
                            <Flex direction={'column'} >
                                <Flex><Button mt={20} size='md'>Try For free</Button></Flex>

                                    <Flex gap={20} mt={30}>
                                        <Flex>
                                            <div className={styles.brands}><IconBrandBooking className={styles.brandLogo}/></div>
                                            <div className={styles.brands} style={{marginLeft: -35}}><IconBrandMatrix className={styles.brandLogo}/></div>
                                            <div className={styles.brands} style={{marginLeft: -35}}><IconBrandAirbnb className={styles.brandLogo}/></div>
                                        </Flex>
                                        <Flex direction={'column'}> 
                                            <Text c='white' ff={'Kumbh Sans'} fw={700} fz={25}>150 +</Text>
                                            <Text c='white' ff={'Kumbh Sans'}>Companies Actively Registered</Text>
                                        </Flex>
                                    </Flex>

                            </Flex>
                        </Flex>

                        {/* Splice */}
                        <Flex>
                            <div style={{backgroundColor: 'red', width: '500px', height: '500px'}}>
                                
                            </div>
                        </Flex>
                    </Flex>


            </Container>
        </Container>
        <EnterpriseNav />
        <Footer />
    </>
  )
}

export default EnterpriseLanding