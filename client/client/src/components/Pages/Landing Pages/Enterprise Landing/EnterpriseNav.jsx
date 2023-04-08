import { Container, Flex, Grid, Image, UnstyledButton } from '@mantine/core'
import BookingSouq from '../../../../assets/BookingSouqFavi.svg'
import styles from './enterpriseStyles.module.css'
import { IconBrandMatrix, IconStars } from '@tabler/icons'

const EnterpriseNav = () => {
  return (
    <>
    <Container size="xl" px="xl" sx={{zIndex: 2}}>
      <Grid align="center">
        <Grid.Col span={'content'} sx={{ backgroundColor: 'purple' }}>
        <div className={styles.BLOGO}><img src={BookingSouq} className={styles.BLOGOIMG}/></div>
        </Grid.Col>
        <Grid.Col span={11}>
          <Grid sx={{backgroundColor: 'rgba(0, 0, 0, 0.65)', borderRadius: 25, padding: 10, color: 'white', backdropFilter: 'blur(20.5px)'}}>
            <Grid.Col span={8}>
              <Grid
                align="center"
                justify="flex-start"
              >
                <Grid.Col span={1}><Flex>
                    <IconStars/>
                    </Flex></Grid.Col>
                <Grid.Col span={1}><Flex>
                    <IconBrandMatrix />
                    </Flex></Grid.Col>
                <Grid.Col span={1}><Flex>
                    <IconBrandMatrix />
                    </Flex></Grid.Col>
                <Grid.Col span={1}><Flex>
                    <IconBrandMatrix />
                    </Flex></Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={4} align="right">
              <Grid align="flex-end" justify='flex-end'>
                <Grid.Col span={2}>CRM</Grid.Col>
                <Grid.Col span={2}>Login</Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
    <Image mt={-50} sx={{zIndex: 1}} src={'https://images.unsplash.com/photo-1680505015992-e5550256e9a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=691&q=80'}/>
    </>
  )
}

export default EnterpriseNav