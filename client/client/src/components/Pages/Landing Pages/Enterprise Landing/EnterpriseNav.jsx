import { Container, Flex, Grid, Image, Text, UnstyledButton } from '@mantine/core'
import BookingSouq from '../../../../assets/BookingSouqFavi.svg'
import styles from './enterpriseStyles.module.css'
import UserPFP from '../../../../assets/userPFP.svg'
import { IconBrandMatrix, IconDoorEnter, IconFolder, IconGlobe, IconStars, IconUsers } from '@tabler/icons'

const EnterpriseNav = () => {
  return (
    <>
    <Container size={'100%'} align={'center'} justify={'center'} px={0}>
      <Grid align={'center'} justify={'center'} px={0} m={0}>
        <Grid.Col span={'content'}>
        <div className={styles.BLOGO}><img src={BookingSouq} className={styles.BLOGOIMG}/></div>
        </Grid.Col>
        <Grid.Col span={11}>
          <Flex justify={'space-between'} sx={{backgroundColor: 'rgba(0, 0, 0, 0.65)', borderRadius: 100,  color: 'white', backdropFilter: 'blur(20.5px)'}}>
              <Flex gap={20} ml={40}>
                <UnstyledButton> <IconStars className={styles.navLinks}/> </UnstyledButton> 
                <UnstyledButton> <IconGlobe className={styles.navLinks}/> </UnstyledButton> 
                <UnstyledButton> <IconFolder className={styles.navLinks}/> </UnstyledButton> 
                <UnstyledButton> <IconUsers className={styles.navLinks}/> </UnstyledButton> 
                <UnstyledButton> <IconDoorEnter className={styles.navLinks}/> </UnstyledButton> 
              </Flex>
              <Flex justify={'center'} align={'center'} mr={5}> 
                <Text ff={'Kumbh Sans'}>Current Heading</Text>
                <Image src={UserPFP} width={40} height={40} ml={20}/>
              </Flex>
          </Flex>
        </Grid.Col>
      </Grid>
    </Container>

    </>
  )
}

export default EnterpriseNav