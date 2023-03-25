import React from 'react'
import { Button, Flex, Grid, Text, Title } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons'
import styles from './HotelType.module.css'

const GridBox = ({ title, text }) => {
  return (
    <Grid.Col span={3}>
      <Flex direction={'column'} className={styles.gridBox}>
        <Title fz={20} fw={500}>{title}</Title>
        <Text fz={14}>{text}</Text>
      </Flex>
    </Grid.Col>
  );
}

export const HotelType = ({ title, text }) => {
  return (
    <>
      <Flex p='20px' direction={'column'}>

        <Flex direction={'column'}>

          <Title>Hotel Type</Title>
          <Text c='dimmed'>Please choose the type of hotel you would like to add</Text>
        </Flex>


        <Flex direction={'column'} mt={30} gap={15}>
          <Grid lg={50}>
            <GridBox title='Hotel' text='Accommodations for travelers often with restaurants, meeting rooms and other guest services' />
            <GridBox title='Guest House' text='Private home with separate living facilities for host and guest' />
            <GridBox title='Bed & Breakfast' text='Private home offering overnight stays and breakfast' />
            <GridBox title='Homestay' text='A shared home where the guest has a private room and the host lives and is on site.' />
          </Grid>
          <Grid lg={50}>
            <GridBox title='Hostel' text='Budget accommodations with mostly dorm-style beds and social atmosphere' />
            <GridBox title='Condo Hotel' text='Independent apartments with some hotel facilities like a front desk' />
            <GridBox title='Capsule Hotel' text='Extremely small units or capsules offering cheap and basic overnight accommodations' />
            <GridBox title='Farm Stay' text='Private farm with simple accommodations' />
            <Button><IconChevronDown /></Button>
          </Grid>
        </Flex>


      </Flex>
    </>
  )
}


